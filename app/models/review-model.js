const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  author_id: { type: String, required: true },
  entity_id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  rating: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('reviews', reviewSchema, 'reviews');
