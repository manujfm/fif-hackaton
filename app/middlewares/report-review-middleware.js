const { addReport } = require('../controllers/report-review-controller');
/**
 * Reports one review, only admits one report per author
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
module.exports.reportReviewMiddleware = async (req, res, next) => {
  try {
    req.response = await addReport(req.body);
    return next();
  } catch (e) {
    return res.status(500).json({
      code: 'Error',
      error: e.message,
    });
  }
};
