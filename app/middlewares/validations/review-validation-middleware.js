/* eslint-disable camelcase */
const { type, authorIdValidate, entityIdValidate } = require('../../util/util-query');
const { response } = require('../../util/response-query');

module.exports.reviewValidation = async (req, res, next) => {
  const { authorId, entityId, title, description, rating } = req.body;

  if (authorIdValidate(authorId)) {
    return response(res, 400, 'Error', 'author id incorrect');
  }

  if (entityIdValidate(entityId)) {
    return response(res, 400, 'Error', 'entity id incorrect');
  }

  if (!title || !type(title, 'string')) {
    return response(res, 400, 'Error', 'title incorrect');
  }

  if (!rating || !type(rating, 'number')) {
    return response(res, 400, 'Error', 'rating incorrect');
  }

  req.review = {
    authorId: Number.parseInt(authorId),
    entityId: Number.parseInt(entityId),
    title,
    description,
    rating
  };

  return next();
};
