const mockery = require('mockery')
const sinon = require("sinon");
const should = require('should')
var httpMocks = require('node-mocks-http');

describe("entity validation", () => {

  it("test entity validation without entity id", ()  => {
    let responseParam = httpMocks.createResponse();
    const mockReq = {
      query:{
        entity_id: null
      }
    }
    const {entityIdValidationMiddleware} = require("./entity-id-validation-middleware");
    entityIdValidationMiddleware(mockReq, responseParam, () => {})
    should(mockReq.entity_id).be.equal(undefined)
  })

  it("test entity validation with entity id", ()  => {
    const responseParam = httpMocks.createResponse();
    const nextSpy = sinon.spy()
    const mockReq = {
      query:{
        entity_id: 123
      }
    }
    const {entityIdValidationMiddleware} = require("./entity-id-validation-middleware");
    entityIdValidationMiddleware(mockReq, responseParam, nextSpy)
    should(mockReq.entity_id).be.equal(123)
    should(nextSpy.called).be.equal(true)
  })

  it("test entity validation with entity id call next", ()  => {
    const responseParam = httpMocks.createResponse();
    const nextSpy = sinon.spy()
    const mockReq = {
      query:{
        entity_id: 123
      }
    }
    const {entityIdValidationMiddleware} = require("./entity-id-validation-middleware");
    entityIdValidationMiddleware(mockReq, responseParam, nextSpy)
    should(nextSpy.called).be.equal(true)
  })


})
