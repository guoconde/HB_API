import { number } from 'joi';
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

export async function findItem(data: string | number) {
  let dbItem: object;

  if (typeof data === 'string') {
    dbItem = await prisma.items.findUnique({
      where: {
        name: data,
      },
    });
  }

  if (typeof data === 'number') {
    dbItem = await prisma.items.findUnique({
      where: {
        id: data,
      },
    });
  }

  return dbItem;
}

export async function updateItem(data) {
  const item = await prisma.items.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
    },
  });

  return item;
}
