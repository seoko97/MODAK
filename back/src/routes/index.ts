import { Router } from "express";

import userRouter from "./user.route";
import campRouter from "./campsite.route";
import authRouter from "./auth.route";
import reviewRouter from "./review.route";

const router = Router();

router.use("/user", userRouter);
router.use("/camp", campRouter);
router.use("/auth", authRouter);
router.use("/review", reviewRouter);

router.get("/", (_, res) => {
  res.send("Hello this is api!");
});

export default router;
