const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

const { promisify } = require("util");

const { User } = require("../models/user.model");

dotenv.config({ path: "./config.env" });

exports.validateSession = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.status(401).json({
      status: "error",
      message: "Invalid session",
      data: null
    });
  }

  const decodedToken = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const user = await User.findOne({ email: decodedToken }).select("-password");

  if (!user) {
    res.status(401).json({
      status: "error",
      message: "Invalid session",
      data: null
    });
  }

  req.currentUser = user;

  next();
};

exports.protectAdmin = async (req, res, next) => {
  if (req.currentUser.role !== "admin") {
    res.status(403).json({
      status: "error",
      message: "Access denied",
      data: null
    });
  }
  next();
};
