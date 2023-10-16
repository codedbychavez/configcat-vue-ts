var le = function(t, e) {
  return le = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, le(t, e);
};
function _(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  le(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var k = function() {
  return k = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, k.apply(this, arguments);
};
function S(t, e, r, n) {
  function i(o) {
    return o instanceof r ? o : new r(function(s) {
      s(o);
    });
  }
  return new (r || (r = Promise))(function(o, s) {
    function a(l) {
      try {
        u(n.next(l));
      } catch (h) {
        s(h);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (h) {
        s(h);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(a, c);
    }
    u((n = n.apply(t, e || [])).next());
  });
}
function O(t, e) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done)
          return o;
        switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
          case 0:
          case 1:
            o = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = u;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(u);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = e.call(t, r);
      } catch (l) {
        u = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function je() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), i = 0, e = 0; e < r; e++)
    for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++)
      n[i] = o[s];
  return n;
}
function A(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
var j;
(function(t) {
  t[t.Fetched = 0] = "Fetched", t[t.NotModified = 1] = "NotModified", t[t.Errored = 2] = "Errored";
})(j || (j = {}));
var q = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.status = e, this.config = r, this.errorMessage = n, this.errorException = i;
    }
    return t.success = function(e) {
      return new t(j.Fetched, e);
    }, t.notModified = function(e) {
      return new t(j.NotModified, e);
    }, t.error = function(e, r, n) {
      return new t(j.Errored, e, r ?? "Unknown error.", n);
    }, t;
  }()
), Ke = (
  /** @class */
  function(t) {
    _(e, t);
    function e(r) {
      for (var n = [], i = 1; i < arguments.length; i++)
        n[i - 1] = arguments[i];
      var o = t.call(this, function(s, a) {
        switch (s) {
          case "abort":
            return "Request was aborted.";
          case "timeout":
            var c = a[0];
            return "Request timed out. Timeout value: " + c + "ms";
          case "failure":
            var u = a[0], l = "Request failed due to a network or protocol error.";
            return u ? l + " " + (u instanceof Error ? u.message : u + "") : l;
        }
      }(r, n)) || this;
      return o.cause = r, o instanceof e || (Object.setPrototypeOf || function(s, a) {
        return s.__proto__ = a;
      })(o, e.prototype), o.args = n, o;
    }
    return e;
  }(Error)
), M = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.configJson = e, this.config = r, this.timestamp = n, this.httpETag = i;
    }
    return t.equals = function(e, r) {
      return e.httpETag && r.httpETag ? e.httpETag === r.httpETag : e.configJson === r.configJson;
    }, t.prototype.with = function(e) {
      return new t(this.configJson, this.config, e, this.httpETag);
    }, Object.defineProperty(t.prototype, "isEmpty", {
      get: function() {
        return !this.config;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.isExpired = function(e) {
      return this === t.empty || this.timestamp + e < t.generateTimestamp();
    }, t.generateTimestamp = function() {
      return (/* @__PURE__ */ new Date()).getTime();
    }, t.serialize = function(e) {
      var r, n;
      return e.timestamp + `
` + ((r = e.httpETag) !== null && r !== void 0 ? r : "") + `
` + ((n = e.configJson) !== null && n !== void 0 ? n : "");
    }, t.deserialize = function(e) {
      for (var r = Array(2), n = 0, i = 0; i < r.length; i++) {
        if (n = e.indexOf(`
`, n), n < 0)
          throw new Error("Number of values is fewer than expected.");
        r[i] = n++;
      }
      var o = r[0], s = e.substring(0, o), a = parseInt(s);
      if (isNaN(a))
        throw new Error("Invalid fetch time: " + s);
      n = o + 1, o = r[1], s = e.substring(n, o);
      var c = s.length > 0 ? s : void 0;
      n = o + 1, s = e.substring(n);
      var u, l;
      if (s.length > 0) {
        try {
          u = new fe(JSON.parse(s));
        } catch {
          throw new Error("Invalid config JSON content: " + s);
        }
        l = s;
      }
      return new t(l, u, a, c);
    }, t.serializationFormatVersion = "v2", t.empty = new t(void 0, void 0, 0, void 0), t;
  }()
), fe = (
  /** @class */
  function() {
    function t(e) {
      this.settings = e.f ? Object.fromEntries(Object.entries(e.f).map(function(r) {
        var n = r[0], i = r[1];
        return [n, new _e(i)];
      })) : {}, this.preferences = e.p ? new ze(e.p) : void 0;
    }
    return t;
  }()
), $;
(function(t) {
  t[t.No = 0] = "No", t[t.Should = 1] = "Should", t[t.Force = 2] = "Force";
})($ || ($ = {}));
var ze = (
  /** @class */
  function() {
    function t(e) {
      this.baseUrl = e.u, this.redirectMode = e.r;
    }
    return t;
  }()
), de;
(function(t) {
  t[t.Boolean = 0] = "Boolean", t[t.String = 1] = "String", t[t.Int = 2] = "Int", t[t.Double = 3] = "Double";
})(de || (de = {}));
var _e = (
  /** @class */
  function() {
    function t(e) {
      var r, n, i, o;
      this.value = e.v, this.type = e.t, this.percentageOptions = (n = (r = e.p) === null || r === void 0 ? void 0 : r.map(function(s) {
        return new Ge(s);
      })) !== null && n !== void 0 ? n : [], this.targetingRules = (o = (i = e.r) === null || i === void 0 ? void 0 : i.map(function(s) {
        return new Be(s);
      })) !== null && o !== void 0 ? o : [], this.variationId = e.i;
    }
    return t.fromValue = function(e) {
      return new t({
        t: -1,
        v: e
      });
    }, t;
  }()
), g;
(function(t) {
  t[t.In = 0] = "In", t[t.NotIn = 1] = "NotIn", t[t.Contains = 2] = "Contains", t[t.NotContains = 3] = "NotContains", t[t.SemVerIn = 4] = "SemVerIn", t[t.SemVerNotIn = 5] = "SemVerNotIn", t[t.SemVerLessThan = 6] = "SemVerLessThan", t[t.SemVerLessThanEqual = 7] = "SemVerLessThanEqual", t[t.SemVerGreaterThan = 8] = "SemVerGreaterThan", t[t.SemVerGreaterThanEqual = 9] = "SemVerGreaterThanEqual", t[t.NumberEqual = 10] = "NumberEqual", t[t.NumberNotEqual = 11] = "NumberNotEqual", t[t.NumberLessThan = 12] = "NumberLessThan", t[t.NumberLessThanEqual = 13] = "NumberLessThanEqual", t[t.NumberGreaterThan = 14] = "NumberGreaterThan", t[t.NumberGreaterThanEqual = 15] = "NumberGreaterThanEqual", t[t.SensitiveOneOf = 16] = "SensitiveOneOf", t[t.SensitiveNotOneOf = 17] = "SensitiveNotOneOf";
})(g || (g = {}));
var Be = (
  /** @class */
  function() {
    function t(e) {
      this.order = e.o, this.comparisonAttribute = e.a, this.comparator = e.t, this.comparisonValue = e.c, this.value = e.v, this.variationId = e.i;
    }
    return t;
  }()
), Ge = (
  /** @class */
  function() {
    function t(e) {
      this.order = e.o, this.percentage = e.p, this.value = e.v, this.variationId = e.i;
    }
    return t;
  }()
), ie = (
  /** @class */
  function() {
    function t(e, r) {
      this.errorMessage = e, this.errorException = r;
    }
    return Object.defineProperty(t.prototype, "isSuccess", {
      /** Indicates whether the operation was successful or not. */
      get: function() {
        return this.errorMessage === null;
      },
      enumerable: !1,
      configurable: !0
    }), t.from = function(e) {
      return e.status !== j.Errored ? t.success() : t.failure(e.errorMessage, e.errorException);
    }, t.success = function() {
      return new t(null);
    }, t.failure = function(e, r) {
      return new t(e, r);
    }, t;
  }()
), L;
(function(t) {
  t[t.NoFlagData = 0] = "NoFlagData", t[t.HasLocalOverrideFlagDataOnly = 1] = "HasLocalOverrideFlagDataOnly", t[t.HasCachedFlagDataOnly = 2] = "HasCachedFlagDataOnly", t[t.HasUpToDateFlagData = 3] = "HasUpToDateFlagData";
})(L || (L = {}));
var w;
(function(t) {
  t[t.Online = 0] = "Online", t[t.Offline = 1] = "Offline", t[t.Disposed = 2] = "Disposed";
})(w || (w = {}));
var pe = (
  /** @class */
  function() {
    function t(e, r) {
      this.configFetcher = e, this.options = r, this.pendingFetch = null, this.cacheKey = r.getCacheKey(), this.configFetcher = e, this.options = r, this.status = r.offline ? w.Offline : w.Online;
    }
    return t.prototype.dispose = function() {
      this.status = w.Disposed;
    }, Object.defineProperty(t.prototype, "disposed", {
      get: function() {
        return this.status === w.Disposed;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.refreshConfigAsync = function() {
      return S(this, void 0, void 0, function() {
        var e, r, n, i, o;
        return O(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, this.options.cache.get(this.cacheKey)];
            case 1:
              return e = s.sent(), this.isOffline ? [3, 3] : [4, this.refreshConfigCoreAsync(e)];
            case 2:
              return r = s.sent(), n = r[0], i = r[1], [2, [ie.from(n), i]];
            case 3:
              return o = this.options.logger.configServiceCannotInitiateHttpCalls().toString(), [2, [ie.failure(o), e]];
          }
        });
      });
    }, t.prototype.refreshConfigCoreAsync = function(e) {
      return S(this, void 0, void 0, function() {
        var r, n;
        return O(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.fetchAsync(e)];
            case 1:
              return r = i.sent(), n = r.status === j.Fetched, n || r.config.timestamp > e.timestamp && (!r.config.isEmpty || e.isEmpty) ? [4, this.options.cache.set(this.cacheKey, r.config)] : [3, 3];
            case 2:
              i.sent(), this.onConfigUpdated(r.config), n && !M.equals(r.config, e) && this.onConfigChanged(r.config), e = r.config, i.label = 3;
            case 3:
              return [2, [r, e]];
          }
        });
      });
    }, t.prototype.onConfigUpdated = function(e) {
    }, t.prototype.onConfigChanged = function(e) {
      var r;
      this.options.logger.debug("config changed"), this.options.hooks.emit("configChanged", (r = e.config) !== null && r !== void 0 ? r : new fe({}));
    }, t.prototype.fetchAsync = function(e) {
      var r = this, n;
      return (n = this.pendingFetch) !== null && n !== void 0 ? n : this.pendingFetch = function() {
        return S(r, void 0, void 0, function() {
          return O(this, function(i) {
            switch (i.label) {
              case 0:
                return i.trys.push([0, , 2, 3]), [4, this.fetchLogicAsync(e)];
              case 1:
                return [2, i.sent()];
              case 2:
                return this.pendingFetch = null, [
                  7
                  /*endfinally*/
                ];
              case 3:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }();
    }, t.prototype.fetchLogicAsync = function(e) {
      var r;
      return S(this, void 0, void 0, function() {
        var n, i, o, s, a, c;
        return O(this, function(u) {
          switch (u.label) {
            case 0:
              n = this.options, n.logger.debug("ConfigServiceBase.fetchLogicAsync() - called."), u.label = 1;
            case 1:
              return u.trys.push([1, 3, , 4]), [4, this.fetchRequestAsync((r = e.httpETag) !== null && r !== void 0 ? r : null)];
            case 2:
              switch (o = u.sent(), s = o[0], a = o[1], s.statusCode) {
                case 200:
                  return a ? (n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was successful. Returning new config."), [2, q.success(new M(s.body, a, M.generateTimestamp(), s.eTag))]) : (i = n.logger.fetchReceived200WithInvalidBody().toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): " + s.statusCode + " " + s.reasonPhrase + " was received but the HTTP response content was invalid. Returning null."), [2, q.error(e, i)]);
                case 304:
                  return e ? (n.logger.debug("ConfigServiceBase.fetchLogicAsync(): content was not modified. Returning last config with updated timestamp."), [2, q.notModified(e.with(M.generateTimestamp()))]) : (i = n.logger.fetchReceived304WhenLocalCacheIsEmpty(s.statusCode, s.reasonPhrase).toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): " + s.statusCode + " " + s.reasonPhrase + " was received when no config is cached locally. Returning null."), [2, q.error(e, i)]);
                case 403:
                case 404:
                  return i = n.logger.fetchFailedDueToInvalidSdkKey().toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning last config (if any) with updated timestamp."), [2, q.error(e.with(M.generateTimestamp()), i)];
                default:
                  return i = n.logger.fetchFailedDueToUnexpectedHttpResponse(s.statusCode, s.reasonPhrase).toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning null."), [2, q.error(e, i)];
              }
              return [3, 4];
            case 3:
              return c = u.sent(), i = (c instanceof Ke && c.cause === "timeout" ? n.logger.fetchFailedDueToRequestTimeout(c.args[0], c) : n.logger.fetchFailedDueToUnexpectedError(c)).toString(), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning null."), [2, q.error(e, i, c)];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.fetchRequestAsync = function(e, r) {
      return r === void 0 && (r = 2), S(this, void 0, void 0, function() {
        var n, i, o, s, a, c, u;
        return O(this, function(l) {
          switch (l.label) {
            case 0:
              n = this.options, n.logger.debug("ConfigServiceBase.fetchRequestAsync() - called."), i = 0, l.label = 1;
            case 1:
              return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): calling fetchLogic()" + (i > 0 ? ", retry " + i + "/" + r : "")), [4, this.configFetcher.fetchLogic(n, e)];
            case 2:
              if (o = l.sent(), o.statusCode !== 200)
                return [2, [o]];
              if (!o.body)
                return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): no response body."), [2, [o]];
              s = void 0;
              try {
                s = new fe(JSON.parse(o.body));
              } catch {
                return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): invalid response body."), [2, [o]];
              }
              if (a = s.preferences, !a)
                return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): preferences is empty."), [2, [o, s]];
              if (c = a.baseUrl, !c || c === n.baseUrl)
                return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): baseUrl OK."), [2, [o, s]];
              if (u = a.redirectMode, n.baseUrlOverriden && u !== $.Force)
                return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): options.baseUrlOverriden && redirect !== 2."), [2, [o, s]];
              if (n.baseUrl = c, u === $.No)
                return [2, [o, s]];
              if (u === $.Should && n.logger.dataGovernanceIsOutOfSync(), i >= r)
                return n.logger.fetchFailedDueToRedirectLoop(), [2, [o, s]];
              l.label = 3;
            case 3:
              return i++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, Object.defineProperty(t.prototype, "isOfflineExactly", {
      get: function() {
        return this.status === w.Offline;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "isOffline", {
      get: function() {
        return this.status !== w.Online;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.setOnlineCore = function() {
    }, t.prototype.setOnline = function() {
      this.status === w.Offline ? (this.setOnlineCore(), this.status = w.Online, this.options.logger.configServiceStatusChanged(w[this.status])) : this.disposed && this.options.logger.configServiceMethodHasNoEffectDueToDisposedClient("setOnline");
    }, t.prototype.setOfflineCore = function() {
    }, t.prototype.setOffline = function() {
      this.status === w.Online ? (this.setOfflineCore(), this.status = w.Offline, this.options.logger.configServiceStatusChanged(w[this.status])) : this.disposed && this.options.logger.configServiceMethodHasNoEffectDueToDisposedClient("setOffline");
    }, t.prototype.onCacheSynced = function(e) {
      this.options.hooks.emit("clientReady", this.getCacheState(e));
    }, t.prototype.syncUpWithCache = function() {
      return S(this, void 0, void 0, function() {
        var e;
        return O(this, function(r) {
          switch (r.label) {
            case 0:
              return [4, this.options.cache.get(this.cacheKey)];
            case 1:
              return e = r.sent(), this.onCacheSynced(e), [2, e];
          }
        });
      });
    }, t;
  }()
);
function Je(t, e) {
  var r, n = new Promise(function(i) {
    return r = setTimeout(i, t);
  });
  return e && (e.clearTimer = function() {
    return clearTimeout(r);
  }), n;
}
function K(t, e) {
  return e === void 0 && (e = !1), t instanceof Error ? e && t.stack ? t.stack : t.toString() : t + "";
}
function Ye(t) {
  var e;
  return typeof ((e = t) === null || e === void 0 ? void 0 : e.then) == "function";
}
var $e = (
  /** @class */
  function(t) {
    _(e, t);
    function e(r, n) {
      var i = t.call(this, r, n) || this;
      i.signalInitialization = function() {
      }, i.pollIntervalMs = n.pollIntervalSeconds * 1e3;
      var o = t.prototype.syncUpWithCache.call(i);
      return n.maxInitWaitTimeSeconds !== 0 ? (i.initialized = !1, i.initialization = new Promise(function(s) {
        return i.signalInitialization = function() {
          i.initialized = !0, clearTimeout(i.initTimerId), s();
        };
      }), i.initialization.then(function() {
        return t.prototype.onCacheSynced.call(i, n.cache.getInMemory());
      }), n.maxInitWaitTimeSeconds > 0 && (i.initTimerId = setTimeout(function() {
        return i.signalInitialization();
      }, n.maxInitWaitTimeSeconds * 1e3))) : (i.initialized = !0, i.initialization = Promise.resolve(), o.then(function(s) {
        return t.prototype.onCacheSynced.call(i, s);
      })), n.offline || i.startRefreshWorker(o), i;
    }
    return e.prototype.onCacheSynced = function() {
    }, e.prototype.waitForInitializationAsync = function() {
      return S(this, void 0, void 0, function() {
        var r, n;
        return O(this, function(i) {
          switch (i.label) {
            case 0:
              return this.options.maxInitWaitTimeSeconds < 0 ? [4, this.initialization] : [3, 2];
            case 1:
              return i.sent(), [2, !0];
            case 2:
              return r = {}, [4, Promise.race([
                this.initialization.then(function() {
                  return !0;
                }),
                Je(this.options.maxInitWaitTimeSeconds * 1e3, r).then(function() {
                  return !1;
                })
              ])];
            case 3:
              return n = i.sent(), r.clearTimer(), [2, n];
          }
        });
      });
    }, e.prototype.getConfig = function() {
      return S(this, void 0, void 0, function() {
        function r(i) {
          i.debug("AutoPollConfigService.getConfig() - returning value from cache.");
        }
        var n;
        return O(this, function(i) {
          switch (i.label) {
            case 0:
              return this.options.logger.debug("AutoPollConfigService.getConfig() called."), !this.isOffline && !this.initialized ? [4, this.options.cache.get(this.cacheKey)] : [3, 3];
            case 1:
              return n = i.sent(), n.isExpired(this.pollIntervalMs) ? (this.options.logger.debug("AutoPollConfigService.getConfig() - cache is empty or expired, waiting for initialization."), [4, this.waitForInitializationAsync()]) : (r(this.options.logger), [2, n]);
            case 2:
              i.sent(), i.label = 3;
            case 3:
              return [4, this.options.cache.get(this.cacheKey)];
            case 4:
              return n = i.sent(), n.isExpired(this.pollIntervalMs) ? this.options.logger.debug("AutoPollConfigService.getConfig() - cache is empty or expired.") : r(this.options.logger), [2, n];
          }
        });
      });
    }, e.prototype.refreshConfigAsync = function() {
      return this.options.logger.debug("AutoPollConfigService.refreshConfigAsync() called."), t.prototype.refreshConfigAsync.call(this);
    }, e.prototype.dispose = function() {
      this.options.logger.debug("AutoPollConfigService.dispose() called."), t.prototype.dispose.call(this), this.workerTimerId && this.stopRefreshWorker();
    }, e.prototype.onConfigUpdated = function(r) {
      t.prototype.onConfigUpdated.call(this, r), this.signalInitialization();
    }, e.prototype.setOnlineCore = function() {
      this.startRefreshWorker();
    }, e.prototype.setOfflineCore = function() {
      this.stopRefreshWorker();
    }, e.prototype.startRefreshWorker = function(r) {
      return S(this, void 0, void 0, function() {
        var n, i, o = this;
        return O(this, function(s) {
          switch (s.label) {
            case 0:
              return this.options.logger.debug("AutoPollConfigService.startRefreshWorker() called."), n = this.pollIntervalMs, [4, r ?? this.options.cache.get(this.cacheKey)];
            case 1:
              return i = s.sent(), i.isExpired(this.pollIntervalMs) ? this.isOfflineExactly ? [3, 3] : [4, this.refreshConfigCoreAsync(i)] : [3, 4];
            case 2:
              s.sent(), s.label = 3;
            case 3:
              return [3, 5];
            case 4:
              this.signalInitialization(), s.label = 5;
            case 5:
              return this.options.logger.debug("AutoPollConfigService.startRefreshWorker() - calling refreshWorkerLogic()'s setTimeout."), this.workerTimerId = setTimeout(function(a) {
                return o.refreshWorkerLogic(a);
              }, n, n), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.stopRefreshWorker = function() {
      this.options.logger.debug("AutoPollConfigService.stopRefreshWorker() - clearing setTimeout."), clearTimeout(this.workerTimerId);
    }, e.prototype.refreshWorkerLogic = function(r) {
      return S(this, void 0, void 0, function() {
        var n, i = this;
        return O(this, function(o) {
          switch (o.label) {
            case 0:
              return this.disposed ? (this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called on a disposed client."), [
                2
                /*return*/
              ]) : (this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called."), this.isOffline ? [3, 3] : [4, this.options.cache.get(this.cacheKey)]);
            case 1:
              return n = o.sent(), [4, this.refreshConfigCoreAsync(n)];
            case 2:
              o.sent(), o.label = 3;
            case 3:
              return this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - calling refreshWorkerLogic()'s setTimeout."), this.workerTimerId = setTimeout(function(s) {
                return i.refreshWorkerLogic(s);
              }, r, r), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getCacheState = function(r) {
      return r.isEmpty ? L.NoFlagData : r.isExpired(this.pollIntervalMs) ? L.HasCachedFlagDataOnly : L.HasUpToDateFlagData;
    }, e;
  }(pe)
), Xe = (
  /** @class */
  function() {
    function t() {
      this.cachedConfig = M.empty;
    }
    return t.prototype.set = function(e, r) {
      this.cachedConfig = r;
    }, t.prototype.get = function(e) {
      return this.cachedConfig;
    }, t.prototype.getInMemory = function() {
      return this.cachedConfig;
    }, t;
  }()
), Ze = (
  /** @class */
  function() {
    function t(e, r) {
      this.cache = e, this.logger = r, this.cachedConfig = M.empty;
    }
    return t.prototype.set = function(e, r) {
      return S(this, void 0, void 0, function() {
        var n;
        return O(this, function(i) {
          switch (i.label) {
            case 0:
              if (i.trys.push([0, 2, , 3]), !r.isEmpty)
                this.cachedSerializedConfig = M.serialize(r), this.cachedConfig = r;
              else
                return this.cachedSerializedConfig = void 0, this.cachedConfig = r, [
                  2
                  /*return*/
                ];
              return [4, this.cache.set(e, this.cachedSerializedConfig)];
            case 1:
              return i.sent(), [3, 3];
            case 2:
              return n = i.sent(), this.logger.configServiceCacheWriteError(n), [3, 3];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.updateCachedConfig = function(e) {
      e == null || e === this.cachedSerializedConfig || (this.cachedConfig = M.deserialize(e), this.cachedSerializedConfig = e);
    }, t.prototype.get = function(e) {
      var r = this;
      try {
        var n = this.cache.get(e);
        if (Ye(n))
          return function(i) {
            return S(r, void 0, void 0, function() {
              var o, s;
              return O(this, function(a) {
                switch (a.label) {
                  case 0:
                    return a.trys.push([0, 2, , 3]), o = this.updateCachedConfig, [4, i];
                  case 1:
                    return o.apply(this, [a.sent()]), [3, 3];
                  case 2:
                    return s = a.sent(), this.logger.configServiceCacheReadError(s), [3, 3];
                  case 3:
                    return [2, this.cachedConfig];
                }
              });
            });
          }(n);
        this.updateCachedConfig(n);
      } catch (i) {
        this.logger.configServiceCacheReadError(i);
      }
      return Promise.resolve(this.cachedConfig);
    }, t.prototype.getInMemory = function() {
      return this.cachedConfig;
    }, t;
  }()
), d;
(function(t) {
  t[t.Debug = 4] = "Debug", t[t.Info = 3] = "Info", t[t.Warn = 2] = "Warn", t[t.Error = 1] = "Error", t[t.Off = -1] = "Off";
})(d || (d = {}));
var T = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.strings = e, this.argNames = r, this.argValues = n;
    }
    return t.from = function() {
      for (var e = [], r = 0; r < arguments.length; r++)
        e[r] = arguments[r];
      return function(n) {
        for (var i = [], o = 1; o < arguments.length; o++)
          i[o - 1] = arguments[o];
        return new t(n, e, i);
      };
    }, Object.defineProperty(t.prototype, "defaultFormattedMessage", {
      get: function() {
        var e = this.cachedDefaultFormattedMessage;
        if (e === void 0) {
          e = "";
          for (var r = this, n = r.strings, i = r.argValues, o = 0; o < n.length - 1; o++)
            e += n[o], e += i[o];
          e += n[o], this.cachedDefaultFormattedMessage = e;
        }
        return e;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.toString = function() {
      return this.defaultFormattedMessage;
    }, t;
  }()
), Qe = (
  /** @class */
  function() {
    function t(e, r) {
      this.logger = e, this.hooks = r;
    }
    return Object.defineProperty(t.prototype, "level", {
      get: function() {
        var e;
        return (e = this.logger.level) !== null && e !== void 0 ? e : d.Warn;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.isLogLevelEnabled = function(e) {
      return this.level >= e;
    }, t.prototype.log = function(e, r, n, i) {
      var o;
      return this.isLogLevelEnabled(e) && this.logger.log(e, r, n, i), e === d.Error && ((o = this.hooks) === null || o === void 0 || o.emit("clientError", n.toString(), i)), n;
    }, t.prototype.debug = function(e) {
      this.log(d.Debug, 0, e);
    }, t.prototype.configJsonIsNotPresent = function(e) {
      return this.log(d.Error, 1e3, T.from("DEFAULT_RETURN_VALUE")(ye || (ye = A(["Config JSON is not present. Returning ", "."], ["Config JSON is not present. Returning ", "."])), e));
    }, t.prototype.configJsonIsNotPresentSingle = function(e, r, n) {
      return this.log(d.Error, 1e3, T.from("KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE")(me || (me = A(["Config JSON is not present when evaluating setting '", "'. Returning the `", "` parameter that you specified in your application: '", "'."], ["Config JSON is not present when evaluating setting '", "'. Returning the \\`", "\\` parameter that you specified in your application: '", "'."])), e, r, n));
    }, t.prototype.settingEvaluationFailedDueToMissingKey = function(e, r, n, i) {
      return this.log(d.Error, 1001, T.from("KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE", "AVAILABLE_KEYS")(Ee || (Ee = A(["Failed to evaluate setting '", "' (the key was not found in config JSON). Returning the `", "` parameter that you specified in your application: '", "'. Available keys: [", "]."], ["Failed to evaluate setting '", "' (the key was not found in config JSON). Returning the \\`", "\\` parameter that you specified in your application: '", "'. Available keys: [", "]."])), e, r, n, i));
    }, t.prototype.settingEvaluationError = function(e, r, n) {
      return this.log(d.Error, 1002, T.from("METHOD_NAME", "DEFAULT_RETURN_VALUE")(be || (be = A(["Error occurred in the `", "` method. Returning ", "."], ["Error occurred in the \\`", "\\` method. Returning ", "."])), e, r), n);
    }, t.prototype.settingEvaluationErrorSingle = function(e, r, n, i, o) {
      return this.log(d.Error, 1002, T.from("METHOD_NAME", "KEY", "DEFAULT_PARAM_NAME", "DEFAULT_PARAM_VALUE")(Se || (Se = A(["Error occurred in the `", "` method while evaluating setting '", "'. Returning the `", "` parameter that you specified in your application: '", "'."], ["Error occurred in the \\`", "\\` method while evaluating setting '", "'. Returning the \\`", "\\` parameter that you specified in your application: '", "'."])), e, r, n, i), o);
    }, t.prototype.forceRefreshError = function(e, r) {
      return this.log(d.Error, 1003, T.from("METHOD_NAME")(Oe || (Oe = A(["Error occurred in the `", "` method."], ["Error occurred in the \\`", "\\` method."])), e), r);
    }, t.prototype.fetchFailedDueToInvalidSdkKey = function() {
      return this.log(d.Error, 1100, "Your SDK Key seems to be wrong. You can find the valid SDK Key at https://app.configcat.com/sdkkey");
    }, t.prototype.fetchFailedDueToUnexpectedHttpResponse = function(e, r) {
      return this.log(d.Error, 1101, T.from("STATUS_CODE", "REASON_PHRASE")(Ae || (Ae = A(["Unexpected HTTP response was received while trying to fetch config JSON: ", " ", ""], ["Unexpected HTTP response was received while trying to fetch config JSON: ", " ", ""])), e, r));
    }, t.prototype.fetchFailedDueToRequestTimeout = function(e, r) {
      return this.log(d.Error, 1102, T.from("TIMEOUT")(Te || (Te = A(["Request timed out while trying to fetch config JSON. Timeout value: ", "ms"], ["Request timed out while trying to fetch config JSON. Timeout value: ", "ms"])), e), r);
    }, t.prototype.fetchFailedDueToUnexpectedError = function(e) {
      return this.log(d.Error, 1103, "Unexpected error occurred while trying to fetch config JSON.", e);
    }, t.prototype.fetchFailedDueToRedirectLoop = function() {
      return this.log(d.Error, 1104, "Redirection loop encountered while trying to fetch config JSON. Please contact us at https://configcat.com/support/");
    }, t.prototype.fetchReceived200WithInvalidBody = function() {
      return this.log(d.Error, 1105, "Fetching config JSON was successful but the HTTP response content was invalid.");
    }, t.prototype.fetchReceived304WhenLocalCacheIsEmpty = function(e, r) {
      return this.log(d.Error, 1106, T.from("STATUS_CODE", "REASON_PHRASE")(Ie || (Ie = A(["Unexpected HTTP response was received when no config JSON is cached locally: ", " ", ""], ["Unexpected HTTP response was received when no config JSON is cached locally: ", " ", ""])), e, r));
    }, t.prototype.settingForVariationIdIsNotPresent = function(e) {
      return this.log(d.Error, 2011, T.from("VARIATION_ID")(we || (we = A(["Could not find the setting for the specified variation ID: '", "'."], ["Could not find the setting for the specified variation ID: '", "'."])), e));
    }, t.prototype.configServiceCacheReadError = function(e) {
      return this.log(d.Error, 2200, "Error occurred while reading the cache.", e);
    }, t.prototype.configServiceCacheWriteError = function(e) {
      return this.log(d.Error, 2201, "Error occurred while writing the cache.", e);
    }, t.prototype.clientIsAlreadyCreated = function(e) {
      return this.log(d.Warn, 3e3, T.from("SDK_KEY")(Ce || (Ce = A(["There is an existing client instance for the specified SDK Key. No new client instance will be created and the specified options are ignored. Returning the existing client instance. SDK Key: '", "'."], ["There is an existing client instance for the specified SDK Key. No new client instance will be created and the specified options are ignored. Returning the existing client instance. SDK Key: '", "'."])), e));
    }, t.prototype.targetingIsNotPossible = function(e) {
      return this.log(d.Warn, 3001, T.from("KEY")(Ne || (Ne = A(["Cannot evaluate targeting rules and % options for setting '", "' (User Object is missing). You should pass a User Object to the evaluation methods like `getValueAsync()` in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/"], ["Cannot evaluate targeting rules and % options for setting '", "' (User Object is missing). You should pass a User Object to the evaluation methods like \\`getValueAsync()\\` in order to make targeting work properly. Read more: https://configcat.com/docs/advanced/user-object/"])), e));
    }, t.prototype.dataGovernanceIsOutOfSync = function() {
      return this.log(d.Warn, 3002, "The `dataGovernance` parameter specified at the client initialization is not in sync with the preferences on the ConfigCat Dashboard. Read more: https://configcat.com/docs/advanced/data-governance/");
    }, t.prototype.configServiceCannotInitiateHttpCalls = function() {
      return this.log(d.Warn, 3200, "Client is in offline mode, it cannot initiate HTTP calls.");
    }, t.prototype.configServiceMethodHasNoEffectDueToDisposedClient = function(e) {
      return this.log(d.Warn, 3201, T.from("METHOD_NAME")(Re || (Re = A(["The client object is already disposed, thus `", "()` has no effect."], ["The client object is already disposed, thus \\`", "()\\` has no effect."])), e));
    }, t.prototype.configServiceMethodHasNoEffectDueToOverrideBehavior = function(e, r) {
      return this.log(d.Warn, 3202, T.from("OVERRIDE_BEHAVIOR", "METHOD_NAME")(Le || (Le = A(["Client is configured to use the `", "` override behavior, thus `", "()` has no effect."], ["Client is configured to use the \\`", "\\` override behavior, thus \\`", "()\\` has no effect."])), e, r));
    }, t.prototype.settingEvaluated = function(e) {
      return this.log(d.Info, 5e3, T.from("EVALUATE_LOG")(De || (De = A(["", ""], ["", ""])), e));
    }, t.prototype.configServiceStatusChanged = function(e) {
      return this.log(d.Info, 5200, T.from("MODE")(Fe || (Fe = A(["Switched to ", " mode."], ["Switched to ", " mode."])), e.toUpperCase()));
    }, t;
  }()
), et = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = d.Warn), this.level = e, this.SOURCE = "ConfigCat";
    }
    return t.prototype.log = function(e, r, n, i) {
      var o = e === d.Debug ? [console.info, "DEBUG"] : e === d.Info ? [console.info, "INFO"] : e === d.Warn ? [console.warn, "WARN"] : e === d.Error ? [console.error, "ERROR"] : [console.log, d[e].toUpperCase()], s = o[0], a = o[1], c = i !== void 0 ? `
` + K(i, !0) : "";
      s(this.SOURCE + " - " + a + " - [" + r + "] " + n + c);
    }, t;
  }()
), ye, me, Ee, be, Se, Oe, Ae, Te, Ie, we, Ce, Ne, Re, Le, De, Fe;
function G(t) {
  return !!t.fn;
}
var tt = (
  /** @class */
  function() {
    function t() {
      this.events = {}, this.eventCount = 0, this.addListener = this.on, this.off = this.removeListener;
    }
    return t.prototype.addListenerCore = function(e, r, n) {
      if (typeof r != "function")
        throw new TypeError("Listener must be a function");
      var i = this.events[e], o = { fn: r, once: n };
      return i ? G(i) ? this.events[e] = [i, o] : i.push(o) : (this.events[e] = o, this.eventCount++), this;
    }, t.prototype.removeListenerCore = function(e, r, n) {
      var i = this.events[e];
      if (!i)
        return this;
      if (G(i))
        n(i, r) && this.removeEvent(e);
      else
        for (var o = i.length - 1; o >= 0; o--)
          if (n(i[o], r)) {
            i.splice(o, 1), i.length ? i.length === 1 && (this.events[e] = i[0]) : this.removeEvent(e);
            break;
          }
      return this;
    }, t.prototype.removeEvent = function(e) {
      --this.eventCount === 0 ? this.events = {} : delete this.events[e];
    }, t.prototype.on = function(e, r) {
      return this.addListenerCore(e, r, !1);
    }, t.prototype.once = function(e, r) {
      return this.addListenerCore(e, r, !0);
    }, t.prototype.removeListener = function(e, r) {
      if (typeof r != "function")
        throw new TypeError("Listener must be a function");
      return this.removeListenerCore(e, r, function(n, i) {
        return n.fn === i;
      });
    }, t.prototype.removeAllListeners = function(e) {
      return e ? this.events[e] && this.removeEvent(e) : (this.events = {}, this.eventCount = 0), this;
    }, t.prototype.listeners = function(e) {
      var r = this.events[e];
      if (!r)
        return [];
      if (G(r))
        return [r.fn];
      for (var n = r.length, i = new Array(n), o = 0; o < n; o++)
        i[o] = r[o].fn;
      return i;
    }, t.prototype.listenerCount = function(e) {
      var r = this.events[e];
      return r ? G(r) ? 1 : r.length : 0;
    }, t.prototype.eventNames = function() {
      var e = [];
      if (this.eventCount === 0)
        return e;
      var r = this.events;
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && e.push(n);
      return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(r)) : e;
    }, t.prototype.emit = function(e, r, n, i, o) {
      var s, a, c = this.events[e];
      if (!c)
        return !1;
      var u, l;
      G(c) ? (s = [c, 1], u = s[0], l = s[1]) : (c = c.slice(), a = [c[0], c.length], u = a[0], l = a[1]);
      for (var h = arguments.length - 1, p = 0; ; ) {
        switch (u.once && this.removeListenerCore(e, u, function(y, E) {
          return y === E;
        }), h) {
          case 0:
            u.fn.call(this);
            break;
          case 1:
            u.fn.call(this, r);
            break;
          case 2:
            u.fn.call(this, r, n);
            break;
          case 3:
            u.fn.call(this, r, n, i);
            break;
          case 4:
            u.fn.call(this, r, n, i, o);
            break;
          default:
            for (var f = new Array(h), v = 0; v < h; v++)
              f[v] = arguments[v + 1];
            u.fn.apply(this, f);
            break;
        }
        if (++p >= l)
          break;
        u = c[p];
      }
      return !0;
    }, t;
  }()
), rt = (
  /** @class */
  function() {
    function t() {
      this.addListener = this.on, this.off = this.removeListener;
    }
    return t.prototype.on = function() {
      return this;
    }, t.prototype.once = function() {
      return this;
    }, t.prototype.removeListener = function() {
      return this;
    }, t.prototype.removeAllListeners = function() {
      return this;
    }, t.prototype.listeners = function() {
      return [];
    }, t.prototype.listenerCount = function() {
      return 0;
    }, t.prototype.eventNames = function() {
      return [];
    }, t.prototype.emit = function() {
      return !1;
    }, t;
  }()
), bt = L, Ue = new rt(), nt = (
  /** @class */
  function() {
    function t(e) {
      this.addListener = this.on, this.off = this.removeListener, this.eventEmitter = e;
    }
    return t.prototype.tryDisconnect = function() {
      var e = this.eventEmitter;
      return this.eventEmitter = Ue, e !== Ue;
    }, t.prototype.on = function(e, r) {
      return this.eventEmitter.on(e, r), this;
    }, t.prototype.once = function(e, r) {
      return this.eventEmitter.once(e, r), this;
    }, t.prototype.removeListener = function(e, r) {
      return this.eventEmitter.removeListener(e, r), this;
    }, t.prototype.removeAllListeners = function(e) {
      return this.eventEmitter.removeAllListeners(e), this;
    }, t.prototype.listeners = function(e) {
      return this.eventEmitter.listeners(e);
    }, t.prototype.listenerCount = function(e) {
      return this.eventEmitter.listenerCount(e);
    }, t.prototype.eventNames = function() {
      return this.eventEmitter.eventNames();
    }, t.prototype.emit = function(e) {
      for (var r, n = [], i = 1; i < arguments.length; i++)
        n[i - 1] = arguments[i];
      return (r = this.eventEmitter).emit.apply(r, je([e], n));
    }, t;
  }()
);
function re(t) {
  function e(V, N) {
    var W = V << N | V >>> 32 - N;
    return W;
  }
  function r(V) {
    for (var N = "", W, R = 7; R >= 0; R--)
      W = V >>> R * 4 & 15, N += W.toString(16);
    return N;
  }
  function n(V) {
    V = V.replace(/\r\n/g, `
`);
    for (var N = "", W = 0; W < V.length; W++) {
      var R = V.charCodeAt(W);
      R < 128 ? N += String.fromCharCode(R) : R > 127 && R < 2048 ? (N += String.fromCharCode(R >> 6 | 192), N += String.fromCharCode(R & 63 | 128)) : (N += String.fromCharCode(R >> 12 | 224), N += String.fromCharCode(R >> 6 & 63 | 128), N += String.fromCharCode(R & 63 | 128));
    }
    return N;
  }
  var i, o, s, a = new Array(80), c = 1732584193, u = 4023233417, l = 2562383102, h = 271733878, p = 3285377520, f, v, y, E, C, P;
  t = n(t);
  var D = t.length, F = new Array();
  for (o = 0; o < D - 3; o += 4)
    s = t.charCodeAt(o) << 24 | t.charCodeAt(o + 1) << 16 | t.charCodeAt(o + 2) << 8 | t.charCodeAt(o + 3), F.push(s);
  switch (D % 4) {
    case 0:
      o = 2147483648;
      break;
    case 1:
      o = t.charCodeAt(D - 1) << 24 | 8388608;
      break;
    case 2:
      o = t.charCodeAt(D - 2) << 24 | t.charCodeAt(D - 1) << 16 | 32768;
      break;
    case 3:
      o = t.charCodeAt(D - 3) << 24 | t.charCodeAt(D - 2) << 16 | t.charCodeAt(D - 1) << 8 | 128;
      break;
  }
  for (F.push(o); F.length % 16 != 14; )
    F.push(0);
  for (F.push(D >>> 29), F.push(D << 3 & 4294967295), i = 0; i < F.length; i += 16) {
    for (o = 0; o < 16; o++)
      a[o] = F[i + o];
    for (o = 16; o <= 79; o++)
      a[o] = e(a[o - 3] ^ a[o - 8] ^ a[o - 14] ^ a[o - 16], 1);
    for (f = c, v = u, y = l, E = h, C = p, o = 0; o <= 19; o++)
      P = e(f, 5) + (v & y | ~v & E) + C + a[o] + 1518500249 & 4294967295, C = E, E = y, y = e(v, 30), v = f, f = P;
    for (o = 20; o <= 39; o++)
      P = e(f, 5) + (v ^ y ^ E) + C + a[o] + 1859775393 & 4294967295, C = E, E = y, y = e(v, 30), v = f, f = P;
    for (o = 40; o <= 59; o++)
      P = e(f, 5) + (v & y | v & E | y & E) + C + a[o] + 2400959708 & 4294967295, C = E, E = y, y = e(v, 30), v = f, f = P;
    for (o = 60; o <= 79; o++)
      P = e(f, 5) + (v ^ y ^ E) + C + a[o] + 3395469782 & 4294967295, C = E, E = y, y = e(v, 30), v = f, f = P;
    c = c + f & 4294967295, u = u + v & 4294967295, l = l + y & 4294967295, h = h + E & 4294967295, p = p + C & 4294967295;
  }
  return (r(c) + r(u) + r(l) + r(h) + r(p)).toLowerCase();
}
var X;
(function(t) {
  t[t.AutoPoll = 0] = "AutoPoll", t[t.LazyLoad = 1] = "LazyLoad", t[t.ManualPoll = 2] = "ManualPoll";
})(X || (X = {}));
var oe;
(function(t) {
  t[t.Global = 0] = "Global", t[t.EuOnly = 1] = "EuOnly";
})(oe || (oe = {}));
var ve = (
  /** @class */
  function() {
    function t(e, r, n, i, o) {
      var s = this, a, c, u;
      if (this.requestTimeoutMs = 3e4, this.baseUrlOverriden = !1, this.proxy = "", this.offline = !1, !e)
        throw new Error("Invalid 'apiKey' value");
      switch (this.apiKey = e, this.clientVersion = r, this.dataGovernance = (a = n == null ? void 0 : n.dataGovernance) !== null && a !== void 0 ? a : oe.Global, this.dataGovernance) {
        case oe.EuOnly:
          this.baseUrl = "https://cdn-eu.configcat.com";
          break;
        default:
          this.baseUrl = "https://cdn-global.configcat.com";
          break;
      }
      var l = (c = o == null ? void 0 : o()) !== null && c !== void 0 ? c : new tt();
      this.hooks = new nt(l), this.readyPromise = new Promise(function(f) {
        return s.hooks.once("clientReady", f);
      });
      var h, p;
      if (n) {
        if (h = n.logger, p = n.cache, n.requestTimeoutMs) {
          if (n.requestTimeoutMs < 0)
            throw new Error("Invalid 'requestTimeoutMs' value");
          this.requestTimeoutMs = n.requestTimeoutMs;
        }
        n.baseUrl && (this.baseUrl = n.baseUrl, this.baseUrlOverriden = !0), n.proxy && (this.proxy = n.proxy), n.flagOverrides && (this.flagOverrides = n.flagOverrides), n.defaultUser && (this.defaultUser = n.defaultUser), n.offline && (this.offline = n.offline), (u = n.setupHooks) === null || u === void 0 || u.call(n, this.hooks);
      }
      this.logger = new Qe(h ?? new et(), this.hooks), this.cache = p ? new Ze(p, this.logger) : i ? i(this) : new Xe();
    }
    return t.prototype.getUrl = function() {
      return this.baseUrl + "/configuration-files/" + this.apiKey + "/" + t.configFileName + "?sdk=" + this.clientVersion;
    }, t.prototype.getCacheKey = function() {
      return re(this.apiKey + "_" + t.configFileName + "_" + M.serializationFormatVersion);
    }, t.configFileName = "config_v5.json", t;
  }()
), Pe = (
  /** @class */
  function(t) {
    _(e, t);
    function e(r, n, i, o, s, a) {
      var c = t.call(this, r, n + "/a-" + i, o, s, a) || this;
      c.pollIntervalSeconds = 60, c.maxInitWaitTimeSeconds = 5, o && (o.pollIntervalSeconds !== void 0 && o.pollIntervalSeconds !== null && (c.pollIntervalSeconds = o.pollIntervalSeconds), o.maxInitWaitTimeSeconds !== void 0 && o.maxInitWaitTimeSeconds !== null && (c.maxInitWaitTimeSeconds = o.maxInitWaitTimeSeconds));
      var u = 2147483;
      if (!(typeof c.pollIntervalSeconds == "number" && 1 <= c.pollIntervalSeconds && c.pollIntervalSeconds <= u))
        throw new Error("Invalid 'pollIntervalSeconds' value");
      if (!(typeof c.maxInitWaitTimeSeconds == "number" && c.maxInitWaitTimeSeconds <= u))
        throw new Error("Invalid 'maxInitWaitTimeSeconds' value");
      return c;
    }
    return e;
  }(ve)
), ke = (
  /** @class */
  function(t) {
    _(e, t);
    function e(r, n, i, o, s, a) {
      return t.call(this, r, n + "/m-" + i, o, s, a) || this;
    }
    return e;
  }(ve)
), Me = (
  /** @class */
  function(t) {
    _(e, t);
    function e(r, n, i, o, s, a) {
      var c = t.call(this, r, n + "/l-" + i, o, s, a) || this;
      if (c.cacheTimeToLiveSeconds = 60, o && o.cacheTimeToLiveSeconds !== void 0 && o.cacheTimeToLiveSeconds !== null && (c.cacheTimeToLiveSeconds = o.cacheTimeToLiveSeconds), !(typeof c.cacheTimeToLiveSeconds == "number" && 1 <= c.cacheTimeToLiveSeconds && c.cacheTimeToLiveSeconds <= 2147483647))
        throw new Error("Invalid 'cacheTimeToLiveSeconds' value");
      return c;
    }
    return e;
  }(ve)
), U;
(function(t) {
  t[t.LocalOnly = 0] = "LocalOnly", t[t.LocalOverRemote = 1] = "LocalOverRemote", t[t.RemoteOverLocal = 2] = "RemoteOverLocal";
})(U || (U = {}));
var it = (
  /** @class */
  function(t) {
    _(e, t);
    function e(r, n) {
      var i = t.call(this, r, n) || this;
      return i.cacheTimeToLiveMs = n.cacheTimeToLiveSeconds * 1e3, t.prototype.syncUpWithCache.call(i), i;
    }
    return e.prototype.getConfig = function() {
      return S(this, void 0, void 0, function() {
        function r(o, s) {
          s === void 0 && (s = ""), o.debug("LazyLoadConfigService.getConfig(): cache is empty or expired" + s + ".");
        }
        var n, i;
        return O(this, function(o) {
          switch (o.label) {
            case 0:
              return this.options.logger.debug("LazyLoadConfigService.getConfig() called."), [4, this.options.cache.get(this.cacheKey)];
            case 1:
              return n = o.sent(), n.isExpired(this.cacheTimeToLiveMs) ? this.isOffline ? [3, 3] : (r(this.options.logger, ", calling refreshConfigCoreAsync()"), [4, this.refreshConfigCoreAsync(n)]) : [3, 5];
            case 2:
              return i = o.sent(), n = i[1], [3, 4];
            case 3:
              r(this.options.logger), o.label = 4;
            case 4:
              return [2, n];
            case 5:
              return this.options.logger.debug("LazyLoadConfigService.getConfig(): cache is valid, returning from cache."), [2, n];
          }
        });
      });
    }, e.prototype.refreshConfigAsync = function() {
      return this.options.logger.debug("LazyLoadConfigService.refreshConfigAsync() called."), t.prototype.refreshConfigAsync.call(this);
    }, e.prototype.getCacheState = function(r) {
      return r.isEmpty ? L.NoFlagData : r.isExpired(this.cacheTimeToLiveMs) ? L.HasCachedFlagDataOnly : L.HasUpToDateFlagData;
    }, e;
  }(pe)
), ot = (
  /** @class */
  function(t) {
    _(e, t);
    function e(r, n) {
      var i = t.call(this, r, n) || this;
      return t.prototype.syncUpWithCache.call(i), i;
    }
    return e.prototype.getCacheState = function(r) {
      return r.isEmpty ? L.NoFlagData : L.HasCachedFlagDataOnly;
    }, e.prototype.getConfig = function() {
      return S(this, void 0, void 0, function() {
        return O(this, function(r) {
          switch (r.label) {
            case 0:
              return this.options.logger.debug("ManualPollService.getConfig() called."), [4, this.options.cache.get(this.cacheKey)];
            case 1:
              return [2, r.sent()];
          }
        });
      });
    }, e.prototype.refreshConfigAsync = function() {
      return this.options.logger.debug("ManualPollService.refreshConfigAsync() called."), t.prototype.refreshConfigAsync.call(this);
    }, e;
  }(pe)
);
function st() {
  var t = function(e) {
    this.target = e;
  };
  return t.prototype.deref = function() {
    return this.target;
  }, t.isFallback = !0, t;
}
var at = function() {
  return typeof WeakRef == "function";
}, Ve = /^[0-9]+$/, J = function(t, e) {
  var r = Ve.test(t), n = Ve.test(e);
  return r && n && (t = +t, e = +e), t === e ? 0 : r && !n ? -1 : n && !r ? 1 : t < e ? -1 : 1;
}, he = 256, Q = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Z = [], b = [], m = {}, ut = 0, I = function(t, e) {
  var r = ut++;
  m[t] = r, b[r] = e, Z[r] = new RegExp(e);
};
I("NUMERICIDENTIFIER", "0|[1-9]\\d*");
I("NUMERICIDENTIFIERLOOSE", "[0-9]+");
I("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
I("MAINVERSION", "(" + b[m.NUMERICIDENTIFIER] + ")\\." + ("(" + b[m.NUMERICIDENTIFIER] + ")\\.") + ("(" + b[m.NUMERICIDENTIFIER] + ")"));
I("MAINVERSIONLOOSE", "(" + b[m.NUMERICIDENTIFIERLOOSE] + ")\\." + ("(" + b[m.NUMERICIDENTIFIERLOOSE] + ")\\.") + ("(" + b[m.NUMERICIDENTIFIERLOOSE] + ")"));
I("PRERELEASEIDENTIFIER", "(?:" + b[m.NUMERICIDENTIFIER] + "|" + b[m.NONNUMERICIDENTIFIER] + ")");
I("PRERELEASEIDENTIFIERLOOSE", "(?:" + b[m.NUMERICIDENTIFIERLOOSE] + "|" + b[m.NONNUMERICIDENTIFIER] + ")");
I("PRERELEASE", "(?:-(" + b[m.PRERELEASEIDENTIFIER] + "(?:\\." + b[m.PRERELEASEIDENTIFIER] + ")*))");
I("PRERELEASELOOSE", "(?:-?(" + b[m.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + b[m.PRERELEASEIDENTIFIERLOOSE] + ")*))");
I("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
I("BUILD", "(?:\\+(" + b[m.BUILDIDENTIFIER] + "(?:\\." + b[m.BUILDIDENTIFIER] + ")*))");
I("FULLPLAIN", "v?" + b[m.MAINVERSION] + b[m.PRERELEASE] + "?" + b[m.BUILD] + "?");
I("FULL", "^" + b[m.FULLPLAIN] + "$");
I("LOOSEPLAIN", "[v=\\s]*" + b[m.MAINVERSIONLOOSE] + b[m.PRERELEASELOOSE] + "?" + b[m.BUILD] + "?");
I("LOOSE", "^" + b[m.LOOSEPLAIN] + "$");
var se = (
  /** @class */
  function() {
    function t(e, r) {
      if ((!r || typeof r != "object") && (r = {
        loose: !!r,
        includePrerelease: !1
      }), e instanceof t) {
        if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
          return e;
        e = e.version;
      } else if (typeof e != "string")
        throw new TypeError("Invalid Version: " + e);
      if (e.length > he)
        throw new TypeError("version is longer than " + he + " characters");
      this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
      var n = e.trim().match(r.loose ? Z[m.LOOSE] : Z[m.FULL]);
      if (!n)
        throw new TypeError("Invalid Version: " + e);
      if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Q || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > Q || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > Q || this.patch < 0)
        throw new TypeError("Invalid patch version");
      n[4] ? this.prerelease = n[4].split(".").map(function(i) {
        if (/^[0-9]+$/.test(i)) {
          var o = +i;
          if (o >= 0 && o < Q)
            return o;
        }
        return i;
      }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
    }
    return t.prototype.format = function() {
      return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version;
    }, t.prototype.toString = function() {
      return this.version;
    }, t.prototype.compare = function(e) {
      if (!(e instanceof t)) {
        if (typeof e == "string" && e === this.version)
          return 0;
        e = new t(e, this.options);
      }
      return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
    }, t.prototype.compareMain = function(e) {
      return e instanceof t || (e = new t(e, this.options)), J(this.major, e.major) || J(this.minor, e.minor) || J(this.patch, e.patch);
    }, t.prototype.comparePre = function(e) {
      if (e instanceof t || (e = new t(e, this.options)), this.prerelease.length && !e.prerelease.length)
        return -1;
      if (!this.prerelease.length && e.prerelease.length)
        return 1;
      if (!this.prerelease.length && !e.prerelease.length)
        return 0;
      var r = 0;
      do {
        var n = this.prerelease[r], i = e.prerelease[r];
        if (n === void 0 && i === void 0)
          return 0;
        if (i === void 0)
          return 1;
        if (n === void 0)
          return -1;
        if (n === i)
          continue;
        return J(n, i);
      } while (++r);
    }, t.prototype.compareBuild = function(e) {
      e instanceof t || (e = new t(e, this.options));
      var r = 0;
      do {
        var n = this.build[r], i = e.build[r];
        if (n === void 0 && i === void 0)
          return 0;
        if (i === void 0)
          return 1;
        if (n === void 0)
          return -1;
        if (n === i)
          continue;
        return J(n, i);
      } while (++r);
    }, t.prototype.inc = function(e, r) {
      switch (e) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", r), this.inc("pre", r);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", r), this.inc("pre", r);
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        case "pre":
          if (this.prerelease.length === 0)
            this.prerelease = [0];
          else {
            for (var n = this.prerelease.length; --n >= 0; )
              typeof this.prerelease[n] == "number" && (this.prerelease[n]++, n = -2);
            n === -1 && this.prerelease.push(0);
          }
          r && (this.prerelease[0] === r ? isNaN(this.prerelease[1]) && (this.prerelease = [r, 0]) : this.prerelease = [r, 0]);
          break;
        default:
          throw new Error("invalid increment argument: " + e);
      }
      return this.format(), this.raw = this.version, this;
    }, t;
  }()
), ct = function(t, e) {
  if ((!e || typeof e != "object") && (e = {
    loose: !!e,
    includePrerelease: !1
  }), t instanceof se)
    return t;
  if (typeof t != "string" || t.length > he)
    return null;
  var r = e.loose ? Z[m.LOOSE] : Z[m.FULL];
  if (!r.test(t))
    return null;
  try {
    return new se(t, e);
  } catch {
    return null;
  }
}, B = function(t, e, r) {
  return new se(t, r).compare(new se(e, r));
}, H = function(t) {
  var e = ct(t, !1);
  return e ? e.version : null;
}, lt = function(t, e) {
  return B(t, e, !0) === 0;
}, ft = function(t, e) {
  return B(t, e, !1) === 0;
}, ht = function(t, e) {
  return B(t, e, !1) < 0;
}, gt = function(t, e) {
  return B(t, e, !1) <= 0;
}, pt = function(t, e) {
  return B(t, e, !1) > 0;
}, vt = function(t, e) {
  return B(t, e, !1) >= 0;
}, St = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.custom = {}, this.identifier = e, this.email = r, this.country = n, this.custom = i || {};
    }
    return t;
  }()
), dt = (
  /** @class */
  function() {
    function t(e) {
      this.logger = e;
    }
    return t.prototype.evaluate = function(e, r, n, i, o) {
      if (this.logger.debug("RolloutEvaluator.Evaluate() called."), e.type < 0 && !qe(e.value))
        throw new TypeError(e.value === null ? "Setting value is null." : e.value === void 0 ? "Setting value is undefined." : "Setting value '" + e.value + "' is of an unsupported type (" + typeof e.value + ").");
      var s = new yt();
      s.user = i, s.keyName = r, s.returnValue = n;
      var a;
      try {
        if (i) {
          if (a = this.evaluateRules(e.targetingRules, i, s), a !== null || (a = this.evaluatePercentageRules(e.percentageOptions, r, i), e.percentageOptions && e.percentageOptions.length > 0 && s.opAppendLine("Evaluating % options => " + (a ? "user targeted" : "user not targeted")), a !== null))
            return s.returnValue = a.value, a;
        } else
          (e.targetingRules && e.targetingRules.length > 0 || e.percentageOptions && e.percentageOptions.length > 0) && this.logger.targetingIsNotPossible(r);
        return a = {
          value: e.value,
          variationId: e.variationId
        }, s.returnValue = a.value, a;
      } finally {
        this.logger.settingEvaluated(s);
      }
    }, t.prototype.evaluateRules = function(e, r, n) {
      if (this.logger.debug("RolloutEvaluator.EvaluateRules() called."), e && e.length > 0)
        for (var i = function(c) {
          var u = e[c], l = o.getUserAttribute(r, u.comparisonAttribute), h = u.comparator, p = u.comparisonValue, f = "Evaluating rule: '" + l + "' " + o.ruleToString(h) + " '" + p + "' => ";
          if (!l)
            return f += "NO MATCH (Attribute is not defined on the user object)", n.opAppendLine(f), "continue";
          var v = {
            value: u.value,
            variationId: u.variationId,
            matchedTargetingRule: u
          };
          switch (h) {
            case g.In:
              for (var y = p.split(","), E = 0; E < y.length; E++)
                if (y[E].trim() === l)
                  return f += "MATCH", n.opAppendLine(f), { value: v };
              f += "no match";
              break;
            case g.NotIn:
              if (!p.split(",").some(function(F) {
                return F.trim() === l;
              }))
                return f += "MATCH", n.opAppendLine(f), { value: v };
              f += "no match";
              break;
            case g.Contains:
              if (l.indexOf(p) !== -1)
                return f += "MATCH", n.opAppendLine(f), { value: v };
              f += "no match";
              break;
            case g.NotContains:
              if (l.indexOf(p) === -1)
                return f += "MATCH", n.opAppendLine(f), { value: v };
              f += "no match";
              break;
            case g.SemVerIn:
            case g.SemVerNotIn:
            case g.SemVerLessThan:
            case g.SemVerLessThanEqual:
            case g.SemVerGreaterThan:
            case g.SemVerGreaterThanEqual:
              if (o.evaluateSemver(l, p, h))
                return f += "MATCH", n.opAppendLine(f), { value: v };
              f += "no match";
              break;
            case g.NumberEqual:
            case g.NumberNotEqual:
            case g.NumberLessThan:
            case g.NumberLessThanEqual:
            case g.NumberGreaterThan:
            case g.NumberGreaterThanEqual:
              if (o.evaluateNumber(l, p, h))
                return f += "MATCH", n.opAppendLine(f), { value: v };
              f += "no match";
              break;
            case g.SensitiveOneOf: {
              for (var C = p.split(","), P = re(l), E = 0; E < C.length; E++)
                if (C[E].trim() === P)
                  return f += "MATCH", n.opAppendLine(f), { value: v };
              f += "no match";
              break;
            }
            case g.SensitiveNotOneOf: {
              var D = re(l);
              if (!p.split(",").some(function(F) {
                return F.trim() === D;
              }))
                return f += "MATCH", n.opAppendLine(f), { value: v };
              f += "no match";
              break;
            }
          }
          n.opAppendLine(f);
        }, o = this, s = 0; s < e.length; s++) {
          var a = i(s);
          if (typeof a == "object")
            return a.value;
        }
      return null;
    }, t.prototype.evaluatePercentageRules = function(e, r, n) {
      if (this.logger.debug("RolloutEvaluator.EvaluateVariations() called."), e && e.length > 0)
        for (var i = r + (n.identifier === null || n.identifier === void 0 ? "" : n.identifier), o = re(i).substring(0, 7), s = parseInt(o, 16) % 100, a = 0, c = 0; c < e.length; c++) {
          var u = e[c];
          if (a += +u.percentage, s < a)
            return {
              value: u.value,
              variationId: u.variationId,
              matchedPercentageOption: u
            };
        }
      return null;
    }, t.prototype.evaluateNumber = function(e, r, n) {
      this.logger.debug("RolloutEvaluator.EvaluateNumber() called.");
      var i, o;
      if (e && !Number.isNaN(Number.parseFloat(e.replace(",", "."))))
        i = Number.parseFloat(e.replace(",", "."));
      else
        return !1;
      if (r && !Number.isNaN(Number.parseFloat(r.replace(",", "."))))
        o = Number.parseFloat(r.replace(",", "."));
      else
        return !1;
      switch (n) {
        case g.NumberEqual:
          return i === o;
        case g.NumberNotEqual:
          return i !== o;
        case g.NumberLessThan:
          return i < o;
        case g.NumberLessThanEqual:
          return i <= o;
        case g.NumberGreaterThan:
          return i > o;
        case g.NumberGreaterThanEqual:
          return i >= o;
      }
      return !1;
    }, t.prototype.evaluateSemver = function(e, r, n) {
      if (this.logger.debug("RolloutEvaluator.EvaluateSemver() called."), H(e) == null || r === void 0)
        return !1;
      switch (r = r.trim(), n) {
        case g.SemVerIn:
          for (var i = r.split(","), o = !1, s = 0; s < i.length; s++)
            if (!(!i[s] || i[s].trim() === "")) {
              if (H(i[s].trim()) == null)
                return !1;
              o || (o = lt(e, i[s].trim()));
            }
          return o;
        case g.SemVerNotIn:
          return !r.split(",").some(function(a) {
            return !a || a.trim() === "" || (a = H(a.trim()), a == null) ? !1 : ft(e, a);
          });
        case g.SemVerLessThan:
          return H(r) == null ? !1 : ht(e, r);
        case g.SemVerLessThanEqual:
          return H(r) == null ? !1 : gt(e, r);
        case g.SemVerGreaterThan:
          return H(r) == null ? !1 : pt(e, r);
        case g.SemVerGreaterThanEqual:
          return H(r) == null ? !1 : vt(e, r);
      }
      return !1;
    }, t.prototype.getUserAttribute = function(e, r) {
      switch (r) {
        case "Identifier":
          return e.identifier;
        case "Email":
          return e.email;
        case "Country":
          return e.country;
        default:
          return (e.custom || {})[r];
      }
    }, t.prototype.ruleToString = function(e) {
      switch (e) {
        case g.In:
          return "IS ONE OF";
        case g.NotIn:
          return "IS NOT ONE OF";
        case g.Contains:
          return "CONTAINS";
        case g.NotContains:
          return "DOES NOT CONTAIN";
        case g.SemVerIn:
          return "IS ONE OF (SemVer)";
        case g.SemVerNotIn:
          return "IS NOT ONE OF (SemVer)";
        case g.SemVerLessThan:
          return "< (SemVer)";
        case g.SemVerLessThanEqual:
          return "<= (SemVer)";
        case g.SemVerGreaterThan:
          return "> (SemVer)";
        case g.SemVerGreaterThanEqual:
          return ">= (SemVer)";
        case g.NumberEqual:
          return "= (Number)";
        case g.NumberNotEqual:
          return "!= (Number)";
        case g.NumberLessThan:
          return "< (Number)";
        case g.NumberLessThanEqual:
          return "<= (Number)";
        case g.NumberGreaterThan:
          return "> (Number)";
        case g.NumberGreaterThanEqual:
          return ">= (Number)";
        case g.SensitiveOneOf:
          return "IS ONE OF (Sensitive)";
        case g.SensitiveNotOneOf:
          return "IS NOT ONE OF (Sensitive)";
        default:
          return e + "";
      }
    }, t;
  }()
), yt = (
  /** @class */
  function() {
    function t() {
      this.operations = "";
    }
    return t.prototype.opAppendLine = function(e) {
      this.operations += " " + e + `
`;
    }, t.prototype.toString = function() {
      return "Evaluate '" + this.keyName + `'
 User : ` + JSON.stringify(this.user) + `
` + this.operations + " Returning value : " + this.returnValue;
    }, t;
  }()
);
function We(t, e, r, n) {
  return {
    key: t,
    value: e.value,
    variationId: e.variationId,
    fetchTime: r,
    user: n,
    isDefaultValue: !1,
    matchedEvaluationRule: e.matchedTargetingRule,
    matchedEvaluationPercentageRule: e.matchedPercentageOption
  };
}
function z(t, e, r, n, i, o) {
  return {
    key: t,
    value: e,
    fetchTime: r,
    user: n,
    isDefaultValue: !0,
    errorMessage: i,
    errorException: o
  };
}
function ae(t, e, r, n, i, o, s) {
  var a;
  if (!e)
    return a = s.configJsonIsNotPresentSingle(r, "defaultValue", n).toString(), z(r, n, x(o), i, a);
  var c = e[r];
  if (!c)
    return a = s.settingEvaluationFailedDueToMissingKey(r, "defaultValue", n, mt(e)).toString(), z(r, n, x(o), i, a);
  var u = t.evaluate(c, r, n, i, o);
  if (n != null && typeof n != typeof u.value)
    throw new TypeError(`The type of a setting must match the type of the given default value.
The setting's type was ` + typeof n + ", the given default value's type was " + typeof u.value + `.
Please pass a corresponding default value type.`);
  return We(r, u, x(o), i);
}
function xe(t, e, r, n, i, o) {
  var s;
  if (!ge(e, i, o))
    return [[], s];
  for (var a = [], c = 0, u = Object.entries(e); c < u.length; c++) {
    var l = u[c], h = l[0], p = l[1], f = void 0;
    try {
      var v = t.evaluate(p, h, null, r, n);
      f = We(h, v, x(n), r);
    } catch (y) {
      s ?? (s = []), s.push(y), f = z(h, null, x(n), r, K(y), y);
    }
    a.push(f);
  }
  return [a, s];
}
function ge(t, e, r) {
  return t ? !0 : (e.configJsonIsNotPresent(r), !1);
}
function qe(t) {
  return t == null || typeof t == "boolean" || typeof t == "number" || typeof t == "string";
}
function x(t) {
  return t ? new Date(t.timestamp) : void 0;
}
function mt(t) {
  return Object.keys(t).map(function(e) {
    return "'" + e + "'";
  }).join(", ");
}
var Et = (
  /** @class */
  function() {
    function t() {
      this.instances = {};
    }
    return t.prototype.getOrCreate = function(e, r) {
      var n, i = this.instances[e.apiKey];
      if (i) {
        var o = i[0];
        if (n = o.deref(), n)
          return [n, !0];
      }
      var s = {};
      n = new He(e, r, s);
      var a = at() ? WeakRef : st();
      return this.instances[e.apiKey] = [new a(n), s], [n, !1];
    }, t.prototype.remove = function(e, r) {
      var n = this.instances[e];
      if (n) {
        var i = n[0], o = n[1], s = !!i.deref();
        if (!s || o === r)
          return delete this.instances[e], s;
      }
      return !1;
    }, t.prototype.clear = function() {
      for (var e = [], r = 0, n = Object.entries(this.instances); r < n.length; r++) {
        var i = n[r], o = i[0], s = i[1][0], a = s.deref();
        a && e.push(a), delete this.instances[o];
      }
      return e;
    }, t;
  }()
), Y = new Et(), He = (
  /** @class */
  function() {
    function t(e, r, n) {
      var i;
      if (this.cacheToken = n, this.addListener = this.on, this.off = this.removeListener, !e)
        throw new Error("Invalid 'options' value");
      if (this.options = e, this.options.logger.debug("Initializing ConfigCatClient. Options: " + JSON.stringify(this.options)), !r)
        throw new Error("Invalid 'configCatKernel' value");
      if (!r.configFetcher)
        throw new Error("Invalid 'configCatKernel.configFetcher' value");
      e.defaultUser && this.setDefaultUser(e.defaultUser), this.evaluator = new dt(e.logger), ((i = e.flagOverrides) === null || i === void 0 ? void 0 : i.behaviour) !== U.LocalOnly ? this.configService = e instanceof Pe ? new $e(r.configFetcher, e) : e instanceof ke ? new ot(r.configFetcher, e) : e instanceof Me ? new it(r.configFetcher, e) : function() {
        throw new Error("Invalid 'options' value");
      }() : this.options.hooks.emit("clientReady", L.HasLocalOverrideFlagDataOnly), this.suppressFinalize = ne(this, { sdkKey: e.apiKey, cacheToken: n, configService: this.configService, logger: e.logger });
    }
    return Object.defineProperty(t, "instanceCache", {
      get: function() {
        return Y;
      },
      enumerable: !1,
      configurable: !0
    }), t.get = function(e, r, n, i) {
      if (!e)
        throw new Error("Invalid 'sdkKey' value");
      var o = r === X.AutoPoll ? Pe : r === X.ManualPoll ? ke : r === X.LazyLoad ? Me : function() {
        throw new Error("Invalid 'pollingMode' value");
      }(), s = new o(e, i.sdkType, i.sdkVersion, n, i.defaultCacheFactory, i.eventEmitterFactory), a = Y.getOrCreate(s, i), c = a[0], u = a[1];
      return u && n && s.logger.clientIsAlreadyCreated(e), c;
    }, t.finalize = function(e) {
      var r;
      (r = e.logger) === null || r === void 0 || r.debug("finalize() called"), e.cacheToken && Y.remove(e.sdkKey, e.cacheToken), t.close(e.configService, e.logger);
    }, t.close = function(e, r, n) {
      r == null || r.debug("close() called"), n == null || n.tryDisconnect(), e == null || e.dispose();
    }, t.prototype.dispose = function() {
      var e = this.options;
      e.logger.debug("dispose() called"), this.cacheToken && Y.remove(e.apiKey, this.cacheToken), t.close(this.configService, e.logger, e.hooks), this.suppressFinalize();
    }, t.disposeAll = function() {
      for (var e = Y.clear(), r, n = 0, i = e; n < i.length; n++) {
        var o = i[n];
        try {
          t.close(o.configService, o.options.logger, o.options.hooks), o.suppressFinalize();
        } catch (s) {
          r ?? (r = []), r.push(s);
        }
      }
      if (r)
        throw typeof AggregateError < "u" ? new AggregateError(r) : r.pop();
    }, t.prototype.getValueAsync = function(e, r, n) {
      return S(this, void 0, void 0, function() {
        var i, o, s, a, c, u;
        return O(this, function(l) {
          switch (l.label) {
            case 0:
              this.options.logger.debug("getValueAsync() called."), ue(e), ce(r), s = null, n ?? (n = this.defaultUser), l.label = 1;
            case 1:
              return l.trys.push([1, 3, , 4]), a = void 0, [4, this.getSettingsAsync()];
            case 2:
              return u = l.sent(), a = u[0], s = u[1], o = ae(this.evaluator, a, e, r, n, s, this.options.logger), i = o.value, [3, 4];
            case 3:
              return c = l.sent(), this.options.logger.settingEvaluationErrorSingle("getValueAsync", e, "defaultValue", r, c), o = z(e, r, x(s), n, K(c), c), i = r, [3, 4];
            case 4:
              return this.options.hooks.emit("flagEvaluated", o), [2, i];
          }
        });
      });
    }, t.prototype.getValueDetailsAsync = function(e, r, n) {
      return S(this, void 0, void 0, function() {
        var i, o, s, a, c;
        return O(this, function(u) {
          switch (u.label) {
            case 0:
              this.options.logger.debug("getValueDetailsAsync() called."), ue(e), ce(r), o = null, n ?? (n = this.defaultUser), u.label = 1;
            case 1:
              return u.trys.push([1, 3, , 4]), s = void 0, [4, this.getSettingsAsync()];
            case 2:
              return c = u.sent(), s = c[0], o = c[1], i = ae(this.evaluator, s, e, r, n, o, this.options.logger), [3, 4];
            case 3:
              return a = u.sent(), this.options.logger.settingEvaluationErrorSingle("getValueDetailsAsync", e, "defaultValue", r, a), i = z(e, r, x(o), n, K(a), a), [3, 4];
            case 4:
              return this.options.hooks.emit("flagEvaluated", i), [2, i];
          }
        });
      });
    }, t.prototype.getAllKeysAsync = function() {
      return S(this, void 0, void 0, function() {
        var e, r, n;
        return O(this, function(i) {
          switch (i.label) {
            case 0:
              this.options.logger.debug("getAllKeysAsync() called."), e = "empty array", i.label = 1;
            case 1:
              return i.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
            case 2:
              return r = i.sent()[0], ge(r, this.options.logger, e) ? [2, Object.keys(r)] : [2, []];
            case 3:
              return n = i.sent(), this.options.logger.settingEvaluationError("getAllKeysAsync", e, n), [2, []];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.getAllValuesAsync = function(e) {
      return S(this, void 0, void 0, function() {
        var r, n, i, o, s, a, c, u, l, h, p, f;
        return O(this, function(v) {
          switch (v.label) {
            case 0:
              this.options.logger.debug("getAllValuesAsync() called."), r = "empty array", e ?? (e = this.defaultUser), v.label = 1;
            case 1:
              return v.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
            case 2:
              return s = v.sent(), a = s[0], c = s[1], f = xe(this.evaluator, a, e, c, this.options.logger, r), i = f[0], o = f[1], n = i.map(function(y) {
                return new te(y.key, y.value);
              }), [3, 4];
            case 3:
              return u = v.sent(), this.options.logger.settingEvaluationError("getAllValuesAsync", r, u), [2, []];
            case 4:
              for (o != null && o.length && this.options.logger.settingEvaluationError("getAllValuesAsync", "evaluation result", typeof AggregateError < "u" ? new AggregateError(o) : o.pop()), l = 0, h = i; l < h.length; l++)
                p = h[l], this.options.hooks.emit("flagEvaluated", p);
              return [2, n];
          }
        });
      });
    }, t.prototype.getAllValueDetailsAsync = function(e) {
      return S(this, void 0, void 0, function() {
        var r, n, i, o, s, a, c, u, l, h, p;
        return O(this, function(f) {
          switch (f.label) {
            case 0:
              this.options.logger.debug("getAllValueDetailsAsync() called."), r = "empty array", e ?? (e = this.defaultUser), f.label = 1;
            case 1:
              return f.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
            case 2:
              return o = f.sent(), s = o[0], a = o[1], p = xe(this.evaluator, s, e, a, this.options.logger, r), n = p[0], i = p[1], [3, 4];
            case 3:
              return c = f.sent(), this.options.logger.settingEvaluationError("getAllValueDetailsAsync", r, c), [2, []];
            case 4:
              for (i != null && i.length && this.options.logger.settingEvaluationError("getAllValueDetailsAsync", "evaluation result", typeof AggregateError < "u" ? new AggregateError(i) : i.pop()), u = 0, l = n; u < l.length; u++)
                h = l[u], this.options.hooks.emit("flagEvaluated", h);
              return [2, n];
          }
        });
      });
    }, t.prototype.getKeyAndValueAsync = function(e) {
      return S(this, void 0, void 0, function() {
        var r, n, i, o, s, a, c, u, p, l, h, p, f, v;
        return O(this, function(y) {
          switch (y.label) {
            case 0:
              this.options.logger.debug("getKeyAndValueAsync() called."), r = "null", y.label = 1;
            case 1:
              return y.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
            case 2:
              if (n = y.sent()[0], !ge(n, this.options.logger, r))
                return [2, null];
              for (i = 0, o = Object.entries(n); i < o.length; i++) {
                if (s = o[i], a = s[0], c = s[1], e === c.variationId)
                  return [2, new te(a, c.value)];
                if (u = n[a].targetingRules, u && u.length > 0) {
                  for (p = 0; p < u.length; p++)
                    if (l = u[p], e === l.variationId)
                      return [2, new te(a, l.value)];
                }
                if (h = n[a].percentageOptions, h && h.length > 0) {
                  for (p = 0; p < h.length; p++)
                    if (f = h[p], e === f.variationId)
                      return [2, new te(a, f.value)];
                }
              }
              return this.options.logger.settingForVariationIdIsNotPresent(e), [3, 4];
            case 3:
              return v = y.sent(), this.options.logger.settingEvaluationError("getKeyAndValueAsync", r, v), [3, 4];
            case 4:
              return [2, null];
          }
        });
      });
    }, t.prototype.forceRefreshAsync = function() {
      return S(this, void 0, void 0, function() {
        var e, r;
        return O(this, function(n) {
          switch (n.label) {
            case 0:
              if (this.options.logger.debug("forceRefreshAsync() called."), !this.configService)
                return [3, 5];
              n.label = 1;
            case 1:
              return n.trys.push([1, 3, , 4]), [4, this.configService.refreshConfigAsync()];
            case 2:
              return e = n.sent()[0], [2, e];
            case 3:
              return r = n.sent(), this.options.logger.forceRefreshError("forceRefreshAsync", r), [2, ie.failure(K(r), r)];
            case 4:
              return [3, 6];
            case 5:
              return [2, ie.failure("Client is configured to use the LocalOnly override behavior, which prevents making HTTP requests.")];
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.setDefaultUser = function(e) {
      this.defaultUser = e;
    }, t.prototype.clearDefaultUser = function() {
      this.defaultUser = void 0;
    }, Object.defineProperty(t.prototype, "isOffline", {
      get: function() {
        var e, r;
        return (r = (e = this.configService) === null || e === void 0 ? void 0 : e.isOffline) !== null && r !== void 0 ? r : !0;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.setOnline = function() {
      this.configService ? this.configService.setOnline() : this.options.logger.configServiceMethodHasNoEffectDueToOverrideBehavior(U[U.LocalOnly], "setOnline");
    }, t.prototype.setOffline = function() {
      var e;
      (e = this.configService) === null || e === void 0 || e.setOffline();
    }, t.prototype.waitForReady = function() {
      return this.options.readyPromise;
    }, t.prototype.snapshot = function() {
      var e, r, n, i = this, o, s = function() {
        var h = i.options.cache.getInMemory(), p = h.isEmpty ? null : h.config.settings;
        return [p, h];
      }, a, c, u = (o = this.options) === null || o === void 0 ? void 0 : o.flagOverrides;
      if (u) {
        var l = u.dataSource.getOverridesSync();
        switch (u.behaviour) {
          case U.LocalOnly:
            return new ee(l, null, this);
          case U.LocalOverRemote:
            return e = s(), a = e[0], c = e[1], new ee(k(k({}, a ?? {}), l), c, this);
          case U.RemoteOverLocal:
            return r = s(), a = r[0], c = r[1], new ee(k(k({}, l), a ?? {}), c, this);
        }
      }
      return n = s(), a = n[0], c = n[1], new ee(a, c, this);
    }, t.prototype.getSettingsAsync = function() {
      var e;
      return S(this, void 0, void 0, function() {
        var r, n, i, o, s, a, c, u, l = this;
        return O(this, function(h) {
          switch (h.label) {
            case 0:
              return this.options.logger.debug("getSettingsAsync() called."), r = function() {
                return S(l, void 0, void 0, function() {
                  var p, f;
                  return O(this, function(v) {
                    switch (v.label) {
                      case 0:
                        return [4, this.configService.getConfig()];
                      case 1:
                        return p = v.sent(), f = p.isEmpty ? null : p.config.settings, [2, [f, p]];
                    }
                  });
                });
              }, n = (e = this.options) === null || e === void 0 ? void 0 : e.flagOverrides, n ? (i = void 0, o = void 0, [4, n.dataSource.getOverrides()]) : [3, 7];
            case 1:
              switch (s = h.sent(), a = n.behaviour, a) {
                case U.LocalOnly:
                  return [3, 2];
                case U.LocalOverRemote:
                  return [3, 3];
                case U.RemoteOverLocal:
                  return [3, 5];
              }
              return [3, 7];
            case 2:
              return [2, [s, null]];
            case 3:
              return [4, r()];
            case 4:
              return c = h.sent(), i = c[0], o = c[1], [2, [k(k({}, i ?? {}), s), o]];
            case 5:
              return [4, r()];
            case 6:
              return u = h.sent(), i = u[0], o = u[1], [2, [k(k({}, s), i ?? {}), o]];
            case 7:
              return [4, r()];
            case 8:
              return [2, h.sent()];
          }
        });
      });
    }, t.prototype.on = function(e, r) {
      return this.options.hooks.on(e, r), this;
    }, t.prototype.once = function(e, r) {
      return this.options.hooks.once(e, r), this;
    }, t.prototype.removeListener = function(e, r) {
      return this.options.hooks.removeListener(e, r), this;
    }, t.prototype.removeAllListeners = function(e) {
      return this.options.hooks.removeAllListeners(e), this;
    }, t.prototype.listeners = function(e) {
      return this.options.hooks.listeners(e);
    }, t.prototype.listenerCount = function(e) {
      return this.options.hooks.listenerCount(e);
    }, t.prototype.eventNames = function() {
      return this.options.hooks.eventNames();
    }, t;
  }()
), ee = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.mergedSettings = e, this.remoteConfig = r, this.defaultUser = n.defaultUser, this.evaluator = n.evaluator, this.options = n.options, this.cacheState = r ? n.configService.getCacheState(r) : L.HasLocalOverrideFlagDataOnly;
    }
    return Object.defineProperty(t.prototype, "fetchedConfig", {
      get: function() {
        var e = this.remoteConfig;
        return e && !e.isEmpty ? e.config : null;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.getAllKeys = function() {
      return this.mergedSettings ? Object.keys(this.mergedSettings) : [];
    }, t.prototype.getValue = function(e, r, n) {
      this.options.logger.debug("Snapshot.getValue() called."), ue(e), ce(r);
      var i, o;
      n ?? (n = this.defaultUser);
      try {
        o = ae(this.evaluator, this.mergedSettings, e, r, n, this.remoteConfig, this.options.logger), i = o.value;
      } catch (s) {
        this.options.logger.settingEvaluationErrorSingle("Snapshot.getValue", e, "defaultValue", r, s), o = z(e, r, x(this.remoteConfig), n, K(s), s), i = r;
      }
      return this.options.hooks.emit("flagEvaluated", o), i;
    }, t.prototype.getValueDetails = function(e, r, n) {
      this.options.logger.debug("Snapshot.getValueDetails() called."), ue(e), ce(r);
      var i;
      n ?? (n = this.defaultUser);
      try {
        i = ae(this.evaluator, this.mergedSettings, e, r, n, this.remoteConfig, this.options.logger);
      } catch (o) {
        this.options.logger.settingEvaluationErrorSingle("Snapshot.getValueDetails", e, "defaultValue", r, o), i = z(e, r, x(this.remoteConfig), n, K(o), o);
      }
      return this.options.hooks.emit("flagEvaluated", i), i;
    }, t;
  }()
), te = (
  /** @class */
  function() {
    function t(e, r) {
      this.settingKey = e, this.settingValue = r;
    }
    return t;
  }()
);
function ue(t) {
  if (!t)
    throw new Error("Invalid 'key' value");
}
function ce(t) {
  if (!qe(t))
    throw new TypeError("The default value must be boolean, number, string, null or undefined.");
}
var ne = function(t, e) {
  if (typeof FinalizationRegistry < "u") {
    var r = new FinalizationRegistry(function(n) {
      return He.finalize(n);
    });
    ne = function(n, i) {
      var o = {};
      return r.register(n, i, o), function() {
        return r.unregister(o);
      };
    };
  } else
    ne = function() {
      return function() {
      };
    };
  return ne(t, e);
};
export {
  bt as ClientReadyState,
  g as Comparator,
  oe as DataGovernance,
  T as FormattableLogMessage,
  d as LogLevel,
  U as OverrideBehaviour,
  X as PollingMode,
  ie as RefreshResult,
  te as SettingKeyValue,
  de as SettingType,
  St as User
};
