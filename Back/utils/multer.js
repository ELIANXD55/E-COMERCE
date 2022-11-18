const multer = require("multer");
const storage = multer.memoryStorage();

const multerFileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image")) {
    cb(null, false);
  } else {
    cb(null, true);
  }
};

const upload = multer({
  storage,
  fileFilter: multerFileFilter
});

module.exports = { upload };
