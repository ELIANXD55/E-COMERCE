const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./env" });

const conect = async () => {
  await mongoose
    .connect(process.env.URI)
    .then(() => console.log("Database is conect"))
    .catch((err) => console.log(err));
};

module.exports = { conect };
