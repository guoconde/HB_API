import { Request, Response } from 'express';
import * as itemsRepository from '../../repositories/backlogRepositories/itemsRepository.js';
import { itemSchema } from '../../schemas/itemSchema.js';
import {
  conflictError,
  notFoundError,
  wrongSchemaError,
} from '../../utils/errorUtils.js';

export async function getItems(req: Request, res: Response) {
  const items = await itemsRepository.getItems();

  res.send(items);
}

export async function getItemById(req: Request, res: Response) {
  const { id } = req.params;

  const item = await itemsRepository.findItem(parseInt(id));
  if (!item) throw notFoundError();

  res.send(item);
}

export async function insterItem(req: Request, res: Response) {
  const data = req.body;

  const validation = itemSchema.validate(req.body);
  if (validation.error) throw wrongSchemaError();

  const dbItem = await itemsRepository.findItem(data.name);
  if (dbItem) throw conflictError();

  await itemsRepository.insertItem(data);

  res.sendStatus(200);
}

export async function updateItem(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;

  const validation = itemSchema.validate(req.body);
  if (validation.error) throw wrongSchemaError();

  const dbItem = await itemsRepository.findItem(parseInt(id));
  if (!dbItem) throw notFoundError();

  const conflictItem = await itemsRepository.findItem(data.name);
  if (conflictItem && conflictItem.id !== parseInt(id)) throw conflictError();

  await itemsRepository.updateItem(parseInt(id), data);

  res.sendStatus(200);
}

export async function deleteItem(req: Request, res: Response) {
  const { id } = req.params;

  const dbItem = await itemsRepository.findItem(parseInt(id));
  if (!dbItem) throw notFoundError();

  await itemsRepository.deleteItem(parseInt(id));
  res.sendStatus(200);
}
