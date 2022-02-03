import { userController } from '@src/controllers/user.controller';
import { Router } from 'express';

const router = Router();

router.get('/', userController.test);

export default router;
