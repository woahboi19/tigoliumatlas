(() => {
  // node_modules/workbox-core/_version.js
  try {
    self["workbox:core:7.2.0"] && _();
  } catch (e) {
  }

  // node_modules/workbox-core/models/messages/messages.js
  var messages = {
    "invalid-value": ({ paramName, validValueDescription, value }) => {
      if (!paramName || !validValueDescription) {
        throw new Error(`Unexpected input to 'invalid-value' error.`);
      }
      return `The '${paramName}' parameter was given a value with an unexpected value. ${validValueDescription} Received a value of ${JSON.stringify(value)}.`;
    },
    "not-an-array": ({ moduleName, className, funcName, paramName }) => {
      if (!moduleName || !className || !funcName || !paramName) {
        throw new Error(`Unexpected input to 'not-an-array' error.`);
      }
      return `The parameter '${paramName}' passed into '${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    "incorrect-type": ({ expectedType, paramName, moduleName, className, funcName }) => {
      if (!expectedType || !paramName || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'incorrect-type' error.`);
      }
      const classNameStr = className ? `${className}.` : "";
      return `The parameter '${paramName}' passed into '${moduleName}.${classNameStr}${funcName}()' must be of type ${expectedType}.`;
    },
    "incorrect-class": ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
      if (!expectedClassName || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'incorrect-class' error.`);
      }
      const classNameStr = className ? `${className}.` : "";
      if (isReturnValueProblem) {
        return `The return value from '${moduleName}.${classNameStr}${funcName}()' must be an instance of class ${expectedClassName}.`;
      }
      return `The parameter '${paramName}' passed into '${moduleName}.${classNameStr}${funcName}()' must be an instance of class ${expectedClassName}.`;
    },
    "missing-a-method": ({ expectedMethod, paramName, moduleName, className, funcName }) => {
      if (!expectedMethod || !paramName || !moduleName || !className || !funcName) {
        throw new Error(`Unexpected input to 'missing-a-method' error.`);
      }
      return `${moduleName}.${className}.${funcName}() expected the '${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    "add-to-cache-list-unexpected-type": ({ entry }) => {
      return `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(entry)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`;
    },
    "add-to-cache-list-conflicting-entries": ({ firstEntry, secondEntry }) => {
      if (!firstEntry || !secondEntry) {
        throw new Error(`Unexpected input to 'add-to-cache-list-duplicate-entries' error.`);
      }
      return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${firstEntry} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
    },
    "plugin-error-request-will-fetch": ({ thrownErrorMessage }) => {
      if (!thrownErrorMessage) {
        throw new Error(`Unexpected input to 'plugin-error-request-will-fetch', error.`);
      }
      return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${thrownErrorMessage}'.`;
    },
    "invalid-cache-name": ({ cacheNameId, value }) => {
      if (!cacheNameId) {
        throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
      }
      return `You must provide a name containing at least one character for setCacheDetails({${cacheNameId}: '...'}). Received a value of '${JSON.stringify(value)}'`;
    },
    "unregister-route-but-not-found-with-method": ({ method }) => {
      if (!method) {
        throw new Error(`Unexpected input to 'unregister-route-but-not-found-with-method' error.`);
      }
      return `The route you're trying to unregister was not  previously registered for the method type '${method}'.`;
    },
    "unregister-route-route-not-registered": () => {
      return `The route you're trying to unregister was not previously registered.`;
    },
    "queue-replay-failed": ({ name }) => {
      return `Replaying the background sync queue '${name}' failed.`;
    },
    "duplicate-queue-name": ({ name }) => {
      return `The Queue name '${name}' is already being used. All instances of backgroundSync.Queue must be given unique names.`;
    },
    "expired-test-without-max-age": ({ methodName, paramName }) => {
      return `The '${methodName}()' method can only be used when the '${paramName}' is used in the constructor.`;
    },
    "unsupported-route-type": ({ moduleName, className, funcName, paramName }) => {
      return `The supplied '${paramName}' parameter was an unsupported type. Please check the docs for ${moduleName}.${className}.${funcName} for valid input types.`;
    },
    "not-array-of-class": ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
      return `The supplied '${paramName}' parameter must be an array of '${expectedClass}' objects. Received '${JSON.stringify(value)},'. Please check the call to ${moduleName}.${className}.${funcName}() to fix the issue.`;
    },
    "max-entries-or-age-required": ({ moduleName, className, funcName }) => {
      return `You must define either config.maxEntries or config.maxAgeSecondsin ${moduleName}.${className}.${funcName}`;
    },
    "statuses-or-headers-required": ({ moduleName, className, funcName }) => {
      return `You must define either config.statuses or config.headersin ${moduleName}.${className}.${funcName}`;
    },
    "invalid-string": ({ moduleName, funcName, paramName }) => {
      if (!paramName || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'invalid-string' error.`);
      }
      return `When using strings, the '${paramName}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${moduleName}.${funcName}() for more info.`;
    },
    "channel-name-required": () => {
      return `You must provide a channelName to construct a BroadcastCacheUpdate instance.`;
    },
    "invalid-responses-are-same-args": () => {
      return `The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.`;
    },
    "expire-custom-caches-only": () => {
      return `You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.`;
    },
    "unit-must-be-bytes": ({ normalizedRangeHeader }) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
      }
      return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "single-range-only": ({ normalizedRangeHeader }) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'single-range-only' error.`);
      }
      return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "invalid-range-values": ({ normalizedRangeHeader }) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'invalid-range-values' error.`);
      }
      return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "no-range-header": () => {
      return `No Range header was found in the Request provided.`;
    },
    "range-not-satisfiable": ({ size, start, end }) => {
      return `The start (${start}) and end (${end}) values in the Range are not satisfiable by the cached response, which is ${size} bytes.`;
    },
    "attempt-to-cache-non-get-request": ({ url, method }) => {
      return `Unable to cache '${url}' because it is a '${method}' request and only 'GET' requests can be cached.`;
    },
    "cache-put-with-no-response": ({ url }) => {
      return `There was an attempt to cache '${url}' but the response was not defined.`;
    },
    "no-response": ({ url, error }) => {
      let message = `The strategy could not generate a response for '${url}'.`;
      if (error) {
        message += ` The underlying error is ${error}.`;
      }
      return message;
    },
    "bad-precaching-response": ({ url, status }) => {
      return `The precaching request for '${url}' failed` + (status ? ` with an HTTP status of ${status}.` : `.`);
    },
    "non-precached-url": ({ url }) => {
      return `createHandlerBoundToURL('${url}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`;
    },
    "add-to-cache-list-conflicting-integrities": ({ url }) => {
      return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${url} with different integrity values. Please remove one of them.`;
    },
    "missing-precache-entry": ({ cacheName, url }) => {
      return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    "cross-origin-copy-response": ({ origin }) => {
      return `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${origin}.`;
    },
    "opaque-streams-source": ({ type }) => {
      const message = `One of the workbox-streams sources resulted in an '${type}' response.`;
      if (type === "opaqueredirect") {
        return `${message} Please do not use a navigation request that results in a redirect as a source.`;
      }
      return `${message} Please ensure your sources are CORS-enabled.`;
    }
  };

  // node_modules/workbox-core/models/messages/messageGenerator.js
  var generatorFunction = (code, details = {}) => {
    const message = messages[code];
    if (!message) {
      throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
  };
  var messageGenerator = false ? fallback : generatorFunction;

  // node_modules/workbox-core/_private/WorkboxError.js
  var WorkboxError = class extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
      const message = messageGenerator(errorCode, details);
      super(message);
      this.name = errorCode;
      this.details = details;
    }
  };

  // node_modules/workbox-core/_private/assert.js
  var isArray = (value, details) => {
    if (!Array.isArray(value)) {
      throw new WorkboxError("not-an-array", details);
    }
  };
  var hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== "function") {
      details["expectedMethod"] = expectedMethod;
      throw new WorkboxError("missing-a-method", details);
    }
  };
  var isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
      details["expectedType"] = expectedType;
      throw new WorkboxError("incorrect-type", details);
    }
  };
  var isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
      details["expectedClassName"] = expectedClass.name;
      throw new WorkboxError("incorrect-class", details);
    }
  };
  var isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
      details["validValueDescription"] = `Valid values are ${JSON.stringify(validValues)}.`;
      throw new WorkboxError("invalid-value", details);
    }
  };
  var isArrayOfClass = (value, expectedClass, details) => {
    const error = new WorkboxError("not-array-of-class", details);
    if (!Array.isArray(value)) {
      throw error;
    }
    for (const item of value) {
      if (!(item instanceof expectedClass)) {
        throw error;
      }
    }
  };
  var finalAssertExports = false ? null : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass
  };

  // node_modules/workbox-core/_private/cacheNames.js
  var _cacheNameDetails = {
    googleAnalytics: "googleAnalytics",
    precache: "precache-v2",
    prefix: "workbox",
    runtime: "runtime",
    suffix: typeof registration !== "undefined" ? registration.scope : ""
  };
  var _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter((value) => value && value.length > 0).join("-");
  };
  var eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
      fn(key);
    }
  };
  var cacheNames = {
    updateDetails: (details) => {
      eachCacheNameDetail((key) => {
        if (typeof details[key] === "string") {
          _cacheNameDetails[key] = details[key];
        }
      });
    },
    getGoogleAnalyticsName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
      return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
      return _cacheNameDetails.suffix;
    }
  };

  // node_modules/workbox-core/_private/logger.js
  var logger = false ? null : (() => {
    if (!("__WB_DISABLE_DEV_LOGS" in globalThis)) {
      self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
      debug: `#7f8c8d`,
      log: `#2ecc71`,
      warn: `#f39c12`,
      error: `#c0392b`,
      groupCollapsed: `#3498db`,
      groupEnd: null
      // No colored prefix on groupEnd
    };
    const print = function(method, args) {
      if (self.__WB_DISABLE_DEV_LOGS) {
        return;
      }
      if (method === "groupCollapsed") {
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
          console[method](...args);
          return;
        }
      }
      const styles = [
        `background: ${methodToColorMap[method]}`,
        `border-radius: 0.5em`,
        `color: white`,
        `font-weight: bold`,
        `padding: 2px 0.5em`
      ];
      const logPrefix = inGroup ? [] : ["%cworkbox", styles.join(";")];
      console[method](...logPrefix, ...args);
      if (method === "groupCollapsed") {
        inGroup = true;
      }
      if (method === "groupEnd") {
        inGroup = false;
      }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
      const method = key;
      api[method] = (...args) => {
        print(method, args);
      };
    }
    return api;
  })();

  // node_modules/workbox-core/_private/waitUntil.js
  function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
  }

  // node_modules/workbox-precaching/_version.js
  try {
    self["workbox:precaching:7.2.0"] && _();
  } catch (e) {
  }

  // node_modules/workbox-precaching/utils/createCacheKey.js
  var REVISION_SEARCH_PARAM = "__WB_REVISION__";
  function createCacheKey(entry) {
    if (!entry) {
      throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
    }
    if (typeof entry === "string") {
      const urlObject = new URL(entry, location.href);
      return {
        cacheKey: urlObject.href,
        url: urlObject.href
      };
    }
    const { revision, url } = entry;
    if (!url) {
      throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
    }
    if (!revision) {
      const urlObject = new URL(url, location.href);
      return {
        cacheKey: urlObject.href,
        url: urlObject.href
      };
    }
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
      cacheKey: cacheKeyURL.href,
      url: originalURL.href
    };
  }

  // node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js
  var PrecacheInstallReportPlugin = class {
    constructor() {
      this.updatedURLs = [];
      this.notUpdatedURLs = [];
      this.handlerWillStart = async ({ request, state }) => {
        if (state) {
          state.originalRequest = request;
        }
      };
      this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse }) => {
        if (event.type === "install") {
          if (state && state.originalRequest && state.originalRequest instanceof Request) {
            const url = state.originalRequest.url;
            if (cachedResponse) {
              this.notUpdatedURLs.push(url);
            } else {
              this.updatedURLs.push(url);
            }
          }
        }
        return cachedResponse;
      };
    }
  };

  // node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js
  var PrecacheCacheKeyPlugin = class {
    constructor({ precacheController: precacheController2 }) {
      this.cacheKeyWillBeUsed = async ({ request, params }) => {
        const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) || this._precacheController.getCacheKeyForURL(request.url);
        return cacheKey ? new Request(cacheKey, { headers: request.headers }) : request;
      };
      this._precacheController = precacheController2;
    }
  };

  // node_modules/workbox-precaching/utils/printCleanupDetails.js
  var logGroup = (groupTitle, deletedURLs) => {
    logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
      logger.log(url);
    }
    logger.groupEnd();
  };
  function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
      logger.groupCollapsed(`During precaching cleanup, ${deletionCount} cached request${deletionCount === 1 ? " was" : "s were"} deleted.`);
      logGroup("Deleted Cache Requests", deletedURLs);
      logger.groupEnd();
    }
  }

  // node_modules/workbox-precaching/utils/printInstallDetails.js
  function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
      return;
    }
    logger.groupCollapsed(groupTitle);
    for (const url of urls) {
      logger.log(url);
    }
    logger.groupEnd();
  }
  function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
      let message = `Precaching ${precachedCount} file${precachedCount === 1 ? "" : "s"}.`;
      if (alreadyPrecachedCount > 0) {
        message += ` ${alreadyPrecachedCount} file${alreadyPrecachedCount === 1 ? " is" : "s are"} already cached.`;
      }
      logger.groupCollapsed(message);
      _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
      _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
      logger.groupEnd();
    }
  }

  // node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js
  var supportStatus;
  function canConstructResponseFromBodyStream() {
    if (supportStatus === void 0) {
      const testResponse = new Response("");
      if ("body" in testResponse) {
        try {
          new Response(testResponse.body);
          supportStatus = true;
        } catch (error) {
          supportStatus = false;
        }
      }
      supportStatus = false;
    }
    return supportStatus;
  }

  // node_modules/workbox-core/copyResponse.js
  async function copyResponse(response, modifier) {
    let origin = null;
    if (response.url) {
      const responseURL = new URL(response.url);
      origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
      throw new WorkboxError("cross-origin-copy-response", { origin });
    }
    const clonedResponse = response.clone();
    const responseInit = {
      headers: new Headers(clonedResponse.headers),
      status: clonedResponse.status,
      statusText: clonedResponse.statusText
    };
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    const body = canConstructResponseFromBodyStream() ? clonedResponse.body : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
  }

  // node_modules/workbox-core/_private/getFriendlyURL.js
  var getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
  };

  // node_modules/workbox-core/_private/cacheMatchIgnoreParams.js
  function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
      strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
  }
  async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    if (request.url === strippedRequestURL) {
      return cache.match(request, matchOptions);
    }
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
      const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
      if (strippedRequestURL === strippedCacheKeyURL) {
        return cache.match(cacheKey, matchOptions);
      }
    }
    return;
  }

  // node_modules/workbox-core/_private/Deferred.js
  var Deferred = class {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    }
  };

  // node_modules/workbox-core/models/quotaErrorCallbacks.js
  var quotaErrorCallbacks = /* @__PURE__ */ new Set();

  // node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
  async function executeQuotaErrorCallbacks() {
    if (true) {
      logger.log(`About to run ${quotaErrorCallbacks.size} callbacks to clean up caches.`);
    }
    for (const callback of quotaErrorCallbacks) {
      await callback();
      if (true) {
        logger.log(callback, "is complete.");
      }
    }
    if (true) {
      logger.log("Finished running callbacks.");
    }
  }

  // node_modules/workbox-core/_private/timeout.js
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // node_modules/workbox-strategies/_version.js
  try {
    self["workbox:strategies:7.2.0"] && _();
  } catch (e) {
  }

  // node_modules/workbox-strategies/StrategyHandler.js
  function toRequest(input) {
    return typeof input === "string" ? new Request(input) : input;
  }
  var StrategyHandler = class {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
      this._cacheKeys = {};
      if (true) {
        finalAssertExports.isInstance(options.event, ExtendableEvent, {
          moduleName: "workbox-strategies",
          className: "StrategyHandler",
          funcName: "constructor",
          paramName: "options.event"
        });
      }
      Object.assign(this, options);
      this.event = options.event;
      this._strategy = strategy;
      this._handlerDeferred = new Deferred();
      this._extendLifetimePromises = [];
      this._plugins = [...strategy.plugins];
      this._pluginStateMap = /* @__PURE__ */ new Map();
      for (const plugin of this._plugins) {
        this._pluginStateMap.set(plugin, {});
      }
      this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
      const { event } = this;
      let request = toRequest(input);
      if (request.mode === "navigate" && event instanceof FetchEvent && event.preloadResponse) {
        const possiblePreloadResponse = await event.preloadResponse;
        if (possiblePreloadResponse) {
          if (true) {
            logger.log(`Using a preloaded navigation response for '${getFriendlyURL(request.url)}'`);
          }
          return possiblePreloadResponse;
        }
      }
      const originalRequest = this.hasCallback("fetchDidFail") ? request.clone() : null;
      try {
        for (const cb of this.iterateCallbacks("requestWillFetch")) {
          request = await cb({ request: request.clone(), event });
        }
      } catch (err) {
        if (err instanceof Error) {
          throw new WorkboxError("plugin-error-request-will-fetch", {
            thrownErrorMessage: err.message
          });
        }
      }
      const pluginFilteredRequest = request.clone();
      try {
        let fetchResponse;
        fetchResponse = await fetch(request, request.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
        if (true) {
          logger.debug(`Network request for '${getFriendlyURL(request.url)}' returned a response with status '${fetchResponse.status}'.`);
        }
        for (const callback of this.iterateCallbacks("fetchDidSucceed")) {
          fetchResponse = await callback({
            event,
            request: pluginFilteredRequest,
            response: fetchResponse
          });
        }
        return fetchResponse;
      } catch (error) {
        if (true) {
          logger.log(`Network request for '${getFriendlyURL(request.url)}' threw an error.`, error);
        }
        if (originalRequest) {
          await this.runCallbacks("fetchDidFail", {
            error,
            event,
            originalRequest: originalRequest.clone(),
            request: pluginFilteredRequest.clone()
          });
        }
        throw error;
      }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
      const response = await this.fetch(input);
      const responseClone = response.clone();
      void this.waitUntil(this.cachePut(input, responseClone));
      return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillBeUsed()
     * - cachedResponseWillBeUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
      const request = toRequest(key);
      let cachedResponse;
      const { cacheName, matchOptions } = this._strategy;
      const effectiveRequest = await this.getCacheKey(request, "read");
      const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
      cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
      if (true) {
        if (cachedResponse) {
          logger.debug(`Found a cached response in '${cacheName}'.`);
        } else {
          logger.debug(`No cached response found in '${cacheName}'.`);
        }
      }
      for (const callback of this.iterateCallbacks("cachedResponseWillBeUsed")) {
        cachedResponse = await callback({
          cacheName,
          matchOptions,
          cachedResponse,
          request: effectiveRequest,
          event: this.event
        }) || void 0;
      }
      return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillBeUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
      const request = toRequest(key);
      await timeout(0);
      const effectiveRequest = await this.getCacheKey(request, "write");
      if (true) {
        if (effectiveRequest.method && effectiveRequest.method !== "GET") {
          throw new WorkboxError("attempt-to-cache-non-get-request", {
            url: getFriendlyURL(effectiveRequest.url),
            method: effectiveRequest.method
          });
        }
        const vary = response.headers.get("Vary");
        if (vary) {
          logger.debug(`The response for ${getFriendlyURL(effectiveRequest.url)} has a 'Vary: ${vary}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`);
        }
      }
      if (!response) {
        if (true) {
          logger.error(`Cannot cache non-existent response for '${getFriendlyURL(effectiveRequest.url)}'.`);
        }
        throw new WorkboxError("cache-put-with-no-response", {
          url: getFriendlyURL(effectiveRequest.url)
        });
      }
      const responseToCache = await this._ensureResponseSafeToCache(response);
      if (!responseToCache) {
        if (true) {
          logger.debug(`Response '${getFriendlyURL(effectiveRequest.url)}' will not be cached.`, responseToCache);
        }
        return false;
      }
      const { cacheName, matchOptions } = this._strategy;
      const cache = await self.caches.open(cacheName);
      const hasCacheUpdateCallback = this.hasCallback("cacheDidUpdate");
      const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(
        // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
        // feature. Consider into ways to only add this behavior if using
        // precaching.
        cache,
        effectiveRequest.clone(),
        ["__WB_REVISION__"],
        matchOptions
      ) : null;
      if (true) {
        logger.debug(`Updating the '${cacheName}' cache with a new Response for ${getFriendlyURL(effectiveRequest.url)}.`);
      }
      try {
        await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "QuotaExceededError") {
            await executeQuotaErrorCallbacks();
          }
          throw error;
        }
      }
      for (const callback of this.iterateCallbacks("cacheDidUpdate")) {
        await callback({
          cacheName,
          oldResponse,
          newResponse: responseToCache.clone(),
          request: effectiveRequest,
          event: this.event
        });
      }
      return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
      const key = `${request.url} | ${mode}`;
      if (!this._cacheKeys[key]) {
        let effectiveRequest = request;
        for (const callback of this.iterateCallbacks("cacheKeyWillBeUsed")) {
          effectiveRequest = toRequest(await callback({
            mode,
            request: effectiveRequest,
            event: this.event,
            // params has a type any can't change right now.
            params: this.params
            // eslint-disable-line
          }));
        }
        this._cacheKeys[key] = effectiveRequest;
      }
      return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
      for (const plugin of this._strategy.plugins) {
        if (name in plugin) {
          return true;
        }
      }
      return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
      for (const callback of this.iterateCallbacks(name)) {
        await callback(param);
      }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
      for (const plugin of this._strategy.plugins) {
        if (typeof plugin[name] === "function") {
          const state = this._pluginStateMap.get(plugin);
          const statefulCallback = (param) => {
            const statefulParam = Object.assign(Object.assign({}, param), { state });
            return plugin[name](statefulParam);
          };
          yield statefulCallback;
        }
      }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
      this._extendLifetimePromises.push(promise);
      return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
      let promise;
      while (promise = this._extendLifetimePromises.shift()) {
        await promise;
      }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
      this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
      let responseToCache = response;
      let pluginsUsed = false;
      for (const callback of this.iterateCallbacks("cacheWillUpdate")) {
        responseToCache = await callback({
          request: this.request,
          response: responseToCache,
          event: this.event
        }) || void 0;
        pluginsUsed = true;
        if (!responseToCache) {
          break;
        }
      }
      if (!pluginsUsed) {
        if (responseToCache && responseToCache.status !== 200) {
          responseToCache = void 0;
        }
        if (true) {
          if (responseToCache) {
            if (responseToCache.status !== 200) {
              if (responseToCache.status === 0) {
                logger.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`);
              } else {
                logger.debug(`The response for '${this.request.url}' returned a status code of '${response.status}' and won't be cached as a result.`);
              }
            }
          }
        }
      }
      return responseToCache;
    }
  };

  // node_modules/workbox-strategies/Strategy.js
  var Strategy = class {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
      this.cacheName = cacheNames.getRuntimeName(options.cacheName);
      this.plugins = options.plugins || [];
      this.fetchOptions = options.fetchOptions;
      this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
      const [responseDone] = this.handleAll(options);
      return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
      if (options instanceof FetchEvent) {
        options = {
          event: options,
          request: options.request
        };
      }
      const event = options.event;
      const request = typeof options.request === "string" ? new Request(options.request) : options.request;
      const params = "params" in options ? options.params : void 0;
      const handler = new StrategyHandler(this, { event, request, params });
      const responseDone = this._getResponse(handler, request, event);
      const handlerDone = this._awaitComplete(responseDone, handler, request, event);
      return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
      await handler.runCallbacks("handlerWillStart", { event, request });
      let response = void 0;
      try {
        response = await this._handle(request, handler);
        if (!response || response.type === "error") {
          throw new WorkboxError("no-response", { url: request.url });
        }
      } catch (error) {
        if (error instanceof Error) {
          for (const callback of handler.iterateCallbacks("handlerDidError")) {
            response = await callback({ error, event, request });
            if (response) {
              break;
            }
          }
        }
        if (!response) {
          throw error;
        } else if (true) {
          logger.log(`While responding to '${getFriendlyURL(request.url)}', an ${error instanceof Error ? error.toString() : ""} error occurred. Using a fallback response provided by a handlerDidError plugin.`);
        }
      }
      for (const callback of handler.iterateCallbacks("handlerWillRespond")) {
        response = await callback({ event, request, response });
      }
      return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
      let response;
      let error;
      try {
        response = await responseDone;
      } catch (error2) {
      }
      try {
        await handler.runCallbacks("handlerDidRespond", {
          event,
          request,
          response
        });
        await handler.doneWaiting();
      } catch (waitUntilError) {
        if (waitUntilError instanceof Error) {
          error = waitUntilError;
        }
      }
      await handler.runCallbacks("handlerDidComplete", {
        event,
        request,
        response,
        error
      });
      handler.destroy();
      if (error) {
        throw error;
      }
    }
  };

  // node_modules/workbox-precaching/PrecacheStrategy.js
  var PrecacheStrategy = class _PrecacheStrategy extends Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
      options.cacheName = cacheNames.getPrecacheName(options.cacheName);
      super(options);
      this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true;
      this.plugins.push(_PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
      const response = await handler.cacheMatch(request);
      if (response) {
        return response;
      }
      if (handler.event && handler.event.type === "install") {
        return await this._handleInstall(request, handler);
      }
      return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
      let response;
      const params = handler.params || {};
      if (this._fallbackToNetwork) {
        if (true) {
          logger.warn(`The precached response for ${getFriendlyURL(request.url)} in ${this.cacheName} was not found. Falling back to the network.`);
        }
        const integrityInManifest = params.integrity;
        const integrityInRequest = request.integrity;
        const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
        response = await handler.fetch(new Request(request, {
          integrity: request.mode !== "no-cors" ? integrityInRequest || integrityInManifest : void 0
        }));
        if (integrityInManifest && noIntegrityConflict && request.mode !== "no-cors") {
          this._useDefaultCacheabilityPluginIfNeeded();
          const wasCached = await handler.cachePut(request, response.clone());
          if (true) {
            if (wasCached) {
              logger.log(`A response for ${getFriendlyURL(request.url)} was used to "repair" the precache.`);
            }
          }
        }
      } else {
        throw new WorkboxError("missing-precache-entry", {
          cacheName: this.cacheName,
          url: request.url
        });
      }
      if (true) {
        const cacheKey = params.cacheKey || await handler.getCacheKey(request, "read");
        logger.groupCollapsed(`Precaching is responding to: ` + getFriendlyURL(request.url));
        logger.log(`Serving the precached url: ${getFriendlyURL(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
        logger.groupCollapsed(`View request details here.`);
        logger.log(request);
        logger.groupEnd();
        logger.groupCollapsed(`View response details here.`);
        logger.log(response);
        logger.groupEnd();
        logger.groupEnd();
      }
      return response;
    }
    async _handleInstall(request, handler) {
      this._useDefaultCacheabilityPluginIfNeeded();
      const response = await handler.fetch(request);
      const wasCached = await handler.cachePut(request, response.clone());
      if (!wasCached) {
        throw new WorkboxError("bad-precaching-response", {
          url: request.url,
          status: response.status
        });
      }
      return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
      let defaultPluginIndex = null;
      let cacheWillUpdatePluginCount = 0;
      for (const [index, plugin] of this.plugins.entries()) {
        if (plugin === _PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
          continue;
        }
        if (plugin === _PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
          defaultPluginIndex = index;
        }
        if (plugin.cacheWillUpdate) {
          cacheWillUpdatePluginCount++;
        }
      }
      if (cacheWillUpdatePluginCount === 0) {
        this.plugins.push(_PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
      } else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
        this.plugins.splice(defaultPluginIndex, 1);
      }
    }
  };
  PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
      if (!response || response.status >= 400) {
        return null;
      }
      return response;
    }
  };
  PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
      return response.redirected ? await copyResponse(response) : response;
    }
  };

  // node_modules/workbox-precaching/PrecacheController.js
  var PrecacheController = class {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
      this._urlsToCacheKeys = /* @__PURE__ */ new Map();
      this._urlsToCacheModes = /* @__PURE__ */ new Map();
      this._cacheKeysToIntegrities = /* @__PURE__ */ new Map();
      this._strategy = new PrecacheStrategy({
        cacheName: cacheNames.getPrecacheName(cacheName),
        plugins: [
          ...plugins,
          new PrecacheCacheKeyPlugin({ precacheController: this })
        ],
        fallbackToNetwork
      });
      this.install = this.install.bind(this);
      this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
      return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
      this.addToCacheList(entries);
      if (!this._installAndActiveListenersAdded) {
        self.addEventListener("install", this.install);
        self.addEventListener("activate", this.activate);
        this._installAndActiveListenersAdded = true;
      }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
      if (true) {
        finalAssertExports.isArray(entries, {
          moduleName: "workbox-precaching",
          className: "PrecacheController",
          funcName: "addToCacheList",
          paramName: "entries"
        });
      }
      const urlsToWarnAbout = [];
      for (const entry of entries) {
        if (typeof entry === "string") {
          urlsToWarnAbout.push(entry);
        } else if (entry && entry.revision === void 0) {
          urlsToWarnAbout.push(entry.url);
        }
        const { cacheKey, url } = createCacheKey(entry);
        const cacheMode = typeof entry !== "string" && entry.revision ? "reload" : "default";
        if (this._urlsToCacheKeys.has(url) && this._urlsToCacheKeys.get(url) !== cacheKey) {
          throw new WorkboxError("add-to-cache-list-conflicting-entries", {
            firstEntry: this._urlsToCacheKeys.get(url),
            secondEntry: cacheKey
          });
        }
        if (typeof entry !== "string" && entry.integrity) {
          if (this._cacheKeysToIntegrities.has(cacheKey) && this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
            throw new WorkboxError("add-to-cache-list-conflicting-integrities", {
              url
            });
          }
          this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
        }
        this._urlsToCacheKeys.set(url, cacheKey);
        this._urlsToCacheModes.set(url, cacheMode);
        if (urlsToWarnAbout.length > 0) {
          const warningMessage = `Workbox is precaching URLs without revision info: ${urlsToWarnAbout.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
          if (false) {
            console.warn(warningMessage);
          } else {
            logger.warn(warningMessage);
          }
        }
      }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
      return waitUntil(event, async () => {
        const installReportPlugin = new PrecacheInstallReportPlugin();
        this.strategy.plugins.push(installReportPlugin);
        for (const [url, cacheKey] of this._urlsToCacheKeys) {
          const integrity = this._cacheKeysToIntegrities.get(cacheKey);
          const cacheMode = this._urlsToCacheModes.get(url);
          const request = new Request(url, {
            integrity,
            cache: cacheMode,
            credentials: "same-origin"
          });
          await Promise.all(this.strategy.handleAll({
            params: { cacheKey },
            request,
            event
          }));
        }
        const { updatedURLs, notUpdatedURLs } = installReportPlugin;
        if (true) {
          printInstallDetails(updatedURLs, notUpdatedURLs);
        }
        return { updatedURLs, notUpdatedURLs };
      });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
      return waitUntil(event, async () => {
        const cache = await self.caches.open(this.strategy.cacheName);
        const currentlyCachedRequests = await cache.keys();
        const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
        const deletedURLs = [];
        for (const request of currentlyCachedRequests) {
          if (!expectedCacheKeys.has(request.url)) {
            await cache.delete(request);
            deletedURLs.push(request.url);
          }
        }
        if (true) {
          printCleanupDetails(deletedURLs);
        }
        return { deletedURLs };
      });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
      return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
      return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
      const urlObject = new URL(url, location.href);
      return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
      return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
      const url = request instanceof Request ? request.url : request;
      const cacheKey = this.getCacheKeyForURL(url);
      if (cacheKey) {
        const cache = await self.caches.open(this.strategy.cacheName);
        return cache.match(cacheKey);
      }
      return void 0;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
      const cacheKey = this.getCacheKeyForURL(url);
      if (!cacheKey) {
        throw new WorkboxError("non-precached-url", { url });
      }
      return (options) => {
        options.request = new Request(url);
        options.params = Object.assign({ cacheKey }, options.params);
        return this.strategy.handle(options);
      };
    }
  };

  // node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js
  var precacheController;
  var getOrCreatePrecacheController = () => {
    if (!precacheController) {
      precacheController = new PrecacheController();
    }
    return precacheController;
  };

  // node_modules/workbox-routing/_version.js
  try {
    self["workbox:routing:7.2.0"] && _();
  } catch (e) {
  }

  // node_modules/workbox-routing/utils/constants.js
  var defaultMethod = "GET";
  var validMethods = [
    "DELETE",
    "GET",
    "HEAD",
    "PATCH",
    "POST",
    "PUT"
  ];

  // node_modules/workbox-routing/utils/normalizeHandler.js
  var normalizeHandler = (handler) => {
    if (handler && typeof handler === "object") {
      if (true) {
        finalAssertExports.hasMethod(handler, "handle", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "handler"
        });
      }
      return handler;
    } else {
      if (true) {
        finalAssertExports.isType(handler, "function", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "handler"
        });
      }
      return { handle: handler };
    }
  };

  // node_modules/workbox-routing/Route.js
  var Route = class {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = defaultMethod) {
      if (true) {
        finalAssertExports.isType(match, "function", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "match"
        });
        if (method) {
          finalAssertExports.isOneOf(method, validMethods, { paramName: "method" });
        }
      }
      this.handler = normalizeHandler(handler);
      this.match = match;
      this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
      this.catchHandler = normalizeHandler(handler);
    }
  };

  // node_modules/workbox-routing/RegExpRoute.js
  var RegExpRoute = class extends Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
      if (true) {
        finalAssertExports.isInstance(regExp, RegExp, {
          moduleName: "workbox-routing",
          className: "RegExpRoute",
          funcName: "constructor",
          paramName: "pattern"
        });
      }
      const match = ({ url }) => {
        const result = regExp.exec(url.href);
        if (!result) {
          return;
        }
        if (url.origin !== location.origin && result.index !== 0) {
          if (true) {
            logger.debug(`The regular expression '${regExp.toString()}' only partially matched against the cross-origin URL '${url.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
          }
          return;
        }
        return result.slice(1);
      };
      super(match, handler, method);
    }
  };

  // node_modules/workbox-routing/Router.js
  var Router = class {
    /**
     * Initializes a new Router.
     */
    constructor() {
      this._routes = /* @__PURE__ */ new Map();
      this._defaultHandlerMap = /* @__PURE__ */ new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
      return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
      self.addEventListener("fetch", (event) => {
        const { request } = event;
        const responsePromise = this.handleRequest({ request, event });
        if (responsePromise) {
          event.respondWith(responsePromise);
        }
      });
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
      self.addEventListener("message", (event) => {
        if (event.data && event.data.type === "CACHE_URLS") {
          const { payload } = event.data;
          if (true) {
            logger.debug(`Caching URLs from the window`, payload.urlsToCache);
          }
          const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
            if (typeof entry === "string") {
              entry = [entry];
            }
            const request = new Request(...entry);
            return this.handleRequest({ request, event });
          }));
          event.waitUntil(requestPromises);
          if (event.ports && event.ports[0]) {
            void requestPromises.then(() => event.ports[0].postMessage(true));
          }
        }
      });
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event }) {
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "handleRequest",
          paramName: "options.request"
        });
      }
      const url = new URL(request.url, location.href);
      if (!url.protocol.startsWith("http")) {
        if (true) {
          logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
        }
        return;
      }
      const sameOrigin = url.origin === location.origin;
      const { params, route } = this.findMatchingRoute({
        event,
        request,
        sameOrigin,
        url
      });
      let handler = route && route.handler;
      const debugMessages = [];
      if (true) {
        if (handler) {
          debugMessages.push([`Found a route to handle this request:`, route]);
          if (params) {
            debugMessages.push([
              `Passing the following params to the route's handler:`,
              params
            ]);
          }
        }
      }
      const method = request.method;
      if (!handler && this._defaultHandlerMap.has(method)) {
        if (true) {
          debugMessages.push(`Failed to find a matching route. Falling back to the default handler for ${method}.`);
        }
        handler = this._defaultHandlerMap.get(method);
      }
      if (!handler) {
        if (true) {
          logger.debug(`No route found for: ${getFriendlyURL(url)}`);
        }
        return;
      }
      if (true) {
        logger.groupCollapsed(`Router is responding to: ${getFriendlyURL(url)}`);
        debugMessages.forEach((msg) => {
          if (Array.isArray(msg)) {
            logger.log(...msg);
          } else {
            logger.log(msg);
          }
        });
        logger.groupEnd();
      }
      let responsePromise;
      try {
        responsePromise = handler.handle({ url, request, event, params });
      } catch (err) {
        responsePromise = Promise.reject(err);
      }
      const catchHandler = route && route.catchHandler;
      if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
        responsePromise = responsePromise.catch(async (err) => {
          if (catchHandler) {
            if (true) {
              logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to route's Catch Handler.`);
              logger.error(`Error thrown by:`, route);
              logger.error(err);
              logger.groupEnd();
            }
            try {
              return await catchHandler.handle({ url, request, event, params });
            } catch (catchErr) {
              if (catchErr instanceof Error) {
                err = catchErr;
              }
            }
          }
          if (this._catchHandler) {
            if (true) {
              logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to global Catch Handler.`);
              logger.error(`Error thrown by:`, route);
              logger.error(err);
              logger.groupEnd();
            }
            return this._catchHandler.handle({ url, request, event });
          }
          throw err;
        });
      }
      return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event }) {
      const routes = this._routes.get(request.method) || [];
      for (const route of routes) {
        let params;
        const matchResult = route.match({ url, sameOrigin, request, event });
        if (matchResult) {
          if (true) {
            if (matchResult instanceof Promise) {
              logger.warn(`While routing ${getFriendlyURL(url)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`, route);
            }
          }
          params = matchResult;
          if (Array.isArray(params) && params.length === 0) {
            params = void 0;
          } else if (matchResult.constructor === Object && // eslint-disable-line
          Object.keys(matchResult).length === 0) {
            params = void 0;
          } else if (typeof matchResult === "boolean") {
            params = void 0;
          }
          return { route, params };
        }
      }
      return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = defaultMethod) {
      this._defaultHandlerMap.set(method, normalizeHandler(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
      this._catchHandler = normalizeHandler(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
      if (true) {
        finalAssertExports.isType(route, "object", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.hasMethod(route, "match", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.isType(route.handler, "object", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.hasMethod(route.handler, "handle", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route.handler"
        });
        finalAssertExports.isType(route.method, "string", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route.method"
        });
      }
      if (!this._routes.has(route.method)) {
        this._routes.set(route.method, []);
      }
      this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
      if (!this._routes.has(route.method)) {
        throw new WorkboxError("unregister-route-but-not-found-with-method", {
          method: route.method
        });
      }
      const routeIndex = this._routes.get(route.method).indexOf(route);
      if (routeIndex > -1) {
        this._routes.get(route.method).splice(routeIndex, 1);
      } else {
        throw new WorkboxError("unregister-route-route-not-registered");
      }
    }
  };

  // node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
  var defaultRouter;
  var getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
      defaultRouter = new Router();
      defaultRouter.addFetchListener();
      defaultRouter.addCacheListener();
    }
    return defaultRouter;
  };

  // node_modules/workbox-routing/registerRoute.js
  function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === "string") {
      const captureUrl = new URL(capture, location.href);
      if (true) {
        if (!(capture.startsWith("/") || capture.startsWith("http"))) {
          throw new WorkboxError("invalid-string", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture"
          });
        }
        const valueToCheck = capture.startsWith("http") ? captureUrl.pathname : capture;
        const wildcards = "[*:?+]";
        if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
          logger.debug(`The '$capture' parameter contains an Express-style wildcard character (${wildcards}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
        }
      }
      const matchCallback = ({ url }) => {
        if (true) {
          if (url.pathname === captureUrl.pathname && url.origin !== captureUrl.origin) {
            logger.debug(`${capture} only partially matches the cross-origin URL ${url.toString()}. This route will only handle cross-origin requests if they match the entire URL.`);
          }
        }
        return url.href === captureUrl.href;
      };
      route = new Route(matchCallback, handler, method);
    } else if (capture instanceof RegExp) {
      route = new RegExpRoute(capture, handler, method);
    } else if (typeof capture === "function") {
      route = new Route(capture, handler, method);
    } else if (capture instanceof Route) {
      route = capture;
    } else {
      throw new WorkboxError("unsupported-route-type", {
        moduleName: "workbox-routing",
        funcName: "registerRoute",
        paramName: "capture"
      });
    }
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.registerRoute(route);
    return route;
  }

  // node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js
  function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    for (const paramName of [...urlObject.searchParams.keys()]) {
      if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
        urlObject.searchParams.delete(paramName);
      }
    }
    return urlObject;
  }

  // node_modules/workbox-precaching/utils/generateURLVariations.js
  function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = "index.html", cleanURLs = true, urlManipulation } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = "";
    yield urlObject.href;
    const urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith("/")) {
      const directoryURL = new URL(urlWithoutIgnoredParams.href);
      directoryURL.pathname += directoryIndex;
      yield directoryURL.href;
    }
    if (cleanURLs) {
      const cleanURL = new URL(urlWithoutIgnoredParams.href);
      cleanURL.pathname += ".html";
      yield cleanURL.href;
    }
    if (urlManipulation) {
      const additionalURLs = urlManipulation({ url: urlObject });
      for (const urlToAttempt of additionalURLs) {
        yield urlToAttempt.href;
      }
    }
  }

  // node_modules/workbox-precaching/PrecacheRoute.js
  var PrecacheRoute = class extends Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController2, options) {
      const match = ({ request }) => {
        const urlsToCacheKeys = precacheController2.getURLsToCacheKeys();
        for (const possibleURL of generateURLVariations(request.url, options)) {
          const cacheKey = urlsToCacheKeys.get(possibleURL);
          if (cacheKey) {
            const integrity = precacheController2.getIntegrityForCacheKey(cacheKey);
            return { cacheKey, integrity };
          }
        }
        if (true) {
          logger.debug(`Precaching did not find a match for ` + getFriendlyURL(request.url));
        }
        return;
      };
      super(match, precacheController2.strategy);
    }
  };

  // node_modules/workbox-precaching/addRoute.js
  function addRoute(options) {
    const precacheController2 = getOrCreatePrecacheController();
    const precacheRoute = new PrecacheRoute(precacheController2, options);
    registerRoute(precacheRoute);
  }

  // node_modules/workbox-precaching/precache.js
  function precache(entries) {
    const precacheController2 = getOrCreatePrecacheController();
    precacheController2.precache(entries);
  }

  // node_modules/workbox-precaching/precacheAndRoute.js
  function precacheAndRoute(entries, options) {
    precache(entries);
    addRoute(options);
  }

  // node_modules/workbox-strategies/utils/messages.js
  var messages2 = {
    strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${getFriendlyURL(request.url)}'`,
    printFinalResponse: (response) => {
      if (response) {
        logger.groupCollapsed(`View the final response here.`);
        logger.log(response || "[No response returned]");
        logger.groupEnd();
      }
    }
  };

  // node_modules/workbox-strategies/CacheFirst.js
  var CacheFirst = class extends Strategy {
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
      const logs = [];
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: this.constructor.name,
          funcName: "makeRequest",
          paramName: "request"
        });
      }
      let response = await handler.cacheMatch(request);
      let error = void 0;
      if (!response) {
        if (true) {
          logs.push(`No response found in the '${this.cacheName}' cache. Will respond with a network request.`);
        }
        try {
          response = await handler.fetchAndCachePut(request);
        } catch (err) {
          if (err instanceof Error) {
            error = err;
          }
        }
        if (true) {
          if (response) {
            logs.push(`Got response from network.`);
          } else {
            logs.push(`Unable to get a response from the network.`);
          }
        }
      } else {
        if (true) {
          logs.push(`Found a cached response in the '${this.cacheName}' cache.`);
        }
      }
      if (true) {
        logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
        for (const log of logs) {
          logger.log(log);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", { url: request.url, error });
      }
      return response;
    }
  };

  // node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js
  var cacheOkAndOpaquePlugin = {
    /**
     * Returns a valid response (to allow caching) if the status is 200 (OK) or
     * 0 (opaque).
     *
     * @param {Object} options
     * @param {Response} options.response
     * @return {Response|null}
     *
     * @private
     */
    cacheWillUpdate: async ({ response }) => {
      if (response.status === 200 || response.status === 0) {
        return response;
      }
      return null;
    }
  };

  // node_modules/workbox-strategies/NetworkFirst.js
  var NetworkFirst = class extends Strategy {
    /**
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     * @param {number} [options.networkTimeoutSeconds] If set, any network requests
     * that fail to respond within the timeout will fallback to the cache.
     *
     * This option can be used to combat
     * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
     * scenarios.
     */
    constructor(options = {}) {
      super(options);
      if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
        this.plugins.unshift(cacheOkAndOpaquePlugin);
      }
      this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
      if (true) {
        if (this._networkTimeoutSeconds) {
          finalAssertExports.isType(this._networkTimeoutSeconds, "number", {
            moduleName: "workbox-strategies",
            className: this.constructor.name,
            funcName: "constructor",
            paramName: "networkTimeoutSeconds"
          });
        }
      }
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
      const logs = [];
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: this.constructor.name,
          funcName: "handle",
          paramName: "makeRequest"
        });
      }
      const promises = [];
      let timeoutId;
      if (this._networkTimeoutSeconds) {
        const { id, promise } = this._getTimeoutPromise({ request, logs, handler });
        timeoutId = id;
        promises.push(promise);
      }
      const networkPromise = this._getNetworkPromise({
        timeoutId,
        request,
        logs,
        handler
      });
      promises.push(networkPromise);
      const response = await handler.waitUntil((async () => {
        return await handler.waitUntil(Promise.race(promises)) || // If Promise.race() resolved with null, it might be due to a network
        // timeout + a cache miss. If that were to happen, we'd rather wait until
        // the networkPromise resolves instead of returning null.
        // Note that it's fine to await an already-resolved promise, so we don't
        // have to check to see if it's still "in flight".
        await networkPromise;
      })());
      if (true) {
        logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
        for (const log of logs) {
          logger.log(log);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", { url: request.url });
      }
      return response;
    }
    /**
     * @param {Object} options
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs array
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */
    _getTimeoutPromise({ request, logs, handler }) {
      let timeoutId;
      const timeoutPromise = new Promise((resolve) => {
        const onNetworkTimeout = async () => {
          if (true) {
            logs.push(`Timing out the network response at ${this._networkTimeoutSeconds} seconds.`);
          }
          resolve(await handler.cacheMatch(request));
        };
        timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1e3);
      });
      return {
        promise: timeoutPromise,
        id: timeoutId
      };
    }
    /**
     * @param {Object} options
     * @param {number|undefined} options.timeoutId
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs Array.
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */
    async _getNetworkPromise({ timeoutId, request, logs, handler }) {
      let error;
      let response;
      try {
        response = await handler.fetchAndCachePut(request);
      } catch (fetchError) {
        if (fetchError instanceof Error) {
          error = fetchError;
        }
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (true) {
        if (response) {
          logs.push(`Got response from network.`);
        } else {
          logs.push(`Unable to get a response from the network. Will respond with a cached response.`);
        }
      }
      if (error || !response) {
        response = await handler.cacheMatch(request);
        if (true) {
          if (response) {
            logs.push(`Found a cached response in the '${this.cacheName}' cache.`);
          } else {
            logs.push(`No response found in the '${this.cacheName}' cache.`);
          }
        }
      }
      return response;
    }
  };

  // node_modules/workbox-core/_private/dontWaitFor.js
  function dontWaitFor(promise) {
    void promise.then(() => {
    });
  }

  // node_modules/idb/build/wrap-idb-value.js
  var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
  var idbProxyableTypes;
  var cursorAdvanceMethods;
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  var cursorRequestMap = /* @__PURE__ */ new WeakMap();
  var transactionDoneMap = /* @__PURE__ */ new WeakMap();
  var transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
  var transformCache = /* @__PURE__ */ new WeakMap();
  var reverseTransformCache = /* @__PURE__ */ new WeakMap();
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  var idbProxyTraps = {
    get(target, prop, receiver) {
      if (target instanceof IDBTransaction) {
        if (prop === "done")
          return transactionDoneMap.get(target);
        if (prop === "objectStoreNames") {
          return target.objectStoreNames || transactionStoreNamesMap.get(target);
        }
        if (prop === "store") {
          return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
        }
      }
      return wrap(target[prop]);
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
    has(target, prop) {
      if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
        return true;
      }
      return prop in target;
    }
  };
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
        return wrap(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var unwrap = (value) => reverseTransformCache.get(value);

  // node_modules/idb/build/index.js
  function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
      });
    }
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event.newVersion,
        event
      ));
    }
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking) {
        db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
      }
    }).catch(() => {
    });
    return openPromise;
  }
  function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event
      ));
    }
    return wrap(request).then(() => void 0);
  }
  var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
  var writeMethods = ["put", "add", "delete", "clear"];
  var cachedMethods = /* @__PURE__ */ new Map();
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  replaceTraps((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
  }));

  // node_modules/workbox-expiration/_version.js
  try {
    self["workbox:expiration:7.2.0"] && _();
  } catch (e) {
  }

  // node_modules/workbox-expiration/models/CacheTimestampsModel.js
  var DB_NAME = "workbox-expiration";
  var CACHE_OBJECT_STORE = "cache-entries";
  var normalizeURL = (unNormalizedUrl) => {
    const url = new URL(unNormalizedUrl, location.href);
    url.hash = "";
    return url.href;
  };
  var CacheTimestampsModel = class {
    /**
     *
     * @param {string} cacheName
     *
     * @private
     */
    constructor(cacheName) {
      this._db = null;
      this._cacheName = cacheName;
    }
    /**
     * Performs an upgrade of indexedDB.
     *
     * @param {IDBPDatabase<CacheDbSchema>} db
     *
     * @private
     */
    _upgradeDb(db) {
      const objStore = db.createObjectStore(CACHE_OBJECT_STORE, { keyPath: "id" });
      objStore.createIndex("cacheName", "cacheName", { unique: false });
      objStore.createIndex("timestamp", "timestamp", { unique: false });
    }
    /**
     * Performs an upgrade of indexedDB and deletes deprecated DBs.
     *
     * @param {IDBPDatabase<CacheDbSchema>} db
     *
     * @private
     */
    _upgradeDbAndDeleteOldDbs(db) {
      this._upgradeDb(db);
      if (this._cacheName) {
        void deleteDB(this._cacheName);
      }
    }
    /**
     * @param {string} url
     * @param {number} timestamp
     *
     * @private
     */
    async setTimestamp(url, timestamp) {
      url = normalizeURL(url);
      const entry = {
        url,
        timestamp,
        cacheName: this._cacheName,
        // Creating an ID from the URL and cache name won't be necessary once
        // Edge switches to Chromium and all browsers we support work with
        // array keyPaths.
        id: this._getId(url)
      };
      const db = await this.getDb();
      const tx = db.transaction(CACHE_OBJECT_STORE, "readwrite", {
        durability: "relaxed"
      });
      await tx.store.put(entry);
      await tx.done;
    }
    /**
     * Returns the timestamp stored for a given URL.
     *
     * @param {string} url
     * @return {number | undefined}
     *
     * @private
     */
    async getTimestamp(url) {
      const db = await this.getDb();
      const entry = await db.get(CACHE_OBJECT_STORE, this._getId(url));
      return entry === null || entry === void 0 ? void 0 : entry.timestamp;
    }
    /**
     * Iterates through all the entries in the object store (from newest to
     * oldest) and removes entries once either `maxCount` is reached or the
     * entry's timestamp is less than `minTimestamp`.
     *
     * @param {number} minTimestamp
     * @param {number} maxCount
     * @return {Array<string>}
     *
     * @private
     */
    async expireEntries(minTimestamp, maxCount) {
      const db = await this.getDb();
      let cursor = await db.transaction(CACHE_OBJECT_STORE).store.index("timestamp").openCursor(null, "prev");
      const entriesToDelete = [];
      let entriesNotDeletedCount = 0;
      while (cursor) {
        const result = cursor.value;
        if (result.cacheName === this._cacheName) {
          if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) {
            entriesToDelete.push(cursor.value);
          } else {
            entriesNotDeletedCount++;
          }
        }
        cursor = await cursor.continue();
      }
      const urlsDeleted = [];
      for (const entry of entriesToDelete) {
        await db.delete(CACHE_OBJECT_STORE, entry.id);
        urlsDeleted.push(entry.url);
      }
      return urlsDeleted;
    }
    /**
     * Takes a URL and returns an ID that will be unique in the object store.
     *
     * @param {string} url
     * @return {string}
     *
     * @private
     */
    _getId(url) {
      return this._cacheName + "|" + normalizeURL(url);
    }
    /**
     * Returns an open connection to the database.
     *
     * @private
     */
    async getDb() {
      if (!this._db) {
        this._db = await openDB(DB_NAME, 1, {
          upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
        });
      }
      return this._db;
    }
  };

  // node_modules/workbox-expiration/CacheExpiration.js
  var CacheExpiration = class {
    /**
     * To construct a new CacheExpiration instance you must provide at least
     * one of the `config` properties.
     *
     * @param {string} cacheName Name of the cache to apply restrictions to.
     * @param {Object} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
     * that will be used when calling `delete()` on the cache.
     */
    constructor(cacheName, config = {}) {
      this._isRunning = false;
      this._rerunRequested = false;
      if (true) {
        finalAssertExports.isType(cacheName, "string", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "constructor",
          paramName: "cacheName"
        });
        if (!(config.maxEntries || config.maxAgeSeconds)) {
          throw new WorkboxError("max-entries-or-age-required", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor"
          });
        }
        if (config.maxEntries) {
          finalAssertExports.isType(config.maxEntries, "number", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor",
            paramName: "config.maxEntries"
          });
        }
        if (config.maxAgeSeconds) {
          finalAssertExports.isType(config.maxAgeSeconds, "number", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor",
            paramName: "config.maxAgeSeconds"
          });
        }
      }
      this._maxEntries = config.maxEntries;
      this._maxAgeSeconds = config.maxAgeSeconds;
      this._matchOptions = config.matchOptions;
      this._cacheName = cacheName;
      this._timestampModel = new CacheTimestampsModel(cacheName);
    }
    /**
     * Expires entries for the given cache and given criteria.
     */
    async expireEntries() {
      if (this._isRunning) {
        this._rerunRequested = true;
        return;
      }
      this._isRunning = true;
      const minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0;
      const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
      const cache = await self.caches.open(this._cacheName);
      for (const url of urlsExpired) {
        await cache.delete(url, this._matchOptions);
      }
      if (true) {
        if (urlsExpired.length > 0) {
          logger.groupCollapsed(`Expired ${urlsExpired.length} ${urlsExpired.length === 1 ? "entry" : "entries"} and removed ${urlsExpired.length === 1 ? "it" : "them"} from the '${this._cacheName}' cache.`);
          logger.log(`Expired the following ${urlsExpired.length === 1 ? "URL" : "URLs"}:`);
          urlsExpired.forEach((url) => logger.log(`    ${url}`));
          logger.groupEnd();
        } else {
          logger.debug(`Cache expiration ran and found no entries to remove.`);
        }
      }
      this._isRunning = false;
      if (this._rerunRequested) {
        this._rerunRequested = false;
        dontWaitFor(this.expireEntries());
      }
    }
    /**
     * Update the timestamp for the given URL. This ensures the when
     * removing entries based on maximum entries, most recently used
     * is accurate or when expiring, the timestamp is up-to-date.
     *
     * @param {string} url
     */
    async updateTimestamp(url) {
      if (true) {
        finalAssertExports.isType(url, "string", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "updateTimestamp",
          paramName: "url"
        });
      }
      await this._timestampModel.setTimestamp(url, Date.now());
    }
    /**
     * Can be used to check if a URL has expired or not before it's used.
     *
     * This requires a look up from IndexedDB, so can be slow.
     *
     * Note: This method will not remove the cached entry, call
     * `expireEntries()` to remove indexedDB and Cache entries.
     *
     * @param {string} url
     * @return {boolean}
     */
    async isURLExpired(url) {
      if (!this._maxAgeSeconds) {
        if (true) {
          throw new WorkboxError(`expired-test-without-max-age`, {
            methodName: "isURLExpired",
            paramName: "maxAgeSeconds"
          });
        }
        return false;
      } else {
        const timestamp = await this._timestampModel.getTimestamp(url);
        const expireOlderThan = Date.now() - this._maxAgeSeconds * 1e3;
        return timestamp !== void 0 ? timestamp < expireOlderThan : true;
      }
    }
    /**
     * Removes the IndexedDB object store used to keep track of cache expiration
     * metadata.
     */
    async delete() {
      this._rerunRequested = false;
      await this._timestampModel.expireEntries(Infinity);
    }
  };

  // node_modules/workbox-core/registerQuotaErrorCallback.js
  function registerQuotaErrorCallback(callback) {
    if (true) {
      finalAssertExports.isType(callback, "function", {
        moduleName: "workbox-core",
        funcName: "register",
        paramName: "callback"
      });
    }
    quotaErrorCallbacks.add(callback);
    if (true) {
      logger.log("Registered a callback to respond to quota errors.", callback);
    }
  }

  // node_modules/workbox-expiration/ExpirationPlugin.js
  var ExpirationPlugin = class {
    /**
     * @param {ExpirationPluginOptions} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
     * that will be used when calling `delete()` on the cache.
     * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
     * automatic deletion if the available storage quota has been exceeded.
     */
    constructor(config = {}) {
      this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
        if (!cachedResponse) {
          return null;
        }
        const isFresh = this._isResponseDateFresh(cachedResponse);
        const cacheExpiration = this._getCacheExpiration(cacheName);
        dontWaitFor(cacheExpiration.expireEntries());
        const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
        if (event) {
          try {
            event.waitUntil(updateTimestampDone);
          } catch (error) {
            if (true) {
              if ("request" in event) {
                logger.warn(`Unable to ensure service worker stays alive when updating cache entry for '${getFriendlyURL(event.request.url)}'.`);
              }
            }
          }
        }
        return isFresh ? cachedResponse : null;
      };
      this.cacheDidUpdate = async ({ cacheName, request }) => {
        if (true) {
          finalAssertExports.isType(cacheName, "string", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "cacheDidUpdate",
            paramName: "cacheName"
          });
          finalAssertExports.isInstance(request, Request, {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "cacheDidUpdate",
            paramName: "request"
          });
        }
        const cacheExpiration = this._getCacheExpiration(cacheName);
        await cacheExpiration.updateTimestamp(request.url);
        await cacheExpiration.expireEntries();
      };
      if (true) {
        if (!(config.maxEntries || config.maxAgeSeconds)) {
          throw new WorkboxError("max-entries-or-age-required", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor"
          });
        }
        if (config.maxEntries) {
          finalAssertExports.isType(config.maxEntries, "number", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor",
            paramName: "config.maxEntries"
          });
        }
        if (config.maxAgeSeconds) {
          finalAssertExports.isType(config.maxAgeSeconds, "number", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor",
            paramName: "config.maxAgeSeconds"
          });
        }
      }
      this._config = config;
      this._maxAgeSeconds = config.maxAgeSeconds;
      this._cacheExpirations = /* @__PURE__ */ new Map();
      if (config.purgeOnQuotaError) {
        registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
      }
    }
    /**
     * A simple helper method to return a CacheExpiration instance for a given
     * cache name.
     *
     * @param {string} cacheName
     * @return {CacheExpiration}
     *
     * @private
     */
    _getCacheExpiration(cacheName) {
      if (cacheName === cacheNames.getRuntimeName()) {
        throw new WorkboxError("expire-custom-caches-only");
      }
      let cacheExpiration = this._cacheExpirations.get(cacheName);
      if (!cacheExpiration) {
        cacheExpiration = new CacheExpiration(cacheName, this._config);
        this._cacheExpirations.set(cacheName, cacheExpiration);
      }
      return cacheExpiration;
    }
    /**
     * @param {Response} cachedResponse
     * @return {boolean}
     *
     * @private
     */
    _isResponseDateFresh(cachedResponse) {
      if (!this._maxAgeSeconds) {
        return true;
      }
      const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
      if (dateHeaderTimestamp === null) {
        return true;
      }
      const now = Date.now();
      return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1e3;
    }
    /**
     * This method will extract the data header and parse it into a useful
     * value.
     *
     * @param {Response} cachedResponse
     * @return {number|null}
     *
     * @private
     */
    _getDateHeaderTimestamp(cachedResponse) {
      if (!cachedResponse.headers.has("date")) {
        return null;
      }
      const dateHeader = cachedResponse.headers.get("date");
      const parsedDate = new Date(dateHeader);
      const headerTime = parsedDate.getTime();
      if (isNaN(headerTime)) {
        return null;
      }
      return headerTime;
    }
    /**
     * This is a helper method that performs two operations:
     *
     * - Deletes *all* the underlying Cache instances associated with this plugin
     * instance, by calling caches.delete() on your behalf.
     * - Deletes the metadata from IndexedDB used to keep track of expiration
     * details for each Cache instance.
     *
     * When using cache expiration, calling this method is preferable to calling
     * `caches.delete()` directly, since this will ensure that the IndexedDB
     * metadata is also cleanly removed and open IndexedDB instances are deleted.
     *
     * Note that if you're *not* using cache expiration for a given cache, calling
     * `caches.delete()` and passing in the cache's name should be sufficient.
     * There is no Workbox-specific method needed for cleanup in that case.
     */
    async deleteCacheAndMetadata() {
      for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
        await self.caches.delete(cacheName);
        await cacheExpiration.delete();
      }
      this._cacheExpirations = /* @__PURE__ */ new Map();
    }
  };

  // sw.js
  function waitUntil2(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
  }
  var offlineAlert = async (url) => {
    console.log(`Fetch failure. We are offline, and cannot access URL "${url}"`);
    const clients = await self.clients.matchAll({ type: "window" });
    let payload = "generic";
    if (/\.(?:png|gif|webm|jpg|webp|jpeg|svg)$/m.test(url))
      payload = "image";
    else if (/\.json$/m.test(url))
      payload = "json";
    for (const client of clients) {
      client.postMessage({ type: "FETCH_ERROR", payload });
    }
  };
  var resetAll = async () => {
    const cacheNames2 = await caches.keys();
    for (const cacheName of cacheNames2) {
      await caches.delete(cacheName);
      const cacheExpiration = new CacheExpiration(cacheName, { maxEntries: 1 });
      await cacheExpiration.delete();
      console.log(`deleted cache "${cacheName}"`);
    }
    await self.registration.unregister();
    const clients = await self.clients.matchAll();
    clients.forEach((client) => client.navigate(client.url));
  };
  addEventListener("message", (event) => {
    switch (event.data.type) {
      case "RESET": {
        console.log("Resetting...");
        event.waitUntil(resetAll());
        break;
      }
    }
  });
  precacheAndRoute([{ "revision": "7fb272db45d65a62a1e6efe6d2cf3352", "url": "js/actions.js" }, { "revision": "437214c264f8580cdae8e768e6f77ffb", "url": "js/backgrounds.js" }, { "revision": "c09366c97b9df760a5f9a256d161727f", "url": "js/bestiary.js" }, { "revision": "6c9e199941124592f999b93b9e01cf38", "url": "js/bestiary/bestiary-encounterbuilder-cache.js" }, { "revision": "b0a888d9981b67d56bedc01133c4067b", "url": "js/bestiary/bestiary-encounterbuilder-component.js" }, { "revision": "789b17159c7bb5e310e5f577f76bd59c", "url": "js/bestiary/bestiary-encounterbuilder-sublistplugin.js" }, { "revision": "d5a5d70c66ab1b6af70f3ba7ee507024", "url": "js/bestiary/bestiary-encounterbuilder-ui.js" }, { "revision": "43300d67c25cac08a20abf91e324d32d", "url": "js/book.js" }, { "revision": "0f16220a98222f0664c434cb3182986c", "url": "js/bookutils.js" }, { "revision": "ab8d4209d76280d1077643b2e9162f7c", "url": "js/browsercheck.js" }, { "revision": "4ebafea336ef886bf1ffc2282cbacaf7", "url": "js/changelog.js" }, { "revision": "56e4fd30eb523b2fa35dc9a79cf80795", "url": "js/classes.js" }, { "revision": "d9b3e141c32c40309eb99f7268c62c9a", "url": "js/conditionsdiseases.js" }, { "revision": "aa65c8c0679a8fe08eefadaff1be260e", "url": "js/consts.js" }, { "revision": "87ef1390cb9a36927b3d971715fe2b33", "url": "js/deities.js" }, { "revision": "3febf08c63a05bfd29910ffce880be14", "url": "js/encounterbuilder/encounterbuilder-adjuster.js" }, { "revision": "ecba4dadc9872c4cdf7f3b7e86afa606", "url": "js/encounterbuilder/encounterbuilder-cache.js" }, { "revision": "a97830a501d5ed4d63ade3d71db4c6b6", "url": "js/encounterbuilder/encounterbuilder-colsextraadvanced.js" }, { "revision": "b9db663868b3077a2a9a2620d0431886", "url": "js/encounterbuilder/encounterbuilder-component.js" }, { "revision": "76b36d12a13b3aef88bf30db03d3aa07", "url": "js/encounterbuilder/encounterbuilder-consts.js" }, { "revision": "2914ce3a4da14d2d4429f04e322c7a45", "url": "js/encounterbuilder/encounterbuilder-helpers.js" }, { "revision": "608751cb914e4ed37712466ab3b7f253", "url": "js/encounterbuilder/encounterbuilder-models.js" }, { "revision": "6b66be38ef0d1fd061b7190d52aa3b55", "url": "js/encounterbuilder/encounterbuilder-playersadvanced.js" }, { "revision": "22d650543826d73e4de3a8ed122b66df", "url": "js/encounterbuilder/encounterbuilder-playerssimple.js" }, { "revision": "ece481852fead6df7445a917553ee2c1", "url": "js/encounterbuilder/encounterbuilder-randomizer.js" }, { "revision": "3c71d49c16f92152f86c52f383a9f181", "url": "js/encounterbuilder/encounterbuilder-ui-help.js" }, { "revision": "58ba3d6d8977bb28735ec581325da33a", "url": "js/encounterbuilder/encounterbuilder-ui-ttk.js" }, { "revision": "e8f55e9259fdebaf14edf55d288d02c4", "url": "js/encounterbuilder/encounterbuilder-ui.js" }, { "revision": "14cd7adb542add2bd832f986f5f7e85e", "url": "js/feats.js" }, { "revision": "b18c85bec218370a939d22c9d30ca325", "url": "js/filter-actions.js" }, { "revision": "39f58ec308b0771a503da778bb897975", "url": "js/filter-backgrounds.js" }, { "revision": "8b986ab39c4aeab34d8742c0d84f3748", "url": "js/filter-bestiary.js" }, { "revision": "88e2d489cb96cf76c759faed63494a2c", "url": "js/filter-classes-raw.js" }, { "revision": "eb1ed943ef7fa34858023389a9db2e3d", "url": "js/filter-classes.js" }, { "revision": "21745e4213c91cfa5f46796089801c47", "url": "js/filter-common.js" }, { "revision": "5748b0c678d68433b39c45ba7627f0a3", "url": "js/filter-conditionsdiseases.js" }, { "revision": "0252d1c2d6b1eda38a70072883a6c30e", "url": "js/filter-deities.js" }, { "revision": "5718e9c561225ea2a93ce92830b88353", "url": "js/filter-feats.js" }, { "revision": "0ae3a83f18353f3204ede0b1d65d420f", "url": "js/filter-items.js" }, { "revision": "52c69568ebfc247086dec14cc87e2756", "url": "js/filter-languages.js" }, { "revision": "43e06b436adf1ce49088fd541c9b8c0d", "url": "js/filter-optionalfeatures.js" }, { "revision": "9a05f207c0a637cafda242c4f6414fa1", "url": "js/filter-races.js" }, { "revision": "cdffbad0731d3e9b6edd49036b450d50", "url": "js/filter-spells.js" }, { "revision": "34bc44ca0242bce9ec5bee8f3866d912", "url": "js/filter-variantrules.js" }, { "revision": "0d23ee022c8d288c6e8f261ce1511e1b", "url": "js/filter-vehicles.js" }, { "revision": "99c5640d8c8d55f696911eb10cd4e008", "url": "js/filter.js" }, { "revision": "502281eca14adf188d197416098fdb3e", "url": "js/filter/filter-box.js" }, { "revision": "ebdfcb16343a7b1dd4118b524c1a1260", "url": "js/filter/filter-constants.js" }, { "revision": "6482e5610c08d062c895dcd9de6fa0cb", "url": "js/filter/filter-item.js" }, { "revision": "10a4ac0c8a9ca1a5406b351524a39879", "url": "js/filter/filter-modal-filter-base.js" }, { "revision": "87d5e8220d8c44b7b92dddd2016a79d2", "url": "js/filter/filter-page-filter-base.js" }, { "revision": "d7a5ebf0d269714b3a70876570ce91da", "url": "js/filter/filter-registry.js" }, { "revision": "7a07b8b6d26ca659f7fdae890765c7b4", "url": "js/filter/filter/filter-filter-ability-score.js" }, { "revision": "71bd34fb4b33ec9052c2d3d26b060062", "url": "js/filter/filter/filter-filter-base.js" }, { "revision": "6d774bd2e6bf4a40a7c88a5350beea3b", "url": "js/filter/filter/filter-filter-generic.js" }, { "revision": "19ffdda7cb527a313bc044e7ad7e4b8e", "url": "js/filter/filter/filter-filter-multi.js" }, { "revision": "1044c059437a95d4d0a943042d2adc8a", "url": "js/filter/filter/filter-filter-options.js" }, { "revision": "56cfed530ee9e5f89572fed2ac1db8ad", "url": "js/filter/filter/filter-filter-range.js" }, { "revision": "48e5d321d394a61505e5b7dd22ec3e06", "url": "js/filter/filter/filter-filter-searchable.js" }, { "revision": "05bb6f8e31c508a59e4d641aea369634", "url": "js/filter/filter/filter-filter-source.js" }, { "revision": "3e4c2e5bdcfa6568412c2170b39fc059", "url": "js/filter/snapshot/filter-snapshot-manager.js" }, { "revision": "7169cbde50086acd40b777a49b9bfd23", "url": "js/filter/snapshot/filter-snapshot-ui-collection-base.js" }, { "revision": "cb47f39778c2c7fee067a989f709b35e", "url": "js/filter/snapshot/filter-snapshot-ui-collection-decks.js" }, { "revision": "007bb65a44ccd94357679edbdc13fbe8", "url": "js/filter/snapshot/filter-snapshot-ui-collection-snapshots.js" }, { "revision": "68d9cc0e98e0ff0e1d8c12cab81d601a", "url": "js/filter/snapshot/filter-snapshot-ui-tab-decks.js" }, { "revision": "00a13afe7102ab36d8ec7e215a98894b", "url": "js/filter/snapshot/filter-snapshot-ui-tab-snapshots.js" }, { "revision": "29d9e253d67a12f1d95768ca8aa1421c", "url": "js/filter/snapshot/filter-snapshot-ui-tab-utils.js" }, { "revision": "c1c2bf822f01f50876b4c241d01a1230", "url": "js/filter/snapshot/filter-snapshot-ui.js" }, { "revision": "8c1474131d55f74662949121d9af5e45", "url": "js/foundry/foundry-consts.js" }, { "revision": "64d01f5b9a1339aeeaaa1f8a5658d2c0", "url": "js/foundry/foundry-migrate-data.js" }, { "revision": "d380bd3badf35dfb1aa3cfbd80565626", "url": "js/foundry/foundry-utils.js" }, { "revision": "cca8ffe863d6a2e5703f11f6ab1a5d22", "url": "js/hist.js" }, { "revision": "65b4970c09d2e1e1c32f064c770f7579", "url": "js/index.js" }, { "revision": "468833e48f2e6c73304b9bf2c9e5f6db", "url": "js/items.js" }, { "revision": "01f9b74267ab76cce8ca46776254ded7", "url": "js/languages.js" }, { "revision": "4034aa7052e8247c8bff37202e50e5b8", "url": "js/list2.js" }, { "revision": "d163fb2674e24c6bd4e9c2630bcd6c71", "url": "js/listpage.js" }, { "revision": "eb90b618e78913a0d4330dd386b57a97", "url": "js/manageexternal/manageexternal-utils.js" }, { "revision": "f6cfcf758112fc83c3a5b549eb9e0600", "url": "js/multisource.js" }, { "revision": "27847b30ab64e95176d2d91baf246be5", "url": "js/navigation.js" }, { "revision": "930ba42ffdbd5367df77a69da6887672", "url": "js/omnidexer.js" }, { "revision": "bf8081ebfc737dea948112c6312e07ac", "url": "js/omnisearch.js" }, { "revision": "88a3f9bb6917d6435c039ca75f3443d4", "url": "js/optionalfeatures.js" }, { "revision": "06b2b6db76973b1e88c0413d8ba2bab2", "url": "js/parser.js" }, { "revision": "b13eccd3e62b1ce69b9b42e45e095b5e", "url": "js/races.js" }, { "revision": "bbd43a10e7030ca655e7e64a055481d7", "url": "js/render-actions.js" }, { "revision": "16ee6ac4ff6d615c5c1f490dda336121", "url": "js/render-backgrounds.js" }, { "revision": "1ba50bffc85ac76e43d7c6df3abd719b", "url": "js/render-bestiary.js" }, { "revision": "624d2b4a9115043873a7f0fd8a0d4095", "url": "js/render-class.js" }, { "revision": "f81a86109b709c006fc1059d69858a8c", "url": "js/render-conditionsdiseases.js" }, { "revision": "6e446d8923a3d55c84540795df04043e", "url": "js/render-deities.js" }, { "revision": "d64bb07a6083d7fd39ab5ef182d0ee22", "url": "js/render-dice.js" }, { "revision": "eacbe3c106470aa13a2eaade5049206c", "url": "js/render-feats.js" }, { "revision": "506d610cd7f0bf52bcbb08c06532ff5d", "url": "js/render-icon.js" }, { "revision": "f2b221e866e87e34ea28ed05af96da2d", "url": "js/render-items.js" }, { "revision": "d1272ad404fc4da07ef80db72ce8eb6f", "url": "js/render-languages.js" }, { "revision": "43a0244bfcf4c79350a9b10e0635b82c", "url": "js/render-map.js" }, { "revision": "a172516fe31b9a86c8303e558bc4930d", "url": "js/render-markdown.js" }, { "revision": "a6832c8c3a9650b44e20962d2de2d995", "url": "js/render-optionalfeatures.js" }, { "revision": "27ae8bc49d0e631a053920b2570fef4f", "url": "js/render-page-base.js" }, { "revision": "d22743c3a2dc0646854e123c2c58bb19", "url": "js/render-races.js" }, { "revision": "a9d81f1ab08951ddf940f0e0cf874cd9", "url": "js/render-spells.js" }, { "revision": "840ffe01a83a4bb03641d0addeff08fe", "url": "js/render-variantrules.js" }, { "revision": "e7a93b274d5a7bc658ee7b0c3eb51071", "url": "js/render-vehicles.js" }, { "revision": "d82f400d0e7df80c3608220db3f6be5c", "url": "js/render.js" }, { "revision": "38b9a3687434a31331f301321bee0d8e", "url": "js/renderdemo.js" }, { "revision": "f25446cb17b1c10beabd3fbb42cc7ade", "url": "js/rolang.js" }, { "revision": "262aca51728c05a7f35b327ac692115e", "url": "js/scalecreature/scalecreature-consts.js" }, { "revision": "65b231427a4dafb5c911b9fa2cda2601", "url": "js/scalecreature/scalecreature-damage-expression.js" }, { "revision": "c4057757c87f979e53220c7fab774f8c", "url": "js/scalecreature/scalecreature-scaler-cr.js" }, { "revision": "f86e703327b4c4a0304f6a1db5f0bbb6", "url": "js/scalecreature/scalecreature-scaler-cr/scalecreature-scaler-cr-armorclass.js" }, { "revision": "2d59e6f059699880575cf5408d0bc368", "url": "js/scalecreature/scalecreature-scaler-cr/scalecreature-scaler-cr-base.js" }, { "revision": "bb438f932230cd3cd3323db5075a85cb", "url": "js/scalecreature/scalecreature-scaler-cr/scalecreature-scaler-cr-dpr.js" }, { "revision": "c8f135d9abca87ac6d35287401d8805a", "url": "js/scalecreature/scalecreature-scaler-cr/scalecreature-scaler-cr-hitsave.js" }, { "revision": "5102384b9e731c5bec2e059659f1ff1a", "url": "js/scalecreature/scalecreature-scaler-cr/scalecreature-scaler-cr-hp.js" }, { "revision": "e50c1973e3681e5b67a7aeb2c170b0cb", "url": "js/scalecreature/scalecreature-scaler-cr/scalecreature-scaler-cr-state.js" }, { "revision": "92fa2a4ca32a9bccbd6faa9abdef75bf", "url": "js/scalecreature/scalecreature-scaler-cr/scalecreature-scaler-cr-utils-attack.js" }, { "revision": "8e6ae0c6cbe8951ad9f4af6d346340e6", "url": "js/scalecreature/scalecreature-scaler-cr/scalecreature-scaler-cr-utils.js" }, { "revision": "2a5917ec4357e7b43439c2ea88f43d2e", "url": "js/scalecreature/scalecreature-scaler-summon-base.js" }, { "revision": "d482874b4742725c1a4d4238d87f173d", "url": "js/scalecreature/scalecreature-scaler-summon-class.js" }, { "revision": "f85cdb74ce47cfde77c54f270e45c9e8", "url": "js/scalecreature/scalecreature-scaler-summon-spell.js" }, { "revision": "c4f6bf8d28b1ec368c6dea3c071cbe7d", "url": "js/scalecreature/scalecreature-utils.js" }, { "revision": "2142c9c8a60591b214718464c33d1717", "url": "js/search.js" }, { "revision": "26d7e819253718519f9a70fb1f0a5a8a", "url": "js/seo-loader.js" }, { "revision": "d75ba3324752db0fe67454722baa569c", "url": "js/shim-esmodules.js" }, { "revision": "13f78cb303e06b99b4c2339046dbf7a2", "url": "js/spells.js" }, { "revision": "40d86b60c426e55d77ff1c76bc95e8d8", "url": "js/statgen.js" }, { "revision": "5207b773361cac3e706f9a3300dee071", "url": "js/statgen/statgen-ui-comp-asi.js" }, { "revision": "13784e20575056aa5d11eddb26faf943", "url": "js/statgen/statgen-ui-comp-levelone-background.js" }, { "revision": "a565116675a21662c9bc86b1a284acf0", "url": "js/statgen/statgen-ui-comp-levelone-entitybase.js" }, { "revision": "1ff7adcc54d993d224d49ce0b3b83ffc", "url": "js/statgen/statgen-ui-comp-levelone-race.js" }, { "revision": "878ab6d24d190793de7b27adf423c3d0", "url": "js/statgen/statgen-ui-comp-pbrules.js" }, { "revision": "874e5ef7aaf7acef5d241865908904ff", "url": "js/statgen/statgen-ui-consts.js" }, { "revision": "befa2c8dfc3c61e99060ac0dfccf091c", "url": "js/statgen/statgen-ui.js" }, { "revision": "e7ee79d33a90f27acf96a11e1fb9d5e2", "url": "js/statgen/statgen-util-additionalfeats.js" }, { "revision": "773bbf4415c24981f52c428956654674", "url": "js/styleswitch.js" }, { "revision": "d4076e476fa82250c142226fc592cfb8", "url": "js/utils-brew.js" }, { "revision": "adfc594d39ac4ec12a5bdc06c6552d5f", "url": "js/utils-brew/utils-brew-base.js" }, { "revision": "45d0e739efa75840735e7e643876dd2f", "url": "js/utils-brew/utils-brew-constants.js" }, { "revision": "fdfc7e1d36945a27c973ad25b45ef570", "url": "js/utils-brew/utils-brew-content-migrator.js" }, { "revision": "a135d0c60258eef2220a8900284fbf3b", "url": "js/utils-brew/utils-brew-helpers.js" }, { "revision": "426da8d22a9e9daf8e1724ee394f508e", "url": "js/utils-brew/utils-brew-impl-brew.js" }, { "revision": "35a4803f4517c9bef8eae31a8fe11a6c", "url": "js/utils-brew/utils-brew-impl-prerelease.js" }, { "revision": "33cdf9d80ea29c476a0f1af4549be5c6", "url": "js/utils-brew/utils-brew-models.js" }, { "revision": "bb56354aa1010f323b45af604ccf6fd9", "url": "js/utils-brew/utils-brew-ui-get.js" }, { "revision": "ccbcc4983bb48a696f4e7fcf6bd43356", "url": "js/utils-brew/utils-brew-ui-manage-editable-contents.js" }, { "revision": "66759bf17d45f2fcebbcee3a53f5fefd", "url": "js/utils-brew/utils-brew-ui-manage.js" }, { "revision": "2ae60ae3199dee3261f8ee081fd8bcc2", "url": "js/utils-changelog.js" }, { "revision": "cda40ba5ae7fbd24dfcc30ac3c5e98f3", "url": "js/utils-config.js" }, { "revision": "70719c52285b5e3fe7f73559a28518cc", "url": "js/utils-config/util-config-helpers.js" }, { "revision": "09dc619cd0f50a869af9d05b2efd4dba", "url": "js/utils-config/util-config-settings-group.js" }, { "revision": "97b1721d7d89f7465242ed0d06619317", "url": "js/utils-config/utils-config-config.js" }, { "revision": "1c96cafb650c336f05aad88567c2ea29", "url": "js/utils-config/utils-config-registry.js" }, { "revision": "c498350c56df32fc603b26b935abf4b3", "url": "js/utils-config/utils-config-setting-base.js" }, { "revision": "fded53c776fa8c8285d209c3c542f5dd", "url": "js/utils-config/utils-config-ui.js" }, { "revision": "1037e69d6eccc6a64ec2ebe0e6bc36d1", "url": "js/utils-dataloader.js" }, { "revision": "ae2ccf1e20cd2998cefa1e424f4347cc", "url": "js/utils-list-bestiary.js" }, { "revision": "540a14130a4aa56417652399f0def1d0", "url": "js/utils-list.js" }, { "revision": "fbceb3ef294190a0275ff3b5ecbf6974", "url": "js/utils-omnisearch.js" }, { "revision": "2c3ec42f38f636c8eccc5bb606be17fc", "url": "js/utils-p2p.js" }, { "revision": "e09a3963676e48471d669a9e56bb34ca", "url": "js/utils-proporder.js" }, { "revision": "0d9fe8991c7617342aab2dd02c895aea", "url": "js/utils-tableview.js" }, { "revision": "cfef4739fb034797125d38f5714f0c7c", "url": "js/utils-ui.js" }, { "revision": "d40d6249c9fe39359de8fdec2f7439a3", "url": "js/utils.js" }, { "revision": "da639b375bceaaaf87bf085138c094ac", "url": "js/utils/utils-entity-creature.js" }, { "revision": "dc252c3e8a8e74c3d9101179006e194c", "url": "js/variantrules.js" }, { "revision": "0036d96bbb26cb1d6a1817888edf5bb3", "url": "js/vehicles.js" }, { "revision": "989694a521f21861caa4c63b0d5294e1", "url": "lib/ace.js" }, { "revision": "19a0b0b2fec7a63b85d8e32061fd441e", "url": "lib/bootstrap-typeahead.js" }, { "revision": "bd697d59012b8b3f12cb511883a0dd41", "url": "lib/dom-to-image-more.min.js" }, { "revision": "bdc2dbed628a3bb7a62d58b999dd7123", "url": "lib/elasticlunr.js" }, { "revision": "9e04fca6a37de4458dc143e1c6471a58", "url": "lib/ext-searchbox.js" }, { "revision": "220afd743d9e9643852e31a135a9f3ae", "url": "lib/jquery.js" }, { "revision": "67b68a5a86082dd366091650f95919be", "url": "lib/jquery.panzoom.js" }, { "revision": "6de1bf1f7f98328eba5295e0e8a00110", "url": "lib/localforage.js" }, { "revision": "cffdefcc7477466752a3433488c43036", "url": "lib/lzma.js" }, { "revision": "237e833a74a6352472f27a478d90139b", "url": "lib/mode-html.js" }, { "revision": "5a7b7fe57af491381c2c5b29ca463568", "url": "lib/mode-json.js" }, { "revision": "d90fdd75caec8a462a4bbbe2fd8e46fc", "url": "lib/mode-markdown.js" }, { "revision": "2bfbd7a4d879e7d40b225059ec2ac6f6", "url": "lib/peerjs.js" }, { "revision": "c392e04d05a5f69d1bdcf76f72ff25fe", "url": "lib/theme-tomorrow_night.js" }, { "revision": "d3cac21d4fc1f49ff7fe4385a976242e", "url": "lib/theme-tomorrow.js" }, { "revision": "8b7cfaf445aa3a06e38a371f5cb2d514", "url": "css/bestiary.css" }, { "revision": "30d642be6757a3724d30575ec338e453", "url": "css/bootstrap.css" }, { "revision": "42f84a0d3302c28407939fd3ee096430", "url": "css/changelog.css" }, { "revision": "f90bb00248acf64b1e16a3a85f32330e", "url": "css/classes.css" }, { "revision": "23937b6f8e64c1d90b3ff4b408df31ed", "url": "css/fontawesome.css" }, { "revision": "7aed765a69a304a55a78859b82966748", "url": "css/index.css" }, { "revision": "7258ed6630ba4ecf94f7818fde1c56b5", "url": "css/items.css" }, { "revision": "81c43c32ca5dc295c0414f8652bbd2a2", "url": "css/languages.css" }, { "revision": "23f1d6492c87afa0734198f570ff483b", "url": "css/list-page--grouped.css" }, { "revision": "ddc285826011ad410611fe06da1b1c2b", "url": "css/main.css" }, { "revision": "9faf22aa444a9664ea08134d3ddbce4c", "url": "css/optionalfeatures.css" }, { "revision": "2744e55a9f5e48913fc28dc62bd6e483", "url": "css/renderdemo.css" }, { "revision": "53daf4c135d5fbc4819fd0422ae972e6", "url": "css/search.css" }, { "revision": "a5254c85ee18e57e63442a5c4453da8c", "url": "css/spells.css" }, { "revision": "e0738299cbb6e9dd823a749786505ade", "url": "css/statgen-bundle.css" }, { "revision": "725aba3c3095c0b1a5166415106b9d16", "url": "css/vehicles.css" }, { "revision": "2016bb55c8ff17fe4578d953561545f7", "url": "homebrew/index.json" }, { "revision": "a6d06facca1e2bcca29fc8ae981be20b", "url": "prerelease/index.json" }, { "revision": "fd57f38c8af7f082d6ce35823f8bd7cc", "url": "data/actions.json" }, { "revision": "2ac91e09456f47f0a0d84da63f79863c", "url": "data/backgrounds.json" }, { "revision": "3ce195606628f1b73ac28d894bdad975", "url": "data/books.json" }, { "revision": "a0ba838089077e05eeba920303ef9b0d", "url": "data/conditionsdiseases.json" }, { "revision": "8e05a49241115dac1be71bddac0218ec", "url": "data/deities.json" }, { "revision": "749f140617db64d4d5e8b10cb4e9264e", "url": "data/feats.json" }, { "revision": "0904e868b4843aa1995eee2a97db41ae", "url": "data/fluff-backgrounds.json" }, { "revision": "c828e873d1de95a1a6c92803137a8a33", "url": "data/fluff-conditionsdiseases.json" }, { "revision": "d9177ef0e4e649825bb6530483fbe181", "url": "data/fluff-feats.json" }, { "revision": "e0721721531dc3e2eb17a7ab02b2773f", "url": "data/fluff-items.json" }, { "revision": "714e02425afe9b21de5fcc80409aa711", "url": "data/fluff-languages.json" }, { "revision": "3a115ca5ed78cd455ebbeb952044aa4e", "url": "data/fluff-optionalfeatures.json" }, { "revision": "651ed88d020c64978227537552aac96f", "url": "data/fluff-races.json" }, { "revision": "a0ff13c5729751ef6a5053e49d9a5bfc", "url": "data/fluff-vehicles.json" }, { "revision": "0f1af2d1d0b5a23496db795113be711f", "url": "data/items-base.json" }, { "revision": "0907e16a425551853ce4b7e32bed54b0", "url": "data/items.json" }, { "revision": "6840d30d2230ba5253a3f1802dd9e8f7", "url": "data/languages.json" }, { "revision": "d124e336bcc31d1d15459260faf2e238", "url": "data/magicvariants.json" }, { "revision": "73fd80373a4a00902aa812188c664bdc", "url": "data/optionalfeatures.json" }, { "revision": "c03792a43000ed34e6aec4890f758bc3", "url": "data/races.json" }, { "revision": "8f7f229dc1da87143c7a0e0d5b8fa4d9", "url": "data/renderdemo.json" }, { "revision": "0225f0297b7b09d246550be70c617992", "url": "data/senses.json" }, { "revision": "346777a2922a97879b75aad86119af01", "url": "data/skills.json" }, { "revision": "2c017453ed416bc21370a3f1c4fbea5f", "url": "data/variantrules.json" }, { "revision": "a9c71d1f9349aca295dbd9be43170eb6", "url": "data/vehicles.json" }, { "revision": "b215799cb8b40a67f36c3110c73ac3b4", "url": "data/bestiary/bestiary-aatm.json" }, { "revision": "fe0e8c7bf6cbe0138c2da9fcfc36cd1d", "url": "data/bestiary/bestiary-ai.json" }, { "revision": "276a5d8008b092ef49e8b97f691a5058", "url": "data/bestiary/bestiary-aitfr-dn.json" }, { "revision": "b081e40925cca1d77a10228ce91b732a", "url": "data/bestiary/bestiary-aitfr-fcd.json" }, { "revision": "bb39d0b73f41f602b743fabac53c8978", "url": "data/bestiary/bestiary-aitfr-isf.json" }, { "revision": "e5079378e3aaa57f86995067c00b9937", "url": "data/bestiary/bestiary-aitfr-thp.json" }, { "revision": "8fce8881a43353594de8bb6e2473b25c", "url": "data/bestiary/bestiary-awm.json" }, { "revision": "7d996786611df2e10484d98283d70ca6", "url": "data/bestiary/bestiary-bam.json" }, { "revision": "2eba399a70c128d71a8c4535fb3065af", "url": "data/bestiary/bestiary-bgdia.json" }, { "revision": "4b2cf0d4ee984641e8156d4abb487683", "url": "data/bestiary/bestiary-bgg.json" }, { "revision": "eae196cf1308708183671970768fdab2", "url": "data/bestiary/bestiary-bmt.json" }, { "revision": "16b699e750d91df4cd278dd4d339a512", "url": "data/bestiary/bestiary-cm.json" }, { "revision": "11fd82f5b547f3ff2248354e9e602b7d", "url": "data/bestiary/bestiary-coa.json" }, { "revision": "99f1bc1084bcd4c130db900a604b0ec1", "url": "data/bestiary/bestiary-cos.json" }, { "revision": "9c8d667b4ef13591a0bf5be333842917", "url": "data/bestiary/bestiary-crcotn.json" }, { "revision": "612c39ea1413853688e5540a2b0efc92", "url": "data/bestiary/bestiary-dc.json" }, { "revision": "502bd4958eb1ce0fca1565c131b52890", "url": "data/bestiary/bestiary-dip.json" }, { "revision": "eee270df4d24e385885ae4e29b8d787a", "url": "data/bestiary/bestiary-ditlcot.json" }, { "revision": "65477e5bbab2a72b9853db508f93f1c4", "url": "data/bestiary/bestiary-dmg.json" }, { "revision": "e1ef79be3564034b6bbea1d03a2afdb0", "url": "data/bestiary/bestiary-dod.json" }, { "revision": "429b3bddd75e2956be9fae394e0f9a86", "url": "data/bestiary/bestiary-dodk.json" }, { "revision": "dec97ed0e7299414b002cde4c2c86da9", "url": "data/bestiary/bestiary-dosi.json" }, { "revision": "9a4c28a87d127bcffde3214d05bf28f1", "url": "data/bestiary/bestiary-dsotdq.json" }, { "revision": "f5be56f610a6431a4234129f2e43b9ad", "url": "data/bestiary/bestiary-egw.json" }, { "revision": "969e36f71b81b9ebd8b0393dbd32f3c7", "url": "data/bestiary/bestiary-erlw.json" }, { "revision": "7c6aa2a31ef80797e052ed7c5ad910c3", "url": "data/bestiary/bestiary-esk.json" }, { "revision": "130376aba129f693fb641e0ff5d5e4ae", "url": "data/bestiary/bestiary-ftd.json" }, { "revision": "3405400d204babe194b4b36316435ed2", "url": "data/bestiary/bestiary-ggr.json" }, { "revision": "aec16391124449b1f5a542180953d8b7", "url": "data/bestiary/bestiary-ghloe.json" }, { "revision": "8f6d01460b2420e5181f1e0becb22f8d", "url": "data/bestiary/bestiary-gos.json" }, { "revision": "40945815c2ced02a3e9343fc5e75fa27", "url": "data/bestiary/bestiary-gotsf.json" }, { "revision": "b14b05500034e34e213cf88a60b18970", "url": "data/bestiary/bestiary-hat-tg.json" }, { "revision": "af9c36ae43bcb1cfffbcc57aceb6bd26", "url": "data/bestiary/bestiary-hftt.json" }, { "revision": "00040838c30aa2e4be0d6dbed3e64260", "url": "data/bestiary/bestiary-hol.json" }, { "revision": "de4b50e0f838e8a9627999f2ebcbe421", "url": "data/bestiary/bestiary-hotdq.json" }, { "revision": "42abb805702aae779d89817f34f0f81d", "url": "data/bestiary/bestiary-hwcs.json" }, { "revision": "b23c2b9014351dd170b633dd7bae28a9", "url": "data/bestiary/bestiary-idrotf.json" }, { "revision": "b65ac6a8c0fe83522dd992c7ae278a33", "url": "data/bestiary/bestiary-imr.json" }, { "revision": "67db4cdaa95dfec402f38baf23085235", "url": "data/bestiary/bestiary-jttrc.json" }, { "revision": "bcf431656962923338c7c6b793a88b8e", "url": "data/bestiary/bestiary-kftgv.json" }, { "revision": "645145f9a7ffa2598d72f553847ab113", "url": "data/bestiary/bestiary-kkw.json" }, { "revision": "7e4ef55a533bd66e5d5037135bbb3e39", "url": "data/bestiary/bestiary-llk.json" }, { "revision": "ca5b1d3357afbd198efdf8708fc02379", "url": "data/bestiary/bestiary-lmop.json" }, { "revision": "b7a3a1a08314203ed92f059f21252bfa", "url": "data/bestiary/bestiary-lox.json" }, { "revision": "de431f90bcd5ca87350cfb242a7bf4ee", "url": "data/bestiary/bestiary-lr.json" }, { "revision": "bd70a493e50210b1f5eb3a3f4d4e5ab3", "url": "data/bestiary/bestiary-lrdt.json" }, { "revision": "2a1650d92d4fd5f2717feeb14191f163", "url": "data/bestiary/bestiary-mabjov.json" }, { "revision": "f0194d86a9c796dfc0a49be9f51891c5", "url": "data/bestiary/bestiary-mcv1sc.json" }, { "revision": "1133eda3912ac7bb71b45591569ae10d", "url": "data/bestiary/bestiary-mcv2dc.json" }, { "revision": "b193d5cb4dfa312e8114e990c47b891c", "url": "data/bestiary/bestiary-mcv3mc.json" }, { "revision": "3a91bcfbac5b16f222dd4f36dfc7d766", "url": "data/bestiary/bestiary-mcv4ec.json" }, { "revision": "9d39a2558aa2ded08e18e740dbdb3199", "url": "data/bestiary/bestiary-mff.json" }, { "revision": "02278ccbcb7a03bfa4f476bf3ef96853", "url": "data/bestiary/bestiary-mgelft.json" }, { "revision": "082ca35e467f328e1e204de68a2d68bf", "url": "data/bestiary/bestiary-mismv1.json" }, { "revision": "1bf7bec35484b8f675a6612f69079bf1", "url": "data/bestiary/bestiary-mm.json" }, { "revision": "a691a260d61debabfc69358ced9829db", "url": "data/bestiary/bestiary-mot.json" }, { "revision": "3fec67ccd9916452449eae13fe85d9f6", "url": "data/bestiary/bestiary-mpmm.json" }, { "revision": "d59c2bca98e4dc6c327f6509c3228a95", "url": "data/bestiary/bestiary-mpp.json" }, { "revision": "1239d929d02324003a669e0b01b9608b", "url": "data/bestiary/bestiary-mtf.json" }, { "revision": "8037e69ee5c145945d989e40694ac26d", "url": "data/bestiary/bestiary-nrh-ass.json" }, { "revision": "05ce887b5015d157f1eb174f01401123", "url": "data/bestiary/bestiary-nrh-at.json" }, { "revision": "1c9442e780ccfd140a4045c09bf642a7", "url": "data/bestiary/bestiary-nrh-avitw.json" }, { "revision": "80a209b9074a127cd4edec5b538013d5", "url": "data/bestiary/bestiary-nrh-awol.json" }, { "revision": "1b09fe85637a3c2ac5005af90d7c4f8b", "url": "data/bestiary/bestiary-nrh-coi.json" }, { "revision": "7362e8a8a1793b8052fe11058c9e117e", "url": "data/bestiary/bestiary-nrh-tcmc.json" }, { "revision": "f3d3bd1ea4d403f29ae90249b467127e", "url": "data/bestiary/bestiary-nrh-tlt.json" }, { "revision": "d6afc1a67fdfa6dbe5efb2246821c26c", "url": "data/bestiary/bestiary-oota.json" }, { "revision": "a685433a45ce3b95ed10f2e07037a5b9", "url": "data/bestiary/bestiary-oow.json" }, { "revision": "1bc29173570b5b7e4fc85dbd4ad184d2", "url": "data/bestiary/bestiary-pabtso.json" }, { "revision": "1d88da2c4c180959c61504346a873d3d", "url": "data/bestiary/bestiary-phb.json" }, { "revision": "8aaffa0322422f817fda5a23bb536c6b", "url": "data/bestiary/bestiary-pota.json" }, { "revision": "4edcb92d9b2419c96e2f7a1276cf4f96", "url": "data/bestiary/bestiary-ps-a.json" }, { "revision": "e73723b30deef7942b0b1135f3be694f", "url": "data/bestiary/bestiary-ps-d.json" }, { "revision": "f8aa5be6b3f9215c65f246f9b7be46e0", "url": "data/bestiary/bestiary-ps-i.json" }, { "revision": "7a1abddb996400fa3307d29bcaddf38f", "url": "data/bestiary/bestiary-ps-k.json" }, { "revision": "d4c16c39a587dbad4f8d5351404a328b", "url": "data/bestiary/bestiary-ps-x.json" }, { "revision": "299b01368515cdb8d594089aa095c3ed", "url": "data/bestiary/bestiary-ps-z.json" }, { "revision": "45f46bd3414575e9f180117a38ae9a78", "url": "data/bestiary/bestiary-qftis.json" }, { "revision": "77dacca87b841ae4858a351ddcbca13a", "url": "data/bestiary/bestiary-rmbre.json" }, { "revision": "d5db557bcd04689aafcc1d6cc6ddc0c8", "url": "data/bestiary/bestiary-rot.json" }, { "revision": "5b7146ce4850a8330932fa06db1cb06e", "url": "data/bestiary/bestiary-rtg.json" }, { "revision": "c6209b5cf20c13991418e7a1f9a86737", "url": "data/bestiary/bestiary-sads.json" }, { "revision": "33fdee85ec578712ee021001e0fc053a", "url": "data/bestiary/bestiary-scc.json" }, { "revision": "9924d5084cdd1767e5a312036c6d836f", "url": "data/bestiary/bestiary-sdw.json" }, { "revision": "8b1a899f47aeef5e4cdcc46f2469a3e1", "url": "data/bestiary/bestiary-skt.json" }, { "revision": "8607ec36ca60c68e25e72c7a67dede9c", "url": "data/bestiary/bestiary-slw.json" }, { "revision": "05946bd5ca0cfcf25b04ec98b30be1d7", "url": "data/bestiary/bestiary-tce.json" }, { "revision": "c40a8d9ce5112d5383b8beedbff87e18", "url": "data/bestiary/bestiary-tdcsr.json" }, { "revision": "3b2943c92dcb047ea8062ab6dd5f275d", "url": "data/bestiary/bestiary-tftyp.json" }, { "revision": "57646763b7034b85d6e50c733d7b5ca2", "url": "data/bestiary/bestiary-toa.json" }, { "revision": "28a4571c5a6621529c61cfb86ef50339", "url": "data/bestiary/bestiary-tob1-2023.json" }, { "revision": "96f45060e956c24197a51b52ff57611a", "url": "data/bestiary/bestiary-tofw.json" }, { "revision": "69be4b09353b5d75b1c219b48e574bc5", "url": "data/bestiary/bestiary-ttp.json" }, { "revision": "c01fdcc0c768feb8b002d8e0d9871f83", "url": "data/bestiary/bestiary-vd.json" }, { "revision": "2e11a92d9ab058b48ffe24e6a8e11aff", "url": "data/bestiary/bestiary-veor.json" }, { "revision": "ec7f30f03e91701b4ba2ba9b79d39353", "url": "data/bestiary/bestiary-vgm.json" }, { "revision": "da1fcf2788d269577d68e9c041b54ee9", "url": "data/bestiary/bestiary-vrgr.json" }, { "revision": "c5e8e0b7c62cd38a3343cb7a6616506a", "url": "data/bestiary/bestiary-wbtw.json" }, { "revision": "ee74d5187b075dd00ef4758ac65dd994", "url": "data/bestiary/bestiary-wdh.json" }, { "revision": "ae21d5bbf6de424349753c47efb55d1c", "url": "data/bestiary/bestiary-wdmm.json" }, { "revision": "7b49ddda01cdf75adfac71fa0f1b14eb", "url": "data/bestiary/bestiary-xge.json" }, { "revision": "d94b10b52f6c2e3a3d343a6d66a05c39", "url": "data/bestiary/fluff-bestiary-aatm.json" }, { "revision": "efdd00d80253d9d6da3d09f69bd22c05", "url": "data/bestiary/fluff-bestiary-ai.json" }, { "revision": "8a1ff5be6043c8cb721e33480c5822a2", "url": "data/bestiary/fluff-bestiary-aitfr-dn.json" }, { "revision": "97db8f5a4a4bccec827f58a689f4daff", "url": "data/bestiary/fluff-bestiary-aitfr-fcd.json" }, { "revision": "0891ce1012997b29e75da2362bfd93be", "url": "data/bestiary/fluff-bestiary-aitfr-isf.json" }, { "revision": "c8f5305b1d819e3879cae6437fae8cdc", "url": "data/bestiary/fluff-bestiary-aitfr-thp.json" }, { "revision": "18ca27726feff1acb76e1848893de7fa", "url": "data/bestiary/fluff-bestiary-awm.json" }, { "revision": "f934647f413c00d710041dfc9989eb78", "url": "data/bestiary/fluff-bestiary-bam.json" }, { "revision": "4d8b0be14feddd3081589c3f13f263fd", "url": "data/bestiary/fluff-bestiary-bgdia.json" }, { "revision": "0f1040611c1d8a5ad498c8e6ecff00eb", "url": "data/bestiary/fluff-bestiary-bgg.json" }, { "revision": "7636b3d02f3c32c7b1a3ed2b373b9909", "url": "data/bestiary/fluff-bestiary-bmt.json" }, { "revision": "12610f90de65b56c1bf6ef1d30fa96b1", "url": "data/bestiary/fluff-bestiary-cm.json" }, { "revision": "74a8609715565382f565065b4da45a16", "url": "data/bestiary/fluff-bestiary-coa.json" }, { "revision": "f78c3e1c5aff49f6d37da8085781c939", "url": "data/bestiary/fluff-bestiary-cos.json" }, { "revision": "45fbbe55dc00a45363fa312ba8766b35", "url": "data/bestiary/fluff-bestiary-crcotn.json" }, { "revision": "e1faf0df74dd433de6cf9adae46bee38", "url": "data/bestiary/fluff-bestiary-dc.json" }, { "revision": "7114be29e382687872ef65ff361dbe27", "url": "data/bestiary/fluff-bestiary-dip.json" }, { "revision": "ce42d9647fc1e956f822a0b30142f74c", "url": "data/bestiary/fluff-bestiary-ditlcot.json" }, { "revision": "9aebe36d43b81388388df2a284273028", "url": "data/bestiary/fluff-bestiary-dmg.json" }, { "revision": "caf2ddd81b30544662b6e3c981e5ea56", "url": "data/bestiary/fluff-bestiary-dod.json" }, { "revision": "1edebac91c27d1d32a39d9b17b281b6c", "url": "data/bestiary/fluff-bestiary-dodk.json" }, { "revision": "981a0277b96df21527f297cf8cae18e5", "url": "data/bestiary/fluff-bestiary-dosi.json" }, { "revision": "7a61b31a1c3e946d761262011853192e", "url": "data/bestiary/fluff-bestiary-dsotdq.json" }, { "revision": "2077e237c66477ef51afbae33bf8862d", "url": "data/bestiary/fluff-bestiary-egw.json" }, { "revision": "19d8a100492226cd78c8f42daa89d993", "url": "data/bestiary/fluff-bestiary-erlw.json" }, { "revision": "49057a35d7ea86964636ae36309bd6d0", "url": "data/bestiary/fluff-bestiary-ftd.json" }, { "revision": "55e5169f6f7df181e46192f62a6ac1e7", "url": "data/bestiary/fluff-bestiary-ggr.json" }, { "revision": "7dc1dd5ac884f38376235e51b8221b2d", "url": "data/bestiary/fluff-bestiary-ghloe.json" }, { "revision": "acc02ff8338718d0ec8866382f2cf631", "url": "data/bestiary/fluff-bestiary-gos.json" }, { "revision": "ba59e098dbf9984fadaeb1cdfc927df9", "url": "data/bestiary/fluff-bestiary-hat-tg.json" }, { "revision": "fab6bb3a39cf04aeec4bcbcd9385fa7b", "url": "data/bestiary/fluff-bestiary-hftt.json" }, { "revision": "68531f1744babfc06f8ae4ada54d94d4", "url": "data/bestiary/fluff-bestiary-hotdq.json" }, { "revision": "a842ce3fcaf13de1cc55e8a10ba59f07", "url": "data/bestiary/fluff-bestiary-hwcs.json" }, { "revision": "8646f53596d9ef0cec4b053cf5531d66", "url": "data/bestiary/fluff-bestiary-idrotf.json" }, { "revision": "665fa8f99b28f837408e2cd0db060f10", "url": "data/bestiary/fluff-bestiary-imr.json" }, { "revision": "b011928c21c772ad5ce2a9644e11e91b", "url": "data/bestiary/fluff-bestiary-jttrc.json" }, { "revision": "8057893bf0d54f2930ec04532c2e598f", "url": "data/bestiary/fluff-bestiary-kftgv.json" }, { "revision": "fbdefce7e8b897f605ef6b7dcf79bf24", "url": "data/bestiary/fluff-bestiary-kkw.json" }, { "revision": "835ab44b2a9e95628de4013ff881a009", "url": "data/bestiary/fluff-bestiary-llk.json" }, { "revision": "cdecb1202ddce87662b35630a45a0492", "url": "data/bestiary/fluff-bestiary-lmop.json" }, { "revision": "3fc4185f74d3c598fcdcb20c090046f8", "url": "data/bestiary/fluff-bestiary-lox.json" }, { "revision": "ccf0f0fd4e5e71c41905ccb7fc8325ff", "url": "data/bestiary/fluff-bestiary-lr.json" }, { "revision": "8dfdd5df20c1150f547b30147495e4c0", "url": "data/bestiary/fluff-bestiary-lrdt.json" }, { "revision": "41c4615ee43f7a47ac8d28d23b14b8b7", "url": "data/bestiary/fluff-bestiary-mabjov.json" }, { "revision": "04532c79f30d9930bb1eb9f9a8d2a307", "url": "data/bestiary/fluff-bestiary-mcv1sc.json" }, { "revision": "d0ba3d2d45a1af5159a31fe2d7d2bdd3", "url": "data/bestiary/fluff-bestiary-mcv2dc.json" }, { "revision": "f9fd6e46ce2466504e824b59ee33f260", "url": "data/bestiary/fluff-bestiary-mcv3mc.json" }, { "revision": "ad8b70980ced36253a9f4db8110f06e0", "url": "data/bestiary/fluff-bestiary-mcv4ec.json" }, { "revision": "037d51da6a02c8cdf2407da92c924283", "url": "data/bestiary/fluff-bestiary-mff.json" }, { "revision": "4c856c1af5fbb2a881ffd4438337277c", "url": "data/bestiary/fluff-bestiary-mgelft.json" }, { "revision": "2a594768b223476da14782dd514530fd", "url": "data/bestiary/fluff-bestiary-mismv1.json" }, { "revision": "defebe2eb6e79ac2ce3d2c0727b063f1", "url": "data/bestiary/fluff-bestiary-mm.json" }, { "revision": "14496b6766563170c3d5c88ce152c495", "url": "data/bestiary/fluff-bestiary-mot.json" }, { "revision": "75b3c697d5438cbde6767d4c3ffef09b", "url": "data/bestiary/fluff-bestiary-mpmm.json" }, { "revision": "03447e21b12beaff941031d647b77356", "url": "data/bestiary/fluff-bestiary-mpp.json" }, { "revision": "19e51071c37ae2ad6b2dc8df33ae025f", "url": "data/bestiary/fluff-bestiary-mtf.json" }, { "revision": "47c27a3aaeaddbff0430d6054627cb27", "url": "data/bestiary/fluff-bestiary-oota.json" }, { "revision": "10656448f20a85d9de56cff0de3cc79f", "url": "data/bestiary/fluff-bestiary-oow.json" }, { "revision": "6a0c823b977be7be0417e8e3738316b9", "url": "data/bestiary/fluff-bestiary-pabtso.json" }, { "revision": "4ae0e2a4164df9ce6179fdaf6e0a4917", "url": "data/bestiary/fluff-bestiary-pota.json" }, { "revision": "717cf489f9781d616504838dc0fa76a2", "url": "data/bestiary/fluff-bestiary-ps-a.json" }, { "revision": "0bc1570546725b6d209b9fb03500d226", "url": "data/bestiary/fluff-bestiary-ps-d.json" }, { "revision": "2909b4b6cf3191fddf6b5e0d94844f0b", "url": "data/bestiary/fluff-bestiary-ps-i.json" }, { "revision": "08146af2debeb03721881dd7bba22b8d", "url": "data/bestiary/fluff-bestiary-ps-k.json" }, { "revision": "91905fa4d370ff4451a320ca798cb89f", "url": "data/bestiary/fluff-bestiary-ps-x.json" }, { "revision": "ec615d7f22dd3fffda2f2ef8a818a686", "url": "data/bestiary/fluff-bestiary-ps-z.json" }, { "revision": "111d2b946fe4e1cc474473f5ac7fbdd8", "url": "data/bestiary/fluff-bestiary-qftis.json" }, { "revision": "f8b6abc69e02edf1d3d78be218166d98", "url": "data/bestiary/fluff-bestiary-rmbre.json" }, { "revision": "cf48313a4a26941f2b6214d7e6c38c34", "url": "data/bestiary/fluff-bestiary-rot.json" }, { "revision": "6026395988a4c529559f15280cb794f2", "url": "data/bestiary/fluff-bestiary-sads.json" }, { "revision": "96fc5c435175533cd289adc28a4ea87c", "url": "data/bestiary/fluff-bestiary-scc.json" }, { "revision": "67e699edfd5b30cf023286599f08fa74", "url": "data/bestiary/fluff-bestiary-sdw.json" }, { "revision": "88f02dd228df127a865fb097880a07ce", "url": "data/bestiary/fluff-bestiary-skt.json" }, { "revision": "f1d8e65d6d91057ca63839f55114c2ae", "url": "data/bestiary/fluff-bestiary-tce.json" }, { "revision": "5dfac837269904a5d742c241e89f6963", "url": "data/bestiary/fluff-bestiary-tdcsr.json" }, { "revision": "0cdb4e008e99f613efd5f9eb2dd9fa97", "url": "data/bestiary/fluff-bestiary-tftyp.json" }, { "revision": "96fff65c52100bd036824f5c1c44ae8f", "url": "data/bestiary/fluff-bestiary-toa.json" }, { "revision": "92927c0b54ae3dd1b2de0f18ddb830e5", "url": "data/bestiary/fluff-bestiary-tob1-2023.json" }, { "revision": "ebef02875da684acb0e8d0e5c9b6937d", "url": "data/bestiary/fluff-bestiary-tofw.json" }, { "revision": "1f804457c2be2052d4d5d42fab6ecf24", "url": "data/bestiary/fluff-bestiary-ttp.json" }, { "revision": "4208d0d764cc948c51f0851608fae8b9", "url": "data/bestiary/fluff-bestiary-vd.json" }, { "revision": "8b620063f6a44312f14f4e0162e4c0a1", "url": "data/bestiary/fluff-bestiary-veor.json" }, { "revision": "9a832f0eab2d4082e8e5df1b9c521e50", "url": "data/bestiary/fluff-bestiary-vgm.json" }, { "revision": "24c5d53f92b376ff7bc5a2056ac4d968", "url": "data/bestiary/fluff-bestiary-vrgr.json" }, { "revision": "50d71eaf2fd68c76b9dc6e5b744e4ff6", "url": "data/bestiary/fluff-bestiary-wbtw.json" }, { "revision": "8ab797c9e6dc69af08832d29f28ccdae", "url": "data/bestiary/fluff-bestiary-wdh.json" }, { "revision": "1eade5bb468a108e80aa591ffd10a04d", "url": "data/bestiary/fluff-bestiary-wdmm.json" }, { "revision": "57394be664eb4a6a89265c4a8ec40a5c", "url": "data/bestiary/fluff-index.json" }, { "revision": "57085bd25ad889bcb23963235b0526f6", "url": "data/bestiary/foundry.json" }, { "revision": "7469ff1a0341d11e20aa51089ae8e7d6", "url": "data/bestiary/index.json" }, { "revision": "8b3472675adb74c997ccdd9d69e95b05", "url": "data/bestiary/legendarygroups.json" }, { "revision": "1d0c00aa46d9db35d94569f30414e104", "url": "data/bestiary/template.json" }, { "revision": "10a9883841c431b0a0ee4c2b393cd50e", "url": "data/book/book-aag.json" }, { "revision": "48d0926e59010ba4aac9237e6eb8c9a7", "url": "data/book/book-aatm.json" }, { "revision": "0475d5a1aab0f31b83d0682f7880a4a9", "url": "data/book/book-ai.json" }, { "revision": "c029e922bb527783b9596db2ed954d02", "url": "data/book/book-al.json" }, { "revision": "2cd9cd6422722076db130bebf4f095f0", "url": "data/book/book-bam.json" }, { "revision": "d42f387d4c0f63549da7a0e0f3d76b36", "url": "data/book/book-bgg.json" }, { "revision": "e5fbc6f0ed30c5bd435fb4e91b9a5276", "url": "data/book/book-bmt.json" }, { "revision": "2752b9464f15df1aee2ac41293ec79bd", "url": "data/book/book-dmg.json" }, { "revision": "dc4194e5125027557ddfa7c90dfbfcf6", "url": "data/book/book-dmtcrg.json" }, { "revision": "9c57552dc216aa220b10f8335dfc72b2", "url": "data/book/book-dod.json" }, { "revision": "a4da1e462591a62015106ee6ebfe75ec", "url": "data/book/book-egw.json" }, { "revision": "204cc246cb9e358a9201a8d2dc73d2e0", "url": "data/book/book-erlw.json" }, { "revision": "0ddb5a2dc059d92dee3500382c61b7c7", "url": "data/book/book-ftd.json" }, { "revision": "8e92e711ad70e94a3af56cfe8bd8d237", "url": "data/book/book-ggr.json" }, { "revision": "f64990edc337616553e98534f94ccd65", "url": "data/book/book-hat-tg.json" }, { "revision": "4957e16f60c0cda59ac923cc6aba6f2e", "url": "data/book/book-hf.json" }, { "revision": "d375feb637259bb25c35e23635314720", "url": "data/book/book-hffotm.json" }, { "revision": "c3319cbfe40e4c00d34d20239d2ac93e", "url": "data/book/book-hwcs.json" }, { "revision": "6e365fc2a975e833c18ba7431f463202", "url": "data/book/book-mabjov.json" }, { "revision": "ce4362373e96d6ecc120059a4fe7678c", "url": "data/book/book-mcv4ec.json" }, { "revision": "24d374f8c95b14714b25e365eaa0fccd", "url": "data/book/book-mm.json" }, { "revision": "2f4b0c4a1cc068389cbf537011ccb210", "url": "data/book/book-mot.json" }, { "revision": "da77cf53841c8c7ee26729b8b95de0cc", "url": "data/book/book-mpmm.json" }, { "revision": "f878486cfd676edb8e526da12745b1a0", "url": "data/book/book-mpp.json" }, { "revision": "e8d3e104ee8a5654287aed3030a74fe7", "url": "data/book/book-mtf.json" }, { "revision": "b519efd6ffe834a38ceacf8a57e090d4", "url": "data/book/book-oga.json" }, { "revision": "1ea1678f67dd460e1e8231d7f59b19d4", "url": "data/book/book-phb.json" }, { "revision": "13f28df450776a7c656646dcb924c689", "url": "data/book/book-ps-a.json" }, { "revision": "32a604ad048cd0432d3271859c0d0c45", "url": "data/book/book-ps-d.json" }, { "revision": "2497c585a6bb69db45b919aeaf3f2ab7", "url": "data/book/book-ps-i.json" }, { "revision": "6dc3d42a46b68390f820a6d437d1148c", "url": "data/book/book-ps-k.json" }, { "revision": "ec4b594d1b34a659ec887f4092fe02bd", "url": "data/book/book-ps-x.json" }, { "revision": "4f5587640d98962d381f5c2629825922", "url": "data/book/book-ps-z.json" }, { "revision": "ad08b99f21d9af9197f99e2f80593932", "url": "data/book/book-rmr.json" }, { "revision": "6be21ea4baa0b984d1c77a9bd4f0c277", "url": "data/book/book-sac.json" }, { "revision": "8e7c3f745ec6f8536feb8daebb3c7ec3", "url": "data/book/book-sato.json" }, { "revision": "c618b2be41f6c6ef5d74fb6dff1b0554", "url": "data/book/book-scag.json" }, { "revision": "69ecb4e33f5e81302edf17def0ca213f", "url": "data/book/book-scc.json" }, { "revision": "d64b5fef6c9e063e280932717fb53697", "url": "data/book/book-screen.json" }, { "revision": "9e4bb3577dae577508c35c25aa646215", "url": "data/book/book-screendungeonkit.json" }, { "revision": "c501bf9613e8882b4b275c9663da5ff7", "url": "data/book/book-screenspelljammer.json" }, { "revision": "9dad0b5af34e20b82bf27eaeaebc9395", "url": "data/book/book-screenwildernesskit.json" }, { "revision": "367576e30ee4a106f53dc86d994cab33", "url": "data/book/book-tce.json" }, { "revision": "c3029b457f299ace8326846939c0c26a", "url": "data/book/book-td.json" }, { "revision": "3f4ab227e4d324893e87da018c8eda01", "url": "data/book/book-tdcsr.json" }, { "revision": "993f08d25812d79eaae8dfe036190e50", "url": "data/book/book-tob1-2023.json" }, { "revision": "855ee90131fee1e779b96065c9cb430c", "url": "data/book/book-vgm.json" }, { "revision": "a0e6999204926846404a660e025b47b6", "url": "data/book/book-vrgr.json" }, { "revision": "455b737bf36b9e3a620a78748490fb37", "url": "data/book/book-xge.json" }, { "revision": "e06afd729cfbe6bfd278710250308cf2", "url": "data/class/class-artificer.json" }, { "revision": "925db08ac9b14065134818f590070d7d", "url": "data/class/class-barbarian.json" }, { "revision": "005ecc3da518228e10f63d16195b6d5f", "url": "data/class/class-bard.json" }, { "revision": "a9f07e741bff4bfd3dd154f023375eaf", "url": "data/class/class-cleric.json" }, { "revision": "5aa36487aa5cef593b16000faf146f19", "url": "data/class/class-druid.json" }, { "revision": "81f28887ee694b8269548c1fa3a98668", "url": "data/class/class-fighter.json" }, { "revision": "0b18f9a2db415b7d7af54e63a6cd9550", "url": "data/class/class-monk.json" }, { "revision": "c7c05208fd068827c5f3827d77467363", "url": "data/class/class-paladin.json" }, { "revision": "0411dd3e4192e1818f3458f670aa3617", "url": "data/class/class-ranger.json" }, { "revision": "44dc1b0e6610767c8bba66c677f9661e", "url": "data/class/class-rogue.json" }, { "revision": "0d2783ec18e83c779191dd790a35c559", "url": "data/class/class-sorcerer.json" }, { "revision": "9c917769a7dabdb24fd16da879dbf4cb", "url": "data/class/class-warlock.json" }, { "revision": "95a896dcbfba8012d94d185a46dfbd8d", "url": "data/class/class-wizard.json" }, { "revision": "be3d9455d17bb3fb56e4a994625e4415", "url": "data/class/fluff-class-artificer.json" }, { "revision": "6ef48c4da42d3cb637ffd2b5da2394ba", "url": "data/class/fluff-class-barbarian.json" }, { "revision": "a3f1579e77241b99bc77905144dac4a4", "url": "data/class/fluff-class-bard.json" }, { "revision": "551783052f5c5656e88454f9e5590b30", "url": "data/class/fluff-class-cleric.json" }, { "revision": "e6a728f363bc53c576fab1db6c6abd96", "url": "data/class/fluff-class-druid.json" }, { "revision": "86ae6be9065c013517e5c51b504295f2", "url": "data/class/fluff-class-fighter.json" }, { "revision": "818a6e2d6c624ad0286a7883621e958a", "url": "data/class/fluff-class-monk.json" }, { "revision": "b7d04562cf38145d8c8052ce65584ab3", "url": "data/class/fluff-class-paladin.json" }, { "revision": "df838b9718e9a0d5d8aaef0cf3b16f21", "url": "data/class/fluff-class-ranger.json" }, { "revision": "33efc144f1b0cef6658e31ca1a04271a", "url": "data/class/fluff-class-rogue.json" }, { "revision": "91f6f385cdcfbde9743177371eaeb8ba", "url": "data/class/fluff-class-sorcerer.json" }, { "revision": "6148ca59e65d09ca514568f3de0685d7", "url": "data/class/fluff-class-warlock.json" }, { "revision": "2a27b27be9dcb2fe2928fbd2dc5e4331", "url": "data/class/fluff-class-wizard.json" }, { "revision": "b7a590dffad970444f28e5b24124779f", "url": "data/class/fluff-index.json" }, { "revision": "883ffe80de947c76e80128cc068c931f", "url": "data/class/foundry.json" }, { "revision": "05f808b163e13e9cb2b30a4b88927be5", "url": "data/class/index.json" }, { "revision": "37299043261a3d1df1a97b0e932b8c15", "url": "data/generated/bookref-dmscreen-index.json" }, { "revision": "de69e54d0d9267ce9487b812f215ebc4", "url": "data/generated/bookref-dmscreen.json" }, { "revision": "59668a6df4bc976339ff338d9cec998e", "url": "data/generated/bookref-quick.json" }, { "revision": "7db40e5ffd725f71a114cefbd1d74268", "url": "data/generated/gendata-nav-adventure-book-index.json" }, { "revision": "635e61bc211d438595deee6e2b5b17a6", "url": "data/generated/gendata-spell-source-lookup.json" }, { "revision": "a9ea7095b8e079f114bca19b2d6fcb0b", "url": "data/generated/gendata-subclass-lookup.json" }, { "revision": "3f14593205f2d4dc8dd3bcb11296af84", "url": "data/generated/gendata-tables.json" }, { "revision": "8fd83d5b94e53333e3710d47a21c6354", "url": "data/generated/gendata-variantrules.json" }, { "revision": "3d19b523e86537016eecf4b753786fbe", "url": "data/spells/fluff-index.json" }, { "revision": "7a6262777ec331263bb31da56b8661c3", "url": "data/spells/fluff-spells-aag.json" }, { "revision": "214a50ba3e1defe9a48ad3487d76d9d3", "url": "data/spells/fluff-spells-egw.json" }, { "revision": "2ab79cf61d10af3dd5388a16d578ddb5", "url": "data/spells/fluff-spells-ftd.json" }, { "revision": "c14b3545b006f81273db8b35ca4c07b4", "url": "data/spells/fluff-spells-ggr.json" }, { "revision": "9d1ee9807d48a3a2d6639b345bfaccd3", "url": "data/spells/fluff-spells-phb.json" }, { "revision": "d0ad1532a3d18c2376b0c33fca976e11", "url": "data/spells/fluff-spells-tce.json" }, { "revision": "fb43fa1de386d72730b240e273579bd2", "url": "data/spells/fluff-spells-xge.json" }, { "revision": "a3cdcbc7a1f6e8148e15583d6770291d", "url": "data/spells/foundry.json" }, { "revision": "b14b94160715885eb3298949e2cc1cff", "url": "data/spells/index.json" }, { "revision": "3728ac977945d02091f371554578cf87", "url": "data/spells/sources.json" }, { "revision": "205aa91c2671cf4998b69b9f92e57d79", "url": "data/spells/spells-aag.json" }, { "revision": "d2a305b7a43e51d63af7281047acebae", "url": "data/spells/spells-ai.json" }, { "revision": "40b15fb9d0c48196a4561e5952e75328", "url": "data/spells/spells-bmt.json" }, { "revision": "7e2bc1fcb793d33673cf3a5496adcb51", "url": "data/spells/spells-egw.json" }, { "revision": "6c57dc1bbec14280f49f15f10820ff26", "url": "data/spells/spells-ftd.json" }, { "revision": "c4608c1be8d264dd9d026689873e6e33", "url": "data/spells/spells-ggr.json" }, { "revision": "550606f7314222621bc8c8deaba8e154", "url": "data/spells/spells-idrotf.json" }, { "revision": "7343c4500130911535d721f04f05fd4d", "url": "data/spells/spells-phb.json" }, { "revision": "4911291f06e50bf0bc36e2acb3e1f2c9", "url": "data/spells/spells-scc.json" }, { "revision": "c566554d503f3bfaf10234cae4e8e5fc", "url": "data/spells/spells-tce.json" }, { "revision": "bf10c7386dca95a44bb03f254fa2d196", "url": "data/spells/spells-tdcsr.json" }, { "revision": "317417dfb98fac1e79f80c6294c74941", "url": "data/spells/spells-xge.json" }, { "revision": "68672e8f2ebfe95ed3d614b9c992b3e1", "url": "actions.html" }, { "revision": "b6b30c23f29c4fe6cd3dcfe80f1f65a1", "url": "backgrounds.html" }, { "revision": "794e56594568864ad12efb124c2a99b5", "url": "bestiary.html" }, { "revision": "27e966d4ae9a749d51d72a3810dbf42c", "url": "book.html" }, { "revision": "d904ddacbb3d3fbe5b8c450c3afed8e7", "url": "changelog.html" }, { "revision": "2a412342e059fe50681234e8ebaa567f", "url": "classes.html" }, { "revision": "3d49b834d8c01da2e68d23a9df787689", "url": "conditionsdiseases.html" }, { "revision": "9359691f6b73cd2ae0548ae9935a1946", "url": "deities.html" }, { "revision": "d7512527b48d0410cf40ff58fa7de0bf", "url": "feats.html" }, { "revision": "4e2554e205333d294726e32b398a09b8", "url": "index.html" }, { "revision": "3fb766a7fec1f2dbb503eaad94d33815", "url": "items.html" }, { "revision": "e538e8dc40a261cc3cf8f0016a015f43", "url": "languages.html" }, { "revision": "5a46ccab8148694ce5030a6ad1d2c93d", "url": "optionalfeatures.html" }, { "revision": "194ecc5c15023521ad98427ceef9327d", "url": "races.html" }, { "revision": "08c7a4390a7fa6d49106a7989e5d770b", "url": "renderdemo.html" }, { "revision": "4d5674bedc505690256757352dd98f68", "url": "search.html" }, { "revision": "fbfcfb184efb490180b70380343d0428", "url": "spells.html" }, { "revision": "32ee985328a76c51ca7fdd47f194eb0d", "url": "statgen.html" }, { "revision": "06e9b9e7c956fe66f59e9cc055bbae18", "url": "variantrules.html" }, { "revision": "e48fdec3bef2fa6393fee42253407553", "url": "vehicles.html" }, { "revision": "1f84181e30245692a3cbe4d3954d41b5", "url": "search/index-alt-spell.json" }, { "revision": "840fe627d9fa8f088c359244165a5b84", "url": "search/index-foundry.json" }, { "revision": "ad734cda3bd25f7d86d623b4a696bdf1", "url": "search/index-item.json" }, { "revision": "67fb038ee89fac15ea3062570dd7a2a6", "url": "search/index-partnered.json" }, { "revision": "7ebd59827d7ccd77ea89731b8d4ea225", "url": "search/index.json" }, { "revision": "7ae91534734245aada9211384ec923fc", "url": "manifest.webmanifest" }, { "revision": "448c34a56d699c29117adc64c43affeb", "url": "fonts/glyphicons-halflings-regular.woff2" }, { "revision": "04c967f6f0b6a812ad0c9f4bc1470a42", "url": "fonts/Convergence-Regular.woff2" }, { "revision": "ffbdd7a184919c88217433df12ed9bf4", "url": "fonts/Roboto-Regular.woff2" }, { "revision": "4f087d46f598e98807f576e4e2c247ec", "url": "sw-injector.js" }]);
  var RevisionCacheFirst = class extends Strategy {
    // explicitly set `credentials` option as a workaround to enable basic auth in third-party installs
    // See: 5ET-BUG-115
    static _FETCH_OPTIONS_VET = { credentials: "same-origin" };
    cacheRoutesAbortController = null;
    constructor() {
      super({ cacheName: "runtime-revision" });
      this.activate = this.activate.bind(this);
      this.cacheRoutes = this.cacheRoutes.bind(this);
      addEventListener("message", (event) => {
        switch (event.data.type) {
          case "CACHE_ROUTES": {
            this.cacheRoutesAbortController = new AbortController();
            event.waitUntil(this.cacheRoutes(event.data, this.cacheRoutesAbortController.signal));
            break;
          }
          case "CANCEL_CACHE_ROUTES": {
            console.log("Aborting cache!");
            this.cacheRoutesAbortController?.abort();
            this.cacheRoutesAbortController = null;
            break;
          }
        }
      });
    }
    /**
     * @param {Request} request
     * @param {StrategyHandler} handler
     * @returns {Promise<Response | undefined>}
     */
    async _handle(request, handler) {
      const url = request.url;
      const cacheKey = createCacheKey({ url, revision: runtimeManifest.get(url) }).cacheKey;
      console.log(`Trying to resolve URL "${url}" with key "${cacheKey}"`);
      const cacheResponse = await handler.cacheMatch(cacheKey);
      if (cacheResponse !== void 0)
        return cacheResponse;
      console.log(`Fetching URL "${url}" over the network for RevisionFirstCache`);
      try {
        const fetchResponse = await handler.fetch(request, this.constructor._FETCH_OPTIONS_VET);
        handler.cachePut(cacheKey, fetchResponse.clone());
        return fetchResponse;
      } catch (e) {
        offlineAlert(url);
        return new Response();
      }
    }
    /**
     * the cache busting portion of the Strategy.
     * Iterate the cache, and remove anything that is not in the manifest, or from a different revision.
     *
     * call this from the activate event
     *
     * @param {ExtendableEvent} event
     * @returns {Promise}
     */
    activate(event) {
      return waitUntil2(event, async () => {
        const cache = await caches.open(this.cacheName);
        const currentCacheKeys = (await cache.keys()).map((request) => request.url);
        const validCacheKeys = new Set(Array.from(runtimeManifest).map(([url, revision]) => createCacheKey({ url, revision }).cacheKey));
        await Promise.allSettled(
          currentCacheKeys.map(async (key) => {
            if (!validCacheKeys.has(key)) {
              console.log(`Deleting key "${key}" from the cache because its revision does not match`);
              await cache.delete(key);
            }
          })
        );
      });
    }
    /**
     * Preload runtime cache routes. This method is called based on a message from the "frontend".
     * The method is passed a regex which all possible files are matched against.
     * Files which match and have not already been loaded will be attempted to be fetched.
     *
     * File fetching is done with a pool strategy, where async function closures pop urls off an array.
     * If a fetch throws an error, it will not be retried, and it will kill the worker.
     * This intentionally reduces the number of concurrent requests.
     * If a system or server is struggling under the load, it could cause fetches to fail,
     * in a manner that is opaque to this code.
     *
     * When all the original workers have died or finished, any failures will be reported.
     *
     * @param {{payload: {routeRegex: RegExp}}} data the data sent with the request
     * @param {AbortSignal} signal signal to abort the operation
     */
    async cacheRoutes(data, signal) {
      const cache = await caches.open(this.cacheName);
      const currentCacheKeys = new Set((await cache.keys()).map((request) => request.url));
      const validCacheKeys = Array.from(runtimeManifest).map(([url, revision]) => createCacheKey({ url, revision }).cacheKey);
      const routeRegex = data.payload.routeRegex;
      const routesToCache = validCacheKeys.filter((key) => !currentCacheKeys.has(key) && routeRegex.test(key));
      const fetchTotal = routesToCache.length;
      let fetched = 0;
      const postProgress = async () => {
        const clients = await self.clients.matchAll({ type: "window" });
        for (const client of clients) {
          client.postMessage({ type: "CACHE_ROUTES_PROGRESS", payload: { fetched, fetchTotal } });
        }
      };
      await postProgress();
      if (fetchTotal === 0)
        return;
      const concurrentFetches = 5;
      const fetchPromise = async () => {
        while (true) {
          const url = routesToCache.pop();
          if (url === void 0 || signal.aborted)
            return;
          const cleanUrl = url.replace(/\?__WB_REVISION__=\w+$/m, "");
          const response = await fetch(cleanUrl, this.constructor._FETCH_OPTIONS_VET);
          await cache.put(url, response);
          fetched++;
          postProgress();
        }
      };
      const fetchPromises = [];
      for (let i = 0; i < concurrentFetches; i++) {
        fetchPromises.push(fetchPromise());
      }
      const fetchResults = await Promise.allSettled(fetchPromises);
      const errorResults = fetchResults.filter((fetchResult) => fetchResult.status === "rejected");
      if (errorResults.length > 0) {
        const clients = await self.clients.matchAll({ type: "window" });
        for (const client of clients)
          client.postMessage({ type: "CACHE_ROUTES_ERROR", payload: { errors: errorResults } });
      }
    }
  };
  var runtimeManifest = new Map([["android-chrome-192x192.png", "cfaf05da5ba6dc5d9471b2635aa3ff7e"], ["android-chrome-256x256.png", "ccc8051f5e4adf3ef08d2d791c123cb8"], ["android-chrome-384x384.png", "6c2b3f505c9343d523ed98a747b4421a"], ["android-chrome-512x512.png", "89cd85ccfe0d7d0a238122b1d43290e1"], ["apple-touch-icon-120x120.png", "eb901c8212144e48de0e647e4a2fed70"], ["apple-touch-icon-152x152.png", "4a2d9697f7f0b4a5cc7034e53732eb88"], ["apple-touch-icon-167x167.png", "b8f638c847d0a612162c0b38a61127b5"], ["apple-touch-icon-180x180.png", "218c3c78c6b38e199273583973221239"], ["apple-touch-icon-360x360.png", "50e6449e541db6a1afbb42d79f14f6de"], ["favicon-128x128.png", "14699a5382332206548be03f059a3e8e"], ["favicon-144x144.png", "6eafeb01887c016f0bb449397ff0d2e9"], ["favicon-16x16.png", "e9050c6719057c9c2658942d31ab1bea"], ["favicon-256x256.png", "a8cb1787e64ba324ea6c7f3e50dce6ff"], ["favicon-32x32.png", "f86331fe6f551c67a8c01bd0c580da66"], ["favicon-48x48.png", "5468052b6c9c94eb1210bc1482804b16"], ["favicon-64x64.png", "c73c7cd0d0a8ca2d32a7a3f95f33a74f"], ["maskable_icon.png", "0185722f84fb2b30b7382201abdc0c7f"], ["mstile-144x144.png", "6a88c5ffb7774276b1e48c0b5006927a"], ["mstile-150x150.png", "179a3b21517a9ab283b2f7447731d77e"], ["mstile-310x150.png", "6f55d358ed0413eb36cf5d1100057cfc"], ["mstile-310x310.png", "7518b30899583c7e2836a44f605cba11"], ["mstile-70x70.png", "ef76b7ae218efcc2a7775186de8363c0"], ["favicon.svg", "b619c861af80de281d5314dba65f4b74"], ["safari-pinned-tab.svg", "ca898d30a70aa47d8fc6773b5170915d"]].map(([route, revision]) => [`${self.location.origin}/${route}`, revision]));
  var revisionCacheFirst = new RevisionCacheFirst();
  registerRoute(({ request }) => runtimeManifest.has(request.url), revisionCacheFirst);
  addEventListener("activate", revisionCacheFirst.activate);
  registerRoute(
    ({ request }) => request.destination === "font",
    new CacheFirst({
      cacheName: "font-cache"
    })
  );
  registerRoute(
    ({ request }) => request.destination === "image",
    new NetworkFirst({
      cacheName: "external-image-cache",
      plugins: [
        // this is a safeguard against an utterly massive cache - these numbers may need tweaking
        new ExpirationPlugin({ maxAgeSeconds: 7 * 24 * 60 * 60, maxEntries: 100, purgeOnQuotaError: true })
      ]
    })
  );
  addEventListener("install", () => {
    self.skipWaiting();
  });
  addEventListener("activate", (event) => {
    event.waitUntil(
      (async () => {
        const cacheNames2 = await caches.keys();
        for (const cacheName of cacheNames2) {
          if (!/\d+\.\d+\.\d+/.test(cacheName))
            continue;
          await caches.delete(cacheName);
          console.log(`Deleted legacy cache "${cacheName}"`);
        }
      })()
    );
  });
})();
