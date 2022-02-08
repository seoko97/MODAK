import { Model, Types } from "mongoose";
import { ICampsiteDocument } from "./Campsite";
import { IUserDocument } from "./User";

export interface IReviewDTO {
  content: string;
  photos: string[];
  author: Types.DocumentArray<IUserDocument>;
  locations: Types.DocumentArray<ICampsiteDocument>;
  shopname: string;
}

export interface IReviewDocument extends IReviewDTO {
  likes: Types.DocumentArray<IUserDocument>[];
}

export type IReviewModel = Model<IReviewDocument>;
