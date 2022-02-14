import { createSlice } from "@reduxjs/toolkit";
import { asyncFulfilled, asyncPending, asyncRejected, reducerUtils } from "@src/lib/reducerUtils";
import { ICampsState } from "@src/types/reducers/camp";
import { IErrPayload } from "@src/types/reducers/init";
import { getCamps, getMainCamps, getUserCamps } from "./action";

export const initialState: ICampsState = {
  mainCamps: [],
  getCamps: reducerUtils.init(),
  getMainCamps: reducerUtils.init(),
  getUserCamps: reducerUtils.init(),
};

const camps = createSlice({
  name: "camps",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      // 캠핑장 정보 불러오기
      .addCase(getCamps.pending, (state, action) => {
        asyncPending(state.getCamps);
        state.mainCamps = [];
      })
      .addCase(getCamps.fulfilled, (state, action) => {
        asyncFulfilled(state.getCamps);
        state.mainCamps = action.payload.camps;
      })
      .addCase(getCamps.rejected, (state, action) => {
        asyncRejected(state.getCamps, action.payload as IErrPayload);
      })

      // 북마크
      .addCase(getMainCamps.pending, (state, action) => {
        asyncPending(state.getMainCamps);
        state.mainCamps = [];
      })
      .addCase(getMainCamps.fulfilled, (state, action) => {
        asyncFulfilled(state.getMainCamps);
        state.mainCamps = action.payload.camps;
      })
      .addCase(getMainCamps.rejected, (state, action) => {
        asyncRejected(state.getMainCamps, action.payload as IErrPayload);
      })

      // 북마크 취소
      .addCase(getUserCamps.pending, (state, action) => {
        asyncPending(state.getUserCamps);
        state.mainCamps = [];
      })
      .addCase(getUserCamps.fulfilled, (state, action) => {
        asyncFulfilled(state.getUserCamps);
        state.mainCamps = action.payload.camps;
      })
      .addCase(getUserCamps.rejected, (state, action) => {
        asyncRejected(state.getUserCamps, action.payload as IErrPayload);
      }),
});

export default camps.reducer;
