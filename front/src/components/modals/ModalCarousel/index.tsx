import React from "react";
import Slick, { Settings } from "react-slick";
import styled from "styled-components";
import { NextArrow, PrevArrow } from "@organisms/CardSlider/arrow";
import { url } from "@src/apis";
import ModalLayout from "../ModalLayout";

interface Props {
  isOpen: boolean;
  onClick: () => void;
  photos: string[];
}

const Container = styled.article`
  position: fixed;
  width: 90%;
  height: 90%;
  z-index: 300;
  background-color: #fff;

  & .slick-arrow {
    width: 14px;
    display: block;
  }
  & .post-slide {
    width: 50%;
    padding: 20px 0;
  }
  & .slick-slide {
    padding: 10px 0;
  }

  & svg {
    fill: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
`;

const ImageWrraper = styled.div`
  width: 100%;
  height: 100%;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const settings: Settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <PrevArrow />,
  prevArrow: <NextArrow />,
  dots: true,
};

const ModalCaroucel = ({ isOpen, onClick, photos }: Props) => {
  return (
    <>
      <ModalLayout onClick={onClick}>
        <Container>
          <div className="post-slide">
            <Slick {...settings}>
              {photos.map((photo, i) => (
                <ImageWrraper key={photo + i}>
                  <img src={`${url}/${photo}`} alt="photos" />
                </ImageWrraper>
              ))}
            </Slick>
          </div>
        </Container>
      </ModalLayout>
    </>
  );
};

export default ModalCaroucel;
