const Router = require('express').Router;
const { ratingsAndAeviews, getRatingsAndReviews, getEntityIdRatingsAndReviews } = require('../middlewares');

const router = Router();

router.post('/ratingsAndReviews', ratingsAndAeviews);
router.get('/ratingsAndReviews/:reviewId', getRatingsAndReviews);
router.get('/reviews', getEntityIdRatingsAndReviews);


module.exports = router;
