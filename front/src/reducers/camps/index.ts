import { createSlice } from "@reduxjs/toolkit";
import { asyncFulfilled, asyncPending, asyncRejected, reducerUtils } from "@lib/reducerUtils";
import { ICampsState } from "@type/reducers/camp";
import { IErrPayload } from "@type/reducers/init";
import { getCamps, getCampsByKeyword, getMainCamps, getUserCamps } from "./action";

export const initialState: ICampsState = {
  mainCamps: [],
  searchCamps: [],
  getCamps: reducerUtils.init(),
  getMainCamps: reducerUtils.init(),
  getUserCamps: reducerUtils.init(),
  search: reducerUtils.init(),
};

const camps = createSlice({
  name: "camps",
  initialState,
  reducers: {
    search(state) {
      asyncPending(state.search);
    },
    clearSearchCamps(state) {
      state.searchCamps = [];
      state.search.done = false;
      state.search.loading = false;
    },
    bookmarked(state, action) {
      const { campId } = action.payload;
      state.mainCamps = state.mainCamps.map((camp) => {
        const { _id } = camp;
        if (_id === campId) {
          const newR = { ...camp };
          newR.totalBookmark += 1;
          return newR;
        }
        return camp;
      });
    },
    unBookmarked(state, action) {
      const { campId } = action.payload;
      state.mainCamps = state.mainCamps.map((camp) => {
        const { _id } = camp;
        if (_id === campId) {
          const newR = { ...camp };
          newR.totalBookmark -= 1;
          return newR;
        }
        return camp;
      });
    },
  },

  extraReducers: (builder) =>
    builder
      // 캠핑장 정보 불러오기
      .addCase(getCamps.pending, (state, action) => {
        asyncPending(state.getCamps);
        if (!action.meta.arg.skip) state.mainCamps = [];
      })
      .addCase(getCamps.fulfilled, (state, action) => {
        asyncFulfilled(state.getCamps);
        if (action.payload) state.mainCamps = [...state.mainCamps, ...action.payload.camps];
      })
      .addCase(getCamps.rejected, (state, action) => {
        asyncRejected(state.getCamps, action.payload as IErrPayload);
      })

      // 메인 페이지 캠핑장 정보
      .addCase(getMainCamps.pending, (state, action) => {
        asyncPending(state.getMainCamps);
        state.mainCamps = [];
      })
      .addCase(getMainCamps.fulfilled, (state, action) => {
        asyncFulfilled(state.getMainCamps);
        if (action.payload) state.mainCamps = action.payload.camps;
      })
      .addCase(getMainCamps.rejected, (state, action) => {
        asyncRejected(state.getMainCamps, action.payload as IErrPayload);
      })

      // 유저 페이지 캠핑장 정보
      .addCase(getUserCamps.pending, (state, action) => {
        asyncPending(state.getUserCamps);
        state.mainCamps = [];
      })
      .addCase(getUserCamps.fulfilled, (state, action) => {
        asyncFulfilled(state.getUserCamps);
        if (action.payload) state.mainCamps = action.payload.camps;
      })
      .addCase(getUserCamps.rejected, (state, action) => {
        asyncRejected(state.getUserCamps, action.payload as IErrPayload);
      })

      // 캠핑장 검색 정보
      .addCase(getCampsByKeyword.pending, (state, action) => {
        asyncPending(state.search);
        state.searchCamps = [];
      })
      .addCase(getCampsByKeyword.fulfilled, (state, action) => {
        asyncFulfilled(state.search);
        if (action.payload) state.searchCamps = action.payload.camps;
      })
      .addCase(getCampsByKeyword.rejected, (state, action) => {
        asyncRejected(state.search, action.payload as IErrPayload);
      }),
});

export const { search, clearSearchCamps, bookmarked, unBookmarked } = camps.actions;
export default camps.reducer;
