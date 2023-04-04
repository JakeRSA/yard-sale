/*
  Warnings:

  - You are about to drop the column `buyerId` on the `SaleItem` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `SaleItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SaleItem" DROP CONSTRAINT "SaleItem_buyerId_fkey";

-- AlterTable
ALTER TABLE "SaleItem" DROP COLUMN "buyerId",
DROP COLUMN "status";

-- CreateTable
CREATE TABLE "BuyersOnSaleItem" (
    "itemId" INTEGER NOT NULL,
    "buyerId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BuyersOnSaleItem_pkey" PRIMARY KEY ("itemId","buyerId")
);

-- AddForeignKey
ALTER TABLE "BuyersOnSaleItem" ADD CONSTRAINT "BuyersOnSaleItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "SaleItem"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuyersOnSaleItem" ADD CONSTRAINT "BuyersOnSaleItem_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "Buyer"("buyerId") ON DELETE RESTRICT ON UPDATE CASCADE;
