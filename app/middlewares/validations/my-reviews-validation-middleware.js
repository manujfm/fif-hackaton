const { type, sortByData } = require('../../util/util-query');
const { response } = require('../../util/response-query');
const { authorIdValidate } = require('../../util/validation-utils');

module.exports.myReviewsValidationMiddleware = (req, res, next) => {
  const { author, sortBy, offset, limit } = req.query;

  if (authorIdValidate(author)) {
    return response(res, 400, 'Error', 'author incorrect or missing');
  }

  if (sortBy && (!type(sortBy, 'string' || !['most recent', 'highest rated', 'lowest rated'].includes(author)))) {
    return response(res, 400, 'Error', 'sortBy incorrect');
  }

  if (offset && isNaN(offset)) {
    return response(res, 400, 'Error', 'offset incorrect');
  }

  if (limit && isNaN(offset)) {
    return response(res, 400, 'Error', 'limit incorrect');
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
