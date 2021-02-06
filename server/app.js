const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const Bookmarks = require('./models/bookmarks');

// DB connection
mongoose.connect("mongodb://mongo:27017/bookmark", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("mongoose is connected"))
    .catch((e) => console.log(e));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }
);

app.options('*', function (req, res) {
    res.sendStatus(200);
})

module.exports = app;

const routes = require('./routes/api');
routes(app);
