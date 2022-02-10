import React from "react";
import styled from "styled-components";
import Link from "next/link";

import BookmarkIcon from "@src/components/icons/BookmarkIcon";
import CommentIcon from "@src/components/icons/CommentIcon";

interface Props {
  toUrl?: string;
  imgUrl: string;
  name: string;
  category: string[];
  address: string;
  tel: string;
  tagContent: string[];
  likesCount: number;
  commentsCount: number;
}

const CampSiteListBox = ({
  toUrl,
  imgUrl,
  name,
  category,
  address,
  tel,
  tagContent,
  likesCount,
  commentsCount,
}: Props) => {
  return (
    <Link href={toUrl}>
      <CardWrapper>
        <ImgWrapper>
          <img src={imgUrl} alt={`${name} 사진`} />
        </ImgWrapper>
        <CampSiteInfo>
          <CardInfoHeader>
            <h3>{name}</h3>
            <CountsWrapper>
              <CountContainer>
                <BookmarkIcon size={20} />
                <span>{likesCount.toLocaleString()}</span>
              </CountContainer>
              <CountContainer>
                <CommentIcon size={20} />
                <span>{commentsCount.toLocaleString()}</span>
              </CountContainer>
            </CountsWrapper>
          </CardInfoHeader>
          <InfoTable>
            <tr>
              <th>캠핑 타입</th>
              <td>{category}</td>
            </tr>
            <tr>
              <th>주소</th>
              <td>{tel}</td>
            </tr>
            <tr>
              <th>연락처</th>
              <td>{address}</td>
            </tr>
          </InfoTable>
          <TagsContainer>
            {tagContent.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </TagsContainer>
        </CampSiteInfo>
      </CardWrapper>
    </Link>
  );
};

CampSiteListBox.defaultProps = {
  toUrl: "/camp/:id",
  imgUrl:
    "https://images.unsplash.com/photo-1607908560428-36ff9e0363b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
  name: "엘리스 캠핑장",
  category: ["일반야영장", "자동차야영장", "카라반"],
  address: "경기도 가평",
  tel: "010-1234-5678",
  tagContent: ["가족캠핑", "반려동물 동반", "wifi"],
  likesCount: 923456,
  commentsCount: 123456,
};

export default CampSiteListBox;

// 카드 리스트형 디자인
// const CardWrapper = styled.div`
//   display: flex;
//   width: 90%;
//   height: 250px;
//   margin: 30px auto 0;
//   border-radius: 15px;
//   box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.1);
//   overflow: hidden;

//   color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
//   transition: 0.3s transform;

//   &:hover {
//     transform: scale(1.005);
//     cursor: pointer;
//   }

//   @media screen and (max-width: ${({ theme }) => theme.BP.MOBILE}) {
//     width: 396px;
//     height: 150px;
//   }
// `;

// 리스트 디자인
const CardWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 250px;
  margin: 30px auto 0;
  padding-bottom: 30px;
  border-bottom: 1px dotted #c0c0c0;
  overflow: hidden;

  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  transition: 0.3s transform;

  &:hover {
    transform: scale(1.005);
    cursor: pointer;
  }

  @media screen and (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    width: 396px;
    height: 150px;
  }
`;

const ImgWrapper = styled.div`
  min-width: 250px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    min-width: 150px;
  }
`;

const CampSiteInfo = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 1em 1.5em;
`;

const CardInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px dotted #c0c0c0; */
  /* background-color: blue; */
  margin-bottom: 10px;

  & > h3 {
    font-size: 20px;
    font-weight: 700;

    @media screen and (max-width: ${({ theme }) => theme.BP.MOBILE}) {
      font-size: 14px;
      align-items: flex-end;
    }
  }
`;

const InfoTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 5px;
  /* width: 100%; */
  /* background-color: yellow; */

  & th {
    text-align: left;
    width: 50%;
  }

  & td {
    padding-left: 5px;
  }

  @media screen and (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    font-size: 12px;
  }
`;

const TagsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;

  & > li {
    margin-right: 15px;

    &::before {
      content: "#";
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    font-size: 12px;
  }
`;

const CountsWrapper = styled.div`
  display: flex;
`;

const CountContainer = styled.div`
  font-size: 11px;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 2px;
    margin-left: 10px;
  }
  @media screen and (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    font-size: 9px;
    align-items: flex-start;

    & svg {
      width: 12px;
      height: 12px;
    }
  }
`;
