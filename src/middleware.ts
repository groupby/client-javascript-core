import * as dot from 'dot-prop';
import * as theon from 'theon';

export function setFromStore(name: string, target: string = name) {
  return (req: theon.Context, res, next: theon.Request.Next) => {
    if (typeof req.body === 'undefined') {
      req.body = {};
    }
    if (typeof req.body === 'object' && req.store.has(name)) {
      dot.set(req.body, target, req.store.get(name));
    }
    next();
  };
}
