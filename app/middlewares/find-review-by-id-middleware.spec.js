const mockery = require('mockery')
const sinon = require("sinon");
const should = require('should')
const httpMocks = require('node-mocks-http');

describe("find review by id middleware", () => {

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


  it("test find review by id throw middleware", async ()  => {
    const responseParam = httpMocks.createResponse();
    mockery.registerMock('../controllers/rating-by-id-controller', {
      findReviewByIdMiddleware: () => {
        throw "error"
      }
    })
    const mockRE = {}
    const {findReviewByIdMiddleware} = require("./find-review-by-id-middleware");
    await findReviewByIdMiddleware(mockRE, responseParam,() => {})
    should(responseParam.statusCode).be.equal(500)
  })



})
