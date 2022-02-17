import { userAPI } from "@apis/.";
import { createActionByProps, createAction } from "@lib/createActionHandler";

const signout = createAction("user/signout", userAPI.signout);
const getSigninUser = createAction("user/signinUser", userAPI.getSinginUser);
const getUserInfo = createActionByProps("user/pageUser", userAPI.getUserInfo);
const editUserInfo = createActionByProps("user/edit", userAPI.editUserInfo);
const uploadProfileImg = createActionByProps("user/uploadProfileImg", userAPI.patchProfileImage);

export { signout, getSigninUser, getUserInfo, editUserInfo, uploadProfileImg };
