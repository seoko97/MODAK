import React, { useCallback, useState } from "react";
import { NextPage } from "next";

import FilterFinder from "@src/components/UI/molecules/FilterFinder";
import CampSiteListBox from "@src/components/UI/molecules/CampsiteListBox";
import SortButton from "@src/components/UI/molecules/SortButton";
import RowFrame from "@src/components/UI/templates/RowFrame";

import axios from "axios";
import wrapper, { useAppSelector } from "@src/store/configureStore";
import { RequestHeader } from "@src/types/apis";
import { getCamps } from "@reducers/camps/action";
import { getSigninUser } from "@reducers/user/action";
import useInput from "@src/hooks/useInput";
import camp from "../../reducers/camp/index";

const CampsiteListPage: NextPage = () => {
  const { mainCamps } = useAppSelector((state) => state.camps);
  // console.log(mainCamps);
  const [sorted, setSorted] = useState("latest");
  const onChange = useCallback((e) => {
    setSorted(e.target.value);
  }, []);

  return (
    <>
      <RowFrame>
        <FilterFinder sorted={sorted} />
        <SortButton onChange={onChange} />
        {mainCamps.map((camp) => (
          <CampSiteListBox camp={camp} key={camp._id} />
        ))}
      </RowFrame>
    </>
  );
};

export default CampsiteListPage;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const cookies = ctx.req?.headers?.cookie;

  if (cookies) (axios.defaults.headers as RequestHeader).Cookie = cookies;

  const signUserRes = await store.dispatch(getSigninUser());
  const setCookies = (signUserRes.payload as any)?.headers?.["set-cookie"];
  if (setCookies) ctx.res.setHeader("Set-Cookie", setCookies);

  await store.dispatch(getCamps({}));

  return {
    props: {},
  };
});
