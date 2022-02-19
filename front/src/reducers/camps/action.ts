import { campAPI } from "@apis/.";
import { createActionByProps, createAction } from "@lib/createActionHandler";

const getCamps = createActionByProps("camps/getCamp", campAPI.getCamps);
const getMainCamps = createAction("camps/getMainCamps", campAPI.getMainCamps);
const getUserCamps = createActionByProps("camps/getUserCamps", campAPI.getUserCamps);
const getCampsByKeyword = createActionByProps("camps/getCampsByKeyword", campAPI.search);

export { getCamps, getMainCamps, getUserCamps, getCampsByKeyword };
