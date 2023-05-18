'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

// Se importan los end points generados por el router
const api = require('./routes');

app.use(express.json());
app.use(cors());

// Indicamos a la app que utilice las rutas de los end points generados por api
app.use('/api', api);

module.exports = app;