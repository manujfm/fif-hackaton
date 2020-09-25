const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ratingsAndReviewsSchema = new Schema({
  author_id: { type: Number, required: true },
  product_id: { type: Number, required: true },
  title: { type: String, required: true },
  review_text: { type: String },
  rating: { type: Number, required: true }
});

module.exports = mongoose.model('reviews', ratingsAndReviewsSchema, 'Reviews');
