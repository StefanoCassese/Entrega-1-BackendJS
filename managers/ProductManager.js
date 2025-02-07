const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

class ProductManager {
  static getAllProducts() {
    const data = fs.readFileSync(productsFilePath);
    return JSON.parse(data);
  }

  static getProductById(id) {
    const products = ProductManager.getAllProducts();
    return products.find(product => product.id === id);
  }

  static addProduct(product) {
    const products = ProductManager.getAllProducts();
    const newProduct = { id: Date.now(), ...product };
    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    return newProduct;
  }

  static updateProduct(id, product) {
    const products = ProductManager.getAllProducts();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...product };
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    }
    return products[index];
  }

  static deleteProduct(id) {
    let products = ProductManager.getAllProducts();
    products = products.filter(product => product.id !== id);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    return { id };
  }
}

module.exports = ProductManager;
