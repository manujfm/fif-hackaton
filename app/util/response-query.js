module.exports.response = (res, code, status, message) => {
  res.status(code).json({
    status,
    message
  });
};
