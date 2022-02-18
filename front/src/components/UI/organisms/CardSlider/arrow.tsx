import React from "react";
import Next from "@icons/ArrowIcon/Next";
import Prev from "@icons/ArrowIcon/Prev";
import { CustomArrowProps } from "react-slick";

const dummy = () => {
  return "dummy";
};

export function NextArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return <Next className={className || ""} onClick={onClick || dummy} />;
}
export function PrevArrow(props: CustomArrowProps) {
  const { className, onClick } = props;
  return <Prev className={className || ""} onClick={onClick || dummy} />;
}
