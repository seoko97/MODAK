import React from "react";
import styled from "styled-components";
import Link from "@atoms/Link";

import BookmarkIcon from "@icons/BookmarkIcon";
import CommentIcon from "@icons/CommentIcon";
import { ICamp } from "@type/reducers/camp";

interface Props {
  camp: ICamp;
}

const CampSiteListBox = ({ camp }: Props) => {
  const { _id, name, address, tel, totalBookmark, totalReview, environment, thema, firstImage } =
    camp;
  return (
    <Link href={`/camp/${_id}`}>
      <CardWrapper>
        <ImgWrapper>
          <img src={firstImage || "/tent.jpg"} alt={`${name} 사진`} />
        </ImgWrapper>
        <CampSiteInfo>
          <CardInfoHeader>
            <h3>{name}</h3>
            <CountsWrapper>
              <CountContainer>
                <BookmarkIcon size={20} />
                <span>{totalBookmark || 0}</span>
              </CountContainer>
              <CountContainer>
                <CommentIcon size={20} />
                <span>{totalReview || 0}</span>
              </CountContainer>
            </CountsWrapper>
          </CardInfoHeader>
          <InfoTable>
            <tbody>
              <tr>
                <th>주소</th>
                <td>{address}</td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>{tel}</td>
              </tr>
            </tbody>
          </InfoTable>
          <TagsContainer>
            {environment.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
            {thema.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </TagsContainer>
        </CampSiteInfo>
      </CardWrapper>
    </Link>
  );
};

CampSiteListBox.defaultProps = {
  photos: [
    "https://images.unsplash.com/photo-1607908560428-36ff9e0363b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
  ],
  totalBookmark: 0,
  totalReview: 0,
};

export default CampSiteListBox;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 1em auto 0;
  padding-bottom: 1em;
  border-bottom: 1px dotted #c0c0c0;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  transition: 0.3s transform;
  font-size: 20px;

  &:hover {
    transform: scale(1.005);
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    flex-direction: column;
    height: auto;
    padding-bottom: 0;
  }
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    font-size: 1rem;
  }
`;

const ImgWrapper = styled.div`
  width: 40%;
  margin-right: 1em;
  position: relative;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);

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
  padding: 1em;
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    svg {
      margin-top: 2px;
      width: 15px;
      height: 15px;
    }
  }
`;
