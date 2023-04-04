-- AlterTable
ALTER TABLE "SaleItem" ADD COLUMN     "buyerId" INTEGER;

-- CreateTable
CREATE TABLE "Buyer" (
    "buyerId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Buyer_pkey" PRIMARY KEY ("buyerId")
);

-- AddForeignKey
ALTER TABLE "SaleItem" ADD CONSTRAINT "SaleItem_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "Buyer"("buyerId") ON DELETE SET NULL ON UPDATE CASCADE;
