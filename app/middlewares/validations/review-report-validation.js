const { Types } = require('mongoose');
const { VALIDATION } = require('../../constants/validations');

/**
 * Validates the body of the report endpoint
 * @param {Params} params
 * @param {Response} res
 * @param {Next} next
 */
module.exports.reviewReportValidation = async ({ body }, res, next) => {
  try {
    const { id, author_id, comment } = body;
    if (!id || !Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: VALIDATION.ERROR_PARAMS.REVIEW_ID });
    }
    if (!author_id) {
      return res.status(400).json({ message: VALIDATION.ERROR_PARAMS.AUTHOR_ID });
    }
    if (!comment) {
      return res.status(400).json({ message: VALIDATION.ERROR_PARAMS.ADD_COMMENT });
    }
    return next();
  } catch (e) {
    return res.status(500).json({
      code: 'error',
      error: e.message,
    });
  }
};
