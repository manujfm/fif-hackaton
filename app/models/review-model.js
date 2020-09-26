const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  author_id: { type: Number, required: true },
  entity_id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  rating: { type: Number, required: true },
  positives: { type: Number},
  negatives: { type: Number},
}, {
  timestamps: true
});

module.exports = mongoose.model('reviews', reviewSchema, 'reviews');
