const { query } = require('express');
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

module.exports.getRatingsAndReviews = async (quey) => {
  try {
    const offset = parseInt(quey.offset, 10);
    const sortByField = quey.sortByFilter.field;
    const sortByOrder = quey.sortByFilter.order;
    const sortFilter = [sortByField, sortByOrder];
    const result = await Reviews.find({ author_id: quey.author })
      .skip(offset)
      .limit(query.limit)
      .sort([sortFilter]);
    return result;
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
