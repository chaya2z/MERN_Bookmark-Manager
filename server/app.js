const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// DB connection
mongoose.connect("mongodb://mongo:27017/bookmark", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("mongoose is connected"))
    .catch((e) => console.log(e));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app;

const routes = require('./routes/api');
routes(app);
