const RatingsAndReviews = require('../models/ratings-and-reviews-model');

module.exports.createRatingsAndReviews = async (entity) => {
  try {
    const avg = await RatingsAndReviews.aggregate([
          { $match: { product_id: entity } },
          { $group: { product_id: '$product_id', average: { $avg: '$rating' } } }]);
    return avg;
  } catch (error) {
    throw error;
  }
};
