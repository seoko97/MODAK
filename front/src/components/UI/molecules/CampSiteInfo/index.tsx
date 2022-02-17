import React from "react";
import styled from "styled-components";
import RowFrame from "@templates/RowFrame";
import { ICamp } from "@type/reducers/camp";
import { useAppSelector } from "@store/configureStore";

const CampSiteInfo = () => {
  const { singleCamp } = useAppSelector((state) => state.camp);

  const { address, intro, tel, animal, category, rental, firstImage } = singleCamp as ICamp;
  return (
    <>
      <RowFrame>
        <CampSiteContainer>
          <CampSiteImage>
            <img alt="캠핑장 소개 사진" src={firstImage || "/tent.jpg"} />
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
