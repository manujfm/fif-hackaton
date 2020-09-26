const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/* const ownerResponse = new Schema({
  author_id: { type: Number, required: true },
  response: { type: String, required: true }
}, {
  timestamps: true
}); */

const reviewSchema = new Schema({
  author_id: { type: String, required: true },
  entity_id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  rating: { type: Number, required: true },
  ownerRespone: {
    author_id: { type: Number, required: true },
    response: { type: String, required: true }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('reviews', reviewSchema, 'reviews');
