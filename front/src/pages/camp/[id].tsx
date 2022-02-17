import axios from "axios";
import wrapper from "@store/configureStore";
import { getCamp } from "@reducers/camp/action";
import { getSigninUser } from "@reducers/user/action";
import { getCampReviews } from "@reducers/reviews/action";
import { PayloadHeaders, RequestHeader } from "@src/types/apis";

export { default } from "@pages/Camp";

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const cookies = ctx.req?.headers?.cookie;
  const query = ctx?.query;
  if (cookies) (axios.defaults.headers as RequestHeader).Cookie = cookies;

  const signUserRes = await store.dispatch(getSigninUser());

  const setCookies = (signUserRes.payload as PayloadHeaders)?.headers?.["set-cookie"];
  if (setCookies) ctx.res.setHeader("Set-Cookie", setCookies);

  await store.dispatch(getCamp(query.id as string));
  await store.dispatch(getCampReviews({ campId: query.id as string }));

  return {
    props: {},
  };
});
