import request from "supertest";
import app from "@src/app";
import { userService } from "@services/user.service";
import { authService } from "@services/auth.service";
import { IUserDocument } from "@type/User";
import { ICampsiteDocument } from "@type/Campsite";
import { campsiteService } from "@services/campsite.service";
import { decryptValue } from "@utils/crypto";
import { wrongCampsiteConfig, userInfo, campInfo } from "./config/contants";
import db from "./config/db";

let access_token: string;
let refresh_token: string;
let user: IUserDocument;

let camps: ICampsiteDocument[];

beforeAll(async () => await db.connect());
beforeEach(async () => {
  user = await userService.findOrCreate(userInfo);

  [access_token, refresh_token] = await authService.signin({ _id: user._id });

  camps = [];
  for (let i = 0; i < 10; i++) {
    const camp = await campsiteService.create({ name: `test${i}`, ...campInfo });
    camps.push(camp);
  }
});
afterEach(async () => await db.clear());
afterAll(async () => await db.close());

describe("캠핑장 GET 테스트", () => {
  test("1. 캠핑장 리스트를 받아오는 테스트 ", async () => {
    const res = await request(app).get("/api/camp").send();
    const data = JSON.parse(res.text);

    expect(data.status).toEqual(true);
    expect(data.camps.length).toEqual(10);
  });
  test("2. 캠핑장 메인페이지를 받아오는 테스트", async () => {
    const res = await request(app).get("/api/camp/main").send();
    const data = JSON.parse(res.text);

    expect(data.status).toEqual(true);
    expect(data.camps.length).toEqual(6);
  });
  test("3. 특정 캠핑장의 정보를 받아오는 테스트", async () => {
    const res = await request(app).get(`/api/camp/${camps[0]._id}`).send();
    const data = JSON.parse(res.text);

    expect(data.status).toEqual(true);
    expect(data.camp.name).toEqual(camps[0].name);
  });

  test("4. DB에 저장되지 않은 캠핑장의 정보를 받아올 때를 확인하는 테스트", async () => {
    const res = await request(app).get(`/api/camp/${wrongCampsiteConfig.objectId}`).send();
    const data = JSON.parse(res.text);

    expect(data.status).toEqual(false);
  });

  test("5. 이름 검색 테스트", async () => {
    const res = await request(app).get(`/api/camp/search/test`).send();
    const data = JSON.parse(res.text);

    expect(data.status).toEqual(true);
    expect(data.camps.length).toEqual(5);
  });
});

describe("캠핑장 PATCH 테스트", () => {
  test("1. 비 로그인 상태로 북마크 테스트", async () => {
    const res = await request(app)
      .patch(`/api/camp/${camps[0]._id}/bookmark`)
      .set("authorization", "")
      .send();
    const data = JSON.parse(res.text);

    expect(data.status).toEqual(false);
    expect(data.message).toEqual("로그인이 필요합니다.");
  });
  test("2. 비 로그인 상태로 북마크 취소 테스트", async () => {
    const res = await request(app)
      .patch(`/api/camp/${camps[0]._id}/unBookmark`)
      .set("authorization", "")
      .send();
    const data = JSON.parse(res.text);

    expect(data.status).toEqual(false);
    expect(data.message).toEqual("로그인이 필요합니다.");
  });

  test("3. 로그인 상태로 북마크 테스트", async () => {
    const res1 = await request(app)
      .patch(`/api/camp/${camps[0]._id}/bookmark`)
      .set("authorization", `Bearer ${decryptValue(access_token)}`)
      .send();
    const data1 = JSON.parse(res1.text);

    expect(data1.status).toEqual(true);
    expect(data1.userId).toEqual(String(user._id));
    expect(data1.campId).toEqual(String(camps[0]._id));

    const res2 = await request(app)
      .patch(`/api/camp/${camps[0]._id}/unBookmark`)
      .set("authorization", `Bearer ${decryptValue(access_token)}`)
      .send();
    const data2 = JSON.parse(res2.text);

    expect(data2.status).toEqual(true);
    expect(data2.userId).toEqual(String(user._id));
    expect(data2.campId).toEqual(String(camps[0]._id));
  });
});
