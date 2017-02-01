import { expect } from 'chai';
import * as sinon from 'sinon';
import Builder from '../src/builder';
import { queryConstructor } from '../src/constructors';

describe('constructors', () => {
  describe('queryConstructor()', () => {
    it('should return a function', () => {
      expect(queryConstructor(() => null)).to.be.a('function');
    });

    it('should call string handler', () => {
      const query = 'myQuery';
      const result = { a: 'b' };
      const handler = sinon.spy(() => result);
      const send = sinon.spy();

      queryConstructor(handler).bind({ send })(query);

      expect(handler.calledWith(query)).to.be.true;
      expect(send.calledWith(result)).to.be.true;
    });

    it('should accept request object', () => {
      const request = { query: 'myQuery' };
      const send = sinon.spy();

      queryConstructor(() => null).bind({ send })(request);

      expect(send.calledWith(request)).to.be.true;
    });

    it('should accept request builder', () => {
      const result = { a: 'b' };
      const send = sinon.spy();
      class MyBuilder extends Builder<any> {
        build() { return result; }
      }

      queryConstructor(() => null).bind({ send })(new MyBuilder());

      expect(send.calledWith(result)).to.be.true;
    });
  });
});
