import React, { useState, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import Button from "@atoms/Button";
import Logo from "@icons/Logo";
import SmileIcon from "@icons/SmileIcon";
import NormalIcon from "@icons/NormalIcon";
import AngryIcon from "@icons/AngryIcon";
import PhotoIcon from "@icons/PhotoIcon";
import ModalLayout from "@modals/ModalLayout";
import { ICamp } from "@type/reducers/camp";
import useInput from "@hooks/useInput";
import { createReview, uploadImage } from "@reducers/review/action";
import { AppDispatch } from "@store/configureStore";
import { ResImgs } from "@type/apis";

import { url } from "@apis/.";
import {
  BouttonButtonWrapper,
  CampsiteName,
  Container,
  ImageList,
  ImageWrapper,
  LogoWrapper,
  PhotoLabel,
  RatingButtonWrapper,
  ReviewContent,
  ReviewContentWrapper,
  RowIconWrapper,
  WriteButton,
} from "./styles";

interface Props {
  camp: ICamp;
  onClick: () => void;
}

const ReviewForm = ({ camp, onClick }: Props) => {
  const [text, onChangeText] = useInput("");
  const [images, setImages] = useState<string[]>([]);
  const [rating, setRating] = useState("");
  const imageRef = useRef<HTMLInputElement | null>(null);
  const dispatch: AppDispatch = useDispatch();

  const ratingHandler = useCallback((value: string) => {
    setRating(value);
  }, []);

  const onChangeImages = useCallback(
    async (e) => {
      if (images.length + e.target.files.length >= 5)
        return alert("이미지는 5장을 넘길 수 없습니다.");

      const imageFormData = new FormData();

      [].forEach.call(e.target.files, (f) => {
        if (f) imageFormData.append("img", f);
      });

      const res = await dispatch(uploadImage(imageFormData));

      setImages([...images, ...(res.payload as ResImgs).images]);
    },
    [images],
  );

  const onClickImageBtn = useCallback(() => {
    imageRef.current?.click();
  }, [imageRef.current]);

  const create = useCallback(async () => {
    if (!text || !rating) return alert("필수정보를 입력하세요!");
    await dispatch(createReview({ location: camp._id, content: text, photos: images, rating }));
    onClick();
  }, [text, rating, images]);

  return (
    <ModalLayout onClick={onClick}>
      <Container>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <span>캠핑장은 어떠셨나요?</span>
        <RatingButtonWrapper>
          <Smile onClick={ratingHandler} active={rating === "또 가고 싶어요"} />
          <Noraml onClick={ratingHandler} active={rating === "평범해요"} />
          <Angry onClick={ratingHandler} active={rating === "별로에요"} />
        </RatingButtonWrapper>
        <CampsiteName>{camp.name}</CampsiteName>
        <ReviewContentWrapper>
          <ReviewContent value={text} onChange={onChangeText} placeholder="후기를 작성해주세요!" />
        </ReviewContentWrapper>
        {images[0] && (
          <ImageList>
            {images.map((image) => (
              <ImageWrapper key={image}>
                <img src={`${url}/${image}`} alt="img" />
              </ImageWrapper>
            ))}
          </ImageList>
        )}
        <BouttonButtonWrapper>
          <input
            type="file"
            name="image"
            multiple
            hidden
            ref={imageRef}
            onChange={onChangeImages}
            accept=".jpg, .jpeg, .png"
            style={{ display: "none" }}
          />
          <PhotoLabel htmlFor="input-file" onClick={onClickImageBtn}>
            <PhotoIcon size={20} />
            Add Photo
          </PhotoLabel>
          <WriteButton>
            <Button name="완료" onClick={create} />
            <Button name="취소" onClick={onClick} />
          </WriteButton>
        </BouttonButtonWrapper>
      </Container>
    </ModalLayout>
  );
};

export default ReviewForm;

interface Rate {
  active: boolean;
  onClick: (value: string) => void;
}
const Smile = ({ active, onClick }: Rate) => {
  const text = "또 가고 싶어요";
  return (
    <RowIconWrapper onClick={() => onClick(text)} active={active}>
      <SmileIcon size={40} />
      <span>{text}</span>
    </RowIconWrapper>
  );
};

const Noraml = ({ active, onClick }: Rate) => {
  const text = "평범해요";
  return (
    <RowIconWrapper onClick={() => onClick(text)} active={active}>
      <NormalIcon size={40} />
      <span>{text}</span>
    </RowIconWrapper>
  );
};

const Angry = ({ active, onClick }: Rate) => {
  const text = "별로에요";
  return (
    <RowIconWrapper onClick={() => onClick(text)} active={active}>
      <AngryIcon size={40} />
      <span>{text}</span>
    </RowIconWrapper>
  );
};
