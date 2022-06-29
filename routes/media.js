const express = require('express');
const router = express.Router();

const mediaHandler = require('./handler/media');

/* GET users listing. */
router.get('/', mediaHandler.getAll);
router.post('/', mediaHandler.create);

module.exports = router;
