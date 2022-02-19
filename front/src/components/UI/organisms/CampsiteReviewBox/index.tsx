import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

import Tab from "@molecules/ReviewCard/Tap";
import SortedReview from "@molecules/SortedReview";
import ReviewCard from "@molecules/ReviewCard";
import useScroll from "@hooks/useScroll";
import { useAppSelector, AppDispatch } from "@store/configureStore";
import useThrottle from "@hooks/useThrottle";
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
const BoxHeader = styled.div`
  position: sticky;
  top: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.BAKCGROUND_COLOR.RGBA};
  backdrop-filter: saturate(180%) blur(20px);
  z-index: 1;
  padding: 10px 0;
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  & > *:last-of-type {
    border-bottom: 0;
  }
`;

const CampsiteReviewBox = () => {
  const dispatch: AppDispatch = useDispatch();
  const { mainReviews, getCampReviews: CRState } = useAppSelector((state) => state.reviews);
  const { singleCamp } = useAppSelector((state) => state.camp);
  const [currTab, setCurrTab] = useState("전체");
  const [skip, setSkip] = useState(0);
  const [scrollHeight, clientHeight] = useScroll();
  const [sorted, setSorted] = useState("_id");

  const checkedRating = useCallback((tab: string) => (tab === "전체" ? "" : tab), []);

  const onThrolttle = useThrottle(async () => {
    await dispatch(
      getCampReviews({
        campId: singleCamp?._id as string,
        skip: String(skip + 1),
        rating: checkedRating(currTab),
        target: sorted,
      }),
    );
    setSkip(skip + 1);
  }, 500);

  const handleClickTab = useCallback(
    (tab: string) => {
      setSkip(0);
      setCurrTab(tab);

      dispatch(
        getCampReviews({
          campId: singleCamp?._id as string,
          rating: checkedRating(tab),
          target: sorted,
        }),
      );
    },
    [singleCamp?._id, sorted],
  );

  useEffect(() => {
    if (mainReviews.length >= 10 && scrollHeight + 300 >= clientHeight) {
      onThrolttle();
    }
  }, [scrollHeight, clientHeight, mainReviews]);

  const onChange = useCallback(async (e) => {
    const query = {
      target: e.target.value,
    };
    await dispatch(getCampReviews({ campId: singleCamp?._id as string, ...query }));
    setSorted(e.target.value);
  }, []);

  return (
    <StyledContainer>
      <BoxHeader>
        <SortedReview onChange={onChange} />
        <Tab current={currTab} onClick={handleClickTab} />
      </BoxHeader>
      <ListWrapper>
        {mainReviews[0] ? (
          mainReviews.map((review, i) => <ReviewCard key={review._id + i} review={review} />)
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
      </ListWrapper>
    </StyledContainer>
  );
};

export default CampsiteReviewBox;
