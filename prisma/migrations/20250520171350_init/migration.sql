-- CreateTable
CREATE TABLE "Token" (
    "tokenId" TEXT NOT NULL,
    "tokenName" TEXT NOT NULL,
    "tokenDecimals" INTEGER NOT NULL,
    "tokenSymbol" TEXT NOT NULL,
    "logoUrl" TEXT,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("tokenId")
);

-- CreateTable
CREATE TABLE "ChainRef" (
    "chainId" TEXT NOT NULL,
    "networkName" TEXT,

    CONSTRAINT "ChainRef_pkey" PRIMARY KEY ("chainId")
);

-- CreateTable
CREATE TABLE "TokenAddress" (
    "tokenAddress" TEXT NOT NULL,
    "chainId" TEXT NOT NULL,
    "tokenId" TEXT NOT NULL,

    CONSTRAINT "TokenAddress_pkey" PRIMARY KEY ("tokenAddress","chainId")
);

-- CreateTable
CREATE TABLE "Pool" (
    "poolAddress" TEXT NOT NULL,
    "token0Address" TEXT NOT NULL,
    "token1Address" TEXT NOT NULL,
    "dexName" TEXT NOT NULL,
    "chainId" TEXT NOT NULL,

    CONSTRAINT "Pool_pkey" PRIMARY KEY ("poolAddress","chainId")
);

-- AddForeignKey
ALTER TABLE "TokenAddress" ADD CONSTRAINT "TokenAddress_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "Token"("tokenId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TokenAddress" ADD CONSTRAINT "TokenAddress_chainId_fkey" FOREIGN KEY ("chainId") REFERENCES "ChainRef"("chainId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pool" ADD CONSTRAINT "Pool_chainId_fkey" FOREIGN KEY ("chainId") REFERENCES "ChainRef"("chainId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pool" ADD CONSTRAINT "Pool_token0Address_chainId_fkey" FOREIGN KEY ("token0Address", "chainId") REFERENCES "TokenAddress"("tokenAddress", "chainId") ON DELETE RESTRICT ON UPDATE CASCADE;
