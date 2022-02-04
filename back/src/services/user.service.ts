import { UserModel } from "@src/models";

import { IUserDocument, IUserDTO } from "@src/types/User";

export class UserService {
  constructor(private readonly userModel: typeof UserModel) {}
  async test() {
    const user = await this.userModel.findOne({ email: "asd" });
    console.log(user);

    return "test";
  }
}

export const findOrCreate = async (user: IUserDTO) => {
  const currentUser = await UserModel.findOne(user.email);

  if (currentUser) {
    return currentUser;
  }

  const newUser = await UserModel.create({
    email: user?.email,
    firstName: user.firstName,
    lastName: user.lastName,
    nickname: user.nickname,
    profileImg: user.profileImg,
    source: user.source,
  });

  return newUser;
};

export const userService = new UserService(UserModel);
