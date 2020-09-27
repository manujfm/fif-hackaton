const mockery = require('mockery')
const sinon = require("sinon");
const should = require('should')
const httpMocks = require('node-mocks-http');

describe("update reviews middleware", () => {

    beforeEach( () => {
        mockery.enable({
            warnOnReplace: false,
            warnOnUnregistered: false,
            useCleanCache: true
        });
    })

    afterEach(function () {
        mockery.disable();
        mockery.deregisterAll();
    });


    it("test update  reviws throw middleware", async ()  => {
        const responseParam = httpMocks.createResponse();
        mockery.registerMock('../controllers/ratings-and-reviews-controller', {
            updateRatingsAndReviews: () => {
                throw "error"
            }
        })
        const mockRE = {}
        const {updateRatingsAndReviewsMiddleware} = require("./update-reviews-middleware");
        await updateRatingsAndReviewsMiddleware(mockRE, responseParam,() => {})
        should(responseParam.statusCode).be.equal(500)
    })

    it("test update reviews middleware", async ()  => {
        const responseParam = httpMocks.createResponse();
        mockery.registerMock('../controllers/ratings-and-reviews-controller', {
            updateRatingsAndReviews: () => {
                return true
            }
        })
        const mockRE = {}
        const {updateRatingsAndReviewsMiddleware} = require("./update-reviews-middleware");
        await updateRatingsAndReviewsMiddleware(mockRE, responseParam,() => {})
        should(responseParam.statusCode).be.equal(200)
    })





})
