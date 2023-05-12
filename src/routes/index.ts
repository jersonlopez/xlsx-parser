import { Router } from 'express';

import healthCheckRouter from './healthCheck';
import uploadsRouter from './upload';
import tasksRouter from './task';

const router = Router();

router.use('/health', healthCheckRouter);
router.use('/uploads', uploadsRouter);
router.use('/tasks', tasksRouter);

export default router;
