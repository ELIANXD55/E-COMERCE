const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  status: {
    type: String,
    required: true,
    default: "active"
  }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = { Category };
