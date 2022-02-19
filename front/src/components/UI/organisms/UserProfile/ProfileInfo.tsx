import HeartIcon from "@icons/HeartIcon";
import PencilIcon from "@icons/PencilIcon";
import UserUpdate from "@modals/UserUpdateForm";
import React from "react";
import Title from "@atoms/Title";
import Style from "./styles";

interface Props {
  nickname: string;
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
  intro: string;
  reviews: number;
  likes: number;
}

const ProfileInfo = ({ nickname, onOpen, isOpen, onClose, intro, likes, reviews }: Props) => (
  <Style.ProfileInfo>
    <Style.UserName>
      <Title size={18}>{nickname}</Title>
      <Style.EditProfile onClick={onOpen}>
        <PencilIcon size={13} />
      </Style.EditProfile>
      {isOpen && <UserUpdate onClick={onClose} />}
    </Style.UserName>
    <p>{intro}</p>
    <Style.IconBox>
      <Style.Icons>
        <PencilIcon size={13} /> {reviews}
      </Style.Icons>
      <Style.Icons>
        <HeartIcon size={13} /> {likes}
      </Style.Icons>
    </Style.IconBox>
  </Style.ProfileInfo>
);

export default ProfileInfo;
