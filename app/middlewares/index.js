const { reviewValidation } = require('./validations/review-validation-middleware');
const { ratingsAndReviewsMiddleware } = require('./ratings-and-reviews-middleware');
const { responseMiddleware } = require('./response/response-middleware');
const { myReviewsValidationMiddleware } = require('./validations/my-reviews-validation-middleware');
const { myReviewsMiddleware } = require('./my-reviews-middleware');

module.exports.ratingsAndAeviews = [
  reviewValidation,
  ratingsAndReviewsMiddleware,
  responseMiddleware
];

module.exports.myReviews = [
  myReviewsValidationMiddleware,
  myReviewsMiddleware,
  responseMiddleware
];
