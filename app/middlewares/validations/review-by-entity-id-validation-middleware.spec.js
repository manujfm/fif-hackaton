const mockery = require('mockery')
const sinon = require("sinon");
const should = require('should')
var httpMocks = require('node-mocks-http');

describe("review by entity validation", () => {

  it("test review entity validation without entity id", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      query:{
        entity_id: "h972222"
      }
    }
    const {getReviewByEntityValidation} = require("./review-by-entity-id-validation-middleware.js");
    getReviewByEntityValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review entity validation without incorrect sortBy", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      query:{
        sortBy: 222222
      }
    }
    const {getReviewByEntityValidation} = require("./review-by-entity-id-validation-middleware.js");
    getReviewByEntityValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review entity validation without offset", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      query:{
        offset: "null"
      }
    }
    const {getReviewByEntityValidation} = require("./review-by-entity-id-validation-middleware.js");
    getReviewByEntityValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review entity validation without limit o incorret", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      query:{
        limit: NaN
      }
    }
    const {getReviewByEntityValidation} = require("./review-by-entity-id-validation-middleware.js");
    getReviewByEntityValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review entity validation with incorret filterRating", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      query:{
        filterRating: 8
      }
    }
    const {getReviewByEntityValidation} = require("./review-by-entity-id-validation-middleware.js");
    getReviewByEntityValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review entity validation wit incorrect filterOperator", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      query:{
        filterOperator: "???"
      }
    }
    const {getReviewByEntityValidation} = require("./review-by-entity-id-validation-middleware.js");
    getReviewByEntityValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review entity validation with incorrect sortByGood", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      query:{
        sortByGood: "haihdd"
      }
    }
    const {getReviewByEntityValidation} = require("./review-by-entity-id-validation-middleware.js");
    getReviewByEntityValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review entity validation without errors", ()  => {
    let responseParam = httpMocks.createResponse();
    const nextSpy = sinon.spy()
    const mockReq = {
      query:{
        entity_id:1084,
        filterRating:5,
        filterOperator:">",
        sortByGood:"asc",
        offset:2,
        limit:55
      }
    }
    const {getReviewByEntityValidation} = require("./review-by-entity-id-validation-middleware.js");
    getReviewByEntityValidation(mockReq, responseParam, nextSpy)
    should(responseParam.statusCode).be.equal(200)
  })

  it("test review entity validation without errors and correct mock", ()  => {
    let responseParam = httpMocks.createResponse();
    const nextSpy = sinon.spy()
    const mockReq = {
      query:{
        entity_id:1084,
        filterRating:5,
        filterOperator:">",
        sortByGood:"asc",
        offset:2,
        limit:55
      }
    }
    const {getReviewByEntityValidation} = require("./review-by-entity-id-validation-middleware.js");
    getReviewByEntityValidation(mockReq, responseParam, nextSpy)
    should(mockReq.queryParams.entity_id).be.equal(1084)
    should(mockReq.queryParams.sortByFilter.field).be.equal("createdAt")
    should(mockReq.queryParams.sortByFilter.order).be.equal(-1)
    should(mockReq.queryParams.offset).be.equal(2)
    should(mockReq.queryParams.limit).be.equal(55)
    should(mockReq.queryParams.filterRating).be.equal(5)
    should(mockReq.queryParams.filterOperator).be.equal(">")
    should(mockReq.queryParams.sortByGood).be.equal("asc")
  })

})
