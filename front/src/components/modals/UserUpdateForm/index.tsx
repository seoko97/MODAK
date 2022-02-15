import React, { SetStateAction, useRef, Dispatch } from "react";
import styled, { css } from "styled-components";
import ModalLayout from "@src/components/modals/ModalLayout";
import { User } from "@src/components/UI/molecules/MypageProfile";
import TrashCanIcon from "@src/components/icons/TrashCanIcon";
import ExitIcon from "@src/components/icons/ExitIcon";

interface Props {
  onClick: () => void;
  user: User;
  updateUser: (user: User) => void;
}

const UserUpdate = ({ onClick, user, updateUser }: Props) => {
  const { nickname, intro, profile } = user;
  const imageRef = React.useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const introRef = useRef<HTMLTextAreaElement | null>(null);

  const onChangeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    imageRef.current?.click();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.currentTarget === null) {
      return;
    }
    const updated: User = { ...user, [e.currentTarget.name]: e.currentTarget.value };
    updateUser(updated);
  };

  // ! 이미지 url을 받아와서 바꿔야함.
  const onChangeImage = async () => {
    updateUser({
      ...user,
      profile:
        "https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1397&q=80",
    });
  };

  const deleteImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateUser({
      ...user,
      profile: "",
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const _nickname = e.target.nickname.value.trim();
    if (_nickname === "") {
      alert("닉네임은 한 글자 이상 입력해주세요.");
      return;
    }
    const _intro = e.target.intro.value;
    const updated = { ...user, nickname: _nickname, introduce: _intro };
    updateUser(updated);
    onClick();
  };

  const exitUser = () => {
    confirm("탈퇴하시겠어요?");
  };

  return (
    <ModalLayout onClick={onClick}>
      <Container onSubmit={handleSubmit}>
        <ExitModal onClick={onClick}>
          <ExitIcon />
        </ExitModal>
        <Header>
          <HeaderTitle>회원정보수정</HeaderTitle>
        </Header>
        <EditContainer>
          <EditTitle>프로필 이미지</EditTitle>
          <EditImage>
            <ImageInput
              ref={imageRef}
              type="file"
              accept="image/*"
              name="file"
              onChange={onChangeImage}
            />
            <ImageContainer onClick={onChangeClick}>
              <ProfileImage src={profile} alt="profile__image"></ProfileImage>
            </ImageContainer>
            <DeleteImage onClick={deleteImage}>
              <TrashCanIcon />
            </DeleteImage>
          </EditImage>
        </EditContainer>
        <EditContainer>
          <EditTitle>닉네임</EditTitle>
          <InputName
            type="text"
            name="nickname"
            ref={nameRef}
            value={nickname}
            onChange={onChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          />
        </EditContainer>
        <EditContainer>
          <EditTitle>소개</EditTitle>
          <InputText name="intro" ref={introRef} value={intro} onChange={onChange}></InputText>
        </EditContainer>
        <EditContainer>
          <ModifyButton>회원 정보 수정</ModifyButton>
        </EditContainer>
        <UserExit onClick={exitUser}>탈퇴하기</UserExit>
      </Container>
    </ModalLayout>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 500px;
  padding: 50px;
  z-index: 1002;
  box-sizing: border-box;
  background-color: #f7f7f7;
  color: #0c0c0c;
  border-radius: 10px;
  & > button {
    align-self: flex-end;
  }
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    width: 100%;
    & button {
      align-self: center;
    }
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

const HeaderTitle = styled.div`
  flex: 1 0 0px;
  font-size: 24px;
  font-weight: bold;
`;

const UserExit = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const EditContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 12px auto;
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    flex-direction: column;
  }
`;

const EditTitle = styled.div`
  width: 100px;
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    width: 200px;
    color: #494949;
  }
`;

const Input = css`
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px #f2b705;
  }
  transition: all 0.2s;
  box-sizing: border-box;
  padding: 0 15px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  height: 36px;
  color: #1b1b1b;
  width: 200px;
  position: relative;
`;
const InputName = styled.input`
  ${Input};
`;

const InputText = styled.textarea`
  ${Input};
  height: 54px;
`;

const EditImage = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transition: all 0.1s;
`;

const ImageContainer = styled.div`
  cursor: pointer;
  width: 200px;
  height: 200px;
  transition: opacity 0.1s;
  position: relative;
  :hover {
    opacity: 0.5;
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
`;

const DeleteImage = styled.button`
  position: absolute;
  right: 6px;
  top: 6px;
  background-color: #038c5a;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 2px;
  & svg {
    fill: #f3f3f3;
  }
  :hover {
    background-color: #025939;
  }
  transition: all 0.1s;
`;

const ModifyButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #f29f05;
  border-radius: 2px;
  border: none;
  color: #fff;
  cursor: pointer;
  margin: auto;
`;

const ExitModal = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  width: 18px;
  height: 18px;
  padding: 0;
`;

export default UserUpdate;
