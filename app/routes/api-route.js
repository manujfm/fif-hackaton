const Router = require('express').Router;
const { reviewValidation } = require('../middlewares/validations/review-validation-middleware');
const { ratingsAndReviewsMiddleware } = require('../middlewares/ratings-and-reviews-middleware');
const { findReviewByIdMiddleware } = require('../middlewares/find-review-by-id-middleware');
const { responseMiddleware } = require('../middlewares/response/response-middleware');

const router = Router();

router.post('/ratings-and-reviews', [reviewValidation, ratingsAndReviewsMiddleware, responseMiddleware]);
router.get('/ratingsAndReviews/:reviewId', [findReviewByIdMiddleware, responseMiddleware]);

module.exports = router;
