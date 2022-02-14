import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "@reduxjs/toolkit";

import { IUserState } from "@src/types/reducers/user";
import { IReviewsState, IReviewState } from "@src/types/reducers/review";

import user from "./user";
import review from "./review";
import reviews from "./reviews";
import camp from "./camp";
import camps from "./camps";

export interface IRootState {
  user: IUserState;
  review: IReviewState;
  reviews: IReviewsState;
}

const rootReducer = (state: any, action: AnyAction) => {
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
