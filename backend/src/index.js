const express = require('express');
const morgan = require('morgan');
const route = require('./routes/routes');



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/upload', route)


module.exports = app;