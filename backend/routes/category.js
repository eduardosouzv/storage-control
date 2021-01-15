const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
  res.send({
    catName: req.body.catName,
  });
});

module.exports = router;