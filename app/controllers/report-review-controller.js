const Review = require('../models/review-model');

/**
 * Check if the reports of the author exist in the review and, if is not, push a new report
 * @param {Object} param
 * @returns {string}
 */
module.exports.addReport = async ({ id, author_id, comment }) => {
  try {
    const review = await Review.findById(id);

    if (!review.reports) {
      return 'Review not exist';
    }
    // eslint-disable-next-line camelcase
    const authorReview = review.reports.find((r) => r.author_id === author_id);
    if (authorReview) {
      return 'This user already report this comment';
    }

    review.reports.push({ author_id, comment });
    await review.save();
    return 'Report sended successfully!';
  } catch (error) {
    throw error;
  }
};
