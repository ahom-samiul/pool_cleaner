#!/usr/bin/env bun

import { readFile, writeFile } from 'fs/promises';
import { readdir } from 'fs/promises';
import { join } from 'path';

interface Pool {
  PairAddress: string;
  Token0Name: string;
  Token0Symbol: string;
  Token0Decimals: number;
  Token0Address: string;
  Token0Reserve: string;
  Token1Name: string;
  Token1Symbol: string;
  Token1Decimals: number;
  Token1Address: string;
  Token1Reserve: string;
}

interface NewPool {
  poolAddress: string;
  token0Add: string;
  token0Name: string;
  token0Symbol: string;
  token0Decimal: number;
  token1Add: string;
  token1Name: string;
  token1Symbol: string;
  token1Decimal: number;
  poolfee: number;
  poolLiquidity: string;
  tickSpacing: number;
}

interface LowercasePool {
  pairAddress: string;
  token0Name: string;
  token0Symbol: string;
  token0Decimal: number;
  token0Address: string;
  token0Reserve: number | string;
  token1Name: string;
  token1Symbol: string;
  token1Decimal: number;
  token1Address: string;
  token1Reserve: number | string;
}

interface StringDecimalPool {
  pairAddress: string;
  token0Name: string;
  token0Symbol: string;
  token0Decimal: string;
  token0Address: string;
  token0Reserves: number | string;
  token1Name: string;
  token1Symbol: string;
  token1Decimal: string;
  token1Address: string;
  token1Reserves: number | string;
}

function isNewPool(obj: any): obj is NewPool {
  return obj && 
    typeof obj.poolAddress === 'string' &&
    typeof obj.token0Add === 'string' &&
    typeof obj.poolfee === 'number';
}

function isLowercasePool(obj: any): obj is LowercasePool {
  return obj && 
    typeof obj.pairAddress === 'string' &&
    typeof obj.token0Address === 'string' &&
    typeof obj.token0Name === 'string' &&
    typeof obj.token0Decimal === 'number' &&
    typeof obj.token0Reserve !== 'undefined';
}

function isStringDecimalPool(obj: any): obj is StringDecimalPool {
  return obj && 
    typeof obj.pairAddress === 'string' &&
    typeof obj.token0Address === 'string' &&
    typeof obj.token0Name === 'string' &&
    typeof obj.token0Decimal === 'string' &&
    typeof obj.token0Reserves !== 'undefined';
}

function convertNewPoolToPool(newPool: NewPool): Pool {
  return {
    PairAddress: newPool.poolAddress,
    Token0Name: newPool.token0Name,
    Token0Symbol: newPool.token0Symbol,
    Token0Decimals: newPool.token0Decimal,
    Token0Address: newPool.token0Add,
    Token0Reserve: "",
    Token1Name: newPool.token1Name,
    Token1Symbol: newPool.token1Symbol,
    Token1Decimals: newPool.token1Decimal,
    Token1Address: newPool.token1Add,
    Token1Reserve: "",
  };
}

function convertLowercasePoolToPool(lowercasePool: LowercasePool): Pool {
  return {
    PairAddress: lowercasePool.pairAddress,
    Token0Name: lowercasePool.token0Name,
    Token0Symbol: lowercasePool.token0Symbol,
    Token0Decimals: lowercasePool.token0Decimal,
    Token0Address: lowercasePool.token0Address,
    Token0Reserve: String(lowercasePool.token0Reserve),
    Token1Name: lowercasePool.token1Name,
    Token1Symbol: lowercasePool.token1Symbol,
    Token1Decimals: lowercasePool.token1Decimal,
    Token1Address: lowercasePool.token1Address,
    Token1Reserve: String(lowercasePool.token1Reserve),
  };
}

function convertStringDecimalPoolToPool(stringDecimalPool: StringDecimalPool): Pool {
  return {
    PairAddress: stringDecimalPool.pairAddress,
    Token0Name: stringDecimalPool.token0Name,
    Token0Symbol: stringDecimalPool.token0Symbol,
    Token0Decimals: parseInt(stringDecimalPool.token0Decimal),
    Token0Address: stringDecimalPool.token0Address,
    Token0Reserve: String(stringDecimalPool.token0Reserves),
    Token1Name: stringDecimalPool.token1Name,
    Token1Symbol: stringDecimalPool.token1Symbol,
    Token1Decimals: parseInt(stringDecimalPool.token1Decimal),
    Token1Address: stringDecimalPool.token1Address,
    Token1Reserve: String(stringDecimalPool.token1Reserves),
  };
}

// Process arrays in chunks to avoid memory issues
function processArrayInChunks(arr: any[], chunkSize: number = 1000): { data: any[]; conversions: number } {
  const result: any[] = [];
  let totalConversions = 0;
  
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    const processedChunk = chunk.map(item => {
      if (isNewPool(item)) {
        totalConversions++;
        return convertNewPoolToPool(item);
      } else if (isLowercasePool(item)) {
        totalConversions++;
        return convertLowercasePoolToPool(item);
      } else if (isStringDecimalPool(item)) {
        totalConversions++;
        return convertStringDecimalPoolToPool(item);
      } else if (item && typeof item === 'object') {
        return processValue(item);
      }
      return item;
    });
    
    result.push(...processedChunk);
    
    // Progress reporting for large arrays
    if (arr.length > 10000 && (i + chunkSize) % 10000 === 0) {
      console.log(`    Processed ${Math.min(i + chunkSize, arr.length).toLocaleString()}/${arr.length.toLocaleString()} entries (${totalConversions} conversions so far)`);
    }
  }
  
  return { data: result, conversions: totalConversions };
}

function processValue(value: any): any {
  if (Array.isArray(value)) {
    const { data } = processArrayInChunks(value);
    return data;
  } else if (value && typeof value === 'object') {
    if (isNewPool(value)) {
      return convertNewPoolToPool(value);
    } else if (isLowercasePool(value)) {
      return convertLowercasePoolToPool(value);
    } else if (isStringDecimalPool(value)) {
      return convertStringDecimalPoolToPool(value);
    } else {
      const newObj: any = {};
      for (const [key, val] of Object.entries(value)) {
        newObj[key] = processValue(val);
      }
      return newObj;
    }
  }
  return value;
}

function processData(data: any): { data: any; modified: boolean; conversions: number } {
  let conversions = 0;
  let modified = false;

  if (Array.isArray(data)) {
    console.log(`  🔧 Processing array of ${data.length.toLocaleString()} items...`);
    const { data: processedData, conversions: arrayConversions } = processArrayInChunks(data);
    conversions = arrayConversions;
    modified = conversions > 0;
    return { data: processedData, modified, conversions };
  } else if (data && typeof data === 'object') {
    const newObj: any = {};
    for (const [key, val] of Object.entries(data)) {
      if (Array.isArray(val)) {
        console.log(`  🔧 Processing "${key}" array of ${val.length.toLocaleString()} items...`);
        const { data: processedData, conversions: arrayConversions } = processArrayInChunks(val);
        newObj[key] = processedData;
        conversions += arrayConversions;
        if (arrayConversions > 0) modified = true;
      } else {
        newObj[key] = processValue(val);
      }
    }
    return { data: newObj, modified, conversions };
  }
  
  return { data, modified: false, conversions: 0 };
}

async function convertPoolsInDirectory(directoryPath: string = './') {
  try {
    const files = await readdir(directoryPath);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    console.log(`Found ${jsonFiles.length} JSON files`);
    
    let totalConverted = 0;
    let totalPools = 0;
    
    for (const file of jsonFiles) {
      const filePath = join(directoryPath, file);
      console.log(`\nProcessing: ${file}`);
      
      try {
        const startTime = Date.now();
        
        // Check memory usage
        const memBefore = process.memoryUsage();
        console.log(`  📊 Memory before: ${(memBefore.heapUsed / 1024 / 1024).toFixed(2)}MB`);
        
        // Read file
        console.log(`  📖 Reading file...`);
        const content = await readFile(filePath, 'utf-8');
        console.log(`  📏 File size: ${(content.length / 1024 / 1024).toFixed(2)}MB`);
        
        // Parse JSON
        console.log(`  🔄 Parsing JSON...`);
        const jsonData = JSON.parse(content);
        
        const memAfterParse = process.memoryUsage();
        console.log(`  📊 Memory after parse: ${(memAfterParse.heapUsed / 1024 / 1024).toFixed(2)}MB`);
        
        // Process data
        const { data: processedData, modified, conversions } = processData(jsonData);
        
        if (modified) {
          console.log(`  💾 Writing ${conversions} conversions to file...`);
          const jsonString = JSON.stringify(processedData, null, 2);
          await writeFile(filePath, jsonString);
          
          const memAfter = process.memoryUsage();
          console.log(`  📊 Memory after: ${(memAfter.heapUsed / 1024 / 1024).toFixed(2)}MB`);
          
          console.log(`✅ Converted ${conversions.toLocaleString()} pools in: ${file} (${((Date.now() - startTime) / 1000).toFixed(2)}s)`);
          totalConverted++;
          totalPools += conversions;
        } else {
          console.log(`⚪ No convertible pool objects found in: ${file} (${((Date.now() - startTime) / 1000).toFixed(2)}s)`);
        }
        
        // Force garbage collection if available
        if (global.gc) {
          global.gc();
        }
        
      } catch (error: any) {
        console.error(`❌ Error processing ${file}:`, error);
        console.error(`Stack trace:`, error.stack);
      }
    }
    
    console.log(`\n🎉 Conversion complete! Modified ${totalConverted} files with ${totalPools.toLocaleString()} total pool conversions.`);
    
  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

// Increase memory limit for large files
process.stdout.write('Starting with increased memory limits...\n');

const targetDirectory = process.argv[2] || './';
console.log(`Converting pools in directory: ${targetDirectory}`);
convertPoolsInDirectory(targetDirectory);