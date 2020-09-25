const { findByEntityId } = require('../controllers/ratings-and-reviews-controller');

module.exports.reviewsMiddleware = async (req, res, next) => {
  try {
    const result = await findByEntityId(req.queryParams);
    req.response = result;
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: error
    });
  }
  return next();
};
