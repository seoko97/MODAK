import { IUser } from "../reducers/user";

export type EditUserData = Pick<IUser, "nickname" | "profileImg" | "intro">;
