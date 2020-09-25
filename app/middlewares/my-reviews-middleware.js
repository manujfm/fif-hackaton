const { getRatingsAndReviews } = require('../controllers/ratings-and-reviews-controller');

module.exports.myReviewsMiddleware = async (req, res, next) => {
  try {
    const result = await getRatingsAndReviews(req.queryParams);
    req.response = result;
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: error
    });
  }
  return next();
};
