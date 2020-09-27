const { type, sortByData } = require('../../util/util-query');
const { response } = require('../../util/response-query');
const { authorIdValidate } = require('../../util/validation-utils');
const { VALIDATION } = require('../../constants/validations');
const { ENUMS } = require('../../constants/enums');

module.exports.myReviewsValidationMiddleware = (req, res, next) => {
  const { author, sortBy, offset, limit } = req.query;

  if (authorIdValidate(author)) {
    return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.AUTHOR_ID);
  }

  if (sortBy && (!type(sortBy, 'string' || ![ENUMS.MOST_RECENT, ENUMS.HIGHEST_RATED, ENUMS.LOWEST_RATED].includes(author)))) {
    return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.SORT_BY);
  }

  if (offset && isNaN(offset)) {
    return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.OFFSET);
  }

  if (limit && isNaN(offset)) {
    return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.LIMIT);
  }

  const sortByFilter = sortByData(sortBy);

  req.queryParams = {
    author: Number.parseInt(author),
    sortByFilter,
    offset,
    limit
  };
  return next();
};
