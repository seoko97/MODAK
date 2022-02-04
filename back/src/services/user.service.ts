import { UserModel } from "@src/models";

import { IUserDocument, IUserDTO } from "@src/types/User";

export class UserService {
  constructor(private readonly userModel: typeof UserModel) {}

  async findOrCreate(userInfo: IUserDTO) {
    const currentUser = await UserModel.findOne({ email: userInfo.email });

    if (currentUser) {
      return currentUser;
    }

    const newUser = await UserModel.create({
      email: userInfo?.email,
      nickname: userInfo.nickname,
      profileImg: userInfo.profileImg,
      source: userInfo.source,
    });

    return newUser;
  }

  async test() {
    const user = await this.userModel.findOne({ email: "asd" });
    console.log(user);

    return "test";
  }
}

export const userService = new UserService(UserModel);
