const Review = require('../models/review-model');

module.exports.createRatingsAndReviews = async ({id}) => {
  try {
    const review = Review.findOne(id);
    const result = await newReview.save();
    return result;
  } catch (error) {
    throw error;
  }
};
