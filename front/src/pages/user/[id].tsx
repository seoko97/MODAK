import axios from "axios";
import { getSigninUser, getUserInfo } from "@reducers/user/action";
import { getUserReviews } from "@reducers/reviews/action";
import wrapper from "@store/configureStore";
import { PayloadHeaders, RequestHeader } from "@src/types/apis";

export { default } from "@src/components/UI/organisms/MyPage";

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const query = ctx?.query;
  const cookies = ctx.req?.headers?.cookie;

  if (cookies) (axios.defaults.headers as RequestHeader).Cookie = cookies;

  const signUserRes = await store.dispatch(getSigninUser());

  const setCookies = (signUserRes.payload as PayloadHeaders)?.headers?.["set-cookie"];
  if (setCookies) ctx.res.setHeader("Set-Cookie", setCookies);
  await store.dispatch(getUserInfo(query.id as string));
  await store.dispatch(getUserReviews({ userId: query.id as string }));

  return {
    props: { userId: query.id },
  };
});
