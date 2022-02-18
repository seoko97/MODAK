import TentIcon from "@icons/TentIcon";
import SigninModal from "@modals/SigninModal";
import useModal from "@hooks/useModal";
import { signout } from "@reducers/user/action";
import { AppDispatch, useAppSelector } from "@store/configureStore";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Avatar from "../../atoms/Avatar";
import Link from "../../atoms/Link";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const Container = styled.ul<Pick<Props, "isOpen">>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  width: 70%;
  transition: left 0.3s;
  max-width: 300px;
  height: 100vh;
  background-color: #fff;
  z-index: 1000;
  background-color: ${({ theme }) => theme.BAKCGROUND_COLOR.PRIMARY_COLOR};
  gap: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  & > li:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.BORDER_COLOR.PRIMARY_COLOR};
  }

  & > * {
    color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
    padding: 10px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  overflow: hidden;
`;

const NavBox = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const UserBox = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 20px 10px;
`;

const IconBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;

  & > svg {
    width: 30px;
    height: 30px;
    fill: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  }
`;

const MobileNav = ({ onClose, isOpen }: Props) => {
  const bodyRef = useRef<HTMLElement | null>(null);
  const [isOpenLogin, onShowForm, onCloseForm] = useModal();
  const { me } = useAppSelector((state) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const onSignout = useCallback(() => {
    dispatch(signout());
  }, []);

  useEffect(() => {
    if (isOpenLogin && isOpen) onClose();
  }, [isOpenLogin]);

  useEffect(() => {
    bodyRef.current = document.body;
  }, []);

  useEffect(() => {
    if (!isOpenLogin) (bodyRef.current as HTMLElement).style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <Container isOpen={isOpen}>
        <IconBox onClick={onClose}>
          <TentIcon />
        </IconBox>
        {me ? (
          <UserBox>
            <Avatar url={me.profileImg} alt="user_avatar" />
            <span>{me.nickname} 님</span>
          </UserBox>
        ) : (
          <li>
            <span>로그인이 필요합니다.</span>
          </li>
        )}
        <NavBox>
          <Link href="/camp">
            <span>Campsite</span>
          </Link>
        </NavBox>

        {me ? (
          <NavBox>
            <Link href={`/user/${me?._id}`}>마이페이지</Link>
            <span onClick={onSignout}>로그아웃</span>
          </NavBox>
        ) : (
          <li onClick={onShowForm}>
            <span>로그인</span>
          </li>
        )}
      </Container>
      {isOpen && <Overlay onClick={onClose} />}
      {isOpenLogin && <SigninModal onClose={onCloseForm} />}
    </>
  );
};

export default MobileNav;
