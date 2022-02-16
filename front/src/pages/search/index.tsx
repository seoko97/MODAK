import axios from "axios";
import React, { useEffect } from "react";
import wrapper, { useAppSelector } from "@src/store/configureStore";
import { RequestHeader } from "@src/types/apis";
import { getCamps } from "@reducers/camps/action";
import { getSigninUser } from "@reducers/user/action";
import { useRouter } from "next/router";

interface Props {
  query: {
    [key: string]: string;
  };
}

const Search = ({ query }: Props) => {
  const values = Object.values(query);
  const router = useRouter();
  const { mainCamps } = useAppSelector((state) => state.camps);
  console.log(mainCamps);

  useEffect(() => {
    if (values.length !== 1) router.replace("/");
  }, [values.length]);

  return (
    <>
      <div>asd</div>
    </>
  );
};

export default Search;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const cookies = ctx.req?.headers?.cookie;
  const query = ctx?.query;

  if (cookies) (axios.defaults.headers as RequestHeader).Cookie = cookies;

  const signUserRes = await store.dispatch(getSigninUser());
  const setCookies = (signUserRes.payload as any)?.headers?.["set-cookie"];
  if (setCookies) ctx.res.setHeader("Set-Cookie", setCookies);

  await store.dispatch(getCamps(query || {}));

  return {
    props: {
      query,
    },
  };
});
