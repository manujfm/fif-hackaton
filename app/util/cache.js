const NodeCache = require('node-cache');

const myCache = new NodeCache({
  stdTTL: 100,
  checkperiod: 120,
  deleteOnExpire: false,
});

module.exports = {
  myCache
};
