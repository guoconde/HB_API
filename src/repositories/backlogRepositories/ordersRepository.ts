import { prisma } from '../../database.js';

export async function getOrders() {
  const orders = await prisma.orders.findMany();

  return orders;
}

export async function insertOrders(data: any) {
  const teste = await prisma.orderItem.createMany({
    data: [data.items[0], data.items[1]],
  });

  console.log(teste);
}
