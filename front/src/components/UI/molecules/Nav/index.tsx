import React from "react";
import styled from "styled-components";

const StyledNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Nav = () => {
  return (
    <>
      <StyledNav>
        <li>
          <span>CampSite</span>
        </li>
        <li>
          <span>CampSite</span>
        </li>
      </StyledNav>
    </>
  );
};

export default Nav;
