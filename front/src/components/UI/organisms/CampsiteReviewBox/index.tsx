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
      {/* 추후 select 형식으로 변경될 수 있음 */}
      <Tab current={currTab} onClick={handleClickTab} />
      <ReviewCard emotion="best" />
      <ReviewCard emotion="normal" />
      <ReviewCard emotion="best" />
      <ReviewCard emotion="angry" />
      <ReviewCard emotion="best" />
      <ReviewCard emotion="angry" />
    </StyledContainer>
  );
};

export default CampsiteReviewBox;
