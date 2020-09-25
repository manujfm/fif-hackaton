const { reviewValidation } = require('./validations/review-validation-middleware');
const { ratingsAndReviewsMiddleware } = require('./ratings-and-reviews-middleware');
const { findReviewByIdMiddleware } = require('./find-review-by-id-middleware');
const { getReviewByEntityValidation } = require('../middlewares/validations/review-validation-middleware');
const { reviewsMiddleware } = require('../middlewares/reviews-middleware');
const { responseMiddleware } = require('./response/response-middleware');
const { myReviewsValidationMiddleware } = require('./validations/my-reviews-validation-middleware');
const { myReviewsMiddleware } = require('./my-reviews-middleware');
const { checkEntityId } = require('../middlewares/checkEntityId.js');
const { setEntityId } = require('./validations/setEntityId.js');
const { getAverageRating } = require('../middlewares/getAverageRating.js');


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
];

module.exports.getAverageRatings = [
  checkEntityId,
  setEntityId,
  getAverageRating,
  responseMiddleware
];

module.exports.myReviews = [
  myReviewsValidationMiddleware,
  myReviewsMiddleware,
  responseMiddleware
];
