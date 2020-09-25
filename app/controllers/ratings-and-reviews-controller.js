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

module.exports.findRatingsAndReviews = async (id) => {
  try {
    const review = Reviews.findById(id);
    return review;
  } catch (error) {
    throw error;
  }
};
