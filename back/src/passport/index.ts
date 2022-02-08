/* eslint-disable @typescript-eslint/no-explicit-any */
import passport from "passport";
import google from "@passport/strategies/google";
import kakao from "@passport/strategies/kakao";
import { Jwt, JwtRefresh } from "@passport/strategies/jwt";

export default () => {
  passport.initialize();

  passport.serializeUser((user: any, done: any) => {
    done(null, user);
  });

  passport.deserializeUser((obj: any, done: any) => {
    done(null, obj);
  });

  passport.use("google", google);
  passport.use("kakao", kakao);
  passport.use("jwt", Jwt);
  passport.use("refreshJwt", JwtRefresh);
};
