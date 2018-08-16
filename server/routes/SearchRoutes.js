/* eslint import/no-commonjs: 0 */
const express = require('express');

const router = express.Router();

const { searchTitle } = require('../controllers/SearchController');

router.get('', searchTitle);

module.exports = router;
