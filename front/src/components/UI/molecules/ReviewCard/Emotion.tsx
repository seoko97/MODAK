import React from "react";
import SmileIcon from "@icons/SmileIcon";
import NormalIcon from "@icons/NormalIcon";
import AngryIcon from "@icons/AngryIcon";
import { RowIconWrapper } from "./style";

interface Props {
  emotion: string;
}

const Emotion = ({ emotion }: Props) => {
  switch (emotion) {
    case "best":
      return <Smile />;
    case "normal":
      return <Noraml />;
    case "angry":
      return <Angry />;
    default:
      return <Noraml />;
  }
};

export default Emotion;

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
      <span>최악입니다</span>
    </RowIconWrapper>
  );
};
