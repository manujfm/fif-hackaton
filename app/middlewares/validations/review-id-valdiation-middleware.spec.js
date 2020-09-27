const mockery = require('mockery')
const sinon = require("sinon");
const should = require('should')
var httpMocks = require('node-mocks-http');

describe("review id validation validation", () => {

  it("test review entity validation id without id", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      params:{

      }
    }
    const {reviewIdValidationMiddleware} = require("./review-id-valdiation-middleware.js");
    reviewIdValidationMiddleware(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review id validation without correct format id", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      params:{
        reviewId:"uuu"
      }
    }
    const {reviewIdValidationMiddleware} = require("./review-id-valdiation-middleware.js");
    reviewIdValidationMiddleware(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review id validation correct answer", ()  => {
    let responseParam = httpMocks.createResponse();
    const nextSpy = sinon.spy()
    const mockReq = {
      params:{
        reviewId:"5f6fac42ae323f2d43c37a5c"
      }
    }
    const {reviewIdValidationMiddleware} = require("./review-id-valdiation-middleware.js");
    reviewIdValidationMiddleware(mockReq, responseParam, nextSpy)
    should(nextSpy.called).be.equal(true)
  })

})
