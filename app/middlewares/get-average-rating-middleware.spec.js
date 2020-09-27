const mockery = require('mockery')
const sinon = require("sinon");
const should = require('should')
const httpMocks = require('node-mocks-http');

describe("get avaerage middleware", () => {

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


  it("test get average rating throw middleware", async ()  => {
    const responseParam = httpMocks.createResponse();
    mockery.registerMock('../controllers/average-rating-controller', {
      averageRatingController: () => {
        throw "error"
      }
    })
    const mockRE = {}
    const {getAverageRating} = require("./get-average-rating-middleware");
    await getAverageRating(mockRE, responseParam,() => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test get average rating middleware", async ()  => {
    mockery.registerMock('../controllers/average-rating-controller', {
      averageRatingController: () => true
    })
    const mockRE = {}
    const {getAverageRating} = require("./get-average-rating-middleware");
    await getAverageRating(mockRE,{},() => {})
    should(mockRE.response).be.equal(true)
  })





})
