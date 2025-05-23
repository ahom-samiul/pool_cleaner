import { PrismaClient } from "../../prisma/generated/prisma";
import chainref from "../constants/chainref";

interface pool {
  PairAddress: string,
  Token0Name: string,
  Token0Symbol: string,
  Token0Decimals: number,
  Token0Address: string,
  Token0Reserve: string,
  Token1Name: string,
  Token1Symbol: string,
  Token1Decimals: number,
  Token1Address: string,
  Token1Reserve: string,
}

async function createPool(prisma: PrismaClient, pool: pool, dexName: string, chain: string) {
  // @ts-ignore
  const chainId: number = chainref[chain];
  const chainIdString = chainId.toString();
  
  // Step 1: Run independent operations in parallel
  const [token0, token1, chainRef] = await Promise.all([
    // Get or create token0
    prisma.token.upsert({
      where: { tokenName: pool.Token0Name },
      update: {},
      create: {
        tokenName: pool.Token0Name,
        tokenSymbol: pool.Token0Symbol,
        tokenDecimals: pool.Token0Decimals,
        logoUrl: null
      }
    }),
    
    // Get or create token1
    prisma.token.upsert({
      where: { tokenName: pool.Token1Name },
      update: {},
      create: {
        tokenName: pool.Token1Name,
        tokenSymbol: pool.Token1Symbol,
        tokenDecimals: pool.Token1Decimals,
        logoUrl: null
      }
    }),
    
    // Get or create ChainRef
    prisma.chainRef.upsert({
      where: { id: chainIdString },
      update: {},
      create: { id: chainIdString, networkName: chain }
    })
  ]);
  
  // Step 2: Create token addresses in parallel (they depend on token IDs from step 1)
  await Promise.all([
    prisma.tokenAddress.upsert({
      where: {
        tokenAddress_chainId: {
          tokenAddress: pool.Token0Address,
          chainId: chainIdString
        }
      },
      update: {},
      create: {
        tokenAddress: pool.Token0Address,
        chainId: chainIdString,
        tokenId: token0.id
      }
    }),
    
    prisma.tokenAddress.upsert({
      where: {
        tokenAddress_chainId: {
          tokenAddress: pool.Token1Address,
          chainId: chainIdString
        }
      },
      update: {},
      create: {
        tokenAddress: pool.Token1Address,
        chainId: chainIdString,
        tokenId: token1.id
      }
    })
  ]);
  
  // Step 3: Create the pool (depends on previous steps)
  const res = await prisma.pool.create({
    data: {
      poolAddress: pool.PairAddress,
      dexName: dexName,
      token0Address: pool.Token0Address,
      token1Address: pool.Token1Address,
      chainId: chainIdString
    }
  });
  
  return res;
}

export default createPool;