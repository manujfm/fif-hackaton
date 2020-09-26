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
