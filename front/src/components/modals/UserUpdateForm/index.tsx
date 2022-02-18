import React, { useRef, useState, useCallback } from "react";
import ModalLayout from "@src/components/modals/ModalLayout";
import TrashCanIcon from "@src/components/icons/TrashCanIcon";
import ExitIcon from "@src/components/icons/ExitIcon";
import { useAppSelector } from "@src/store/configureStore";
import { EditUserData } from "@src/types/apis/user";
import { useDispatch } from "react-redux";
import { editUserInfo, uploadProfileImg } from "@src/reducers/user/action";
import { checkUrl } from "@src/lib/checkUrl";
import Style from "./style";

interface Props {
  onClick: () => void;
}

const UserUpdate = ({ onClick }: Props) => {
  const { me } = useAppSelector((state) => state.user);
  const { nickname, intro, profileImg } = me as EditUserData;
  const [name, setName] = useState(nickname);
  const [desc, setDesc] = useState(intro);
  const [img, setImg] = useState(profileImg);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const nameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const descHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  }, []);

  const pullImageHandler = useCallback(() => {
    imageRef.current?.click();
  }, [imageRef.current]);

  const imageHandler = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    const file = e.target.files[0];

    const data = new FormData();
    data.append("img", file);

    const res: any = await dispatch(uploadProfileImg(data));

    setImg(res.payload.image);
  }, []);

  const deleteImage = () => {
    setImg(
      "https://images.unsplash.com/photo-1594495894542-a46cc73e081a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    );
  };

  const handleSubmit = async () => {
    if (name === "") {
      alert("닉네임은 한 글자 이상 입력해주세요.");
      return;
    }
    await dispatch(editUserInfo({ nickname: name, profileImg: img, intro: desc }));
    onClick();
  };

  return (
    <ModalLayout onClick={onClick}>
      <Style.Container>
        <Style.ExitModal onClick={onClick}>
          <ExitIcon />
        </Style.ExitModal>
        <Style.Header>
          <Style.HeaderTitle>회원정보수정</Style.HeaderTitle>
        </Style.Header>
        <Style.EditContainer>
          <Style.EditTitle>프로필 이미지</Style.EditTitle>
          <Style.EditImage>
            <Style.ImageInput
              ref={imageRef}
              type="file"
              accept=".jpg .jpeg .png"
              name="file"
              onChange={imageHandler}
            />
            <Style.ImageContainer onClick={pullImageHandler}>
              <Style.ProfileImage src={checkUrl(img)} alt="profile__image"></Style.ProfileImage>
            </Style.ImageContainer>
            <Style.DeleteImage onClick={deleteImage}>
              <TrashCanIcon />
            </Style.DeleteImage>
          </Style.EditImage>
        </Style.EditContainer>
        <Style.EditContainer>
          <Style.EditTitle>닉네임</Style.EditTitle>
          <Style.InputName type="text" name="nickname" value={name} onChange={nameHandler} />
        </Style.EditContainer>
        <Style.EditContainer>
          <Style.EditTitle>소개</Style.EditTitle>
          <Style.InputText name="intro" value={desc} onChange={descHandler}></Style.InputText>
        </Style.EditContainer>
        <Style.EditContainer>
          <Style.ModifyButton onClick={handleSubmit}>회원 정보 수정</Style.ModifyButton>
        </Style.EditContainer>
      </Style.Container>
    </ModalLayout>
  );
};

export default UserUpdate;
