import JwtService from "jsonwebtoken";
import { ITokenUser } from "@src/types/User";
import { jwtContents } from "@src/utils/constants";
import { userService, UserService } from "./user.service";
import { encryptValue } from "@src/utils/crypto";

export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: typeof JwtService,
  ) {}

  async signin(payload: ITokenUser) {
    const accessToken = this.jwtService.sign(payload, jwtContents.secret, { expiresIn: "1h" });
    const refreshToken = this.jwtService.sign(payload, jwtContents.secret, { expiresIn: "14d" });

    await this.userService.updateByQuery({ _id: payload._id }, { refreshToken });
    return [encryptValue(accessToken), encryptValue(refreshToken)];
  }

  async verifyRefresh(payload: ITokenUser) {
    const user = await this.userService.getById(payload._id);

    if (!user) return false;

    return user.verifyRefresh();
  }
}

export const authService = new AuthService(userService, JwtService);
