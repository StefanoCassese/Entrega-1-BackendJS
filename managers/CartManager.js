const fs = require('fs');
const path = require('path');

const cartsFilePath = path.join(__dirname, '../data/carts.json');

class CartManager {
  static createCart() {
    const carts = CartManager.getAllCarts();
    const newCart = { id: Date.now(), products: [] };
    carts.push(newCart);
    fs.writeFileSync(cartsFilePath, JSON.stringify(carts, null, 2));
    return newCart;
  }

  static getAllCarts() {
    const data = fs.readFileSync(cartsFilePath);
    return JSON.parse(data);
  }

  static getCartById(id) {
    const carts = CartManager.getAllCarts();
    return carts.find(cart => cart.id === id);
  }

  static addProductToCart(cartId, productId, quantity) {
    const carts = CartManager.getAllCarts();
    const cart = carts.find(cart => cart.id === cartId);
    if (cart) {
      const productIndex = cart.products.findIndex(p => p.product === productId);
      if (productIndex !== -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ product: productId, quantity });
      }
      fs.writeFileSync(cartsFilePath, JSON.stringify(carts, null, 2));
    }
    return cart;
  }
}

module.exports = CartManager;
