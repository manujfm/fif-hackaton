const Review = require('../models/review-model');

module.exports.averageRatingController = async (entity) => {
  try {
    const avg = await Review.aggregate([
      {
        $match: {
          entity_id: Number(entity)
        }
      },
      {
        $group: {
          _id: '$entity_id',
          totalNumberOfReviews: { $sum: 1 },
          averageRating: { $avg: '$rating' }
        }
      }
    ]);
    return avg;
  } catch (error) {
    throw error;
  }
};
