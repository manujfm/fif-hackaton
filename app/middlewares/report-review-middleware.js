const { createRatingsAndReviews } = require('../controllers/report-review-controller');

/**
 * Reports one review, only admits one report per author
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
module.exports.reportReviewMiddleware = async (req, res, next) => {
  try {
    const result = await createRatingsAndReviews(req.body);
    req.result = !result ? "You can't report two times the same review" : 'Report successfully';
    return next();
  } catch (e) {
    return res.status(500).json({
      code: 'Error',
      error: e.message,
    });
  }
};
