import app from "@src/app";
import { configs } from "@utils/constants";
import mongoose from "mongoose";
import request from "supertest";

describe("GET /", () => {
  beforeAll(async () => {
    await mongoose.connect(configs.DB_URL).then(() => console.log("성공"));
  });

  it("returns status 200 Main /", async () => {
    const res = await request(app).get("/").send();

    expect(res.statusCode).toEqual(200);
  });

  it("유저 정보 조회", async () => {
    const res = await request(app).get("/api/user/6205bad7f13438a35b7804ff").send();

    expect(res.statusCode).toEqual(200);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    await mongoose.disconnect();
  });
});
