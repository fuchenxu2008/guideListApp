/* eslint import/no-commonjs: 0 */
const express = require('express');

const router = express.Router();

const { getAllCheckLists, getCheckList } = require('../controllers/ChecklistController');

router.get('/:id', getCheckList);
router.get('/', getAllCheckLists);

module.exports = router;
