const Review = require('../models/review-model');

/**
 * Check if the reports of the author exist in the review and, if is not, push a new report
 * @param {Object} param
 * @returns {string}
 */
module.exports.addReport = async ({ id, author_id, comment }) => {
  try {
    return await Review.findByIdAndUpdate(id, {
      $push: { reports: { author_id, comment } },
    });
  } catch (error) {
    throw error;
  }
};
