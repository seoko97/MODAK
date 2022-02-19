import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";

import { useAppSelector } from "@store/configureStore";
import { getUserReviews } from "@reducers/reviews/action";

import useScroll from "@hooks/useScroll";
import useThrottle from "@hooks/useThrottle";

import MyReview from "@organisms/MyReview";

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
  const { mainReviews, getUserReviews: URSatae } = useAppSelector((state) => state.reviews);
  const { mainCamps } = useAppSelector((state) => state.camps);
  const { loading } = URSatae;
  const [scrollHieght, clientHeight] = useScroll();

  useEffect(() => {
    if (mainCamps[0]) dispatch(getUserReviews({ userId: userInfo?._id as string }));
  }, [mainCamps]);

  const onThrottle = useThrottle(async () => {
    await dispatch(getUserReviews({ userId: userInfo?._id as string, skip: String(skip + 1) }));
    setSkip(skip + 1);
  }, 500);

  useEffect(() => {
    if (scrollHieght + 300 >= clientHeight && mainReviews.length >= 10) onThrottle();
  }, [scrollHieght, clientHeight, mainReviews]);

  return (
    <Container>
      {mainReviews.map((review, i) => (
        <MyReview key={review._id + i} review={review} />
      ))}

      {loading && <ClipLoader color="ccc" />}
    </Container>
  );
};

export default UserCamps;
