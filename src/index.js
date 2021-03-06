const express = require('express');
// const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const methorOverride = require('method-override');
const database = require('../src/config/database/index');

// routes
const routes = require('./routes/index');

// connect batabase
database.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());
app.use(methorOverride('_method'));

// morgan log
// app.use(morgan('combined'))

// template engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            eachIndex: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

routes(app);

app.listen((port = 8686), () => {
    console.log('Listening in port ' + port);
});
