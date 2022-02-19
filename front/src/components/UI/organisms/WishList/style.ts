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

const WishCamp = styled.div``;

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

const Tags = styled.div`
  display: flex;
`;

const OtherReview = styled.div``;

export default {
  CampInfo,
  CampLink,
  IconBox,
  Icons,
  Link,
  OtherReview,
  PhotoBox,
  Tags,
  WishCamp,
};
