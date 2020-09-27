const { MESSAGES } = require('../constants/messages');
const { findReviewById } = require('../controllers/rating-by-id-controller');
const { response } = require('../util/response-query');

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
    if (!result) {
      return response(res, 404, 'Not found', MESSAGES.INFORMATION.REVIEW_NOT_EXIST);
    }
    req.response = result;
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: error,
    });
  }
  return next();
};
