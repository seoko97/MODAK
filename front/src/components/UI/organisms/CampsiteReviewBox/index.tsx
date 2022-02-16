import React, { useState } from "react";
import styled from "styled-components";
import Tab from "@molecules/ReviewCard/Tap";
import ReviewCard from "@molecules/ReviewCard";
import { useAppSelector } from "../../../../store/configureStore";

const StyledContainer = styled.section``;

const CampsiteReviewBox = () => {
  const { mainReviews } = useAppSelector((state) => state.reviews);
  const [currTab, setCurrTab] = useState("전체");

  const handleClickTab = (tab: string) => {
    setCurrTab(tab);
  };
  return (
    <StyledContainer>
      <Tab current={currTab} onClick={handleClickTab} />
      {mainReviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </StyledContainer>
  );
};

export default CampsiteReviewBox;
