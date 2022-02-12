import Link from "@atoms/Link";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import LocationIcon from "@icons/LocationIcon";
import CalendarIcon from "@icons/CalendarIcon";
import HeartIcon from "@icons/HeartIcon";
import Avatar from "../../atoms/Avatar";

interface Props {
  to: string; // 클릭 시 이동하는 곳
  author: string; // 사용해서 profile과 name 가져오기(임시)
  createAt: string;
  content: string;
  likes: number; // string[] (임시)
  url: string;
}

const MainReview = ({ to, author, content, createAt, likes, url }: Props) => {
  return (
    <>
      <Link href={to}>
        <StyledMainReviewContainer>
          {/* 카드 이미지 */}
          <StyledCardImage>
            <Image alt="Mountains" src="/post.jpg" layout="fill" objectFit="cover" />
          </StyledCardImage>

          {/* 카드내용 : 유저정보, 리뷰정보로 구성 */}
          <StyledCardContentBox>
            <StyledUserInfo>
              <Avatar url="/post.jpg" alt="사진" />
              <span>홍길동홍길동홍길동홍</span>
            </StyledUserInfo>

            <StyledReviewInfo>
              <StyledReviewIconBox>
                <LocationIcon size={20} />
                <span>캠프여주</span>
              </StyledReviewIconBox>

              <div>
                <p>시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.</p>
              </div>

              <StyledDateLike>
                <StyledReviewIconBox>
                  <CalendarIcon size={20} />
                  <span>22.02.03</span>
                </StyledReviewIconBox>

                <StyledReviewIconBox>
                  <HeartIcon size={20} />
                  <span>123,456</span>
                </StyledReviewIconBox>
              </StyledDateLike>
            </StyledReviewInfo>
          </StyledCardContentBox>
        </StyledMainReviewContainer>
      </Link>
    </>
  );
};

MainReview.defaultProps = {
  to: "#",
  author: "홍길동홍길동홍길동홍길동홍길동홍길동홍길동",
  content:
    "시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.시설이 너무 좋습니다.",
  createAt: "22.02.03",
  likes: 123456,
  url: "/post.jpg",
};

export default MainReview;

// 리뷰 컨테이너
const StyledMainReviewContainer = styled.div`
  position: relative;
  width: 320px; // 추후 수정
  height: 480px; // 추후 수정

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 8px;
  cursor: pointer;
`;

const StyledCardImage = styled.div`
  position: relative;
  width: 100%;
  flex: 1;

  & img {
    border-radius: 8px 8px 0 0;
  }
`;

const StyledCardContentBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;

  & > div:first-of-type {
    margin-bottom: 10px;
  }
`;

const StyledUserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  font-weight: bold;
`;

const StyledReviewInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const StyledDateLike = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
`;

const StyledReviewIconBox = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  align-items: center;
  gap: 5px;
  color: #757575;

  & svg {
    fill: #757575;
  }

  div + span {
    font-size: 14px;
  }
`;
