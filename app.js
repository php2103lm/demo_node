const express = require('express');
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('', function(req, res) {
    res.render('home');
});

app.listen(port);