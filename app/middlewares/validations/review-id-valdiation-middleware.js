const { Types } = require('mongoose');
const { VALIDATION } = require('../../constants/validations')
/**
 * Validates than id exists in params and its a valid mongo ObjectId
 * @param {Params} params
 * @param {Response} res
 * @param {Next} next
 */
module.exports.reviewIdValidationMiddleware = async ({ params }, res, next) => {
  try {
    const { reviewId } = params;
    if (!reviewId || !Types.ObjectId.isValid(reviewId)) {
      return res.status(400).json({ message: VALIDATION.ERROR_PARAMS.REVIEW_ID });
    }
    return next();
  } catch (e) {
    return res.status(500).json({
      code: 'error',
      error: e.message,
    });
  }
};
