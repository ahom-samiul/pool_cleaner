/*
  Warnings:

  - A unique constraint covering the columns `[tokenName]` on the table `Token` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Token_tokenName_key" ON "Token"("tokenName");
