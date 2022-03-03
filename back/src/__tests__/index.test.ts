import request from "supertest";
import app from "@src/app";
import db from "./config/db";

beforeAll(async () => await db.connect());
afterEach(async () => await db.clear());
afterAll(async () => await db.close());

describe("GET /", () => {
  it("1. 메인 페이지", async () => {
    const res = await request(app).get("/").send();

    expect(res.statusCode).toEqual(200);
  });
});
