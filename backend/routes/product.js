const express = require('express');
const router = express.Router();
const pool = require('../connection');

router.post('/register', (req, res) => {
  var data = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    categories_id: req.body.categories_id,
  };

  pool.query('INSERT INTO products(name, quantity, price, categories_id) VALUES (?,?,?,?)', [data.name, data.quantity, data.price, data.categories_id], (err, result) => {
    if (err) throw err;
    res.send(data);
  });
});

router.get('/category', (req, res) => {
  pool.query('SELECT * FROM categories', (err, rows) => {
    if (err) throw err;
    res.send(rows.length ? rows : null);
  });
});

router.get('/products', (req, res) => {
  pool.query('SELECT products.*, categories.name AS category_name FROM products INNER JOIN categories ON products.categories_id = categories.id ORDER BY products.id;', (err, rows) => {
    if (err) throw err;
    res.send(rows.length ? rows : null);
  });
});

router.put('/edit', (req, res) => {
  var data = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    categories_id: req.body.categories_id,
    id: req.body.id,
  };

  pool.query('UPDATE products SET name = ?, quantity = ?, price = ?, categories_id = ? WHERE id = ?', [data.name, data.quantity, data.price, data.categories_id, data.id], (err, result) => {
    if (err) throw err;
    res.send(data);
  });
});

router.delete('/delete/:id', (req, res) => {
  pool.query('DELETE FROM products WHERE id = ?', [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
