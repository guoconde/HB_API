import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import './setup.js';
import router from './routes/index.js';
import { errorHiddleware } from './middlewares/errorMiddleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);
app.use(errorHiddleware);

export default app;
