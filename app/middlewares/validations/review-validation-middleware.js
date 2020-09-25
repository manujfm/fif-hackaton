/* eslint-disable camelcase */
const { type } = require('../../util/util-query');
const { response } = require('../../util/response-query');

module.exports.reviewValidation = async (req, res, next) => {
  const { author_id, entity_id, title, description, rating } = req.body;
  if (!author_id || !type(author_id, 'string')) {
    return response(res, 400, 'Error', 'author_id incorrect');
  }
  if (!entity_id || !type(entity_id, 'string')) {
    return response(res, 400, 'Error', 'entity_id incorrect');
  }
  if (!title || !type(title, 'string')) {
    return response(res, 400, 'Error', 'title incorrect');
  }
  if (!rating || !type(rating, 'string')) {
    return response(res, 400, 'Error', 'rating incorrect');
  }
  req.review = { author_id, entity_id, title, description, rating };

  return next();
};

module.exports.getReviewByEntityValidation = async (req, res, next) => {
  const { entity_id, sortBy, offset, limit } = req.query;

  if (!entity_id || !type(entity_id, 'string')) {
    return response(res, 400, 'Error', 'entity_id is required');
  }
  if (sortBy && (!type(sortBy, 'string'))) {
    return response(res, 400, 'Error', 'sortBy incorrect');
  }
  if (offset && (!type(offset, 'number') || (offset < 0) || !Number.isInteger(offset))) {
    return response(res, 400, 'Error', 'offset incorrect');
  }
  if (limit && (!type(limit, 'number') || (limit < 1 || limit > 100) || !Number.isInteger(limit))) {
    return response(res, 400, 'Error', 'limit incorrect');
  }
  req.queryParams = { entity_id, sortBy, offset, limit };

  return next();
};
