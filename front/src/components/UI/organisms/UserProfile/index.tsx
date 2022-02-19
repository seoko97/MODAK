import React from "react";
import useModal from "@hooks/useModal";
import { useAppSelector } from "@store/configureStore";
import { EditUserData } from "@type/apis/user";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import Style from "./styles";

const MyPageProfile = (): React.ReactElement => {
  const { userInfo } = useAppSelector((state) => state.user);
  const [isOpen, onOpen, onClose] = useModal();
  const { nickname, profileImg, intro } = userInfo as EditUserData;

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
