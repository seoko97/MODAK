/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import passport from "passport";
import { asyncHandler } from "@src/utils/asyncHandler";
import { authService } from "@src/services/auth.service";

const router = Router();

router.get("/", (_, res) => {
  res.send("Hello this is auth!");
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  asyncHandler(async (req: any, res: any) => {
    const { user } = req;

    console.log("req: ", user);
    console.log("_id: ", user._id);
    const [accessToken, refreshToken] = await authService.signin(user._id.toJSON());
    res.cookie("accesstoken", accessToken, {
      maxAge: 1000 * 60 * 20,
      HttpOnly: true,
    });
    res.cookie("refreshtoken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 14,
      HttpOnly: true,
    });
    res.redirect("/");
  }),
);

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", { failureRedirect: "/" }),
  asyncHandler(async (req: any, res: any) => {
    const { user } = req;
    console.log("req: ", user);
    console.log("_id: ", user._id);
    const [accessToken, refreshToken] = await authService.signin(user._id);
    console.log("accessToken", accessToken);
    console.log("refreshtoken", accessToken);
    res.cookie("accesstoken", accessToken, {
      maxAge: 1000 * 60 * 20,
      HttpOnly: true,
    });
    res.cookie("refreshtoken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 14,
      HttpOnly: true,
    });
    res.redirect("/");
  }),
);

export default router;
