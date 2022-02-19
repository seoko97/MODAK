import { IReviewDocument, IReviewModel } from "@src/types/Review";
import { Schema } from "mongoose";

export const ReviewSchema = new Schema<IReviewDocument, IReviewModel>(
  {
    content: {
      type: String,
      required: true,
    },
    photos: [
      {
        type: String,
      },
    ],
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: "Campsite",
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    rating: {
      type: String,
      enum: ["또 가고 싶어요", "평범해요", "별로에요"],
    },
    count: {
      type: Number,
      default: 0,
      index: true,
    },
    created: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
