const Product = require("../models/Product");

const addProduct = async (req, res) => {
  const { name, price, category } = req.body;

  const product = new Product({
    name,
    price,
    category
  });

  await product.save();

  res.json({ message: "Product Added" });
};

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product Deleted" });
};

module.exports = {
  addProduct,
  getProducts,
  deleteProduct
};