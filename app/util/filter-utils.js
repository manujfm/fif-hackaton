
const utils = {
    filterByRating: (operator, value) => {
        switch (operator) {
            case '>':
                return {
                    $gte: value
                };
            case '<':
                return {
                    $lte: value
                };
            default:
                return value
        }
    }
};

module.exports = utils;
