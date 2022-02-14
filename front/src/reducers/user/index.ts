import { createSlice } from "@reduxjs/toolkit";
import { asyncFulfilled, asyncPending, asyncRejected, reducerUtils } from "@lib/reducerUtils";
import { IUserState } from "@src/types/reducers/user";
import { IErrPayload } from "@src/types/reducers/init";

import { editUserInfo, getSigninUser, getUserInfo, signout } from "./action";

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
      })

      // 유저 페이지 정보
      .addCase(getUserInfo.pending, (state) => {
        asyncPending(state.getUserInfo);
        state.userInfo = null;
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

export default user.reducer;
