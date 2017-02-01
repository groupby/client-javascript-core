import { expect } from 'chai';
import * as theon from 'theon';
import { setFromStore } from '../src/middleware';

describe('middleware', () => {
  describe('setFromStore()', () => {
    const SESSION_ID = 1343;
    let req: any;
    let store: theon.Store;

    beforeEach(() => {
      store = new theon.Store();
      store.set('sessionId', SESSION_ID);
      req = { store };
    });

    it('should set a field in the body from a value in the store', () => {
      req.body = {};

      const middleware = setFromStore('sessionId');
      middleware(<any>req, undefined, () => null);

      expect(req.body).to.eql({ sessionId: SESSION_ID });
    });

    it('should set accept an alternate path', () => {
      const middleware = setFromStore('sessionId', 'my.session.id');
      middleware(<any>req, undefined, () => null);

      expect(req.body).to.eql({ my: { session: { id: SESSION_ID } } });
    });

    it('should create an empty body if none exists', () => {
      const middleware = setFromStore('visitorId');
      middleware(req, undefined, () => null);

      expect(req.body).to.eql({});
    });
  });
});
