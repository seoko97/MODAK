import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import Button from "../../atoms/Button";
import AvatarWrapper from "./AvatarWrapper";

interface Props {
  login: boolean;
}

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

  /* 로그인 버튼 */
  & > button {
    background-color: black;
    color: #fff;
    padding: 8px;
    border-radius: 12px;
  }
`;

const Nav = ({ login }: Props) => {
  return (
    <>
      <StyledNav>
        <NavItem text="CampSite" href="/campsite" />
        <NavItem text="Review" href="/campsite" />

        {login ? <AvatarWrapper /> : <Button name="로그인" />}
      </StyledNav>
    </>
  );
};

export default Nav;
