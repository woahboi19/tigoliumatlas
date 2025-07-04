(() => {
  // node_modules/workbox-core/_version.js
  try {
    self["workbox:core:7.2.0"] && _();
  } catch (e) {
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

  // node_modules/workbox-core/_private/dontWaitFor.js
  function dontWaitFor(promise) {
    void promise.then(() => {
    });
  }

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

  // node_modules/workbox-window/_version.js
  try {
    self["workbox:window:7.2.0"] && _();
  } catch (e) {
  }

  // node_modules/workbox-window/messageSW.js
  function messageSW(sw, data) {
    return new Promise((resolve) => {
      const messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = (event) => {
        resolve(event.data);
      };
      sw.postMessage(data, [messageChannel.port2]);
    });
  }

  // node_modules/workbox-window/utils/WorkboxEventTarget.js
  var WorkboxEventTarget = class {
    constructor() {
      this._eventListenerRegistry = /* @__PURE__ */ new Map();
    }
    /**
     * @param {string} type
     * @param {Function} listener
     * @private
     */
    addEventListener(type, listener) {
      const foo = this._getEventListenersByType(type);
      foo.add(listener);
    }
    /**
     * @param {string} type
     * @param {Function} listener
     * @private
     */
    removeEventListener(type, listener) {
      this._getEventListenersByType(type).delete(listener);
    }
    /**
     * @param {Object} event
     * @private
     */
    dispatchEvent(event) {
      event.target = this;
      const listeners = this._getEventListenersByType(event.type);
      for (const listener of listeners) {
        listener(event);
      }
    }
    /**
     * Returns a Set of listeners associated with the passed event type.
     * If no handlers have been registered, an empty Set is returned.
     *
     * @param {string} type The event type.
     * @return {Set<ListenerCallback>} An array of handler functions.
     * @private
     */
    _getEventListenersByType(type) {
      if (!this._eventListenerRegistry.has(type)) {
        this._eventListenerRegistry.set(type, /* @__PURE__ */ new Set());
      }
      return this._eventListenerRegistry.get(type);
    }
  };

  // node_modules/workbox-window/utils/urlsMatch.js
  function urlsMatch(url1, url2) {
    const { href } = location;
    return new URL(url1, href).href === new URL(url2, href).href;
  }

  // node_modules/workbox-window/utils/WorkboxEvent.js
  var WorkboxEvent = class {
    constructor(type, props) {
      this.type = type;
      Object.assign(this, props);
    }
  };

  // node_modules/workbox-window/Workbox.js
  var WAITING_TIMEOUT_DURATION = 200;
  var REGISTRATION_TIMEOUT_DURATION = 6e4;
  var SKIP_WAITING_MESSAGE = { type: "SKIP_WAITING" };
  var Workbox = class extends WorkboxEventTarget {
    /**
     * Creates a new Workbox instance with a script URL and service worker
     * options. The script URL and options are the same as those used when
     * calling [navigator.serviceWorker.register(scriptURL, options)](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register).
     *
     * @param {string|TrustedScriptURL} scriptURL The service worker script
     *     associated with this instance. Using a
     *     [`TrustedScriptURL`](https://web.dev/trusted-types/) is supported.
     * @param {Object} [registerOptions] The service worker options associated
     *     with this instance.
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(scriptURL, registerOptions = {}) {
      super();
      this._registerOptions = {};
      this._updateFoundCount = 0;
      this._swDeferred = new Deferred();
      this._activeDeferred = new Deferred();
      this._controllingDeferred = new Deferred();
      this._registrationTime = 0;
      this._ownSWs = /* @__PURE__ */ new Set();
      this._onUpdateFound = () => {
        const registration = this._registration;
        const installingSW = registration.installing;
        const updateLikelyTriggeredExternally = (
          // Since we enforce only calling `register()` once, and since we don't
          // add the `updatefound` event listener until the `register()` call, if
          // `_updateFoundCount` is > 0 then it means this method has already
          // been called, thus this SW must be external
          this._updateFoundCount > 0 || // If the script URL of the installing SW is different from this
          // instance's script URL, we know it's definitely not from our
          // registration.
          !urlsMatch(installingSW.scriptURL, this._scriptURL.toString()) || // If all of the above are false, then we use a time-based heuristic:
          // Any `updatefound` event that occurs long after our registration is
          // assumed to be external.
          performance.now() > this._registrationTime + REGISTRATION_TIMEOUT_DURATION ? (
            // If any of the above are not true, we assume the update was
            // triggered by this instance.
            true
          ) : false
        );
        if (updateLikelyTriggeredExternally) {
          this._externalSW = installingSW;
          registration.removeEventListener("updatefound", this._onUpdateFound);
        } else {
          this._sw = installingSW;
          this._ownSWs.add(installingSW);
          this._swDeferred.resolve(installingSW);
          if (true) {
            if (navigator.serviceWorker.controller) {
              logger.log("Updated service worker found. Installing now...");
            } else {
              logger.log("Service worker is installing...");
            }
          }
        }
        ++this._updateFoundCount;
        installingSW.addEventListener("statechange", this._onStateChange);
      };
      this._onStateChange = (originalEvent) => {
        const registration = this._registration;
        const sw = originalEvent.target;
        const { state } = sw;
        const isExternal = sw === this._externalSW;
        const eventProps = {
          sw,
          isExternal,
          originalEvent
        };
        if (!isExternal && this._isUpdate) {
          eventProps.isUpdate = true;
        }
        this.dispatchEvent(new WorkboxEvent(state, eventProps));
        if (state === "installed") {
          this._waitingTimeout = self.setTimeout(() => {
            if (state === "installed" && registration.waiting === sw) {
              this.dispatchEvent(new WorkboxEvent("waiting", eventProps));
              if (true) {
                if (isExternal) {
                  logger.warn("An external service worker has installed but is waiting for this client to close before activating...");
                } else {
                  logger.warn("The service worker has installed but is waiting for existing clients to close before activating...");
                }
              }
            }
          }, WAITING_TIMEOUT_DURATION);
        } else if (state === "activating") {
          clearTimeout(this._waitingTimeout);
          if (!isExternal) {
            this._activeDeferred.resolve(sw);
          }
        }
        if (true) {
          switch (state) {
            case "installed":
              if (isExternal) {
                logger.warn("An external service worker has installed. You may want to suggest users reload this page.");
              } else {
                logger.log("Registered service worker installed.");
              }
              break;
            case "activated":
              if (isExternal) {
                logger.warn("An external service worker has activated.");
              } else {
                logger.log("Registered service worker activated.");
                if (sw !== navigator.serviceWorker.controller) {
                  logger.warn("The registered service worker is active but not yet controlling the page. Reload or run `clients.claim()` in the service worker.");
                }
              }
              break;
            case "redundant":
              if (sw === this._compatibleControllingSW) {
                logger.log("Previously controlling service worker now redundant!");
              } else if (!isExternal) {
                logger.log("Registered service worker now redundant!");
              }
              break;
          }
        }
      };
      this._onControllerChange = (originalEvent) => {
        const sw = this._sw;
        const isExternal = sw !== navigator.serviceWorker.controller;
        this.dispatchEvent(new WorkboxEvent("controlling", {
          isExternal,
          originalEvent,
          sw,
          isUpdate: this._isUpdate
        }));
        if (!isExternal) {
          if (true) {
            logger.log("Registered service worker now controlling this page.");
          }
          this._controllingDeferred.resolve(sw);
        }
      };
      this._onMessage = async (originalEvent) => {
        const { data, ports, source } = originalEvent;
        await this.getSW();
        if (this._ownSWs.has(source)) {
          this.dispatchEvent(new WorkboxEvent("message", {
            // Can't change type 'any' of data.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            data,
            originalEvent,
            ports,
            sw: source
          }));
        }
      };
      this._scriptURL = scriptURL;
      this._registerOptions = registerOptions;
      navigator.serviceWorker.addEventListener("message", this._onMessage);
    }
    /**
     * Registers a service worker for this instances script URL and service
     * worker options. By default this method delays registration until after
     * the window has loaded.
     *
     * @param {Object} [options]
     * @param {Function} [options.immediate=false] Setting this to true will
     *     register the service worker immediately, even if the window has
     *     not loaded (not recommended).
     */
    async register({ immediate = false } = {}) {
      if (true) {
        if (this._registrationTime) {
          logger.error("Cannot re-register a Workbox instance after it has been registered. Create a new instance instead.");
          return;
        }
      }
      if (!immediate && document.readyState !== "complete") {
        await new Promise((res) => window.addEventListener("load", res));
      }
      this._isUpdate = Boolean(navigator.serviceWorker.controller);
      this._compatibleControllingSW = this._getControllingSWIfCompatible();
      this._registration = await this._registerScript();
      if (this._compatibleControllingSW) {
        this._sw = this._compatibleControllingSW;
        this._activeDeferred.resolve(this._compatibleControllingSW);
        this._controllingDeferred.resolve(this._compatibleControllingSW);
        this._compatibleControllingSW.addEventListener("statechange", this._onStateChange, { once: true });
      }
      const waitingSW = this._registration.waiting;
      if (waitingSW && urlsMatch(waitingSW.scriptURL, this._scriptURL.toString())) {
        this._sw = waitingSW;
        dontWaitFor(Promise.resolve().then(() => {
          this.dispatchEvent(new WorkboxEvent("waiting", {
            sw: waitingSW,
            wasWaitingBeforeRegister: true
          }));
          if (true) {
            logger.warn("A service worker was already waiting to activate before this script was registered...");
          }
        }));
      }
      if (this._sw) {
        this._swDeferred.resolve(this._sw);
        this._ownSWs.add(this._sw);
      }
      if (true) {
        logger.log("Successfully registered service worker.", this._scriptURL.toString());
        if (navigator.serviceWorker.controller) {
          if (this._compatibleControllingSW) {
            logger.debug("A service worker with the same script URL is already controlling this page.");
          } else {
            logger.debug("A service worker with a different script URL is currently controlling the page. The browser is now fetching the new script now...");
          }
        }
        const currentPageIsOutOfScope = () => {
          const scopeURL = new URL(this._registerOptions.scope || this._scriptURL.toString(), document.baseURI);
          const scopeURLBasePath = new URL("./", scopeURL.href).pathname;
          return !location.pathname.startsWith(scopeURLBasePath);
        };
        if (currentPageIsOutOfScope()) {
          logger.warn("The current page is not in scope for the registered service worker. Was this a mistake?");
        }
      }
      this._registration.addEventListener("updatefound", this._onUpdateFound);
      navigator.serviceWorker.addEventListener("controllerchange", this._onControllerChange);
      return this._registration;
    }
    /**
     * Checks for updates of the registered service worker.
     */
    async update() {
      if (!this._registration) {
        if (true) {
          logger.error("Cannot update a Workbox instance without being registered. Register the Workbox instance first.");
        }
        return;
      }
      await this._registration.update();
    }
    /**
     * Resolves to the service worker registered by this instance as soon as it
     * is active. If a service worker was already controlling at registration
     * time then it will resolve to that if the script URLs (and optionally
     * script versions) match, otherwise it will wait until an update is found
     * and activates.
     *
     * @return {Promise<ServiceWorker>}
     */
    get active() {
      return this._activeDeferred.promise;
    }
    /**
     * Resolves to the service worker registered by this instance as soon as it
     * is controlling the page. If a service worker was already controlling at
     * registration time then it will resolve to that if the script URLs (and
     * optionally script versions) match, otherwise it will wait until an update
     * is found and starts controlling the page.
     * Note: the first time a service worker is installed it will active but
     * not start controlling the page unless `clients.claim()` is called in the
     * service worker.
     *
     * @return {Promise<ServiceWorker>}
     */
    get controlling() {
      return this._controllingDeferred.promise;
    }
    /**
     * Resolves with a reference to a service worker that matches the script URL
     * of this instance, as soon as it's available.
     *
     * If, at registration time, there's already an active or waiting service
     * worker with a matching script URL, it will be used (with the waiting
     * service worker taking precedence over the active service worker if both
     * match, since the waiting service worker would have been registered more
     * recently).
     * If there's no matching active or waiting service worker at registration
     * time then the promise will not resolve until an update is found and starts
     * installing, at which point the installing service worker is used.
     *
     * @return {Promise<ServiceWorker>}
     */
    getSW() {
      return this._sw !== void 0 ? Promise.resolve(this._sw) : this._swDeferred.promise;
    }
    /**
     * Sends the passed data object to the service worker registered by this
     * instance (via {@link workbox-window.Workbox#getSW}) and resolves
     * with a response (if any).
     *
     * A response can be set in a message handler in the service worker by
     * calling `event.ports[0].postMessage(...)`, which will resolve the promise
     * returned by `messageSW()`. If no response is set, the promise will never
     * resolve.
     *
     * @param {Object} data An object to send to the service worker
     * @return {Promise<Object>}
     */
    // We might be able to change the 'data' type to Record<string, unknown> in the future.
    // eslint-disable-next-line @typescript-eslint/ban-types
    async messageSW(data) {
      const sw = await this.getSW();
      return messageSW(sw, data);
    }
    /**
     * Sends a `{type: 'SKIP_WAITING'}` message to the service worker that's
     * currently in the `waiting` state associated with the current registration.
     *
     * If there is no current registration or no service worker is `waiting`,
     * calling this will have no effect.
     */
    messageSkipWaiting() {
      if (this._registration && this._registration.waiting) {
        void messageSW(this._registration.waiting, SKIP_WAITING_MESSAGE);
      }
    }
    /**
     * Checks for a service worker already controlling the page and returns
     * it if its script URL matches.
     *
     * @private
     * @return {ServiceWorker|undefined}
     */
    _getControllingSWIfCompatible() {
      const controller = navigator.serviceWorker.controller;
      if (controller && urlsMatch(controller.scriptURL, this._scriptURL.toString())) {
        return controller;
      } else {
        return void 0;
      }
    }
    /**
     * Registers a service worker for this instances script URL and register
     * options and tracks the time registration was complete.
     *
     * @private
     */
    async _registerScript() {
      try {
        const reg = await navigator.serviceWorker.register(this._scriptURL, this._registerOptions);
        this._registrationTime = performance.now();
        return reg;
      } catch (error) {
        if (true) {
          logger.error(error);
        }
        throw error;
      }
    }
  };

  // sw-injector-template.js
  if (!navigator?.serviceWorker)
    throw new Error("no serviceWorker in navigator, no sw will be injected");
  var throttle = (func, delay) => {
    let timeout = null;
    return function(...args) {
      if (timeout === null) {
        func.apply(this, args);
        timeout = setTimeout(() => {
          timeout = null;
        }, delay);
      }
    };
  };
  var fetchError = {
    generic: throttle(
      () => {
        JqueryUtil.doToast({
          content: `Failed to fetch some generic content\u2014you are offline and have not viewed this content before. Pages may not load correctly.`,
          type: "warning",
          autoHideTime: 2500
        });
      },
      1e4
      /* 10 seconds */
    ),
    json: throttle(
      () => {
        JqueryUtil.doToast({
          content: `Failed to fetch data\u2014you are offline and have not viewed this content before. This page may not load correctly.`,
          type: "danger",
          autoHideTime: 9e3
        });
      },
      2e3
      /* 2 seconds */
    ),
    image: throttle(
      () => {
        JqueryUtil.doToast({
          content: `Failed to fetch images\u2014you are offline and have not viewed this content before. Images may not display correctly.`,
          type: "info",
          autoHideTime: 5e3
        });
      },
      6e4
      /* 60 seconds */
    )
  };
  var wb = new Workbox("sw.js");
  wb.addEventListener("controlling", () => {
    const lnk = ee`<a href="${Renderer.get().baseUrl}changelog.html" class="alert-link">changelog</a>`.onn("click", (evt) => {
      evt.stopPropagation();
    });
    JqueryUtil.doToast({
      content: ee`<div>${window.location.hostname} has been updated\u2014reload to see new content, and ensure the page is displayed correctly. See the ${lnk} for more info!</div>`,
      type: "success",
      isAutoHide: false
      // never auto hide - this warning is important
    });
  });
  wb.register();
  var swCacheRoutes = (routeRegex) => {
    wb.messageSW({
      type: "CACHE_ROUTES",
      payload: { routeRegex }
    });
    JqueryUtil.doToast({ content: "Starting preload...", autoHideTime: 500 });
  };
  var swCancelCacheRoutes = () => {
    wb.messageSW({ type: "CANCEL_CACHE_ROUTES" });
    setTimeout(() => {
      removeDownloadBar();
      JqueryUtil.doToast("Preload was canceled. Some data may have been preloaded.");
    }, 1e3);
  };
  var swResetAll = () => {
    wb.messageSW({ type: "RESET" });
    JqueryUtil.doToast({ content: "Resetting..." });
  };
  globalThis.swCacheRoutes = swCacheRoutes;
  globalThis.swResetAll = swResetAll;
  var downloadBar = null;
  var removeDownloadBar = () => {
    if (downloadBar === null)
      return;
    downloadBar.$wrapOuter.remove();
    downloadBar = null;
  };
  var initDownloadBar = () => {
    if (downloadBar !== null)
      removeDownloadBar();
    const $displayProgress = $(`<div class="page__disp-download-progress-bar"></div>`);
    const $displayPercent = $(`<div class="page__disp-download-progress-text ve-flex-vh-center bold">0%</div>`);
    const $btnCancel = $(`<button class="ve-btn ve-btn-default"><span class="glyphicon glyphicon-remove"></span></button>`).click(() => {
      swCancelCacheRoutes();
    });
    const $wrapBar = $$`<div class="page__wrp-download-bar w-100 relative mr-2">${$displayProgress}${$displayPercent}</div>`;
    const $wrapOuter = $$`<div class="page__wrp-download">
			${$wrapBar}
			${$btnCancel}
		</div>`.appendTo(document.body);
    downloadBar = { $wrapOuter, $wrapBar, $displayProgress, $displayPercent };
  };
  var updateDownloadBar = (msg) => {
    if (downloadBar === null)
      initDownloadBar();
    switch (msg.type) {
      case "CACHE_ROUTES_PROGRESS":
        const percent = `${(100 * (msg.payload.fetched / msg.payload.fetchTotal)).toFixed(3)}%`;
        downloadBar.$displayProgress.css("width", percent);
        downloadBar.$displayPercent.text(percent);
        if (msg.payload.fetched === msg.payload.fetchTotal)
          finishedDownload();
        break;
      case "CACHE_ROUTES_ERROR":
        for (const error of msg.payload.errors) {
          console.error(error);
        }
        downloadBar.$wrapBar.addClass("page__wrp-download-bar--error");
        downloadBar.$displayProgress.addClass("page__disp-download-progress-bar--error");
        downloadBar.$displayPercent.text("Error!");
        setTimeout(() => {
          removeDownloadBar();
          JqueryUtil.doToast({
            type: "warning",
            autoHideTime: 15e3,
            content: `An error occurred while preloading.
					You may have gone offline, or the server may not be responding.
					Please try again. ${VeCt.STR_SEE_CONSOLE}`
          });
        }, 2e3);
        break;
    }
  };
  var finishedDownload = () => {
    removeDownloadBar();
    JqueryUtil.doToast({ type: "success", content: "Preload complete! The preloaded content is now ready for offline use." });
  };
  wb.addEventListener("message", (event) => {
    const msg = event.data;
    switch (msg.type) {
      case "FETCH_ERROR":
        fetchError[msg.payload]();
        break;
      case "CACHE_ROUTES_PROGRESS":
      case "CACHE_ROUTES_ERROR":
        updateDownloadBar(msg);
        break;
    }
  });
})();
