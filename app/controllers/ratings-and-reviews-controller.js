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

module.exports.findByEntityId = async (params) => {
  try {
    const reviews = await Reviews.find({ product_id: params.entity_id });
    return reviews
  } catch (error) {
    throw error;
  }
};
