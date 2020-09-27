const { VALIDATION } = require('../../constants/validations');
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
    const { id, author_id, comment, report_type } = body;
    if (validateUtils.mongoIdValidate(id)) {
      return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.REVIEW_ID);
    }
    if (validateUtils.authorIdValidate(author_id)) {
      return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.AUTHOR_ID);
    }
    if (!comment) {
      return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.ADD_COMMENT);
    }
    if (report_type && !validateUtils.validateReportsTypes(report_type)) {
      return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.REPORT_TYPE);
    }
    return next();
  } catch (e) {
    return response(res, 500, 'Error', e.message);
  }
};
