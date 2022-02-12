import React, { useState } from "react";
import styled from "styled-components";
import Tab from "@molecules/ReviewCard/Tap";
import ReviewCard from "@molecules/ReviewCard";

const StyledContainer = styled.section``;

const CampsiteReviewBox = () => {
  const [currTab, setCurrTab] = useState("전체");

  const handleClickTab = (tab: string) => {
    setCurrTab(tab);
  };
  return (
    <StyledContainer>
      <Tab current={currTab} onClick={handleClickTab} />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </StyledContainer>
  );
};

export default CampsiteReviewBox;
