/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_ordersId_fkey";

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "items" TEXT[];

-- DropTable
DROP TABLE "Order";
