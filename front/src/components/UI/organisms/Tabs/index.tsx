import React, { memo, MouseEvent, useEffect } from "react";
import styled, { css } from "styled-components";

interface Props {
  current: string;
  onClick: (e: MouseEvent<HTMLInputElement>) => void;
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    flex-direction: column;
    gap: 6px;
  }
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

const Taps = ({ current, onClick }: Props) => {
  return (
    <Container>
      {tabs.map((tab, idx) => {
        return (
          <EachTab key={idx} active={current === tab} onClick={onClick}>
            {tab}
          </EachTab>
        );
      })}
    </Container>
  );
};

export default memo(Taps);
