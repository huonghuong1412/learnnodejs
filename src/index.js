const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

// morgan log
app.use(morgan('combined'))

// template engine
app.engine('.hbs', handlebars({
    extname: ".hbs"
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
    res.render('home');
})
app.get('/blog', (req, res) => {
    res.render('blog');
})

app.get('/blog', (req, res) => {
    res.send('Blog!');
})

app.listen(port = 3000, () => {
    console.log("Listening in port " + port);
})