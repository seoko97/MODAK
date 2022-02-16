import React from "react";
import styled from "styled-components";
import RowFrame from "@templates/RowFrame";

interface Props {
  // _id: object;
  address: string;
  intro: string;
  tel: string;
  animal: string;
  category: string[];
  rental: string[];
  photos: string; // string[];
}

const CampSiteInfo = ({ address, intro, tel, animal, category, rental, photos }: Props) => {
  return (
    <>
      <RowFrame>
        <CampSiteContainer>
          <CampSiteImage>
            <img alt="캠핑장 소개 사진" src="/post.jpg" />
          </CampSiteImage>

          <CampSiteContentBox>
            {/* 소개글 */}
            <p>{intro}</p>

            {/* 상세정보(주소, 전화번호) */}
            <CampSiteDetailBox>
              <CampSiteDetail>
                <span>야영장 구분</span>
                <p>{makeList(category)}</p>
              </CampSiteDetail>
              <CampSiteDetail>
                <span>연락처</span>
                <p>{tel}</p>
              </CampSiteDetail>
              <CampSiteDetail>
                <span>주소</span>
                <p>{address}</p>
              </CampSiteDetail>
              <CampSiteDetail>
                <span>대여</span>
                <p>{makeList(rental)}</p>
              </CampSiteDetail>
              <CampSiteDetail>
                <span>반려동물출입</span>
                <p>{animal}</p>
              </CampSiteDetail>
            </CampSiteDetailBox>
          </CampSiteContentBox>
        </CampSiteContainer>
      </RowFrame>
    </>
  );
};

function makeList(list: string[]) {
  const lists = list.map((el, idx) => <span key={idx}>{el} </span>);
  return lists;
}

CampSiteInfo.defaultProps = {
  // _id: { $oid: "61fbf0897e326ea95e9e5999" },
  address: "경상남도 창원시 의창구 북면 달천길 150 ",
  intro:
    "달천공원 오토캠핑장은 창원시 북면 천주산 달천계곡에 위치하고 있다. 자연이 주는 맑은 계곡과 천주산 자락의 기운을 느낄 수 있는 캠핑장이다. 캠핑장 바로 앞으로는 달천계곡이 흐르고 있어 여름철 물놀이 장소로 좋다. 또한 천주산 등산로가 있어 등산하기에도 좋은 곳이다. 봄철 진달래가 만개 할 때는 등산도 하면서 꽃도 보고, 여름에는 계곡에서 시원한 물놀이도 하면서, 즐기는 일석이조의 캠핑장이다.     달천캠핑장은 화장실, 샤워장은 아래쪽 사이트, 취사장은 위쪽 사이트를 이용해야 하므로 무조건 위, 아래로 이동을 해야 한다. 전기 사용에 무선인터넷도 가능하며 화장실, 샤워장이 깨끗하고 온수도 잘 나온다. 샤워실 이용시간(오전8시~10시, 오후7시~9시)이 정해져 있으므로 사전에 확인하고 이용하는 것이 좋다. 개수대에 에어컨이 설치되어 있어 한여름에도 시원하게 설거지를 할 수 있다.",
  tel: "055-262-0752",
  animal: "가능(소형견)",
  category: ["일반야영장", "자동차야영장", "카라반"],
  amenities: ["전기", "무선인터넷", "장작판매", "온수", "놀이터", "운동시설"],
  rental: ["텐트", "화로대", "난방기구", "식기", "침낭"],
  environment: ["산", "숲", "계곡", "도심"],
  photos: "/post.jpg",
};

export default CampSiteInfo;

// 캠핑장 소개 박스 (이미지 & 주소 등)
const CampSiteContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    flex-direction: column;
  }
`;

const CampSiteImage = styled.div`
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

const CampSiteContentBox = styled.div`
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

const CampSiteDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  margin-top: auto;
`;

const CampSiteDetail = styled.div`
  display: flex;
  justify-content: flex-start;

  & > span:first-of-type {
    flex: 1;
    min-width: 100px;
    font-weight: 700;
  }

  & > p {
    flex: 4;
    color: #757575;
  }
`;
