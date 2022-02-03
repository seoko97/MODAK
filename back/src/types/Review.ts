import { Model, PopulatedDoc } from 'mongoose';
import { ICampsiteDocument } from './Campsite';
import { IUserDocument } from './User';

export interface IReviewDTO {
	content: string;
	photos: string[];
	author: PopulatedDoc<IUserDocument>;
	locations: PopulatedDoc<ICampsiteDocument>;
	shopname: string;
}

export interface IReviewDocument extends IReviewDTO {
	likes: PopulatedDoc<IUserDocument>[];
}

export type IReviewModel = Model<IReviewDocument>;
