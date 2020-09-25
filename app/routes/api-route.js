const Router = require('express').Router;
const { ratingsAndAeviews, getRatingsAndReviews } = require('../middlewares');

const router = Router();

router.post('/ratingsAndReviews', ratingsAndAeviews);
router.get('/ratingsAndReviews/:reviewId', getRatingsAndReviews);

module.exports = router;
