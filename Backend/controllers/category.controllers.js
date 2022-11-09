const { Category } = require("../models/category.model");

exports.createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const category = await Category.findOne({ name });

    if (category) {
      res.status(400).json({
        status: "error",
        message: "This category already exists",
        data: null
      });
    } else {
      const newCategory = await Category.create({
        name
      });

      res.status(201).json({
        status: "success",
        message: "Has been created successfully",
        data: {
          newCategory
        }
      });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred creating the category",
      data: null
    });
  }
};

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();

    if (categories.length === 0) {
      res.status(404).json({
        status: "error",
        message: "No created categories found",
        data: null
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "Data fetched successfully",
        data: {
          categories
        }
      });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred while fetching categories",
      data: null
    });
  }
};

exports.getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      res.status(404).json({
        status: "error",
        message: `Can't find categories with the id`,
        data: null
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "Data fetched successfully",
        data: {
          category
        }
      });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred searching for the category",
      data: null
    });
  }
};
