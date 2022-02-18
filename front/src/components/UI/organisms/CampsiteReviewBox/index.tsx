import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

import Tab from "@molecules/ReviewCard/Tap";
import ReviewCard from "@molecules/ReviewCard";
import useScroll from "@hooks/useScroll";
import { useAppSelector, AppDispatch } from "@store/configureStore";
import useThrottle from "@src/hooks/useThrottle";
import { getCampReviews } from "@reducers/reviews/action";

const StyledContainer = styled.section`
  width: 100%;
  & * {
    color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  }
`;

const NoneReview = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
`;

const CampsiteReviewBox = () => {
  const dispatch: AppDispatch = useDispatch();
  const { mainReviews, getCampReviews: CRState } = useAppSelector((state) => state.reviews);
  const { singleCamp } = useAppSelector((state) => state.camp);
  const [currTab, setCurrTab] = useState("전체");
  const [skip, setSkip] = useState(0);
  const [scrollHeight, clientHeight] = useScroll();

  const checkedRating = useCallback((tab: string) => (tab === "전체" ? "" : tab), []);

  const getMoreReview = useCallback(async (query) => {
    await dispatch(getCampReviews(query));
    setSkip(skip + 1);
  }, []);

  const onThrolttle = useThrottle(getMoreReview, 500);

  const handleClickTab = useCallback(
    (tab: string) => {
      setSkip(0);
      setCurrTab(tab);

      dispatch(getCampReviews({ campId: singleCamp?._id as string, rating: checkedRating(tab) }));
    },
    [singleCamp?._id],
  );

  useEffect(() => {
    if (scrollHeight + 300 >= clientHeight)
      onThrolttle({
        campId: singleCamp?._id,
        skip: String(skip + 1),
        rating: checkedRating(currTab),
      });
  }, [scrollHeight, clientHeight, currTab, skip, singleCamp?._id]);

  return (
    <StyledContainer>
      <Tab current={currTab} onClick={handleClickTab} />
      {mainReviews[0] ? (
        mainReviews.map((review) => <ReviewCard key={review._id} review={review} />)
      ) : (
        <>
          {CRState.loading ? (
            <NoneReview>
              <ClipLoader color="#ccc" />
            </NoneReview>
          ) : (
            <NoneReview>리뷰가 존재하지 않습니다.</NoneReview>
          )}
        </>
      )}
    </StyledContainer>
  );
};

export default CampsiteReviewBox;
