import {
  CampReviewProps,
  ReviewDTO,
  UpdateReviewData,
  UserReviewProps,
} from "@src/types/apis/review";
import axios from "axios";

// 메인 리뷰
const getMainReview = async () => {
  const result = await axios.get("review/main");
  const { data } = result;

  return data;
};

// 유저 페이지 리뷰
const getUserReviews = async ({ userId, lastId }: UserReviewProps) => {
  const query = lastId ? `?lastId=${lastId}` : "";
  const result = await axios.get(`review/user/${userId}${query}`);
  const { data } = result;

  return data;
};

// 이미지 업로드
const reviewImageUpload = async (body: FormData[]) => {
  const result = await axios.post("review/images", body);
  const { data } = result;

  return data;
};

// 캠핑장 페이지 리뷰
const getCampReviews = async ({ campId, lastId }: CampReviewProps) => {
  const result = await axios.get(`review/camp/${campId}?lastId=${lastId}`);
  const { data } = result;

  return data;
};

// 리뷰 생성
const createReivew = async (body: ReviewDTO) => {
  const result = await axios.post("review", body);
  const { data } = result;

  return data;
};

// 리뷰 수정
const updateReivew = async ({ id, body }: UpdateReviewData) => {
  const result = await axios.put(`review/${id}`, body);
  const { data } = result;

  return data;
};

// 리뷰 삭제
const deleteReivew = async (id: string) => {
  const result = await axios.put(`review/${id}`);
  const { data } = result;

  return data;
};

// 좋아요
const likeReview = async (id: string) => {
  const result = await axios.put(`review/${id}/like`);
  const { data } = result;

  return data;
};

// 좋아요 취소
const unLikeReview = async (id: string) => {
  const result = await axios.put(`review/${id}/unlike`);
  const { data } = result;

  return data;
};

export default {
  createReivew,
  deleteReivew,
  getCampReviews,
  getMainReview,
  getUserReviews,
  likeReview,
  reviewImageUpload,
  unLikeReview,
  updateReivew,
};
