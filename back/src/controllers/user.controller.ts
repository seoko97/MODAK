import { Request, Response } from 'express';

import { UserService, userService } from '@services/user.service';

import { ITokenUser, IUserDocument } from '@src/types/User';

export class UserController {
	constructor(private readonly userService: UserService) {}
	test = async (req: Request, res: Response) => {
		const modelTest = await this.userService.test();

		res.send(modelTest);
	};
}

export const userController = new UserController(userService);
