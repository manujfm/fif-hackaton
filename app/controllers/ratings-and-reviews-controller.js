const Reviews = require('../models/ratings-and-reviews-model');

module.exports.createRatingsAndReviews = async (review) => {
  try {
    const newReview = new Reviews(review);
    const result = await newReview.save();
    return result;
  } catch (error) {
    throw error;
  }
};
