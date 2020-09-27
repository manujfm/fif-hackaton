/* eslint-disable radix */
/* eslint-disable camelcase */
const { type, } = require('../../util/util-query');
const { response } = require('../../util/response-query');
const { authorIdValidate, entityIdValidate } = require('../../util/validation-utils');
const { VALIDATION } = require('../../constants/validations');

module.exports.reviewValidation = async (req, res, next) => {
  const { author_id, entity_id, title, description, rating, id, help, useless } = req.body;

  if (authorIdValidate(author_id)) {
    return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.AUTHOR_ID);
  }

  if (entityIdValidate(entity_id)) {
    return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.ENTITY_ID);
  }

  if (!title || !type(title, 'string')) {
    return response(res, 400, 'Error', VALIDATION.ERROR_PARAMS.TITLE);
  }

  if (!rating || !type(rating, 'number')) {
    return response(res, 400, 'Error',  VALIDATION.ERROR_PARAMS.RATING);
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
