import axios from "axios";
import { CampQueryData } from "@src/types/apis/camp";

interface KeyValueStr {
  [key: string]: string | string[];
}

export const getCampQuery = (data: KeyValueStr) => {
  const list = Object.keys(data);

  const arr = list.map((el) => {
    const e = data[el];
    if (typeof e === "string" || e instanceof String) return `${el}=${e}`;
    const a = (data[el] as string[]).map((k) => `${el}=${k}`);
    return a.join("&");
  });
  return arr.join("&");
};

// 캠핑장 목록
const getCamps = async ({ ...query }: CampQueryData) => {
  const queryStr = getCampQuery(query as KeyValueStr);
  const result = await axios.get(`camp?${queryStr}`);
  const { data } = result;

  return data;
};

// 메인 페이지 캠핑장 목록
const getMainCamps = async () => {
  const result = await axios.get("camp/main");
  const { data } = result;

  return data;
};

const getUserCamps = async (userId: string) => {
  const result = await axios.get(`camp/user/${userId}`);
  const { data } = result;

  return data;
};

// 캠핑장 상세 소개
const getCamp = async (campId: string) => {
  const result = await axios.get(`camp/${campId}`);
  const { data } = result;

  return data;
};

const bookmarkCamp = async (campId: string) => {
  const result = await axios.get(`camp/${campId}/bookmark`);
  const { data } = result;

  return data;
};

const unBookmarkCamp = async (campId: string) => {
  const result = await axios.get(`camp/${campId}/bookmark`);
  const { data } = result;

  return data;
};

export default { bookmarkCamp, getCamp, getCamps, getMainCamps, unBookmarkCamp, getUserCamps };
