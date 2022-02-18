import axios from "axios";
import { getSigninUser, getUserInfo } from "@reducers/user/action";
import { getUserReviews } from "@reducers/reviews/action";
import wrapper from "@store/configureStore";
import { PayloadHeaders, RequestHeader, ResponseRejected } from "@type/apis";

export { default } from "@pages/Profile";

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const query = ctx?.query;
  const cookies = ctx.req?.headers?.cookie;

  if (cookies) (axios.defaults.headers as RequestHeader).Cookie = cookies;

  const signUserRes = await store.dispatch(getSigninUser());

  const setCookies = (signUserRes.payload as PayloadHeaders)?.headers?.["set-cookie"];
  if (setCookies) ctx.res.setHeader("Set-Cookie", setCookies);
  const resUser = await store.dispatch(getUserInfo(query.id as string));

  if (!(resUser.payload as ResponseRejected).status) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  await store.dispatch(getUserReviews({ userId: query.id as string }));
  return {
    props: { userId: query.id },
  };
});
