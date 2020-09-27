const { type } = require('./util-query');
const { Types } = require('mongoose');
const { REPORT_TYPES } = require('../constants/enums');

const validReportTypes = Object.keys(REPORT_TYPES).map((key) => REPORT_TYPES[key]);

const utils = {
  mongoIdValidate: (id) => !id || !Types.ObjectId.isValid(id),
  authorIdValidate: (author_id) => {
    if (Number.isInteger(author_id)) return false;
    return !author_id || !type(author_id, 'string') || isNaN(author_id);
  },
  entityIdValidate: (entity_id) => {
    if (Number.isInteger(entity_id)) return false;
    return !entity_id || !type(entity_id, 'string') || isNaN(entity_id);
  },
  validateReportsTypes: (reports_type) => {
    return validReportTypes.includes(reports_type);
  },
};

module.exports = utils;
