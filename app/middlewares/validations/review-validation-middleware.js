/* eslint-disable radix */
const { type, } = require('../../util/util-query');
const { response } = require('../../util/response-query');
const { authorIdValidate, entityIdValidate } = require('../../util/validation-utils');

module.exports.reviewValidation = async (req, res, next) => {
  const { author_id, entity_id, title, description, rating, id, help, useless } = req.body;

  if (authorIdValidate(author_id)) {
    return response(res, 400, 'Error', 'author id incorrect');
  }

  if (entityIdValidate(entity_id)) {
    return response(res, 400, 'Error', 'entity id incorrect');
  }

  if (!title || !type(title, 'string')) {
    return response(res, 400, 'Error', 'title incorrect');
  }

  if (!rating || !type(rating, 'number')) {
    return response(res, 400, 'Error', 'rating incorrect');
  }

  req.review = {
    author_id: Number.parseInt(author_id),
    entity_id: Number.parseInt(entity_id),
    title,
    description,
    rating,
    id,
    help,
    useless
  };

  return next();
};
