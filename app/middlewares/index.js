const { reviewValidation } = require('./validations/review-validation-middleware');
const { ratingsAndReviewsMiddleware } = require('./ratings-and-reviews-middleware');
const { findReviewByIdMiddleware } = require('./find-review-by-id-middleware');
const { responseMiddleware } = require('./response/response-middleware');
const { checkEntityId } = require('../middlewares/checkEntityId.js');
const { setEntityId } = require('../middlewares/setEntityId.js');
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

module.exports.getAverageRatings = [
  checkEntityId,
  setEntityId,
  getAverageRating,
  responseMiddleware
];
