const Router = require('express').Router;
const { ratingsAndAeviews, myReviews } = require('../middlewares');

const router = Router();

router.get('/myReviews', myReviews);
router.post('/ratingsAndReviews', ratingsAndAeviews);

module.exports = router;
