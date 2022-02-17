import { IReview } from "../reducers/review";

export interface UserReviewProps {
  userId: string;
  lastId?: string;
}

export interface CampReviewProps {
  campId: string;
  lastId?: string;
}

export type ReviewDTO = Pick<IReview, "content" | "location" | "rating" | "photos">;

export interface UpdateReviewData {
  id: string;
  body: ReviewDTO;
}
