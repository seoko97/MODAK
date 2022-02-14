import React, { useCallback } from "react";
import { NextPage } from "next";
import axios, { HeadersDefaults } from "axios";
import { useDispatch, useSelector } from "react-redux";
import wrapper, { RootState } from "@src/store/configureStore";
import { getSigninUser, signout } from "@src/reducers/user/action";
import { getMainCamps } from "@src/reducers/camps/action";
import { getMainReviews } from "@src/reducers/reviews/action";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state: RootState) => state.user);

  const onClickSignoutBtn = useCallback(() => {
    dispatch(signout());
  }, []);

  return (
    <div>
      Home
      <div>
        <a href={`http://localhost:3065/api/auth/google`}>
          <button>구글 로그인</button>
        </a>
      </div>
      <div>
        <button onClick={onClickSignoutBtn}>로그아웃</button>
      </div>
      <div>{JSON.stringify(me)}</div>
    </div>
  );
};

export default Home;

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
