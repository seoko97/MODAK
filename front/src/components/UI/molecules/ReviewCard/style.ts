import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #aaa;
  width: 100%;
  min-height: 300px;

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

const StyledReviewPhotos = styled.div`
  display: flex;
  width: 100%;

  justify-content: flex-start;
  gap: 10px;
  margin-top: 20px;

  & > div {
    width: 180px;
    position: relative;
    padding-bottom: 180px;
    cursor: pointer;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  }
  & > div:last-of-type {
    .over {
      display: flex;
    }
  }

  & .over {
    position: absolute;
    display: none;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 10px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
  }

  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    & > div {
      flex: 1;
      max-width: 100px;

      padding-bottom: 30%;
    }
  }
`;

// --- 프로필 컨테이너 ---
const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const LinkInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
  svg.liked {
    fill: #bd1e1e;
  }

  & svg {
    fill: #757575;
    /* bd1e1e */
  }
`;

// --- 리뷰 내용 컨테이너 ---
const StyledReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 100%;
  & > p {
    margin-bottom: 20px;
  }

  .more {
    cursor: pointer;
    padding-left: 10px;
    opacity: 0.8;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
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
  LinkInner,
};
