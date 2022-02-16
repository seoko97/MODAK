import mongoose from "mongoose";
import request from "supertest";
import app from "@src/app";
import { configs } from "@utils/constants";
import { user } from "./test.config";

describe("GET /", () => {
  beforeAll(async () => {
    await mongoose.connect(configs.DB_URL).then(() => console.log("데이터베이스 연결 성공"));
  });

  test("1. 메인페이지 응답", async () => {
    const res = await request(app).get("/").send();

    expect(res.statusCode).toEqual(200);
  });

  test("2. 유저 정보 조회", async () => {
    const res = await request(app)
      .get("/api/user/" + user)
      .send();

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain(user);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    await mongoose.disconnect();
  });
});
