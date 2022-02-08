// /* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import passport from "passport";
import { asyncHandler } from "@src/utils/asyncHandler";
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

export default router;
