const express = require('express');
const app = express();
const port = 3000;

app.get('/homework', (req, res) => {
    res.send('welcome to my page');
});

app.listen(port, () => {
    console.log('My page is live on http://localhost:${port}');
});
