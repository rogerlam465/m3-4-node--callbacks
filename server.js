'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { handleHomePage, handleFormData, handle404, hello } = require('./handlers');

const PORT = process.env.PORT || 8000;

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints
  .get('/', handleHomePage)
  .post('/form-data', handleFormData)

  // handle 404s
  .use(handle404)

  .listen(PORT, () =>
    console.log(`App ready! Access at http://localhost:${PORT}/`)
  );
