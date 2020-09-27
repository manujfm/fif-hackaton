const { type, sortByData } = require('../../util/util-query');
const { response } = require('../../util/response-query');
const { entityIdValidate } = require('../../util/validation-utils');

module.exports.getReviewByEntityValidation = async (req, res, next) => {
  let { entity_id, sortBy, offset, limit, filterRating, filterOperator, sortByGood } = req.query;

  if (entityIdValidate(entity_id)) {
    return response(res, 400, 'Error', 'entity_id is required');
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

  if (filterRating && (isNaN(filterRating) || (filterRating < 1 || filterRating > 5))) {
    return response(res, 400, 'Error', 'filter rating value incorrect');
  }

  if ((filterOperator) && (filterOperator !== '>' && filterOperator !== '<' && filterOperator !== '=')) {
    return response(res, 400, 'Error', 'filter operator incorrect');
  }

  if (sortByGood && (sortByGood !== 'asc' && sortByGood !== 'desc')) {
    return response(res, 400, 'Error', 'sort by good incorrect');
  }

  const sortByFilter = sortByData(sortBy);

  req.queryParams = {
    entity_id: parseInt(entity_id),
    sortByFilter,
    offset,
    limit,
    filterRating,
    filterOperator,
    sortByGood,
  };
  return next();
};
