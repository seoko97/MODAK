import React, { useState, useCallback } from "react";
import styled, { css } from "styled-components";
import Button from "@atoms/Button";
import Logo from "@icons/Logo";
import SmileIcon from "@icons/SmileIcon";
import NormalIcon from "@icons/NormalIcon";
import AngryIcon from "@icons/AngryIcon";
import PhotoIcon from "@icons/PhotoIcon";
import ModalLayout from "@src/components/modals/ModalLayout";
// import { Smile, Noraml, Angry } from "@src/components/UI/molecules/ReviewCard/Rating";

// 사진 추가, 클릭 시 rating 등이 toggle되게 기능 구현 필요(색 변경).
interface Props {
  camp: string;
  onClick: () => void;
}

const ReviewForm = ({ camp, onClick }: Props) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const reviewHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  }, []);

  const ratingHandler = useCallback((value: string) => {
    setRating(value);
  }, []);

  return (
    <ModalLayout onClick={onClick}>
      <Container>
        <Logo />
        <span>캠핑장은 어떠셨나요?</span>
        <RatingButtonWrapper>
          <Smile onClick={ratingHandler} />
          <Noraml onClick={ratingHandler} />
          <Angry onClick={ratingHandler} />
        </RatingButtonWrapper>
        <CampsiteName>{camp}</CampsiteName>
        <ReviewContentWrapper>
          <ReviewContent
            value={review}
            onChange={reviewHandler}
            placeholder="후기를 작성해주세요!"
          />
        </ReviewContentWrapper>
        <BouttonButtonWrapper>
          <PhotoLabel htmlFor="input-file">
            <PhotoIcon size={20} />
            Add Photo
            <input
              type="file"
              id="input-file"
              accept=".jpg, .jpeg, .png"
              multiple
              style={{ display: "none" }}
            />
          </PhotoLabel>
          <WriteButton>
            <Button name="완료" />
            <Button name="취소" onClick={onClick} />
          </WriteButton>
        </BouttonButtonWrapper>
      </Container>
    </ModalLayout>
  );
};

export default ReviewForm;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 60vw;
  max-width: 800px;
  height: 80vh;
  /* max-height: 1000px; */
  padding: 30px;
  z-index: 1002;
  box-sizing: border-box;
  background-color: #f7f7f7;
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
    border-radius: 0;
  }
`;

const RowIconWrapper = styled.div`
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
`;

interface Rate {
  onClick: (value: string) => void;
}
const Smile = ({ onClick }: Rate) => {
  const text = "또 가고 싶어요";
  return (
    <RowIconWrapper onClick={() => onClick(text)}>
      <SmileIcon size={40} />
      <span>{text}</span>
    </RowIconWrapper>
  );
};

const Noraml = ({ onClick }: Rate) => {
  const text = "평범합니다";
  return (
    <RowIconWrapper onClick={() => onClick(text)}>
      <NormalIcon size={40} />
      <span>{text}</span>
    </RowIconWrapper>
  );
};

const Angry = ({ onClick }: Rate) => {
  const text = "최악입니다";
  return (
    <RowIconWrapper onClick={() => onClick(text)}>
      <AngryIcon size={40} />
      <span>{text}</span>
    </RowIconWrapper>
  );
};
const CampsiteName = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #038c5a;
`;

const ReviewContentWrapper = styled.div`
  flex: 1;
`;
const ReviewContent = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  box-sizing: border-box;
  resize: none;
  padding: 10px;
`;
const ButtonWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const RatingButtonWrapper = styled.div`
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

const BouttonButtonWrapper = styled.div`
  ${ButtonWrapper};
  justify-content: space-between;
  margin-top: auto;
`;

const WriteButton = styled.div`
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

const PhotoLabel = styled.label`
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
