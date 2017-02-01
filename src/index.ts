import * as theon from 'theon';
import { BaseApi } from './api';
import Builder from './builder';
import * as constructors from './constructors';
import * as middleware from './middleware';
import * as test from './test';
import { attachBuilders, setBaseUrl } from './utils';
import * as validators from './validators';

export const CUSTOMERID_TOKEN = '{{customerId}}';

export const BASE_URL = `https://${CUSTOMERID_TOKEN}.groupbycloud.com`;

const rootClient = theon('http://example.com')
  .set('Version', 'v1')
  .type('json')
  .use(setBaseUrl);

export default rootClient;

export * from './api';
export { constructors, middleware, theon, test, validators, Builder };

export function renderAll<T>(...subClients: theon.entities.Collection[]) {
  const client = rootClient;

  subClients.forEach((subClient) => client.collection(subClient));
  const api = client.render<T & BaseApi>();

  attachBuilders(api);

  return api;
}
