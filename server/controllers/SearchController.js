/* eslint import/no-commonjs: 0 */
const database = require('../database');

module.exports = {
    searchTitle: (req, res) => {     
        res.send(database.filter(list => list.title.match(new RegExp(req.query.title, 'i'))));
    }
}