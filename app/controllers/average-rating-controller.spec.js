const mockery = require('mockery');
const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;

describe('average-rating-controller', () => {
    beforeEach(() => {
        mockery.enable({
            warnOnReplace: false,
            warnOnUnregistered: false,
            useCleanCache: true
        });
    })
    afterEach(() => {
        mockery.deregisterAll()
    })
    it('averageRatingController success', async () => {
        const sinonSpy = sinon.spy();
        mockery.registerMock('../models/review-model', {
            aggregate: sinonSpy
        });
        const func = require('./average-rating-controller').averageRatingController;
        await func();

        expect(sinonSpy.called).to.be.true;
    });

    it('averageRatingController catch error', async () => {
        const sinonSpy = sinon.spy();
        mockery.registerMock('../models/review-model', {
            aggregate: () => {
                throw 'error'
            }
        });
        const func = require('./average-rating-controller').averageRatingController;
        try {
            await func();
        } catch (error) {
            expect(error).to.be.equal('error');
            expect(sinonSpy.called).to.be.false;
        }

    });
});