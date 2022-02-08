import { Document, Model, PopulatedDoc } from "mongoose";
import { ICampsiteDocument } from "./Campsite";
import { IReviewDocument } from "./Review";

export interface ITokenUser {
  _id: string;
}

export interface IUserDTO {
  email: string;
  nickname: string;
  profileImg: string | null;
  source: "Google" | "Kakao" | "Facebook";
}

export interface IUserDocument extends IUserDTO, Document {
  refreshToken: string | null;
  reviews: PopulatedDoc<IReviewDocument>[];
  bookmark: PopulatedDoc<ICampsiteDocument>[];

  comparePassword(aPassword: string): Promise<boolean>;
  verifyRefresh(): boolean;
}

export interface IUserModel extends Model<IUserDocument> {
  hashPassword(userData: IUserDTO): Promise<void>;
}
