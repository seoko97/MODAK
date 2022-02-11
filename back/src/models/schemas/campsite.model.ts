import { ICampsiteDocument, ICampsiteDTO, ICampsiteModel } from "@src/types/Campsite";
import { Schema } from "mongoose";

export const CampsiteSchema = new Schema<ICampsiteDocument, ICampsiteModel>(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    lineIntro: {
      type: String,
      default: "",
    },
    intro: {
      type: String,
      default: "",
    },

    x: {
      type: Number,
    },
    y: {
      type: Number,
    },
    tel: {
      type: String,
      default: "000-0000-0000",
    },
    reservationUrl: {
      type: String,
      default: "https://www.gocamping.or.kr/",
    },
    animal: {
      type: String,
      default: "불가능",
    },
    category: [{ type: String }],
    thema: [{ type: String }],
    amenities: [{ type: String }],
    rental: [{ type: String }],
    environment: [{ type: String }],
    photos: [{ type: String }],
    bookmark: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    totalBookmark: {
      type: Number,
      defalut: 0,
      index: true,
    },
    totalReview: {
      type: Number,
      defalut: 0,
      index: true,
    },
    views: {
      type: Number,
      default: 0,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

CampsiteSchema.statics.findOrCreate = async function (campsite: ICampsiteDTO) {
  const result = await this.findOne({ name: campsite.name });

  if (result) return result;

  return this.create(campsite);
};
