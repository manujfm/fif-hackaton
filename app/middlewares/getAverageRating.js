
// eslint-disable-next-line consistent-return
module.exports.getAverageRating = async (req, res, next) => {
  try {

    return next();
  } catch (error) {
    res.send({ code: 'error', message: error.message }).status(400);
  }
};
