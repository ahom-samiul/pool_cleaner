import { readdir } from "node:fs/promises"
import chain_extract from "./lib/utils/chain_extract";
import poolAddressExists from "./lib/controllers/poolAddressExists";
import dex_extract from "./lib/utils/dex_extract";
import createPool from "./lib/controllers/createPool";
import prisma from "./lib/db";

// Path to data dir 
const datapath = "./data/"

// Read dir contents
const dircontents = await readdir(datapath, { recursive: true });

// cleanup file paths
const files = dircontents
  .filter((file): file is string => typeof file === 'string' && file.endsWith('.json'))
  .map((file) => `${datapath}${file}`);

// Function to chunk an Array into smaller arrays of a specified size.
function chunkArray (arr: any[], chunkSize: number): any[][] {
  const result: any[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}


// Worker count and pool.
const WORKER_COUNT = 5;


for(let filepath of files) {
 try {
    const result = await handleFile(filepath);
    console.log('File processing result:', result);
  } catch (error) {
    console.error('File processing failed:', error);
  }
}


async function handleFile (filepath: string): Promise<{ success: boolean, message: string }> {
  const workers: Worker[] = [];

  return new Promise(async (resolve, reject) => {
    // Create worker pool
    for (let i = 0; i < WORKER_COUNT; i++) {
      const worker = new Worker(new URL("./worker.ts", import.meta.url));
      workers.push(worker);
    }

    // read the file, and extract the data and chain info.
    const file = Bun.file(filepath);
    const data = await file.json();
    const chain = chain_extract(filepath) || "";
    const dex = dex_extract(filepath) || "";

    // Read and Create Data Chunks
    const CHUNK_SIZE = Math.ceil(data.length / WORKER_COUNT); 
    let completedChunks = 0;

    // Data Chunks
    const chunks = chunkArray(data, CHUNK_SIZE);

    // Log Some of the metadata info and the chunks and data size
    console.log(`\nCurrently Processing file: ${filepath}`);
    console.log("Workers: ", WORKER_COUNT)
    console.log("Data Size: ", data.length)
    console.log("Chunks: ", chunks.length)
    console.log("Chunk Size: ", CHUNK_SIZE)

    // Handle results
    workers.forEach((worker) => {
      worker.onmessage = (event) => {
        const { type, chunkId, success, error } = event.data;
        
        if (type === "BATCH_COMPLETE") {
          completedChunks++;
          if (success) {
            console.log(`Chunk ${chunkId} completed`);
          } else {
            console.error(`Chunk ${chunkId} failed:`, error);
          }

          // Check if all chunks are completed
          if (completedChunks === chunks.length) {
            // Terminate all workers
            workers.forEach(worker => worker.terminate());
            console.log(`File ${filepath} processing completed. All workers terminated.`);
            
            resolve({
              success: true,
              message: `Successfully processed ${chunks.length} chunks from ${filepath}`
            });
          }
        }
      };

      worker.onerror = (error) => {
        console.error('Worker error:', error);
        workers.forEach(w => w.terminate());
        reject({
          success: false,
          message: `Worker error: ${error.message}`
        });
      };
    });

    // For each of the workers, do the following.
    chunks.forEach((chunk, index) => {
      const workerIndex = index % WORKER_COUNT;
      // @ts-ignore
      workers[workerIndex].postMessage({
        type: "START",
        chunkId: index,
        data: chunk,
        dex: dex,
        chain: chain,
        windex: workerIndex
      });
    });
  });
}