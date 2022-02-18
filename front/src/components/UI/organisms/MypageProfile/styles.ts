import styled, { css } from "styled-components";

// --- 프로필 컨테이너 ---
const Profile = styled.figure`
  display: flex;
  gap: 30px;
  position: relative;
  margin-bottom: 10px;
  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    flex-direction: column;
    align-items: center;
  }
`;

// --- 프로필 이미지 ---
const ImageBoxStyle = css`
  width: 130px;
  height: 130px;
  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    width: 120px;
    height: 120px;
  }
`;

const ProfileImage = styled.div`
  ${ImageBoxStyle}
`;

const Img = styled.img`
  ${ImageBoxStyle}
  border-radius: 50%;
`;

// --- 프로필 정보 ---
const ProfileInfo = styled.figcaption`
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
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
`;

const EditProfile = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export default {
  EditProfile,
  IconBox,
  Icons,
  ImageBoxStyle,
  Img,
  Profile,
  ProfileImage,
  ProfileInfo,
  UserName,
};
