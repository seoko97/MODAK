import React from "react";
import SmileIcon from "@icons/SmileIcon";
import NormalIcon from "@icons/NormalIcon";
import AngryIcon from "@icons/AngryIcon";
import { RowIconWrapper } from "./style";

interface Props {
  rating: string;
}

const Rating = ({ rating }: Props) => {
  switch (rating) {
    case "또 가고 싶어요":
      return <Smile />;
    case "평범해요":
      return <Noraml />;
    case "별로에요":
      return <Angry />;
    default:
      return <Noraml />;
  }
};

export default Rating;

const Smile = () => {
  return (
    <RowIconWrapper>
      <SmileIcon size={40} />
      <span>또 가고 싶어요</span>
    </RowIconWrapper>
  );
};

const Noraml = () => {
  return (
    <RowIconWrapper>
      <NormalIcon size={40} />
      <span>평범해요</span>
    </RowIconWrapper>
  );
};

const Angry = () => {
  return (
    <RowIconWrapper>
      <AngryIcon size={40} />
      <span>별로에요</span>
    </RowIconWrapper>
  );
};
