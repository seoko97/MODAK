import styled, { css } from "styled-components";
import Link from "next/link";
import React, { memo } from "react";
import SubTitle from "@atoms/SubTitle";
import MyPageProfile from "../../molecules/MypageProfile/MyPageProfile";
import Title from "../../atoms/Title";

const Main = styled.div`
  background-color: #f6f6f6;
  padding: 30px;
`;

// --- 컨테이너 ---

const Container = styled.section``;

const Categories = styled.div`
  display: flex;
  justify-content: center;
`;
const Category = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 0.1s;
  :hover {
    color: orange;
  }
`;
// --- 내 리뷰 ---
const Review = styled.div``;

const Desciption = styled.figcaption`
  & p {
    padding: 5px;
  }
`;

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

// @ Styled라고 다 이름 붙이지 않아도
// @ BEM 패턴으로 작명: 관련된 애들을 묶을 수 있음
// @ material UI...디자인 라이브러리들이 어떻게 컴포넌트 구성하는지 interface 참고

// const Card = styled.div`
// `;
// const Title = styled.h1``;
// Card.Title = Title;

const MyPage = ({ review }) => {
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
        {/* <Review>
        <S.Desciption>
          <SubTitle>{createAt}</SubTitle>
          <p>{subContent}</p>
        </S.Desciption>
        <PhotoBox>
          {photos.map((photo) => (
            <img key={1} src={photo} alt="reviewPhoto" />
          ))}
        </PhotoBox>
      </Review> */}
      </Container>
    </Main>
  );
};

export default memo(MyPage);
