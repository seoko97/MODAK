import styled, { css } from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 30px;
  width: 60vw;
  max-width: 800px;
  max-height: 80vh;
  padding: 30px;
  z-index: 1002;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.BAKCGROUND_COLOR.PRIMARY_COLOR};
  color: #0c0c0c;
  border-radius: 10px;

  & > svg {
    width: 180px;
    align-self: center;
  }

  & > span {
    width: 180px;
    text-align: center;
    align-self: center;
    font-weight: bold;
    color: #757575;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    width: 100%;
    height: 100%;
    max-height: 100%;

    border-radius: 0;
  }
`;

export const RowIconWrapper = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: #757575;
  cursor: pointer;

  svg {
    fill: #757575;

    & + span {
      font-size: 14px;
    }
  }

  ${(props) =>
    props.active &&
    `
      color: #038c5a;
      font-weight: bold;
      svg {
        fill: #038c5a;
      }
    `}
`;

export const CampsiteName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #038c5a;
`;

export const ReviewContentWrapper = styled.div`
  flex: 1;
  min-height: 300px;
`;
export const ReviewContent = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  box-sizing: border-box;
  resize: none;
  padding: 10px;
`;
export const ButtonWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const RatingButtonWrapper = styled.div`
  ${ButtonWrapper};

  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    & > div {
      svg {
        width: 30px;
        height: 30px;
      }
      span {
        font-size: 12px;
      }
    }
  }
`;

export const BouttonButtonWrapper = styled.div`
  ${ButtonWrapper};
  justify-content: space-between;
  margin-top: auto;
`;

export const WriteButton = styled.div`
  ${ButtonWrapper};
  gap: 12px;

  & > button {
    background-color: #038c5a;
    color: #fff;
    padding: 8px 15px;
    border-radius: 5px;
  }
  & > button:last-child {
    background-color: #038c5a20;
    color: #038c5a;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    gap: 5px;

    & > button {
      padding: 6px 8px;
    }
  }
`;

export const PhotoLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  border-radius: 5px;
  background-color: #038c5a20;
  color: #038c5a;
  cursor: pointer;

  svg {
    fill: #038c5a;
    width: 20px;
    height: 20px;
  }
`;

export const ImageList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;
