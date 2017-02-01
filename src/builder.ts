import { Store } from 'theon';

abstract class Builder<T> {

  private store: Store = new Store(this.parent);

  constructor(private parent?: Store) { }

  build(): T {
    return Builder.build(this.store, this.store.parent);
  }

  protected has<K extends keyof T>(name: K): boolean {
    return this.store.has(name);
  }

  protected get<K extends keyof T>(name: K): T[K] {
    return this.store.get(name);
  }

  protected set<K extends keyof T, V extends T[K]>(name: K, value: V): this {
    this.store.set(name, value);
    return this;
  }

  protected getOrSet<K extends keyof T, V extends T[K]>(name: K, value?: V): T[K] | this {
    return typeof value === 'undefined' ? this.get(name) : this.set(name, value);
  }

  protected remove<K extends keyof T>(name: K) {
    this.store.remove(name);
  }

  protected transform<K extends keyof T, R extends T[K]>(name: K, transform: (value: T[K]) => R) {
    this.store.set(name, transform(this.get(name)));
  }

  static build(store: Store, parentStore?: Store) {
    if (parentStore) {
      return Object.assign({}, Builder.build(parentStore, parentStore.parent), store.map);
    } else {
      return store.map;
    }
  }
}

export default Builder;
