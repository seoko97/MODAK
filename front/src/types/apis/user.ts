import { ResponseDTO } from ".";
import { IUser } from "../reducers/user";

export type EditUserData = Pick<IUser, "nickname" | "profileImg" | "intro">;

export interface ResUs extends ResponseDTO {
  user: IUser;
}
