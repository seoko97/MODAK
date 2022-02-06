import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/", (_, res) => {
  res.send("Hello this is auth!");
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  },
);

router.get("/facebook", passport.authenticate("facebook", { scope: ["email"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureMessage: "Login failed" }),
  async (req, res) => {
    res.redirect("/?redirected=true");
  },
);

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakgo/callback",
  passport.authenticate("kakao", { failureMessage: "Login failed" }),
  async (req, res) => {
    res.redirect("/?redirected=true");
  },
);

export default router;
