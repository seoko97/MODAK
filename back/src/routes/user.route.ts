import { userController } from "@src/controllers/user.controller";
import { ExpriedJwtAuthGuard, RefreshJwtAuthGuard } from "@src/passport/guards/jwt.guard";
import { asyncHandler } from "@src/utils/asyncHandler";
import { Router } from "express";

const router = Router();

router.get("/", ExpriedJwtAuthGuard, RefreshJwtAuthGuard, userController.getSigninUser);
router.get("/:id", userController.getUserInfo);

router.put(
  "/:id",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  asyncHandler(userController.editUserInformation),
);

export default router;
