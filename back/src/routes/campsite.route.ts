import { Router } from 'express';
import scheduler from 'node-schedule';
import { campsiteController } from '@controllers/campsite.controller';
const router = Router();

router.get('/', campsiteController.test);

scheduler.scheduleJob('1 * *', async () => {
	console.log('@@ request', new Date());
	await campsiteController.schedule();
	console.log('@@ success', new Date());
});

export default router;
