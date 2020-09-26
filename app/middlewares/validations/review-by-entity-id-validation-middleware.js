const { type, sortByData } = require('../../util/util-query');
const { response } = require('../../util/response-query');

module.exports.getReviewByEntityValidation = async (req, res, next) => {
  const { entityId, sortBy, offset, limit } = req.query;

  if (!entityId || !type(entityId, 'string')) {
    return response(res, 400, 'Error', 'entityId is required');
  }
  if (sortBy && (!type(sortBy, 'string'))) {
    return response(res, 400, 'Error', 'sortBy incorrect');
  }
  if (offset && isNaN(offset)) {
    return response(res, 400, 'Error', 'offset incorrect');
  }
  if (limit && isNaN(offset)) {
    return response(res, 400, 'Error', 'limit incorrect');
  }
  const sortByFilter = sortByData(sortBy);
  req.queryParams = { entityId, sortByFilter, offset, limit };

  return next();
};
