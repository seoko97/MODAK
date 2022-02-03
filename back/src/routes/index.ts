import { Router } from 'express';
import userRouter from './user.route';
import campRouter from './campsite.route';

const router = Router();

router.use('/user', userRouter);
router.use('/camp', campRouter);

export default router;
