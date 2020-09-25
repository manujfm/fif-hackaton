const { getByEntityRatingsAndReviews } = require('../controllers/reviews-controller');

module.exports.reviewsMiddleware = async (req, res, next) => {
    try {
        const result = await getByEntityRatingsAndReviews(params);
        req.response = result;
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            message: error
        });
    }
    return next();
};
