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


  it("test get reviews throw middleware", async ()  => {
    const responseParam = httpMocks.createResponse();
    mockery.registerMock('../controllers/ratings-and-reviews-controller', {
      findByEntityId: () => {
        throw "error"
      }
    })
    const mockRE = {}
    const {getReviewsMiddleware} = require("./get-reviews-middleware");
    await getReviewsMiddleware(mockRE, responseParam,() => {})
    should(responseParam.statusCode).be.equal(500)
  })

  it("test get reviews rating middleware", async ()  => {
    mockery.registerMock('../controllers/ratings-and-reviews-controller', {
      findByEntityId: () => true
    })
    const mockRE = {}
    const {getReviewsMiddleware} = require("./get-reviews-middleware");
    await getReviewsMiddleware(mockRE,{},() => {})
    should(mockRE.response).be.equal(true)
  })





})
