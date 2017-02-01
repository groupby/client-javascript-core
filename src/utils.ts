import * as theon from 'theon';
import { BUILDER, BUILDER_KEY, CUSTOMERID_TOKEN } from '.';

export function setBaseUrl(req: theon.Context, res: any, next: theon.Request.Next) {
  if (req.opts.rootUrl.includes(CUSTOMERID_TOKEN) && req.store.has('customerId')) {
    req.opts.rootUrl = req.opts.rootUrl.replace(CUSTOMERID_TOKEN, req.store.get('customerId').toLowerCase());
  }
  next();
}

export function attachBuilders(apiEntity: any) {
  if (Object.keys(apiEntity).includes('_client')) {
    apiEntity._client.entities.forEach((entity) => {
      if (apiEntity.hasOwnProperty(entity.name) && entity[BUILDER]) {
        apiEntity[entity.name][BUILDER_KEY] = entity[BUILDER];
      }
    });
  }
  Object.keys(apiEntity)
    .filter((key) => !['_client', 'api', 'parent', 'root'].includes(key))
    .filter((key) => typeof apiEntity[key] === 'function')
    .forEach((key) => attachBuilders(apiEntity[key]));
}
