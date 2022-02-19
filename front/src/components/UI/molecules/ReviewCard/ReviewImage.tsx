import React from "react";
import { url } from "@apis/.";
import { StyledReviewPhotos } from "./style";

interface Props {
  images: string[];
  onClick: () => void;
}

const ReviewImage = ({ images, onClick }: Props) => {
  const len = images.length;
  return (
    <StyledReviewPhotos>
      {images?.slice(0, 3).map((image, idx) => (
        <div key={idx} onClick={onClick}>
          <img src={`${url}/image/${image}`} alt="reviewPhoto" />
          {len > 3 && <div className="over">+{len - 3}</div>}
        </div>
      ))}
    </StyledReviewPhotos>
  );
};

export default ReviewImage;
