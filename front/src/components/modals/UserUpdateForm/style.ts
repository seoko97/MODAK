import styled, { css } from "styled-components";

const Container = styled.div`
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
  margin: auto 26px;
  & > button {
    align-self: flex-end;
  }

  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    padding: 0;
    & button {
      align-self: center;
    }
    font-size: 90%;
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
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    text-align: center;
    margin-top: 20px;
    font-size: 22px;
  }
`;

const EditContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 12px auto;
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    flex-direction: column;
    justify-content: center;
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
  padding: 4px 10px;
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
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    margin: 0 0 20px 0;
  }
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

export default {
  Container,
  DeleteImage,
  EditContainer,
  EditImage,
  EditTitle,
  ExitModal,
  Header,
  HeaderTitle,
  ImageContainer,
  ImageInput,
  Input,
  InputName,
  InputText,
  ModifyButton,
  ProfileImage,
};
