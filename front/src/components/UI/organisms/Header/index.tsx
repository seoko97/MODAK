import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import RowFrame from "@templates/RowFrame";
import Logo from "@icons/Logo";
import Nav from "@molecules/Nav";
import SearchInput from "@molecules/SearchInput";

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
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <StyledHeader>
        <RowFrame>
          <Link href="/">
            <Logo />
          </Link>
          <SearchInput />
          <Nav login={isLogin} />
        </RowFrame>
      </StyledHeader>
    </>
  );
};

export default React.memo(Header);
