import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppSelector } from "@store/configureStore";

interface Props {
  current: string;
  onClick: (tab: string) => void;
}

const tabs = ["전체", "또 가고 싶어요", "평범해요", "별로에요"];

const Tap = ({ current, onClick }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { create } = useAppSelector((state) => state.review);
  useEffect(() => {
    if (create.done) onClick((ref.current?.firstChild as Element).innerHTML);
  }, [create.done]);

  return (
    <Container ref={ref}>
      {tabs.map((tab, idx) => {
        return (
          <EachTab key={idx} active={current === tab} onClick={() => onClick(tab)}>
            {tab}
          </EachTab>
        );
      })}
    </Container>
  );
};

export default Tap;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0 10px;
`;

const EachTab = styled.span<{ active: boolean }>`
  font-size: 14px;
  opacity: 0.8;
  cursor: pointer;

  ${(props) =>
    props.active &&
    `
      color: #038c5a;
      font-weight: bold;
      box-shadow: inset 0px -2px 0px #038c5a;
    `};
`;
