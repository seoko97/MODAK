import multer, { diskStorage } from "multer";
import path from "path";

const extension = [
  "image/apng",
  "image/bmp",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/tiff",
  "image/webp",
];

const upload = multer({
  storage: diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads");
    },
    filename(req, file, cb) {
      const reg = /[\s\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
      const ext = path.extname(file.originalname);
      const basenmae = path.basename(file.originalname.replace(reg, "").trim(), ext);
      cb(null, basenmae + new Date().getTime().valueOf() + ext);
    },
  }),
  fileFilter(req, file, cb) {
    if (extension.includes(file.mimetype)) cb(null, true);
    else cb(new Error("이미지가 아닙니다."));
  },
  limits: { fileSize: 20 * 1024 * 1024 },
});

export { upload };
