const { findReviewById } = require('../controllers/rating-by-id-controller');

/**
 * Finds one review by id, returns empty object on no row in db
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
module.exports.findReviewByIdMiddleware = async (req, res, next) => {
  try {
    const { reviewId } = req.params;
    const result = await findReviewById(reviewId);
    req.response = result || {};
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: error,
    });
  }
  return next();
};
