import { reviewController } from "@src/controllers/review.controller";
import { ExpriedJwtAuthGuard, RefreshJwtAuthGuard } from "@src/passport/guards/jwt.guard";
import { asyncHandler } from "@src/utils/asyncHandler";
import { Router } from "express";

const router = Router();

router.get("/", ExpriedJwtAuthGuard, RefreshJwtAuthGuard, asyncHandler(reviewController.test));

export default router;
