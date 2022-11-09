const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const compression = require("compression");
const { userRouter } = require("./routes/user.routes");
const { categoryRouter } = require("./routes/category.routes");
const { productRouter } = require("./routes/product.routes");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.use(cors());

app.use(compression());

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100,
//   message: "Too many accounts created from this IP, please try again after an hour"
// });

// app.use(limiter);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/products", productRouter);

module.exports = { app };
