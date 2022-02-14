import app from "@src/app";
import { configs } from "@utils/constants";
import mongoose from "mongoose";
import request from "supertest";
import { ReviewModel } from "@src/models";

describe("review test", () => {
  beforeAll(async () => {
    await mongoose.connect(configs.DB_URL).then(() => console.log("데이터베이스 연결 성공"));
  });

  // afterAll(async () => {
  //   await ReviewModel.findOneAndDelete({});
  // });

  // 올바른 Campsite ObjectId
  const campsite = "62062139f6007b0f615edb09";
  // 올바르지 않은 Campsite ObjectId
  const wrongcampsite = "07b0f615e62062139f60db09";
  // 올바른 User ObjectId
  const user = "6205bad7f13438a35b7804ff";
  // 올바르지 않은 Campsite ObjectId
  const wronguser = "620538a35bbad7f1347804ff";
  // 올바른 token
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA3NDcwOGQ5MWMwY2RhNzFmN2I0NjkiLCJpYXQiOjE2NDQ2NDQxMDQsImV4cCI6MTY0NTg1MzcwNH0.KFDmXW1ximfFWefaG0X9oxG14_T1COLGpA_q9o_-Kn4";
  // 올바르지 않은 token
  const wrongtoken = "wrongtoken";

  //모든 캠핑장의 정보를 받아오는지 확인
  test("/api/review/main", async () => {
    console.log("1. 리뷰 메인페이지를 확인하는 테스트입니다.");
    const res = await request(app).get("/api/review/main").send();
    expect(res.statusCode).toEqual(200);
  });

  //특정 사용자가 작성한 리뷰들을 받아오는지 확인
  test("/api/review/user/:id", async () => {
    console.log(`2. 특정 사용자가 작성한 리뷰들을 받아오는 테스트
  i.  Response에 "reviews"가 포함되어있는지 확인합니다.
  ii. Response의 statusCode가 200인지 확인합니다.`);
    const res = await request(app)
      .get("/api/review/user/" + user)
      .send();

    expect(res.text).toContain("reviews");
    expect(res.statusCode).toEqual(200);
  });

  //특정 사용자가 작성한 리뷰들을 받아오는지 확인
  test("/api/review/user/:id", async () => {
    console.log(
      `3. 존재하지 않는 사용자가 작성한 리뷰들을 받아오는 테스트
  i.  Response에 "유효하지 않은 정보입니다."가 포함되어있는지 확인합니다.
  ii. Response의 statusCode가 401인지 확인합니다.`,
    );
    const res = await request(app)
      .get("/api/review/user/" + wronguser)
      .send();

    expect(res.text).toContain("유효하지 않은 정보입니다.");
    expect(res.statusCode).toEqual(401);
  });
});
