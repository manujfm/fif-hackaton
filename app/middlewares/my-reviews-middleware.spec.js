const mockery = require('mockery')
const sinon = require("sinon");
const should = require('should')
const httpMocks = require('node-mocks-http');

describe("get review middleware", () => {

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


  it("test my reviews throw middleware", async ()  => {
    const responseParam = httpMocks.createResponse();
    mockery.registerMock('../controllers/ratings-and-reviews-controller', {
      getRatingsAndReviews: () => {
        throw "error"
      }
    })
    const mockRE = {}
    const {myReviewsMiddleware} = require("./my-reviews-middleware");
    await myReviewsMiddleware(mockRE, responseParam,() => {})
    should(responseParam.statusCode).be.equal(500)
  })

  it("test my reviews rating middleware", async ()  => {
    mockery.registerMock('../controllers/ratings-and-reviews-controller', {
      getRatingsAndReviews: () => true
    })
    const mockRE = {}
    const {myReviewsMiddleware} = require("./my-reviews-middleware");
    await myReviewsMiddleware(mockRE,{},() => {})
    should(mockRE.response).be.equal(true)
  })





})
