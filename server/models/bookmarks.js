const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bookmark = new Schema({
    id : { type: Number},
    title : { type: String },
    url : { type: String }
});

module.exports = mongoose.model('Bookmarks', Bookmark);
