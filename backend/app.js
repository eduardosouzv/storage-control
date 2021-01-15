const express = require('express');
const app = express();
const port = 3001;

app.use(express.json())

const routeProduct = require('./routes/product');
const routeCategory = require('./routes/category')

app.use('/product', routeProduct);
app.use('/category', routeCategory);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});