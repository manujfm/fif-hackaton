const { filterByRating } = require('../util/filter-utils')
const { ENUMS } = require('../constants/enums')


const utils = {
  type: (value, type) => {
    return typeof value === type;
  },
  sortByData: (sortBy) => {
    switch (sortBy) {
      case ENUMS.MOST_RECENT:
        return {
          field: ENUMS.CREATED_AT,
          order: -1
        };
      case ENUMS.HIGHEST_RATED:
        return {
          field: ENUMS.RATING,
          order: -1
        };
      case ENUMS.LOWEST_RATED:
        return {
          field: ENUMS.RATING,
          order: 1
        };
      default:
        return {
          field: ENUMS.CREATED_AT,
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
      case ENUMS.ASC:
        return -1
      default:
        return 1
    }
  },
};

module.exports = utils;
