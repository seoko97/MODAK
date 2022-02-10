/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserModel } from "@src/models";

import { ITokenUser, IUserDocument, IUserDTO } from "@src/types/User";

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

  async updateByQuery(where: any, query = {}) {
    return await this.userModel.findOneAndUpdate(where, query, { new: true });
  }

  async test() {
    const user = await this.userModel.findOne({ email: "asd" });

    return "test";
  }

  // async getBookmarkedCampsiteById(id: string) {
  //   //const bmk = await this.userModel.findOne({ _id: id });
  // }

  async verifyToken(payload: ITokenUser, prevToken: string) {
    const user = await this.getById(payload._id);
    if (!user) return false;
    return prevToken === user.refreshToken;
  }
}

export const userService = new UserService(UserModel);
