const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.write('oi cara');
    res.end();
});

app.listen(5050, () => { console.log('listening to port 5050'); });