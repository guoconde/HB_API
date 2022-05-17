import { prisma } from '../../database.js';
import { ItemData } from '../../services/backlogServices.js';

export async function getItems() {
  const items = await prisma.items.findMany();

  return items;
}

export async function insertItem(data: ItemData) {
  const newItem = await prisma.items.create({ data });

  return newItem;
}

export async function findItem(name: string) {
  const dbItem = await prisma.items.findUnique({
    where: {
      name,
    },
  });

  return dbItem;
}
