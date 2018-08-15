/* eslint import/no-commonjs: 0 */

const express = require('express');
// const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 9099;
const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'http://127.0.0.1';

app.listen(port, host, err => {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Server running on ${prettyHost}:${port}`);
})