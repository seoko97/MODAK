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
              <th>야영장 구분</th>
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

const CardWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 250px;
  margin: 30px auto 0;
  border-radius: 15px;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  transition: 0.3s transform;

  &:hover {
    transform: scale(1.005);
    cursor: pointer;
  }
`;

const ImgWrapper = styled.div`
  min-width: 250px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CampSiteInfo = styled.div`
  /* background-color: pink; */
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px 24px;
`;

const CardInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  /* background-color: yellow; */
  border-bottom: 1px dotted #c0c0c0;

  & > h3 {
    font-size: 24px;
  }
`;

const InfoTable = styled.table`
  margin: 6px 2px;
  /* border: 1px solid green; */
  border-collapse: separate;
  border-spacing: 0 5px;
  width: 100%;

  & th {
    text-align: left;
    width: 15%;
  }

  & td {
    padding-left: 5px;
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
`;
