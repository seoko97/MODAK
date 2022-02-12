import app from "@src/app";
import { configs } from "@utils/constants";
import mongoose from "mongoose";
import request from "supertest";

describe("campsite test", () => {
  beforeAll(async () => {
    await mongoose.connect(configs.DB_URL).then(() => console.log("성공"));
  });

  // 올바른 Campsite ObjectId
  const campsite = "62062139f6007b0f615edb09";
  // 올바르지 않은 Campsite ObjectId
  const campsiteError = "07b0f615e62062139f60db09";

  // 모든 캠핑장의 정보를 받아오는지 확인
  test("/api/camp", async () => {
    const res = await request(app).get("/api/camp").send();
    expect(res.statusCode).toEqual(200);
  });

  // 메인 캠핑장의 정보를 받아오는지 확인
  test("/api/camp", async () => {
    const res = await request(app).get("/api/camp/main").send();
    expect(res.statusCode).toEqual(200);
  });

  // 특정 캠핑장의 정보를 받아오는지 확인
  test("/api/camp/:id Success", async () => {
    const res = await request(app)
      .get("/api/camp/" + campsite)
      .send();

    expect(res.statusCode).toEqual(200);
  });

  // DB에 저장되지 않은 캠핑장의 정보를 받아올 때 오류가 발생하는지 확인
  test("/api/camp/:id Failure", async () => {
    const res = await request(app)
      .get("/api/camp/" + campsiteError)
      .send();

    expect(res.statusCode).toEqual(401);
  });
});
