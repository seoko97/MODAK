import app from "@src/app";
import request from "supertest";

describe("OAuth login test", () => {
  test("Google OAuth login page", async () => {
    const res = await request(app).get("/api/auth/google").send();

    expect(res.statusCode).toEqual(302);
    expect(res.header.location).toEqual(
      expect.stringContaining("https://accounts.google.com/o/oauth2/v2/auth"),
    );
  });
});
