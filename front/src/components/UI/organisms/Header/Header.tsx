import React from "react";
import styled from "styled-components";

import Logo from "@icons/Logo";
import RowFrame from "@src/components/UI/templates/testfile";

const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  top: -32px;
  padding-top: 32px;
  transition: all 0.25s ease-in-out 0s;
  z-index: 1;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <RowFrame>
          <Logo />
        </RowFrame>
      </StyledHeader>
    </>
  );
};

export default React.memo(Header);
