const { filterByRating } = require('../util/filter-utils')

const utils = {
  type: (value, type) => {
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
  },
  getQueryFilterByRating: (filterOperation, filterRating, entity_id) => {
    if (filterOperation && filterRating) {
      return {
        entity_id,
        rating: filterByRating(filterOperation, filterRating)
      }
    }
    return {
      entity_id
    }
  },
  sortByGoodFilter: (sortBy) => {
    switch (sortBy) {
      case 'asc':
        return -1
      default:
        return 1
    }
  },
};

module.exports = utils;
