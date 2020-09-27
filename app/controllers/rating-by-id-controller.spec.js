const mockery = require('mockery');
const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;

describe('rating-by-id-controller', () => {
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
    it('findReviewById success', async () => {
        const sinonSpy = sinon.spy();
        mockery.registerMock('../models/review-model', {
            findById: () => {
                return {
                    lean: sinonSpy
                }
            }
        });
        const func = require('./rating-by-id-controller').findReviewById;
        await func(123);

        expect(sinonSpy.called).to.be.true;
    });

    it('findReviewById catch error', async () => {
        const sinonSpy = sinon.spy();
        mockery.registerMock('../models/review-model', {
            findById: () => {
                throw 'error'
            }
        });
        const func = require('./rating-by-id-controller').findReviewById;
        try {
            await func();
        } catch (error) {
            expect(error).to.be.equal('error');
            expect(sinonSpy.called).to.be.false;
        }

    });
});