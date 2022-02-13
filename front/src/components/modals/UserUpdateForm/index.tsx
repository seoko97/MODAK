import React, { useRef, useState } from "react";
import styled from "styled-components";
import ModalLayout from "@src/components/modals/ModalLayout";

interface Props {
  onClick: () => void;
}

const UserUpdate = ({ onClick }: Props) => {
  const [user, setUser] = useState({
    id: 1,
    nickname: "김불멍",
    description: "소개글입니다. 임의의 소개글입니다. 임의의 소개글입니다.",
    profile:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  });

  const { nickname, description, profile } = user;
  const imageRef = React.useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget === null) {
      return;
    }
    e.preventDefault();
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onChangeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    imageRef.current?.click();
  };

  // ! 이미지 url을 받아와서 바꿔야함.
  const onChangeImage = async () => {
    setUser({
      ...user,
      profile:
        "https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1397&q=80",
    });
  };

  return (
    <ModalLayout onClick={onClick}>
      <Container>
        <ExitModal onClick={onClick}>x</ExitModal>
        <Header>
          <HeaderTitle>회원정보수정</HeaderTitle>
          <UserExit>탈퇴하기</UserExit>
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
              <ProfileImage src={profile} alt="a"></ProfileImage>
            </ImageContainer>
            <DeleteImage>삭제</DeleteImage>
          </EditImage>
        </EditContainer>
        <EditContainer>
          <EditTitle>닉네임</EditTitle>
          <InputBox>
            <Input
              type="text"
              name="nickname"
              ref={nameRef}
              value={nickname}
              onChange={onChange}
            ></Input>
          </InputBox>
        </EditContainer>
        <EditContainer>
          <EditTitle>소개</EditTitle>
          <InputBox>
            <Input
              type="text"
              name="description"
              ref={descriptionRef}
              value={description}
              onChange={onChange}
            ></Input>
          </InputBox>
        </EditContainer>
        <EditContainer>
          <ModifyButton>회원 정보 수정</ModifyButton>
        </EditContainer>
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
`;

const EditContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
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

const InputBox = styled.div``;
const Input = styled.input`
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

const ChangeImage = styled.button`
  padding: 0;
  margin: 0;
  cursor: pointer;
  background-color: #d8d8d8;
  border: 1px solid #d8d8d8;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
`;

const DeleteImage = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: #038c5a;
  cursor: pointer;
  width: 40px;
  height: 20px;
  border: none;
  border-radius: 2px;
  color: #fff;
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
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #494949;
`;

export default UserUpdate;
