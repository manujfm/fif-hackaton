const mockery = require('mockery')
const sinon = require("sinon");
const should = require('should')
const httpMocks = require('node-mocks-http');

describe("update owner response middleware", () => {

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


  it("test update owner response throw middleware", async ()  => {
    const responseParam = httpMocks.createResponse();
    mockery.registerMock('../controllers/ratings-and-reviews-controller', {
      updateOwnerRespone: () => {
        throw "error"
      }
    })
    const mockRE = {}
    const {updateOwnerResponseMiddleware} = require("./update-owner-response-middleware");
    await updateOwnerResponseMiddleware(mockRE, responseParam,() => {})
    should(responseParam.statusCode).be.equal(500)
  })

  it("test update owner response middleware", async ()  => {
    const responseParam = httpMocks.createResponse();
    mockery.registerMock('../controllers/ratings-and-reviews-controller', {
      updateOwnerRespone: () => {
        return true
      }
    })
    const mockRE = {}
    const {updateOwnerResponseMiddleware} = require("./update-owner-response-middleware");
    await updateOwnerResponseMiddleware(mockRE, responseParam,() => {})
    should(responseParam.statusCode).be.equal(200)
  })





})
