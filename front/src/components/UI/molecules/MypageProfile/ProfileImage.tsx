import React from "react";
import Style from "./styles";

interface Props {
  profileImg: string;
}
const ProfileImage = ({ profileImg }: Props) => (
  <Style.ProfileImage>
    <Style.Img src={profileImg} />
  </Style.ProfileImage>
);
export default ProfileImage;
