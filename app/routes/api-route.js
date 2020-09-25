const express = require('express');

const app = express.Router();

const { checkEntityId } = require('../middlewares/checkEntityId.js');
const { setEntityId } = require('../middlewares/setEntityId.js');
const { getAverageRating } = require('../middlewares/getAverageRating.js');


app.get('/averageRatings', [checkEntityId, setEntityId, getAverageRating]);

module.exports = app;
