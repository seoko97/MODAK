import React from "react";
import Image from "next/image";
import { NextPage } from "next";
import styled from "styled-components";
import { useAppSelector } from "@store/configureStore";

import RowFrame from "@templates/RowFrame";

import GridChooseCamp from "@organisms/GridChooseCamp";
import CardSlider from "@organisms/CardSlider";

import MainCampCard from "@molecules/MainCampCard";
import MainReview from "@molecules/MainReview";
import MainSearchForm from "@molecules/MainSearchForm";

const MainHeader = styled.div`
  position: relative;
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const Inner = styled.div`
  width: 100%;
  padding: 120px 20px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  gap: 20px;
  text-align: center;

  & > h2 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    padding: 120px 10px;
    & > h2 {
      font-size: 20px;
    }
  }
`;

const Home: NextPage = () => {
  const { mainReviews } = useAppSelector((state) => state.reviews);
  const { mainCamps } = useAppSelector((state) => state.camps);

  return (
    <RowFrame>
      <MainHeader>
        <Image priority={true} src="/tent.jpg" alt="cover" layout="fill" objectFit="cover" />
        <Inner>
          <h2>캠핑장 정보 어디에서 찾으세요?</h2>
          <MainSearchForm />
        </Inner>
      </MainHeader>
      <GridChooseCamp />
      <CardSlider title="인기 캠핑장">
        {mainCamps.map((camp) => (
          <MainCampCard key={camp._id} camp={camp} url={`/camp/${camp._id}`} />
        ))}
      </CardSlider>
      <CardSlider title="인기 리뷰">
        {mainReviews.map((review) => (
          <MainReview review={review} key={review._id} />
        ))}
      </CardSlider>
    </RowFrame>
  );
};

export default Home;
