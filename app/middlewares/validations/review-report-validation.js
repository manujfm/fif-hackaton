const { Types } = require('mongoose');

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
      return res.status(400).json({ message: 'invalid Id' });
    }
    if (!author_id) {
      return res.status(400).json({ message: 'Invalid author_id'});
    }
    if (!comment) {
      return res.status(400).json({ message: 'You must add a comment'});
    }
    return next();
  } catch (e) {
    return res.status(500).json({
      code: 'error',
      error: e.message,
    });
  }
};
