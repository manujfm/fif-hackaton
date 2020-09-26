const Router = require('express').Router;
const { ratingsAndAeviews,
    updateRatingsAndReviews,
    myReviews,
    getRatingsAndReviews,
    getEntityIdRatingsAndReviews,
    getAverageRatings } = require('../middlewares');

const router = Router();

router.post('/ratingsAndReviews', ratingsAndAeviews);
router.put('/ratingsAndReviews', updateRatingsAndReviews);
router.get('/myReviews', myReviews);
router.get('/ratingsAndReviews/:reviewId', getRatingsAndReviews);
router.get('/reviews', getEntityIdRatingsAndReviews);
router.put('/reviews', getEntityIdRatingsAndReviews);
router.get('/averageRatings', getAverageRatings);

module.exports = router;
