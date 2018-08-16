/* eslint import/no-commonjs: 0 */
const database = require('../database');

module.exports = {
    getAllCheckLists: (req, res) => {
        res.send(database);
    },

    getCheckList: (req, res) => {
        const { id } = req.params;
        res.send(...database.filter(list => list.id === id));
    }
}