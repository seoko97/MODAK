import { Router } from "express";
import scheduler from "node-schedule";
import dotenv from "dotenv";
import { campsiteController } from "@controllers/campsite.controller";
import { campsiteService } from "@src/services/campsite.service";
import { ExpriedJwtAuthGuard, RefreshJwtAuthGuard } from "@src/passport/guards/jwt.guard";

dotenv.config();
const router = Router();

router.get("/", campsiteController.getCamps);
router.get("/main", campsiteController.getMainCamps);
router.get("/:id", campsiteController.getCamp);
router.patch(
  "/:id/bookmark",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  campsiteController.bookmark,
);
router.patch(
  "/:id/unBookmark",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  campsiteController.unBookmark,
);

if (process.env.NODE_ENV !== "test")
  scheduler.scheduleJob("1 * *", async () => await campsiteService.schedule());

export default router;
