const { reviewValidation } = require('./validations/review-validation-middleware');
const { ratingsAndReviewsMiddleware } = require('./ratings-and-reviews-middleware');
const { findReviewByIdMiddleware } = require('./find-review-by-id-middleware');
const { getReviewByEntityValidation } = require('../middlewares/validations/review-validation-middleware');
const { reviewsMiddleware } = require('../middlewares/reviews-middleware')
const { responseMiddleware } = require('./response/response-middleware');


module.exports.ratingsAndAeviews = [
  reviewValidation,
  ratingsAndReviewsMiddleware,
  responseMiddleware
];

module.exports.getRatingsAndReviews = [
  findReviewByIdMiddleware,
  responseMiddleware
];

module.exports.getEntityIdRatingsAndReviews = [
  getReviewByEntityValidation,
  reviewsMiddleware,
  responseMiddleware
]