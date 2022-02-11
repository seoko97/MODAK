import { Types } from "mongoose";

const { isValid } = Types.ObjectId;

export const checkValid = (id: string) => isValid(id);
