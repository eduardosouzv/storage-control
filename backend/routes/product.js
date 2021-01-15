const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
      mensagem: 'product ok'
  });
});

module.exports = router;