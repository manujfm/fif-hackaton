const { findByentity_id } = require('../controllers/ratings-and-reviews-controller');

module.exports.getReviewsMiddleware = async (req, res, next) => {
  try {
    const result = await findByentity_id(req.queryParams);
    req.response = result;
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: error
    });
  }
  return next();
};
