import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import wrapper, { useAppSelector } from "@src/store/configureStore";
import CampSiteListBox from "@src/components/UI/molecules/CampsiteListBox";
import { RequestHeader } from "@src/types/apis";
import { getCamps } from "@reducers/camps/action";
import { getSigninUser } from "@reducers/user/action";
import RowFrame from "@src/components/UI/templates/RowFrame";
import useScroll from "@src/hooks/useScroll";
import useThrottle from "@src/hooks/useThrottle";

interface Props {
  query: {
    [key: string]: string;
  };
}

const Search = ({ query }: Props) => {
  const values = Object.values(query);
  const router = useRouter();
  const { mainCamps } = useAppSelector((state) => state.camps);
  const dispatch = useDispatch();
  const [scrollHeight, clientHeight] = useScroll();
  const onThrottle = useThrottle(async () => {
    await dispatch(getCamps({ ...query, lastId: mainCamps[mainCamps.length - 1]._id }));
  }, 1000);

  useEffect(() => {
    if (scrollHeight + 300 >= clientHeight) {
      onThrottle();
    }
  }, [scrollHeight, clientHeight]);

  useEffect(() => {
    if (values.length !== 1) router.replace("/");
  }, [values.length]);

  return (
    <RowFrame>
      <StyledHeader>{values} 검색결과</StyledHeader>
      {mainCamps.map((camp) => (
        <CampSiteListBox camp={camp} key={camp._id} />
      ))}
    </RowFrame>
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

const StyledHeader = styled.h2`
  font-size: 25px;
  font-weight: 700;
  margin-top: 15px;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  @media screen and (max-width: ${({ theme }) => theme.BP.TABLET}) {
    margin-top: 0;
`;
