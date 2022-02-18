import React from "react";
import useModal from "@src/hooks/useModal";
import { useAppSelector } from "@src/store/configureStore";
import { EditUserData } from "@src/types/apis/user";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import Style from "./styles";

const MyPageProfile = (): React.ReactElement => {
  const { me, userInfo } = useAppSelector((state) => state.user);
  const [isOpen, onOpen, onClose] = useModal();
  const { nickname, profileImg, intro } = me as EditUserData;
  const displayEdit = me?._id === userInfo?._id;

  return (
    <Style.Profile>
      <ProfileImage profileImg={profileImg} />
      <ProfileInfo
        displayEditButton={displayEdit}
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
