/* eslint-disable @typescript-eslint/no-explicit-any */
import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { jwtContents } from "@src/utils/constants";

const JwtOpt = {
  secretOrKey: jwtContents.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const JwtVerify = (payload: any, done: VerifiedCallback) => {
  try {
    if (!payload) {
      return done(null, false, { message: "Login required" });
    }
    done(null, { id: payload.id });
  } catch (e) {
    done(e, false);
  }
};

const RefreshJwtOpt = {
  secretOrKey: jwtContents.secret,
  jwtFromRequest: ExtractJwt.fromHeader("refresh"),
};

const RefreshJwtVerify = async (payload: any, done: VerifiedCallback) => {
  try {
    done(null, { id: payload.id });
  } catch (e) {
    done(e, false);
  }
};

export const Jwt = new JwtStrategy(JwtOpt, JwtVerify);
export const JwtRefresh = new JwtStrategy(RefreshJwtOpt, RefreshJwtVerify);
