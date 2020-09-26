const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportsSchema = new Schema({
  author_id: { type: Number, required: true },
  comment: { type: String, required: true },
});

const reviewSchema = new Schema({
  author_id: { type: Number, required: true },
  entity_id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  reports: [reportsSchema],
  rating: { type: Number, required: true },
  ownerRespone: {
    author_id: { type: Number },
    response: { type: String }
  },
  help: { type: Number, default: 0 },
  useless: { type: Number, default: 0 },
  good_review_rating: { type: Number, default: 0 }
}, {
  timestamps: true
});

module.exports = mongoose.model('reviews', reviewSchema, 'reviews');
