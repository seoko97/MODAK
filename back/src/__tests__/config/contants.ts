import { ICampsiteDTO } from "@src/types/Campsite";
import { IReviewDTO } from "@src/types/Review";
import { IUserDTO } from "@src/types/User";

export const wrongUserConfig = {
  objectId: "620538a35bbad7f1347804ff" as string,
  token: "" as string,
};

export const wrongCampsiteConfig = {
  objectId: "07b0f615e62062139f60db09" as string,
  name: "" as string,
};

export const userInfo: IUserDTO = {
  email: "test@test.com",
  nickname: "test",
  profileImg: "test.jpg",
  source: "Google",
};

export const campInfo: Omit<ICampsiteDTO, "name"> = {
  address: "test",
  lineIntro: "test",
  intro: "test",
  x: 0,
  y: 0,
  tel: "test",
  reservationUrl: "test",
  animal: "test",
  category: ["test"],
  thema: ["test"],
  amenities: ["test"],
  rental: ["test"],
  environment: ["test"],
  firstImage: "test",
};

export const reviewInfo: Omit<IReviewDTO, "author" | "location"> = {
  content: "test",
  rating: "또 가고 싶어요",
  photos: ["test"],
  created: `${new Date()}`,
};
