import styled from "styled-components";
import Link from "next/link";
import React, { memo, ReactElement, useState } from "react";
import SubTitle from "@atoms/SubTitle";
import HeartIcon from "@src/components/icons/HeartIcon";
import PencilIcon from "@src/components/icons/PencilIcon";
import MyPageProfile from "../../molecules/MypageProfile";
import Title from "../../atoms/Title";
import Tabs from "../Tabs";

export type TabList = {
  "내 리뷰": ReactElement;
  "나의 캠핑 기록": ReactElement;
  "찜한 캠핑장": ReactElement;
};

const IconComponent = () => (
  <IconBox>
    <Icons>
      <PencilIcon size={13} /> 10
    </Icons>
    <Icons>
      <HeartIcon size={13} /> 10
    </Icons>
  </IconBox>
);

const HeartIconComponent = () => (
  <IconBox>
    <Icons>
      <HeartIcon size={13} /> 10
    </Icons>
  </IconBox>
);

const MyPage = () => {
  const review = {
    _id: 1,
    content: `안녕하세요! 저번 주말 선재도의 트리 캠핑장에 다녀왔습니다.
      여기는 경기도 지역 오션뷰 캠핑장으로 정말 유명한 곳인데요.
      홈페이지에서 예약할 때 정보가 별로 없다보니 어떤자리를 예약하는게 좋을지 분간이 잘 안되서 영상을 직접 찍게 되었습니다.
      
      이 곳은 정말 숲 속에 있는 분위기에 바다까지 볼 수 있어서 낭만적인 분위기를 연출할 수 있는 곳입니다.
      또한 겨울에 와서 그런지 벌레도 전혀 없고 한적해서 정말 좋았어요.
      시도 때도 없이 날아다니는 비행기 소리가 조금 거슬리긴 하지만..
      인천지역 트리 캠핑장 추천합니다!
      
      =======================================================================================================
      E=MAIL : 88leeq@naver.com
      인스타그램 : https://www.instagram.com/88_leeq`,
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

  const ReviewComponent = () => (
    <Review>
      <CampInfo>
        <SubTitle size={14}>{createAt}</SubTitle>
        <CampLink href="#">
          <a>@장호비치캠핑장</a>
        </CampLink>
        <HeartIconComponent />
      </CampInfo>
      <ReviewPost>
        안녕하세요! 저번 주말 선재도의 트리 캠핑장에 다녀왔습니다.<br></br>
        여기는 경기도 지역 오션뷰 캠핑장으로 정말 유명한 곳인데요.<br></br>
        홈페이지에서 예약할 때 정보가 별로 없다보니 어떤자리를 예약하는게 좋을지 분간이 잘 안되서
        영상을 직접 찍게 되었습니다.<br></br>
        <br></br>이 곳은 정말 숲 속에 있는 분위기에 바다까지 볼 수 있어서 낭만적인 분위기를 연출할
        수 있는 곳입니다.<br></br>
        또한 겨울에 와서 그런지 벌레도 전혀 없고 한적해서 정말 좋았어요.<br></br>
        시도 때도 없이 날아다니는 비행기 소리가 조금 거슬리긴 하지만..<br></br>
        인천지역 트리 캠핑장 추천합니다!<br></br>
        <br></br>
        =======================================================================================================
        <br></br>
        E=MAIL : 88leeq@naver.com<br></br>
        인스타그램 : https://www.instagram.com/88_leeq
      </ReviewPost>
      <PhotoBox>
        {photos.map((photo) => (
          <img key={1} src={photo} alt="reviewPhoto" />
        ))}
      </PhotoBox>
    </Review>
  );

  const VisitedComponent = () => (
    <VisitedCamp>
      <SubTitle>2022-01-28</SubTitle>
      <CampInfo>
        <CampLink href="#">
          <a>@캠핑장 이름/ 주소</a>
        </CampLink>
        <IconComponent />
      </CampInfo>
    </VisitedCamp>
  );

  const WishComponent = () => (
    <WishCamp>
      <CampInfo>
        <CampLink href="#">
          <a>
            <p>@캠핑장 이름/ 주소</p>
          </a>
        </CampLink>
        <IconComponent />
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
    </WishCamp>
  );

  const tabList: TabList = {
    "내 리뷰": <ReviewComponent />,
    "나의 캠핑 기록": <VisitedComponent />,
    "찜한 캠핑장": <WishComponent />,
  };

  const [tab, setTab] = useState<keyof TabList>("내 리뷰");

  const handleClick = (tab: keyof TabList) => {
    setTab(tab);
  };

  return (
    <Main>
      <MyPageProfile />
      <Tabs current={tab} onClick={handleClick}></Tabs>
      {tabList[tab]}
    </Main>
  );
};

const IconBox = styled.div`
  display: flex;
`;

const Icons = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 5px;
  gap: 6px;
  justify-content: center;
  align-items: baseline;
  font-size: 14px;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    padding: 0;
  }
`;

const CampInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  margin-bottom: 14px;
  & a {
    color: #038c5a;
  }
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    flex-direction: column;
    gap: 2px;
  }
`;

const CampLink = styled(Link)`
  display: flex;
  cursor: pointer;
`;

const PhotoBox = styled.div`
  display: flex;
  margin-top: 60px;
  & img {
    width: 33.3%;
    @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
      width: 100%;
      + img {
        display: none;
      }
    }
  }
`;

// --- 전체 컨테이너 ---
const Main = styled.div`
  padding: 20px;
`;

const Review = styled.section`
  padding-left: 10px;
  padding-right: 10px;
  & p {
    margin-bottom: 10px;
  }
`;

const ReviewPost = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 160%;
`;

const VisitedCamp = styled.div``;

const WishCamp = styled.div``;

const Tags = styled.div`
  display: flex;
`;

const OtherReview = styled.div``;

const OtherLink = styled(Link)``;

export default memo(MyPage);
