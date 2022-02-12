import React from "react";
import styled from "styled-components";
import Link from "next/link";

import PinIcon from "@src/components/icons/Pin";
import BookmarkIcon from "@src/components/icons/BookmarkIcon";
import CommentIcon from "@src/components/icons/CommentIcon";

interface Props {
  toUrl: string;
  imgUrl: string;
  name: string;
  location: string;
  tagContent: string[];
  likesCount: number;
  commentsCount: number;
}

const CampSiteCard = ({
  toUrl,
  imgUrl,
  name,
  location,
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
            <h1>{name}</h1>
            <LocationWrapper>
              <PinIcon size={16} />
              <h2>{location}</h2>
            </LocationWrapper>
          </CardInfoHeader>
          <TagsContainer>
            <li>{tagContent[0]}</li>
            <li>{tagContent[1]}</li>
          </TagsContainer>
          <CardInfoFooter>
            <CountWrapper>
              <BookmarkIcon size={16} />
              <span>{likesCount.toLocaleString()}</span>
            </CountWrapper>
            <CountWrapper>
              <CommentIcon size={16} />
              <span>{commentsCount.toLocaleString()}</span>
            </CountWrapper>
          </CardInfoFooter>
        </CampSiteInfo>
      </CardWrapper>
    </Link>
  );
};

CampSiteCard.defaultProps = {
  toUrl: "/",
  imgUrl:
    "https://images.unsplash.com/photo-1607908560428-36ff9e0363b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
  name: "엘리스 캠핑장",
  location: "경기도 가평",
  tagContent: ["가족캠핑", "반려동물 동반"],
  likesCount: 923456,
  commentsCount: 123456,
};

export default CampSiteCard;

const CardWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 480px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
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
  width: 100%;
  height: 320px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CampSiteInfo = styled.div`
  padding: 7px 14px;
`;

const CardInfoHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 3px;
  border-bottom: 1px dotted #c0c0c0;

  & > h1 {
    font-size: 20px;
    margin: 5px 5px 0 1px;
  }
`;

const LocationWrapper = styled.div`
  display: flex;
  vertical-align: bottom;
  font-size: 12px;
  padding-top: 10px;
  & svg + h2 {
    margin-left: 2px;
    color: #757575;
  }
`;

const TagsContainer = styled.ul`
  display: flex;
  min-height: 65px;
  padding: 9px 2px;
  font-size: 11px;

  & > li {
    margin-right: 15px;

    &::before {
      content: "#";
    }
  }
`;

const CardInfoFooter = styled.div`
  display: flex;
`;

const CountWrapper = styled.div`
  font-size: 11px;
  display: flex;
  align-items: center;

  & svg + span {
    margin: auto 10px 0 2px;
  }
`;
