import { ErrorRequestHandler } from "express";

// 해당부분 함수는 마지막 매개변수를 선언하지 않으면 오류가 발생합니다.
const errorMiddleware: ErrorRequestHandler = (err, _, res, __) => {
  return res.status(401).json({ status: false, message: err.message });
};

export { errorMiddleware };
