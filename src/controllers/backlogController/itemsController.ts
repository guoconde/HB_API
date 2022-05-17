import { Request, Response } from 'express';
import * as itemsRepository from '../../repositories/backlogRepositories/itemsRepository.js';
import { itemSchema } from '../../schemas/itemSchema.js';
import { conflictError, wrongSchemaError } from '../../utils/errorUtils.js';

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
