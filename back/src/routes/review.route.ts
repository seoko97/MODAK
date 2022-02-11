import { reviewController } from "@controllers/review.controller";
import { ExpriedJwtAuthGuard, RefreshJwtAuthGuard } from "@passport/guards/jwt.guard";
import { asyncHandler } from "@utils/asyncHandler";
import { upload } from "@utils/multer";
import { Router } from "express";

const router = Router();

router.get(
  "/",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  asyncHandler(reviewController.getUserReviews),
);

router.get("/main", asyncHandler(reviewController.getMainReviews));

router.get("/:location", asyncHandler(reviewController.getReviews));

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

router.patch(
  "/:id/like",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  asyncHandler(reviewController.like),
);
router.patch(
  "/:id/unlike",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  asyncHandler(reviewController.unLike),
);

export default router;
