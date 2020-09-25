module.exports.responseMiddleware = async (req, res) => {
  res.status(200).json({
    status: 'Success',
    message: req.response
  });
};
