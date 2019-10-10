const express = require('express');
const cors = require('cors');
const app = express();

const youtube = require('./service/youtube');

app.use(cors());

app.get('/', function (req, res) {
    res.write('Welcome to youtube audio converter!');
    req.next();
});

app.get('/youtube/download/', function (req, res) {
    if (typeof req.query.url === 'undefined') {
        res.status(400);
        return req.next();
    }

    youtube.download(req.query.url, res);
});

app.get('*', function (req, res) {
    res.status(404).end();
});

app.use(function (req, res) {
    res.end();
});

app.listen(5050, () => { console.log('listening to port 5050'); });