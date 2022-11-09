const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { User } = require("../models/user.model");

dotenv.config({ path: "./env" });

exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (!user) {
      res.status(404).json({
        status: "error",
        message: `Can't find users with the id`,
        data: null
      });
    }

    if (user) {
      res.status(200).json({
        status: "success",
        message: "Data fetched successfully",
        data: {
          user
        }
      });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred searching for the user",
      data: null
    });
  }
};

exports.createUsers = async (req, res, next) => {
  try {
    const { name, lastName, email, password, city, address, role } = req.body;

    const salt = await bcrypt.genSalt(12);

    const passwordCrypt = await bcrypt.hash(password, salt);

    const user = await User.findOne({ email });

    if (user) {
      res.status(400).json({
        status: "error",
        message: "There is already a registered user with the supplied email",
        data: null
      });
    }

    if (!user) {
      const newUser = await User.create({
        name,
        lastName,
        email,
        password: passwordCrypt,
        city,
        address,
        role
      });

      newUser.password = null;

      res.status(201).json({
        status: "success",
        message: "Has been created successfully",
        data: {
          newUser
        }
      });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred creating the user",
      data: null
    });
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({
        status: "error",
        message: "Credentials are invalid",
        data: null
      });
    }

    let isValidPassword = null;

    if (user) {
      isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        res.status(404).json({
          status: "error",
          message: "Credentials are invalid",
          data: null
        });
      }
    }

    if (user && isValidPassword) {
      const token = await jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
      });

      res.status(200).json({
        status: "success",
        message: "You have successfully logged in",
        data: {
          token
        }
      });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred while logging in",
      data: null
    });
  }
};
