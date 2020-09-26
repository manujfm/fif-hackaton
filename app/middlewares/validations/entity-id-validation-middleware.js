/* eslint-disable camelcase */

// eslint-disable-next-line consistent-return
const { response } = require('../../util/response-query');

module.exports.entity_idValidationMiddleware = async (req, res, next) => {
  try {
    const { entity_id } = req.query;
    if (!entity_id) {
      return response(res, 400, 'Error', 'Please send valid entity id');
    }
    req.entity_id = entity_id;
  } catch (error) {
    return response(res, 400, 'Error', error.message);
  }
  return next();
};
