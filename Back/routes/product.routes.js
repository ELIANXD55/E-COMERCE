const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById
} = require("../controllers/product.controllers");

const {
  productValidators,
  validationResult
} = require("../middlewares/validators.middleware");

const { validateSession, protectAdmin } = require("../middlewares/auth.middleware");

const { upload } = require("../utils/multer");

// router.use(validateSession);

router.route("/").get(getAllProducts).post(
  // protectAdmin,
  upload.single("productImg"),
  productValidators,
  validationResult,
  createProduct
);

router.route("/:id").get(getProductById);

module.exports = { productRouter: router };
