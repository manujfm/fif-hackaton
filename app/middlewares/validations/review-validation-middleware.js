/* eslint-disable camelcase */
const { type } = require('../../util/util-query');
const { response } = require('../../util/response-query');

module.exports.reviewValidation = async (req, res, next) => {
  const { author_id, product_id, title, review_text, rating } = req.body;
  if (!author_id || !type(author_id, 'string')) {
    return response(res, 400, 'Error', 'author_id incorrect');
  }
  if (!product_id || !type(product_id, 'string')) {
    return response(res, 400, 'Error', 'product_id incorrect');
  }
  if (!title || !type(title, 'string')) {
    return response(res, 400, 'Error', 'title incorrect');
  }
  /*
  if (!review_text || !type(review_text, 'string')) {
    return response(res, 400, 'Error', 'review_text incorrect');
  }
  */
  if (!rating || !type(rating, 'string')) {
    return response(res, 400, 'Error', 'rating incorrect');
  }
  req.review = { author_id, product_id, title, review_text, rating };

  return next();
};
