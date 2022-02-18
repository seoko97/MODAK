import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@src/store/configureStore";
import { getUserReviews as getReview } from "@reducers/reviews/action";
import { getUserCamps as getCamps } from "@reducers/camps/action";
import WishList from "@src/components/UI/organisms/WishList";
import MyPageProfile from "../MyPageProfile";
import Tabs from "../../molecules/MyProfileTabs";
import Style from "./style";
import RowFrame from "../../templates/RowFrame";
import MyReview from "../MyReview";

interface Props {
  userId: string;
}

const MyPage = ({ userId }: Props) => {
  const [tab, setTab] = useState<string>("내 리뷰");
  const { mainCamps, getUserCamps } = useAppSelector((state) => state.camps);
  const { loading: campLoading, error: campError } = getUserCamps;
  const { mainReviews, getUserReviews } = useAppSelector((state) => state.reviews);
  const { loading: reviewLoading, error: reviewError } = getUserReviews;
  const dispatch = useDispatch();

  const getComponentByTab = useMemo(() => {
    switch (tab) {
      case "내 리뷰":
        return mainReviews.map((review) => <MyReview key={review._id} review={review} />);
      case "찜한 캠핑장":
        return mainCamps.map((camp) => <WishList key={camp._id} camp={camp} />);
      default:
        return null;
    }
  }, [tab]);

  const handleClick = useCallback(async (e) => {
    const text = e.target.innerText;
    if (text === "내 리뷰") await dispatch(getReview({ userId }));
    setTab(e.target.innerText);
  }, []);

  return (
    <RowFrame>
      <Style.Main>
        <MyPageProfile />
        <Tabs current={tab} onClick={handleClick}></Tabs>
        {getComponentByTab}
      </Style.Main>
    </RowFrame>
  );
};

export default memo(MyPage);
