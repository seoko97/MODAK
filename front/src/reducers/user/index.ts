import { createSlice } from "@reduxjs/toolkit";
import {
  asyncFulfilled,
  asyncPending,
  asyncRejected,
  ReducerInit,
  reducerUtils,
} from "@src/lib/reducerUtils";
import { logIn } from "./action";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  nickname: string;
  profileImg: string;
  source: string;
  link: number;
  special: boolean;
  createdAt: string;
  reviews: string[];
  bookmark: string[];
}

export interface IUserState {
  me: IUser | null;
  userInfo: IUser | null;
  login: ReducerInit;
  logout: ReducerInit;
}

export const initialState: IUserState = {
  me: null, // 로그인 유저 정보
  userInfo: null, // 유저 페이지 유저 정보,

  login: reducerUtils.init(),
  logout: reducerUtils.init(),
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, (state) => {
        asyncPending(state.login);
      })

      .addCase(logIn.fulfilled, (state, action) => {
        asyncFulfilled(state.login);

        state.me = {
          firstName: "asd",
          lastName: "asd",
          email: "asd",
          nickname: "asd",
          profileImg: "asd",
          source: "asd",
          link: 0,
          special: true,
          createdAt: "2020-10-01",
          reviews: ["asd"],
          bookmark: ["asd"],
        };
      })
      .addCase(logIn.rejected, (state, action) =>
        asyncRejected(state.login, action.error.message as string),
      ),
});

export default user.reducer;
