
const { averageRatingController } = require('../controllers/average-rating-controller');

module.exports.getAverageRating = async (req, res, next) => {
  try {
    const average = await averageRatingController(req.entityId);
    req.response = average;
  } catch (error) {
    res.send({ code: 'error', message: error.message }).status(400);
  }
  return next();
};
