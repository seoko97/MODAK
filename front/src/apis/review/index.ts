import axios from "axios";
import { ResImgs } from "@type/apis";
import {
  CampReviewProps,
  ResRv,
  ResRvLk,
  ResRvs,
  ReviewDTO,
  UpdateReviewData,
  UserReviewProps,
} from "@type/apis/review";
import { getCampQuery, KeyValueStr } from "../camp";

// 메인 리뷰
const getMainReview = async (): Promise<ResRvs> => {
  const result = await axios.get("review/main");
  const { data } = result;

  return data;
};

// 유저 페이지 리뷰
const getUserReviews = async ({ userId, skip }: UserReviewProps): Promise<ResRvs> => {
  const query = skip ? `?skip=${skip}` : "";
  const result = await axios.get(`review/user/${userId}${query}`);
  const { data } = result;

  return data;
};

// 이미지 업로드
const reviewImageUpload = async (body: FormData): Promise<ResImgs> => {
  const result = await axios.post("review/images", body);
  const { data } = result;

  return data;
};

// 캠핑장 페이지 리뷰
const getCampReviews = async ({ campId, ...params }: CampReviewProps): Promise<ResRvs> => {
  const query = `?${getCampQuery(params as KeyValueStr)}`;

  const result = await axios.get(`review/camp/${campId}${query}`);
  const { data } = result;

  return data;
};

// 리뷰 생성
const createReview = async (body: ReviewDTO): Promise<ResRv> => {
  const result = await axios.post("review", body);
  const { data } = result;

  return data;
};

// 리뷰 수정
const updateReivew = async ({ id, body }: UpdateReviewData): Promise<ResRv> => {
  const result = await axios.put(`review/${id}`, body);
  const { data } = result;

  return data;
};

// 리뷰 삭제
const deleteReivew = async (id: string): Promise<{ status: boolean; id: string }> => {
  const result = await axios.delete(`review/${id}`);
  const { data } = result;

  return data;
};

// 좋아요
const likeReview = async (id: string): Promise<ResRvLk> => {
  const result = await axios.patch(`review/${id}/like`);
  const { data } = result;

  return data;
};

// 좋아요 취소
const unLikeReview = async (id: string): Promise<ResRvLk> => {
  const result = await axios.patch(`review/${id}/unlike`);
  const { data } = result;

  return data;
};

export default {
  createReview,
  deleteReivew,
  getCampReviews,
  getMainReview,
  getUserReviews,
  likeReview,
  reviewImageUpload,
  unLikeReview,
  updateReivew,
};
