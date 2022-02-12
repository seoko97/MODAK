import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #aaa;

  + div {
    margin-top: 10px;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    flex-direction: column;
  }
`;

const StyledProfileContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-width: 150px;

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledReviewEvaluateBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 6px;
  gap: 10px;

  & > span {
    font-size: 12px;
    color: #757575;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledReviewPhotos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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
const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledProfileIconBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const IconBox = css`
  display: flex;
  align-items: center;
  gap: 3px;
  color: #757575;

  svg {
    fill: #757575;

    & + span {
      font-size: 14px;
    }
  }
`;

const IconWrapper = styled.div`
  ${IconBox};
`;

const RowIconWrapper = styled.div`
  ${IconBox};
  flex-direction: column;
  margin-top: auto;

  svg + span {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    margin-top: 0;
  }
`;

const StyledReviewIconBox = styled.button`
  ${IconBox}
  border: none;
  cursor: pointer;
  background-color: transparent;

  & svg {
    fill: #757575;
    transition: all 0.15s;
  }

  :hover {
    & svg {
      fill: #bd1e1e;
    }
  }
`;

// --- 리뷰 내용 컨테이너 ---
const StyledReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

export {
  StyledContainer,
  StyledProfileContainer,
  StyledReviewEvaluateBox,
  StyledReviewPhotos,
  StyledProfile,
  StyledReviewCard,
  StyledReviewIconBox,
  StyledProfileIconBox,
  IconWrapper,
  RowIconWrapper,
};
