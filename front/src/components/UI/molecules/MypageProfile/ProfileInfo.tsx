import HeartIcon from "@src/components/icons/HeartIcon";
import PencilIcon from "@src/components/icons/PencilIcon";
import UserUpdate from "@src/components/modals/UserUpdateForm";
import React from "react";
import Title from "../../atoms/Title";
import Style from "./styles";

interface Props {
  nickname: string;
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
  intro: string;
}

const IconComponent = () => (
  <Style.IconBox>
    <Style.Icons>
      <PencilIcon size={13} /> 10
    </Style.Icons>
    <Style.Icons>
      <HeartIcon size={13} /> 10
    </Style.Icons>
  </Style.IconBox>
);

const ProfileInfo = ({ nickname, onOpen, isOpen, onClose, intro }: Props) => (
  <Style.ProfileInfo>
    <Style.UserName>
      <Title size={14}>{nickname}</Title>
      <Style.EditProfile onClick={onOpen}>
        <PencilIcon size={13} />
      </Style.EditProfile>
      {isOpen && <UserUpdate onClick={onClose} />}
    </Style.UserName>
    <p>{intro}</p>
    <IconComponent />
  </Style.ProfileInfo>
);

export default ProfileInfo;
