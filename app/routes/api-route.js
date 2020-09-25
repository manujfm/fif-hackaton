const Router = require('express').Router;
// const context = require('../config').context;
// const getMiddlewares = require('fif-payments-get-middlewares');
import reviewController from './../controllers/review.controller';


const router = Router();

// router.get('/example', getMiddlewares(context.middlewares.example));
router.get('/reviews', reviewController.example);

module.exports = router;
