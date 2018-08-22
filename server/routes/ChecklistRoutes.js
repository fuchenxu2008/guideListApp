/* eslint import/no-commonjs: 0 */
const express = require('express');

const router = express.Router();

const { getAllCheckLists, getCheckList, getSpecificCheckLists } = require('../controllers/ChecklistController');

router.get('/:id', getCheckList);
router.get('/', getAllCheckLists);
router.post('/', getSpecificCheckLists);

module.exports = router;
