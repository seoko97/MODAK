import HearctIcon from "@src/components/icons/HeartIcon";
import PencilIcon from "@src/components/icons/PencilIcon";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import Title from "../../atoms/Title";
import UserChange from "../../organisms/Userchange";

// --- 프로필 컨테이너 ---
const Profile = styled.figure`
  display: flex;
  gap: 30px;
  padding: 30px;
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

const MyPageProfile = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Profile>
      <ProfileImage>
        <Img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      </ProfileImage>
      <ProfileInfo>
        <UserName>
          <Title size={14}>닉네임</Title>
          <EditProfile onClick={openModal}>
            <PencilIcon size={13} />
          </EditProfile>
          {isOpen && <UserChange onClose={closeModal} />}
        </UserName>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus. Omnis rerum
          id totam aut laboriosam consequuntur cum, temporibus vero molestiae reiciendis quos quae
          doloribus et, commodi quasi esse est!
        </p>

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
