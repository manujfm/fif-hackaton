const setResponseWithError = require('../util/common-response').setResponseWithError;

module.exports.exampleMiddleware = async (req, res, next) => {
  try {
    return next();
  } catch (error) {
    return setResponseWithError(res, error.response.status, error.response.statusText);
  }
};
