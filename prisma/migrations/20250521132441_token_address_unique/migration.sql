/*
  Warnings:

  - A unique constraint covering the columns `[tokenAddress]` on the table `TokenAddress` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TokenAddress_tokenAddress_key" ON "TokenAddress"("tokenAddress");
