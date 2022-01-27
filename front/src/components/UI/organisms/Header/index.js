import Logo from "@src/components/icons/Logo";
import React from "react";
import styled from "styled-components";
import RowFrame from "../../templates/RowFrame";

const HeaderWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: -32px;
  transition: all 0.25s ease-in-out 0s;
  z-index: 1;
  backdrop-filter: blur(2px);
`;

const HeaderFrame = styled(RowFrame)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;

  & > svg {
    width: 100px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderFrame>
        <Logo />
      </HeaderFrame>
    </HeaderWrapper>
  );
};

export default Header;
