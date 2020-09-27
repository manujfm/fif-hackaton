const Review = require('../models/review-model');
const { MESSAGES } = require('../constants/messages');


/**
 * Check if the reports of the author exist in the review and, if is not, push a new report
 * @param {Object} param
 * @returns {string}
 */
module.exports.addReport = async ({ id, author_id, comment }) => {
  try {
    const review = await Review.findById(id);

    if (!review.reports) {
      return MESSAGES.INFORMATION.REVIEW_NOT_EXIST;
    }
    // eslint-disable-next-line camelcase
    const authorReview = review.reports.find((r) => r.author_id === author_id);
    if (authorReview) {
      return MESSAGES.INFORMATION.USER_ALREADY_REPORT_COMMENT;
    }

    review.reports.push({ author_id, comment });
    await review.save();
    return MESSAGES.SUCCESS.REPORT_SENDED;
  } catch (error) {
    throw error;
  }
};
