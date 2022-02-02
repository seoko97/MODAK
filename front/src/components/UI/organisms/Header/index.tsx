import React from "react";
import styled from "styled-components";

import Logo from "@icons/Logo";
import RowFrame from "@templates/RowFrame";
import Nav from "@molecules/Nav";

const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  top: -32px;
  padding-top: 32px;
  transition: all 0.3s ease-in-out;
  z-index: 1;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    & > svg {
      width: 130px;
    }
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <RowFrame>
          <Logo />
          <Nav />
        </RowFrame>
      </StyledHeader>
    </>
  );
};

export default React.memo(Header);
