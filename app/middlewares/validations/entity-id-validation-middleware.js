
// eslint-disable-next-line consistent-return
const { response } = require('../../util/response-query');

module.exports.entityIdValidationMiddleware = async (req, res, next) => {
  try {
    const { entityId } = req.query;
    if (!entityId) {
      return response(res, 400, 'Error', 'Please send valid entity id');
    }
    req.entityId = entityId;
  } catch (error) {
    return response(res, 400, 'Error', error.message);
  }
  return next();
};
