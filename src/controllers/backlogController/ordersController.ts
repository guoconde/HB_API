import { Request, Response } from 'express';
import * as ordersRepository from '../../repositories/backlogRepositories/ordersRepository.js';

export async function getOrders(req: Request, res: Response) {
  const orders = await ordersRepository.getOrders();

  return res.send(orders);
}

export async function insertOrder(req: Request, res: Response) {
  const data = req.body;

  console.log(data);

  await ordersRepository.insertOrders(data);

  res.sendStatus(200);
}
