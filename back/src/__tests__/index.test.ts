import mongoose from "mongoose";
import request from "supertest";
import app from "@src/app";
import { configs } from "@utils/constants";

describe("GET /", () => {
  beforeAll(async () => {
    await mongoose.connect(configs.DB_URL);
  });

  it("1. 메인 페이지", async () => {
    const res = await request(app).get("/").send();

    expect(res.statusCode).toEqual(200);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    await mongoose.disconnect();
  });
});
