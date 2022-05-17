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
  const data = req.body;

  const dbItem = await itemsRepository.findItem(data.id);
  if (!dbItem) throw notFoundError();

  const conflictItem = await itemsRepository.findItem(data.name);
  if (conflictItem) throw conflictError();

  await itemsRepository.updateItem(data);

  res.sendStatus(200);
}
