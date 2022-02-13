import HearctIcon from "@src/components/icons/HeartIcon";
import PencilIcon from "@src/components/icons/PencilIcon";
import UserUpdate from "@src/components/modals/UserUpdateForm";
import useModal from "@src/hooks/useInput";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import Title from "../../atoms/Title";

// --- 프로필 컨테이너 ---
const Profile = styled.figure`
  display: flex;
  gap: 30px;
  padding: 30px;
  position: relative;
  & ::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 10px;
    bottom: 0px;
    background-color: #dedede;
  }
  margin-bottom: 10px;
`;

// --- 프로필 이미지 ---
const ImageBoxStyle = css`
  width: 130px;
  height: 130px;
  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileImage = styled.div`
  ${ImageBoxStyle}
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    display: none;
  }
`;

const Img = styled.img`
  ${ImageBoxStyle}
  border-radius: 50%;
`;

// --- 프로필 정보 ---
const ProfileInfo = styled.figcaption`
  color: gray;
  & h2,
  p {
    margin-bottom: 10px;
  }
`;

const UserName = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
`;

const IconBox = styled.div`
  display: flex;
`;

const Icons = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 5px;
  gap: 10px;
  justify-content: center;
  align-items: baseline;
  font-size: 14px;
  cursor: pointer;
  :hover {
    font-weight: bold;
    & svg {
      fill: red;
    }
  }
`;

const EditProfile = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

type User = {
  _id: number;
  firstName: string;
  lastName: string;
  email: string;
  nickname: string;
  profile: string;
  createAt: string;
  source: string;
  reviews?: [] | null;
  likes: number;
  special?: boolean;
  bookmark?: [] | null;
  introduce: string | null;
};

const user: User = {
  _id: 1,
  firstName: "이",
  lastName: "태현",
  email: "asdasd@gmail.com",
  nickname: "현",
  profile:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  createAt: "1121-11-11",
  source: "source",
  likes: 1,
  introduce:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet magnam dolor quasi laboriosam, qui facere deleniti, assumenda eius, expedita quisquam sit. Vitae veniam corrupti voluptatum laboriosam culpa, accusantium quia!",
};

const MyPageProfile = (): React.ReactElement => {
  const [isOpen, onOpen, onClose] = useModal();

  return (
    <Profile>
      <ProfileImage>
        <Img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      </ProfileImage>
      <ProfileInfo>
        <UserName>
          <Title size={14}>닉네임</Title>
          <EditProfile onClick={onOpen}>
            <PencilIcon size={13} />
          </EditProfile>
          {isOpen && <UserUpdate onClick={onClose} />}
        </UserName>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <IconBox>
          <Icons>
            <PencilIcon size={13} /> 10
            <HearctIcon size={13} /> 10
          </Icons>
        </IconBox>
      </ProfileInfo>
    </Profile>
  );
};

export default MyPageProfile;
