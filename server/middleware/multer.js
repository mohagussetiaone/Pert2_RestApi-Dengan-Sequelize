import multer from "multer";

const upload = multer({
  dest: "./server/images",
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/PNG" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg, .jepg, .pdf foramt allowed"));
    }
  },
  limits: { fileSize: 1 * 1024 * 1024 },
}).single("photo");

export default {
  upload,
};
