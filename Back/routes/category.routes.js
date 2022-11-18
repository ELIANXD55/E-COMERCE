const express = require("express");

const {
  createCategory,
  getAllCategories,
  getCategoryById
} = require("../controllers/category.controllers");

const {
  categoryValidators,
  validationResult
} = require("../middlewares/validators.middleware");

const { validateSession, protectAdmin } = require("../middlewares/auth.middleware");

const router = express.Router();

router.use(validateSession);

router
  .route("/")
  .get(getAllCategories)
  .post(protectAdmin, categoryValidators, validationResult, createCategory);

router.route("/:id").get(getCategoryById);

module.exports = { categoryRouter: router };
