import { reducerUtils, asyncPending, asyncFulfilled, asyncRejected } from "@lib/reducerUtils";
import { createSlice } from "@reduxjs/toolkit";
import { IErrPayload } from "@type/reducers/init";
import { IReviewState } from "@type/reducers/review";
import { createReview, deleteReview, editReview, likeReview, unLikeReview } from "./action";

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
  extraReducers: (builder) =>
    builder
      // 리부 생성
      .addCase(createReview.pending, (state) => {
        asyncPending(state.create);
      })
      .addCase(createReview.fulfilled, (state) => {
        asyncFulfilled(state.create);
      })
      .addCase(createReview.rejected, (state, action) => {
        asyncRejected(state.create, action.payload as IErrPayload);
      })

      // 리뷰 수정
      .addCase(editReview.pending, (state) => {
        asyncPending(state.edit);
      })
      .addCase(editReview.fulfilled, (state) => {
        asyncFulfilled(state.edit);
      })
      .addCase(editReview.rejected, (state, action) => {
        asyncRejected(state.edit, action.payload as IErrPayload);
      })

      // 리뷰 삭제
      .addCase(deleteReview.pending, (state) => {
        asyncPending(state.delete);
      })
      .addCase(deleteReview.fulfilled, (state) => {
        asyncFulfilled(state.delete);
      })
      .addCase(deleteReview.rejected, (state, action) => {
        asyncRejected(state.delete, action.payload as IErrPayload);
      })

      // 좋아요
      .addCase(likeReview.pending, (state) => {
        asyncPending(state.like);
      })
      .addCase(likeReview.fulfilled, (state) => {
        asyncFulfilled(state.like);
      })
      .addCase(likeReview.rejected, (state, action) => {
        asyncRejected(state.like, action.payload as IErrPayload);
      })

      // 좋아요 취소
      .addCase(unLikeReview.pending, (state) => {
        asyncPending(state.unlike);
      })
      .addCase(unLikeReview.fulfilled, (state) => {
        asyncFulfilled(state.unlike);
      })
      .addCase(unLikeReview.rejected, (state, action) => {
        asyncRejected(state.unlike, action.payload as IErrPayload);
      }),
});

export default review.reducer;
