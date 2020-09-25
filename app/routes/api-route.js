const Router = require('express').Router;
const { ratingsAndAeviews } = require('../middlewares');

const router = Router();

router.post('/ratings-and-reviews', ratingsAndAeviews);

module.exports = router;
