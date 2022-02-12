import { reviewController } from "@controllers/review.controller";
import { ExpriedJwtAuthGuard, RefreshJwtAuthGuard } from "@passport/guards/jwt.guard";
import { asyncHandler } from "@utils/asyncHandler";
import { upload } from "@utils/multer";
import { Router } from "express";

const router = Router();

// 메인 페이지 리뷰 목록
router.get("/main", asyncHandler(reviewController.getMainReviews));

// 리뷰 생성시 이미지 업로드
router.post(
  "/images",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  upload.array("img"),
  asyncHandler(reviewController.uploadImage),
);

// 유저 리뷰 목록
router.get("/user/:id", asyncHandler(reviewController.getUserReviews));

// 캠프 리뷰 목록
router.get("/camp/:location", asyncHandler(reviewController.getCampReviews));

// 리뷰 생성
router.post("/", ExpriedJwtAuthGuard, RefreshJwtAuthGuard, asyncHandler(reviewController.create));

// 리뷰 수정
router.put("/:id", ExpriedJwtAuthGuard, RefreshJwtAuthGuard, asyncHandler(reviewController.update));

// 리뷰 삭제
router.delete(
  "/:id",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  asyncHandler(reviewController.delete),
);

// 리뷰 좋아요
router.patch(
  "/:id/like",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  asyncHandler(reviewController.like),
);

// 리뷰 좋아요 취소
router.patch(
  "/:id/unlike",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  asyncHandler(reviewController.unLike),
);

export default router;
