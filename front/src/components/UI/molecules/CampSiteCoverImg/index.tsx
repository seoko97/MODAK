import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import Router from "next/router";
import Link from "@atoms/Link";

import Title from "@atoms/Title";
import Button from "@atoms/Button";
import LookIcon from "@icons/LookIcon";
import CommentIcon from "@icons/CommentIcon";
import HeartIcon from "@icons/HeartIcon";
import useModal from "@hooks/useModal";
import ReviewForm from "@modals/ReviewForm";
import { ICamp } from "@type/reducers/camp";
import { AppDispatch, useAppSelector } from "@store/configureStore";
import { bookmark, unbookmark } from "@reducers/camp/action";
import { bookmarked, unBookmarked } from "@reducers/camps";
import { url } from "@apis/.";

const CampSiteCoverImg = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    singleCamp,
    bookmark: bmState,
    unbookmark: ubmState,
  } = useAppSelector((state) => state.camp);

  const { me } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!singleCamp) Router.push("/");
  }, []);

  const {
    _id,
    name,
    lineIntro,
    thema,
    environment,
    totalBookmark,
    photos,
    totalReview,
    views,
    bookmark: bmList,
  } = singleCamp as ICamp;

  const [isOpen, onOpen, onClose] = useModal();
  const bookMarkedUser = useMemo(() => {
    if (!me) return false;
    return bmList.includes(me._id);
  }, [me?._id, bmList]);

  const onClickBookMark = useCallback(async () => {
    if (me) {
      const res = await dispatch(bookmark(_id));
      dispatch(bookmarked(res));
    }
  }, [_id]);

  const onClickUnBookMark = useCallback(async () => {
    if (me) {
      const res = await dispatch(unbookmark(_id));
      dispatch(unBookmarked(res));
    }
  }, [_id, bookMarkedUser]);

  return (
    <>
      <CampCoverImgBox photos={photos}>
        <CampCoverImgContent>
          {/* 캠핑장 이름 */}
          <Title size={35}>{name}</Title>

          {/* 한 줄 소개 */}
          <p>{lineIntro}</p>

          {/* 아이콘/ 서브택스트 */}
          <IconContainer>
            <IconBox>
              <RowIcon>
                <LookIcon size={20} />
                <span>{views || 0}</span>
              </RowIcon>
              <RowIcon>
                <CommentIcon size={20} />
                <span>{totalReview || 0}</span>
              </RowIcon>
              <RowIcon>
                <HeartIcon size={16} />
                <span>{totalBookmark || 0}</span>
              </RowIcon>
            </IconBox>

            <ButtonBox>
              <Button onClick={onOpen} name="후기작성" />
              {isOpen && <ReviewForm onClick={onClose} camp={singleCamp as ICamp} />}
              <Button
                name={bookMarkedUser ? "북마크 제거" : "북마크 추가"}
                onClick={bookMarkedUser ? onClickUnBookMark : onClickBookMark}
                disabled={bmState.loading || ubmState.loading}
              />
            </ButtonBox>
          </IconContainer>

          {/* 테마 & 환경 */}
          <ThemaBox>{makeTagList(thema, "thema")}</ThemaBox>
          <ThemaBox>{makeTagList(environment, "environment")}</ThemaBox>
        </CampCoverImgContent>
      </CampCoverImgBox>
    </>
  );
};

function makeTagList(list: string[], type: string) {
  const lists = list.map((el, idx) => (
    <Link href={`/search?${type}=${el}`} key={idx}>
      <span key={idx}># {el}</span>
    </Link>
  ));
  return lists;
}

export default CampSiteCoverImg;

const CampCoverImgBox = styled.div<Pick<ICamp, "photos">>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-image: url(${({ photos }) =>
    photos[0] ? `${url}/image/${photos[0]}` : "/tent.jpeg"});
  background-size: cover;
  overflow: hidden;

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const CampCoverImgContent = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  box-sizing: border-box;
  color: #fff;
  padding: 50px;
  z-index: 2;

  & > p {
    font-weight: bold;
    font-size: 20px;
    font-style: italic;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    & > h2 {
      font-size: 26px;
    }

    & > p {
      font-size: 16px;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  & > button {
    background-color: royalblue;
    color: #fff;
    padding: 8px 12px;
    border-radius: 12px;
  }
  & > button:last-child {
    background-color: crimson;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    gap: 5px;

    & > button {
      padding: 6px 8px;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const IconBox = styled.div`
  display: flex;
  gap: 15px;
`;

const CampSiteIcon = css`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;

  svg {
    fill: #fff;

    & + span {
      font-size: 14px;
    }
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    svg {
      width: 15px;
      height: 15px;

      & + span {
        font-size: 12px;
      }
    }
  }
`;

const RowIcon = styled.div`
  ${CampSiteIcon};
`;

const ThemaBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  & > a {
    font-weight: bold;
    color: #fff;
    background-color: #038c5a;
    padding: 8px 10px;
    border-radius: 12px;

    @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
      padding: 6px 8px;
    }
  }
`;
