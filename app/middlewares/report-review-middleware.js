const { findReviewById } = require('../controllers/rating-by-id-controller');
const { addReport } = require('../controllers/report-review-controller');
const { response } = require('../util/response-query');

/**
 * Reports one review, only admits one report per author
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
module.exports.reportReviewMiddleware = async (req, res, next) => {
  try {
    const { id, author_id } = req.body;
    const review = await findReviewById(id);

    if (!review) {
      return response(res, 404, 'Error', 'Review not fund');
    }

    const authorReview = review.reports.find(r => r.author_id === author_id);
    if (authorReview) {
      return response(res, 409, 'Invalid', 'This author cannot make another report to this comment');
    }

    await addReport(req.body);
    req.response = 'Report send successfully';
    return next();
  } catch (e) {
    return res.status(500).json({
      code: 'Error',
      error: e.message,
    });
  }
};
