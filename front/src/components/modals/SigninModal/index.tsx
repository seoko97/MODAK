import React from "react";
import styled from "styled-components";
import Logo from "@icons/Logo";
import KakaoIcon from "@icons/kakaoIcon";
import GoogleIcon from "@icons/GoogleIcon";
import { url } from "@apis/.";
import ExitIcon from "@icons/ExitIcon";
import ModalLayout from "../ModalLayout";

interface Props {
  onClose: () => void;
}
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: #fff;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.4);
  padding: 45px 30px 60px;
  z-index: 101;
  & > svg {
    width: 120px;
  }
  & > h2 {
    font-size: 18px;
    font-weight: 700;
  }

  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    width: 100%;
    margin: 10px;
  }
`;

const Item = styled.a<{ source: string }>`
  position: relative;
  width: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 16px;
  gap: 8px;
  font-weight: 500;

  transition: filter 0.125s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
  color: ${({ source }) => (source === "google" ? "rgba(0, 0, 0, 0.54)" : "#66514c")};
  background-color: ${({ source }) => (source === "google" ? "#fff" : "#FEE500")};
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

const Icon = styled.div<{ source: string }>`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 16px;
  top: 16px;
`;

const ExitBtn = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const SigninModal = ({ onClose }: Props) => {
  return (
    <ModalLayout onClick={onClose}>
      <Container>
        <ExitBtn onClick={onClose}>
          <ExitIcon />
        </ExitBtn>
        <Logo />
        <h2>로그인</h2>
        <span>로그인 후 이용 가능합니다.</span>
        <Item source="kakao" href={`${url}/api/auth/kakao`}>
          <Icon source="kakao">
            <KakaoIcon />
          </Icon>
          <span>카카오 로그인</span>
        </Item>
        <Item source="google" href={`${url}/api/auth/google`}>
          <Icon source="google">
            <GoogleIcon />
          </Icon>
          <span>구글 로그인</span>
        </Item>
      </Container>
    </ModalLayout>
  );
};

export default SigninModal;
