import * as theon from 'theon';
import { Query } from '.';
import Builder from './builder';

export function queryConstructor<T>(stringHandler: (query: string) => T) {
  return function(this: theon.Request, query?: Query<T>) {
    switch (typeof query) {
      case 'string': return this.send(stringHandler(<string>query));
      case 'object': {
        if (query instanceof Builder) {
          return this.send(query.build());
        } else {
          return this.send(query);
        }
      }
    }
  };
}
