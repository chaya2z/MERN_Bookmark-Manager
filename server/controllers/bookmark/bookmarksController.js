const mongoose = require("mongoose");
const Bookmark = mongoose.model("Bookmarks");

exports.all_bookmarks = function(req, res) {
    Bookmark.find({}, function(err, bookmark) {
        if (err) res.send(err);
        res.json(bookmark);
    });
};

exports.create_bookmark = function(req, res) {
    const new_bookmark = new Bookmark(req.body);
    new_bookmark.save(function(err, bookmark) {
        if (err) res.send(err);
        res.json(bookmark);
    });
};

exports.load_bookmark = function(req, res) {
    Bookmark.findById(req.params.bookmarkId, function(err, bookmark) {
        if (err) res.send(err);
        res.json(bookmark);
    });
};

exports.update_bookmark = function(req, res) {
    Bookmark.findOneAndUpdate(
        { _id: req.params.bookmarkId },
        req.body,
        { new: true },
        function(err, bookmark) {
            if (err) res.send(err);
            res.json(bookmark);
        }
    );
};

exports.delete_bookmark = function(req, res) {
    Bookmark.remove(
        {
            _id: req.params.bookmarkId
        },
        function(err) {
            if (err) res.send(err);
        }
    );
};
