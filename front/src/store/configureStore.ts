import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "@reducers/.";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const dev = process.env.NODE_ENV === "development";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: dev,
  reducer: rootReducer,
});

const wrapper = createWrapper(() => store, {
  debug: dev,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default wrapper;
