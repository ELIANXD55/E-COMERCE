const express = require("express");

const {
  createProduct,
  getAllProducts,
  getProductById
} = require("../controllers/product.controllers");

const { upload } = require("../utils/multer");

const { productValidators } = require("../middlewares/validators.middleware");

const { validateSession, protectAdmin } = require("../middlewares/auth.middleware");

const router = express.Router();

router.use(validateSession);

router
  .route("/")
  .get(getAllProducts)
  .post(protectAdmin, productValidators, upload.single("productImg"), createProduct);

router.route("/:id").get(getProductById);

module.exports = { productRouter: router };
