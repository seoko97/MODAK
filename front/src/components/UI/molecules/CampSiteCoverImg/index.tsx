import React from "react";
import styled, { css } from "styled-components";
import Title from "@atoms/Title";
import Button from "@atoms/Button";
import LookIcon from "@icons/LookIcon";
import CommentIcon from "@src/components/icons/CommentIcon";
import HeartIcon from "@icons/HeartIcon";
import useModal from "@src/hooks/useModal";
import ReviewForm from "@src/components/modals/ReviewForm";

interface Props {
  // _id: object;
  name: string;
  lineIntro: string;
  thema: string[];
  environment: string[];
  photos: string; // string[];
  reviews: string[];
  bookmark: string[];
  views: number;
}

const CampSiteConverImg = ({
  name,
  lineIntro,
  thema,
  environment,
  photos,
  reviews,
  bookmark,
  views,
}: Props) => {
  const [isOpen, onOpen, onClose] = useModal();

  return (
    <>
      <CampCoverImgBox photos={photos}>
        <CampCoverImgContent>
          {/* 캠핑장 이름 */}
          <Title size={35}>{name}</Title>

          {/* 한 줄 소개 */}
          <p>{lineIntro}</p>

          {/* 아이콘/ 서브택스트 */}
          <IconContainer>
            <IconBox>
              <RowIcon>
                <LookIcon size={20} />
                <span>{views}</span>
              </RowIcon>
              <RowIcon>
                <CommentIcon size={20} />
                <span>{reviews.length}</span>
              </RowIcon>
              <RowIcon>
                <HeartIcon size={16} />
                <span>{bookmark.length}</span>
              </RowIcon>
            </IconBox>

            <ButtonBox>
              <Button onClick={onOpen} name="후기작성" />
              {isOpen && <ReviewForm onClick={onClose} camp={name} />}
              <Button name="위시리스트 추가" />
            </ButtonBox>
          </IconContainer>

          {/* 테마 & 환경 */}
          <ThemaBox>{makeTagList(thema)}</ThemaBox>
          <ThemaBox>{makeTagList(environment)}</ThemaBox>
        </CampCoverImgContent>
      </CampCoverImgBox>
    </>
  );
};

function makeTagList(list: string[]) {
  const lists = list.map((el, idx) => <Thema key={idx}># {el}</Thema>);
  return lists;
}

CampSiteConverImg.defaultProps = {
  // _id: { $oid: "61fbf0897e326ea95e9e5999" },
  name: "달천공원오토캠핑장",
  lineIntro: "사계절 서로 다른 매력의 캠핑을 즐길 수 있는 곳",
  thema: ["일출명소", "일몰명소", "봄꽃여행", "여름물놀이", "걷기길"],
  environment: ["산", "숲", "계곡", "도심"],
  photos: "/post.jpg",
  reviews: ["1", "2", "3", "4"],
  bookmark: ["1", "2", "3", "4", "2", "3", "4", "2", "3", "4"],
  views: 0,
};

export default CampSiteConverImg;

const CampCoverImgBox = styled.div<Pick<Props, "photos">>`
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

const CampCoverImgContent = styled.div`
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

const ButtonBox = styled.div`
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

const IconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const IconBox = styled.div`
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

const RowIcon = styled.div`
  ${CampSiteIcon};
`;

const ThemaBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Thema = styled.span`
  font-weight: bold;
  color: #fff;
  background-color: #038c5a;
  padding: 8px 10px;
  border-radius: 12px;

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    padding: 6px 8px;
  }
`;
