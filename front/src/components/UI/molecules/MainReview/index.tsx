import Link from "@atoms/Link";
import React from "react";
import styled from "styled-components";
import { IReview } from "@src/types/reducers/review";
import { url } from "@src/apis";
import Avatar from "@atoms/Avatar";

import LocationIcon from "@icons/LocationIcon";
import CalendarIcon from "@icons/CalendarIcon";
import HeartIcon from "@icons/HeartIcon";

interface Props {
  review: IReview;
}
const limitStr = (str: string) => (str.length >= 25 ? `${str.substring(0, 25)}...` : str);

const MainReview = ({ review }: Props) => {
  const { author, content, count, photos, createdAt, location } = review;
  const { nickname, profileImg } = author;

  return (
    <>
      <Link href={`/camp/${location._id}`}>
        <StyledMainReviewContainer>
          <StyledCardImage>
            <div>
              <img alt="Mountains" src={photos[0] ? `${url}/${photos[0]}` : "/tent.jpg"} />
            </div>
          </StyledCardImage>

          {/* 카드내용 : 유저정보, 리뷰정보로 구성 */}
          <StyledCardContentBox>
            <StyledUserInfo>
              <Avatar url={profileImg} alt="사진" />
              <span>{nickname}</span>
            </StyledUserInfo>

            <StyledReviewInfo>
              <StyledReviewIconBox>
                <LocationIcon size={20} />
                <span>{location.name}</span>
              </StyledReviewIconBox>

              <div>
                <p>{limitStr(content)}</p>
              </div>

              <StyledDateLike>
                <StyledReviewIconBox>
                  <CalendarIcon size={20} />
                  <span>{String(createdAt).substring(0, 10)}</span>
                </StyledReviewIconBox>

                <StyledReviewIconBox>
                  <HeartIcon size={20} />
                  <span>{count.toLocaleString()}</span>
                </StyledReviewIconBox>
              </StyledDateLike>
            </StyledReviewInfo>
          </StyledCardContentBox>
        </StyledMainReviewContainer>
      </Link>
    </>
  );
};

export default MainReview;

// 리뷰 컨테이너
const StyledMainReviewContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 1px 2px 6px 0px rgb(158 154 153 / 32%);

  & * {
    color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  }

  cursor: pointer;
`;

const StyledCardImage = styled.div`
  width: 100%;

  & > div {
    position: relative;
    width: 100%;
    padding-bottom: 200px;
  }

  & img {
    border-radius: 8px 8px 0 0;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.BP.PC}) {
    & > div {
      padding-bottom: 70%;
      max-height: 320px;
    }
  }
`;

const StyledCardContentBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;

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
  gap: 20px;
`;

const StyledDateLike = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
`;

const StyledReviewIconBox = styled.div`
  display: flex;
  width: auto;
  align-items: center;

  gap: 5px;
  color: #757575;

  & svg {
    fill: #757575;
  }

  & > span {
    line-height: 1;
    font-size: 14px;
  }
`;
