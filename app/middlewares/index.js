const { reviewValidation } = require('./validations/review-validation-middleware');
const { reviewIdValidationMiddleware } = require('./validations/review-id-valdiation-middleware');
const { ratingsAndReviewsMiddleware } = require('./create-reviews-middleware');
const { updateRatingsAndReviewsMiddleware } = require('./update-reviews-middleware');
const { findReviewByIdMiddleware } = require('./find-review-by-id-middleware');
const { getReviewsMiddleware } = require('./get-reviews-middleware');
const { getReviewByEntityValidation } = require('../middlewares/validations/review-by-entity-id-validation-middleware');
const { responseMiddleware } = require('./response/response-middleware');
const { myReviewsValidationMiddleware } = require('./validations/my-reviews-validation-middleware');
const { myReviewsMiddleware } = require('./my-reviews-middleware');
const { entity_idValidationMiddleware } = require('./validations/entity-id-validation-middleware');
const { getAverageRating } = require('./get-average-rating-middleware');
const { updateOwnerResponseMiddleware } = require('./update-owner-response-middleware');
const { getCacheMiddleware } = require('./cache/get-cache-middleware');
const { setCacheMiddleware } = require('./cache/set-cache-middleware');
const { deleteCacheMiddleware } = require('./cache/delete-cache-middleware');


module.exports.ratingsAndReviews = [
  reviewValidation,
  ratingsAndReviewsMiddleware,
  responseMiddleware
];

module.exports.getRatingsAndReviews = [
  reviewIdValidationMiddleware,
  findReviewByIdMiddleware,
  responseMiddleware
];

module.exports.getentity_idRatingsAndReviews = [
  getReviewByEntityValidation,
  getReviewsMiddleware,
  responseMiddleware
];

module.exports.getAverageRatings = [
  entity_idValidationMiddleware,
  getCacheMiddleware,
  getAverageRating,
  setCacheMiddleware,
  responseMiddleware
];

module.exports.myReviews = [
  myReviewsValidationMiddleware,
  myReviewsMiddleware,
  responseMiddleware
];

module.exports.updateOwnerRespone = [
  updateOwnerResponseMiddleware,
  deleteCacheMiddleware,
  responseMiddleware
];

module.exports.updateRatingsAndReviews = [
  reviewValidation,
  updateRatingsAndReviewsMiddleware,
  deleteCacheMiddleware,
  responseMiddleware
];
