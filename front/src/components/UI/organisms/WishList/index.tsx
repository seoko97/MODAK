import React from "react";
import HeartIcon from "@icons/HeartIcon";
import PencilIcon from "@icons/PencilIcon";
import { ICamp } from "@type/reducers/camp";
import Style from "./style";

interface Props {
  camp: ICamp;
}

const IconComponent = ({
  totalBookmark,
  totalReview,
}: Pick<ICamp, "totalBookmark" | "totalReview">) => (
  <Style.IconBox>
    <Style.Icons>
      <PencilIcon size={13} /> {totalReview}
    </Style.Icons>
    <Style.Icons>
      <HeartIcon size={13} /> {totalBookmark}
    </Style.Icons>
  </Style.IconBox>
);

const WishList = ({ camp }: Props) => {
  const { _id, thema, photos, name, totalBookmark, totalReview } = camp;

  return (
    <Style.WishCamp>
      <Style.CampInfo>
        <Style.CampLink href={`/camp/${_id}`}>
          <a>
            <p>@{name}</p>
          </a>
        </Style.CampLink>
        <IconComponent totalBookmark={totalBookmark} totalReview={totalReview} />
      </Style.CampInfo>
      <Style.Tags>{thema.map((value) => `#${value}`)}</Style.Tags>
      <Style.OtherReview>
        <Style.PhotoBox>
          {photos.map((photo) => (
            <img key={photo} src={photo} alt="reviewPhoto" />
          ))}
        </Style.PhotoBox>
      </Style.OtherReview>
    </Style.WishCamp>
  );
};

export default WishList;
