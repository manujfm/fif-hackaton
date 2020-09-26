const { updateRatingsAndReviews } = require('../controllers/ratings-and-reviews-controller');

module.exports.updateRatingsAndReviewsMiddleware = async (req, res, next) => {
    try {
        const result = await updateRatingsAndReviews(req.review);
        req.response = result;
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            message: error
        });
    }
    return next();
};
