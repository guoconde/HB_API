import { Router } from 'express';
import * as ordersController from '../../controllers/backlogController/ordersController.js';
import { tokenMiddleware } from '../../middlewares/tokenMiddleware.js';

const ordersRouter = Router();

ordersRouter.get('/orders', tokenMiddleware, ordersController.getOrders);
ordersRouter.post('/orders', tokenMiddleware, ordersController.insertOrder);

export default ordersRouter;
