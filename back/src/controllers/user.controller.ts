import { Request, Response } from "express";

import { UserService, userService } from "@services/user.service";

import { ITokenUser, IUserDocument } from "@src/types/User";

export class UserController {
  constructor(private readonly userService: UserService) {}

  getSigninUser = async (req: Request, res: Response) => {
    const { _id } = req.user as ITokenUser;
    const user = await this.userService.getById(_id, { refreshToken: 0 });

    res.status(201).json({ status: true, user });
  };

  getUserInfo = async (req: Request, res: Response) => {
    const { _id } = req.params;
    const user = await this.userService.getById(_id, { refreshToken: 0 });

    res.status(201).json({ status: true, user });
  };
}

export const userController = new UserController(userService);
