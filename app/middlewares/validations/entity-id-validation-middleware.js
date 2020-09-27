/* eslint-disable camelcase */

// eslint-disable-next-line consistent-return
const { response } = require('../../util/response-query');
const { VALIDATION } = require('../../constants/validations');

module.exports.entityIdValidationMiddleware = async (req, res, next) => {
  try {
    const { entity_id } = req.query;
    if (!entity_id) {
      return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.AUTHOR_ID);
    }
    req.entity_id = entity_id;
  } catch (error) {
    return response(res, 400, 'Error', error.message);
  }
  return next();
};
