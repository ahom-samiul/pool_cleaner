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

  console.log("Pool Information: ", pool);
  
  // Step 1: Get or create token0
  const token0 = await prisma.token.upsert({
    where: { tokenName: pool.Token0Name },
    update: {},
    create: {
      tokenName: pool.Token0Name,
      tokenSymbol: pool.Token0Symbol,
      tokenDecimals: pool.Token0Decimals,
      logoUrl: null
    }
  });

  // Step 2: Get or create token1
  const token1 = await prisma.token.upsert({
    where: { tokenName: pool.Token1Name },
    update: {},
    create: {
      tokenName: pool.Token1Name,
      tokenSymbol: pool.Token1Symbol,
      tokenDecimals: pool.Token1Decimals
    }
  });
  
  // Step 3: Get or create ChainRef
  const chainRef = await prisma.chainRef.upsert({
    where: { id: chainIdString },
    update: {},
    create: { id: chainIdString, networkName: chain }
  });
  
  // Step 4: Get or create token0Address
  await prisma.tokenAddress.upsert({
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
  });
  
  // Step 5: Get or create token1Address
  await prisma.tokenAddress.upsert({
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
  });
  
  // Step 6: Create the pool
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
