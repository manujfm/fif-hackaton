const { myCache } = require('../../util/cache');
const { responseMiddleware } = require('../response/response-middleware');

/**
 * gets cache for especific route
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
module.exports.getCacheMiddleware = (req, res, next) => {
  try {
    const cacheKey = `${req.host}${req.baseUrl}${req.url}`;
    const response = myCache.get(cacheKey);
    if (!response) {
      return next();
    }
    req.response = response;
    return responseMiddleware(req, res);
  } catch (e) {
    return next();
  }
};
