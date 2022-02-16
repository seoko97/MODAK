import { ReducerInit } from "./init";

export interface IUser {
  intro: string;
  _id: string;
  email: string;
  nickname: string;
  profileImg: string;
  source: string;
  totalLike: number;
  reviewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserState {
  me: IUser | null;
  userInfo: IUser | null;
  signin: ReducerInit;
  signout: ReducerInit;
  getUserInfo: ReducerInit;
  editUserInfo: ReducerInit;
  uploadProfileImg: ReducerInit;
}
