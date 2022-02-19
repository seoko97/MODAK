import { Router } from "express";
import passport from "passport";
import { ExpriedJwtAuthGuard, RefreshJwtAuthGuard } from "@passport/guards/jwt.guard";
import { asyncHandler } from "@utils/asyncHandler";
import { authController } from "@controllers/auth.controller";

const router = Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/api/auth" }),
  asyncHandler(authController.googleOAuthCallback),
);

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", { failureRedirect: "/api/auth" }),
  asyncHandler(authController.kakaoOAuthCallback),
);

router.post("/signout", ExpriedJwtAuthGuard, RefreshJwtAuthGuard, authController.signout);

export default router;
