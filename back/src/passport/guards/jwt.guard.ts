import passport from "passport";
import { RequestHandler } from "express";
import { jwtContents } from "@utils/constants";
import { userService } from "@services/user.service";
import { authService } from "@services/auth.service";
import { ITokenUser } from "@src/types/User";

const EXPIRED = {
  access: 1000 * 60 * 20,
  refresh: 1000 * 60 * 60 * 24 * 14,
};

export const JwtAuthGurad: RequestHandler = (req, res, next) => {
  try {
    passport.authenticate("jwt", { session: false }, async (err, _user, info) => {
      if (err) return next(err);
      if (!_user) return next(info);

      req.user = _user;
      next();
    })(req, res, next);
  } catch (e) {
    next(e);
  }
};

export const ExpriedJwtAuthGuard: RequestHandler = (req, res, next) => {
  try {
    passport.authenticate("jwt", { session: false }, async (err, _user) => {
      if (err) return next(err);
      if (!_user) return next();

      req.user = _user;
      next();
    })(req, res, next);
  } catch (e) {
    next(e);
  }
};

export const RefreshJwtAuthGuard: RequestHandler = (req, res, next) => {
  try {
    if (req.user) return next();

    passport.authenticate("refreshJwt", { session: false }, async (err, _user) => {
      if (err) return next(err);
      // refreshToken이 만료되었거나 존재하지 않을경우
      if (!_user) return next(new Error("로그인이 필요합니다."));

      // refreshToken이 존재하며 유효함
      // Cookie에 저장된 토큰과 DB에 저장된 토큰과 같은지 확인 (재발급 여부)
      // 인증이 양호한지 (verify)
      const prevToken = req.headers.refresh as string;
      const validation = await userService.verifyToken(_user, prevToken);
      const isVerifiedToken = await authService.verifyRefresh(_user);

      if (!validation || !isVerifiedToken) return next(new Error("로그인이 필요합니다."));

      const [accessToken, refreshToken] = await authService.signin(_user as ITokenUser);

      res.cookie(jwtContents.header, accessToken, {
        maxAge: EXPIRED.access,
        httpOnly: true,
      });

      res.cookie(jwtContents.header_refresh, refreshToken, {
        maxAge: EXPIRED.refresh,
        httpOnly: true,
      });

      req.user = _user;

      return next();
    })(req, res, next);
  } catch (e) {
    next(e);
  }
};

export const verifyMiddleware: RequestHandler = (...arg) => {
  ExpriedJwtAuthGuard(...arg);
  RefreshJwtAuthGuard(...arg);
};

// 엑세스 토큰 만료
// 리프레시 토큰 확인
// 리프레시 토큰 사용 가능
// 액세스 토큰과 리프레시 토큰 확인
