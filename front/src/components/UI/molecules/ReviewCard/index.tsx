import React, { memo } from "react";
import Link from "next/link";
import SubTitle from "@atoms/SubTitle";
import Avatar from "@atoms/Avatar";
import Title from "@atoms/Title";
import HearctIcon from "@icons/HeartIcon";
import PencilIcon from "@icons/PencilIcon";
import Emotion from "./Emotion";

import {
  StyledContainer,
  StyledProfileContainer,
  StyledReviewEvaluateBox,
  StyledReviewPhotos,
  StyledProfile,
  StyledReviewCard,
  StyledReviewIconBox,
  StyledProfileIconBox,
  IconWrapper,
} from "./style";

interface Author {
  _id: string;
  nickname: string;
  profile: string;
  likes: number;
  posts: number; // 변경될듯
}
interface Props {
  _id: number;
  content: string;
  photos?: string[];
  author: Author;
  createAt: string;
  emotion: string; // "평가 아이콘 관련"
}

const ReviewCard = ({ _id, content, photos, author, createAt, emotion }: Props) => {
  const { nickname, profile, likes, posts } = author;
  return (
    <StyledContainer>
      <StyledProfileContainer>
        <StyledProfile>
          <Link href="#">
            <>
              <Avatar size={70} url={profile} alt="유저프로필" />
              <Title size={14}>{nickname}</Title>
            </>
          </Link>
          <StyledProfileIconBox>
            <IconWrapper>
              <PencilIcon size={13} />
              <span>{posts}</span>
            </IconWrapper>
            <StyledReviewIconBox>
              <HearctIcon size={13} />
              <span>{likes}</span>
            </StyledReviewIconBox>
          </StyledProfileIconBox>
        </StyledProfile>
        <Emotion emotion={emotion} />
      </StyledProfileContainer>
      <StyledReviewCard>
        <SubTitle>{createAt}</SubTitle>
        <p>{content.length > 1000 ? `${content.substring(0, 1000)}...더보기` : content}</p>
        <StyledReviewPhotos>
          {photos?.map((photo, idx) => (
            <img key={idx} src={photo} alt="reviewPhoto" />
          ))}
        </StyledReviewPhotos>

        <StyledReviewEvaluateBox>
          <span>신고하기</span>
        </StyledReviewEvaluateBox>
      </StyledReviewCard>
    </StyledContainer>
  );
};

// 테스트용 데이터
ReviewCard.defaultProps = {
  _id: 1,
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto.",
  photos: ["/post.jpg", "/post.jpg", "/post.jpg"],
  author: {
    _id: "2",
    nickname: "김불멍",
    profile: "/post.jpg",
    likes: 123,
    posts: 13,
  },
  createAt: "2022-01-28",
};

export default memo(ReviewCard);
