import { PrismaClient } from "./prisma/generated/prisma";
import { readdir } from "node:fs/promises"
import chain_extract from "./lib/utils/chain_extract";
import poolAddressExists from "./lib/controllers/poolAddressExists";
import dex_extract from "./lib/utils/dex_extract";
import createPool from "./lib/controllers/createPool";

// PrismaClient Instance
const prisma = new PrismaClient();

// Path to data dir 
const datapath = "./data/"

// Read dir contents
const dircontents = await readdir(datapath, { recursive: true });

// cleanup file paths
const files = dircontents
  .filter((file): file is string => typeof file === 'string' && file.endsWith('.json'))
  .map((file) => `${datapath}${file}`);

// For each of the files do the following.
for (const filepath of files) {
  // read the file, and extract the data and chain info.
  const file = Bun.file(filepath);
  const data = await file.json();
  const chain = chain_extract(filepath) || "";
  const dex = dex_extract(filepath) || "";

  // Log the current file and number of entries
  console.log(`\nProcessing file: ${filepath}`);
  console.log(`File contains ${data.length} pools`);

  // For each of the pools in the files, do the following.
  for (let i = 0; i < data.length; i++) {
    const pool = data[i];
    console.log(`Processing pool ${i + 1}/${data.length}: ${pool.PairAddress}`);
    
    // Check if the pool address already exists in the database.
    const exists = await poolAddressExists(prisma, pool.PairAddress);

    // If the pool address already exists in the database, then continue;
    if (exists) {
      console.log(`Pool already exists: ${pool.PairAddress}`);
      continue;
    }

    // If the pool address doesn't exist, then create everything. 
    const res = await createPool(prisma, pool, dex, chain);
    console.log(`Pool created: ${pool.PairAddress}`);

  }
  console.log(`Completed processing file: ${filepath}`);
}