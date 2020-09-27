const mockery = require('mockery')
const sinon = require("sinon");
const should = require('should')
var httpMocks = require('node-mocks-http');

describe("my review validation", () => {

  it("test entity validation without author", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      query:{
        author: null
      }
    }
    const {myReviewsValidationMiddleware} = require("./my-reviews-validation-middleware.js");
    myReviewsValidationMiddleware(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test entity validation without limit", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      query:{
        limit: NaN
      }
    }
    const {myReviewsValidationMiddleware} = require("./my-reviews-validation-middleware.js");
    myReviewsValidationMiddleware(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test entity validation without offset", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      query:{
        offset: "null"
      }
    }
    const {myReviewsValidationMiddleware} = require("./my-reviews-validation-middleware.js");
    myReviewsValidationMiddleware(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test entity validation without offset", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      query:{
        offset: "null"
      }
    }
    const {myReviewsValidationMiddleware} = require("./my-reviews-validation-middleware.js");
    myReviewsValidationMiddleware(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test entity validation without errors", ()  => {
    let responseParam = httpMocks.createResponse();
    const nextSpy = sinon.spy()
    const mockReq = {
      query:{
        offset: 22,
        author: 222,
        sortBy:"most recent",
        limit:22
      }
    }
    const {myReviewsValidationMiddleware} = require("./my-reviews-validation-middleware.js");
    myReviewsValidationMiddleware(mockReq, responseParam, nextSpy)
    should(responseParam.statusCode).be.equal(200)
  })

  it("test entity validation without errors and correct mock", ()  => {
    let responseParam = httpMocks.createResponse();
    const nextSpy = sinon.spy()
    const mockReq = {
      query:{
        offset: 22,
        author: 222,
        sortBy:"most recent",
        limit:22
      }
    }
    const {myReviewsValidationMiddleware} = require("./my-reviews-validation-middleware.js");
    myReviewsValidationMiddleware(mockReq, responseParam, nextSpy)
    should(mockReq.queryParams.author).be.equal(222)
    should(mockReq.queryParams.sortByFilter.field).be.equal("createdAt")
    should(mockReq.queryParams.sortByFilter.order).be.equal(-1)
    should(mockReq.queryParams.offset).be.equal(22)
    should(mockReq.queryParams.limit).be.equal(22)
  })

})
