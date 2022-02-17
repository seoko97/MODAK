import { reviewAPI } from "@apis/.";
import { createActionByProps } from "@lib/createActionHandler";

const createReview = createActionByProps("review/create", reviewAPI.createReview);
const editReview = createActionByProps("review/edit", reviewAPI.updateReivew);
const deleteReview = createActionByProps("review/delete", reviewAPI.deleteReivew);
const likeReview = createActionByProps("review/like", reviewAPI.likeReview);
const unLikeReview = createActionByProps("review/unlike", reviewAPI.unLikeReview);
const uploadImage = createActionByProps("review/uploadImage", reviewAPI.reviewImageUpload);

export { createReview, editReview, deleteReview, likeReview, unLikeReview, uploadImage };
