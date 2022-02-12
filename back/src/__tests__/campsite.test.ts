import app from "@src/app";
import { configs } from "@utils/constants";
import mongoose from "mongoose";
import request from "supertest";

describe("campsite test", () => {
  beforeAll(async () => {
    await mongoose.connect(configs.DB_URL).then(() => console.log("데이터베이스 연결 성공"));
  });

  // 올바른 Campsite ObjectId
  const campsite = "62062139f6007b0f615edb09";
  // 올바르지 않은 Campsite ObjectId
  const campsiteError = "07b0f615e62062139f60db09";

  //모든 캠핑장의 정보를 받아오는지 확인
  test("/api/camp", async () => {
    console.log("모든 캠핑장의 정보를 받아오는지 확인하는 테스트입니다.");
    const res = await request(app).get("/api/camp").send();
    expect(res.statusCode).toEqual(200);
  });

  // 메인 캠핑장의 정보를 받아오는지 확인
  test("/api/camp", async () => {
    console.log("메인 캠핑장의 정보를 받아오는지 확인하는 테스트입니다.");
    const res = await request(app).get("/api/camp/main").send();
    expect(res.statusCode).toEqual(200);
  });

  // 특정 캠핑장의 정보를 받아오는지 확인
  test("/api/camp/:id Success", async () => {
    console.log("특정 캠핑장의 정보를 받아오는지 확인하는 테스트입니다.");
    const res = await request(app)
      .get("/api/camp/" + campsite)
      .send();

    expect(res.statusCode).toEqual(200);
  });

  // DB에 저장되지 않은 캠핑장의 정보를 받아올 때 오류가 발생하는지 확인
  test("/api/camp/:id Failure", async () => {
    console.log(
      "DB에 저장되지 않은 캠핑장의 정보를 받아올 때 오류가 발생하는지 확인하는 테스트입니다.",
    );
    const res = await request(app)
      .get("/api/camp/" + campsiteError)
      .send();

    expect(res.statusCode).toEqual(401);
  });

  // 비 로그인 시, 특정 캠핑장을 북마크했을 때의 반응 테스트
  test("/api/camp/:id/bookmark Failure", async () => {
    console.log("비 로그인 시, 특정 캠핑장을 북마크했을 때를 확인하는 테스트입니다.");
    const wrongtoken = "wrongtoken";
    const res = await request(app)
      .patch("/api/camp/" + campsite + "/bookmark")
      .set("authorization", wrongtoken)
      .send();
    expect(res.statusCode).toEqual(401);
  });

  // 비 로그인 시, 특정 캠핑장의 북마크를 취소했을 때의 반응 테스트
  test("/api/camp/:id/unBookmark Failure", async () => {
    console.log("비 로그인 시, 특정 캠핑장의 북마크를 취소했을 때를 확인하는 테스트입니다.");
    const wrongtoken = "wrongtoken";
    const res = await request(app)
      .patch("/api/camp/" + campsite + "/unBookmark")
      .set("authorization", wrongtoken)
      .send();
    expect(res.statusCode).toEqual(401);
  });

  // 로그인 시, 특정 캠핑장을 북마크했을 때의 반응 테스트
  test("/api/camp/:id/bookmark Success", async () => {
    console.log("로그인 시, 특정 캠핑장을 북마크했을 때를 확인하는 테스트입니다.");
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA3NDcwOGQ5MWMwY2RhNzFmN2I0NjkiLCJpYXQiOjE2NDQ2NDQxMDQsImV4cCI6MTY0NTg1MzcwNH0.KFDmXW1ximfFWefaG0X9oxG14_T1COLGpA_q9o_-Kn4";
    const res = await request(app)
      .patch("/api/camp/" + campsite + "/bookmark")
      .set("authorization", token)
      .send();
    expect(res.statusCode).toEqual(200);
  });

  // 로그인 시, 특정 캠핑장의 북마크를 취소했을 때의 반응 테스트
  test("/api/camp/:id/unBookmark Success", async () => {
    console.log("로그인 시, 특정 캠핑장의 북마크를 취소했을 때를 확인하는 테스트입니다.");
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA3NDcwOGQ5MWMwY2RhNzFmN2I0NjkiLCJpYXQiOjE2NDQ2NDQxMDQsImV4cCI6MTY0NTg1MzcwNH0.KFDmXW1ximfFWefaG0X9oxG14_T1COLGpA_q9o_-Kn4";
    const res = await request(app)
      .patch("/api/camp/" + campsite + "/unBookmark")
      .set("authorization", token)
      .send();
    console.log(res.text);
    expect(res.statusCode).toEqual(200);
  });
});
