import React, { useCallback } from "react";
import { NextPage } from "next";
import axios, { HeadersDefaults } from "axios";
import { useDispatch, useSelector } from "react-redux";
import wrapper from "@src/store/configureStore";
import { getSigninUser, signout } from "@src/reducers/user/action";
import { getMainCamps } from "@src/reducers/camps/action";
import { getMainReviews } from "@src/reducers/reviews/action";
import RowFrame from "@src/components/UI/templates/RowFrame";

export { default } from "@pages/Home";

interface RequestHeader extends HeadersDefaults {
  Cookie: string;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const cookies = ctx.req?.headers?.cookie;

  if (cookies) (axios.defaults.headers as RequestHeader).Cookie = cookies;

  await store.dispatch(getSigninUser());
  await store.dispatch(getMainCamps());
  await store.dispatch(getMainReviews());

  return {
    props: {},
  };
});
