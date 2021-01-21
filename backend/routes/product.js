const express = require('express');
const router = express.Router();
const pool = require('../connection');

router.post('/register', (req, res) => {
  var data = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    categorias_id: req.body.categorias_id,
  };

  pool.query(
    'INSERT INTO produtos(nome, quantidade, preco, categorias_id) VALUES (?,?,?,?)',
    [data.name, data.quantity, data.price, data.categorias_id],
    (err, result) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

router.get('/category', (req, res) => {
  pool.query('SELECT * FROM categorias', (err, rows) => {
    if (err) throw err;
    res.send(rows.length ? rows : null);
  });
});

router.get('/products', (req, res) => {
  pool.query('SELECT * FROM produtos', (err, rows) => {
    if (err) throw err;
    res.send(rows.length ? rows : null);
  });
});

module.exports = router;
