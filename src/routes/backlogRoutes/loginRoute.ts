import { Router } from 'express';
import * as loginController from '../../controllers/backlogController/loginController.js';

const loginRouter = Router();

loginRouter.post('/login', loginController.login);
loginRouter.post('/newuser', loginController.insertUser);

export default loginRouter;
