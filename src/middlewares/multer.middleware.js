import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); //Shawon tomake ei change ta korte hobe.
  },
});

export const upload = multer({
  storage,
});
