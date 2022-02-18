import { reducerUtils, asyncPending, asyncFulfilled, asyncRejected } from "@lib/reducerUtils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResRvLk } from "@type/apis/review";
import { IErrPayload } from "@type/reducers/init";
import { IReviewsState } from "@type/reducers/review";

import { getCampReviews, getMainReviews, getUserReviews } from "./action";

export const initialState: IReviewsState = {
  mainReviews: [],
  getMainReviews: reducerUtils.init(),
  getCampReviews: reducerUtils.init(),
  getUserReviews: reducerUtils.init(),
};

const reviews = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    deleteReview: (state, action) => {
      const { id } = action.payload;
      state.mainReviews = state.mainReviews.filter(({ _id }) => _id !== id);
    },
    updateReview: (state, action) => {
      const updatedReview = action.payload.review;
      state.mainReviews = state.mainReviews.map((review) => {
        if (review._id === updatedReview._id) return updatedReview;
        return review;
      });
    },
    createReview: (state, action) => {
      const newReview = action.payload;
      state.mainReviews.unshift(newReview);
    },
    likedReview: (state, action: PayloadAction<ResRvLk>) => {
      const { userId, reviewId } = action.payload;
      state.mainReviews = state.mainReviews.map((review) => {
        const { _id } = review;
        if (_id === reviewId) {
          const newR = { ...review };
          newR.count += 1;
          newR.likes.push(userId);
          return newR;
        }
        return review;
      });
    },
    unLikedReview: (state, action: PayloadAction<ResRvLk>) => {
      const { userId, reviewId } = action.payload;
      state.mainReviews = state.mainReviews.map((review) => {
        const { _id } = review;
        if (_id === reviewId) {
          const newR = { ...review };
          newR.count -= 1;
          newR.likes = newR.likes.filter((like) => like !== userId);
          return newR;
        }
        return review;
      });
    },
    vacateReview: (state) => {
      state.mainReviews = [];
    },
  },
  extraReducers: (builder) =>
    builder
      // 메인 페이지 인기 리뷰
      .addCase(getMainReviews.pending, (state) => {
        asyncPending(state.getMainReviews);
        state.mainReviews = [];
      })
      .addCase(getMainReviews.fulfilled, (state, action) => {
        asyncFulfilled(state.getMainReviews);
        state.mainReviews.push(...action.payload.reviews);
      })
      .addCase(getMainReviews.rejected, (state, action) => {
        asyncRejected(state.getMainReviews, action.payload as IErrPayload);
      })

      // 유저 리뷰 목록
      .addCase(getUserReviews.pending, (state, action) => {
        asyncPending(state.getUserReviews);
        if (!action.meta.arg.skip) state.mainReviews = [];
      })
      .addCase(getUserReviews.fulfilled, (state, action) => {
        asyncFulfilled(state.getUserReviews);
        if (action.payload) state.mainReviews.push(...action.payload.reviews);
      })
      .addCase(getUserReviews.rejected, (state, action) => {
        asyncRejected(state.getUserReviews, action.payload as IErrPayload);
      })

      // 캠핑장 리뷰 목록
      .addCase(getCampReviews.pending, (state, action) => {
        asyncPending(state.getCampReviews);
        if (!action.meta.arg.skip) state.mainReviews = [];
      })
      .addCase(getCampReviews.fulfilled, (state, action) => {
        asyncFulfilled(state.getCampReviews);
        if (action.payload) state.mainReviews = [...state.mainReviews, ...action.payload.reviews];
      })
      .addCase(getCampReviews.rejected, (state, action) => {
        asyncRejected(state.getCampReviews, action.payload as IErrPayload);
      }),
});

export const {
  createReview,
  deleteReview,
  likedReview,
  unLikedReview,
  updateReview,
  vacateReview,
} = reviews.actions;
export default reviews.reducer;
