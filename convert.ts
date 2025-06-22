#!/usr/bin/env bun

import { readdir, readFile, writeFile } from 'fs/promises';
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

function isNewPool(obj: any): obj is NewPool {
  return obj && 
    typeof obj.poolAddress === 'string' &&
    typeof obj.token0Add === 'string' &&
    typeof obj.token0Name === 'string' &&
    typeof obj.token0Symbol === 'string' &&
    typeof obj.token0Decimal === 'number' &&
    typeof obj.token1Add === 'string' &&
    typeof obj.token1Name === 'string' &&
    typeof obj.token1Symbol === 'string' &&
    typeof obj.token1Decimal === 'number';
}

function convertNewPoolToPool(newPool: NewPool): Pool {
  return {
    PairAddress: newPool.poolAddress,
    Token0Name: newPool.token0Name,
    Token0Symbol: newPool.token0Symbol,
    Token0Decimals: newPool.token0Decimal,
    Token0Address: newPool.token0Add,
    Token0Reserve: "", // No direct mapping available
    Token1Name: newPool.token1Name,
    Token1Symbol: newPool.token1Symbol,
    Token1Decimals: newPool.token1Decimal,
    Token1Address: newPool.token1Add,
    Token1Reserve: "", // No direct mapping available
  };
}

function processData(data: any): { data: any; modified: boolean } {
  let modified = false;

  function processValue(value: any): any {
    if (Array.isArray(value)) {
      const newArray = value.map(processValue);
      const arrayModified = newArray.some((item, i) => item !== value[i]);
      if (arrayModified) modified = true;
      return newArray;
    } else if (value && typeof value === 'object') {
      if (isNewPool(value)) {
        modified = true;
        return convertNewPoolToPool(value);
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

  return { data: processValue(data), modified };
}

async function convertPoolsInDirectory(directoryPath: string = './') {
  try {
    const files = await readdir(directoryPath);
    const jsonFiles = files.filter(file => file.endsWith('.json'));
    
    console.log(`Found ${jsonFiles.length} JSON files`);
    
    let totalConverted = 0;
    
    for (const file of jsonFiles) {
      const filePath = join(directoryPath, file);
      console.log(`Processing: ${file}`);
      
      try {
        const content = await readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(content);
        
        const { data: processedData, modified } = processData(jsonData);
        
        if (modified) {
          await writeFile(filePath, JSON.stringify(processedData, null, 2));
          console.log(`✅ Converted pools in: ${file}`);
          totalConverted++;
        } else {
          console.log(`⚪ No newPool objects found in: ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error);
      }
    }
    
    console.log(`\n🎉 Conversion complete! Modified ${totalConverted} files.`);
    
  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

// Get directory from command line argument or use current directory
const targetDirectory = process.argv[2] || './';
convertPoolsInDirectory(targetDirectory);