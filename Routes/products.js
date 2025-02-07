const express = require('express');
const router = express.Router();
const ProductManager = require('../managers/ProductManager'); // Asumiendo que tienes esta clase

// GET /api/products/
router.get('/', (req, res) => {
  const products = ProductManager.getAllProducts();
  res.json(products);
});

// GET /api/products/:pid
router.get('/:pid', (req, res) => {
  const product = ProductManager.getProductById(req.params.pid);
  res.json(product);
});

// POST /api/products/
router.post('/', (req, res) => {
  const newProduct = ProductManager.addProduct(req.body);
  res.status(201).json(newProduct);
});

// PUT /api/products/:pid
router.put('/:pid', (req, res) => {
  const updatedProduct = ProductManager.updateProduct(req.params.pid, req.body);
  res.json(updatedProduct);
});

// DELETE /api/products/:pid
router.delete('/:pid', (req, res) => {
  const deletedProduct = ProductManager.deleteProduct(req.params.pid);
  res.json(deletedProduct);
});

module.exports = router;
