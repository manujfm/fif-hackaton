'use strict'

// import ReviewModel from './../models/user';

// /reviews:
//       get:
//         summary: Get all RatingsAndReviews for a specific entity(product/seller)
//         description: This operation supports pagination
//         parameters:
//           - $ref: '#/components/parameters/entityParam'
//           - $ref: '#/components/parameters/sortByParam'
//           - $ref: '#/components/parameters/offsetParam'
//           - $ref: '#/components/parameters/limitParam'
//         responses:
//           '200':
//             $ref: '#/components/responses/AllReviewResponse'


const example = (req, res) => {
    const params = req.body;

    return res.status(200).send({
        message: 'Todo ok! :)',
        params
    });
}



export default {
    example,

}
