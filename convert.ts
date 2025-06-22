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
    typeof obj.token0Decimal === 'number';
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

function processData(data: any): { data: any; modified: boolean; conversions: number } {
  let modified = false;
  let conversions = 0;

  function processValue(value: any): any {
    if (Array.isArray(value)) {
      const newArray = value.map(processValue);
      const arrayModified = newArray.some((item, i) => item !== value[i]);
      if (arrayModified) modified = true;
      return newArray;
    } else if (value && typeof value === 'object') {
      if (isNewPool(value)) {
        modified = true;
        conversions++;
        return convertNewPoolToPool(value);
      } else if (isLowercasePool(value)) {
        modified = true;
        conversions++;
        return convertLowercasePoolToPool(value);
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

  return { data: processValue(data), modified, conversions };
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
      console.log(`Processing: ${file}`);
      
      try {
        const startTime = Date.now();
        
        // Read file
        console.log(`  📖 Reading file...`);
        const content = await readFile(filePath, 'utf-8');
        
        // Parse JSON
        console.log(`  🔄 Parsing JSON (${(content.length / 1024 / 1024).toFixed(2)}MB)...`);
        const jsonData = JSON.parse(content);
        
        // Process data
        console.log(`  🔧 Converting pools...`);
        const { data: processedData, modified, conversions } = processData(jsonData);
        
        if (modified) {
          // Write file
          console.log(`  💾 Writing file with ${conversions} conversions...`);
          await writeFile(filePath, JSON.stringify(processedData, null, 2));
          console.log(`✅ Converted ${conversions} pools in: ${file} (${((Date.now() - startTime) / 1000).toFixed(2)}s)`);
          totalConverted++;
          totalPools += conversions;
        } else {
          console.log(`⚪ No convertible pool objects found in: ${file} (${((Date.now() - startTime) / 1000).toFixed(2)}s)`);
        }
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error);
      }
    }
    
    console.log(`\n🎉 Conversion complete! Modified ${totalConverted} files with ${totalPools} total pool conversions.`);
    
  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

// Get directory from command line argument or use current directory
const targetDirectory = process.argv[2] || './';
console.log(`Starting conversion in directory: ${targetDirectory}`);
convertPoolsInDirectory(targetDirectory);