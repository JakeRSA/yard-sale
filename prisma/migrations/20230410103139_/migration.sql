/*
  Warnings:

  - You are about to drop the column `srcFileId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `imageFolderId` on the `SaleItem` table. All the data in the column will be lost.
  - Added the required column `src` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "srcFileId",
ADD COLUMN     "src" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SaleItem" DROP COLUMN "imageFolderId";
