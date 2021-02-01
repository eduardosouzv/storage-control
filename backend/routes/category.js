const express = require('express');
const router = express.Router();
const pool = require('../connection');

router.post('/create', (req, res) => {
  pool.query('INSERT INTO categories(name) VALUES (?)', [req.body.name], (err, result) => {
    if (err) throw err;
    res.send(req.body.name);
  });
});

router.get('/categories', (req, res) => {
  pool.query('SELECT * FROM categories', (err, rows) => {
    res.send(rows.length ? rows : null);
  });
});

router.get('/:id', (req, res) => {
  var data = {
    id: req.params.id,
  };

  pool.query('SELECT * FROM categories WHERE id = ?', [data.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.put('/edit', (req, res) => {
  var data = {
    id: req.body.id,
    name: req.body.name,
  };

  pool.query('UPDATE categories SET name = ? WHERE id = ?', [data.name, data.id], (err, result) => {
    res.send(result);
  });
});

router.delete('/delete/:id', (req, res) => {
  var data = {
    id: req.params.id,
  };

  pool.query('DELETE FROM categories WHERE id = ?', [data.id], (err, result) => {
    if (err) {
      res.send(null);
    }
    res.send(result);
  });
});

module.exports = router;
