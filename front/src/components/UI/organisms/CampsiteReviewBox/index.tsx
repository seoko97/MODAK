import React from "react";
import styled from "styled-components";
import ReviewCard from "../../molecules/ReviewCard";

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

type ReviewProps = {
  _id: number;
  content: string;
  photos?: string[];
  author: Record<string, unknown>;
  createAt: string;
  bookmarks?: number;
};

// 테스트용 데이터
const review: ReviewProps = {
  _id: 1,
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto.",
  photos: [
    "https://images.unsplash.com/photo-1594495894542-a46cc73e081a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ],
  author: {
    _id: 2,
    nickname: "김불멍",
    profile:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    likes: 123,
    posts: 13,
  },
  createAt: "2022-01-28",
  bookmarks: 173,
};

const CampsiteReviewBox = () => {
  return (
    <StyledContainer>
      <StyledCountBox>
        <StyledButton className="button-active">전체(9)</StyledButton>
        <StyledButton>또 가고 싶어요(4)</StyledButton>
        <StyledButton>평범해요(3)</StyledButton>
        <StyledButton>최악입니다(2)</StyledButton>
      </StyledCountBox>
      <ReviewCard review={review} key={1}></ReviewCard>
      <ReviewCard review={review} key={2}></ReviewCard>
      <ReviewCard review={review} key={3}></ReviewCard>
      <ReviewCard review={review} key={4}></ReviewCard>
    </StyledContainer>
  );
};

export default CampsiteReviewBox;
