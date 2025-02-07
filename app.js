const express = require('express');
const app = express();
const port = 8080;
const productRoutes = require('./Routes/products');
const cartRoutes = require('./Routes/carts');

app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);


app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
