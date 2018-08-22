/* eslint import/no-commonjs: 0 */
const database = require('../database');

module.exports = {
    getAllCheckLists: (req, res) => {
        const { page, count } = req.query;
        if (page && count) {
            const start = (page - 1) * count;
            const end = start + count;
            res.send(database.slice(start, end));
        } else {
            res.send(database);
        }
    },

    getCheckList: (req, res) => {
        const { id } = req.params;
        res.send(...database.filter(list => list.id === id));
    }
}