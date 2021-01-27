const express = require('express');
const router = express.Router();
const pool = require('../connection');

router.post('/create', (req, res) => {
  pool.query('INSERT INTO categorias(nome) VALUES (?)', [req.body.name], (err, result) => {
    if (err) throw err;
    res.send(req.body.name);
  });
});

router.get('/categories', (req, res) => {
  pool.query('SELECT * FROM categorias', (err, rows) => {
    res.send(rows.length ? rows : null);
  });
});

router.get('/:id', (req, res) => {
  var data = {
    id: req.params.id,
  };

  pool.query('SELECT * FROM categorias WHERE id = ?', [data.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
module.exports = router;
