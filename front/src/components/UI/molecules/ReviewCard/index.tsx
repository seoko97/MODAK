import React, { memo, useMemo, useCallback } from "react";
import Link from "@atoms/Link";
import SubTitle from "@atoms/SubTitle";
import Avatar from "@atoms/Avatar";
import Title from "@atoms/Title";
import HeartIcon from "@icons/HeartIcon";
import PencilIcon from "@icons/PencilIcon";
import { IReview } from "@src/types/reducers/review";
import { url } from "@src/apis";
import { likeReview, unLikeReview } from "@src/reducers/review/action";
import { useDispatch } from "react-redux";
import Rating from "./Rating";
import { useAppSelector } from "../../../../store/configureStore";
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

const ReviewCard = ({ review }: Props) => {
  const dispatch = useDispatch();
  const { me } = useAppSelector((state) => state.user);
  const { _id, content, photos, author, createdAt, rating, count, likes } = review;
  const { _id: userId, nickname, profileImg, reviewCount, totalLike } = author;

  const likedUser = useMemo(() => {
    if (!me) return false;
    return likes.includes(userId);
  }, [me]);

  const onClickLiked = useCallback(async () => {
    if (me) await dispatch(likeReview(_id));
  }, [me, _id]);

  const onClickUnLiked = useCallback(async () => {
    if (me) await dispatch(unLikeReview(_id));
  }, [me, _id]);

  return (
    <StyledContainer>
      <StyledProfileContainer>
        <StyledProfile>
          <Link href="/user/1">
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
            <img key={idx} src={`${url}/${photo}`} alt="reviewPhoto" />
          ))}
        </StyledReviewPhotos>

        <StyledReviewEvaluateBox>
          <span>신고하기</span>
        </StyledReviewEvaluateBox>
      </StyledReviewCard>
    </StyledContainer>
  );
};

export default memo(ReviewCard);
