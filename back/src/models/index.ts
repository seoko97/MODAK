import { ICampsiteDocument, ICampsiteModel } from '@src/types/Campsite';
import { IReviewDocument, IReviewModel } from '@src/types/Review';
import { IUserDocument, IUserModel } from '@src/types/User';
import mongoose from 'mongoose';
import { CampsiteSchema } from './schemas/campsite.model';
import { ReviewSchema } from './schemas/review.model';
import { UserSchema } from './schemas/user.model';

export const UserModel = mongoose.model<IUserDocument, IUserModel>('User', UserSchema);
export const ReviewModel = mongoose.model<IReviewDocument, IReviewModel>('Review', ReviewSchema);
export const CampsiteModel = mongoose.model<ICampsiteDocument, ICampsiteModel>('Campsite', CampsiteSchema);
