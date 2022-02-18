import { RequestHandler } from "express";
import fs from "fs";
import { UserService, userService } from "@services/user.service";
import { ITokenUser } from "@src/types/User";
import { checkValid } from "@src/utils/checkIdValid";
import resizeImage from "@src/utils/resizeImage";

try {
  fs.accessSync("uploads");
} catch (error) {
  fs.mkdirSync("uploads");
}
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

    console.log(user);

    res.status(200).json({ status: true, user });
  };

  editUserInformation: RequestHandler = async (req, res) => {
    const { _id } = req.user as ITokenUser;

    const data = req.body;
    const user = await this.userService.updateByQuery({ _id }, data);

    res.status(201).json({ status: true, user });
  };

  uploadProfileImage: RequestHandler = async (req, res, next) => {
    const photo = req.file as Express.Multer.File;

    if (!photo) return next({ message: "이미지가 존재하지 않습니다." });

    await resizeImage([photo]);

    const image = photo.filename;

    res.json({ status: true, image });
  };
}

export const userController = new UserController(userService);
