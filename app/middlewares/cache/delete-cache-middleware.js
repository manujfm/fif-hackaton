const { myCache } = require('../../util/cache');

/**
 * Sets cache for especific route
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
module.exports.deleteCacheMiddleware = (req, res, next) => {
    try {
        myCache.flushAll();
    } catch (e) {
        console.error(e);
    }
    next();
};
