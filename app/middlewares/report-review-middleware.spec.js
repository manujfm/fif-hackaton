const mockery = require('mockery')
const sinon = require("sinon");
const should = require('should')
const httpMocks = require('node-mocks-http');

describe("report review middleware", () => {

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


  it("test report reviews whithout review", async ()  => {
    const responseParam = httpMocks.createResponse();
    const req = {
      body:{
        author_id:1111
      }
    }
    mockery.registerMock('../controllers/report-review-controller', {
      addReport: () => {
        return true
      }
    })
    mockery.registerMock('../controllers/rating-by-id-controller', {
      findReviewById: () => {
        return false
      }
    })
    const {reportReviewMiddleware} = require("./report-review-middleware");
    await reportReviewMiddleware(req, responseParam,() => {})
    should(responseParam.statusCode).be.equal(404)
  })

  it("test report reviews false response without author", async ()  => {
    const responseParam = httpMocks.createResponse();
    const req = {
      body:{
        author_id:1111
      }
    }
    mockery.registerMock('../controllers/report-review-controller', {
      addReport: () => {
        return true
      }
    })
    mockery.registerMock('../controllers/rating-by-id-controller', {
      findReviewById: () => {
        return {
          reports:[{author_id:1111}]
        }
      }
    })
    const {reportReviewMiddleware} = require("./report-review-middleware");
    await reportReviewMiddleware(req, responseParam,() => {})
    should(responseParam.statusCode).be.equal(409)
  })


  it("test report reviews correct response", async ()  => {
    const nextSpy = sinon.spy()
    const responseParam = httpMocks.createResponse();
    const req = {
      body:{
        author_id:1111
      }
    }
    mockery.registerMock('../controllers/report-review-controller', {
      addReport: () => {
        return true
      }
    })
    mockery.registerMock('../controllers/rating-by-id-controller', {
      findReviewById: () => {
        return {
          reports:[{author_id:112211}]
        }
      }
    })
    const {reportReviewMiddleware} = require("./report-review-middleware");
    await reportReviewMiddleware(req, responseParam,nextSpy)
    should(nextSpy.called).be.equal(true)
  })






})
