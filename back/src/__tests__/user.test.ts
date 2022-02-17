import mongoose from "mongoose";
import request from "supertest";
import app from "@src/app";
import { configs } from "@utils/constants";
import { userConfig, anotherUserConfig, wrongUserConfig } from "./test.config";

beforeAll(async () => {
  await mongoose.connect(configs.DB_URL);
});

describe("유저페이지 GET 테스트", () => {
  test("1. 로그인된 상태로 유저페이지에 접근하는 경우", async () => {
    const res = await request(app).get("/api/user").set("authorization", userConfig.token).send();

    expect(res.statusCode).toEqual(200);
  });

  test("2. 로그인하지 않은 상태로 유저페이지에 접근하는 경우", async () => {
    const res = await request(app)
      .get("/api/user")
      .set("authorization", wrongUserConfig.token)
      .send();

    expect(res.statusCode).toEqual(401);
  });

  test("3. 특정한 유저 정보에 접근하는 경우", async () => {
    const res = await request(app).get(`/api/user/${userConfig.objectId}`).send();

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain(userConfig.objectId);
  });

  test("4. 존재하지 않는 유저 정보에 접근하는 경우", async () => {
    const res = await request(app).get(`/api/user/${wrongUserConfig.objectId}`).send();

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("null");
  });
});

describe("유저페이지 PUT 테스트", () => {
  test("1. 로그인된 상태로 유저 정보를 수정하는 경우", async () => {
    const res = await request(app)
      .put(`/api/user/${userConfig.objectId}`)
      .set("authorization", userConfig.token)
      .send({
        nickname: "이름 수정 테스트",
        intro: "한줄소개 수정 테스트",
      });

    expect(res.statusCode).toEqual(201);
  });

  test("2. 로그인된 상태로 타 유저 정보를 수정하는 경우", async () => {
    const res = await request(app)
      .put(`/api/user/${anotherUserConfig.objectId}`)
      .set("authorization", userConfig.token)
      .send({
        nickname: "이름 수정됨",
        intro: "한줄소개 수정됨",
      });

    expect(res.statusCode).toEqual(401);
    expect(res.text).toContain("내 정보만 수정할 수 있습니다.");
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoose.disconnect();
});
