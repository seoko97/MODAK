import React, { memo } from "react";
import Style from "./Style";

interface Props {
  current: string;
  onClick: (e: any) => void;
}

const tabs = ["내 리뷰", "찜한 캠핑장"];

const Taps = ({ current, onClick }: Props) => {
  return (
    <Style.Container role="tablist">
      {tabs.map((tab, idx) => {
        return (
          <Style.EachTab key={idx} role="tab" active={current === tab} onClick={onClick}>
            {tab}
          </Style.EachTab>
        );
      })}
    </Style.Container>
  );
};

export default memo(Taps);
