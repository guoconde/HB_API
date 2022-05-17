import { Router } from 'express';

const itemsRouter = Router();

itemsRouter.get('/items');
itemsRouter.post('/items/new');
itemsRouter.post('/items/:id');

export default itemsRouter;
