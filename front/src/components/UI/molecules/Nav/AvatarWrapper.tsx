import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppDispatch, useAppSelector } from "@store/configureStore";
import useModal from "@hooks/useModal";
import { signout } from "@reducers/user/action";
import Avatar from "@atoms/Avatar";
import Button from "@atoms/Button";
import Link from "@atoms/Link";
import Overlay from "@atoms/Overlay";
import { checkUrl } from "@lib/checkUrl";

const StyledAvatar = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  z-index: 100;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuBox = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  padding: 10px;
  position: absolute;
  width: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 35px;
  right: 0;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  background-color: ${({ theme }) => theme.BAKCGROUND_COLOR.PRIMARY_COLOR};
  box-shadow: 0 3px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 5px;
`;

const MenuItem = styled.li`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
  & button {
    padding: 0;
  }
`;

const AvatarWrapper = () => {
  const { me } = useAppSelector((state) => state.user);
  const [isOpen, onOpen, onClose] = useModal();
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const onSignout = useCallback(() => {
    dispatch(signout());
  }, []);

  useEffect(() => {
    onClose();
  }, [router.asPath]);

  return (
    <>
      <StyledAvatar isOpen={isOpen}>
        <Inner onClick={onOpen}>
          <Avatar url={checkUrl(me?.profileImg as string)} alt="사진" />
        </Inner>
        <MenuBox isOpen={isOpen}>
          <MenuItem>
            <span>{me?.nickname} 님</span>
          </MenuItem>
          <MenuItem>
            <Link href={`/user/${me?._id}`}>마이페이지</Link>
          </MenuItem>
          <MenuItem>
            <Button name="로그아웃" onClick={onSignout} />
          </MenuItem>
        </MenuBox>
      </StyledAvatar>
      {isOpen && <Overlay onClick={onClose} />}
    </>
  );
};

export default AvatarWrapper;
