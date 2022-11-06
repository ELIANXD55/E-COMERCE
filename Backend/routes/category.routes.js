const express = require("express");

const {
  createCategory,
  getAllCategories,
  getCategoryById
} = require("../controllers/category.controllers");

const { categoryValidators } = require("../middlewares/validators.middleware");

const { validateSession } = require("../middlewares/auth.middleware");

const router = express.Router();

router.use(validateSession);

router.route("/").get(getAllCategories).post(categoryValidators, createCategory);

router.route("/:id").get(getCategoryById);

module.exports = { categoryRouter: router };
