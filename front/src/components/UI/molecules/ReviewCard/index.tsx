import React, { memo, useMemo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "@atoms/Link";
import SubTitle from "@atoms/SubTitle";
import Avatar from "@atoms/Avatar";
import Title from "@atoms/Title";
import HeartIcon from "@icons/HeartIcon";
import PencilIcon from "@icons/PencilIcon";
import { IReview } from "@type/reducers/review";
import { ResRvLk } from "@type/apis/review";
import { ICamp } from "@type/reducers/camp";
import ReviewForm from "@modals/ReviewForm";
import ModalCaroucel from "@modals/ModalCarousel";
import { AppDispatch, useAppSelector } from "@store/configureStore";
import { likeReview, unLikeReview, deleteReview } from "@reducers/review/action";
import { likedReview, unLikedReview, deleteReview as dR } from "@reducers/reviews";
import useModal from "@hooks/useModal";
import { checkUrl } from "@lib/checkUrl";
import Rating from "./Rating";
import {
  StyledContainer,
  StyledProfileContainer,
  StyledReviewEvaluateBox,
  StyledProfile,
  StyledReviewCard,
  StyledReviewIconBox,
  StyledProfileIconBox,
  IconWrapper,
  LinkInner,
} from "./style";
import ReviewImage from "./ReviewImage";

interface Props {
  review: IReview;
}
interface ResPayload {
  status: boolean;
  id: string;
}

const ReviewCard = ({ review }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const { me } = useAppSelector((state) => state.user);
  const [moreContent, setMoreContent] = useState(false);
  const { singleCamp } = useAppSelector((state) => state.camp);
  const { _id, content, photos, author, rating, count, likes, created } = review;
  const { _id: userId, nickname, profileImg, reviewCount } = author;
  const [isOpen, onOpen, onClose] = useModal();
  const [isEditForm, onEditForm, onCloseForm] = useModal();

  const parsingText = useMemo(() => content.replace(/<br\s*\/?>/gim, "\n"), [content]);

  const likedUser = useMemo(() => {
    if (!me) return false;
    return likes.includes(me?._id);
  }, [me, likes]);

  const onClickLiked = useCallback(async () => {
    if (me) {
      const review = await dispatch(likeReview(_id));
      dispatch(likedReview(review.payload as ResRvLk));
    }
  }, [me, _id]);

  const onClickUnLiked = useCallback(async () => {
    if (me) {
      const review = await dispatch(unLikeReview(_id));
      dispatch(unLikedReview(review.payload as ResRvLk));
    }
  }, [me, _id]);

  const onClickDelete = useCallback(async () => {
    if (me) {
      const res = await dispatch(deleteReview(_id));

      const isDeleted = confirm("삭제하시겠습니까?");
      if (isDeleted) dispatch(dR({ id: (res.payload as ResPayload).id }));
    }
  }, [me, _id]);

  const onMoreContent = useCallback(() => {
    setMoreContent(!moreContent);
  }, [moreContent]);

  return (
    <>
      <StyledContainer>
        <StyledProfileContainer>
          <StyledProfile>
            <Link href={`/user/${userId}`}>
              <LinkInner>
                <Avatar size={70} url={checkUrl(profileImg)} alt="유저프로필" />
                <Title size={14}>{nickname}</Title>
              </LinkInner>
            </Link>
            <StyledProfileIconBox>
              <IconWrapper>
                <PencilIcon size={13} />
                <span>{reviewCount}</span>
              </IconWrapper>
              <StyledReviewIconBox onClick={likedUser ? onClickUnLiked : onClickLiked}>
                <HeartIcon size={13} className={likedUser ? "liked" : ""} />
                <span>{count}</span>
              </StyledReviewIconBox>
            </StyledProfileIconBox>
          </StyledProfile>
          <Rating rating={rating} />
        </StyledProfileContainer>
        <StyledReviewCard>
          <SubTitle>{created}</SubTitle>
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
          <ReviewImage images={photos} onClick={onOpen} />
          <StyledReviewEvaluateBox>
            {author._id === me?._id && (
              <>
                <span onClick={onEditForm}>수정하기</span>
                <span onClick={onClickDelete}>삭제하기</span>
              </>
            )}
          </StyledReviewEvaluateBox>
        </StyledReviewCard>
      </StyledContainer>
      {isOpen && <ModalCaroucel onClick={onClose} isOpen={isOpen} photos={photos} />}
      {isEditForm && (
        <ReviewForm onClick={onCloseForm} camp={singleCamp as ICamp} review={review} />
      )}
    </>
  );
};

export default memo(ReviewCard);
