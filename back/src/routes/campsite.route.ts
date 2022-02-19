import { Router } from "express";
import scheduler from "node-schedule";
import { campsiteController } from "@controllers/campsite.controller";
import { campsiteService } from "@services/campsite.service";
import { ExpriedJwtAuthGuard, RefreshJwtAuthGuard } from "@passport/guards/jwt.guard";
import { prod } from "@utils/constants";

const router = Router();

// 캠핑장 리스트
router.get("/", campsiteController.getCamps);

// 메인페이지 캠핑장 리스트
router.get("/main", campsiteController.getMainCamps);

// 유저가 북마크한 캠핑장 정보
router.get("/user/:userId", campsiteController.getUserCamps);

// 캠핑장 검색
router.get("/search/:keyword", campsiteController.search);

// 캠핑장 상세 정보
router.get("/:id", campsiteController.getCamp);

// 북마크
router.patch(
  "/:id/bookmark",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  campsiteController.bookmark,
);

// 북마크 취소
router.patch(
  "/:id/unbookmark",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  campsiteController.unBookmark,
);

if (prod) scheduler.scheduleJob("1 * *", async () => await campsiteService.schedule());

export default router;
