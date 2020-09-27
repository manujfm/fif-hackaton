const mockery = require('mockery')
const sinon = require("sinon");
const should = require('should')
var httpMocks = require('node-mocks-http');

describe("review validation", () => {

  it("test review validation", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      body:{
        author_id: 2222,
        entity_id: 22222,
        title: "aaaaa",
        rating: 2
      }
    }
    const {reviewValidation} = require("./review-validation-middleware");
    reviewValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(200)
  })

  it("test review validation", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      body:{
        author_id: 2222,
        entity_id: 22222,
        title: "aaaaa",
        rating: 2
      }
    }
    const {reviewValidation} = require("./review-validation-middleware");
    reviewValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(200)
  })

  it("test review validation", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      body:{
        author_id: "2222",
        entity_id: NaN,
        title: "aaaaa",
        rating: 2
      }
    }
    const {reviewValidation} = require("./review-validation-middleware");
    reviewValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review validation", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      body:{
        author_id: NaN,
        entity_id: "22222",
        title: "aaaaa",
        rating: 2
      }
    }
    const {reviewValidation} = require("./review-validation-middleware");
    reviewValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review validation", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      body:{
        author_id: 2222,
        entity_id: 22222,
        title: "aaaaa",
        rating: 2,
        help:2,
        useless:2
      }
    }
    const {reviewValidation} = require("./review-validation-middleware");
    reviewValidation(mockReq, responseParam, () => {})
    should(mockReq.review.author_id).be.equal(2222)
    should(mockReq.review.entity_id).be.equal(22222)
    should(mockReq.review.title).be.equal("aaaaa")
    should(mockReq.review.rating).be.equal(2)
    should(mockReq.review.help).be.equal(2)
    should(mockReq.review.useless).be.equal(2)
  })


})
