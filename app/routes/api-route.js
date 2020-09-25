const Router = require('express').Router;
const { reviewValidation } = require('../middlewares/validations/review-validation-middleware');
const { ratingsAndReviewsMiddleware } = require('../middlewares/ratings-and-reviews-middleware');
const { responseMiddleware } = require('../middlewares/response/response-middleware');

const router = Router();

router.post('/ratings-and-reviews', [reviewValidation, ratingsAndReviewsMiddleware, responseMiddleware]);

module.exports = router;
