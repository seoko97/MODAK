import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { jwtContents } from "@src/utils/constants";
import { ITokenUser } from "@src/types/User";
import { RequestHandler } from "express";

const JwtOpt = {
  secretOrKey: jwtContents.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const JwtVerify = (payload: ITokenUser, done: VerifiedCallback) => {
  try {
    if (!payload) return done(null, false, { message: "로그인이 필요합니다." });

    done(null, { _id: payload._id });
  } catch (e) {
    done(e, false);
  }
};

const RefreshJwtOpt = {
  secretOrKey: jwtContents.secret,
  jwtFromRequest: ExtractJwt.fromHeader("refresh"),
};

const RefreshJwtVerify = async (payload: ITokenUser, done: VerifiedCallback) => {
  try {
    done(null, { _id: payload._id });
  } catch (e) {
    done(e, false);
  }
};

export const Jwt = new JwtStrategy(JwtOpt, JwtVerify);
export const JwtRefresh = new JwtStrategy(RefreshJwtOpt, RefreshJwtVerify);
