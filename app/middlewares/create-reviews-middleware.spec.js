const mockery = require('mockery')
const sinon = require("sinon");
const should = require('should')
const httpMocks = require('node-mocks-http');

describe("create review middleware", () => {

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


  it("test create review throw middleware", async ()  => {
    const responseParam = httpMocks.createResponse();

    mockery.registerMock('../controllers/ratings-and-reviews-controller', {
      createRatingsAndReviews: () => {
        throw "error"
      }
    })
    const mockRE = {}
    const {ratingsAndReviewsMiddleware} = require("./create-reviews-middleware");
    await ratingsAndReviewsMiddleware(mockRE, responseParam,() => {})
    should(responseParam.statusCode).be.equal(500)
  })


  it("test create review middleware", async ()  => {
    mockery.registerMock('../controllers/ratings-and-reviews-controller', {
      createRatingsAndReviews: () => true
    })
    const mockRE = {}
    const { ratingsAndReviewsMiddleware } = require("./create-reviews-middleware");
    await ratingsAndReviewsMiddleware(mockRE,{},() => {})
    should(mockRE.response).be.equal(true)
  })





})
