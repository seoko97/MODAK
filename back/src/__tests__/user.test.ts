import request from "supertest";
import app from "@src/app";
import { decryptValue } from "@utils/crypto";
import { userInfo, wrongUserConfig } from "./config/contants";
import { userService } from "@services/user.service";
import { authService } from "@services/auth.service";

import db from "./config/db";
import { IUserDocument } from "@src/types/User";

let access_token: string;
let refresh_token: string;
let user: IUserDocument;

beforeAll(async () => await db.connect());
afterEach(async () => await db.clear());
beforeEach(async () => {
  user = await userService.findOrCreate(userInfo);

  [access_token, refresh_token] = await authService.signin({ _id: user._id });
});
afterAll(async () => await db.close());

describe("유저페이지 GET 테스트", () => {
  test("1. 로그인된 상태로 유저페이지에 접근하는 경우", async () => {
    const res = await request(app)
      .get("/api/user")
      .set("authorization", `Bearer ${decryptValue(access_token)}`)
      .send();

    expect(res.statusCode).toEqual(200);
  });

  test("2. 로그인하지 않은 상태로 유저페이지에 접근하는 경우", async () => {
    const res = await request(app).get("/api/user").set("authorization", "").send();

    expect(res.statusCode).toEqual(401);
  });

  test("3. 특정한 유저 정보에 접근하는 경우", async () => {
    const res = await request(app).get(`/api/user/${user._id}`).send();

    expect(res.statusCode).toEqual(200);
    expect(JSON.parse(res.text).user._id).toContain(String(user._id));
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
      .put("/api/user/")
      .set("authorization", `Bearer ${decryptValue(access_token)}`)
      .send({
        _id: user._id,
        nickname: "이름 수정 테스트2",
        intro: "한줄소개 수정 테스트2",
      });
    expect(res.statusCode).toEqual(201);
    expect(JSON.parse(res.text).user.nickname).toEqual("이름 수정 테스트2");
  });
});
