import React from "react";
import useModal from "@hooks/useModal";
import { useAppSelector } from "@store/configureStore";
import { IUser } from "@type/reducers/user";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import Style from "./styles";

const MyPageProfile = (): React.ReactElement => {
  const { userInfo } = useAppSelector((state) => state.user);
  const [isOpen, onOpen, onClose] = useModal();
  const { nickname, profileImg, intro, reviewCount, totalLike } = userInfo as IUser;

  return (
    <Style.Profile>
      <ProfileImage profileImg={profileImg} />
      <ProfileInfo
        nickname={nickname}
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        intro={intro}
        reviews={reviewCount}
        likes={totalLike}
      />
    </Style.Profile>
  );
};

export default MyPageProfile;
