import React from "react";
import styled from "styled-components";
import Link from "@atoms/Link";

import BookmarkIcon from "@src/components/icons/BookmarkIcon";
import CommentIcon from "@src/components/icons/CommentIcon";

interface Props {
  toUrl: string;
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
            <tbody>
              <tr>
                <th>주소</th>
                <td>{tel}</td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>{address}</td>
              </tr>
            </tbody>
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
  margin: 30px auto 0;
  padding-bottom: 30px;
  border-bottom: 1px dotted #c0c0c0;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  transition: 0.3s transform;
  font-size: 20px;

  &:hover {
    transform: scale(1.005);
    cursor: pointer;
  }

  @media screen and (max-width: ${({ theme }) => theme.BP.TABLET}) {
    flex-direction: column;
    height: auto;
    font-size: 1.5rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    font-size: 1rem;
  }
`;

const ImgWrapper = styled.div`
  width: 40%;
  margin-right: 1em;
  position: relative;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: ${({ theme }) => theme.BP.TABLET}) {
    width: auto;
    height: auto;
    margin-right: 0;
  }
`;

const CampSiteInfo = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 1em 0;
  font-size: 0.8em;
`;

const CardInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  h3 {
    font-size: 1.2em;
    font-weight: 700;
  }
`;

const InfoTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 5px;

  & th {
    text-align: left;
    width: 30%;
  }

  & td {
    padding-left: 5px;
  }
`;

const TagsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

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
  display: flex;

  svg {
    margin-right: 2px;
    margin-left: 10px;
  }
  @media screen and (max-width: ${({ theme }) => theme.BP.TABLET}) {
    svg {
      margin-top: 2px;
      width: 15px;
      height: 15px;
    }
  }
`;
