import { reviewController } from "@src/controllers/review.controller";
import { ExpriedJwtAuthGuard, RefreshJwtAuthGuard } from "@src/passport/guards/jwt.guard";
import { asyncHandler } from "@src/utils/asyncHandler";
import { upload } from "@src/utils/multer";
import { Router } from "express";

const router = Router();

router.get(
  "/",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  asyncHandler(reviewController.getReviews),
);
router.post("/", ExpriedJwtAuthGuard, RefreshJwtAuthGuard, asyncHandler(reviewController.create));

router.post(
  "/images",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  upload.array("img"),
  asyncHandler(reviewController.uploadImage),
);

router.put("/:id", ExpriedJwtAuthGuard, RefreshJwtAuthGuard, asyncHandler(reviewController.update));
router.delete(
  "/:id",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  asyncHandler(reviewController.delete),
);

export default router;
