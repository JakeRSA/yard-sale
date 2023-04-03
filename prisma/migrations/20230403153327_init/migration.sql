/*
  Warnings:

  - Added the required column `title` to the `SaleItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SaleItem" (
    "itemId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "z" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_SaleItem" ("description", "itemId", "price", "status", "x", "y", "z") SELECT "description", "itemId", "price", "status", "x", "y", "z" FROM "SaleItem";
DROP TABLE "SaleItem";
ALTER TABLE "new_SaleItem" RENAME TO "SaleItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
