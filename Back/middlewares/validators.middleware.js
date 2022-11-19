const { body, validationResult } = require("express-validator");

exports.userValidator = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Must provide a valid name"),
  body("lastName")
    .isString()
    .withMessage("LastName must be a string")
    .notEmpty()
    .withMessage("Must provide a valid lastName"),
  body("email")
    .isEmail()
    .withMessage("Email must be a string")
    .notEmpty()
    .withMessage("Must provide a valid email"),
  body("password")
    .isString()
    .withMessage("Password must be a string")
    .notEmpty()
    .withMessage("Must provide a valid password")
  // body("city")
  //   .isString()
  //   .withMessage("City must be a string")
  //   .notEmpty()
  //   .withMessage("Must provide a valid city"),
  // body("address")
  //   .isString()
  //   .withMessage("Address must be a string")
  //   .notEmpty()
  //   .withMessage("Must provide a valid address"),
  // body("role").isEmpty().withMessage("Must provide a valid role")
];

exports.productValidators = [
  body("name")
    .isString()
    .withMessage("Name must be a String")
    .notEmpty()
    .withMessage("Must provide a valid name"),
  body("shortDescription")
    .isString()
    .withMessage("Short description must be a String")
    .notEmpty()
    .withMessage("Must provide a valid shortDescription"),
  body("fullDescription")
    .isString()
    .withMessage("Full description must be a String")
    .notEmpty()
    .withMessage("Must provide a valid fullDescription"),
  body("quantity")
    .isNumeric()
    .withMessage("Quantity must be a Number")
    .custom((value) => value > 0)
    .withMessage("Quantity must be greater than 0")
    .notEmpty()
    .withMessage("Must provide a valid quantity"),
  body("price")
    .isNumeric()
    .withMessage("Price must be a Number")
    .custom((value) => value > 0)
    .withMessage("Price must be greater than 0")
    .notEmpty()
    .withMessage("Must provide a valid price"),
  body("categoryId")
    .isString()
    .withMessage("CategoryId must be a Number")
    .notEmpty()
    .withMessage("Must provide a valid CategoryId")
];

exports.categoryValidators = [
  body("name")
    .isString()
    .withMessage("Name must be a String")
    .notEmpty()
    .withMessage("Must provide a valid name")
];

exports.validationResult = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMsg = errors
      .array()
      .map((err) => err.msg)
      .join(". ");
    res.status(400).json({
      message: errorMsg
    });
  } else {
    next();
  }
};
