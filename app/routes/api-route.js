const Router = require('express').Router;
const {
    ratingsAndAeviews,
    myReviews,
    getRatingsAndReviews,
    getEntityIdRatingsAndReviews,
    getAverageRatings,
    updateOwnerRespone
} = require('../middlewares');

const router = Router();

router.post('/ratingsAndReviews', ratingsAndAeviews);
router.get('/myReviews', myReviews);
router.get('/ratingsAndReviews/:reviewId', getRatingsAndReviews);
router.get('/reviews', getEntityIdRatingsAndReviews);
router.get('/averageRatings', getAverageRatings);
router.put('/cupdateOwnerResponse', updateOwnerRespone);

module.exports = router;
