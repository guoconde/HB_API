import { Router } from 'express';
import * as itemsController from '../../controllers/backlogController/itemsController.js';

const itemsRouter = Router();

itemsRouter.get('/items', itemsController.getItems);
itemsRouter.post('/items/new', itemsController.insterItem);
itemsRouter.put('/items/:id', itemsController.updateItem);

export default itemsRouter;
