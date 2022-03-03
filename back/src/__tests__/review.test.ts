import request from "supertest";
import app from "@src/app";
import { IUserDocument } from "@type/User";
import { userService } from "@services/user.service";
import { authService } from "@services/auth.service";
import { ICampsiteDocument } from "@type/Campsite";
import { IReviewDocument } from "@type/Review";
import { campsiteService } from "@services/campsite.service";
import { reviewService } from "@services/review.service";
import { decryptValue } from "@utils/crypto";
import { wrongUserConfig, reviewInfo, campInfo, wrongCampsiteConfig } from "./config/contants";
import db from "./config/db";

let access_token: string;
let refresh_token: string;
let user: IUserDocument;

let camp: ICampsiteDocument;

let reviews: IReviewDocument[];

beforeAll(async () => await db.connect());
afterEach(async () => await db.clear());
beforeEach(async () => {
  user = await userService.findOrCreate({
    email: "test@test.com",
    nickname: "test",
    profileImg: "test.jpg",
    source: "Google",
  });

  [access_token, refresh_token] = await authService.signin({ _id: user._id });

  camp = await campsiteService.create({ name: "test", ...campInfo });
  reviews = [];
  for (let i = 0; i < 10; i++) {
    const review = await reviewService.create({
      author: user._id,
      location: camp._id,
      ...reviewInfo,
    });
    reviews.push(review);
  }
});
afterAll(async () => await db.close());

describe("리뷰 GET 테스트", () => {
  test("1. 리뷰 메인페이지를 확인하는 테스트입니다.", async () => {
    const res = await request(app).get("/api/review/main").send();
    const data = JSON.parse(res.text);

    expect(data.status).toEqual(true);
    expect(data.reviews.length).toEqual(6);
  });
  test("2. 특정 사용자가 작성한 리뷰들을 받아오는 테스트", async () => {
    const res = await request(app).get(`/api/review/user/${user._id}`).send();
    const data = JSON.parse(res.text);

    expect(data.status).toEqual(true);
    for (let i = 0; i < data.reviews.length; i++)
      expect(data.reviews[i].author._id).toEqual(String(user._id));
  });
  test("3. 존재하지 않는 사용자가 작성한 리뷰들을 받아오는 테스트", async () => {
    const res = await request(app).get(`/api/review/user/${wrongUserConfig.objectId}`).send();
    const data = JSON.parse(res.text);

    expect(data.status).toEqual(false);
    expect(data.message).toContain("존재하지 않는 사용자입니다.");
  });
  test("4. 특정 캠핑장에 작성된 리뷰들을 받아오는 테스트", async () => {
    const res = await request(app).get(`/api/review/camp/${camp._id}`).send();

    const data = JSON.parse(res.text);

    expect(data.status).toEqual(true);
    for (let i = 0; i < data.reviews.length; i++)
      expect(data.reviews[i].location._id).toEqual(String(camp._id));
  });
  test("5. 존재하지 않는 캠핑장에 작성된 리뷰들을 받아오는 테스트", async () => {
    const res = await request(app).get(`/api/review/camp/${wrongCampsiteConfig.objectId}`).send();

    const data = JSON.parse(res.text);

    expect(data.status).toEqual(false);
    expect(data.message).toContain("존재하지 않는 캠핑장입니다.");
  });
});
describe("리뷰 POST 테스트", () => {
  test("1. 리뷰 작성 테스트", async () => {
    const res = await request(app)
      .post("/api/review/")
      .expect("Content-Type", /json/)
      .set("authorization", `Bearer ${decryptValue(access_token)}`)
      .send({
        author: user._id,
        location: camp._id,
        ...reviewInfo,
      });

    const data = JSON.parse(res.text);
    expect(data.status).toEqual(true);
    expect(data.review.content).toEqual(reviewInfo.content);
  });
});
describe("리뷰 PUT 테스트", () => {
  test("1. 리뷰 수정 테스트", async () => {
    const res = await request(app)
      .put(`/api/review/${reviews[0]._id}`)
      .set("authorization", `Bearer ${decryptValue(access_token)}`)
      .send({
        content: "test - updated",
        location: camp._id,
        rating: "별로에요",
        photos: [],
      });
    const data = JSON.parse(res.text);

    expect(data.status).toEqual(true);
    expect(data.review.content).toContain("test - updated");
  });

  test("2. 비 로그인 시, 리뷰 수정 테스트", async () => {
    const res = await request(app)
      .delete(`/api/review/${reviews[0]._id}`)
      .set("authorization", "")
      .send();
    const data = JSON.parse(res.text);

    expect(data.status).toEqual(false);
    expect(data.message).toContain("로그인이 필요합니다.");
  });
});
describe("리뷰 PATCH 테스트", () => {
  test("1. 리뷰 좋아요 테스트", async () => {
    const resByLike = await request(app)
      .patch(`/api/review/${reviews[0]._id}/like`)
      .set("authorization", `Bearer ${decryptValue(access_token)}`)
      .send();
    const dataByLike = JSON.parse(resByLike.text);

    expect(dataByLike.status).toEqual(true);
    expect(dataByLike.userId).toEqual(String(user._id));
    expect(dataByLike.reviewId).toEqual(String(reviews[0]._id));

    const resByUnLike = await request(app)
      .patch(`/api/review/${reviews[0]._id}/unlike`)
      .set("authorization", `Bearer ${decryptValue(access_token)}`)
      .send();

    const dataByUnLike = JSON.parse(resByUnLike.text);
    expect(dataByUnLike.status).toEqual(true);
    expect(dataByUnLike.userId).toEqual(String(user._id));
    expect(dataByUnLike.reviewId).toEqual(String(reviews[0]._id));
  });
});

describe("리뷰 DELETE 테스트", () => {
  test("1. 리뷰 삭제 테스트", async () => {
    const res = await request(app)
      .delete(`/api/review/${reviews[0]._id}`)
      .set("authorization", `Bearer ${decryptValue(access_token)}`)
      .send();

    const data = JSON.parse(res.text);
    expect(data.status).toEqual(true);
    expect(data.id).toEqual(String(reviews[0]._id));
  });
});
