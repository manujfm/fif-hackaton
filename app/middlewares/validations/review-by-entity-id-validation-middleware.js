const { type, sortByData } = require('../../util/util-query');
const { response } = require('../../util/response-query');
const { entityIdValidate } = require('../../util/validation-utils');
const { VALIDATION } = require('../../constants/validations');

module.exports.getReviewByEntityValidation = async (req, res, next) => {
  let { entity_id, sortBy, offset, limit, filterRating, filterOperator, sortByGood } = req.query;

  if (entityIdValidate(entity_id)) {
    return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.AUTHOR_ID);
  }

  if (sortBy && (!type(sortBy, 'string'))) {
    return response(res, 400, 'Error',  VALIDATION.ERROR_PARAMS.SORT_BY);
  }

  if (offset && (isNaN(offset) || offset < 0)) {
    return response(res, 400, 'Error',  VALIDATION.ERROR_PARAMS.OFFSET);
  }

  if (limit && (isNaN(offset) || (limit < 1 || limit > 100))) {
    return response(res, 400, 'Error',  VALIDATION.ERROR_PARAMS.LIMIT);
  }

  if (filterRating && (isNaN(filterRating) || (filterRating < 1 || filterRating > 5))) {
    return response(res, 400, 'Error',  VALIDATION.ERROR_PARAMS.FILTER_RATING);
  }

  if ((filterOperator) && (filterOperator !== '>' && filterOperator !== '<' && filterOperator !== '=')) {
    return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.FILTER_OPERATOR);
  }

  if (sortByGood && (sortByGood !== 'asc' && sortByGood !== 'desc')) {
    return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.SORT_BY_GOOD);
  }

  const sortByFilter = sortByData(sortBy);

  req.queryParams = {
    entity_id: parseInt(entity_id, 10),
    sortByFilter,
    offset,
    limit,
    filterRating,
    filterOperator,
    sortByGood,
  };
  return next();
};
