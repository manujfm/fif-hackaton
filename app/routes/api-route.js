const Router = require('express').Router;
const { ratingsAndAeviews, getRatingsAndReviews, getAverageRatings } = require('../middlewares');


const router = Router();

router.post('/ratingsAndReviews', ratingsAndAeviews);
router.get('/ratingsAndReviews/:reviewId', getRatingsAndReviews);
router.get('/averageRatings', getAverageRatings);

module.exports = router;
