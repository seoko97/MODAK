import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "@reduxjs/toolkit";

import user, { IUserState } from "./user";

export interface IRootState {
  user: IUserState;
}

const rootReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    }

    default: {
      return combineReducers({
        user,
      })(state, action);
    }
  }
};

export default rootReducer;
