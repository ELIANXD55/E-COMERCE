const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "active"
  },
  role: {
    type: String,
    required: true,
    default: "client"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
