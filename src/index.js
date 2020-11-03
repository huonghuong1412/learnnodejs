const express = require('express');
// const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();

// routes
const routes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());

// morgan log
// app.use(morgan('combined'))

// template engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

routes(app);

app.listen((port = 8686), () => {
    console.log('Listening in port ' + port);
});
