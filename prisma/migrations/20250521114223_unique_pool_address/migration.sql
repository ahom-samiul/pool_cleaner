/*
  Warnings:

  - A unique constraint covering the columns `[poolAddress]` on the table `Pool` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pool_poolAddress_key" ON "Pool"("poolAddress");
