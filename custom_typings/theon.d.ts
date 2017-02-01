declare module 'theon' {

  interface MidwarePool {

  }

  namespace Theon {
    export const VERSION: string;

    class Request extends Base {
      pipes: any[];
      dispatcher: any;

      /**
       * Defines the root URL.
       * @param  {string} url [description]
       * @return {this}       [description]
       */
      url(url: string): this;

      /**
       * Defines the URL path.
       * @param  {string} path [description]
       * @return {this}        [description]
       */
      path(path: string): this;

      /**
       * Defines the base URL path.
       * @param  {string} path [description]
       * @return {this}        [description]
       */
      basePath(path: string): this;

      /**
       * Defines the HTTP method to be used.
       * @param  {string} method [description]
       * @return {this}          [description]
       */
      method(method: string): this;

      /**
       * Registers a new path param.
       * @param  {string}    name [description]
       * @param  {string |    number}      value [description]
       * @return {this}           [description]
       */
      param(name: string, value: string | number): this;

      /**
       * Registers multiple path params.
       * @param  {string | any}         params [description]
       * @param  {string | number}      value  [description]
       * @return {this}        [description]
       */
      params(params: string | any, value?: string | number): this;

      /**
       * Generic method to persist fields by type.
       * @param  {string}    type [description]
       * @param  {string}    name [description]
       * @param  {string |    number}      value [description]
       * @return {this}           [description]
       */
      persistField(type: string, name: string, value: string | number): this;

      /**
       * Registers a persistent path param.
       * @param  {string}    name [description]
       * @param  {string |    number}      value [description]
       * @return {this}           [description]
       */
      persistParam(name: string, value: string | number): this;

      /**
       * Registers a set of persistent path params.
       * @param  {string | any}         params [description]
       * @param  {string | number}      value  [description]
       * @return {this}        [description]
       */
      persistParams(params: string | any, value?: string | number): this;

      /**
       * Unset param by key.
       * @param  {string} name [description]
       * @return {this}      [description]
       */
      unsetParam(name: string): this;

      /**
       * Reset params, removing old values and defining new ones.
       * @param  {any}    params [description]
       * @return {this}        [description]
       */
      setParams(params: any): this;

      /**
       * Defines a query param by key and value.
       * @param  {string}    key [description]
       * @param  {string |   number}      value [description]
       * @return {this}          [description]
       */
      query(key: string, value: string | number): this;

      /**
       * Defines a query param by key and value.
       * @param  {string}    name [description]
       * @param  {string |    number}      value [description]
       * @return {this}           [description]
       */
      queryParam(name: string, value: string | number): this;

      /**
       * Unset a query param by key.
       * @param  {string} key [description]
       * @return {this}       [description]
       */
      unsetQuery(key: string): this;

      /**
       * Persists a query param by key and value.
       * @param  {string}    name [description]
       * @param  {string |    number}      value [description]
       * @return {this}           [description]
       */
      persistQueryParam(name: string, value: string | number): this;

      /**
       * Persists a set of query params.
       * @param  {any    | string}      query [description]
       * @param  {string | number}      value [description]
       * @return {this}        [description]
       */
      persistQuery(query: any | string, value?: string | number): this;
      persistQueryParams(query: any | string, value?: string | number): this;

      /**
       * Reset query params, removing old params and defining a new ones.
       * @param  {any}    query [description]
       * @return {[type]}       [description]
       */
      setQuery(query: any);

      /**
       * Sets a header field by name and value.
       * @param  {string}    name [description]
       * @param  {string |    number}      value [description]
       * @return {this}           [description]
       */
      set(name: string, value: string | number): this;
      header(name: string, value: string | number): this;

      /**
       * Removes a header field by name.
       * @param  {string} name [description]
       * @return {this}        [description]
       */
      unset(name: string): this;
      removeHeader(name: string): this;

      /**
       * Defines a set of headers.
       * @param  {any    | string}      headers [description]
       * @param  {string | number}      value   [description]
       * @return {this}        [description]
       */
      headers(headers: any | string, value?: string | number): this;

      /**
       * Reset headers, removing old fields and defining a new ones.
       * @param  {any}  headers [description]
       * @return {this}         [description]
       */
      setHeaders(headers: any): this;

      /**
       * Persist header by name and value.
       * @param  {string}    name [description]
       * @param  {string |    number}      value [description]
       * @return {this}           [description]
       */
      persistHeader(name: string, value: string | number): this;

      /**
       * Persist a set of headers.
       * @param  {any    | string}      headers [description]
       * @param  {string | number}      value   [description]
       * @return {this}        [description]
       */
      persistHeaders(headers: any | string, value?: string | number): this;

      /**
       * Defines request MIME content type format.
       * @param  {string} type [description]
       * @return {this}        [description]
       */
      format(type: string): this;

      /**
       * Defines the response MIME content type.
       * @param  {string} type [description]
       * @return {this}        [description]
       */
      type(type: string): this;
      mimeType(type: string): this;

      /**
       * Defines accept MIME content type header.
       * @param  {string} type [description]
       * @return {this}        [description]
       */
      accept(type: string): this;

      /**
       * Defines the request body payload.
       * @param  {any}    body [description]
       * @return {[type]}      [description]
       */
      send(body?: string | any): this;

      /**
       * Defines a cookie by name and value.
       * @param  {string}    name [description]
       * @param  {string |    number}      value [description]
       * @return {this}           [description]
       */
      cookie(name: string, value: string | number): this;

      /**
       * Deletes a cookie field by name.
       * @param  {string} name [description]
       * @return {this}        [description]
       */
      unsetCookie(name: string): this;

      /**
       * Defines the basic HTTP authentication based on user and password.
       * @param  {string} user     [description]
       * @param  {string} password [description]
       * @return {this}            [description]
       */
      auth(user: string, password: string): this;

      /**
       * Dispatches the current HTTP request generating a new network transaction.
       * @param  {Function} cb [description]
       * @return {this}        [description]
       */
      dispatch(cb: Function): this;

      /**
       * Ends the current HTTP request and triggers the network dispatcher.
       * @param  {Response.Handler} cb [description]
       * @return {this}        [description]
       */
      end(cb: Response.Handler): this;
      done(cb: Response.Handler): this;

      /**
       * Ends the current HTTP request and triggers the network dispatcher.
       * @param  {Function} success [description]
       * @param  {Function} error   [description]
       * @return {this}             [description]
       */
      then(success: Function, error: Function): this;

      /**
       * Defines a function to catch the error.
       * @param  {Function} error [description]
       * @return {this}           [description]
       */
      catch(error: Function): this;

      /**
       * Attaches a new writable stream as target.
       * @param  {any}  stream [description]
       * @return {this}        [description]
       */
      pipe(stream: any): this;

      /**
       * Attaches a body as readable stream source.
       * @param  {any}  stream [description]
       * @return {this}        [description]
       */
      stream(stream: any): this;
      bodyStream(stream: any): this;

      /**
       * Returns the request as raw mode object.
       * @return {any} [description]
       */
      raw(): any;

      /**
       * Clone the current request params and configuration.
       * @return {this} [description]
       */
      clone(): Request;

      /**
       * Creates a new request based on the existent one, optionally passing a custom context.
       * @param  {Context} ctx [description]
       * @return {this}        [description]
       */
      newRequest(ctx: Context): this;
    }

    namespace Request {
      interface Interceptor extends Middleware { }

      interface Validator extends Middleware { }

      interface Hook extends Middleware { }

      interface Evaluator extends Middleware { }

      interface Middleware {
        (request: Context, response: Response, next: Next): void;
      }

      interface Next {
        (err?: Error | string | 'intercept', data?: any): void;
      }
    }

    export class Response {
      req: Request & { opts: any; body: any; };
      store?: Store;
      client?: entities.Client;
      orig: any;
      type: string;
      error: any;
      headers: {};
      typeParams: {};
      status: number;
      statusType: number;
      statusCode: number;
      statusText: string;
      text: string;
      body: any;
      json: string;

      constructor(req: Request);

      /**
       * Defines agent-specific response object.
       * @param  {any}  orig [description]
       * @return {this}      [description]
       */
      setOriginalResponse(orig: any): this;

      /**
       * Defines response body data.
       * @param  {string} body [description]
       * @return {this}        [description]
       */
      setBody(body: string | any): this;

      /**
       * Defines response body data.
       * @param  {string} name [description]
       * @return {this}        [description]
       */
      get(name: string): string | number;

      /**
       * Defines response HTTP headers.
       * @param  {any}  headers [description]
       * @return {this}         [description]
       */
      setHeaders(headers: any): this;

      /**
       * Defines the response body content type.
       * @param  {string} contentType [description]
       * @return {this}               [description]
       */
      setType(contentType: string): this;

      /**
       * Defines the response status code with additional sugar fields.
       * @param  {number} status [description]
       * @return {this}          [description]
       */
      setStatus(status: number): this;

      /**
       * Defines the response status text.
       * @param  {string} text [description]
       * @return {this}        [description]
       */
      setStatusText(text: string): this;

      /**
       * Return a normalized error object.
       * @return {Error} [description]
       */
      toError(): Error;
    }

    namespace Response {
      interface Handler {
        (err?: Error, response?: Response): void;
      }

      interface Mapper {
        (body: any, next: Request.Next): void;
      }
    }

    class Context {
      body: string | any;
      stream: any;
      method: string;
      parent?: Context;
      opts: any;
      query: { [key: string]: string | number };
      params: { [key: string]: any };
      headers: { [key: string]: string | number };
      cookies: { [key: string]: string | number };
      persistent: any;
      agentOpts: { [key: string]: any };
      agent: Function;
      store: Store;
      middleware: MidwarePool;

      constructor(context?: Context);

      /**
       * Attaches a new entity as parent entity.
       * @param  {Context} context [description]
       * @return {this}            [description]
       */
      useParent(context: Context): this;

      /**
       * Returns the current context data as raw object.
       * @return {[type]} [description]
       */
      raw(): any;

      /**
       * Merges current context and parent context data.
       * @return {[type]} [description]
       */
      merge(): any;

      /**
       * Merge current context and parent path params.
       * @param  {Request} req [description]
       * @return {[type]}      [description]
       */
      renderParams(req: Request): any;

      /**
       * Creates another context inheriting data from the current instance.
       * @return {[type]} [description]
       */
      clone(): Context;

      /**
       * Builds the current path.
       * @return {[type]} [description]
       */
      buildPath();
    }

    /**
     * Store implements a simple hierarhical polymorfic data store,
     * also providing a convenient and handy interface to deal with stored data.
     */
    class Store {
      parent?: Store;
      map: any;

      constructor(store?: Store);

      /**
       * Get value looking by key in parent stores.
       * @param  {string} key [description]
       * @return {any}        [description]
       */
      getParent(key: string): any;

      /**
       * Get value looking by key in current and parent stores.
       * @param  {string} key [description]
       * @return {any}        [description]
       */
      get(key: string): any;

      /**
       * Set a value by key in current store.
       * @param  {string} key   [description]
       * @param  {any}    value [description]
       * @return {[type]}       [description]
       */
      set(key: string, value: any);

      /**
       * Set a value by key in the parent store.
       * @param  {string} key   [description]
       * @param  {any}    value [description]
       * @return {[type]}       [description]
       */
      setParent(key: string, value: any);

      /**
       * Attaches a new parent store.
       * @param  {string} key [description]
       * @return {[type]}     [description]
       */
      useParent(key: string);

      /**
       * Removes a key and value in the current store.
       * @param  {string} key [description]
       * @return {[type]}     [description]
       */
      remove(key: string);

      /**
       * Checks if the given key exists in current and parent stores.
       * @param  {string} key [description]
       * @return {any}        [description]
       */
      has(key: string): any;
    }

    class Base {
      parent?: Base;
      publicClient?: any;
      plugins: any[];
      ctx: Context;

      constructor(context?: Context);

      /**
       * Attaches a parent object to the current instance.
       * @param  {T}   parent [description]
       * @return {[type]}        [description]
       */
      useParent<T extends Base>(parent: T): this;

      /**
       * Extend options object.
       * @return {[type]} [description]
       */
      options(opts: any): this;

      /**
       * Force to persist given options.
       * They won't be overwritten.
       * @return {[type]} [description]
       */
      persistOptions(opts: any): this;

      /**
       * Attaches a middleware function to the incoming request phase.
       * @param  {Request.Middleware} middleware [description]
       * @return {this}                [description]
       */
      use(middleware: Request.Middleware): this;
      useRequest(middleware: Request.Middleware): this;

      /**
       * Attaches a middleware function to the request phase, limited
       * to the current entity phase, meaning other entities
       * won't trigger this middleware.
       * @param  {Request.Middleware} middleware [description]
       * @return {this}                [description]
       */
      useEntity(middleware: Request.Middleware): this;
      useEntityRequest(middleware: Request.Middleware): this;

      /**
       * Attaches a middleware function to the response phase.
       * @param  {Request.Middleware} middleware [description]
       * @return {this}                [description]
       */
      useResponse(middleware: Request.Middleware): this;

      /**
       * Attaches a middleware function to the response phase, limited
       * to the current entity phase, meaning other entities
       * won't trigger this middleware.
       * @param  {Request.Middleware} middleware [description]
       * @return {this}                [description]
       */
      useEntityResponse(middleware: Request.Middleware): this;

      /**
       * Attaches a simple response function listener.
       * @param  {Function} handler [description]
       * @return {this}             [description]
       */
      handle(handler: (res: Response, req: Request) => void): this;
      response(handler: (res: Response, req: Request) => void): this;

      /**
       * Attach an observer middleware function to the before request phase.
       * @param  {Request.Middleware} middleware [description]
       * @return {this}                [description]
       */
      before(middleware: Request.Middleware): this;

      /**
       * Attach an observer middleware function to the after request phase.
       * @param  {Request.Middleware} middleware [description]
       * @return {this}                [description]
       */
      after(middleware: Request.Middleware): this;

      /**
       * Attach a request validator middleware function.
       * @param  {Request.Validator} middleware [description]
       * @return {this}                [description]
       */
      validator(middleware: Request.Validator): this;
      requestValidator(middleware: Request.Validator): this;

      /**
       * Attach a response validator middleware function to the request phase.
       * @param  {Request.Validator} middleware [description]
       * @return {this}                [description]
       */
      responseValidator(middleware: Request.Validator): this;

      /**
       * Attach an entity specific validator middleware
       * function to the request phase.
       * @param  {Request.Validator} middleware [description]
       * @return {this}                [description]
       */
      entityResponseValidator(middleware: Request.Validator): this;

      /**
       * Attach a request interceptor middleware function
       * @param  {Request.Interceptor} interceptor [description]
       * @return {this}                 [description]
       */
      interceptor(interceptor: Request.Interceptor): this;

      /**
       * Attach a request interceptor middleware function limited
       * to the scope of the current entity.
       * @param  {Request.Interceptor} interceptor [description]
       * @return {this}                 [description]
       */
      entityInterceptor(interceptor: Request.Interceptor): this;

      /**
       * Attach a request evaluator strategy in order to detemine
       * if the current request was failed or not.
       * @param  {Request.Evaluator} evaluator [description]
       * @return {this}               [description]
       */
      evlauator(evaluator: Request.Evaluator): this;

      /**
       * Attach a request evaluator strategy in order to detemine
       * if the current request was failed or not limited to the
       * scope of the current entity.
       * @param  {Request.Evaluator} evaluator [description]
       * @return {this}               [description]
       */
      entityEvlauator(evaluator: Request.Evaluator): this;

      /**
       * Test if the given request params are valid or not, executing the
       * evaluator pool. Callback will be resolved with error or boolean.
       * @param  {Request.Validator} callback [description]
       * @return {this}              [description]
       */
      validate(callback: Request.Validator): this;

      /**
       * Attach a new observer middleware hook to a custom phase.
       * @param  {string}   phase [description]
       * @param  {Request.Hook} hook  [description]
       * @return {this}           [description]
       */
      observe(phase: string, hook: Request.Hook): this;

      /**
       * Attach a new observer middleware hook to a custom phase
       * limited to the scope of the current entity.
       * @param  {string}   phase [description]
       * @param  {Request.Hook} hook  [description]
       * @return {this}           [description]
       */
      observeEntity(phase: string, hook: Request.Hook): this;

      /**
       * Attach a new plugin.
       * @param  {Function} plugin [description]
       * @return {this}            [description]
       */
      plugin(plugin: Function): this;
      usePlugin(plugin: Function): this;

      /**
       * Retrieve a plugin searching by name or function reference.
       * @param  {string | Function}    search [description]
       * @return {this}        [description]
       */
      getPlugin(search: string | Function): Function;

      /**
       * Bind body to a given model.
       * @param  {Function} model [description]
       * @return {this}           [description]
       */
      model(model: Function): this;

      /**
       * Bind a function to map/modify/transform response body.
       * @param  {Response.Mapper} mapper [description]
       * @return {this}            [description]
       */
      map(mapper: Response.Mapper): this;
      bodyMap(mapper: Response.Mapper): this;

      /**
       * Set the HTTP agent adapter to be used for network dialing.
       * @param  {string | Function}    agent [description]
       * @return {this}        [description]
       */
      agent(agent: string | Function): this;

      /**
       * Extend the HTTP agent specific options to be used when calling the adapter.
       * @param  {any}    opts [description]
       * @return {[type]}      [description]
       */
      agentOpts(opts: any): this;

      /**
       * Set the HTTP agent specific options to be used when calling the adapter.
       * @param  {any}  opts [description]
       * @return {this}      [description]
       */
      setAgentOpts(opts: any): this;

      /**
       * Set persistent HTTP agent specific options.
       * @param  {any}  opts [description]
       * @return {this}      [description]
       */
      persistentAgentOpts(opts: any): this;

      /**
       * Retrieve the current context store instance.
       * @return {Store} [description]
       */
      getStore(): Store;

      /**
       * Retrieve the root parent entity.
       * @return {this} [description]
       */
      getRoot(): this;

      /**
       * Retrieve the public API engine client.
       * @return {entities.Client} [description]
       */
      getApi(): entities.Client;

      /**
       * Retrieve the entity hierarchy based on the parent entities.
       * @return {string} [description]
       */
      getEntityHierarchy(): string;
    }

    class Dispatcher {
      /**
       * Trigger the before phase.
       * @param {Request}  req  [description]
       * @param {Response} res  [description]
       * @param {Function} next [description]
       */
      before: Request.Middleware;

      /**
       * Trigger the after phase.
       * @param {Request}  req  [description]
       * @param {Response} res  [description]
       * @param {Function} next [description]
       */
      after: Request.Middleware;

      /**
       * Trigger the network dialing phase.
       * @param {Request}  req  [description]
       * @param {Response} res  [description]
       * @param {Function} next [description]
       */
      dial: Request.Middleware;

      /**
       * Performs HTTP network dialing.
       * @param {Request}  req  [description]
       * @param {Response} res  [description]
       * @param {Function} next [description]
       */
      doDial: Request.Middleware;

      constructor(req: Request);

      /**
       * Trigger the dispatcher process for the current request.
       * @param  {Function} cb [description]
       * @return {Request}     [description]
       */
      run(cb: Function): Request;

      /**
       * Runs a custom hook by event name.
       * @param {string}   event [description]
       * @param {Request}  req   [description]
       * @param {Response} res   [description]
       * @param {Function} next  [description]
       */
      runHook(event: string, req: Request, res: Response, next: Request.Next): void;

      /**
       * Runs a custom hook phase by name.
       * @param {string}   phase [description]
       * @param {Request}  req   [description]
       * @param {Response} res   [description]
       * @param {Function} next  [description]
       */
      runPhase(phase: string, req: Request, res: Response, next: Request.Next): void;

      /**
       * Runs a custom middleware stack by name.
       * @param {string}   stack [description]
       * @param {string}   phase [description]
       * @param {Request}  req   [description]
       * @param {Response} res   [description]
       * @param {Function} next  [description]
       */
      runStack(stack: string, phase: string, req: Request, res: Response, next: Request.Next): void;

      /**
       * Runs a middleware stack by entity name.
       * @param {string}   entity [description]
       * @param {Request}  req    [description]
       * @param {Response} res    [description]
       * @param {Function} next   [description]
       */
      runEntity(entity: string, req: Request, res: Response, next: Request.Next): void;

      /**
       * Runs a context middleware stack by name.
       * @param {string}   entity [description]
       * @param {Request}  req    [description]
       * @param {Response} res    [description]
       * @param {Function} next   [description]
       */
      runMiddleware(entity: string, req: Request, res: Response, next: Request.Next): void;
    }

    /**
     * API to manage HTTP agents adapters.
     */
    export const agents: {
      /**
       * Map of agents by name and adapter function.
       */
      agents: { [name: string]: Function };
      /**
       * Retrieve the default HTTP agent adapter bases on the runtime environment.
       * @return {Function} [description]
       */
      defaults(): Function;
      /**
       * Retrieve an HTTP agent adapter by name.
       * @param  {string}   name [description]
       * @return {Function}      [description]
       */
      get(name: string): Function;
      /**
       * Register a new HTTP agent adapter by name.
       * @param {string}   name  [description]
       * @param {Function} agent [description]
       */
      add(name: string, agent: Function): void;
      /**
       * Set an HTTP agent to be used by default. All the HTTP traffic will be handled by this agent.
       * @param {Function} agent [description]
       */
      set(agent: Function): void;
      remove(name: string): void;
    };

    namespace engine {
      class Client extends Base {
        doRequest(ctx: Context, cb: Function): any;

        newRequest(entity: entities.Entity): any;

        GET(opts: any, cb: Function): any;
        POST(opts: any, cb: Function): any;
        PUT(opts: any, cb: Function): any;
        PATCH(opts: any, cb: Function): any;
        DELETE(opts: any, cb: Function): any;
        HEAD(opts: any, cb: Function): any;
        TRACE(opts: any, cb: Function): any;
        OPTIONS(opts: any, cb: Function): any;
      }
    }

    namespace entities {
      class Client extends Entity {

        set(key: string, version: string): this;

        basePath(path: string): this;

        type(contentType: string): this;
      }
      class Collection extends Entity {
        entity: 'collection';
      }
      class Resource extends Entity {
        entity: 'resource';
      }
      class Mixin extends Entity {
        entity: 'mixin';

        constructor(name: string | void, mixin: Function);
      }
      class Entity extends Request {
        name: string;
        aliases: string[];
        entities: Entity[];
        decorators: Function[];

        /**
         * Defines an entity alias by name.
         * @param  {string[]} ...aliases [description]
         * @return {this}                [description]
         */
        alias(...aliases: string[]): this;

        /**
         * Attaches a child collection to the current entity.
         * @param  {string         | Entity.Collection} collection [description]
         * @return {Entity.Collection}   [description]
         */
        collection(collection: string | Collection): Collection;

        /**
         * Attaches a child resource to the current entity.
         * @param  {string       | Entity.Resource} resource [description]
         * @return {Entity.Resource}   [description]
         */
        action(resource: string | Resource): Resource;
        resource(resource: string | Resource): Resource;

        /**
         * Attaches a child mixin to the current entity.
         * @param  {string} name [description]
         * @param  {any |    Entity.Mixin} mixin [description]
         * @return {Entity}      [description]
         */
        mixin(name: string, mixin: any | Mixin): Entity;
        helper(name: string, mixin: any | Mixin): Entity;

        /**
         * Registers a new entity instance as child entity.
         * @param  {Entity} entity [description]
         * @return {Entity}        [description]
         */
        addEntity(entity: Entity): Entity;

        /**
         * Finds a collection type entity as child entities in the current entity.
         * @param  {string} name [description]
         * @return {[type]}      [description]
         */
        getCollection(name: string): Collection;
        findCollection(name: string): Collection;

        /**
         * Finds a resource type entity as child entities in the current entity.
         * @param  {string} name [description]
         * @return {Entity}      [description]
         */
        getAction(name: string): Resource;
        getResource(name: string): Resource;
        findResource(name: string): Resource;

        /**
         * Finds a mixin type entity as child entities in the current entity.
         * @param  {string} name [description]
         * @return {Entity}      [description]
         */
        getMixin(name: string): Mixin;
        findMixin(name: string): Mixin;

        /**
         * Uses a custom constructor function for the current entity.
         * @param  {Function} fn [description]
         * @return {[type]}      [description]
         */
        useConstructor(fn: Function): this;

        /**
         * Decorate current entity constructor.
         * @param  {Function} decorator [description]
         * @return {this}               [description]
         */
        decorate(decorator: Function): this;
        decorator(decorator: Function): this;

        /**
         * Attaches meta data to the current entity.
         * Designed for future use cases and documentation purposes.
         * @param  {any}  meta [description]
         * @return {this}      [description]
         */
        meta(meta: any): this;

        /**
         * Extend entity custom prototype chain.
         * Useful for composition and behavior extensibility by API developers.
         * @param  {string |     any}         prop [description]
         * @param  {any}       value [description]
         * @return {this}            [description]
         */
        extend(prop: string | any, value: any): this;

        /**
         * Renders the current and parent entities.
         * This method is used internally.
         * @param  {Client} client [description]
         * @return {Entity}        [description]
         */
        render<T>(client?: Client): T;

        /**
         * Renders the current entity and its child entities.
         * This method is used internally.
         * @param  {Client} client [description]
         * @return {Entity}        [description]
         */
        renderEntity<T>(client?: Client): T;

        /**
         * Clone the current entity, saving its context and configuration data.
         * @return {this} [description]
         */
        clone(): this;
      }
    }
  }

  interface Theon {
    /**
     * Creates a new client entity
     * @param  {string}                name [description]
     * @return {Theon.entities.Client}      [description]
     */
    client(name: string): Theon.entities.Client;

    /**
     * Creates a new resource entity
     * @param  {string}                  name [description]
     * @return {Theon.entities.Resource}      [description]
     */
    resource(name: string): Theon.entities.Resource;

    /**
     * Creates a new collection entity
     * @param  {string}                    name [description]
     * @return {Theon.entities.Collection}      [description]
     */
    collection(name: string): Theon.entities.Collection;

    /**
     * Creates a new mixin entity
     * @param  {string}               name [description]
     * @return {Theon.entities.Mixin}      [description]
     */
    mixin(name: string): Theon.entities.Mixin;
  }

  /**
   * Creates a new Theon API client
   * @param  {string}                url [description]
   * @return {Theon.entities.Client}     [description]
   */
  function Theon(url?: string): Theon.entities.Client;

  export = Theon;
}
