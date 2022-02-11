import { Model, PopulatedDoc, Types } from "mongoose";
import { ICampsiteDocument } from "./Campsite";
import { IUserDocument } from "./User";

export interface IReviewDTO {
  content: string;
  photos: string[];
  author: PopulatedDoc<IUserDocument>;
  location: PopulatedDoc<ICampsiteDocument>;
  rating: string;
}

export interface IReviewDocument extends IReviewDTO {
  likes: Types.DocumentArray<IUserDocument>[];
  count: number;
}

export type IReviewModel = Model<IReviewDocument>;
