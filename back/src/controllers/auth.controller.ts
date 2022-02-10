/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "@utils/asyncHandler";
import { jwtContents } from "@utils/constants";
import { AuthService, authService } from "@services/auth.service";
import { userService, UserService } from "@services/user.service";
import { ITokenUser } from "~types/User";

const EXPIRED = {
  access: 1000 * 60 * 20,
  refresh: 1000 * 60 * 60 * 24 * 14,
};

export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  googleOAuthCallback = async (req: Request, res: Response, next: NextFunction) => {
    asyncHandler(async (req: Request, res: Response) => {
      const _user = req.user as ITokenUser;
      const [accessToken, refreshToken] = await this.authService.signin(_user);
      const user = this.userService.getById(_user._id, { refreshToken: 0 });

      res.cookie(jwtContents.header, accessToken, {
        maxAge: EXPIRED.access,
        httpOnly: true,
      });

      res.cookie(jwtContents.header_refresh, refreshToken, {
        maxAge: EXPIRED.refresh,
        httpOnly: true,
      });

      return res.status(200).json({ status: true, user });
    })(req, res, next);
  };

  kakaoOAuthCallback = async (req: Request, res: Response, next: NextFunction) => {
    asyncHandler(async (req: Request, res: Response) => {
      const _user = req.user as ITokenUser;
      const [accessToken, refreshToken] = await this.authService.signin(_user);
      const user = this.userService.getById(_user._id, { refreshToken: 0 });

      res.cookie(jwtContents.header, accessToken, {
        maxAge: EXPIRED.access,
        httpOnly: true,
      });
      res.cookie(jwtContents.header_refresh, refreshToken, {
        maxAge: EXPIRED.refresh,
        httpOnly: true,
      });

      return res.status(200).json({ status: true, user });
    })(req, res, next);
  };
}

export const authController = new AuthController(authService, userService);
