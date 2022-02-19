import { Model, Types } from "mongoose";
import { IUserDocument } from "./User";

export interface ICampsite {
  name: string;
}
export interface ICampsiteDTO extends ICampsite {
  address: string;
  lineIntro: string;
  intro: string;
  x: number;
  y: number;
  tel: string;
  reservationUrl: string;
  animal: string;
  category: string[];
  thema: string[];
  amenities: string[];
  rental: string[];
  environment: string[];
  firstImage: string;
}

export interface ICampsiteDocument extends ICampsiteDTO {
  photos: string[];
  bookmark: Types.DocumentArray<IUserDocument>[];
  totalReview: number;
  totalBookmark: number;
  views: number;
}

export interface ICampsiteModel extends Model<ICampsiteDocument> {
  findOrCreate(camsite: ICampsiteDTO): Promise<ICampsiteDTO>;
}
