import { ICamp } from "./camp";
import { ReducerInit } from "./init";
import { IUser } from "./user";

export interface IReviewState {
  create: ReducerInit;
  edit: ReducerInit;
  delete: ReducerInit;
  like: ReducerInit;
  unlike: ReducerInit;
}

export interface IReview {
  _id: string;
  // 선택한 조건에 따른 쿼리문 생성해야함
  content: string;
  photos: string[];
  author: IUser;
  location: Pick<ICamp, "_id" | "name" | "address">;
  likes: string[];
  rating: string;
  count: number;
  created: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IReviewsState {
  mainReviews: IReview[];
  getMainReviews: ReducerInit;
  getCampReviews: ReducerInit;
  getUserReviews: ReducerInit;
}
