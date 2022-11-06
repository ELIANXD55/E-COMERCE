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
    }

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
  } catch (error) {
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

    res.status(200).json({
      status: "success",
      message: "Data fetched successfully",
      data: {
        categories
      }
    });
  } catch (error) {
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
        message: `Can't find categories with the id ${id}`,
        data: null
      });
    }

    res.status(200).json({
      status: "success",
      message: "Data fetched successfully",
      data: {
        category
      }
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred searching for the category",
      data: null
    });
  }
};
