import { expect } from 'chai';
import * as sinon from 'sinon';
import { bodyValidator } from '../src/validators';

describe('validators', () => {
  describe('bodyValidator()', () => {
    it('should return a function', () => {
      expect(bodyValidator('', () => null, '')).to.be.a('function');
    });

    it('should call test param', () => {
      const value = 'one';
      const test = sinon.spy();
      const validator = bodyValidator('value', test, '');

      validator(<any>{ body: { value } }, <any>{}, () => null);

      expect(test.calledWith(value)).to.be.true;
    });

    it('should call nested test param', () => {
      const inner = 'one';
      const test = sinon.spy();
      const validator = bodyValidator('value.from.inner', test, '');

      validator(<any>{ body: { value: { from: { inner } } } }, <any>{}, () => null);

      expect(test.calledWith(inner)).to.be.true;
    });

    it('should fail validation', () => {
      const errorMessage = '';
      const test = sinon.spy();
      const next = sinon.spy();
      const validator = bodyValidator('value', test, errorMessage);

      validator(<any>{ body: {} }, <any>{}, next);

      expect(next.calledWith(sinon.match((value) => {
        return value instanceof Error && value.message === `body validation error: ${errorMessage}`;
      }))).to.be.true;
    });
  });
});
