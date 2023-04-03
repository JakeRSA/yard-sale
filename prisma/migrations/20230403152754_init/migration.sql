-- CreateTable
CREATE TABLE "Image" (
    "imageId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemId" INTEGER NOT NULL,
    "src" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    CONSTRAINT "Image_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "SaleItem" ("itemId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SaleItem" (
    "itemId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "z" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "status" TEXT NOT NULL
);
