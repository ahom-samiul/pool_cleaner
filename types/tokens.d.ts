// TypeScript interfaces based on the updated Prisma schema

interface Token {
  id: string;
  tokenName: string;
  tokenDecimals: number;
  tokenSymbol: string;
  logoUrl?: string | null;
  
  // Relationships
  addresses: TokenAddress[];
}

interface ChainRef {
  id: string;
  networkName?: string | null;
  
  // Relationships
  tokenAddresses: TokenAddress[];
  pools: Pool[];
}

interface TokenAddress {
  tokenAddress: string;
  chainId: string;
  tokenId: string;
  
  // Relationships
  token: Token;
  chain: ChainRef;
  poolsAsToken0: Pool[];
  poolsAsToken1: Pool[];
}

interface Pool {
  poolAddress: string;
  token0Address: string;
  token1Address: string;
  dexName: string;
  chainId: string;
  
  // Relationships
  chain: ChainRef;
  token0: TokenAddress;
  token1: TokenAddress;
}

// Optional: Type for composite IDs
interface TokenAddressId {
  tokenAddress: string;
  chainId: string;
}

interface PoolId {
  poolAddress: string;
  chainId: string;
}

// Optional: Types for creating new records
interface CreateTokenInput {
  id?: string; // Optional if using @default(uuid())
  tokenName: string;
  tokenDecimals: number;
  tokenSymbol: string;
  logoUrl?: string | null;
}

interface CreateChainRefInput {
  id: string;
  networkName?: string | null;
}

interface CreateTokenAddressInput {
  tokenAddress: string;
  chainId: string;
  tokenId: string;
}

interface CreatePoolInput {
  poolAddress: string;
  token0Address: string;
  token1Address: string;
  dexName: string;
  chainId: string;
}