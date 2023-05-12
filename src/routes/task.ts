const { Router } = require('express');

import { get, getAll, getErrors } from '../controllers/task';

const router = Router();

router.get('/', getAll);
router.get('/:taskId', get);
router.get('/:taskId/errors', getErrors);

export default router;
