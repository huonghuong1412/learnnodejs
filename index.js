const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h2>Hello World!</h2>');
})

app.get('/blog', (req, res) => {
    res.send('Blog!');
})

app.listen(port = 3000, () => {
    console.log("Listening in port " + port);
})