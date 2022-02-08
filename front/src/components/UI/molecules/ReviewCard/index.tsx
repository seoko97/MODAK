import React, { memo } from "react";
import styled, { css } from "styled-components";
import SubTitle from "@atoms/SubTitle";
import Link from "next/link";
import Avatar from "../../atoms/Avatar";
import Button from "../../atoms/Button";
import Title from "../../atoms/Title";
import IconLinkBox from "../IconLinkBox";
import {
  StyledContainer,
  StyledProfileContainer,
  StyledReviewLikeBox,
  StyledReviewContents,
  StyledReviewPhotos,
  StyledProfile,
  StyledReviewCard,
  StyledReviewIconBox,
  StyledPostIconBox,
  StyledProfileIconBox,
} from "./style";

const ReviewCard = ({ review }) => {
  const { _id, content, photos, author, createAt, bookmarks } = review;
  const { nickname, profile, likes, posts } = author;
  const subContent = content.substring(0, 1000) + "...더보기";
  return (
    <StyledContainer>
      <StyledProfileContainer>
        <StyledProfile href="#">
          <>
            <Avatar size={70} url={profile} alt="설명" />
            <Title size={14}>{nickname}</Title>
          </>
        </StyledProfile>
        <StyledProfileIconBox>
          <StyledPostIconBox href="#">
            <SubTitle>{posts}</SubTitle>
          </StyledPostIconBox>
          <StyledReviewIconBox>{likes}</StyledReviewIconBox>
        </StyledProfileIconBox>
      </StyledProfileContainer>
      <StyledReviewCard>
        <StyledReviewContents>
          <SubTitle>{createAt}</SubTitle>
          <p>{subContent}</p>
          <StyledReviewLikeBox>
            <Button name="괜찮아요"></Button>
            <Button name="신고하기"></Button>
          </StyledReviewLikeBox>
        </StyledReviewContents>
        <StyledReviewPhotos>
          {photos.map((photo) => (
            <img key={1} src={photo} alt="reviewPhoto" />
          ))}
        </StyledReviewPhotos>
      </StyledReviewCard>
    </StyledContainer>
  );
};

export default memo(ReviewCard);
