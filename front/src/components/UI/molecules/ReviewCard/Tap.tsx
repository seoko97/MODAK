import React from "react";
import styled from "styled-components";

interface Props {
  current: string;
  onClick: (tab: string) => void;
}

const tabs = ["전체", "또 가고 싶어요", "평범해요", "별로에요"];

const Tap = ({ current, onClick }: Props) => {
  return (
    <Container>
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
  gap: 10px;
  margin: 40px 0 30px;
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
