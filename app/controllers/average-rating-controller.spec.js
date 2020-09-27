const mockery = require('mockery');
const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;

describe('checking the actions', () => {
    it('', async () => {
        const sinonSpy = sinon.spy();
        mockery.registerMock('../models/review-model', {
            Review: {
                aggregate: () => sinonSpy
            }
        });
        const func = require('./average-rating-controller').averageRatingController;
        await func({});

        expect(sinonSpy.called).to.be.true;
    });
});