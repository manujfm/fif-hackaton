/* eslint-disable camelcase */
const { type } = require('../../util/util-query');
const { response } = require('../../util/response-query');

module.exports.reviewValidation = async (req, res, next) => {
  const { author_id, entityId, title, description, rating, useless, help, id } = req.body;
  if (!author_id || !type(author_id, 'string')) {
    return response(res, 400, 'Error', 'author_id incorrect');
  }
  if (!entityId || !type(entityId, 'string')) {
    return response(res, 400, 'Error', 'entityId incorrect');
  }
  if (!title || !type(title, 'string')) {
    return response(res, 400, 'Error', 'title incorrect');
  }
  if (!rating || !type(rating, 'string')) {
    return response(res, 400, 'Error', 'rating incorrect');
  }
  req.review = { author_id, entityId, title, description, rating, useless, help, id };

  return next();
};
