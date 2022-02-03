import { IReviewDocument, IReviewModel } from '@src/types/Review';
import { Schema } from 'mongoose';

export const ReviewSchema = new Schema<IReviewDocument, IReviewModel>(
	{
		content: {
			type: String,
			required: true,
		},
		photos: [
			{
				type: String,
			},
		],
		author: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		locations: {
			type: Schema.Types.ObjectId,
			ref: 'Campsite',
		},
		likes: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
	},
	{
		timestamps: true,
	},
);
