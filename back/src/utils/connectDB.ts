import mongoose from "mongoose";
import { configs } from "./constants";

export const connectDB = async () => {
  if (configs.TEST) return;

  await mongoose.connect(configs.DB_URL);
};
