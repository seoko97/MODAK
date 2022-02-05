import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import LookIcon from "@icons/LookIcon";
import CommentIcon from "@icons/CommentIcon";
import HeartIcon from "@icons/HeartIcon";
import ThumbIcon from "@icons/ThumbIcon";
import PencilIcon from "@icons/PencilIcon";

interface Props {
  name: string;
  views: number;
  review: string[];
  bookmark: string[];
  amenities: string[];
  intro: string;
  category: string[];
  tel: string;
  address: number;
}

const StyledCampSiteContainer = styled.div`
  position: relative;
  width: 1100px;

  display: flex;
  box-sizing: border-box;
  border: 1px solid #777;
`;

const StyledCampSiteImage = styled.div`
  position: relative;
  flex: 1;
`;

const StyledCampSiteContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  gap: 20px;
`;

const StyledCampSiteName = styled.div`
  & > h2 {
    font-size: 28px;
    font-weight: bold;
  }
`;

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledIconBox = styled.div`
  display: flex;
  gap: 10px;
`;

const CampSiteIcon = css`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #757575;

  svg {
    fill: #757575;

    & + span {
      font-size: 14px;
    }
  }
`;
const StyledRowIcon = styled.div`
  ${CampSiteIcon};
`;

const StyledColIcon = styled.div`
  ${CampSiteIcon};
  flex-direction: column;
  gap: 3px;
`;

const StyledAmenityBox = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const StyledAmenity = styled.span`
  background-color: #038c5a;
  color: #fff;
  border-radius: 10px;
  padding: 5px;
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
    font-weight: 700;
  }
  & > span:nth-child(2) {
    flex: 4;
  }
`;

const CampSiteInfo = ({
  name,
  views,
  review,
  bookmark,
  amenities,
  intro,
  category,
  tel,
  address,
}: Props) => {
  return (
    <>
      <StyledCampSiteContainer>
        <StyledCampSiteImage>
          <Image alt="Mountains" src="/post.jpg" layout="fill" objectFit="cover" />
        </StyledCampSiteImage>

        <StyledCampSiteContentBox>
          <StyledCampSiteName>
            <h2>{name}</h2>
          </StyledCampSiteName>

          {/* 아이콘 */}
          <StyledIconContainer>
            <StyledIconBox>
              <StyledRowIcon>
                <LookIcon size={30} />
                <span>{views}</span>
              </StyledRowIcon>
              <StyledRowIcon>
                <CommentIcon size={30} />
                <span>{review.length}</span>
              </StyledRowIcon>
              <StyledRowIcon>
                <HeartIcon size={30} />
                <span>{bookmark.length}</span>
              </StyledRowIcon>
            </StyledIconBox>

            <StyledIconBox>
              <StyledColIcon>
                <PencilIcon size={20} />
                <span>후기작성</span>
              </StyledColIcon>
              <StyledColIcon>
                <ThumbIcon size={20} />
                <span>위시리스트 추가</span>
              </StyledColIcon>
            </StyledIconBox>
          </StyledIconContainer>

          {/* 시설 */}
          <StyledAmenityBox>
            {amenities.map((el, idx) => (
              <StyledAmenity key={idx}>{el}</StyledAmenity>
            ))}
          </StyledAmenityBox>

          {/* 소개글 */}
          <div>{intro}</div>

          {/* 상세정보(주소, 전화번호) */}
          <StyledCampSiteDetailBox>
            <StyledCampSiteDetail>
              <span>야영장 구분</span>
              <span>{category[0]}</span>
            </StyledCampSiteDetail>
            <StyledCampSiteDetail>
              <span>연락처</span>
              <span>{tel}</span>
            </StyledCampSiteDetail>
            <StyledCampSiteDetail>
              <span>주소</span>
              <span>{address}</span>
            </StyledCampSiteDetail>
          </StyledCampSiteDetailBox>
        </StyledCampSiteContentBox>
      </StyledCampSiteContainer>
    </>
  );
};

CampSiteInfo.defaultProps = {
  name: "여울지 숲속 캠핑장",
  views: 190,
  review: ["1", "2", "3", "4"],
  bookmark: ["1", "2", "3", "4", "2", "3", "4", "2", "3", "4"],
  amenities: ["화장실", "와이파이", "와이파이", "와이파이", "와이파이", "와이파이", "와이파이"],
  intro:
    "여울지 숲속 캠핑장은 굽이치는 홍천강 물줄기를 마주하고 드높은 팔봉산 자락에 위치하여 청정 자연도시 홍천에서 휴식과 여유를 찾는 건강한 가족문화를 위해 조성되었습니다. 드넓은 사이트와 레포츠파크 등 다양한 편의시설을 갖추고 있습니다.여울지 숲속 캠핑장은 굽이치는 홍천강 물줄기를 마주하고 드높은 팔봉산 자락에 위치하여 청정 자연도시 홍천에서 휴식과 여유를 찾는 건강한 가족문화를 위해 조성되었습니다. 드넓은 사이트와 레포츠파크 등 다양한 편의시설을 갖추고 있습니다.",
  category: ["일반 야영장"],
  tel: "010-1234-5678",
  address: "경기 용인시 처인구 원삼면 보개원삼로1372번길 41",
};

export default CampSiteInfo;
