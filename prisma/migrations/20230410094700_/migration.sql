/*
  Warnings:

  - Added the required column `imageFolderId` to the `SaleItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SaleItem" ADD COLUMN     "imageFolderId" TEXT NOT NULL;
