import React from "react";
import styled, { css } from "styled-components";

interface Props {
  current: string;
  onClick: (tab: string) => void;
}
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

const EachTab = styled.span<{ active: boolean }>`
  font-size: 14px;
  color: #757575;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      color: #038c5a;
      font-weight: bold;
      box-shadow: inset 0px -2px 0px #038c5a;
    `}
  ${(props) =>
    !props.active &&
    css`
      :hover {
        color: #f29f05;
        font-weight: bold;
      }
    `}
`;

const tabs = ["내 리뷰", "나의 캠핑 기록", "찜한 캠핑장"];

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
