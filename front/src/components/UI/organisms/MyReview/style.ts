import Link from "next/link";
import styled from "styled-components";

const IconBox = styled.div`
  display: flex;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
`;

const Icons = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 5px;
  gap: 6px;
  justify-content: center;
  align-items: baseline;
  font-size: 14px;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    padding: 0;
  }
`;

const CampInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  margin-bottom: 14px;
  & a {
    color: #038c5a;
  }
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    flex-direction: column;
    gap: 2px;
  }
`;

const CampLink = styled(Link)`
  display: flex;
  cursor: pointer;
`;

const PhotoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  & img {
    width: 200px;
    height: 200px;
    @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
      width: 100%;
    }
  }
`;

const Review = styled.section`
  padding-left: 10px;
  padding-right: 10px;
  & p {
    margin-bottom: 10px;
  }
`;

const ReviewPost = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 160%;
`;

const MorePhotos = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export default {
  CampInfo,
  CampLink,
  IconBox,
  Icons,
  Link,
  PhotoBox,
  Review,
  ReviewPost,
  MorePhotos,
};
