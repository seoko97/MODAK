import { reviewAPI } from "@apis/.";
import { createActionByProps, createAction } from "@lib/createActionHandler";

const getMainReviews = createAction("reviews/getMainReviews", reviewAPI.getMainReview);
const getUserReviews = createActionByProps("reviews/getUserReviews", reviewAPI.getUserReviews);
const getCampReviews = createActionByProps("reviews/getCampReviews", reviewAPI.getCampReviews);

export { getMainReviews, getUserReviews, getCampReviews };
