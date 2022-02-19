import express from "express";
import passport from "passport";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import hpp from "hpp";
import helmet from "helmet";
import path from "path";
import PassportConfig from "@passport/.";
import { url, prod } from "./utils/constants";
import { connectDB } from "./utils/connectDB";
import { setBearerToken } from "./middlewares/setBearerToken";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import routes from "@routes/.";

connectDB();
PassportConfig();
const app = express();

if (prod) {
  app.use(hpp());
  app.use(helmet());
}

app.use(
  cors({
    origin: url,
    credentials: true,
  }),
);
app.use(logger(prod ? "combined" : "dev"));
app.use("/", express.static(path.join("uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(setBearerToken);

app.use("/api", routes);

app.use(errorMiddleware);

app.get("/", (_, res) => {
  res.send("Hello Express Server!");
});

export default app;
