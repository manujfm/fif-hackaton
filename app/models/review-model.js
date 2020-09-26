const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  author_id: { type: Number, required: true },
  entity_id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  rating: { type: Number, required: true },
  help: { type: Number, default: 0 },
  useless: { type: Number, default: 0 },
  good_review_rating: { type: Number, default: 0 }
}, {
  timestamps: true
});

module.exports = mongoose.model('reviews', reviewSchema, 'reviews');
