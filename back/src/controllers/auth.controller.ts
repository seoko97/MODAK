/* eslint-disable @typescript-eslint/no-unused-vars */
import passport from "passport";
import { Request, Response, NextFunction } from "express";
import { AuthService, authService } from "@src/services/auth.service";
import { UserService, userService } from "@src/services/user.service";
import { asyncHandler } from "@src/utils/asyncHandler";
import { ITokenUser } from "@src/types/User";

const EXPIRED = {
  access: 1000 * 60 * 20,
  refresh: 1000 * 60 * 60 * 24 * 14,
};

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  googleOAuthCallback = async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("google", { failureRedirect: "/" }),
      asyncHandler(async (req: Request, res: Response) => {
        const user = req.user as ITokenUser;

        console.log("req: ", user);
        console.log("_id: ", user.id);

        const [accessToken, refreshToken] = await this.authService.signin(user);

        res.cookie("accesstoken", accessToken, {
          maxAge: 1000 * 60 * 20,
          httpOnly: true,
        });

        res.cookie("refreshtoken", refreshToken, {
          maxAge: 1000 * 60 * 60 * 24 * 14,
          httpOnly: true,
        });

        res.redirect("/");
      });
  };

  kakaoOAuthCallback = async (req: Request, res: Response, next: NextFunction) => {
    asyncHandler(async (req: Request, res: Response) => {
      const user = req.user as ITokenUser;

      console.log("req: ", user);
      console.log("_id: ", user.id);

      const [accessToken, refreshToken] = await this.authService.signin(user);

      console.log("accessToken", accessToken);
      console.log("refreshtoken", accessToken);

      res.cookie("accesstoken", accessToken, {
        maxAge: 1000 * 60 * 20,
        httpOnly: true,
      });
      res.cookie("refreshtoken", refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 14,
        httpOnly: true,
      });

      return res.json({ status: true, data: { user } });
    })(req, res, next);
  };
}

export const authController = new AuthController(authService);
