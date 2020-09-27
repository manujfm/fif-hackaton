// const { config } = require('../config');
const { type } = require('./util-query');
const { Types } = require('mongoose');

const utils = {
  mongoIdValidate: (id) => {
    return (!id || !Types.ObjectId.isValid(id));
  },
  authorIdValidate: (author_id) => {
    if (Number.isInteger(author_id)) return false;
    return (!author_id || !type(author_id, 'string') || isNaN(author_id));
  },
  entityIdValidate: (entity_id) => {
    if (Number.isInteger(entity_id)) return false;
    return (!entity_id || !type(entity_id, 'string') || isNaN(entity_id));
  }
};

module.exports = utils;
