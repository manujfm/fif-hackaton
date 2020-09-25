const Router = require('express').Router;
const { reviewValidation } = require('../middlewares/validations/review-validation-middleware');
const { ratingsAndReviewsMiddleware } = require('../middlewares/ratings-and-reviews-middleware');
const { responseMiddleware } = require('../middlewares/response/response-middleware');

const { checkEntityId } = require('../middlewares/checkEntityId.js');
const { setEntityId } = require('../middlewares/setEntityId.js');
const { getAverageRating } = require('../middlewares/getAverageRating.js');

const router = Router();

router.post('/ratings-and-reviews', [reviewValidation, ratingsAndReviewsMiddleware, responseMiddleware]);

router.get('/averageRatings', [checkEntityId, setEntityId, getAverageRating]);

module.exports = router;
