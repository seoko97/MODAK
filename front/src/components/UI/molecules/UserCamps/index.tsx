import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";

import { useAppSelector } from "@store/configureStore";
import { getUserReviews } from "@reducers/reviews/action";
import { getUserCamps } from "@reducers/camps/action";

import useScroll from "@hooks/useScroll";
import useThrottle from "@hooks/useThrottle";

import CampSiteListBox from "@molecules/CampsiteListBox";

const Container = styled.div`
  margin-top: 50x;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * {
    width: 100%;
  }
`;

const UserCamps = () => {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(0);
  const { userInfo } = useAppSelector((state) => state.user);
  const { mainCamps, getUserCamps: UCState } = useAppSelector((state) => state.camps);
  const { loading } = UCState;
  const [scrollHieght, clientHeight] = useScroll();

  const onThrottle = useThrottle(async () => {
    await dispatch(getUserReviews({ userId: userInfo?._id as string, skip: String(skip + 1) }));
    setSkip(skip + 1);
  }, 500);

  useEffect(() => {
    if (scrollHieght + 300 >= clientHeight) onThrottle();
  }, [scrollHieght, clientHeight]);

  useEffect(() => {
    dispatch(getUserCamps({ userId: userInfo?._id as string }));
  }, []);

  return (
    <Container>
      {mainCamps.map((camp, i) => (
        <CampSiteListBox camp={camp} key={camp._id + i} />
      ))}

      {loading && <ClipLoader color="ccc" />}
    </Container>
  );
};

export default UserCamps;
