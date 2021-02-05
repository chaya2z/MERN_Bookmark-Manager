module.exports = function(app) {
    const bookmarkList = require('../controllers/bookmark/bookmarksController');

    app.route('/api/bookmarks')
        .get(bookmarkList.all_bookmarks)
        .post(bookmarkList.create_bookmark);

    app.route('/api/bookmarks/:bookmarkId')
        .get(bookmarkList.load_bookmark)
        .put(bookmarkList.update_bookmark)
        .delete(bookmarkList.delete_bookmark);
};
