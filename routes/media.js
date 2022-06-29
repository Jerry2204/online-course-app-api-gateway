const express = require('express');
const router = express.Router();

const mediaHandler = require('./handler/media');

/* GET users listing. */
router.get('/', (req, res) => {
  return res.json({ message: process.env.URL_SERVICE_MEDIA });
});
router.post('/', mediaHandler.create);

module.exports = router;
