import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "@reduxjs/toolkit";

import users from "./users";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE: {
      const newState = {
        ...state,
        ...action.payload,
      };
      return newState;
    }
    default: {
      const reducer = combineReducers({
        users,
      });
      return reducer(state, action);
    }
  }
};

export default rootReducer;
