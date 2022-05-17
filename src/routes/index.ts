import { Router } from 'express';
import backlogRouter from './backlogRoutes/index.js';
import costumerRouter from './costumersRoutes/index.js';

const router = Router();

router.use(costumerRouter);
router.use(backlogRouter);

export default router;
