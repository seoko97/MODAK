import { Router } from "express";
import scheduler from "node-schedule";
import { campsiteController } from "@controllers/campsite.controller";
import { campsiteService } from "@src/services/campsite.service";

const router = Router();

router.get("/", campsiteController.getCamps);
router.get("/:id", campsiteController.getCamp);
scheduler.scheduleJob("1 * *", async () => await campsiteService.schedule());

export default router;
