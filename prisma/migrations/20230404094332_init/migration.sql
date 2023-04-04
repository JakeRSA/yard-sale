-- CreateTable
CREATE TABLE "Image" (
    "imageId" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "src" TEXT NOT NULL,
    "filename" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("imageId")
);

-- CreateTable
CREATE TABLE "SaleItem" (
    "itemId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "z" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "SaleItem_pkey" PRIMARY KEY ("itemId")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "SaleItem"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;
