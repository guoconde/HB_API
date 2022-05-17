-- CreateEnum
CREATE TYPE "Payment" AS ENUM ('credito', 'debito', 'dinheiro', 'pix');

-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('hamburger', 'bebida', 'porcao', 'combo', 'promocao');

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "items" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "payment" "Payment" NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderItem" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "itemsId" INTEGER NOT NULL,
    "ordersId" INTEGER NOT NULL,

    CONSTRAINT "orderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "avaliable" BOOLEAN NOT NULL,
    "type" "ItemType" NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "items_name_key" ON "items"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_key" ON "users"("user");

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_ordersId_fkey" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_itemsId_fkey" FOREIGN KEY ("itemsId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
