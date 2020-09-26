const { updateOwnerRespone } = require('../controllers/ratings-and-reviews-controller');

module.exports.updateOwnerResponseMiddleware = async (req, res, next) => {
  try {
    const result = await updateOwnerRespone(req.body);
    req.response = result;
  } catch (error) {
    res.status(500).json({
      status: 'Error',
      message: error
    });
  }
  return next();
};
