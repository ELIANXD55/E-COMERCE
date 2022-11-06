const { storage } = require("../databases/firebase");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { Product } = require("../models/product.model");

exports.createProduct = async (req, res, next) => {
  try {
    const { name, shortDescription, fullDescription, quantity, price } = req.body;

    const product = Product.findOne({ name });

    if (product) {
      res.status(400).json({
        status: "error",
        message: "There is already a product created with the given name",
        data: null
      });
    }

    const imgRef = ref(storage, `imgs/${Date.now()}-${req.file.originalname}`);

    const result = await uploadBytes(imgRef, req.file.buffer);

    const newProduct = await Product.create({
      name,
      shortDescription,
      fullDescription,
      quantity,
      price,
      picture: result.metadata.fullPath
    });

    res.status(201).json({
      status: "success",
      data: {
        newProduct
      }
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred creating the product",
      data: null
    });
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    const productsPromises = products.map(
      async ({
        _id,
        name,
        shortDescription,
        fullDescription,
        quantity,
        price,
        picture
      }) => {
        const imgRef = ref(storage, picture);

        const imgDownloadUrl = await getDownloadURL(imgRef);

        return {
          _id,
          name,
          shortDescription,
          fullDescription,
          quantity,
          price,
          picture: imgDownloadUrl
        };
      }
    );

    const resolvedProducts = await Promise.all(productsPromises);

    if (products.length <= 0) {
      res.status(404).json({
        status: "error",
        message: "Can't find products",
        data: null
      });
    }

    res.status(200).json({
      status: "success",
      message: "Data fetched successfully",
      data: {
        resolvedProducts
      }
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred get all products",
      data: null
    });
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      res.status(404).json({
        status: "error",
        message: "cant find the post with the given id",
        data: null
      });
    }

    const imgRef = ref(storage, product.picture);

    const imgDownloadUrl = await getDownloadURL(imgRef);

    product.picture = imgDownloadUrl;

    res.status(200).json({
      status: "success",
      message: "Data fetched successfully",
      data: {
        product
      }
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred searching for the product",
      data: null
    });
  }
};
