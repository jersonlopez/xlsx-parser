const { Router } = require('express');

import { healthCheck } from '../controllers/healthCheck';

const router = Router();

router.get('/', healthCheck);

export default router;
