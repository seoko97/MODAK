import { ResImg, ResponseDTO } from "@type/apis";
import { EditUserData, ResUs } from "@type/apis/user";
import axios, { AxiosResponse } from "axios";

// 로그인 유저 정보
const getSinginUser = async (): Promise<AxiosResponse<ResUs>> => {
  const result = await axios.get("user");

  return result;
};

// 유저 정보
const getUserInfo = async (id: string): Promise<ResUs> => {
  const result = await axios.get(`user/${id}`);

  const { data } = result;

  return data;
};

// 로그인 유저 정보 수정
const editUserInfo = async (body: EditUserData): Promise<ResUs> => {
  const result = await axios.put("user", body);
  const { data } = result;

  return data;
};

// 로그아웃
const signout = async (): Promise<ResponseDTO> => {
  const result = await axios.post("auth/signout");
  const { data } = result;

  return data;
};

// 이미지 업로드
const patchProfileImage = async (body: FormData): Promise<ResImg> => {
  const result = await axios.post("user/image", body);
  const { data } = result;

  return data;
};

export default { editUserInfo, getSinginUser, getUserInfo, signout, patchProfileImage };
