import createPool from "./lib/controllers/createPool";
import prisma from "./lib/db"

// Worker code to handle the creation of pools in chunks
declare const self: Worker;

// WorkerMessage interface
interface WorkerMessage {
    type: string;
    chunkId: string;
    data: any[];
    dex: string;
    chain: string; 
    windex: number; 
}

// Function to handle the creation of pools in chunks
self.onmessage = async (event: MessageEvent<WorkerMessage>) => {
    const { type, chunkId, data, dex, chain, windex } = event.data;

    if(type === "START") {
        try {
            // Print out how many records this worker needs to handle.
            console.log(`Worker ${chunkId} Chunk size`, data.length);

            for(const pool of data) {
                const exists = await prisma.pool.findFirst({
                    where: {
                        poolAddress: pool.PairAddress
                    }
                });

                if(exists) {
                    console.log(`Worker ${windex}`,"Pool already exists", pool.PairAddress);
                    continue;
                }

                if(!exists) {
                    console.log(`Worker ${windex}`, "Pool does not exist! Creating....", pool.PairAddress);
                }

                // If the pool address doesn't exist, then create everything.
                let result = await createPool(prisma, pool, dex, chain);

                if(!result) {
                    console.log(`Worker ${windex}`, "Pool creation failed!: ", pool.PairAddress);
                    continue;
                }

                // If the pool creation was successful, then log the result.
                console.log(`Worker ${windex}`, "Pool created successfully: ", result.poolAddress);
            }
            
            // Send a message back to the main thread indicating completion
            self.postMessage({
                type: "BATCH_COMPLETE",
                chunkId,
                success: true,
                message: `Worker ${chunkId} completed successfully`
            });
            
        } catch (error: unknown) {
            console.log(`Worker ${windex}`, "something went wrong in the Worker", error); 

            self.postMessage({
                type: "BATCH_COMPLETE",
                chunkId,
                success: false,
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
}