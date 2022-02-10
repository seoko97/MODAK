import { userController } from "@src/controllers/user.controller";
import { ExpriedJwtAuthGuard, RefreshJwtAuthGuard } from "@src/passport/guards/jwt.guard";
import { Router } from "express";

const router = Router();

router.get("/", ExpriedJwtAuthGuard, RefreshJwtAuthGuard, userController.getSigninUser);
router.get("/:_id", userController.getUserInfo);

export default router;
