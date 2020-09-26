const Review = require('../models/review-model');

/**
 * Check if the reports of the author exist in the review and, if is not, push a new report
 * @param {Object} param
 * @returns {false|Object}
 */
module.exports.createRatingsAndReviews = async ({ id, author_id, comment }) => {
  try {
    const review = Review.findOne(id);

    // eslint-disable-next-line camelcase
    const authorReview = review.reports.find(r => r.author_id === author_id);
    if (authorReview) {
      return false;
    }

    review.reports.push({ author_id, comment });
    return await review.save();
  } catch (error) {
    throw error;
  }
};
