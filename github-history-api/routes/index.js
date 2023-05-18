'use strict';

const express = require('express');
const api = express.Router();

// Controllers
const commitController = require('../controllers/commit');


/*************************
**		END POINTS		**
*************************/

// Ruta para petición de productos
api.get('/commit/:user/:repository', commitController.getCommits);

module.exports = api;