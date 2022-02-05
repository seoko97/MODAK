/* eslint-disable @typescript-eslint/no-explicit-any */
import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { jwtContents } from "@src/utils/constants";

const JwtOpts = {
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

export default new JwtStrategy(JwtOpts, JwtVerify);
