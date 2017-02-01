import * as theon from 'theon';
import Builder from './builder';
import { attachBuilders, setBaseUrl } from './utils';

export const BUILDER = Symbol('builder');
export const BUILDER_KEY = 'Builder';
export const CUSTOMERID_TOKEN = '{{customerId}}';
export const BASE_URL = `https://${CUSTOMERID_TOKEN}.groupbycloud.com`;

const client = theon(BASE_URL)
  .set('Version', 'v1')
  .type('json')
  .use(setBaseUrl);

export { client };

export type Query<T> = string | T | Builder<T>;

export interface BaseConstructor<T, A extends theon.Request, B extends Builder<T>> {
  Builder: { new (): B };
  (query?: Query<T>): A & theon.Request;
}

export function renderAll<T>(...subClients: theon.entities.Collection[]): T & theon.Request {
  subClients.forEach((subClient) => client.collection(subClient));
  const api = client.render();

  attachBuilders(api);

  return <any>api;
}

export function clone(target: theon.entities.Entity) {
  const builder = target[BUILDER];
  const cloned = target.clone();

  if (builder) {
    cloned[BUILDER] = builder;
  }

  return cloned;
}
