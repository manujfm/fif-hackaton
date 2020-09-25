const Router = require('express').Router;
const { reviewValidation } = require('../middlewares/validations/review-validation-middleware');
const { ratingsAndReviewsMiddleware } = require('../middlewares/ratings-and-reviews-middleware');
const { responseMiddleware } = require('../middlewares/response/response-middleware');

const { reviewsMiddleware } = require('../middlewares/reviews-middleware')
const { getReviewsValidation } = require('../middlewares/validations/review-validation-middleware');

const router = Router();

router.post('/ratings-and-reviews', [reviewValidation, ratingsAndReviewsMiddleware, responseMiddleware]);
router.get('/reviews', [getReviewsValidation, reviewsMiddleware, responseMiddleware]);

module.exports = router;
