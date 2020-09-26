const { query } = require('express');
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

module.exports.getRatingsAndReviews = async (quey) => {
  try {
    const offset = parseInt(quey.offset, 10);
    const sortByField = quey.sortByFilter.field;
    const sortByOrder = quey.sortByFilter.order;
    const sortFilter = [sortByField, sortByOrder];
    const result = await Review.find({ author_id: quey.author })
      .skip(offset)
      .limit(query.limit)
      .sort([sortFilter])
      .lean();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.findByEntityId = async (params) => {
  try {
    const reviews = await Review.find({ entity_id: params.entityId }).lean();
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
