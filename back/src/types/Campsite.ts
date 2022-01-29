import { Model, PopulatedDoc } from 'mongoose';
import { IReviewDocument } from './Review';
import { IUserDocument } from './User';

export interface ICampsiteDTO {
	name: string;
	address: string;
	rating: number;
}

export interface ICampsiteDocument extends ICampsiteDTO {
	pickusers: PopulatedDoc<IUserDocument>[];
	reviews: PopulatedDoc<IReviewDocument>[];
	views: number;
}

export type ICampsiteModel = Model<ICampsiteDocument>;
