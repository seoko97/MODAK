import mongoose from "mongoose";
import request from "supertest";
import app from "@src/app";
import { configs } from "@utils/constants";
import {
  campsiteConfig,
  wrongCampsiteConfig,
  userConfig,
  wrongUserConfig,
  anotherUserConfig,
} from "./test.config";

let testReviewObjectId = "";

beforeAll(async () => {
  await mongoose.connect(configs.DB_URL);
});

describe("리뷰 GET 테스트", () => {
  test("1. 리뷰 메인페이지를 확인하는 테스트입니다.", async () => {
    const res = await request(app).get("/api/review/main").send();

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("reviews");
    expect(res.text.length).toBeGreaterThan(1000);
  });

  test("2. 특정 사용자가 작성한 리뷰들을 받아오는 테스트", async () => {
    const res = await request(app).get(`/api/review/user/${userConfig.objectId}`).send();

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("reviews");
    if (res.text.length > 40) expect(res.text).toContain(userConfig.objectId);
  });

  test("3. 존재하지 않는 사용자가 작성한 리뷰들을 받아오는 테스트", async () => {
    const res = await request(app).get(`/api/review/user/${wrongUserConfig.objectId}`).send();

    expect(res.statusCode).toEqual(401);
    expect(res.text).toContain("존재하지 않는 사용자입니다.");
    expect(res.text.length).toBeLessThan(50);
  });

  test("4. 특정 캠핑장에 작성된 리뷰들을 받아오는 테스트", async () => {
    const res = await request(app).get(`/api/review/camp/${campsiteConfig.objectId}`).send();

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("reviews");
    if (res.text.length > 40) expect(res.text).toContain(campsiteConfig.name);
  });

  test("5. 존재하지 않는 캠핑장에 작성된 리뷰들을 받아오는 테스트", async () => {
    const res = await request(app).get(`/api/review/camp/${wrongCampsiteConfig.objectId}`).send();

    expect(res.statusCode).toEqual(401);
    expect(res.text).toContain("존재하지 않는 캠핑장입니다.");
    expect(res.text.length).toBeLessThan(50);
  });
});

describe("리뷰 POST 테스트", () => {
  test("1. 리뷰 작성 테스트", async () => {
    const res = await request(app)
      .post("/api/review/")
      .set("authorization", userConfig.token)
      .expect("Content-Type", /json/)
      .send({
        content: "test",
        location: campsiteConfig.objectId,
        rating: "평범해요",
        photos: [],
        author: userConfig.objectId,
      });

    testReviewObjectId = JSON.parse(res.text).review._id;

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain(campsiteConfig.name);
  });
});

describe("리뷰 PUT 테스트", () => {
  test("1. 리뷰 수정 테스트", async () => {
    const res = await request(app)
      .put(`/api/review/${testReviewObjectId}`)
      .set("authorization", userConfig.token)
      .send({
        content: "test - updated",
        location: campsiteConfig.objectId,
        rating: "별로에요",
        photos: [],
        id: testReviewObjectId,
      });

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("별로에요");
  });

  test("2. 비 로그인 시, 리뷰 수정 테스트", async () => {
    const res = await request(app)
      .delete(`/api/review/${testReviewObjectId}`)
      .set("authorization", wrongUserConfig.token)
      .send();

    expect(res.statusCode).toEqual(401);
    expect(res.text).toContain("로그인이 필요합니다.");
  });
});

describe("리뷰 PATCH 테스트", () => {
  test("1. 리뷰 좋아요 테스트", async () => {
    const res = await request(app)
      .patch(`/api/review/${testReviewObjectId}/like`)
      .set("authorization", anotherUserConfig.token)
      .send();

    expect(res.statusCode).toEqual(200);
  });

  test("2. 리뷰 좋아요 취소 테스트", async () => {
    const res = await request(app)
      .patch(`/api/review/${testReviewObjectId}/unlike`)
      .set("authorization", anotherUserConfig.token)
      .send();

    expect(res.statusCode).toEqual(200);
  });
});

describe("리뷰 DELETE 테스트", () => {
  test("1. 리뷰 삭제 테스트", async () => {
    const res = await request(app)
      .delete(`/api/review/${testReviewObjectId}`)
      .set("authorization", userConfig.token)
      .send();

    expect(res.statusCode).toEqual(200);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoose.disconnect();
});
