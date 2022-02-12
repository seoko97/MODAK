import app from "@src/app";
import { configs } from "@utils/constants";
import mongoose from "mongoose";
import request from "supertest";

describe("user test", () => {
  beforeAll(async () => {
    await mongoose.connect(configs.DB_URL).then(() => console.log("데이터베이스 연결 성공"));
  });

  // 올바른 User ObjectId
  const user = "6207a790b16f869aa2216b22";
  // 올바르지 않은 Campsite ObjectId
  const wronguser = "22166207a790b16f869aab22";
  // 올바른 token
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA3NDcwOGQ5MWMwY2RhNzFmN2I0NjkiLCJpYXQiOjE2NDQ2NDQxMDQsImV4cCI6MTY0NTg1MzcwNH0.KFDmXW1ximfFWefaG0X9oxG14_T1COLGpA_q9o_-Kn4";
  // 올바르지 않은 token
  const wrongtoken = "wrongtoken";

  // 로그인 한 유저가 userpage에 접근
  test("/api/user Success", async () => {
    console.log("Test: 로그인 한 유저가 userpage에 접근하는 경우");
    const res = await request(app).get("/api/user").set("authorization", token).send();

    expect(res.statusCode).toEqual(201);
  });

  // 로그인 하지 않은 유저가 userpage에 접근
  test("/api/user Failure", async () => {
    console.log("Test: 로그인 하지 않은 유저가 userpage에 접근하는 경우");
    const res = await request(app).get("/api/user").set("authorization", wrongtoken).send();

    expect(res.statusCode).toEqual(401);
  });

  // 올바른 user 정보에 접근
  test("/api/user/:id Success", async () => {
    console.log("Test: 올바른 user 정보에 접근하는 경우");
    const res = await request(app)
      .get("/api/user/" + user)
      .send();

    expect(res.statusCode).toEqual(201);
  });

  // 올바르지 않은 user 정보에 접근
  test("/api/user/:id Failure", async () => {
    console.log("Test: 올바르지 않은 user 정보에 접근하는 경우");
    const res = await request(app)
      .get("/api/user/" + wronguser)
      .send();

    expect(res.statusCode).toEqual(201);
  });
});
