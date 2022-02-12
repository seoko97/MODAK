import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import {
  asyncFulfilled,
  asyncPending,
  asyncRejected,
  IErrPayload,
  ReducerInit,
  reducerUtils,
} from "@lib/reducerUtils";

import { editUserInfo, getSigninUser, getUserInfo, signout } from "./action";

export interface IUser {
  intro: string;
  _id: string;
  email: string;
  nickname: string;
  profileImg: string;
  source: string;
  totalLike: number;
  reviewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserState {
  me: IUser | null;
  userInfo: IUser | null;
  signin: ReducerInit;
  signout: ReducerInit;
  getUserInfo: ReducerInit;
  editUserInfo: ReducerInit;
}

// 상위 레벨의 데이터를 고민
// 다른 사람의 페이지를 들어가면
// userInfo post정보를 같이 입력
// slice를 만들때 다른 유저 페이지를 접속했을 때
export const initialState: IUserState = {
  me: null, // 로그인 유저 정보
  userInfo: null, // 유저 페이지 유저 정보,
  signin: reducerUtils.init(),
  signout: reducerUtils.init(),
  getUserInfo: reducerUtils.init(),
  editUserInfo: reducerUtils.init(),
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // 로그아웃
      .addCase(signout.pending, (state) => {
        asyncPending(state.signout);
      })
      .addCase(signout.fulfilled, (state) => {
        asyncFulfilled(state.signout);
        state.me = null;
      })
      .addCase(signout.rejected, (state, action) => {
        asyncRejected(state.signout, action.payload as IErrPayload);
      })

      // 로그인 유저 정보
      .addCase(getSigninUser.pending, (state) => {
        asyncPending(state.signin);
      })
      .addCase(getSigninUser.fulfilled, (state, action) => {
        asyncFulfilled(state.signin);
        state.me = action.payload.user;
      })
      .addCase(getSigninUser.rejected, (state, action) => {
        asyncRejected(state.signin, action.payload as IErrPayload);
        state.me = null;
      })

      // 유저 정보 수정
      .addCase(editUserInfo.pending, (state) => {
        asyncPending(state.editUserInfo);
      })
      .addCase(editUserInfo.fulfilled, (state, action) => {
        asyncFulfilled(state.editUserInfo);
        state.me = action.payload.user;

        if (action.payload.user._id === state.userInfo?._id) state.userInfo = action.payload.user;
      })
      .addCase(editUserInfo.rejected, (state, action) => {
        asyncRejected(state.editUserInfo, action.payload as IErrPayload);
        state.userInfo = null;
      })

      // 유저 페이지 정보
      .addCase(getUserInfo.pending, (state, action) => {
        asyncPending(state.getUserInfo);
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        asyncFulfilled(state.getUserInfo);
        state.userInfo = action.payload.user;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        asyncRejected(state.getUserInfo, action.payload as IErrPayload);
        state.userInfo = null;
      }),
});

// type ExtraSuccessAction<T> = PayloadAction<
//   T,
//   string,
//   {
//     arg: string;
//     requestId: string;
//     requestStatus: "fulfilled";
//   },
//   never
// >;

// const a = (state: WritableDraft<IUserState>, action: ExtraSuccessAction<IUserState>) => {
//   action.payload.me = null;
// };

export default user.reducer;
