import React from "react";
import Next from "@icons/ArrowIcon/Next";
import Prev from "@icons/ArrowIcon/Prev";

export function NextArrow(props: any) {
  const { className, onClick } = props;
  return <Next className={className} onClick={onClick} />;
}
export function PrevArrow(props: any) {
  const { className, onClick } = props;
  return <Prev className={`${className}`} onClick={onClick} />;
}
