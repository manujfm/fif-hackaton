const { type, sortByData } = require('../../util/util-query');
const { response } = require('../../util/response-query');
const { entityIdValidate } = require('../../util/validation-utils');

module.exports.getReviewByEntityValidation = async (req, res, next) => {
  let { entityId, sortBy, offset, limit } = req.query;

  if (entityIdValidate(entityId)) {
    return response(res, 400, 'Error', 'entityId is required');
  }

  if (sortBy && (!type(sortBy, 'string'))) {
    return response(res, 400, 'Error', 'sortBy incorrect');
  }

  if (offset && (isNaN(offset) || offset < 0)) {
    return response(res, 400, 'Error', 'offset incorrect');
  }
  
  if (limit && (isNaN(offset) || (limit < 1 || limit > 100))) {
    return response(res, 400, 'Error', 'limit incorrect');
  }

  req.queryParams = { 
    entityId: parseInt(entityId),
    sortBy,
    offset,
    limit
  };
  return next();
};
