import React from "react";
import { NextPage } from "next";
import RowFrame from "@templates/RowFrame";
import CampSiteCoverImg from "@molecules/CampSiteCoverImg";
import CampSiteInfo from "@molecules/CampSiteInfo";
import CampsiteReviewBox from "@organisms/CampsiteReviewBox";
import wrapper from "@src/store/configureStore";
import { getCamp } from "@src/reducers/camp/action";
import axios, { HeadersDefaults } from "axios";
import { getSigninUser } from "@src/reducers/user/action";
import { getCampReviews } from "@src/reducers/reviews/action";

const Camp: NextPage = () => {
  return (
    <>
      <CampSiteCoverImg />
      <RowFrame>
        <CampSiteInfo />
        <CampsiteReviewBox />
      </RowFrame>
    </>
  );
};

export default Camp;

interface RequestHeader extends HeadersDefaults {
  Cookie: string;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const cookies = ctx.req?.headers?.cookie;
  const query = ctx?.query;
  if (cookies) (axios.defaults.headers as RequestHeader).Cookie = cookies;

  const signUserRes = await store.dispatch(getSigninUser());

  const setCookies = (signUserRes.payload as any)?.headers?.["set-cookie"];
  if (setCookies) ctx.res.setHeader("Set-Cookie", setCookies);

  await store.dispatch(getCamp(query.id as string));
  await store.dispatch(getCampReviews({ campId: query.id as string }));

  return {
    props: {},
  };
});
