import React from "react";
import { url } from "@src/apis";
import HeartIcon from "@src/components/icons/HeartIcon";
import { IReview } from "@src/types/reducers/review";
import Style from "./style";
import SubTitle from "../../atoms/SubTitle";

interface Props {
  review: IReview;
}

const HeartIconComponent = ({ likes }: Pick<IReview, "likes">) => (
  <Style.IconBox>
    <Style.Icons>
      <HeartIcon size={13} /> 11
    </Style.Icons>
  </Style.IconBox>
);

const MyReview = ({ review }: Props) => {
  const { createdAt, content, photos, location, likes } = review;
  return (
    <Style.Review>
      <Style.CampInfo>
        <SubTitle size={14}>{createdAt}</SubTitle>
        <Style.CampLink href={`/camp/${location._id}`}>
          <a>@{location.name}</a>
        </Style.CampLink>
        <HeartIconComponent likes={likes} />
      </Style.CampInfo>
      <Style.ReviewPost>{content}</Style.ReviewPost>
      <Style.PhotoBox>
        {/* {photos.map(
          (photo, idx) => idx <= 2 && <img key={idx} src={`${url}/${photo}`} alt="reviewPhoto" />,
        )} */}
      </Style.PhotoBox>
      {/* {photos.length > 2 && <Style.MorePhotos>더 보기</Style.MorePhotos>} */}
    </Style.Review>
  );
};

export default MyReview;
