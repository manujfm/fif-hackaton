const Router = require('express').Router;
const { ratingsAndAeviews, myReviews, getRatingsAndReviews, getEntityIdRatingsAndReviews, getAverageRatings } = require('../middlewares');

const router = Router();

router.post('/ratingsAndReviews', ratingsAndAeviews);
router.get('/myReviews', myReviews);
router.get('/ratingsAndReviews/:reviewId', getRatingsAndReviews);
router.get('/reviews', getEntityIdRatingsAndReviews);
router.get('/averageRatings', getAverageRatings);

module.exports = router;
