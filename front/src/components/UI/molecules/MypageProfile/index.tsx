import React from "react";
import useModal from "@src/hooks/useModal";
import { useAppSelector } from "@src/store/configureStore";
import { EditUserData } from "@src/types/apis/user";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import Style from "./styles";

const MyPageProfile = (): React.ReactElement => {
  const { me } = useAppSelector((state) => state.user);
  const [isOpen, onOpen, onClose] = useModal();
  const { nickname, profileImg, intro } = me as EditUserData;

  return (
    <Style.Profile>
      <ProfileImage profileImg={profileImg} />
      <ProfileInfo
        nickname={nickname}
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        intro={intro}
      />
    </Style.Profile>
  );
};

export default MyPageProfile;
