const Router = require('express').Router;
const { ratingsAndAeviews } = require('../middlewares');

const router = Router();

router.post('/ratingsAndReviews', ratingsAndAeviews);

module.exports = router;
