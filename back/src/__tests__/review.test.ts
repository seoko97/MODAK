import app from "@src/app";
import { configs } from "@utils/constants";
import mongoose from "mongoose";
import request from "supertest";

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

let testId = "";
const doublequote = '"';

describe("review test", () => {
  beforeAll(async () => {
    await mongoose.connect(configs.DB_URL).then(() => console.log("데이터베이스 연결 성공"));
  });

  test("/api/review/main", async () => {
    console.log("1. 리뷰 메인페이지를 확인하는 테스트입니다.");
    const res = await request(app).get("/api/review/main").send();
    expect(res.statusCode).toEqual(200);
  });

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

  test("/api/review/camp/:id", async () => {
    console.log(
      `4. 특정 캠핑장에 작성된 리뷰들을 받아오는 테스트
  i.  Response에 "reviews"가 포함되어있는지 확인합니다.
  ii. Response의 statusCode가 200인지 확인합니다.`,
    );
    const res = await request(app)
      .get("/api/review/camp/" + campsite)
      .send();

    expect(res.text).toContain("reviews");
    expect(res.statusCode).toEqual(200);
  });

  test("/api/review/camp/:id", async () => {
    console.log(
      `5. 존재하지 않는 캠핑장에 작성된 리뷰들을 받아오는 테스트
  i.  Response에 "유효하지 않은 정보입니다."가 포함되어있는지 확인합니다.
  ii. Response의 statusCode가 401인지 확인합니다.`,
    );
    const res = await request(app)
      .get("/api/review/camp/" + wrongcampsite)
      .send();

    expect(res.text).toContain("유효하지 않은 정보입니다.");
    expect(res.statusCode).toEqual(401);
  });

  test("/api/review/", async () => {
    console.log(
      `6. 리뷰 작성 테스트
  i.  넘겨준 캠핑장의 이름이 제대로 들어가 있는지 확인합니다.
  ii. Response의 statusCode가 200인지 확인합니다.`,
    );

    const res = await request(app)
      .post("/api/review/")
      .set("authorization", token)
      .expect("Content-Type", /json/)
      .send({
        content: "test",
        location: campsite,
        rating: "평범해요",
        photos: [],
        author: user,
      });
    testId = res.text.split(doublequote)[93];

    console.log(res.text);
    expect(res.text).toContain("전라남도 담양군 금성면 비내동길 148");
    expect(res.statusCode).toEqual(200);
  });

  test("/api/review/", async () => {
    console.log(
      `7. 리뷰 작성 시 검증 테스트
  i.  잘못된 값이 들어갔을 때 오류 메시지를 출력하는지 확인합니다.
  ii. Response의 statusCode가 401인지 확인합니다.`,
    );

    const res = await request(app)
      .post("/api/review/")
      .set("authorization", token)
      .expect("Content-Type", /json/)
      .send({
        content: "test",
        location: campsite,
        rating: "괜찮아요",
        photos: [],
        author: user,
      });

    expect(res.text).toContain(
      "Review validation failed: rating: `괜찮아요` is not a valid enum value for path `rating`",
    );
    expect(res.statusCode).toEqual(401);
  });

  test("/api/review/", async () => {
    console.log(
      `8. 리뷰 수정 테스트
  i.  데이터가 수정되었는지 확인합니다.
  ii. Response의 statusCode가 200인지 확인합니다.
  iii.수정하는 리뷰의 ObjectId는 ${testId}입니다.`,
    );
    const res = await request(app)
      .put("/api/review/" + testId)
      .set("authorization", token)
      .send({
        content: "test - updated",
        location: campsite,
        rating: "별로에요",
        photos: [],
        id: testId,
      });
    console.log(res.text);
    expect(res.text).toContain("별로에요");
    expect(res.statusCode).toEqual(200);
  });

  test("/api/review/", async () => {
    console.log(
      `9. 타인 리뷰 삭제 테스트
  i.  사용자 검증 과정에서 걸러지는지 확인합니다.`,
    );
    const res = await request(app)
      .delete("/api/review/" + testId)
      .set("authorization", wrongtoken)
      .send();

    expect(res.statusCode).toEqual(401);
  });

  test("/api/review/", async () => {
    console.log(
      `10. 리뷰 삭제 테스트
  i.  데이터가 삭제되었는지 확인합니다.
  ii. Response의 statusCode가 200인지 확인합니다.
  iii.삭제하는 리뷰의 ObjectId는 ${testId}입니다.`,
    );
    const res = await request(app)
      .delete("/api/review/" + testId)
      .set("authorization", token)
      .send();

    expect(res.statusCode).toEqual(200);
  });
});
