import React, { memo } from "react";
import styled from "styled-components";

const mode = "dark";
const darkReviewBackground = "#16181A";
const darkReviewColor = "#F2F2F2";

const StyledContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  background-color: #f6f6f6;
  padding: 30px;
  justify-content: center;
`;

const StyledReviewProfile = styled.div`
  padding: 10px;
  flex-basis: 10%;
  text-align: center;
  & img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  & .author {
    font-weight: bold;
  }
`;

const StyledReviewCard = styled.div`
  flex-basis: 70%;
  padding: 10px;
`;

const StyledReviewContents = styled.div`
  & .createAt {
    color: #898989;
  }
  & .description {
    padding: 5px;
  }
`;

const StyledReviewPhotos = styled.div`
  display: flex;
  & img {
    width: 30%;
    + img {
      margin-left: 20px;
    }
  }
`;

const StyledReviewLikeBox = styled.div`
  display: flex;
  justify-content: end;
  padding: 6px;
`;
const StyledReviewLike = styled.div`
  :hover {
    color: #f29f05;
  }
  transition: color 0.1s;
  padding: 5px;
`;
const StyledReviewReport = styled.div`
  padding: 5px;
  :hover {
    color: #f29f05;
  }
`;

const ReviewCard = () => {
  // 테스트용 데이터
  const review = {
    _id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto.",
    photos: [
      "https://images.unsplash.com/photo-1594495894542-a46cc73e081a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    author: "김불멍",
    createAt: "2022-01-28",
    likes: 173,
  };

  const user = {
    profile:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    likes: 123,
    posts: 13,
  };

  // 테스트용 데이터
  const { _id, content, photos, author, createAt } = review;
  const { profile, likes, posts } = user;
  const subContent = content.substring(0, 2000) + "...더보기";

  return (
    <StyledContainer>
      <StyledReviewProfile>
        <img src={profile} />
        <p className="author">{author}</p>
        <p>
          글{posts}
          하트{likes}
        </p>
      </StyledReviewProfile>
      <StyledReviewCard>
        <StyledReviewContents>
          <p className="createAt">{createAt}</p>
          <p className="description">{subContent}</p>
          <StyledReviewLikeBox>
            <StyledReviewLike>괜찮아요</StyledReviewLike>
            <StyledReviewReport>신고하기</StyledReviewReport>
          </StyledReviewLikeBox>
        </StyledReviewContents>
        <StyledReviewPhotos>
          {photos.map((photo) => (
            <img src={photo} alt="reviewPhoto" />
          ))}
        </StyledReviewPhotos>
      </StyledReviewCard>
    </StyledContainer>
  );
};

export default memo(ReviewCard);
