import { reviewAPI } from "@src/apis";
import { createActionByProps } from "@src/lib/createActionHandler";

const createReview = createActionByProps("review/create", reviewAPI.createReivew);
const editReview = createActionByProps("review/edit", reviewAPI.updateReivew);
const deleteReview = createActionByProps("review/delete", reviewAPI.deleteReivew);
const likeReview = createActionByProps("review/like", reviewAPI.likeReview);
const unLikeReview = createActionByProps("review/unlike", reviewAPI.unLikeReview);

export { createReview, editReview, deleteReview, likeReview, unLikeReview };
