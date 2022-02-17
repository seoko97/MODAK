import { Router } from "express";
import { userController } from "@controllers/user.controller";
import { ExpriedJwtAuthGuard, RefreshJwtAuthGuard } from "@passport/guards/jwt.guard";
import { asyncHandler } from "@utils/asyncHandler";
import { upload } from "@utils/multer";

const router = Router();

router.get("/", ExpriedJwtAuthGuard, RefreshJwtAuthGuard, userController.getSigninUser);

router.post(
  "/image",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  upload.single("img"),
  asyncHandler(userController.uploadProfileImage),
);

router.get("/:id", userController.getUserInfo);

router.put(
  "/",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  asyncHandler(userController.editUserInformation),
);

export default router;
