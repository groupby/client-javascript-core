import * as theon from 'theon';
import Builder from './builder';

export const BUILDER = Symbol('builder');

export type Query<T> = string | T | Builder<T>;

export interface BaseConstructor<T, A extends BaseApi, B extends Builder<T>> {
  Builder: { new (): B };
  (query?: Query<T>): A & theon.Request;
}

export interface BaseApi {
  _client: theon.entities.Client & { store: theon.Store };
}
