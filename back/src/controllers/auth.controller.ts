/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import { AuthService, authService } from "@src/services/auth.service";
import { asyncHandler } from "@src/utils/asyncHandler";
import { ITokenUser } from "@src/types/User";
import { jwtContents } from "@src/utils/constants";

const EXPIRED = {
  access: 1000 * 60 * 20,
  refresh: 1000 * 60 * 60 * 24 * 14,
};

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  googleOAuthCallback = async (req: Request, res: Response, next: NextFunction) => {
    asyncHandler(async (req: Request, res: Response) => {
      const user = req.user as ITokenUser;
      const [accessToken, refreshToken] = await this.authService.signin(user);

      res.cookie(jwtContents.header, accessToken, {
        maxAge: EXPIRED.access,
        httpOnly: true,
      });

      res.cookie(jwtContents.header_refresh, refreshToken, {
        maxAge: EXPIRED.refresh,
        httpOnly: true,
      });

      return res.json({ status: true });
    })(req, res, next);
  };

  kakaoOAuthCallback = async (req: Request, res: Response, next: NextFunction) => {
    asyncHandler(async (req: Request, res: Response) => {
      const user = req.user as ITokenUser;
      const [accessToken, refreshToken] = await this.authService.signin(user);

      res.cookie(jwtContents.header, accessToken, {
        maxAge: EXPIRED.access,
        httpOnly: true,
      });
      res.cookie(jwtContents.header_refresh, refreshToken, {
        maxAge: EXPIRED.refresh,
        httpOnly: true,
      });

      return res.json({ status: true });
    })(req, res, next);
  };
}

export const authController = new AuthController(authService);
