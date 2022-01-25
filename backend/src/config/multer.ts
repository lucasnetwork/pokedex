import multer from "multer";
import path from "path";
import crypto from "crypto";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import { config } from "dotenv";

config();
// multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.resolve(__dirname, "..", "tmp", "uploads"));
//   },
//   filename: (req, file, cb) => {
//     crypto.randomBytes(16, (err, hash) => {
//       if (err) cb(err);

//       const fileName = `${hash.toString("hex")} - ${file.originalname}`;

//       cb(null, fileName);
//     });
//   },
// }),

// pokemon-teste-lucas
// América do Sul (São Paulo) sa-east-1
const s3 = new aws.S3({
  region: process.env.AWS_REGION,
});
console.log("process.env.AWS_REGION");
console.log(process.env.AWS_REGION);
const upload = {
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: process.env.AWS_BUCKET as string,
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
};

export default upload;
