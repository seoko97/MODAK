import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* width: 1100px; */
  box-sizing: border-box;
  margin: 50px auto;
  box-shadow: grey 0px 1px 3px 0px;
  padding: 50px;
  color: #0c0c0c;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 60px;
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
  display: flex;
  align-items: center;
  margin: 30px auto;
`;

const EditTitle = styled.div`
  width: 100px;
`;

const InputBox = styled.div`
  max-width: 400px;
  flex: 1 0 0px;
`;
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
`;

const EditImage = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transition: all 0.1s;
`;

const ImageHover = styled.div`
  width: 200px;
  height: 200px;
  transition: opacity 0.1s;
  :hover {
    opacity: 0.5;
  }
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
  background-color: blue;
  border-radius: 2px;
  border: none;
  color: #fff;
  margin-left: 100px;
  cursor: pointer;
`;

const UserChange = () => {
  return (
    <form>
      <Container>
        <Header>
          <HeaderTitle>회원정보수정</HeaderTitle>
          <UserExit>탈퇴하기</UserExit>
        </Header>
        <EditContainer>
          <EditTitle>프로필 이미지</EditTitle>
          <EditImage>
            <ChangeImage>
              <ImageHover>
                <ProfileImage
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="a"
                ></ProfileImage>
              </ImageHover>
            </ChangeImage>
            <DeleteImage>삭제</DeleteImage>
          </EditImage>
        </EditContainer>
        <EditContainer>
          <EditTitle>닉네임</EditTitle>
          <InputBox>
            <Input></Input>
          </InputBox>
        </EditContainer>
        <EditContainer>
          <EditTitle>소개</EditTitle>
          <InputBox>
            <Input></Input>
          </InputBox>
        </EditContainer>
        <ModifyButton>회원 정보 수정</ModifyButton>
      </Container>
    </form>
  );
};

export default UserChange;
