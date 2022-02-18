import { ResponseDTO } from ".";
import { IReview } from "../reducers/review";

export interface UserReviewProps {
  userId: string;
  skip?: string;
}

export interface CampReviewProps {
  campId: string;
  rating?: string;
  skip?: string;
  target?: string;
}

export type ReviewDTO = Pick<IReview, "content" | "rating" | "photos"> & {
  location: string;
  created?: string;
};

export interface UpdateReviewData {
  id: string;
  body: ReviewDTO;
}

export interface ResRv extends ResponseDTO {
  review: IReview;
}

export interface ResRvs extends ResponseDTO {
  reviews: IReview[];
}

export interface ResRvLk extends ResponseDTO {
  userId: string;
  reviewId: string;
}
