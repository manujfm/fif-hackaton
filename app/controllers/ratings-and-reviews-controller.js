const Review = require('../models/review-model');

module.exports.createRatingsAndReviews = async (review) => {
  try {
    const newReview = new Review(review);
    const result = await newReview.save();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.updateOwnerRespone = async (ownerResp) => {
  try {
    const response = await Review.findOneAndUpdate(
      { _id: ownerResp.id },
      { ownerRespone: ownerResp.response },
      { new: true }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports.getRatingsAndReviews = async (query) => {
  try {
    const offset = parseInt(query.offset, 10);
    const limit = parseInt(query.limit, 10);
    const sortByField = query.sortByFilter.field;
    const sortByOrder = query.sortByFilter.order;
    const sortFilter = [sortByField, sortByOrder];
    const result = await Review.find({ author_id: query.author })
      .skip(offset)
      .limit(limit)
      .sort([sortFilter])
      .lean();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.findByentity_id = async (query) => {
  try {
    const offset = parseInt(query.offset, 10);
    const limit = parseInt(query.limit, 10);
    const sortByField = query.sortByFilter.field;
    const sortByOrder = query.sortByFilter.order;
    const sortFilter = [sortByField, sortByOrder];
    const reviews = await Review.find({ entity_id: query.entity_id })
      .skip(offset)
      .limit(limit)
      .sort([sortFilter])
      .lean();
    return reviews;
  } catch (error) {
    throw error;
  }
};

module.exports.updateRatingsAndReviews = async (query) => {
  try {
    const finalReview = { ...query };
    const remoteReview = query;
    const localReview = await Review.findOne({
      _id: query.id
    }).lean();
    if (!localReview.help || remoteReview.help > localReview.help) {
      finalReview.help = remoteReview.help;
    }
    if (!localReview.help || remoteReview.useless > localReview.useless) {
      finalReview.useless = remoteReview.useless;
    }
    finalReview.good_review_rating = finalReview.help - finalReview.useless;
    const res = await Review.update(finalReview);
    return res;
  } catch (error) {
    throw error;
  }
};
