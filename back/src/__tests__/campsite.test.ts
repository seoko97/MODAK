import mongoose from "mongoose";
import request from "supertest";
import app from "@src/app";
import { configs } from "@utils/constants";
import { campsiteConfig, wrongCampsiteConfig, userConfig, wrongUserConfig } from "./test.config";

beforeAll(async () => {
  await mongoose.connect(configs.DB_URL);
});

describe("캠핑장 GET 테스트", () => {
  test("1. 캠핑장 리스트를 받아오는 테스트 ", async () => {
    const res = await request(app).get("/api/camp").send();

    expect(res.statusCode).toEqual(200);
  });

  test("2. 캠핑장 메인페이지를 받아오는 테스트", async () => {
    const res = await request(app).get("/api/camp/main").send();

    expect(res.statusCode).toEqual(200);
  });

  test("3. 특정 캠핑장의 정보를 받아오는 테스트", async () => {
    const res = await request(app).get(`/api/camp/${campsiteConfig.objectId}`).send();

    expect(res.statusCode).toEqual(200);
  });

  test("4. DB에 저장되지 않은 캠핑장의 정보를 받아올 때를 확인하는 테스트", async () => {
    const res = await request(app).get(`/api/camp/${wrongCampsiteConfig.objectId}`).send();

    expect(res.statusCode).toEqual(401);
  });

  test("5. 이름 검색 테스트", async () => {
    const res = await request(app).get(`/api/camp/search/${campsiteConfig.searchKeyword}`).send();

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain(decodeURI(campsiteConfig.searchKeyword));
  });
});

describe("캠핑장 PATCH 테스트", () => {
  test("1. 비 로그인 상태로 북마크 테스트", async () => {
    const res = await request(app)
      .patch(`/api/camp/${campsiteConfig.objectId}/bookmark`)
      .set("authorization", wrongUserConfig.token)
      .send();

    expect(res.statusCode).toEqual(401);
  });

  test("2. 비 로그인 상태로 북마크 취소 테스트", async () => {
    const res = await request(app)
      .patch(`/api/camp/${campsiteConfig.objectId}/unBookmark`)
      .set("authorization", wrongUserConfig.token)
      .send();

    expect(res.statusCode).toEqual(401);
  });

  test("3. 로그인 상태로 북마크 테스트", async () => {
    const res = await request(app)
      .patch(`/api/camp/${campsiteConfig.objectId}/bookmark`)
      .set("authorization", userConfig.token)
      .send();

    expect(res.statusCode).toEqual(200);
  });

  test("4. 로그인 상태로 북마크 테스트", async () => {
    const res = await request(app)
      .patch(`/api/camp/${campsiteConfig.objectId}/unBookmark`)
      .set("authorization", userConfig.token)
      .send();

    expect(res.statusCode).toEqual(200);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoose.disconnect();
});
