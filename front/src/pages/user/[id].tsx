import React from "react";
import { NextPage } from "next";
import MyPage from "@src/components/UI/organisms/MyPage";
import axios, { HeadersDefaults } from "axios";
import { getSigninUser, getUserInfo } from "@src/reducers/user/action";
import wrapper, { useAppSelector } from "@src/store/configureStore";
import { AppProps } from "next/app";
import { getUserReviews } from "@src/reducers/reviews/action";

export { default } from "@organisms/MyPage";

interface RequestHeader extends HeadersDefaults {
  Cookie: string;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const query = ctx?.query;
  const cookies = ctx.req?.headers?.cookie;

  if (cookies) (axios.defaults.headers as RequestHeader).Cookie = cookies;

  const signUserRes = await store.dispatch(getSigninUser());

  const setCookies = (signUserRes.payload as any)?.headers?.["set-cookie"];
  if (setCookies) ctx.res.setHeader("Set-Cookie", setCookies);
  await store.dispatch(getUserInfo(query.id as string));
  await store.dispatch(getUserReviews({ userId: query.id as string }));

  return {
    props: { userId: query.id },
  };
});
