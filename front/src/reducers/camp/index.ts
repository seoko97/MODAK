import { createSlice } from "@reduxjs/toolkit";
import { asyncFulfilled, asyncPending, asyncRejected, reducerUtils } from "@lib/reducerUtils";
import { ICamp, ICampState } from "@type/reducers/camp";
import { IErrPayload } from "@type/reducers/init";
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
        if (action.payload) state.singleCamp = action.payload.camp;
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
        if (action.payload) {
          const camp = state.singleCamp as ICamp;
          camp.totalBookmark += 1;
          camp.bookmark.push(action.payload.userId);
        }
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
        if (action.payload) {
          const camp = state.singleCamp as ICamp;
          camp.totalBookmark -= 1;
          camp.bookmark = camp.bookmark.filter(
            (id) => action.payload && id !== action.payload.userId,
          );
        }
      })
      .addCase(unbookmark.rejected, (state, action) => {
        asyncRejected(state.unbookmark, action.payload as IErrPayload);
      }),
});

export default camp.reducer;
