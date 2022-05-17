import { Router } from 'express';
import itemsRouter from './itemsRoute.js';
import loginRouter from './loginRoute.js';
import ordersRouter from './ordersRoute.js';
import promotionsRouter from './promotionsRoute.js';
import reportsRouter from './reportsRoute.js';

const backlogRouter = Router();

backlogRouter.use(loginRouter);
backlogRouter.use(ordersRouter);
backlogRouter.use(itemsRouter);
backlogRouter.use(reportsRouter);
backlogRouter.use(promotionsRouter);

export default backlogRouter;
