// const { config } = require('../config');

const utils = {
  type: (value, type) => {
    // eslint-disable-next-line valid-typeof
    return typeof value === type;
  },
  sortByData: (sortBy) => {
    switch (sortBy) {
      case 'most recent':
        return {
          field: 'createdAt',
          order: -1
        };
      case 'highest rated':
        return {
          field: 'rating',
          order: -1
        };
      case 'lowest rated':
        return {
          field: 'rating',
          order: 1
        };
      default:
        return {
          field: 'createdAt',
          order: -1
        };
    }
  }
};

module.exports = utils;
