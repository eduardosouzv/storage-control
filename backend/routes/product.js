const express = require('express');
const router = express.Router();
const pool = require('../connection');

router.post('/register', (req, res) => {
  res.send(
    (data = {
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
    })
  );

  pool.query('INSERT INTO produtos(nome, quantidade, preco) VALUES (?,?,?)', [data.name, data.quantity, data.price], (err, result) => {
    if (err) throw err;
  });
});

module.exports = router;
