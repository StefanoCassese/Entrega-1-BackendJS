const express = require('express');
const router = express.Router();
const CartManager = require('../managers/CartManager'); 

// POST /api/carts/
router.post('/', (req, res) => {
  const newCart = CartManager.createCart();
  res.status(201).json(newCart);
});

// GET /api/carts/:cid
router.get('/:cid', (req, res) => {
  const cart = CartManager.getCartById(req.params.cid);
  res.json(cart);
});

// POST /api/carts/:cid/product/:pid
router.post('/:cid/product/:pid', (req, res) => {
  const updatedCart = CartManager.addProductToCart(req.params.cid, req.params.pid, req.body.quantity);
  res.json(updatedCart);
});

module.exports = router;
