import mongoose from "mongoose";
import request from "supertest";
import app from "@src/app";
import { configs } from "@utils/constants";
import { user, wronguser, token, wrongtoken } from "./test.config";

beforeAll(async () => {
  await mongoose.connect(configs.DB_URL).then(() => console.log("데이터베이스 연결 성공"));
});

describe("유저페이지 GET 테스트", () => {
  test("1. 로그인된 상태로 유저페이지에 접근하는 경우", async () => {
    const res = await request(app).get("/api/user").set("authorization", token).send();

    expect(res.statusCode).toEqual(200);
  });

  test("2. 로그인하지 않은 상태로 유저페이지에 접근하는 경우", async () => {
    const res = await request(app).get("/api/user").set("authorization", wrongtoken).send();

    expect(res.statusCode).toEqual(401);
  });

  test("3. 특정한 유저 정보에 접근하는 경우", async () => {
    const res = await request(app)
      .get("/api/user/" + user)
      .send();

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain(user);
  });

  test("4. 존재하지 않는 유저 정보에 접근하는 경우", async () => {
    const res = await request(app)
      .get("/api/user/" + wronguser)
      .send();

    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("null");
  });
});
