import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import { deleteReview } from "@reducers/review/action";
import { deleteReview as dR } from "@reducers/reviews";
import { AppDispatch, useAppSelector } from "@store/configureStore";
import useModal from "@hooks/useModal";

import ModalCaroucel from "@modals/ModalCarousel";
import ReviewForm from "@modals/ReviewForm";

import { IReview } from "@type/reducers/review";
import { ICamp } from "@type/reducers/camp";

import HeartIcon from "@icons/HeartIcon";
import SubTitle from "@atoms/SubTitle";
import ReviewImage from "@molecules/ReviewCard/ReviewImage";

import Style from "./style";

interface Props {
  review: IReview;
}

interface ResPayload {
  status: boolean;
  id: string;
}

const HeartIconComponent = ({ count }: Pick<IReview, "count">) => (
  <Style.IconBox>
    <Style.Icons>
      <HeartIcon size={13} /> {count}
    </Style.Icons>
  </Style.IconBox>
);

const MyReview = ({ review }: Props) => {
  const { me } = useAppSelector((state) => state.user);
  const { _id, created, content, photos, location, count, author } = review;
  const [moreContent, setMoreContent] = useState(false);
  const [isOpen, onOpen, onClose] = useModal();
  const [isEditForm, onEditForm, onCloseForm] = useModal();
  const dispatch: AppDispatch = useDispatch();

  const parsingText = useMemo(() => content.replace(/<br\s*\/?>/gim, "\r\n"), [content]);

  const onClickDelete = useCallback(async () => {
    if (me) {
      const isDeleted = confirm("삭제하시겠습니까?");
      if (!isDeleted) return;

      const res = await dispatch(deleteReview(_id));
      dispatch(dR({ id: (res.payload as ResPayload).id }));
    }
  }, [me, _id]);

  const onMoreContent = useCallback(() => {
    setMoreContent(true);
  }, []);
  return (
    <>
      <Style.Review>
        <Style.CampInfo>
          <SubTitle size={14}>{created}</SubTitle>
          <Style.CampLink href={`/camp/${location._id}`}>
            <a>@{location.name}</a>
          </Style.CampLink>
          <HeartIconComponent count={count} />
        </Style.CampInfo>
        <Style.ReviewPost>
          <p>
            {parsingText.length <= 1000 || moreContent ? (
              parsingText
            ) : (
              <>
                {parsingText.substring(0, 1000)}...
                <span className="more" onClick={onMoreContent}>
                  더보기
                </span>
              </>
            )}
          </p>
        </Style.ReviewPost>
        <ReviewImage images={photos} onClick={onOpen} />
        <Style.ReviewEvaluateBox>
          {me?._id === author._id && (
            <>
              <span onClick={onEditForm}>수정하기</span>
              <span onClick={onClickDelete}>삭제하기</span>
            </>
          )}
        </Style.ReviewEvaluateBox>
      </Style.Review>
      {isOpen && <ModalCaroucel onClick={onClose} isOpen={isOpen} photos={photos} />}
      {isEditForm && <ReviewForm onClick={onCloseForm} camp={location as ICamp} review={review} />}
    </>
  );
};

export default MyReview;
