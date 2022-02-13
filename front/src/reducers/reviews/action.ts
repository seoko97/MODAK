import { reviewAPI } from "@src/apis";
import { createActionByProps, createAction } from "@src/lib/createActionHandler";

const getMainReviews = createAction("reviews/getMainReviews", reviewAPI.getMainReview);
const getUserReviews = createActionByProps("reviews/getUserReviews", reviewAPI.getUserReviews);
const getCampReviews = createActionByProps("reviews/getCampReviews", reviewAPI.getCampReviews);

export { getMainReviews, getUserReviews, getCampReviews };
