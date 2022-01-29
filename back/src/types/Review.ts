import { Model, PopulatedDoc } from 'mongoose';
import { IUserDocument } from './User';

export interface IReviewDTO {
	content: string;
	photos: string[];
	author: PopulatedDoc<IUserDocument>;
	locations: string;
	shopname: string;
}

export interface IReviewDocument extends IReviewDTO {
	likes: PopulatedDoc<IUserDocument>[];
}

export type IReviewModel = Model<IReviewDocument>;
