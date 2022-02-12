import React, { useState } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import Avatar from "../../atoms/Avatar";

const StyledAvatar = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 로그인 된 상태일 때 */
  position: relative;

  div:last-of-type {
    display: ${({ open }) => (open ? "block" : "none")};
    width: 120px;
    top: 35px;
    position: absolute;
    text-align: center;
    padding: 5px;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    transition: all 0.3s;
    opacity: ${({ open }) => (open ? "1" : "0")};
  }

  li {
    cursor: pointer;
  }
`;

const AvatarWrapper = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <StyledAvatar open={open}>
      <div
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Avatar url="/post.jpg" alt="사진" />
      </div>

      <div>
        <NavItem text="마이페이지" href="/user/:id" />
        <NavItem text="로그아웃" href="/" />
      </div>
    </StyledAvatar>
  );
};

export default AvatarWrapper;
