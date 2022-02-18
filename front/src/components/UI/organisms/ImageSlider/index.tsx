import React, { useCallback, useRef } from "react";

import Slick from "react-slick";

import { url } from "@apis/.";
import { Inner, MainSlickItems, NextButton, NextIcon, PrevButton, PrevIcon, Wrap } from "./styles";

interface Props {
  images: string[];
}
const setting = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slide = ({ images }: Props) => {
  const mainSlickRef = useRef(null);

  const onClickPrev = useCallback((ref) => () => ref.current.slickPrev(), []);
  const onClickNext = useCallback((ref) => () => ref.current.slickNext(), []);
  const len = images.length;
  return (
    <Wrap>
      <Inner>
        <Slick ref={mainSlickRef} {...setting}>
          {images.map((v, i) => {
            return (
              <MainSlickItems key={`${v}_${i}`}>
                <img src={`${url}/${v}`} alt="img" />
              </MainSlickItems>
            );
          })}
        </Slick>
        <>
          {len !== 1 && (
            <>
              <PrevButton onClick={onClickPrev(mainSlickRef)}>
                <PrevIcon />
              </PrevButton>
              <NextButton onClick={onClickNext(mainSlickRef)}>
                <NextIcon />
              </NextButton>
            </>
          )}
        </>
      </Inner>
    </Wrap>
  );
};
export default Slide;
