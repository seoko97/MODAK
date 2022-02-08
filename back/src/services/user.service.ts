/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserModel } from "@src/models";

import { IUserDocument, IUserDTO } from "@src/types/User";

export class UserService {
  constructor(private readonly userModel: typeof UserModel) {}

  async findOrCreate(userInfo: IUserDTO) {
    const currentUser = await this.userModel.findOne({ email: userInfo.email });

    if (currentUser) {
      return currentUser;
    }

    const newUser = await this.userModel.create({
      email: userInfo?.email,
      nickname: userInfo.nickname,
      profileImg: userInfo.profileImg,
      source: userInfo.source,
    });

    return newUser;
  }

  async getByEmail(email: string, obj = {}): Promise<IUserDocument | null> {
    return this.userModel.findOne({ email }, obj);
  }

  async getById(id: string, obj = {}): Promise<IUserDocument | null> {
    return this.userModel.findById(id, obj);
  }

  async updateByQuery(where: any, query: any) {
    return await this.userModel.updateOne(where, query);
  }

  async test() {
    const user = await this.userModel.findOne({ email: "asd" });
    console.log(user);

    return "test";
  }
}

export const userService = new UserService(UserModel);
