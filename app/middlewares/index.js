const { reviewValidation } = require('./validations/review-validation-middleware');
const { reviewIdValidationMiddleware } = require('./validations/review-id-valdiation-middleware');
const { ratingsAndReviewsMiddleware } = require('./create-reviews-middleware');
const { findReviewByIdMiddleware } = require('./find-review-by-id-middleware');
const { getReviewsMiddleware } = require('./get-reviews-middleware');
const { getReviewByEntityValidation } = require('../middlewares/validations/review-by-entity-id-validation-middleware');
const { responseMiddleware } = require('./response/response-middleware');
const { myReviewsValidationMiddleware } = require('./validations/my-reviews-validation-middleware');
const { myReviewsMiddleware } = require('./my-reviews-middleware');
const { entityIdValidationMiddleware } = require('./validations/entity-id-validation-middleware');
const { getAverageRating } = require('./get-average-rating-middleware');


module.exports.ratingsAndAeviews = [
  reviewValidation,
  ratingsAndReviewsMiddleware,
  responseMiddleware
];

module.exports.getRatingsAndReviews = [
  reviewIdValidationMiddleware,
  findReviewByIdMiddleware,
  responseMiddleware
];

module.exports.getEntityIdRatingsAndReviews = [
  getReviewByEntityValidation,
  getReviewsMiddleware,
  responseMiddleware
];

module.exports.getAverageRatings = [
  entityIdValidationMiddleware,
  getAverageRating,
  responseMiddleware
];

module.exports.myReviews = [
  myReviewsValidationMiddleware,
  myReviewsMiddleware,
  responseMiddleware
];
