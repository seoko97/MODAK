import React from "react";
import styled from "styled-components";
import ReviewCard from "../ReviewCard/ReviewCard";

const StyledContainer = styled.section``;
const StyledCountBox = styled.span`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  margin-right: 20px;
`;
const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 0.1s;
  position: relative;
  :hover:not(.button-active) {
    color: #f29f05;
  }
  &.button-active {
    font-weight: bold;
    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      right: 0;
      display: block;
      left: 0;
      height: 2px;
      background-color: #0d0d0d;
    }
  }
`;

const CampsiteReviewBox = () => {
  return (
    <StyledContainer>
      <StyledCountBox>
        <StyledButton className="button-active">전체(9)</StyledButton>
        <StyledButton>또 가고 싶어요(4)</StyledButton>
        <StyledButton>평범해요(3)</StyledButton>
        <StyledButton>최악입니다(2)</StyledButton>
      </StyledCountBox>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
    </StyledContainer>
  );
};

export default CampsiteReviewBox;
