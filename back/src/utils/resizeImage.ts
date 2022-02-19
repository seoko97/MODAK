import sharp from "sharp";
import path from "path";
import dotenv from "dotenv";
import { writeFileSync } from "fs";

dotenv.config();

export default async function resizeImage(files: Express.Multer.File[]) {
  await Promise.all(
    files.map(async (file) => {
      const filePath = path.join("uploads/", file.filename);
      const buff = await sharp(filePath).resize({ width: 1080 }).toBuffer();
      writeFileSync(filePath, buff);
    }),
  );
}
