import React, { useState, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import Button from "@atoms/Button";
import Logo from "@icons/Logo";
import SmileIcon from "@icons/SmileIcon";
import NormalIcon from "@icons/NormalIcon";
import AngryIcon from "@icons/AngryIcon";
import PhotoIcon from "@icons/PhotoIcon";
import ModalLayout from "@modals/ModalLayout";
import { ResImgs } from "@type/apis";
import { ICamp } from "@type/reducers/camp";
import { IReview } from "@type/reducers/review";
import useInput from "@hooks/useInput";
import { dateParser } from "@lib/dateParser";

import { updateReview } from "@reducers/reviews";
import { createReview, editReview, uploadImage } from "@reducers/review/action";
import { AppDispatch } from "@store/configureStore";

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
  review?: IReview;
}

interface PayloadReview {
  status: boolean;
  review: IReview;
}

const ReviewForm = ({ review, camp, onClick }: Props) => {
  const [text, onChangeText] = useInput(review ? review.content : "");
  const [images, setImages] = useState<string[]>(review ? review.photos : []);
  const [rating, setRating] = useState(review ? review.rating : "");
  const imageRef = useRef<HTMLInputElement | null>(null);
  const dispatch: AppDispatch = useDispatch();

  const ratingHandler = useCallback((value: string) => {
    setRating(value);
  }, []);

  const onChangeImages = useCallback(
    async (e) => {
      if (images.length + e.target.files.length > 5)
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

  const deleteImage = useCallback(
    (currentImage: string) => {
      setImages(images.filter((image) => image !== currentImage));
    },
    [images],
  );

  const reviewHandler = useCallback(async () => {
    if (!text || !rating) return alert("필수정보를 입력하세요!");
    if (review) {
      const cm = confirm("수정하시겠습니까?");
      if (!cm) return;
      const body = {
        location: camp._id,
        content: text.replace(/(?:\r\n|\r|\n)/g, "<br/>"),
        photos: images,
        rating,
      };
      const res = await dispatch(editReview({ id: review._id, body }));
      dispatch(updateReview({ review: (res.payload as PayloadReview).review }));
    } else {
      await dispatch(
        createReview({
          location: camp._id,
          content: text.replace(/(?:\r\n|\r|\n)/g, "<br/>"),
          photos: images,
          rating,
          created: dateParser(new Date()),
        }),
      );
    }

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
          <ReviewContent
            wrap="hard"
            value={text}
            onChange={onChangeText}
            placeholder="후기를 작성해주세요!"
          />
        </ReviewContentWrapper>
        {images[0] && (
          <ImageList>
            {images.map((image) => (
              <ImageWrapper key={image} onClick={() => deleteImage(image)}>
                <img src={`${url}/image/${image}`} alt="img" />
                <div className="hover">삭제</div>
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
            <Button name="완료" onClick={reviewHandler} />
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
