import { campAPI } from "@src/apis";
import { createActionByProps, createAction } from "@src/lib/createActionHandler";

const getCamps = createActionByProps("camps/getCamp", campAPI.getCamps);
const getMainCamps = createAction("camps/getMainCamps", campAPI.getMainCamps);
const getUserCamps = createActionByProps("camps/getUserCamps", campAPI.getUserCamps);
const getCampsByKeyword = createActionByProps("camps/getCampsByKeyword", campAPI.search);

export { getCamps, getMainCamps, getUserCamps, getCampsByKeyword };
