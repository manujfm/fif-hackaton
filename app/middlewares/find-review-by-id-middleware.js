const { findRatingsAndReviews } = require('../controllers/ratings-and-reviews-controller');
const { Types } = require('mongoose');

module.exports.findReviewByIdMiddleware = async (req, res, next) => {
  try {
    const { reviewId } = req.params;
    if (!reviewId || !Types.ObjectId.isValid(reviewId)) {
      return res.status(400).json({ message: 'invalid Id' });
    }
    const result = await findRatingsAndReviews(reviewId);
    req.response = result || {};
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: error
    });
  }
  return next();
};
