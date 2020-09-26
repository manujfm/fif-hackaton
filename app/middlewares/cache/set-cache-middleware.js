const { myCache } = require('../../util/cache');

/**
 * Sets cache for especific route
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
module.exports.setCacheMiddleware = (req, res, next) => {
  try {
    const cacheKey = `${req.hostname}${req.baseUrl}${req.url}`;
    myCache.set(cacheKey, req.response);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
  next();
};
