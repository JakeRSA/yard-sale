/*
  Warnings:

  - The primary key for the `Buyer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `buyerId` on the `Buyer` table. All the data in the column will be lost.
  - The primary key for the `Image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `imageId` on the `Image` table. All the data in the column will be lost.
  - The primary key for the `SaleItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `itemId` on the `SaleItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BuyersOnSaleItem" DROP CONSTRAINT "BuyersOnSaleItem_buyerId_fkey";

-- DropForeignKey
ALTER TABLE "BuyersOnSaleItem" DROP CONSTRAINT "BuyersOnSaleItem_itemId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_itemId_fkey";

-- AlterTable
ALTER TABLE "Buyer" DROP CONSTRAINT "Buyer_pkey",
DROP COLUMN "buyerId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Buyer_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Image" DROP CONSTRAINT "Image_pkey",
DROP COLUMN "imageId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Image_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "SaleItem" DROP CONSTRAINT "SaleItem_pkey",
DROP COLUMN "itemId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "SaleItem_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "SaleItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuyersOnSaleItem" ADD CONSTRAINT "BuyersOnSaleItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "SaleItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuyersOnSaleItem" ADD CONSTRAINT "BuyersOnSaleItem_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "Buyer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
