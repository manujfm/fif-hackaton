const { response } = require('../../util/response-query');
const validateUtils = require('../../util/validation-utils');

/**
 * Validates the body of the report endpoint
 * @param {Params} params
 * @param {Response} res
 * @param {Next} next
 */
module.exports.reviewReportValidation = async ({ body }, res, next) => {
  try {
    const { id, author_id, comment } = body;
    if (validateUtils.mongoIdValidated(id)) {
      return response(res, 400, 'Error', 'Invalid id');
    }
    if (validateUtils.authorIdValidate(author_id)) {
      return response(res, 400, 'Error', 'You must add an author_id');
    }
    if (!comment) {
      return response(res, 400, 'Error', 'Invalid id');
    }
    return next();
  } catch (e) {
    return response(res, 500, 'Error', e.message);
  }
};
