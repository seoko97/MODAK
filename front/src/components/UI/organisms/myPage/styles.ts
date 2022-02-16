import Link from "next/link";
import styled from "styled-components";

const IconBox = styled.div`
  display: flex;
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
    width: 33.3%;
    @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
      width: 100%;
      + img {
        display: none;
      }
    }
  }
`;

// --- 전체 컨테이너 ---
const Main = styled.div`
  padding: 20px;
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

const VisitedCamp = styled.div``;

const WishCamp = styled.div``;

const Tags = styled.div`
  display: flex;
`;

const OtherReview = styled.div``;

const OtherLink = styled(Link)``;

export default {
  CampInfo,
  CampLink,
  IconBox,
  Icons,
  Link,
  Main,
  OtherLink,
  OtherReview,
  PhotoBox,
  Review,
  ReviewPost,
  Tags,
  VisitedCamp,
  WishCamp,
};
