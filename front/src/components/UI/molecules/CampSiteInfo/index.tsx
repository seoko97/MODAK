import React from "react";
import styled, { css } from "styled-components";
import RowFrame from "@templates/RowFrame";
import Title from "@atoms/Title";
import Button from "@atoms/Button";
import LookIcon from "@icons/LookIcon";
import CommentIcon from "@icons/CommentIcon";
import HeartIcon from "@icons/HeartIcon";

interface Props {
  // _id: object;
  name: string;
  address: string;
  lineIntro: string;
  intro: string;
  tel: string;
  animal: string;
  category: string[];
  thema: string[];
  amenities: string[];
  rental: string[];
  environment: string[];
  photos: string; // string[];
  reviews: string[];
  bookmark: string[];
  views: number;
}

const CampSiteInfo = ({
  name,
  address,
  lineIntro,
  intro,
  tel,
  animal,
  category,
  thema,
  amenities,
  rental,
  environment,
  photos,
  reviews,
  bookmark,
  views,
}: Props) => {
  return (
    <>
      <StyledCampCoverImgBox photos={photos}>
        <StyledCampCoverImgContent>
          {/* 캠핑장 이름 */}
          <Title size={35}>{name}</Title>

          {/* 한 줄 소개 */}
          <p>{lineIntro}</p>

          {/* 아이콘/ 서브택스트 */}
          <StyledIconContainer>
            <StyledIconBox>
              <StyledRowIcon>
                <LookIcon size={20} />
                <span>{views}</span>
              </StyledRowIcon>
              <StyledRowIcon>
                <CommentIcon size={20} />
                <span>{reviews.length}</span>
              </StyledRowIcon>
              <StyledRowIcon>
                <HeartIcon size={16} />
                <span>{bookmark.length}</span>
              </StyledRowIcon>
            </StyledIconBox>

            <StyledButtonBox>
              <Button name="후기작성" />
              <Button name="위시리스트 추가" />
            </StyledButtonBox>
          </StyledIconContainer>

          {/* 테마 & 환경 */}
          <StyledThemaBox>{makeTagList(thema)}</StyledThemaBox>
          <StyledThemaBox>{makeTagList(environment)}</StyledThemaBox>
        </StyledCampCoverImgContent>
      </StyledCampCoverImgBox>

      <RowFrame>
        <StyledCampSiteContainer>
          <StyledCampSiteImage>
            <img alt="d" src="/post.jpg" />
          </StyledCampSiteImage>

          <StyledCampSiteContentBox>
            {/* 소개글 */}
            <p>{intro}</p>

            {/* 상세정보(주소, 전화번호) */}
            <StyledCampSiteDetailBox>
              <StyledCampSiteDetail>
                <span>야영장 구분</span>
                <p>{makeList(category)}</p>
              </StyledCampSiteDetail>
              <StyledCampSiteDetail>
                <span>연락처</span>
                <p>{tel}</p>
              </StyledCampSiteDetail>
              <StyledCampSiteDetail>
                <span>주소</span>
                <p>{address}</p>
              </StyledCampSiteDetail>
              <StyledCampSiteDetail>
                <span>대여</span>
                <p>{makeList(rental)}</p>
              </StyledCampSiteDetail>
              <StyledCampSiteDetail>
                <span>반려동물출입</span>
                <p>{animal}</p>
              </StyledCampSiteDetail>
            </StyledCampSiteDetailBox>
          </StyledCampSiteContentBox>
        </StyledCampSiteContainer>
      </RowFrame>
    </>
  );
};

function makeList(list: string[]) {
  const lists = list.map((el, idx) => <span key={idx}>{el} </span>);
  return lists;
}

function makeTagList(list: string[]) {
  const lists = list.map((el, idx) => <StyledThema key={idx}># {el}</StyledThema>);
  return lists;
}

CampSiteInfo.defaultProps = {
  // _id: { $oid: "61fbf0897e326ea95e9e5999" },
  name: "달천공원오토캠핑장",
  address: "경상남도 창원시 의창구 북면 달천길 150 ",
  lineIntro: "사계절 서로 다른 매력의 캠핑을 즐길 수 있는 곳",
  intro:
    "달천공원 오토캠핑장은 창원시 북면 천주산 달천계곡에 위치하고 있다. 자연이 주는 맑은 계곡과 천주산 자락의 기운을 느낄 수 있는 캠핑장이다. 캠핑장 바로 앞으로는 달천계곡이 흐르고 있어 여름철 물놀이 장소로 좋다. 또한 천주산 등산로가 있어 등산하기에도 좋은 곳이다. 봄철 진달래가 만개 할 때는 등산도 하면서 꽃도 보고, 여름에는 계곡에서 시원한 물놀이도 하면서, 즐기는 일석이조의 캠핑장이다.     달천캠핑장은 화장실, 샤워장은 아래쪽 사이트, 취사장은 위쪽 사이트를 이용해야 하므로 무조건 위, 아래로 이동을 해야 한다. 전기 사용에 무선인터넷도 가능하며 화장실, 샤워장이 깨끗하고 온수도 잘 나온다. 샤워실 이용시간(오전8시~10시, 오후7시~9시)이 정해져 있으므로 사전에 확인하고 이용하는 것이 좋다. 개수대에 에어컨이 설치되어 있어 한여름에도 시원하게 설거지를 할 수 있다.",
  tel: "055-262-0752",
  animal: "가능(소형견)",
  category: ["일반야영장", "자동차야영장", "카라반"],
  thema: ["일출명소", "일몰명소", "봄꽃여행", "여름물놀이", "걷기길"],
  amenities: ["전기", "무선인터넷", "장작판매", "온수", "놀이터", "운동시설"],
  rental: ["텐트", "화로대", "난방기구", "식기", "침낭"],
  environment: ["산", "숲", "계곡", "도심"],
  photos: "/post.jpg",
  reviews: ["1", "2", "3", "4"],
  bookmark: ["1", "2", "3", "4", "2", "3", "4", "2", "3", "4"],
  views: 0,
};

export default CampSiteInfo;

// 캠핑장 소개 박스 (이미지 & 주소 등)
const StyledCampSiteContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    flex-direction: column;
  }
`;

const StyledCampSiteImage = styled.div`
  position: relative;
  width: 50%;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    width: 100%;
    height: 400px;
  }
`;

const StyledCampSiteContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  gap: 25px;

  & > p {
    font-weight: bold;
  }
`;

const StyledIconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const StyledIconBox = styled.div`
  display: flex;
  gap: 15px;
`;

const CampSiteIcon = css`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;

  svg {
    fill: #fff;

    & + span {
      font-size: 14px;
    }
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    svg {
      width: 15px;
      height: 15px;

      & + span {
        font-size: 12px;
      }
    }
  }
`;

const StyledRowIcon = styled.div`
  ${CampSiteIcon};
`;

const StyledThemaBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const StyledThema = styled.span`
  font-weight: bold;
  color: #fff;
  background-color: #038c5a;
  padding: 8px 10px;
  border-radius: 12px;

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    padding: 6px 8px;
  }
`;

const StyledCampSiteDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  margin-top: auto;
`;

const StyledCampSiteDetail = styled.div`
  display: flex;
  justify-content: flex-start;

  &>span: first-of-type {
    flex: 1;
    min-width: 100px;
    font-weight: 700;
  }

  & > p {
    flex: 4;
    color: #757575;
  }
`;

// 상단 커버 이미지 관련
const StyledCampCoverImgBox = styled.div<Pick<Props, "photos">>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-image: url("/post.jpg");
  background-size: cover;
  overflow: hidden;

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const StyledCampCoverImgContent = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  box-sizing: border-box;
  color: #fff;
  padding: 50px;
  z-index: 2;

  & > p {
    font-weight: bold;
    font-size: 20px;
    font-style: italic;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    & > h2 {
      font-size: 26px;
    }

    & > p {
      font-size: 16px;
    }
  }
`;

const StyledButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  & > button {
    background-color: royalblue;
    color: #fff;
    padding: 8px 12px;
    border-radius: 12px;
  }
  & > button:last-child {
    background-color: crimson;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    gap: 5px;

    & > button {
      padding: 6px 8px;
    }
  }
`;
