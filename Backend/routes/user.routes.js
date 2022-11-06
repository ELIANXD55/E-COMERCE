const express = require("express");

const {
  getUserById,
  createUsers,
  loginUser
} = require("../controllers/user.controllers");

const { userValidator } = require("../middlewares/validators.middleware");

const { validateSession } = require("../middlewares/auth.middleware");

const router = express.Router();

router.route("/").post(userValidator, createUsers);

router.route("/login").post(loginUser);

router.use(validateSession);

router.route("/:id").get(getUserById);

module.exports = { userRouter: router };
