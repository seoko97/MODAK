import { Request, Response, RequestHandler } from "express";
import { jwtContents, url } from "@utils/constants";
import { AuthService, authService } from "@services/auth.service";
import { userService, UserService } from "@services/user.service";
import { ITokenUser } from "@type/User";

const EXPIRED = {
  access: 1000 * 60 * 60,
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

    res.cookie(jwtContents.header, accessToken, {
      maxAge: EXPIRED.access,
      httpOnly: true,
    });

    res.cookie(jwtContents.header_refresh, refreshToken, {
      maxAge: EXPIRED.refresh,
      httpOnly: true,
    });

    res.redirect(url);
  };

  kakaoOAuthCallback: RequestHandler = async (req, res) => {
    const _user = req.user as ITokenUser;
    const [accessToken, refreshToken] = await this.authService.signin(_user);

    res.cookie(jwtContents.header, accessToken, {
      maxAge: EXPIRED.access,
      httpOnly: true,
    });
    res.cookie(jwtContents.header_refresh, refreshToken, {
      maxAge: EXPIRED.refresh,
      httpOnly: true,
    });

    res.redirect(url);
  };

  signout = async (req: Request, res: Response) => {
    const { _id } = req.user as ITokenUser;

    await this.userService.updateByQuery({ _id }, { refreshToken: null });
    res.clearCookie(jwtContents.header);
    res.clearCookie(jwtContents.header_refresh);

    res.status(201).json({ status: true });
  };
}

export const authController = new AuthController(authService, userService);
