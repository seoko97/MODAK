/* eslint-disable @typescript-eslint/no-explicit-any */
import passport from "passport";
import googleOAuth from "./strategies/google";
import facebookOAuth from "./strategies/facebook";
import kakaoOAuth from "./strategies/kakao";

export default () => {
  passport.use(googleOAuth);
  passport.use(facebookOAuth);
  passport.use(kakaoOAuth);

  passport.serializeUser((user: any, done: any) => {
    done(null, user);
  });

  passport.deserializeUser((obj: any, done: any) => {
    done(null, obj);
  });
};
