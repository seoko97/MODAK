import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "@atoms/Button";
import Logo from "@icons/Logo";
import SmileIcon from "@icons/SmileIcon";
import NormalIcon from "@icons/NormalIcon";
import AngryIcon from "@icons/AngryIcon";
import ModalLayout from "@src/components/modals/ModalLayout";
// import { Smile, Noraml, Angry } from "@src/components/UI/molecules/ReviewCard/Rating";

// 사진 추가, 클릭 시 rating 등이 toggle되게 기능 구현 필요.
interface Props {
  camp: string;
  onClick: () => void;
}

const ReviewForm = ({ camp, onClick }: Props) => {
  const [review, setReview] = useState("");

  const reviewHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  return (
    <ModalLayout onClick={onClick}>
      <Container>
        <button onClick={onClick}>x</button>
        <LogoText />
        <RatingButton>
          <Smile />
          <Noraml />
          <Angry />
        </RatingButton>
        <CampsiteName>{camp}</CampsiteName>
        <ReviewContent value={review} onChange={reviewHandler} placeholder="후기를 작성해주세요!" />
        <BouttonButtonWrapper>
          <PhotoLabel htmlFor="input-file">
            <SmileIcon size={20} />
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
            <Button name="취소" />
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
  gap: 10px;
  width: 800px;
  padding: 30px;
  z-index: 1002;
  box-sizing: border-box;
  background-color: #f7f7f7;
  color: #0c0c0c;
  border-radius: 10px;
  & > button {
    align-self: flex-end;
  }

  svg {
    width: 180px;
  }

  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    width: 100%;
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

const LogoText = () => {
  return (
    <RowIconWrapper>
      <Logo />
      <span>캠핑장은 어떠셨나요?</span>
    </RowIconWrapper>
  );
};

const Smile = () => {
  return (
    <RowIconWrapper>
      <SmileIcon size={40} />
      <span>또 가고 싶어요</span>
    </RowIconWrapper>
  );
};

const Noraml = () => {
  return (
    <RowIconWrapper>
      <NormalIcon size={40} />
      <span>평범해요</span>
    </RowIconWrapper>
  );
};

const Angry = () => {
  return (
    <RowIconWrapper>
      <AngryIcon size={40} />
      <span>최악입니다</span>
    </RowIconWrapper>
  );
};
const CampsiteName = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #038c5a;
`;

const ReviewContent = styled.textarea`
  width: 100%;
  height: 300px;
  border: none;
  resize: none;
`;
const ButtonWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const RatingButton = styled.div`
  ${ButtonWrapper};
`;

const BouttonButtonWrapper = styled.div`
  ${ButtonWrapper};
  justify-content: space-between;
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
  background-color: orange;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  svg {
    fill: #fff;
    width: 20px;
    height: 20px;
  }
`;
