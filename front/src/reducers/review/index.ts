import { reducerUtils, ReducerInit } from "@lib/reducerUtils";
import { createSlice } from "@reduxjs/toolkit";

export interface IReviewState {
  create: ReducerInit;
  edit: ReducerInit;
  delete: ReducerInit;
  like: ReducerInit;
  unlike: ReducerInit;
}

export const initialState: IReviewState = {
  create: reducerUtils.init(),
  edit: reducerUtils.init(),
  delete: reducerUtils.init(),
  like: reducerUtils.init(),
  unlike: reducerUtils.init(),
};

const review = createSlice({
  name: "review",
  initialState,
  reducers: {},
});

export default review;
