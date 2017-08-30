const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createError = require('http-errors');

const mongoose = require('./config/mongoose');
const Payload = require('./common/Payload');

const dbName = 'traders-inn';

const app = express();
mongoose(dbName);


//----imports----//
const pingRoutes = require('./routes/ping');

//----statics---//

app.use(cors());

//----middleware----//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('x-powered-by', false);

//----put routes here---//
app.use('/', pingRoutes);

// General 404 error
app.use((req, res, next) => {
    next(createError(404, 'Resource not found'));
  });

/**
 * @param next - required! 4 params must be present for Express error handling
 */
app.use((error, req, res, next) => {
    let data;
    if (Object.prototype.hasOwnProperty.call(error, 'payload')) {
      data = error.payload;
    } else {
      data = [
        {
          code: 0,
          message: error.message,
          details: '',
          element: '',
          error,
        },
      ];
    }
    const payload = new Payload(false, error.statusCode || 500, data);
    res.status(error.statusCode || 500).send(payload);
  });

module.exports = app;
