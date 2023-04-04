-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_imageId_fkey";

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "SaleItem"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;
