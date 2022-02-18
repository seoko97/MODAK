import axios from "axios";
import wrapper from "@store/configureStore";
import { PayloadHeaders, RequestHeader } from "@type/apis";
import { getCamps } from "@reducers/camps/action";
import { getSigninUser } from "@reducers/user/action";

export { default } from "@pages/Search";

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const cookies = ctx.req?.headers?.cookie;
  const query = ctx?.query;

  if (cookies) (axios.defaults.headers as RequestHeader).Cookie = cookies;

  const signUserRes = await store.dispatch(getSigninUser());
  const setCookies = (signUserRes.payload as PayloadHeaders)?.headers?.["set-cookie"];
  if (setCookies) ctx.res.setHeader("Set-Cookie", setCookies);

  await store.dispatch(getCamps(query || {}));

  return {
    props: {
      query,
    },
  };
});
