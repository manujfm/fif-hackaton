const RatingsAndReviews = require('../models/ratings-and-reviews-model');

module.exports.getByEntityRatingsAndReviews = async (params) => {
    try {
        // const newReview = new RatingsAndReviews(params);
        // const result = await newReview.save();

        RatingsAndReviews.find({id}, (err, ratingsReviews) => {
            if (err) return res.status(404).send({ message: 'Failed request' });
            if (users && users.length >= 1) return res.status(200).send({ message: 'User trying to register already exists' });
        });        

        console.log('parametross: ', params);
        return params;
    } catch (error) {
        throw error;
    }
};
