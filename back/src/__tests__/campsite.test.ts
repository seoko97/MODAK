import mongoose from "mongoose";
import request from "supertest";
import app from "@src/app";
import { configs } from "@utils/constants";
import { campsite, wrongcampsite, token, wrongtoken } from "./test.config";

beforeAll(async () => {
  await mongoose.connect(configs.DB_URL).then(() => console.log("데이터베이스 연결 성공"));
});

describe("캠핑장 GET 테스트", () => {
  test("1. 캠핑장의 정보를 받아오는 테스트 ", async () => {
    const res = await request(app).get("/api/camp").send();

    expect(res.statusCode).toEqual(200);
  });

  test("2. 캠핑장 메인페이지의 정보를 받아오는 테스트", async () => {
    const res = await request(app).get("/api/camp/main").send();

    expect(res.statusCode).toEqual(200);
  });

  test("3. 특정 캠핑장의 정보를 받아오는 테스트", async () => {
    const res = await request(app)
      .get("/api/camp/" + campsite)
      .send();

    expect(res.statusCode).toEqual(200);
  });

  test("4. DB에 저장되지 않은 캠핑장의 정보를 받아올 때를 확인하는 테스트", async () => {
    const res = await request(app)
      .get("/api/camp/" + wrongcampsite)
      .send();

    expect(res.statusCode).toEqual(401);
  });
});

describe("캠핑장 PATCH 테스트", () => {
  test("1. 비 로그인 상태로 북마크 테스트", async () => {
    const res = await request(app)
      .patch("/api/camp/" + campsite + "/bookmark")
      .set("authorization", wrongtoken)
      .send();

    expect(res.statusCode).toEqual(401);
  });

  test("2. 비 로그인 상태로 북마크 취소 테스트", async () => {
    const res = await request(app)
      .patch("/api/camp/" + campsite + "/unBookmark")
      .set("authorization", wrongtoken)
      .send();

    expect(res.statusCode).toEqual(401);
  });

  test("3. 로그인 상태로 북마크 테스트", async () => {
    const res = await request(app)
      .patch("/api/camp/" + campsite + "/bookmark")
      .set("authorization", token)
      .send();

    expect(res.statusCode).toEqual(200);
  });

  test("4. 로그인 상태로 북마크 테스트", async () => {
    const res = await request(app)
      .patch("/api/camp/" + campsite + "/unBookmark")
      .set("authorization", token)
      .send();

    expect(res.statusCode).toEqual(200);
  });
});
