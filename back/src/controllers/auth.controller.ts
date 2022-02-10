import { Request, Response, NextFunction, RequestHandler } from "express";
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

  googleOAuthCallback: RequestHandler = async (req, res) => {
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
  };

  kakaoOAuthCallback: RequestHandler = async (req, res) => {
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
  };

  signout = async (req: Request, res: Response) => {
    const { _id } = req.user as ITokenUser;

    await this.userService.updateByQuery({ _id }, { refreshToken: null });
    res.clearCookie(jwtContents.header);
    res.clearCookie(jwtContents.header_refresh);

    return res.status(201).json({ status: true });
  };
}

export const authController = new AuthController(authService, userService);
