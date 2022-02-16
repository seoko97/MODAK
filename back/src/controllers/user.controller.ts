import { RequestHandler } from "express";
import { UserService, userService } from "@services/user.service";
import { ITokenUser } from "@src/types/User";
import { checkValid } from "@src/utils/checkIdValid";

export class UserController {
  constructor(private readonly userService: UserService) {}

  getSigninUser: RequestHandler = async (req, res) => {
    const { _id } = req.user as ITokenUser;
    const user = await this.userService.getById(_id, { refreshToken: 0 });

    res.status(200).json({ status: true, user });
  };

  getUserInfo: RequestHandler = async (req, res, next) => {
    const { id } = req.params;

    if (!checkValid(id)) return next({ message: "존재하지 않는 유저입니다." });
    const user = await this.userService.getById(id, { refreshToken: 0 });

    res.status(200).json({ status: true, user });
  };

  editUserInformation: RequestHandler = async (req, res, next) => {
    const { _id } = req.user as ITokenUser;
    const { id } = req.params;

    if (!checkValid(id)) return next({ message: "존재하지 않는 유저입니다." });
    if (_id !== id) return next({ message: "내 정보만 수정할 수 있습니다." });

    const data = req.body;
    const user = await this.userService.updateByQuery({ _id }, data);

    res.status(201).json({ status: true, user });
  };
}

export const userController = new UserController(userService);
