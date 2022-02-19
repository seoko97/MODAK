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
  width: 100%;
  padding: 20px 0;
  gap: 10px;
  & p {
    margin-bottom: 10px;
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid #ccc;
  }
`;

const ReviewPost = styled.div`
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  .more {
    cursor: pointer;
    font-weight: 600;
    opacity: 0.8;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ReviewEvaluateBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 6px;
  gap: 10px;
  margin-top: auto;
  & > span {
    cursor: pointer;
  }

  & > span {
    font-size: 12px;
    color: #757575;

    &:hover {
      text-decoration: underline;
    }
  }
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
  ReviewEvaluateBox,
};
