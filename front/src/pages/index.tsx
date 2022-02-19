import axios, { HeadersDefaults } from "axios";
import wrapper from "@store/configureStore";
import { getSigninUser } from "@reducers/user/action";
import { getMainCamps } from "@reducers/camps/action";
import { getMainReviews } from "@reducers/reviews/action";
import { PayloadHeaders } from "@type/apis";

export { default } from "@pages/Home";

interface RequestHeader extends HeadersDefaults {
  Cookie: string;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const cookies = ctx.req?.headers?.cookie;

  if (cookies) (axios.defaults.headers as RequestHeader).Cookie = cookies;

  const signUserRes = await store.dispatch(getSigninUser());

  const setCookies = (signUserRes.payload as PayloadHeaders)?.headers?.["set-cookie"];
  if (setCookies) ctx.res.setHeader("Set-Cookie", setCookies);

  await store.dispatch(getMainCamps());
  await store.dispatch(getMainReviews());

  return {
    props: {},
  };
});
