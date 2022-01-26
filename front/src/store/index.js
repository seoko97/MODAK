import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import rootReducer from "../slices";

const dev = process.env.NODE_ENV !== "production";

// eslint-disable-next-line no-unused-vars
const makeStore = (context) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(logger);
    },
    devTools: dev,
  });

export const wrapper = createWrapper(makeStore, {
  debug: dev,
});

export default wrapper;
