import { ReducerInit } from "./init";

export interface ICamp {
  _id: string;
  name: string;
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
  photos: string[];
  bookmark: string[];
  views: number;
  totalReview: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICampState {
  singleCamp: ICamp | null;
  getCamp: ReducerInit;
  bookmark: ReducerInit;
  unbookmark: ReducerInit;
}

export interface ICampsState {
  mainCamps: ICamp[];
  searchCamps: Pick<ICamp, "_id" | "name" | "lineIntro">[];
  getCamps: ReducerInit;
  getMainCamps: ReducerInit;
  getUserCamps: ReducerInit;
  search: ReducerInit;
}
