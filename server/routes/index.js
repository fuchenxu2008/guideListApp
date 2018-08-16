/* eslint import/no-commonjs: 0 */
const checklistRoutes = require('./ChecklistRoutes');
const searchRoutes = require('./SearchRoutes');

module.exports = function setRouter(app) {
    app.use('/api/checklists', checklistRoutes);
    app.use('/api/search', searchRoutes);
};