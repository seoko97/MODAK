import React, { useMemo } from "react";
import styled from "styled-components";
import Link from "@atoms/Link";

import PinIcon from "@icons/Pin";
import BookmarkIcon from "@icons/BookmarkIcon";
import CommentIcon from "@icons/CommentIcon";
import { ICamp } from "@type/reducers/camp";

interface Props {
  camp: ICamp;
  url: string;
}

const Container = styled.div`
  width: 95%;
  cursor: pointer;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 1px 2px 6px 0px rgb(158 154 153 / 32%);
  & * {
    color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  }
`;

const ImageWrapper = styled.div`
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

const ContentWrapper = styled.div`
  width: 100%;
  padding: 14px;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 8px 8px;
`;

const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 3px;
  gap: 8px;
  & > h1 {
    font-size: 18px;
    overflow: hidden;
  }
`;

const LocationWrapper = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 12px;
  gap: 5px;
  margin-bottom: 5px;
  & > h2 {
    color: #757575;
  }
`;

const ThemaWrapper = styled.div`
  width: 100%;
  padding: 12px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  min-height: 60px;
  font-size: 12px;
`;

const ContentFooter = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

const MainCampCard = ({ camp, url }: Props) => {
  const { name, address, thema, category, totalBookmark, views, firstImage } = camp;

  const tagList = useMemo(() => {
    const set = new Set([...thema, ...category]);
    const list: JSX.Element[] = [];
    set.forEach((e) => list.push(<span key={e}>#{e}</span>));
    return list;
  }, [thema, category]);

  return (
    <Link href={url}>
      <Container>
        <ImageWrapper>
          <div>
            <img src={firstImage || "/tent.jpg"} alt="img" />
          </div>
        </ImageWrapper>
        <ContentWrapper>
          <ContentHeader>
            <h1>{name}</h1>
            <LocationWrapper>
              <PinIcon size={16} />
              <h2>{address}</h2>
            </LocationWrapper>
          </ContentHeader>
          <ThemaWrapper>{tagList}</ThemaWrapper>
          <ContentFooter>
            <IconWrapper>
              <BookmarkIcon size={16} />
              <span>{totalBookmark || 0}</span>
            </IconWrapper>
            <IconWrapper>
              <CommentIcon size={16} />
              <span>{views || 0}</span>
            </IconWrapper>
          </ContentFooter>
        </ContentWrapper>
      </Container>
    </Link>
  );
};

export default MainCampCard;
