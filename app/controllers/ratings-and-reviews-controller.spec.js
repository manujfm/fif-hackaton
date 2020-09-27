const mockery = require('mockery');
const chai = require('chai');
const sinon = require('sinon');
const { response } = require('express');

const expect = chai.expect;

describe('ratings-and-reviews-controller', () => {
    beforeEach(() => {
        mockery.enable({
            warnOnReplace: false,
            warnOnUnregistered: true,
            useCleanCache: true
        });
    })
    afterEach(() => {
        mockery.deregisterAll()
    })
    /* it('createRatingsAndReviews success', async () => {
        
        let mockResponse = {
            save: () => {}
        }
        const responseSpy = sinon.spy(mockResponse, 'save');
        responseSpy.save = () => {};
        mockery.registerMock('../models/review-model', responseSpy);
        
        const func = require('./ratings-and-reviews-controller').createRatingsAndReviews;
        await func({});

        expect(responseSpy.called).to.be.true;
    });

    it('createRatingsAndReviews catch error', async () => {
        const sinonSpy = sinon.spy();
        mockery.registerMock('../models/review-model', {
            findById: () => {
                throw 'error'
            }
        });
        const func = require('./ratings-and-reviews-controller').createRatingsAndReviews;
        try {
            await func();
        } catch (error) {
            expect(error).to.be.equal('error');
            expect(sinonSpy.called).to.be.false;
        }

    }); */

    it('updateOwnerRespone success', async () => {
        const sinonSpy = sinon.spy();
        mockery.registerMock('../models/review-model', {
            findOneAndUpdate: sinonSpy
        });
        const func = require('./ratings-and-reviews-controller').updateOwnerRespone;
        await func({id: 123, response: ''});

        expect(sinonSpy.called).to.be.true;
    });

    it('updateOwnerRespone catch error', async () => {
        const sinonSpy = sinon.spy();
        mockery.registerMock('../models/review-model', {
            findOneAndUpdate: () => {
                throw 'error'
            }
        });
        const func = require('./ratings-and-reviews-controller').updateOwnerRespone;
        try {
            await func({id: 123, response: ''});
        } catch (error) {
            expect(error).to.be.equal('error');
            expect(sinonSpy.called).to.be.false;
        }

    });

});