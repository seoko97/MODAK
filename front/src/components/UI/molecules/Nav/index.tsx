import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const StyledNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  & > li {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    & > *:first-of-type {
      margin-right: 5px;
    }
  }
`;

const Nav = () => {
  return (
    <>
      <StyledNav>
        <NavItem text="CampSite" href="/campsite" />
        <NavItem text="CampSite" href="/campsite" />
      </StyledNav>
    </>
  );
};

export default Nav;
