import util from "util";
import multer from "multer";
import path from 'path'
import SharpMulter from "sharp-multer";

const maxSize = 2 * 3645 * 3645; // 2MB

function removeExtension(filename) {
  return filename.substring(0, filename.lastIndexOf('.')) || filename;
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, removeExtension(file.originalname) + '-' + Date.now() + path.extname(file.originalname));
  },
});

// const storage_ = SharpMulter({
//   destination: (req, file, cb) => {
//     cb(null, __basedir + "/resources/static/assets/uploads");
//   },
//   filename: (req, file, cb) => {
//     console.log(
//       `Filename : ${file.originalname};}`
//     );
//     const ext = file.mimetype.split("/")[1];
//     cb(null, path.parse(file.originalname.toString()) + Date.now() + path.extname(file.originalname));
//   },
//   //  imageOptions: {
//   //    useTimestamp: true,
//   //    fileFormat: "jpg",
//   //    quality: 10,
//   //    resize: { width: 500, height: 500 },
//   //  },
// });

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
export default uploadFileMiddleware;