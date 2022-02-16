import React from "react";
import { NextPage } from "next";

import FilterFinder from "@src/components/UI/molecules/FilterFinder";
import CampSiteListBox from "@src/components/UI/molecules/CampsiteListBox";
import SortButton from "@src/components/UI/molecules/SortButton";
import RowFrame from "@src/components/UI/templates/RowFrame";
import axios, { HeadersDefaults } from "axios";
import wrapper from "@src/store/configureStore";
import { getSigninUser } from "@src/reducers/user/action";
import { getUserReviews } from "@src/reducers/reviews/action";

const CampsiteListPage: NextPage = () => {
  return (
    <>
      <RowFrame>
        <FilterFinder />
        <SortButton />
        <CampSiteListBox />
        <CampSiteListBox />
        <CampSiteListBox />
        <CampSiteListBox />
      </RowFrame>
    </>
  );
};

export default CampsiteListPage;

interface RequestHeader extends HeadersDefaults {
  Cookie: string;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const cookies = ctx.req?.headers?.cookie;

  if (cookies) (axios.defaults.headers as RequestHeader).Cookie = cookies;

  const signUserRes = await store.dispatch(getSigninUser());

  const setCookies = (signUserRes.payload as any)?.headers?.["set-cookie"];
  if (setCookies) ctx.res.setHeader("Set-Cookie", setCookies);

  await store.dispatch(getUserReviews({ userId: "6205bad7f13438a35b7804ff" }));

  return {
    props: {},
  };
});
