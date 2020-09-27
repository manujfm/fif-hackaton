const mockery = require('mockery')
const sinon = require("sinon");
const should = require('should')
var httpMocks = require('node-mocks-http');

describe("review report validation", () => {

  it("test review entity validation id bad request", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      body:{
      }
    }
    const {reviewReportValidation} = require("./review-report-validation");
    reviewReportValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review entity validation id without id", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      body:{
        id: "uuu"
      }
    }
    const {reviewReportValidation} = require("./review-report-validation");
    reviewReportValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review entity validation id without author_id", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      body:{
        author_id: "uuu"
      }
    }
    const {reviewReportValidation} = require("./review-report-validation");
    reviewReportValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })


  it("test review entity validation id without comment", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      body:{
        author_id: 22222,
        id: "5f6fac42ae323f2d43c37a5c"
      }
    }
    const {reviewReportValidation} = require("./review-report-validation");
    reviewReportValidation(mockReq, responseParam, () => {})
    should(responseParam.statusCode).be.equal(400)
  })

  it("test review entity validationt", ()  => {
    let responseParam = httpMocks.createResponse();
    const nextSpy = sinon.spy();
    const mockReq = {
      body:{
        author_id: 22222,
        id: "5f6fac42ae323f2d43c37a5c",
        comment: "ssssss"
      }
    }
    const {reviewReportValidation} = require("./review-report-validation");
    reviewReportValidation(mockReq, responseParam, nextSpy)
    should(nextSpy.called).be.equal(true)
  })


})
