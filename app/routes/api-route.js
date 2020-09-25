const Router = require('express').Router;
const { ratingsAndAeviews } = require('../middlewares');

const { checkEntityId } = require('../middlewares/checkEntityId.js');
const { setEntityId } = require('../middlewares/setEntityId.js');
const { getAverageRating } = require('../middlewares/getAverageRating.js');

const router = Router();

router.post('/ratingsAndReviews', ratingsAndAeviews);

router.get('/averageRatings', [checkEntityId, setEntityId, getAverageRating]);

module.exports = router;
