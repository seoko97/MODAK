import React, { memo } from "react";
import styled, { css } from "styled-components";
import { TabList } from "../MyPage";

interface Props {
  current: keyof TabList;
  onClick: (tab: keyof TabList) => void;
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const EachTab = styled.span<{ active: boolean }>`
  font-size: 18px;
  color: #757575;
  cursor: pointer;
  margin: auto;
  ${(props) =>
    props.active &&
    css`
      color: #038c5a;
      font-weight: bold;
      box-shadow: inset 0px -2.5px 0px #038c5a;
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

const tabs: (keyof TabList)[] = ["내 리뷰", "나의 캠핑 기록", "찜한 캠핑장"];

const Taps = ({ current, onClick }: Props) => {
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

export default Taps;
