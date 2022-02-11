import { verify } from "jsonwebtoken";
import { Schema } from "mongoose";
import { jwtContents } from "@utils/constants";
import { IUserDocument, IUserModel } from "~types/User";

export const UserSchema = new Schema<IUserDocument, IUserModel>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      enum: ["Google", "Kakao", "Facebook"],
      required: true,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    totalLike: {
      type: Number,
      default: 0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.methods.verifyRefresh = function () {
  if (!this.refreshToken) return false;
  const result = verify(this.refreshToken, jwtContents.secret);

  return Boolean(result);
};
