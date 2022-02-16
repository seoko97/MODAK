import mongoose from "mongoose";
import request from "supertest";
import app from "@src/app";
import { configs } from "@utils/constants";
import {
  campsite,
  wrongcampsite,
  campsiteName,
  user,
  wronguser,
  token,
  wrongtoken,
  tokenB,
} from "./test.config";

let testReviewObjectId = "";

beforeAll(async () => {
  await mongoose.connect(configs.DB_URL).then(() => console.log("데이터베이스 연결 성공"));
});

describe("리뷰 GET 테스트", () => {
  test("1. 리뷰 메인페이지를 확인하는 테스트입니다.", async () => {
    const res = await request(app).get("/api/review/main").send();

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("reviews");
    expect(res.text.length).toBeGreaterThan(1000);
  });

  test("2. 특정 사용자가 작성한 리뷰들을 받아오는 테스트", async () => {
    const res = await request(app)
      .get("/api/review/user/" + user)
      .send();

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("reviews");
    if (res.text.length > 40) expect(res.text).toContain(`"author":"${user}"`);
  });

  test("3. 존재하지 않는 사용자가 작성한 리뷰들을 받아오는 테스트", async () => {
    const res = await request(app)
      .get("/api/review/user/" + wronguser)
      .send();

    expect(res.statusCode).toEqual(401);
    expect(res.text).toContain("존재하지 않는 사용자입니다.");
    expect(res.text.length).toBeLessThan(50);
  });

  test("4. 특정 캠핑장에 작성된 리뷰들을 받아오는 테스트", async () => {
    const res = await request(app)
      .get("/api/review/camp/" + campsite)
      .send();

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("reviews");
    if (res.text.length > 40) expect(res.text).toContain(campsiteName);
  });

  test("5. 존재하지 않는 캠핑장에 작성된 리뷰들을 받아오는 테스트", async () => {
    const res = await request(app)
      .get("/api/review/camp/" + wrongcampsite)
      .send();

    expect(res.statusCode).toEqual(401);
    expect(res.text).toContain("존재하지 않는 캠핑장입니다.");
    expect(res.text.length).toBeLessThan(50);
  });
});

describe("리뷰 POST 테스트", () => {
  test("1. 리뷰 작성 테스트", async () => {
    const res = await request(app)
      .post("/api/review/")
      .set("authorization", token)
      .expect("Content-Type", /json/)
      .send({
        content: "test",
        location: campsite,
        rating: "평범해요",
        photos: [],
        author: user,
      });

    testReviewObjectId = res.text.slice(
      res.text.indexOf(`,"_id":"`) + 8,
      res.text.indexOf(`,"_id":"`) + 32,
    );
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain(campsiteName);
  });
});

describe("리뷰 PUT 테스트", () => {
  test("1. 리뷰 수정 테스트", async () => {
    const res = await request(app)
      .put("/api/review/" + testReviewObjectId)
      .set("authorization", token)
      .send({
        content: "test - updated",
        location: campsite,
        rating: "별로에요",
        photos: [],
        id: testReviewObjectId,
      });

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("별로에요");
  });

  test("2. 비 로그인 시, 리뷰 수정 테스트", async () => {
    const res = await request(app)
      .delete("/api/review/" + testReviewObjectId)
      .set("authorization", wrongtoken)
      .send();

    expect(res.statusCode).toEqual(401);
    expect(res.text).toContain("로그인이 필요합니다.");
  });
});

describe("리뷰 PATCH 테스트", () => {
  test("1. 리뷰 좋아요 테스트", async () => {
    const res = await request(app)
      .patch("/api/review/" + testReviewObjectId + "/like")
      .set("authorization", tokenB)
      .send();

    console.log(res.text);
    expect(res.statusCode).toEqual(200);
  });

  test("2. 리뷰 좋아요 취소 테스트", async () => {
    const res = await request(app)
      .patch("/api/review/" + testReviewObjectId + "/unlike")
      .set("authorization", tokenB)
      .send();

    console.log(res.text);
    expect(res.statusCode).toEqual(200);
  });
});

describe("리뷰 DELETE 테스트", () => {
  test("1. 리뷰 삭제 테스트", async () => {
    const res = await request(app)
      .delete("/api/review/" + testReviewObjectId)
      .set("authorization", token)
      .send();

    expect(res.statusCode).toEqual(200);
  });
});
