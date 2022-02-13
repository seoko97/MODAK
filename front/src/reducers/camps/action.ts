import { campAPI } from "@src/apis";
import { createActionByProps, createAction } from "@src/lib/createActionHandler";

const getCamps = createActionByProps("camps/getCamp", campAPI.getCamps);
const getMainCamps = createAction("camps/getMainCamps", campAPI.getMainCamps);
const getUserCamps = createActionByProps("camps/getUserCamps", campAPI.getUserCamps);

export { getCamps, getMainCamps, getUserCamps };
