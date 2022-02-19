import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "@reduxjs/toolkit";

import { IUserState } from "@type/reducers/user";
import { IReviewsState, IReviewState } from "@type/reducers/review";
import { ICampsState, ICampState } from "@type/reducers/camp";

import user from "./user";
import review from "./review";
import reviews from "./reviews";
import camp from "./camp";
import camps from "./camps";

export interface IRootState {
  user: IUserState;
  review: IReviewState;
  reviews: IReviewsState;
  camp: ICampState;
  camps: ICampsState;
}

const rootReducer = (state: any, action: AnyAction): IRootState => {
  switch (action.type) {
    case HYDRATE: {
      return action.payload;
    }

    default: {
      return combineReducers({
        user,
        review,
        reviews,
        camp,
        camps,
      })(state, action);
    }
  }
};

export default rootReducer;
