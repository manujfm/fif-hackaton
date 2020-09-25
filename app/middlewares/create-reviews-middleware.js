const { createRatingsAndReviews } = require('../controllers/ratings-and-reviews-controller');

module.exports.ratingsAndReviewsMiddleware = async (req, res, next) => {
  try {
    const result = await createRatingsAndReviews(req.review);
    req.response = result;
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: error
    });
  }
  return next();
};
