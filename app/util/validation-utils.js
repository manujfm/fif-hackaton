// const { config } = require('../config');
const { type } = require('./util-query');

const utils = {
    authorIdValidate: (authorId) => {
        if (Number.isInteger(entityId)) return false;
        return (!authorId || !type(authorId, 'string') || isNaN(authorId))
    },
    entityIdValidate: (entityId) => {
        if (Number.isInteger(entityId)) return false;
        return (!entityId || !type(entityId, 'string') || isNaN(entityId))
    }
};

module.exports = utils;
