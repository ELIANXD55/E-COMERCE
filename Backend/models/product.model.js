const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true,
    max: 50
  },
  fullDescription: {
    type: String,
    required: true,
    max: 150
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "active"
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
