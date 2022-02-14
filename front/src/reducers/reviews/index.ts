import { reducerUtils, asyncPending, asyncFulfilled, asyncRejected } from "@lib/reducerUtils";
import { createSlice } from "@reduxjs/toolkit";
import { IErrPayload } from "@src/types/reducers/init";
import { IReviewsState } from "@src/types/reducers/review";

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
      const updatedReview = action.payload;
      state.mainReviews = state.mainReviews.map((review) => {
        if (review._id === updatedReview._id) return updatedReview;
        return review;
      });
    },
    createReview: (state, action) => {
      const newReview = action.payload;
      state.mainReviews.push(newReview);
    },
    likeReview: (state, action) => {
      const { userId, reviewId } = action.payload;
      state.mainReviews.forEach(({ _id, likes, count }) => {
        if (_id === reviewId) {
          const pp = count - 1;
          likes.push(userId);
          count = pp;
        }
      });
    },
    unLikeReview: (state, action) => {
      const { userId, reviewId } = action.payload;
      state.mainReviews.forEach(({ _id, likes, count }) => {
        if (_id === reviewId) {
          const newLikes = likes.filter((like) => like !== userId);
          const mm = count - 1;
          likes = newLikes;
          count = mm;
        }
      });
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
        state.mainReviews = action.payload.reviews;
      })
      .addCase(getMainReviews.rejected, (state, action) => {
        asyncRejected(state.getMainReviews, action.payload as IErrPayload);
      })

      // 유저 리뷰 목록
      .addCase(getUserReviews.pending, (state) => {
        asyncPending(state.getUserReviews);
        state.mainReviews = [];
      })
      .addCase(getUserReviews.fulfilled, (state, action) => {
        asyncFulfilled(state.getUserReviews);
        state.mainReviews = action.payload.reviews;
      })
      .addCase(getUserReviews.rejected, (state, action) => {
        asyncRejected(state.getUserReviews, action.payload as IErrPayload);
      })

      // 캠핑장 리뷰 목록
      .addCase(getCampReviews.pending, (state) => {
        asyncPending(state.getCampReviews);
        state.mainReviews = [];
      })
      .addCase(getCampReviews.fulfilled, (state, action) => {
        asyncFulfilled(state.getCampReviews);
        state.mainReviews = action.payload.reviews;
      })
      .addCase(getCampReviews.rejected, (state, action) => {
        asyncRejected(state.getCampReviews, action.payload as IErrPayload);
      }),
});

export const reviewActions = reviews.actions;
export default reviews.reducer;
