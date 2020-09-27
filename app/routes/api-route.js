const { myCache } = require('../util/cache');
const Router = require('express').Router;
const {
    ratingsAndReviews,
    myReviews,
    getRatingsAndReviews,
    updateRatingsAndReviews,
    getEntityByIdRatingsAndReviews,
    getAverageRatings,
    updateOwnerRespone,
    patchReportReviews,
} = require('../middlewares');

const router = Router();

// Add rating from other users a specific review
router.put('/ratingsAndReviews', updateRatingsAndReviews);

// Add a new RatingsAndReviews
router.post('/ratingsAndReviews', ratingsAndReviews);

// Get all RatingsAndReviews for a specific user
router.get('/myReviews', myReviews);

// Get RatingsAndReviews for a specific review(product/seller)
router.get('/ratingsAndReviews/:reviewId', getRatingsAndReviews);

// Get all RatingsAndReviews for a specific entity(product/seller)
router.get('/reviews', getEntityByIdRatingsAndReviews);

// Reports one review
router.patch('/reviews/report', patchReportReviews);

// Get average Ratings for a specific entity
router.get('/averageRatings', getAverageRatings);

// Set owner response
router.patch('/updateOwnerResponse', updateOwnerRespone);

router.get('/cache', (req, res) => {
  res.send(myCache.getStats());
});

module.exports = router;
