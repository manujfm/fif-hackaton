const mockery = require('mockery');
const chai = require('chai');
const sinon = require('sinon');
// const baseSpec = require('../base.spec');

const expect = chai.expect;

//baseSpec('bffRoute', () => {
  describe('checking the actions', () => {
    beforeEach(() => {
      actionsMock = {
        post(path, middlewares) {
        },
        get(path, middlewares) {
        },
        patch(path, middlewares) {
        },
        put(path, middlewares) {
        },
      };
      expressMock = {
        Router() {
          return actionsMock;
        }
      };
      mockery.registerMock('express', expressMock);

      getMiddlewaresMock =
              function (middlewares) {
                return middlewares;
              };

      mockery.registerMock('fif-payments-get-middlewares', getMiddlewaresMock);

    });
    /* it('should allow calls by using GET, POST and PUT', () => {
      const getMerchant = sinon.spy(actionsMock, 'get');
      require('./api-route');

      expect(getMerchant.called).to.be.true;
      // expect(getMerchant.args[0][0]).to.be.equal('/merchant/:doc_type?/:doc_number?');
    }); */
  });
// });
