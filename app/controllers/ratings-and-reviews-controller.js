const RatingsAndReviews = require('../models/ratings-and-reviews-model');

module.exports.createRatingsAndReviews = async (review) => {
  try {
    const newReview = new RatingsAndReviews(review);
    const result = await newReview.save();
    return result;
  } catch (error) {
    throw error;
  }
};
