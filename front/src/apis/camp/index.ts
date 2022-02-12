import axios from "axios";

// 캠핑장 목록
// 선택한 조건에 따른 쿼리문 생성해야함
const getCamps = async (lastId: string) => {
  const result = await axios.get(`camp?lastId=${lastId}`);
  const { data } = result;

  return data;
};

// 메인 페이지 캠핑장 목록
const getMainCamps = async () => {
  const result = await axios.get("camp/main");
  const { data } = result;

  return data;
};

// 메인 페이지 캠핑장 목록
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

export default { bookmarkCamp, getCamp, getCamps, getMainCamps, unBookmarkCamp };
