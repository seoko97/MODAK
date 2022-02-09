import styled, { css } from "styled-components";
import Link from "next/link";
import React, { memo } from "react";
import SubTitle from "@atoms/SubTitle";
import MyPageProfile from "../../molecules/MypageProfile";
import Title from "../../atoms/Title";
import HearctIcon from "@src/components/icons/HeartIcon";

// --- 전체 컨테이너 ---

const Main = styled.div``;

// --- 컨테이너 ---

const Container = styled.article``;

// --- 카테고리 ---

const Categories = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
  & ::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    bottom: -20px;
    background-color: #00010d;
  }
`;
const Category = styled.button`
  border: none;
  background-color: transparent;
  width: 100px;
  cursor: pointer;
  transition: color 0.1s;
  :hover {
    color: orange;
  }
`;

// --- 내 리뷰 ---
const Review = styled.section``;

const PhotoBox = styled.div`
  display: flex;
  gap: 20px;
  & img {
    width: 30%;
    @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
      width: 100%;
      + img {
        display: none;
      }
    }
  }
`;

// --- 내 캠핑 기록 ---

const VisitedCamp = styled.div``;

const CampInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`;

const CampLink = styled(Link)`
  display: flex;
  cursor: pointer;
`;

// --- 찜한 캠핑장 ---

const WishCamp = styled.div``;

const Tags = styled.div`
  display: flex;
`;

const OtherReview = styled.div``;

const OtherLink = styled(Link)``;

const IconBoxStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: darkgray;
  :hover {
    color: #161616;
  }
`;

const IconBox = styled.div`
  display: flex;
`;

const Icons = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 5px;
  gap: 10px;
  justify-content: center;
  align-items: baseline;
  font-size: 14px;
  cursor: pointer;
  :hover {
    font-weight: bold;
    & svg {
      fill: red;
    }
  }
`;

// @ Styled라고 다 이름 붙이지 않아도
// @ BEM 패턴으로 작명: 관련된 애들을 묶을 수 있음
// @ material UI...디자인 라이브러리들이 어떻게 컴포넌트 구성하는지 interface 참고

// const Card = styled.div`
// `;
// const Title = styled.h1``;
// Card.Title = Title;

const MyPage = () => {
  const review = {
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

  const { _id, content, photos, author, createAt, bookmarks } = review;
  const { nickname, profile, likes, posts } = author;
  const subContent = content.substring(0, 1000) + "...더보기";
  return (
    <Main>
      <MyPageProfile></MyPageProfile>
      <Container>
        <Categories>
          <Category>
            <Title size={14}>내 리뷰</Title>
          </Category>
          <Category>
            <Title size={14}>나의 캠핑 기록</Title>
          </Category>
          <Category>
            <Title size={14}>찜한 캠핑장</Title>
          </Category>
        </Categories>
        <Review>
          <CampInfo>
            <SubTitle size={14}>{createAt}</SubTitle>
            <CampLink href="#">
              <>@캠핑장 주소</>
            </CampLink>
            <Icons>
              <HearctIcon size={12}></HearctIcon>14
            </Icons>
          </CampInfo>
          <p>{subContent}</p>
          <PhotoBox>
            {photos.map((photo) => (
              <img key={1} src={photo} alt="reviewPhoto" />
            ))}
          </PhotoBox>
        </Review>
        {/* <WishCamp>
          <CampInfo>
            <CampLink href="#">
              <>
                <p>@캠핑장 이름/ 주소</p>
              </>
            </CampLink>
            <p>asdasd</p>
          </CampInfo>
          <Tags>#가족캠핑 #글램핑</Tags>
          <OtherReview>
            <Title size={14}>주요 리뷰</Title>
            <PhotoBox>
              {photos.map((photo) => (
                <OtherLink href="#" key={1}>
                  <img src={photo} alt="reviewPhoto" />
                </OtherLink>
              ))}
            </PhotoBox>
          </OtherReview>
        </WishCamp> */}
        {/* <VisitedCamp>
        <SubTitle>2022-01-28</SubTitle>
        <CampInfo>
          <CampLink href="#">
            <>
              <p>@캠핑장 이름/ 주소</p>
            </>
          </CampLink>
          <p>asdasd</p>
        </CampInfo>
      </VisitedCamp> */}
      </Container>
    </Main>
  );
};

export default memo(MyPage);
