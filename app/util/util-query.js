// const { config } = require('../config');

const utils = {
  type: (value, type) => {
    // eslint-disable-next-line valid-typeof
    return typeof value === type;
  }
};

module.exports = utils;
