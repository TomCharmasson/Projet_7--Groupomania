const multer = require("multer");

// Multer configuration
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

// storage: multer.diskStorage({
//   destination: (req, file, callback) => {
//     let type = req.params.type;
//     console.log(type);
//     let path = `./uploads/${type}`;
//     fs.mkdirsSync(path);
//     callback(null, path);
//   },

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (req.path.match(new RegExp("/user"))) {
      // create a regexp and check if it matches
      callback(null, "images/profile");
    } else {
      callback(null, "images");
    }
  },
  filename: (req, file, callback) => {
    const fileName = file.originalname.split(" ").join("_").substring(0, file.originalname.lastIndexOf("."));
    const extension = MIME_TYPES[file.mimetype];
    callback(null, fileName + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("image");
