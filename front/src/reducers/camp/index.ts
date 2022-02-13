import { createSlice } from "@reduxjs/toolkit";
import { asyncFulfilled, asyncPending, asyncRejected, reducerUtils } from "@src/lib/reducerUtils";
import { ICampState } from "@src/types/reducers/camp";
import { IErrPayload } from "@src/types/reducers/init";
import { bookmark, getCamp, unbookmark } from "./action";

export const initialState: ICampState = {
  singleCamp: null,
  getCamp: reducerUtils.init(),
  bookmark: reducerUtils.init(),
  unbookmark: reducerUtils.init(),
};

const camp = createSlice({
  name: "camp",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      // 캠핑장 정보 불러오기
      .addCase(getCamp.pending, (state, action) => {
        asyncPending(state.getCamp);
        state.singleCamp = null;
      })
      .addCase(getCamp.fulfilled, (state, action) => {
        asyncFulfilled(state.getCamp);
        state.singleCamp = action.payload.camp;
      })
      .addCase(getCamp.rejected, (state, action) => {
        asyncRejected(state.getCamp, action.payload as IErrPayload);
      })

      // 북마크
      .addCase(bookmark.pending, (state, action) => {
        asyncPending(state.bookmark);
      })
      .addCase(bookmark.fulfilled, (state, action) => {
        asyncFulfilled(state.bookmark);
        state.singleCamp?.bookmark.push(action.payload.userId);
      })
      .addCase(bookmark.rejected, (state, action) => {
        asyncRejected(state.bookmark, action.payload as IErrPayload);
      })

      // 북마크 취소
      .addCase(unbookmark.pending, (state, action) => {
        asyncPending(state.unbookmark);
      })
      .addCase(unbookmark.fulfilled, (state, action) => {
        asyncFulfilled(state.unbookmark);

        if (state.singleCamp)
          state.singleCamp.bookmark = state.singleCamp.bookmark.filter(
            (id) => id !== action.payload.userId,
          );
      })
      .addCase(unbookmark.rejected, (state, action) => {
        asyncRejected(state.unbookmark, action.payload as IErrPayload);
      }),
});

export default camp.reducer;
