import { ICampsState, ICampState } from "./camp";
import { IReviewsState, IReviewState } from "./review";
import { IUserState } from "./user";

export type RootState = ICampState & ICampsState & IUserState & IReviewState & IReviewsState;
