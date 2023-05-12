import express, { NextFunction, Request, Response } from 'express';

import router from './routes';
import { errorHandler, invalidPathHandler } from './middlewares';

const app = express();
app.use(express.json());
app.use(router);
app.use(errorHandler);
app.use(invalidPathHandler);

export default app;
