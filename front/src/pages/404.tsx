import RowFrame from "@src/components/UI/templates/RowFrame";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  }
`;

const Error = () => {
  return (
    <Wrapper>
      <RowFrame>존재하지 않는 페이지 입니다.</RowFrame>
    </Wrapper>
  );
};

export default Error;
