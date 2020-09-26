const Router = require('express').Router;
const {
    ratingsAndReviews,
    myReviews,
    getRatingsAndReviews,
    getEntityIdRatingsAndReviews,
    getAverageRatings,
    updateOwnerRespone
} = require('../middlewares');

const router = Router();

// Add a new RatingsAndReviews
router.post('/ratingsAndReviews', ratingsAndReviews);

// Get all RatingsAndReviews for a specific user
router.get('/myReviews', myReviews);

// Get all RatingsAndReviews for a specific entity(product/seller)
router.get('/ratingsAndReviews/:reviewId', getRatingsAndReviews);

// Get all RatingsAndReviews for a specific entity(product/seller)
router.get('/reviews', getEntityIdRatingsAndReviews);

// Get average Ratings for a specific entity
router.get('/averageRatings', getAverageRatings);
router.patch('/cupdateOwnerResponse', updateOwnerRespone);

module.exports = router;
