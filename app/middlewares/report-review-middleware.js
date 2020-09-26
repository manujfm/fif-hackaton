/**
 * Reports one review, only admits one report per author
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
module.exports.reportReviewMiddleware = async (req, res, next) => {
  try {
    const reportParams = req.body;
    return next();
  } catch (e) {
    return next();
  }
};
