const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({'hi': 'there'});
});

app.listen('8000', () => {
    console.log('listening 8000 port');
});