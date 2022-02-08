import React from "react";
import styled from "styled-components";
import Link from "next/link";

import RowFrame from "@templates/RowFrame";
import Nav from "@molecules/Nav";
import Logo from "@icons/Logo";

const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  top: -32px;
  padding-top: 32px;
  transition: all 0.3s ease-in-out;
  z-index: 10;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    & > svg {
      width: 130px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <RowFrame>
          <Link href="/">
            <Logo />
          </Link>
          <Nav />
        </RowFrame>
      </StyledHeader>
    </>
  );
};

export default React.memo(Header);
