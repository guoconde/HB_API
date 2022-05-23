import { prisma } from '../../database.js';

export async function getOrders() {
  const orders = await prisma.orders.findMany();

  return orders;
}

export async function insertOrders(data: any) {
  console.log('1');
  const teste = await prisma.orders.create({ data });
  console.log('2');

  console.log(teste);
}
