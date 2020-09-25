const RatingsAndReviews = require('../models/ratings-and-reviews-model');

module.exports.averageRatingController = async (entity) => {
  try {
    const avg = await RatingsAndReviews.aggregate([{
      $match: {
        product_id: `${entity}`
      }
    },
    {
      $group: {
        _id: '$product_id',
        average: { $avg: '$rating' }
      }
    }
    ]);
    return avg;
  } catch (error) {
    throw error;
  }
};
