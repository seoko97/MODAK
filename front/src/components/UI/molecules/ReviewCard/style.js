import styled, { css } from "styled-components";
import Link from "next/link";

const StyledContainer = styled.li`
  // * 박스 사이징 추가
  box-sizing: border-box;
  display: flex;
  background-color: #f6f6f6;
  padding: 30px;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    flex-direction: column;
  }
`;

const StyledProfileContainer = styled.article`
  padding: 10px;
  width: 150px;
  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    width: 100%;
  }
  text-align: center;
`;

const StyledReviewLikeBox = styled.div`
  display: flex;
  justify-content: end;
  padding: 6px;
`;

const StyledReviewContents = styled.figcaption`
  & p {
    padding: 5px;
  }
`;

const StyledReviewPhotos = styled.div`
  display: flex;
  gap: 20px;
  & img {
    width: 30%;
    @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
      width: 100%;
      + img {
        display: none;
      }
    }
  }
`;

// --- 프로필 컨테이너 ---
const StyledProfile = styled(Link)`
  & .author {
    font-weight: bold;
  }
`;

const StyledProfileIconBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const IconBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: darkgray;
  :hover {
    color: #161616;
  }
`;

const StyledPostIconBox = styled(Link)`
  ${IconBox}
`;

// ? "Button 컴포넌트를 import해서 재사용"
const StyledReviewIconBox = styled.button`
  ${IconBox}
  border: none;
  cursor: pointer;
  background-color: transparent;

  & svg {
    fill: darkgray;
    width: 20px;
    height: 20px;
    transition: all 0.15s;
  }

  :hover {
    & svg {
      fill: #bd1e1e;
    }
  }

  div + span {
    font-size: 14px;
  }
`;

// --- 리뷰 내용 컨테이너 ---
const StyledReviewCard = styled.div`
  flex-basis: 70%;
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    flex-direction: column;
    padding: 0;
  }
`;

// --- 좋아요, 신고하기 컨테이너 ---
// const LikeAndReportBox = css`
//   border: none;
//   background-color: transparent;
//   transition: color 0.1s;
//   padding: 5px;
//   :hover {
//     color: #f29f05;
//     cursor: pointer;
//   }
// `;

export {
  StyledContainer,
  StyledProfileContainer,
  StyledReviewLikeBox,
  StyledReviewContents,
  StyledReviewPhotos,
  StyledProfile,
  StyledReviewCard,
  StyledReviewIconBox,
  StyledPostIconBox,
  StyledProfileIconBox,
};
