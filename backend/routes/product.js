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
  pool.query(
    'SELECT produtos.*, categorias.nome AS nome_categoria FROM produtos INNER JOIN categorias ON produtos.categorias_id = categorias.id ORDER BY produtos.id;',
    (err, rows) => {
      if (err) throw err;
      res.send(rows.length ? rows : null);
    }
  );
});

router.put('/edit', (req, res) => {
  var data = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    categorias_id: req.body.categorias_id,
    id: req.body.id,
  };

  pool.query(
    'UPDATE produtos SET nome = ?, quantidade = ?, preco = ?, categorias_id = ? WHERE id = ?',
    [data.name, data.quantity, data.price, data.categorias_id, data.id],
    (err, result) => {
      if (err) throw err;
      res.send(data);
    }
  );
});

module.exports = router;
