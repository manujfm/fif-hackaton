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

module.exports.findByEntityId = async (quey) => {
  try {
    const offset = parseInt(quey.offset, 10);
    const sortByField = quey.sortByFilter.field;
    const sortByOrder = quey.sortByFilter.order;
    const sortFilter = [sortByField, sortByOrder];
    const reviews = await Review.find({ entity_id: quey.entityId })
      .skip(offset)
      .limit(query.limit)
      .sort([sortFilter])
      .lean();
    return reviews;
  } catch (error) {
    throw error;
  }
};
