const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
      mensagem: 'category ok'
  });
});

module.exports = router;