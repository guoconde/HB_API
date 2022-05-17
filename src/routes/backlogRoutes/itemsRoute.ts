import { Router } from 'express';
import * as itemsController from '../../controllers/backlogController/itemsController.js';
import { tokenMiddleware } from '../../middlewares/tokenMiddleware.js';

const itemsRouter = Router();

itemsRouter.get('/items', tokenMiddleware, itemsController.getItems);
itemsRouter.post('/items/new', tokenMiddleware, itemsController.insterItem);
itemsRouter.put('/items/:id', tokenMiddleware, itemsController.updateItem);
itemsRouter.delete('/items/:id', tokenMiddleware, itemsController.deleteItem);
itemsRouter.get('/items/:id', tokenMiddleware, itemsController.getItemById);

export default itemsRouter;
