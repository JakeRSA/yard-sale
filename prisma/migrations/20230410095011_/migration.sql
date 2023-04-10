/*
  Warnings:

  - Changed the type of `srcFileId` on the `Image` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `imageFolderId` on the `SaleItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "srcFileId",
ADD COLUMN     "srcFileId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SaleItem" DROP COLUMN "imageFolderId",
ADD COLUMN     "imageFolderId" INTEGER NOT NULL;
