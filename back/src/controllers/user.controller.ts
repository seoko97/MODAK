import { RequestHandler } from "express";

import { UserService, userService } from "@services/user.service";

import { ReviewService, reviewService } from "@src/services/review.service";

import { ITokenUser, IUserDocument } from "@src/types/User";

export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly reviewService: ReviewService,
  ) {}

  getSigninUser: RequestHandler = async (req, res) => {
    const { _id } = req.user as ITokenUser;
    const user = await this.userService.getById(_id, { refreshToken: 0 });

    res.status(201).json({ status: true, user });
  };

  getUserInfo: RequestHandler = async (req, res) => {
    const { _id } = req.params;
    const user = await this.userService.getById(_id, { refreshToken: 0 });

    res.status(201).json({ status: true, user });
  };

  editUserInformation: RequestHandler = async (req, res) => {
    const { _id } = req.user as ITokenUser;
    const data = req.body;
    const user = await this.userService.updateByQuery({ _id }, data);
    console.log(_id);

    res.status(201).json({ status: true, user });
  };

  test: RequestHandler = async (req, res) => {
    const modelTest = await this.userService.test();

    res.send(modelTest);
  };
}

export const userController = new UserController(userService, reviewService);
