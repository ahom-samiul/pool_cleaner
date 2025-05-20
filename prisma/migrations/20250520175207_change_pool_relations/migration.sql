-- AddForeignKey
ALTER TABLE "Pool" ADD CONSTRAINT "Pool_token1Address_chainId_fkey" FOREIGN KEY ("token1Address", "chainId") REFERENCES "TokenAddress"("tokenAddress", "chainId") ON DELETE RESTRICT ON UPDATE CASCADE;
