const Review = require('../models/review-model');

/**
 * Returns find one review by objectId
 * @param {ObjectId} reviewId
 */
module.exports.findReviewById = async (reviewId) => {
  try {
    const reviews = await Review.findById(reviewId).lean();
    return reviews;
  } catch (error) {
    throw error;
  }
};
