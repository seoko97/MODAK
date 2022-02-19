import React from "react";
import styled from "styled-components";
import { IUser } from "@type/reducers/user";
import useModal from "@hooks/useModal";
import SigninModal from "@modals/SigninModal";
import Button from "@atoms/Button";
import NavItem from "./NavItem";
import AvatarWrapper from "./AvatarWrapper";

interface Props {
  user: IUser | null;
}

const StyledNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  & > li {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    cursor: pointer;
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

const Nav = ({ user }: Props) => {
  const [isOpen, onOpen, onClose] = useModal();

  return (
    <>
      <StyledNav>
        <NavItem text="CampSite" href="/camp" />

        {user ? <AvatarWrapper /> : <Button name="로그인" onClick={onOpen} />}
        {isOpen && <SigninModal onClose={onClose} />}
      </StyledNav>
    </>
  );
};

export default Nav;
