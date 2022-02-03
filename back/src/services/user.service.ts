import { UserModel } from '@src/models';

import { IUserDocument, IUserDTO } from '@src/types/User';

export class UserService {
	constructor(private readonly userModel: typeof UserModel) {}
	async test() {
		const user = await this.userModel.findOne({ email: 'asd' });
		console.log(user);

		return 'test';
	}
}

export const userService = new UserService(UserModel);
