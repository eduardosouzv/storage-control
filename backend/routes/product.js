const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.send({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
  });
});

module.exports = router;
