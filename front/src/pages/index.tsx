import axios, { HeadersDefaults } from "axios";
import wrapper from "@src/store/configureStore";
import { getSigninUser } from "@src/reducers/user/action";
import { getMainCamps } from "@src/reducers/camps/action";
import { getMainReviews } from "@src/reducers/reviews/action";

export { default } from "@pages/Home";

interface RequestHeader extends HeadersDefaults {
  Cookie: string;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const cookies = ctx.req?.headers?.cookie;

  if (cookies) (axios.defaults.headers as RequestHeader).Cookie = cookies;

  const signUserRes = await store.dispatch(getSigninUser());

  const setCookies = (signUserRes.payload as any)?.headers?.["set-cookie"];
  if (setCookies) ctx.res.setHeader("Set-Cookie", setCookies);

  await store.dispatch(getMainCamps());
  await store.dispatch(getMainReviews());

  return {
    props: {},
  };
});
