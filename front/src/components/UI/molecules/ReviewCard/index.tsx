import { useDispatch } from "react-redux";
import React, { memo, useMemo, useCallback } from "react";
import Link from "@atoms/Link";
import SubTitle from "@atoms/SubTitle";
import Avatar from "@atoms/Avatar";
import Title from "@atoms/Title";
import HeartIcon from "@icons/HeartIcon";
import PencilIcon from "@icons/PencilIcon";
import { IReview } from "@type/reducers/review";
import { ResRvLk } from "@type/apis/review";
import { AppDispatch, useAppSelector } from "@store/configureStore";
import { likeReview, unLikeReview, deleteReview } from "@reducers/review/action";
import { likedReview, unLikedReview, deleteReview as dR } from "@reducers/reviews";
import { url } from "@apis/.";
import useModal from "@hooks/useModal";
import ModalCaroucel from "@modals/ModalCarousel";
import Rating from "./Rating";
import {
  StyledContainer,
  StyledProfileContainer,
  StyledReviewEvaluateBox,
  StyledReviewPhotos,
  StyledProfile,
  StyledReviewCard,
  StyledReviewIconBox,
  StyledProfileIconBox,
  IconWrapper,
  LinkInner,
} from "./style";

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
  const { _id, content, photos, author, createdAt, rating, count, likes } = review;
  const { _id: userId, nickname, profileImg, reviewCount } = author;

  const [isOpen, onOpen, onClose] = useModal();

  const likedUser = useMemo(() => {
    if (!me) return false;
    return likes.includes(userId);
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
      dispatch(dR({ id: (res.payload as ResPayload).id }));
    }
  }, [me, _id]);

  return (
    <>
      <StyledContainer>
        <StyledProfileContainer>
          <StyledProfile>
            <Link href={`/user/${userId}`}>
              <LinkInner>
                <Avatar size={70} url={profileImg} alt="유저프로필" />
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
          <SubTitle>{createdAt}</SubTitle>
          <p>{content.length > 1000 ? `${content.substring(0, 1000)}...더보기` : content}</p>
          <StyledReviewPhotos>
            {photos?.map((photo, idx) => (
              <div key={idx} onClick={onOpen}>
                <img src={`${url}/${photo}`} alt="reviewPhoto" />
                <div className="hover">확대</div>
              </div>
            ))}
          </StyledReviewPhotos>

          <StyledReviewEvaluateBox>
            {author._id === me?._id && (
              <>
                <span>수정하기</span>
                <span onClick={onClickDelete}>삭제하기</span>
              </>
            )}
          </StyledReviewEvaluateBox>
        </StyledReviewCard>
      </StyledContainer>
      {isOpen && <ModalCaroucel onClick={onClose} isOpen={isOpen} photos={photos} />}
    </>
  );
};

export default memo(ReviewCard);
