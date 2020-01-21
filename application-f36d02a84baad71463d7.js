/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"6":"borough_filter","8":"contact_form","9":"content_carousel","10":"content_slider","11":"event_tracking_carousel","12":"event_tracking_centre_locator","13":"expanding_panels","16":"geo-location","17":"idb","18":"intersection-observer","21":"map","22":"pikaday","24":"responsive_table","25":"scroll-nav","27":"sticky","28":"survey_banner","31":"vanilla-carousel","32":"vanilla-collapsible-content","33":"vanilla-tabbed-content","34":"whatwg-fetch"}[chunkId]||chunkId) + "-" + {"6":"88d2869d07819e9dbe05","8":"920dcb1f7ea1b6f082a5","9":"68e7b9d3a597d4d7aa71","10":"d0d9184e8be7874bb9e5","11":"718647d6c00f438d73e4","12":"a05b740999a62274c6a1","13":"2ab071877378602f388c","16":"45ce5d9fa833e8c1e784","17":"13c7c8618bfdf1575827","18":"d65466b0558a656fd334","21":"c955eaac6f68420f3f97","22":"b20141f4ffa889bbd852","24":"c836bddc6d5f09fa627f","25":"e30518c08e110f24dff1","27":"9bed3cef6b6f5bce6a08","28":"5089dae9d116702a2de9","31":"39907d1caa99f7f1be5a","32":"7bcb012eb2f8c8cd12e9","33":"1b4efc796f8333a7968b","34":"504334920213245003a0"}[chunkId] + ".chunk.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([275,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? t(exports, __webpack_require__(10)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (e, r) {
  "use strict";

  function i(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      var n = [],
          r = !0,
          o = !1,
          a = void 0;

      try {
        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0) {
          ;
        }
      } catch (e) {
        o = !0, a = e;
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (o) throw a;
        }
      }

      return n;
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }();
  }

  function o(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) {
          n[t] = e[t];
        }

        return n;
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }

  r = r && r.hasOwnProperty("default") ? r.default : r;

  var u = function u(e, t) {
    var n = {
      Array: Array.isArray,
      Boolean: function Boolean(e) {
        return "boolean" == typeof e;
      },
      Element: function (t) {
        function e(e) {
          return t.apply(this, arguments);
        }

        return e.toString = function () {
          return t.toString();
        }, e;
      }(function (e) {
        return e instanceof Element;
      }),
      Number: function Number(e) {
        return "number" == typeof e;
      },
      String: function String(e) {
        return "string" == typeof e;
      }
    };
    if (!n.hasOwnProperty(e)) return !1;

    var r = function (e, t) {
      switch (e) {
        case "Element":
          return document.getElementById(t);

        case "String":
          return t;

        default:
          try {
            return JSON.parse(t);
          } catch (e) {
            return null;
          }

      }
    }(e, t);

    return (0, n[e])(r);
  },
      c = function c(r) {
    return function (a) {
      var n, e;
      if (!a && !a.attributes) return !1;
      var t = o(a.attributes);
      return !!t.reduce(function (e, t) {
        return !!e || (t.nodeName ? !!t.nodeName.match(/data/) : e);
      }, !1) && (n = Object.keys(a.dataset), (e = Object.keys(r).reduce(function (e, t) {
        return !!e && n.includes(t);
      }, !0)) ? Object.entries(r).reduce(function (e, t) {
        var n = i(t, 2),
            r = n[0],
            o = n[1];
        return e ? u(o, a.dataset[r]) : e;
      }, !0) : e);
    };
  },
      a = function a(e) {
    return e instanceof Element;
  };

  function l(e, t) {
    if (!a(e)) return null;
    var n = e.parentNode || document.body;
    if (!a(n)) return null;
    n.removeChild(e), "function" == typeof t && t(e);
  }

  var d = function d(e) {
    var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
    e && (e.setAttribute("aria-hidden", "true"), e.style.display = "none", t && l(e));
  },
      s = function s(e) {
    var t = e.dataset.alert;
    return {
      alert: document.getElementById(t),
      id: t
    };
  },
      n = function n() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "alerts",
        t = r(e),
        n = t.getValue() ? JSON.parse(t.getValue()) : [];
    return {
      cookie: t,
      closed: n
    };
  },
      f = function f() {
    return o(document.querySelectorAll("[data-alert]")).map(function (e) {
      var t = s(e),
          n = t.alert,
          r = t.id;
      return d(n), r;
    });
  },
      v = function v(e) {
    return function (o) {
      var a = o.target;
      e.forEach(function (e) {
        var t = e.check,
            n = e.trigger;
        if (t(a)) n(a, o);else {
          var r = function e(t, n) {
            return n === document.body ? null : t(n.parentNode) ? n.parentNode : n.parentNode === document.body ? null : e(t, n.parentNode);
          }(t, a);

          r && n(r, o);
        }
      });
    };
  };

  var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      m = "object" == _typeof(t) && t && t.Object === Object && t,
      g = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      y = (m || g || Function("return this")()).Symbol;

  var b = function b(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) {
      o[n] = t(e[n], n, e);
    }

    return o;
  },
      p = Array.isArray,
      h = Object.prototype,
      A = h.hasOwnProperty,
      E = h.toString,
      k = y ? y.toStringTag : void 0;

  var j = function j(e) {
    var t = A.call(e, k),
        n = e[k];

    try {
      var r = !(e[k] = void 0);
    } catch (e) {}

    var o = E.call(e);
    return r && (t ? e[k] = n : delete e[k]), o;
  },
      O = Object.prototype.toString;

  var S = function S(e) {
    return O.call(e);
  },
      w = y ? y.toStringTag : void 0;

  var C = function C(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : w && w in Object(e) ? j(e) : S(e);
  };

  var B = function B(e) {
    return null != e && "object" == _typeof(e);
  };

  var I = function I(e) {
    return "symbol" == _typeof(e) || B(e) && "[object Symbol]" == C(e);
  },
      L = 1 / 0,
      N = y ? y.prototype : void 0,
      x = N ? N.toString : void 0;

  var M = function e(t) {
    if ("string" == typeof t) return t;
    if (p(t)) return b(t, e) + "";
    if (I(t)) return x ? x.call(t) : "";
    var n = t + "";
    return "0" == n && 1 / t == -L ? "-0" : n;
  };

  var D = function D(e) {
    return null == e ? "" : M(e);
  },
      T = 0;

  var R = function R(e) {
    var t = ++T;
    return D(e) + t;
  },
      V = function V(e) {
    return {
      close: document.getElementById(e.dataset.closeModal),
      lastFocus: document.activeElement,
      modal: document.getElementById(e.dataset.modal)
    };
  },
      _ = function _(e, t) {
    return document.getElementById(e.dataset[t]);
  };

  e.AlertClose = function (e) {
    var t = n(e),
        a = t.cookie,
        i = t.closed;
    return 0 < i.length && function (e) {
      var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
      e.forEach(function (e) {
        l(document.getElementById(e), t);
      });
    }(i), {
      check: c({
        alert: "Element"
      }),
      trigger: function trigger(e, t) {
        t.preventDefault(), e.setAttribute("aria-pressed", "true");
        var n = s(e),
            r = n.alert,
            o = n.id;
        d(r, !1), i.push(o), a.createCookie(JSON.stringify(i), 365);
      }
    };
  }, e.AlertReset = function () {
    var n = r("alerts");
    return {
      check: c({
        alertsReset: "Boolean"
      }),
      trigger: function trigger(e, t) {
        console.log("Reset clicked??"), t.preventDefault(), n.deleteCookie(), document.location.reload();
      }
    };
  }, e.AlertsClear = function (e) {
    var t = n(e),
        r = t.cookie,
        o = t.closed;
    return 0 < o.length && f(), {
      check: c({
        alertsClear: "Boolean"
      }),
      trigger: function trigger(e, t) {
        t.preventDefault();
        var n = o.concat(f());
        r.createCookie(JSON.stringify(n), 365);
      }
    };
  }, e.Checker = c, e.Cookiebar = function (e) {
    var n = r("permission");
    return n.getValue() && l(document.getElementById(e)), {
      check: c({
        cookiebar: "Element"
      }),
      trigger: function trigger(e, t) {
        t.preventDefault(), function (e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
          e && (e.setAttribute("aria-hidden", "true"), e.style.display = "none", t && l(e));
        }(document.getElementById(e.dataset.cookiebar)), n.createCookie(!0, 365);
      }
    };
  }, e.EventListener = function (e) {
    if (!Array.isArray(e)) throw new Error("Must be array");
    var t = v(e);
    return document.body.addEventListener("click", t, !1), function () {
      document.body.removeEventListener("click", t, !1);
    };
  }, e.ImageViewer = function () {
    return {
      check: c({
        imageViewer: "Boolean"
      }),
      trigger: function trigger(e, t) {
        t.preventDefault(), e.focus();
        var n,
            r = {
          alt: (n = e).getAttribute("alt"),
          imageLarge: n.dataset.imageLarge,
          modalClass: n.dataset.modalClass
        },
            o = r.alt,
            a = r.imageLarge,
            i = r.modalClass,
            u = R("imageViewer");
        document.body.insertAdjacentHTML("beforeend", function (e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
              r = 3 < arguments.length ? arguments[3] : void 0;
          return '<section class="modal-overlay '.concat(n, '" id="').concat(t, '" aria-hidden="false" role="dialog" tabindex="1">\n    <div class="modal-content">\n      <button id="').concat(t, '-close" class="close-btn clearfix">x</button>\n      <div class="modal-content-image">\n        <img src="').concat(e, '" alt="').concat(r, '" />\n      </div>\n    </div>\n  </section>');
        }(a, u, i, o));
        var c = document.getElementById(u);
        c.focus();
        var l,
            d,
            s,
            f = document.getElementById("".concat(u, "-close"));
        d = c, s = e, l = function l(e) {
          e.preventDefault(), e.target.removeEventListener("click", e.target), d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.parentElement.removeChild(d), s.focus();
        }, f.addEventListener("click", l);
      }
    };
  }, e.Modal = function () {
    var e = document.querySelector("[data-modal]");

    if (e) {
      var t = V(e).modal;
      t.setAttribute("aria-hidden", "true"), t.setAttribute("tabindex", "-1"), t.setAttribute("role", "dialog");
    }

    return {
      check: c({
        modal: "Element",
        closeModal: "Element"
      }),
      trigger: function trigger(e, t) {
        t.preventDefault();
        var n,
            r,
            o,
            a,
            i = V(e),
            u = i.close,
            c = i.lastFocus,
            l = i.modal;
        (n = l).setAttribute("aria-hidden", "false"), n.setAttribute("tabindex", "0"), n.focus(), o = l, a = c, r = function r(e) {
          e.preventDefault(), e.target.removeEventListener("click", e.target), o.setAttribute("aria-hidden", "true"), o.setAttribute("tabindex", "-1"), a.focus();
        }, u.addEventListener("click", r);
      }
    };
  }, e.MoreLess = function () {
    return {
      check: c({
        more: "Element",
        less: "Element"
      }),
      trigger: function trigger(e, t) {
        t.preventDefault();

        var n,
            r,
            o = _(e, "more"),
            a = _(e, "less"),
            i = (r = "true" === (n = e).getAttribute("aria-pressed"), n.setAttribute("aria-pressed", !r), n.textContent = r ? "Read More" : "Read Less", r);

        o.setAttribute("aria-hidden", i), a.setAttribute("aria-hidden", !i);
      }
    };
  }, e.RemoveElement = l, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21)))

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var getTimezoneOffsetInMilliseconds = __webpack_require__(110);

var isDate = __webpack_require__(57);

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var parseTokenDateTimeDelimeter = /[T ]/;
var parseTokenPlainTime = /:/; // year tokens

var parseTokenYY = /^(\d{2})$/;
var parseTokensYYY = [/^([+-]\d{2})$/, // 0 additional digits
/^([+-]\d{3})$/, // 1 additional digit
/^([+-]\d{4})$/ // 2 additional digits
];
var parseTokenYYYY = /^(\d{4})/;
var parseTokensYYYYY = [/^([+-]\d{4})/, // 0 additional digits
/^([+-]\d{5})/, // 1 additional digit
/^([+-]\d{6})/ // 2 additional digits
]; // date tokens

var parseTokenMM = /^-(\d{2})$/;
var parseTokenDDD = /^-?(\d{3})$/;
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/;
var parseTokenWww = /^-?W(\d{2})$/;
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/; // time tokens

var parseTokenHH = /^(\d{2}([.,]\d*)?)$/;
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/;
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/; // timezone tokens

var parseTokenTimezone = /([Z+-].*)$/;
var parseTokenTimezoneZ = /^(Z)$/;
var parseTokenTimezoneHH = /^([+-])(\d{2})$/;
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/;
/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */

function parse(argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument !== 'string') {
    return new Date(argument);
  }

  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits;

  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS;
  } else {
    additionalDigits = Number(additionalDigits);
  }

  var dateStrings = splitDateString(argument);
  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;
  var date = parseDate(restDateString, year);

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone) * MILLISECONDS_IN_MINUTE;
    } else {
      var fullTime = timestamp + time;
      var fullTimeDate = new Date(fullTime);
      offset = getTimezoneOffsetInMilliseconds(fullTimeDate); // Adjust time when it's coming from DST

      var fullTimeDateNextDay = new Date(fullTime);
      fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1);
      var offsetDiff = getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) - getTimezoneOffsetInMilliseconds(fullTimeDate);

      if (offsetDiff > 0) {
        offset += offsetDiff;
      }
    }

    return new Date(timestamp + time + offset);
  } else {
    return new Date(argument);
  }
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(parseTokenDateTimeDelimeter);
  var timeString;

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits];
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits];
  var token; // YYYY or ±YYYYY

  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString);

  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  } // YY or ±YYY


  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString);

  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  } // Invalid ISO-formatted year


  return {
    year: null
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null;
  }

  var token;
  var date;
  var month;
  var week; // YYYY

  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date;
  } // YYYY-MM


  token = parseTokenMM.exec(dateString);

  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    date.setUTCFullYear(year, month);
    return date;
  } // YYYY-DDD or YYYYDDD


  token = parseTokenDDD.exec(dateString);

  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  } // YYYY-MM-DD or YYYYMMDD


  token = parseTokenMMDD.exec(dateString);

  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    date.setUTCFullYear(year, month, day);
    return date;
  } // YYYY-Www or YYYYWww


  token = parseTokenWww.exec(dateString);

  if (token) {
    week = parseInt(token[1], 10) - 1;
    return dayOfISOYear(year, week);
  } // YYYY-Www-D or YYYYWwwD


  token = parseTokenWwwD.exec(dateString);

  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    return dayOfISOYear(year, week, dayOfWeek);
  } // Invalid ISO-formatted date


  return null;
}

function parseTime(timeString) {
  var token;
  var hours;
  var minutes; // hh

  token = parseTokenHH.exec(timeString);

  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR;
  } // hh:mm or hhmm


  token = parseTokenHHMM.exec(timeString);

  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  } // hh:mm:ss or hhmmss


  token = parseTokenHHMMSS.exec(timeString);

  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
  } // Invalid ISO-formatted time


  return null;
}

function parseTimezone(timezoneString) {
  var token;
  var absoluteOffset; // Z

  token = parseTokenTimezoneZ.exec(timezoneString);

  if (token) {
    return 0;
  } // ±hh


  token = parseTokenTimezoneHH.exec(timezoneString);

  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60;
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  } // ±hh:mm or ±hhmm


  token = parseTokenTimezoneHHMM.exec(timezoneString);

  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
    return token[1] === '+' ? -absoluteOffset : absoluteOffset;
  }

  return 0;
}

function dayOfISOYear(isoYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

module.exports = parse;

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__(15);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(12);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(6);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(5);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(3);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(11);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(2);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(9);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(1);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es7.object.entries.js
var es7_object_entries = __webpack_require__(84);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(50);

// CONCATENATED MODULE: ./components/fetch_helpers/convert_case.js
var toCamelCase=function toCamelCase(str){return str.replace(/(_\w)*/g,function(txt){return txt.charAt(1).toUpperCase();});};var toSnakeCase=function toSnakeCase(str){return str.replace(/([A-Z])*/g,function(txt){if(txt==='')return txt;return"_".concat(txt.toLowerCase());});};
// CONCATENATED MODULE: ./components/fetch_helpers/post_helpers.js
/* unused harmony export setKey */
/* unused harmony export PrepData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleError; });
/* unused harmony export handleSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isSuccess; });
/* unused harmony export postResponse */
/* unused harmony export postMultiResponse */
/* unused harmony export patchResponse */
/* unused harmony export fetchRequest */
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return;}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var post_helpers_setKey=function setKey(k){switch(k){case'firstName':return'firstname';case'lastName':return'lastname';default:return toSnakeCase(k);}};var PrepData=function PrepData(data){return Object.entries(data).reduce(function(d,_ref){var _ref2=_slicedToArray(_ref,2),k=_ref2[0],v=_ref2[1];if(k==='type')return d;var key=post_helpers_setKey(k);return _objectSpread({},d,_defineProperty({},key,v));},{});};/* eslint-disable no-weak-types */var handleError=function handleError(next,type){return function(error){return next({error:error,type:type});};};/* eslint-enable no-weak-types */var handleSuccess=function handleSuccess(next,type){return function(action){return next(_objectSpread({},action,{type:type}));};};var isSuccess=function isSuccess(_ref3){var status=_ref3.status;return status>=200&&status<300;};var createResponse=function createResponse(method){return function(data){return{method:method,headers:{Accept:'application/json','Content-Type':'application/json'},body:JSON.stringify(data)};};};var postResponse=createResponse('POST');var postMultiResponse=function postMultiResponse(data){return{method:'POST',headers:{Accept:'application/json','Content-Type':'application/json'},body:data};};var patchResponse=createResponse('PATCH');var post_helpers_fetchRequest=function fetchRequest(url,sendData){var processData=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'json';return fetch(url,sendData).then(function _callee(response){var data;return regenerator_default.a.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regenerator_default.a.awrap(response[processData]());case 2:data=_context.sent;return _context.abrupt("return",{data:data,response:response});case 4:case"end":return _context.stop();}}});}).then(function(_ref4){var data=_ref4.data,response=_ref4.response;return{isSuccess:isSuccess(response),data:data};});};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkElements; });
var isElement=function isElement(d){return d instanceof Element;};var checkElements=function checkElements(){for(var _len=arguments.length,elms=new Array(_len),_key=0;_key<_len;_key++){elms[_key]=arguments[_key];}return elms.reduce(function(check,elm){if(!check)return check;return isElement(elm);},true);};

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __DO_NOT_USE__ActionTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */

var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

function isPlainObject(obj) {
  if (_typeof(obj) !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */


function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (_typeof(observer) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = observable, _ref2;
}
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */


function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (_typeof(actionCreators) !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : _typeof(actionCreators)) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */


function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */


function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */


function isCrushed() {}

if (false) {}



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var curry=function curry(fn){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}return fn.length<=args.length?fn.apply(void 0,args):function(){for(var _len2=arguments.length,more=new Array(_len2),_key2=0;_key2<_len2;_key2++){more[_key2]=arguments[_key2];}return curry.apply(void 0,[fn].concat(args,more));};};/* harmony default export */ __webpack_exports__["a"] = (curry);

/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(113);
/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */


function startOfISOWeek(dirtyDate) {
  return startOfWeek(dirtyDate, {
    weekStartsOn: 1
  });
}

module.exports = startOfISOWeek;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(57);
/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */


function isValid(dirtyDate) {
  if (isDate(dirtyDate)) {
    return !isNaN(dirtyDate);
  } else {
    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date');
  }
}

module.exports = isValid;

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21), __webpack_require__(119)(module)))

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__(109);

var getISOWeek = __webpack_require__(112);

var getISOYear = __webpack_require__(58);

var parse = __webpack_require__(18);

var isValid = __webpack_require__(45);

var enLocale = __webpack_require__(115);
/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */


function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ';
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFormatters = enLocale.format.formatters;
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp;

  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters;

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp;
    }
  }

  var date = parse(dirtyDate);

  if (!isValid(date)) {
    return 'Invalid Date';
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp);
  return formatFn(date);
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function M(date) {
    return date.getMonth() + 1;
  },
  // Month: 01, 02, ..., 12
  'MM': function MM(date) {
    return addLeadingZeros(date.getMonth() + 1, 2);
  },
  // Quarter: 1, 2, 3, 4
  'Q': function Q(date) {
    return Math.ceil((date.getMonth() + 1) / 3);
  },
  // Day of month: 1, 2, ..., 31
  'D': function D(date) {
    return date.getDate();
  },
  // Day of month: 01, 02, ..., 31
  'DD': function DD(date) {
    return addLeadingZeros(date.getDate(), 2);
  },
  // Day of year: 1, 2, ..., 366
  'DDD': function DDD(date) {
    return getDayOfYear(date);
  },
  // Day of year: 001, 002, ..., 366
  'DDDD': function DDDD(date) {
    return addLeadingZeros(getDayOfYear(date), 3);
  },
  // Day of week: 0, 1, ..., 6
  'd': function d(date) {
    return date.getDay();
  },
  // Day of ISO week: 1, 2, ..., 7
  'E': function E(date) {
    return date.getDay() || 7;
  },
  // ISO week: 1, 2, ..., 53
  'W': function W(date) {
    return getISOWeek(date);
  },
  // ISO week: 01, 02, ..., 53
  'WW': function WW(date) {
    return addLeadingZeros(getISOWeek(date), 2);
  },
  // Year: 00, 01, ..., 99
  'YY': function YY(date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2);
  },
  // Year: 1900, 1901, ..., 2099
  'YYYY': function YYYY(date) {
    return addLeadingZeros(date.getFullYear(), 4);
  },
  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function GG(date) {
    return String(getISOYear(date)).substr(2);
  },
  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function GGGG(date) {
    return getISOYear(date);
  },
  // Hour: 0, 1, ... 23
  'H': function H(date) {
    return date.getHours();
  },
  // Hour: 00, 01, ..., 23
  'HH': function HH(date) {
    return addLeadingZeros(date.getHours(), 2);
  },
  // Hour: 1, 2, ..., 12
  'h': function h(date) {
    var hours = date.getHours();

    if (hours === 0) {
      return 12;
    } else if (hours > 12) {
      return hours % 12;
    } else {
      return hours;
    }
  },
  // Hour: 01, 02, ..., 12
  'hh': function hh(date) {
    return addLeadingZeros(formatters['h'](date), 2);
  },
  // Minute: 0, 1, ..., 59
  'm': function m(date) {
    return date.getMinutes();
  },
  // Minute: 00, 01, ..., 59
  'mm': function mm(date) {
    return addLeadingZeros(date.getMinutes(), 2);
  },
  // Second: 0, 1, ..., 59
  's': function s(date) {
    return date.getSeconds();
  },
  // Second: 00, 01, ..., 59
  'ss': function ss(date) {
    return addLeadingZeros(date.getSeconds(), 2);
  },
  // 1/10 of second: 0, 1, ..., 9
  'S': function S(date) {
    return Math.floor(date.getMilliseconds() / 100);
  },
  // 1/100 of second: 00, 01, ..., 99
  'SS': function SS(date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2);
  },
  // Millisecond: 000, 001, ..., 999
  'SSS': function SSS(date) {
    return addLeadingZeros(date.getMilliseconds(), 3);
  },
  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function Z(date) {
    return formatTimezone(date.getTimezoneOffset(), ':');
  },
  // Timezone: -0100, +0000, ... +1200
  'ZZ': function ZZ(date) {
    return formatTimezone(date.getTimezoneOffset());
  },
  // Seconds timestamp: 512969520
  'X': function X(date) {
    return Math.floor(date.getTime() / 1000);
  },
  // Milliseconds timestamp: 512969520900
  'x': function x(date) {
    return date.getTime();
  }
};

function buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp);
  var length = array.length;
  var i;
  var formatter;

  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]];

    if (formatter) {
      array[i] = formatter;
    } else {
      array[i] = removeFormattingTokens(array[i]);
    }
  }

  return function (date) {
    var output = '';

    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters);
      } else {
        output += array[i];
      }
    }

    return output;
  };
}

function removeFormattingTokens(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '');
  }

  return input.replace(/\\/g, '');
}

function formatTimezone(offset, delimeter) {
  delimeter = delimeter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2);
}

function addLeadingZeros(number, targetLength) {
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return output;
}

module.exports = format;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate(argument) {
  return argument instanceof Date;
}

module.exports = isDate;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(18);

var startOfISOWeek = __webpack_require__(42);
/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */


function getISOYear(dirtyDate) {
  var date = parse(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

module.exports = getISOYear;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(106);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96);
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(picturefill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _webcomponents_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var _webcomponents_template__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_webcomponents_template__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var indexeddb_getall_shim__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72);
/* harmony import */ var indexeddb_getall_shim__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(indexeddb_getall_shim__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_8__);
var objectAssign=function objectAssign(){if(!Object.assign){Object.defineProperty(Object,'assign',{enumerable:false,configurable:true,writable:true,value:function value(target){if(target===undefined||target===null){throw new TypeError('Cannot convert first argument to object');}var to=Object(target);for(var i=1;i<arguments.length;i++){var nextSource=arguments[i];if(nextSource===undefined||nextSource===null){continue;}nextSource=Object(nextSource);var keysArray=Object.keys(Object(nextSource));for(var nextIndex=0,len=keysArray.length;nextIndex<len;nextIndex++){var nextKey=keysArray[nextIndex];var desc=Object.getOwnPropertyDescriptor(nextSource,nextKey);if(desc!==undefined&&desc.enumerable){to[nextKey]=nextSource[nextKey];}}}return to;}});}};// Load pollyfills
(function(){objectAssign();// Loads Fetch pollyfill
var loadFetchPollyFill=function loadFetchPollyFill(){return __webpack_require__.e(/* import() | whatwg-fetch */ 34).then(__webpack_require__.bind(null, 155));};if(!('fetch'in window)){loadFetchPollyFill();}var loadObserverPollyFill=function loadObserverPollyFill(){return __webpack_require__.e(/* import() | intersection-observer */ 18).then(__webpack_require__.t.bind(null, 156, 7));};if(!('IntersectionObserver'in window)){loadObserverPollyFill();}})();

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// minimal template polyfill
(function () {
  'use strict';

  var needsTemplate = typeof HTMLTemplateElement === 'undefined';
  var brokenDocFragment = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment);
  var needsDocFrag = false; // NOTE: Replace DocumentFragment to work around IE11 bug that
  // causes children of a document fragment modified while
  // there is a mutation observer to not have a parentNode, or
  // have a broken parentNode (!?!)

  if (/Trident/.test(navigator.userAgent)) {
    (function () {
      needsDocFrag = true;
      var origCloneNode = Node.prototype.cloneNode;

      Node.prototype.cloneNode = function cloneNode(deep) {
        var newDom = origCloneNode.call(this, deep);

        if (this instanceof DocumentFragment) {
          newDom.__proto__ = DocumentFragment.prototype;
        }

        return newDom;
      }; // IE's DocumentFragment querySelector code doesn't work when
      // called on an element instance


      DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll;
      DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector;
      Object.defineProperties(DocumentFragment.prototype, {
        'nodeType': {
          get: function get() {
            return Node.DOCUMENT_FRAGMENT_NODE;
          },
          configurable: true
        },
        'localName': {
          get: function get() {
            return undefined;
          },
          configurable: true
        },
        'nodeName': {
          get: function get() {
            return '#document-fragment';
          },
          configurable: true
        }
      });
      var origInsertBefore = Node.prototype.insertBefore;

      function insertBefore(newNode, refNode) {
        if (newNode instanceof DocumentFragment) {
          var child;

          while (child = newNode.firstChild) {
            origInsertBefore.call(this, child, refNode);
          }
        } else {
          origInsertBefore.call(this, newNode, refNode);
        }

        return newNode;
      }

      Node.prototype.insertBefore = insertBefore;
      var origAppendChild = Node.prototype.appendChild;

      Node.prototype.appendChild = function appendChild(child) {
        if (child instanceof DocumentFragment) {
          insertBefore.call(this, child, null);
        } else {
          origAppendChild.call(this, child);
        }

        return child;
      };

      var origRemoveChild = Node.prototype.removeChild;
      var origReplaceChild = Node.prototype.replaceChild;

      Node.prototype.replaceChild = function replaceChild(newChild, oldChild) {
        if (newChild instanceof DocumentFragment) {
          insertBefore.call(this, newChild, oldChild);
          origRemoveChild.call(this, oldChild);
        } else {
          origReplaceChild.call(this, newChild, oldChild);
        }

        return oldChild;
      };

      Document.prototype.createDocumentFragment = function createDocumentFragment() {
        var frag = this.createElement('df');
        frag.__proto__ = DocumentFragment.prototype;
        return frag;
      };

      var origImportNode = Document.prototype.importNode;

      Document.prototype.importNode = function importNode(impNode, deep) {
        deep = deep || false;
        var newNode = origImportNode.call(this, impNode, deep);

        if (impNode instanceof DocumentFragment) {
          newNode.__proto__ = DocumentFragment.prototype;
        }

        return newNode;
      };
    })();
  } // NOTE: we rely on this cloneNode not causing element upgrade.
  // This means this polyfill must load before the CE polyfill and
  // this would need to be re-worked if a browser supports native CE
  // but not <template>.


  var capturedCloneNode = Node.prototype.cloneNode;
  var capturedCreateElement = Document.prototype.createElement;
  var capturedImportNode = Document.prototype.importNode;
  var capturedRemoveChild = Node.prototype.removeChild;
  var capturedAppendChild = Node.prototype.appendChild;
  var capturedReplaceChild = Node.prototype.replaceChild;
  var capturedParseFromString = DOMParser.prototype.parseFromString;
  var capturedHTMLElementInnerHTML = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'innerHTML') || {
    /**
     * @this {!HTMLElement}
     * @return {string}
     */
    get: function get() {
      return this.innerHTML;
    },

    /**
     * @this {!HTMLElement}
     * @param {string}
     */
    set: function set(text) {
      this.innerHTML = text;
    }
  };
  var capturedChildNodes = Object.getOwnPropertyDescriptor(window.Node.prototype, 'childNodes') || {
    /**
     * @this {!Node}
     * @return {!NodeList}
     */
    get: function get() {
      return this.childNodes;
    }
  };
  var elementQuerySelectorAll = Element.prototype.querySelectorAll;
  var docQuerySelectorAll = Document.prototype.querySelectorAll;
  var fragQuerySelectorAll = DocumentFragment.prototype.querySelectorAll;
  var scriptSelector = 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]';

  function QSA(node, selector) {
    // IE 11 throws a SyntaxError with `scriptSelector` if the node has no children due to the `:not([type])` syntax
    if (!node.childNodes.length) {
      return [];
    }

    switch (node.nodeType) {
      case Node.DOCUMENT_NODE:
        return docQuerySelectorAll.call(node, selector);

      case Node.DOCUMENT_FRAGMENT_NODE:
        return fragQuerySelectorAll.call(node, selector);

      default:
        return elementQuerySelectorAll.call(node, selector);
    }
  } // returns true if nested templates cannot be cloned (they cannot be on
  // some impl's like Safari 8 and Edge)
  // OR if cloning a document fragment does not result in a document fragment


  var needsCloning = function () {
    if (!needsTemplate) {
      var t = document.createElement('template');
      var t2 = document.createElement('template');
      t2.content.appendChild(document.createElement('div'));
      t.content.appendChild(t2);
      var clone = t.cloneNode(true);
      return clone.content.childNodes.length === 0 || clone.content.firstChild.content.childNodes.length === 0 || brokenDocFragment;
    }
  }();

  var TEMPLATE_TAG = 'template';

  var PolyfilledHTMLTemplateElement = function PolyfilledHTMLTemplateElement() {};

  if (needsTemplate) {
    var contentDoc = document.implementation.createHTMLDocument('template');
    var canDecorate = true;
    var templateStyle = document.createElement('style');
    templateStyle.textContent = TEMPLATE_TAG + '{display:none;}';
    var head = document.head;
    head.insertBefore(templateStyle, head.firstElementChild);
    /**
      Provides a minimal shim for the <template> element.
    */

    PolyfilledHTMLTemplateElement.prototype = Object.create(HTMLElement.prototype); // if elements do not have `innerHTML` on instances, then
    // templates can be patched by swizzling their prototypes.

    var canProtoPatch = !document.createElement('div').hasOwnProperty('innerHTML');
    /**
      The `decorate` method moves element children to the template's `content`.
      NOTE: there is no support for dynamically adding elements to templates.
    */

    PolyfilledHTMLTemplateElement.decorate = function (template) {
      // if the template is decorated or not in HTML namespace, return fast
      if (template.content || template.namespaceURI !== document.documentElement.namespaceURI) {
        return;
      }

      template.content = contentDoc.createDocumentFragment();
      var child;

      while (child = template.firstChild) {
        capturedAppendChild.call(template.content, child);
      } // NOTE: prefer prototype patching for performance and
      // because on some browsers (IE11), re-defining `innerHTML`
      // can result in intermittent errors.


      if (canProtoPatch) {
        template.__proto__ = PolyfilledHTMLTemplateElement.prototype;
      } else {
        template.cloneNode = function (deep) {
          return PolyfilledHTMLTemplateElement._cloneNode(this, deep);
        }; // add innerHTML to template, if possible
        // Note: this throws on Safari 7


        if (canDecorate) {
          try {
            defineInnerHTML(template);
            defineOuterHTML(template);
          } catch (err) {
            canDecorate = false;
          }
        }
      } // bootstrap recursively


      PolyfilledHTMLTemplateElement.bootstrap(template.content);
    }; // Taken from https://github.com/jquery/jquery/blob/73d7e6259c63ac45f42c6593da8c2796c6ce9281/src/manipulation/wrapMap.js


    var topLevelWrappingMap = {
      'option': ['select'],
      'thead': ['table'],
      'col': ['colgroup', 'table'],
      'tr': ['tbody', 'table'],
      'th': ['tr', 'tbody', 'table'],
      'td': ['tr', 'tbody', 'table']
    };

    var getTagName = function getTagName(text) {
      // Taken from https://github.com/jquery/jquery/blob/73d7e6259c63ac45f42c6593da8c2796c6ce9281/src/manipulation/var/rtagName.js
      return (/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(text) || ['', ''])[1].toLowerCase();
    };

    var defineInnerHTML = function defineInnerHTML(obj) {
      Object.defineProperty(obj, 'innerHTML', {
        get: function get() {
          return getInnerHTML(this);
        },
        set: function set(text) {
          // For IE11, wrap the text in the correct (table) context
          var wrap = topLevelWrappingMap[getTagName(text)];

          if (wrap) {
            for (var i = 0; i < wrap.length; i++) {
              text = '<' + wrap[i] + '>' + text + '</' + wrap[i] + '>';
            }
          }

          contentDoc.body.innerHTML = text;
          PolyfilledHTMLTemplateElement.bootstrap(contentDoc);

          while (this.content.firstChild) {
            capturedRemoveChild.call(this.content, this.content.firstChild);
          }

          var body = contentDoc.body; // If we had wrapped, get back to the original node

          if (wrap) {
            for (var j = 0; j < wrap.length; j++) {
              body = body.lastChild;
            }
          }

          while (body.firstChild) {
            capturedAppendChild.call(this.content, body.firstChild);
          }
        },
        configurable: true
      });
    };

    var defineOuterHTML = function defineOuterHTML(obj) {
      Object.defineProperty(obj, 'outerHTML', {
        get: function get() {
          return '<' + TEMPLATE_TAG + '>' + this.innerHTML + '</' + TEMPLATE_TAG + '>';
        },
        set: function set(innerHTML) {
          if (this.parentNode) {
            contentDoc.body.innerHTML = innerHTML;
            var docFrag = this.ownerDocument.createDocumentFragment();

            while (contentDoc.body.firstChild) {
              capturedAppendChild.call(docFrag, contentDoc.body.firstChild);
            }

            capturedReplaceChild.call(this.parentNode, docFrag, this);
          } else {
            throw new Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
          }
        },
        configurable: true
      });
    };

    defineInnerHTML(PolyfilledHTMLTemplateElement.prototype);
    defineOuterHTML(PolyfilledHTMLTemplateElement.prototype);
    /**
      The `bootstrap` method is called automatically and "fixes" all
      <template> elements in the document referenced by the `doc` argument.
    */

    PolyfilledHTMLTemplateElement.bootstrap = function bootstrap(doc) {
      var templates = QSA(doc, TEMPLATE_TAG);

      for (var i = 0, l = templates.length, t; i < l && (t = templates[i]); i++) {
        PolyfilledHTMLTemplateElement.decorate(t);
      }
    }; // auto-bootstrapping for main document


    document.addEventListener('DOMContentLoaded', function () {
      PolyfilledHTMLTemplateElement.bootstrap(document);
    }); // Patch document.createElement to ensure newly created templates have content

    Document.prototype.createElement = function createElement() {
      var el = capturedCreateElement.apply(this, arguments);

      if (el.localName === 'template') {
        PolyfilledHTMLTemplateElement.decorate(el);
      }

      return el;
    };

    DOMParser.prototype.parseFromString = function () {
      var el = capturedParseFromString.apply(this, arguments);
      PolyfilledHTMLTemplateElement.bootstrap(el);
      return el;
    };

    Object.defineProperty(HTMLElement.prototype, 'innerHTML', {
      get: function get() {
        return getInnerHTML(this);
      },
      set: function set(text) {
        capturedHTMLElementInnerHTML.set.call(this, text);
        PolyfilledHTMLTemplateElement.bootstrap(this);
      },
      configurable: true,
      enumerable: true
    }); // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#escapingString

    var escapeAttrRegExp = /[&\u00A0"]/g;
    var escapeDataRegExp = /[&\u00A0<>]/g;

    var escapeReplace = function escapeReplace(c) {
      switch (c) {
        case '&':
          return '&amp;';

        case '<':
          return '&lt;';

        case '>':
          return '&gt;';

        case '"':
          return '&quot;';

        case "\xA0":
          return '&nbsp;';
      }
    };

    var escapeAttr = function escapeAttr(s) {
      return s.replace(escapeAttrRegExp, escapeReplace);
    };

    var escapeData = function escapeData(s) {
      return s.replace(escapeDataRegExp, escapeReplace);
    };

    var makeSet = function makeSet(arr) {
      var set = {};

      for (var i = 0; i < arr.length; i++) {
        set[arr[i]] = true;
      }

      return set;
    }; // http://www.whatwg.org/specs/web-apps/current-work/#void-elements


    var voidElements = makeSet(['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
    var plaintextParents = makeSet(['style', 'script', 'xmp', 'iframe', 'noembed', 'noframes', 'plaintext', 'noscript']);
    /**
     * @param {Node} node
     * @param {Node} parentNode
     * @param {Function=} callback
     */

    var getOuterHTML = function getOuterHTML(node, parentNode, callback) {
      switch (node.nodeType) {
        case Node.ELEMENT_NODE:
          {
            var tagName = node.localName;
            var s = '<' + tagName;
            var attrs = node.attributes;

            for (var i = 0, attr; attr = attrs[i]; i++) {
              s += ' ' + attr.name + '="' + escapeAttr(attr.value) + '"';
            }

            s += '>';

            if (voidElements[tagName]) {
              return s;
            }

            return s + getInnerHTML(node, callback) + '</' + tagName + '>';
          }

        case Node.TEXT_NODE:
          {
            var data =
            /** @type {Text} */
            node.data;

            if (parentNode && plaintextParents[parentNode.localName]) {
              return data;
            }

            return escapeData(data);
          }

        case Node.COMMENT_NODE:
          {
            return '<!--' +
            /** @type {Comment} */
            node.data + '-->';
          }

        default:
          {
            window.console.error(node);
            throw new Error('not implemented');
          }
      }
    };
    /**
     * @param {Node} node
     * @param {Function=} callback
     */


    var getInnerHTML = function getInnerHTML(node, callback) {
      if (node.localName === 'template') {
        node =
        /** @type {HTMLTemplateElement} */
        node.content;
      }

      var s = '';
      var c$ = callback ? callback(node) : capturedChildNodes.get.call(node);

      for (var i = 0, l = c$.length, child; i < l && (child = c$[i]); i++) {
        s += getOuterHTML(child, node, callback);
      }

      return s;
    };
  } // make cloning/importing work!


  if (needsTemplate || needsCloning) {
    PolyfilledHTMLTemplateElement._cloneNode = function _cloneNode(template, deep) {
      var clone = capturedCloneNode.call(template, false); // NOTE: decorate doesn't auto-fix children because they are already
      // decorated so they need special clone fixup.

      if (this.decorate) {
        this.decorate(clone);
      }

      if (deep) {
        // NOTE: use native clone node to make sure CE's wrapped
        // cloneNode does not cause elements to upgrade.
        capturedAppendChild.call(clone.content, capturedCloneNode.call(template.content, true)); // now ensure nested templates are cloned correctly.

        fixClonedDom(clone.content, template.content);
      }

      return clone;
    }; // Given a source and cloned subtree, find <template>'s in the cloned
    // subtree and replace them with cloned <template>'s from source.
    // We must do this because only the source templates have proper .content.


    var fixClonedDom = function fixClonedDom(clone, source) {
      // do nothing if cloned node is not an element
      if (!source.querySelectorAll) return; // these two lists should be coincident

      var s$ = QSA(source, TEMPLATE_TAG);

      if (s$.length === 0) {
        return;
      }

      var t$ = QSA(clone, TEMPLATE_TAG);

      for (var i = 0, l = t$.length, t, s; i < l; i++) {
        s = s$[i];
        t = t$[i];

        if (PolyfilledHTMLTemplateElement && PolyfilledHTMLTemplateElement.decorate) {
          PolyfilledHTMLTemplateElement.decorate(s);
        }

        capturedReplaceChild.call(t.parentNode, cloneNode.call(s, true), t);
      }
    }; // make sure scripts inside of a cloned template are executable


    var fixClonedScripts = function fixClonedScripts(fragment) {
      var scripts = QSA(fragment, scriptSelector);

      for (var ns, s, i = 0; i < scripts.length; i++) {
        s = scripts[i];
        ns = capturedCreateElement.call(document, 'script');
        ns.textContent = s.textContent;
        var attrs = s.attributes;

        for (var ai = 0, a; ai < attrs.length; ai++) {
          a = attrs[ai];
          ns.setAttribute(a.name, a.value);
        }

        capturedReplaceChild.call(s.parentNode, ns, s);
      }
    }; // override all cloning to fix the cloned subtree to contain properly
    // cloned templates.


    var cloneNode = Node.prototype.cloneNode = function cloneNode(deep) {
      var dom; // workaround for Edge bug cloning documentFragments
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8619646/

      if (!needsDocFrag && brokenDocFragment && this instanceof DocumentFragment) {
        if (!deep) {
          return this.ownerDocument.createDocumentFragment();
        } else {
          dom = importNode.call(this.ownerDocument, this, true);
        }
      } else if (this.nodeType === Node.ELEMENT_NODE && this.localName === TEMPLATE_TAG && this.namespaceURI == document.documentElement.namespaceURI) {
        dom = PolyfilledHTMLTemplateElement._cloneNode(this, deep);
      } else {
        dom = capturedCloneNode.call(this, deep);
      } // template.content is cloned iff `deep`.


      if (deep) {
        fixClonedDom(dom, this);
      }

      return dom;
    }; // NOTE: we are cloning instead of importing <template>'s.
    // However, the ownerDocument of the cloned template will be correct!
    // This is because the native import node creates the right document owned
    // subtree and `fixClonedDom` inserts cloned templates into this subtree,
    // thus updating the owner doc.


    var importNode = Document.prototype.importNode = function importNode(element, deep) {
      deep = deep || false;

      if (element.localName === TEMPLATE_TAG) {
        return PolyfilledHTMLTemplateElement._cloneNode(element, deep);
      } else {
        var dom = capturedImportNode.call(this, element, deep);

        if (deep) {
          fixClonedDom(dom, element);
          fixClonedScripts(dom);
        }

        return dom;
      }
    };
  }

  if (needsTemplate) {
    window.HTMLTemplateElement = PolyfilledHTMLTemplateElement;
  }
})();

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// http://stackoverflow.com/a/33268326/786644 - works in browser, worker, and Node.js
var globalVar = typeof window !== 'undefined' ? window : typeof WorkerGlobalScope !== 'undefined' ? self : typeof global !== 'undefined' ? global : Function('return this;')();

(function (window) {
  "use strict";

  var Event, IDBIndex, IDBObjectStore, IDBRequest, getAllFactory;
  IDBObjectStore = window.IDBObjectStore || window.webkitIDBObjectStore || window.mozIDBObjectStore || window.msIDBObjectStore;
  IDBIndex = window.IDBIndex || window.webkitIDBIndex || window.mozIDBIndex || window.msIDBIndex;

  if (typeof IDBObjectStore === "undefined" || typeof IDBIndex === "undefined") {
    return;
  }

  var override = false; // Safari 10.1 has getAll but inside a Worker it crashes https://bugs.webkit.org/show_bug.cgi?id=172434

  if (typeof WorkerGlobalScope !== "undefined" && (navigator.userAgent.indexOf("Safari/602") >= 0 || navigator.userAgent.indexOf("Safari/603") >= 0)) {
    override = true;
  }

  if (!override && IDBObjectStore.prototype.getAll !== undefined && IDBIndex.prototype.getAll !== undefined && IDBObjectStore.prototype.getAllKeys !== undefined && IDBIndex.prototype.getAllKeys !== undefined) {
    return;
  } // IDBRequest and Event objects mostly from https://github.com/dumbmatter/fakeIndexedDB


  IDBRequest = function IDBRequest() {
    this.result = null;
    this.error = null;
    this.source = null;
    this.transaction = null;
    this.readyState = 'pending';
    this.onsuccess = null;
    this.onerror = null;

    this.toString = function () {
      return '[object IDBRequest]';
    };
  };

  Event = function Event(type) {
    this.type = type;
    this.target = null;
    this.currentTarget = null;
    this.NONE = 0;
    this.CAPTURING_PHASE = 1;
    this.AT_TARGET = 2;
    this.BUBBLING_PHASE = 3;
    this.eventPhase = this.NONE;

    this.stopPropagation = function () {
      console.log('stopPropagation not implemented in IndexedDB-getAll-shim');
    };

    this.stopImmediatePropagation = function () {
      console.log('stopImmediatePropagation not implemented in IndexedDB-getAll-shim');
    };

    this.bubbles = false;
    this.cancelable = false;

    this.preventDefault = function () {
      console.log('preventDefault not implemented in IndexedDB-getAll-shim');
    };

    this.defaultPrevented = false;
    this.isTrusted = false;
    this.timestamp = Date.now();
  }; // Based on spec draft https://w3c.github.io/IndexedDB/#dom-idbobjectstore-getall


  getAllFactory = function getAllFactory(parent, type) {
    return function (key, count) {
      var cursorRequest, request, result;
      key = key !== undefined ? key : null;
      request = new IDBRequest();
      result = []; // this is either an IDBObjectStore or an IDBIndex, depending on the context.

      cursorRequest = this.openCursor(key);

      cursorRequest.onsuccess = function (event) {
        var cursor, e, value;
        cursor = event.target.result;

        if (cursor) {
          if (type === "value") {
            value = cursor.value;
          } else if (parent === "index") {
            value = cursor.primaryKey;
          } else {
            value = cursor.key;
          }

          result.push(value);

          if (count === undefined || result.length < count) {
            cursor.continue();
            return;
          }
        }

        if (typeof request.onsuccess === "function") {
          e = new Event("success");
          e.target = {
            readyState: "done",
            result: result
          };
          request.result = result;
          request.onsuccess(e);
        }
      };

      cursorRequest.onerror = function (event) {
        console.log('IndexedDB-getAll-shim error when getting data:', event.target.error);

        if (typeof request.onerror === "function") {
          request.onerror(event);
        }
      };

      return request;
    };
  };

  if (override || IDBObjectStore.prototype.getAll === undefined) {
    IDBObjectStore.prototype.getAll = getAllFactory("objectStore", "value");
  }

  if (override || IDBIndex.prototype.getAll === undefined) {
    IDBIndex.prototype.getAll = getAllFactory("index", "value");
  }

  if (override || IDBObjectStore.prototype.getAllKeys === undefined) {
    IDBObjectStore.prototype.getAllKeys = getAllFactory("objectStore", "key");
  }

  if (override || IDBIndex.prototype.getAllKeys === undefined) {
    IDBIndex.prototype.getAllKeys = getAllFactory("index", "key");
  }
})(globalVar);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21)))

/***/ }),
/* 73 */
/***/ (function(module, exports) {

(function(){if('serviceWorker'in navigator){var swPath='/sw.js';window.addEventListener('load',function(){navigator.serviceWorker.register(swPath).then(function(registration){console.log('SW registered: ',registration);})["catch"](function(registrationError){console.log('SW registration failed: ',registrationError);});});}})();

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fontfaceobserver__WEBPACK_IMPORTED_MODULE_0__);
var GarageGothic=new fontfaceobserver__WEBPACK_IMPORTED_MODULE_0___default.a('Garage Gothic');GarageGothic.load().then(function(){document.body.classList.add('GarageGothic-loaded');})["catch"](function(err){document.body.classList.add('GarageGothic-failed');});var Lato=new fontfaceobserver__WEBPACK_IMPORTED_MODULE_0___default.a('Lato');Lato.load().then(function(){document.body.classList.add('Lato-loaded');})["catch"](function(err){document.body.classList.add('Lato-failed');});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
  var result;
  var _Symbol = root.Symbol;

  if (typeof _Symbol === 'function') {
    if (_Symbol.observable) {
      result = _Symbol.observable;
    } else {
      result = _Symbol('observable');
      _Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
}
;

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _djforth_viewport_detection_fp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _djforth_viewport_detection_fp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_djforth_viewport_detection_fp__WEBPACK_IMPORTED_MODULE_0__);
var newBreakpoints={mobile:{min:0,max:767},tablet:{min:768,max:1023},desktop:{min:1024,max:null}};/*
////// This Tracks for viewport (screen) changes //////
*/var vpDetect=_djforth_viewport_detection_fp__WEBPACK_IMPORTED_MODULE_0___default()(newBreakpoints);vpDetect.track();/* harmony default export */ __webpack_exports__["a"] = (function(cb){if(cb){vpDetect.addCallback(cb);cb(vpDetect.getDevice(),vpDetect.getWidth(),vpDetect.touchAvailable());}return vpDetect;});

/***/ }),
/* 78 */,
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(7);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(8);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(6);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(1);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(5);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(3);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(2);

// EXTERNAL MODULE: ./modules/content_slider/content-slider.scss
var content_slider = __webpack_require__(75);

// CONCATENATED MODULE: ./modules/content_slider/index.js
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}/* harmony default export */ var modules_content_slider = (function(){var sliders=_toConsumableArray(document.querySelectorAll('[data-content-slider]'));if(sliders.length>0){Promise.all(/* import() | content_slider */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, 672)).then(function(_ref){var ContentSlider=_ref["default"];ContentSlider();});}});
// EXTERNAL MODULE: ./modules/expanding_panels/expanding_panels.scss
var expanding_panels = __webpack_require__(36);

// CONCATENATED MODULE: ./modules/expanding_panels/index.js
function expanding_panels_toConsumableArray(arr){return expanding_panels_arrayWithoutHoles(arr)||expanding_panels_iterableToArray(arr)||expanding_panels_nonIterableSpread();}function expanding_panels_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function expanding_panels_iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function expanding_panels_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}/* harmony default export */ var modules_expanding_panels = (function(){var elms=expanding_panels_toConsumableArray(document.querySelectorAll('[data-expanding-panel]'));if(elms.length>0){Promise.all(/* import() | expanding_panels */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, 673)).then(function(_ref){var ExpandingPanels=_ref["default"];ExpandingPanels();});}});
// EXTERNAL MODULE: ./modules/responsive_table/table.scss
var table = __webpack_require__(37);

// CONCATENATED MODULE: ./modules/responsive_table/index.js
function responsive_table_toConsumableArray(arr){return responsive_table_arrayWithoutHoles(arr)||responsive_table_iterableToArray(arr)||responsive_table_nonIterableSpread();}function responsive_table_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function responsive_table_iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function responsive_table_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}/* harmony default export */ var responsive_table = (function(){var responsiveTables=responsive_table_toConsumableArray(document.querySelectorAll('.dynamic-panel.responsive-table'));if(responsiveTables.length>0){Promise.all(/* import() | responsive_table */[__webpack_require__.e(0), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, 670)).then(function(_ref){var ResponsiveTableClass=_ref["default"];responsiveTables.map(function(responsiveTable){return new ResponsiveTableClass(responsiveTable);});});}});
// CONCATENATED MODULE: ./modules/sticky/index.js
/* harmony default export */ var sticky = (function(){var sticky=document.getElementById('sticky');if(sticky){Promise.all(/* import() | sticky */[__webpack_require__.e(0), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, 674)).then(function(_ref){var Sticky=_ref["default"];Sticky('sticky');});}});
// CONCATENATED MODULE: ./modules/dynamic_pages.js
function dynamic_pages_toConsumableArray(arr){return dynamic_pages_arrayWithoutHoles(arr)||dynamic_pages_iterableToArray(arr)||dynamic_pages_nonIterableSpread();}function dynamic_pages_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function dynamic_pages_iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function dynamic_pages_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}// Content Carousel
(function(){var contentCarousels=dynamic_pages_toConsumableArray(document.querySelectorAll('.content-carousel'));if(contentCarousels.length>0){Promise.all(/* import() | content_carousel */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, 669)).then(function(_ref){var ContentCarousel=_ref["default"];contentCarousels.forEach(function(contentCarousel){return new ContentCarousel({element:contentCarousel,innerClass:'content-carousel-inner',itemClass:'content-carousel-item'});});});}})();// Content Slider
(function(){modules_content_slider();})();// Expanding Content
(function(){modules_expanding_panels();})();(function(){responsive_table();})();(function(){sticky();})();

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__(15);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(12);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(6);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(5);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(3);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__(152);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(27);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(2);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(9);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(1);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(7);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(11);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/process/browser.js
var browser = __webpack_require__(59);

// CONCATENATED MODULE: ./modules/fetch_data/manage_db.js
var createStore=function createStore(schema){return function(upgradeDB){/* istanbul ignore else  */if(!upgradeDB.objectStoreNames.contains('updated')){upgradeDB.createObjectStore('updated');}schema.forEach(function(_ref){var store=_ref.store;/* istanbul ignore else  */if(!upgradeDB.objectStoreNames.contains(store)){upgradeDB.createObjectStore(store);}});};};/* harmony default export */ var manage_db = (function _callee(storeName,schema,version){var idb,dbPromise;return regenerator_default.a.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(window.indexedDB){_context.next=2;break;}return _context.abrupt("return",Promise.resolve(null));case 2:_context.next=4;return regenerator_default.a.awrap(__webpack_require__.e(/* import() | idb */ 17).then(__webpack_require__.t.bind(null, 671, 7)));case 4:idb=_context.sent;/* istanbul ignore next  */if(browser["env"].NODE_ENV==='test'){idb=idb["default"];}dbPromise=idb.open("".concat(storeName,"-store"),version,createStore(schema,storeName))["catch"](function(err){console.error('error',err);});return _context.abrupt("return",{get:function get(store,key){return dbPromise.then(function(db){var tx=db.transaction(store);var st=tx.objectStore(store);return st.get(key);})["catch"](function(err){console.log('get',err);});},getAll:function getAll(objStore){return dbPromise.then(function(db){var tx=db.transaction(objStore);var store=tx.objectStore(objStore);return store.getAll();})["catch"](function(err){console.log('getAll',err);});},set:function set(objStore,key,val){return dbPromise.then(function(db){var tx=db.transaction(objStore,'readwrite');var st=tx.objectStore(objStore);st.put(val,key);return tx.complete;})["catch"](function(err){console.log('set',err);});},"delete":function _delete(objStore,key){return dbPromise.then(function(db){var tx=db.transaction(objStore,'readwrite');tx.objectStore(objStore)["delete"](key);return tx.complete;})["catch"](function(err){console.log('delete',err);});},clear:function clear(objStore){return dbPromise.then(function(db){var tx=db.transaction(objStore,'readwrite');tx.objectStore(objStore).clear();return tx.complete;});},keys:function keys(objStore){return dbPromise.then(function(db){var tx=db.transaction(objStore);var keys=[];var store=tx.objectStore(objStore);// This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
// openKeyCursor isn't supported by Safari, so we fall back
(store.iterateKeyCursor||store.iterateCursor).call(store,function(cursor){if(!cursor)return;keys.push(cursor.key);cursor["continue"]();});return tx.complete.then(function(){return keys;});})["catch"](function(err){console.log(err);});}});case 8:case"end":return _context.stop();}}});});
// CONCATENATED MODULE: ./modules/fetch_data/get_data.js
/* harmony default export */ var get_data = (function(url){return function _callee(){var request,response;return regenerator_default.a.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regenerator_default.a.awrap(fetch(url));case 2:request=_context.sent;_context.next=5;return regenerator_default.a.awrap(request.json());case 5:response=_context.sent;return _context.abrupt("return",response);case 7:case"end":return _context.stop();}}});};});
// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es7.object.entries.js
var es7_object_entries = __webpack_require__(84);

// CONCATENATED MODULE: ./modules/fetch_data/update_data.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return;}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}// import { setUpdated } from './manage_updated';
/* harmony default export */ var update_data = (function(manager,updateKey){return function _callee(data,processData,attrs){return regenerator_default.a.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return regenerator_default.a.awrap(Promise.all(Object.entries(processData).map(function(_ref){var _ref2=_slicedToArray(_ref,2),storeName=_ref2[0],processor=_ref2[1];return processor(manager,data,storeName,attrs);})));case 3:_context.next=5;return regenerator_default.a.awrap(manager.set('updated',updateKey,new Date().getTime()));case 5:_context.next=10;break;case 7:_context.prev=7;_context.t0=_context["catch"](0);console.error('Failed to update',_context.t0);case 10:case"end":return _context.stop();}}},null,null,[[0,7]]);};});
// CONCATENATED MODULE: ./modules/fetch_data/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function fetch_data_slicedToArray(arr,i){return fetch_data_arrayWithHoles(arr)||fetch_data_iterableToArrayLimit(arr,i)||fetch_data_nonIterableRest();}function fetch_data_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function fetch_data_iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return;}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function fetch_data_arrayWithHoles(arr){if(Array.isArray(arr))return arr;}// import checkUpdate from './check_update';
var fetch_data_localData=function localData(schema,query){var data;return regenerator_default.a.async(function localData$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regenerator_default.a.awrap(Promise.all(schema.map(function _callee(_ref){var objStore,d;return regenerator_default.a.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:objStore=_ref.store;_context.next=3;return regenerator_default.a.awrap(query.getAll(objStore));case 3:d=_context.sent;return _context.abrupt("return",[objStore,d]);case 5:case"end":return _context.stop();}}});})));case 2:data=_context2.sent;return _context2.abrupt("return",data.reduce(function(cur,_ref2){var _ref3=fetch_data_slicedToArray(_ref2,2),objStore=_ref3[0],d=_ref3[1];return _objectSpread({},cur,_defineProperty({},objStore,d));},{}));case 4:case"end":return _context2.stop();}}});};var fetch_data_DataFetch=function DataFetch(updater){return function _callee2(fetchData,processor,attrs){var data;return regenerator_default.a.async(function _callee2$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return regenerator_default.a.awrap(fetchData());case 2:data=_context3.sent;_context3.next=5;return regenerator_default.a.awrap(updater(data,processor,attrs));case 5:return _context3.abrupt("return",data);case 6:case"end":return _context3.stop();}}});};};function getInternetExplorerVersion(){var rv=-1;if(navigator.appName=='Microsoft Internet Explorer'){var ua=navigator.userAgent;var re=new RegExp('MSIE ([0-9]{1,}[\\.0-9]{0,})');if(re.exec(ua)!=null)rv=parseFloat(RegExp.$1);}else if(navigator.appName==='Netscape'){var _ua=navigator.userAgent;var _re=new RegExp('Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})');if(_re.exec(_ua)!=null)rv=parseFloat(RegExp.$1);}return rv;}var hasIndexDB=function hasIndexDB(){return'indexedDB'in window||!(getInternetExplorerVersion()>-1);};/* harmony default export */ var fetch_data = __webpack_exports__["a"] = (function _callee3(store,schema,version){var data,updateKey,manager,updater,fetcher,mainUrl,processor,checker;return regenerator_default.a.async(function _callee3$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:updateKey="".concat(store,"Update");if(!hasIndexDB()){_context6.next=7;break;}_context6.next=4;return regenerator_default.a.awrap(manage_db(store,schema,version));case 4:_context6.t0=_context6.sent;_context6.next=8;break;case 7:_context6.t0=null;case 8:manager=_context6.t0;updater=update_data(manager,updateKey);fetcher=fetch_data_DataFetch(updater);return _context6.abrupt("return",{get:function get(objStore,key){if(manager===null){return Promise.resolve(data[objStore][key]);}return manager.get(objStore,key);},getAll:function getAll(){return data;},getAllStore:function getAllStore(objStore){if(manager===null){return Promise.resolve(data[objStore]);}return manager.getAll(objStore);},set:function set(objStore,key,val){return manager.set(objStore,key,val);},setCheckUpdate:function setCheckUpdate(ch){checker=ch;},setProcessor:function setProcessor(p){processor=p;},setUrl:function setUrl(url){mainUrl=url;},update:function update(attrs){var url,fetchData,shouldUpdate;return regenerator_default.a.async(function update$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:url=typeof mainUrl==='string'?mainUrl:mainUrl(attrs);fetchData=get_data(url);if(!(manager===null)){_context4.next=7;break;}_context4.next=5;return regenerator_default.a.awrap(fetchData());case 5:data=_context4.sent;return _context4.abrupt("return",data);case 7:_context4.next=9;return regenerator_default.a.awrap(checker(manager,attrs));case 9:shouldUpdate=_context4.sent;if(!shouldUpdate){_context4.next=15;break;}_context4.next=13;return regenerator_default.a.awrap(fetcher(fetchData,processor,attrs));case 13:data=_context4.sent;return _context4.abrupt("return",data);case 15:_context4.next=17;return regenerator_default.a.awrap(fetch_data_localData(schema,manager));case 17:data=_context4.sent;return _context4.abrupt("return",data);case 19:case"end":return _context4.stop();}}});},updateService:function updateService(attrs){var url,fetchData,shouldUpdate;return regenerator_default.a.async(function updateService$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:// alert(url);
url=typeof mainUrl==='string'?mainUrl:mainUrl(attrs);fetchData=get_data(url);if(!(manager===null)){_context5.next=7;break;}_context5.next=5;return regenerator_default.a.awrap(fetchData());case 5:data=_context5.sent;return _context5.abrupt("return",data);case 7:_context5.next=9;return regenerator_default.a.awrap(checker(manager,attrs));case 9:shouldUpdate=_context5.sent;if(!shouldUpdate){_context5.next=29;break;}if(!('serviceWorker'in navigator)){_context5.next=25;break;}_context5.prev=12;navigator.serviceWorker.addEventListener('message',function(event){console.log(event.data.msg,event.data.url);});navigator.serviceWorker.controller.postMessage(_objectSpread({command:"sync-".concat(store)},attrs));_context5.next=23;break;case 17:_context5.prev=17;_context5.t0=_context5["catch"](12);_context5.next=21;return regenerator_default.a.awrap(fetcher(fetchData,processor,attrs));case 21:data=_context5.sent;return _context5.abrupt("return",data);case 23:_context5.next=29;break;case 25:_context5.next=27;return regenerator_default.a.awrap(fetcher(fetchData,processor,attrs));case 27:data=_context5.sent;return _context5.abrupt("return",data);case 29:_context5.next=31;return regenerator_default.a.awrap(fetch_data_localData(schema,manager));case 31:data=_context5.sent;return _context5.abrupt("return",data);case 33:case"end":return _context5.stop();}}},null,null,[[12,17]]);}});case 12:case"end":return _context6.stop();}}});});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(139);

var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the number of minutes between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 */

function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

module.exports = differenceInMinutes;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! lozad.js - v1.14.0 - 2019-10-19
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2019 Apoorv Saxena; Licensed MIT */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";
  /**
     * Detect IE browser
     * @const {boolean}
     * @private
     */

  var d = "undefined" != typeof document && document.documentMode,
      c = {
    rootMargin: "0px",
    threshold: 0,
    load: function load(t) {
      if ("picture" === t.nodeName.toLowerCase()) {
        var e = document.createElement("img");
        d && t.getAttribute("data-iesrc") && (e.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")), t.append(e);
      }

      if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
        for (var r = t.children, a = void 0, o = 0; o <= r.length - 1; o++) {
          (a = r[o].getAttribute("data-src")) && (r[o].src = a);
        }

        t.load();
      }

      if (t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset")), t.getAttribute("data-background-image")) t.style.backgroundImage = "url('" + t.getAttribute("data-background-image").split(",").join("'),url('") + "')";else if (t.getAttribute("data-background-image-set")) {
        var i = t.getAttribute("data-background-image-set").split(","),
            n = i[0].substr(0, i[0].indexOf(" ")) || i[0]; // Substring before ... 1x

        n = -1 === n.indexOf("url(") ? "url(" + n + ")" : n, 1 === i.length ? t.style.backgroundImage = n : t.setAttribute("style", (t.getAttribute("style") || "") + "background-image: " + n + "; background-image: -webkit-image-set(" + i + "); background-image: image-set(" + i + ")");
      }
      t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"));
    },
    loaded: function loaded() {}
  };

  function l(t) {
    t.setAttribute("data-loaded", !0);
  }

  var b = function b(t) {
    return "true" === t.getAttribute("data-loaded");
  };

  return function () {
    var r,
        a,
        o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad",
        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        e = Object.assign({}, c, t),
        i = e.root,
        n = e.rootMargin,
        d = e.threshold,
        u = e.load,
        s = e.loaded,
        g = void 0;
    return "undefined" != typeof window && window.IntersectionObserver && (g = new IntersectionObserver((r = u, a = s, function (t, e) {
      t.forEach(function (t) {
        (0 < t.intersectionRatio || t.isIntersecting) && (e.unobserve(t.target), b(t.target) || (r(t.target), l(t.target), a(t.target)));
      });
    }), {
      root: i,
      rootMargin: n,
      threshold: d
    })), {
      observe: function observe() {
        for (var t = function (t) {
          var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
          return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t);
        }(o, i), e = 0; e < t.length; e++) {
          b(t[e]) || (g ? g.observe(t[e]) : (u(t[e]), l(t[e]), s(t[e])));
        }
      },
      triggerLoad: function triggerLoad(t) {
        b(t) || (u(t), l(t), s(t));
      },
      observer: g
    };
  };
});

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, exports) {

module.exports = "/packs/images/logo-8fb347f5ffce749beacaf76ecc08a02b.svg";

/***/ }),
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(108);

var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_DAY = 86400000;
/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft);
  var startOfDayRight = startOfDay(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
  var timestampRight = startOfDayRight.getTime() - startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE; // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

module.exports = differenceInCalendarDays;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(18);
/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */


function startOfDay(dirtyDate) {
  var date = parse(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

module.exports = startOfDay;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(18);

var startOfYear = __webpack_require__(111);

var differenceInCalendarDays = __webpack_require__(107);
/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */


function getDayOfYear(dirtyDate) {
  var date = parse(dirtyDate);
  var diff = differenceInCalendarDays(date, startOfYear(date));
  var dayOfYear = diff + 1;
  return dayOfYear;
}

module.exports = getDayOfYear;

/***/ }),
/* 110 */
/***/ (function(module, exports) {

var MILLISECONDS_IN_MINUTE = 60000;
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */

module.exports = function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = date.getTimezoneOffset();
  date.setSeconds(0, 0);
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(18);
/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */


function startOfYear(dirtyDate) {
  var cleanDate = parse(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

module.exports = startOfYear;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(18);

var startOfISOWeek = __webpack_require__(42);

var startOfISOYear = __webpack_require__(114);

var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */

function getISOWeek(dirtyDate) {
  var date = parse(dirtyDate);
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

module.exports = getISOWeek;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(18);
/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */


function startOfWeek(dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? Number(dirtyOptions.weekStartsOn) || 0 : 0;
  var date = parse(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

module.exports = startOfWeek;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(58);

var startOfISOWeek = __webpack_require__(42);
/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */


function startOfISOYear(dirtyDate) {
  var year = getISOYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = startOfISOWeek(fourthOfJanuary);
  return date;
}

module.exports = startOfISOYear;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(116);

var buildFormatLocale = __webpack_require__(117);
/**
 * @category Locales
 * @summary English locale.
 */


module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
};

/***/ }),
/* 116 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale() {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },
    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },
    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },
    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },
    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },
    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },
    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },
    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },
    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },
    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },
    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },
    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  };

  function localize(token, count, options) {
    options = options || {};
    var result;

    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token];
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one;
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count);
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result;
      } else {
        return result + ' ago';
      }
    }

    return result;
  }

  return {
    localize: localize
  };
}

module.exports = buildDistanceInWordsLocale;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(118);

function buildFormatLocale() {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var meridiemUppercase = ['AM', 'PM'];
  var meridiemLowercase = ['am', 'pm'];
  var meridiemFull = ['a.m.', 'p.m.'];
  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function MMM(date) {
      return months3char[date.getMonth()];
    },
    // Month: January, February, ..., December
    'MMMM': function MMMM(date) {
      return monthsFull[date.getMonth()];
    },
    // Day of week: Su, Mo, ..., Sa
    'dd': function dd(date) {
      return weekdays2char[date.getDay()];
    },
    // Day of week: Sun, Mon, ..., Sat
    'ddd': function ddd(date) {
      return weekdays3char[date.getDay()];
    },
    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function dddd(date) {
      return weekdaysFull[date.getDay()];
    },
    // AM, PM
    'A': function A(date) {
      return date.getHours() / 12 >= 1 ? meridiemUppercase[1] : meridiemUppercase[0];
    },
    // am, pm
    'a': function a(date) {
      return date.getHours() / 12 >= 1 ? meridiemLowercase[1] : meridiemLowercase[0];
    },
    // a.m., p.m.
    'aa': function aa(date) {
      return date.getHours() / 12 >= 1 ? meridiemFull[1] : meridiemFull[0];
    }
  }; // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.

  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W'];
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date));
    };
  });
  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  };
}

function ordinal(number) {
  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

module.exports = buildFormatLocale;

/***/ }),
/* 118 */
/***/ (function(module, exports) {

var commonFormatterKeys = ['M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd', 'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG', 'H', 'HH', 'h', 'hh', 'm', 'mm', 's', 'ss', 'S', 'SS', 'SSS', 'Z', 'ZZ', 'X', 'x'];

function buildFormattingTokensRegExp(formatters) {
  var formatterKeys = [];

  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key);
    }
  }

  var formattingTokens = commonFormatterKeys.concat(formatterKeys).sort().reverse();
  var formattingTokensRegExp = new RegExp('(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g');
  return formattingTokensRegExp;
}

module.exports = buildFormattingTokensRegExp;

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// Carousel
var carouselElements=Array.prototype.slice.call(document.querySelectorAll('.carousel'));if(carouselElements.length>0){Promise.all(/* import() | vanilla-carousel */[__webpack_require__.e(0), __webpack_require__.e(31)]).then(__webpack_require__.t.bind(null, 217, 7)).then(function(_ref){var CarouselClass=_ref["default"];CarouselClass();});__webpack_require__.e(/* import() | event_tracking_carousel */ 11).then(__webpack_require__.bind(null, 218)).then(function(_ref2){var CarouselEventTrackingModule=_ref2["default"];var CarouselEventTracking=CarouselEventTrackingModule();carouselElements.forEach(function(carousel){CarouselEventTracking.init(carousel);});});}// End Carousel

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// Borough filter for venue search
(function(){var venueSearch=document.getElementById('new_venue_search');if(venueSearch){Promise.all(/* import() | borough_filter */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, 219)).then(function(_ref){var BoroughFilter=_ref["default"];BoroughFilter('new_venue_search','venue_search_activity_type_id','venue_search_facility_type_id');});}})();(function(){var map=document.getElementById('google-map');if(map){Promise.all(/* import() | map */[__webpack_require__.e(0), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, 224)).then(function(_ref2){var Maps=_ref2["default"];Maps('google-map');});}})();

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// (() => {
//   const membership = document.getElementById('membership');
//   // const elms = [...document.querySelectorAll('. ul')];
//   if (membership) {
//     import(/* webpackChunkName: "content_carousel_carousel" */ './content_carousel_homepage').then(
//       ({ default: ContentCarousel }) => {
//         ContentCarousel();
//       }
//     );
//   }
// })();
if(document.body.className==='home'){var centreLocatorToolbar=document.querySelector('.centre-locator-toolbar');if(centreLocatorToolbar){__webpack_require__.e(/* import() | event_tracking_centre_locator */ 12).then(__webpack_require__.bind(null, 223)).then(function(_ref){var CentreLocatorToolbarTrackingModule=_ref["default"];var centreLocatorToolbarTracking=CentreLocatorToolbarTrackingModule();centreLocatorToolbarTracking.init(centreLocatorToolbar);});}}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(18);
/**
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */


function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft);
  var dateRight = parse(dirtyDateRight);
  return dateLeft.getTime() - dateRight.getTime();
}

module.exports = differenceInMilliseconds;

/***/ }),
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/rails-ujs/lib/assets/compiled/rails-ujs.js
var rails_ujs = __webpack_require__(54);
var rails_ujs_default = /*#__PURE__*/__webpack_require__.n(rails_ujs);

// EXTERNAL MODULE: ./modules/pollyfills.js
var pollyfills = __webpack_require__(63);

// EXTERNAL MODULE: ./modules/load_service_worker.js
var load_service_worker = __webpack_require__(73);

// EXTERNAL MODULE: ./modules/font_observer.js
var font_observer = __webpack_require__(74);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/@morsedigital/morse-utils/index.js
var morse_utils = __webpack_require__(14);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/@djforth/cookie_mgmt_fp/index.js
var cookie_mgmt_fp = __webpack_require__(10);
var cookie_mgmt_fp_default = /*#__PURE__*/__webpack_require__.n(cookie_mgmt_fp);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(7);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(8);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(6);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(1);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(5);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(3);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(2);

// CONCATENATED MODULE: ./modules/accessibility/accessibility_helpers.js
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}// This applies the click event to the button, we pass btn (The button clicked) and a function (click handler) that passes it's select back to it for the selection
var AddClick=function AddClick(btn,clickHandler){btn.addEventListener('click',function(e){e.preventDefault();console.log('click');clickHandler(e.target);// Passes button in to action so i
},false);};// So this allows you to pass the the list of buttons and returns a function that you can apply to the click handler
var AddSelect=function AddSelect(buttons,css){return function(target){buttons.forEach(function(btn){// If the btn matches the click button apply selected class else remove it
if(btn===target){btn.classList.add("".concat(css,"--selected"));}else{btn.classList.remove("".concat(css,"--selected"));}});};};var GetButtons=function GetButtons(selector){var buttons=document.querySelectorAll(selector);// Returns empty array if no buttons
// this prevents forEach loop throwing error
if(!buttons)return[];return _toConsumableArray(buttons);// Converts to array
};var PersistData=function PersistData(cookie,dataAttribute){return function(target){// No need to pass contrast data attribute, just pass path to data.
var data=target.getAttribute(dataAttribute);cookie.createCookie(data,30);};};var ComposeClickHandler=function ComposeClickHandler(actions){return function(target){actions.forEach(function(action){action(target);});};};
// CONCATENATED MODULE: ./modules/accessibility/font_sizing.js
// Apply FontSize to page
var ApplyFontSize=function ApplyFontSize(target){var fontSize=target.getAttribute('data-size');document.documentElement.style.fontSize=fontSize;};// Checks cookie and applies to linkTag if it exists
var font_sizing_checkCookie=function checkCookie(cookieName){var fontSizeCookie=cookie_mgmt_fp_default()(cookieName);// Applies css if available
var fontSize=fontSizeCookie.getValue();if(fontSize){document.documentElement.style.fontSize=fontSize;}return fontSizeCookie;};var font_sizing_FontSizing=function FontSizing(){var cookieName=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'font-size';var fontSizeButtons=GetButtons('[data-font-size]');var fontSizeCookie=font_sizing_checkCookie(cookieName);var clickHandler=ComposeClickHandler([AddSelect(fontSizeButtons,'text-increases'),ApplyFontSize,PersistData(fontSizeCookie,'data-size')]);fontSizeButtons.forEach(function(btn){AddClick(btn,clickHandler);});};/* harmony default export */ var font_sizing = (font_sizing_FontSizing);
// CONCATENATED MODULE: ./modules/accessibility/colour_contrast.js
// Apply Contrast to page
var ApplyContrast=function ApplyContrast(linkTag){return function(target){var stylesheet=target.getAttribute('data-stylesheet');linkTag.setAttribute('href',stylesheet);};};// Checks cookie and applies to linkTag if it exists
var colour_contrast_checkCookie=function checkCookie(cookieName,linkTag){var contrastCookie=cookie_mgmt_fp_default()(cookieName);// Applies css if available
var path=contrastCookie.getValue();if(path&&linkTag.getAttribute('href')!==path){linkTag.setAttribute('href',path);}return contrastCookie;};var colour_contrast_ColorContrast=function ColorContrast(){var stylesheetId=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'application-css';var cookieName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'contrast_cookie';// Gets link tag to apply css
var linkTag=document.getElementById(stylesheetId);if(!linkTag)return;// Bails if no linkTag
var contrastCookie=colour_contrast_checkCookie(cookieName,linkTag);// Gets buttons
var contrastButtons=GetButtons('[data-contrast]');// Composes click handler
var clickHandler=ComposeClickHandler([AddSelect(contrastButtons,'contrast__button'),ApplyContrast(linkTag),PersistData(contrastCookie,'data-stylesheet')]);contrastButtons.forEach(function(btn){AddClick(btn,clickHandler);});};/* harmony default export */ var colour_contrast = (colour_contrast_ColorContrast);
// EXTERNAL MODULE: ./modules/helpers/check_elements.js
var check_elements = __webpack_require__(30);

// EXTERNAL MODULE: ./modules/helpers/curry.js
var curry = __webpack_require__(34);

// CONCATENATED MODULE: ./modules/helpers/parse_data.js
var parseBoolean=function parseBoolean(value){if(!/true|false/.test(value))return null;return value==='true';};var parseNumber=function parseNumber(value){if(!/[0-9]*/.test(value))return null;return parseInt(value,2);};
// EXTERNAL MODULE: ./modules/feedback/stylesheets/index.scss
var stylesheets = __webpack_require__(91);

// CONCATENATED MODULE: ./modules/feedback/index.js
var FEEDBACK_ID='feedback';var FEEDBACK_BTN='feedback-btn';var FEEDBACK_CONTENT='feedback-content';var CLOSE_CLASS='feedback--closed';var OPEN_CLASS='feedback--open';var AUTO_OPEN=3000;var HIDE_SURVEY='hide-survey';var COOKIE_SURVEY='survey-popout';var COOKIE_OPENED='survey-opened';var getElements=function getElements(){return{feedback:document.getElementById(FEEDBACK_ID),btn:document.getElementById(FEEDBACK_BTN),content:document.getElementById(FEEDBACK_CONTENT)};};var feedback_openedCounter=function openedCounter(){var openedCookie=cookie_mgmt_fp_default()(COOKIE_OPENED);var opened=parseInt(openedCookie.getValue())||0;return function(){var increase=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(increase)opened+=1;openedCookie.createCookie(opened,3*30);return opened<3;};};var feedback_isOpen=function isOpen(el){return parseBoolean(el.getAttribute('aria-pressed'));};var SetPosition=function SetPosition(feedback,btn,content,opened){btn.setAttribute('aria-pressed',!opened);content.setAttribute('aria-hidden',opened);feedback.classList.toggle(CLOSE_CLASS);feedback.classList.toggle(OPEN_CLASS);};var forceOpen=function forceOpen(setPosition){return setTimeout(function(){setPosition(false);},AUTO_OPEN);};var feedback_hideSurvey=function hideSurvey(surveyCookie){var hide=document.getElementById(HIDE_SURVEY);if(!Object(check_elements["b" /* isElement */])(hide))return;hide.addEventListener('click',function(e){surveyCookie.createCookie(e.target.checked,3*30);});};/* harmony default export */ var modules_feedback = (function(){var _getElements=getElements(),feedback=_getElements.feedback,btn=_getElements.btn,content=_getElements.content;if(!Object(check_elements["a" /* checkElements */])(btn,feedback,content))return;var surveyCookie=cookie_mgmt_fp_default()(COOKIE_SURVEY);var cookie=surveyCookie.getValue();if(cookie==='true'){return;}var opened=feedback_openedCounter();feedback.setAttribute('aria-hidden','false');var setPosition=Object(curry["a" /* default */])(SetPosition,feedback,btn,content);var opener;if(opened()&&window.innerWidth>500){opener=forceOpen(setPosition);}feedback_hideSurvey(surveyCookie);btn.addEventListener('click',function(e){e.preventDefault();var open=feedback_isOpen(e.currentTarget);setPosition(open);clearTimeout(opener);if(open){opened(true);}});});
// CONCATENATED MODULE: ./modules/global.js
// import MobileFooterPanels from './footer/footer_panels';
// import MobileFooterAppText from './footer/footer_app_text';
// import SurveyBanner from './survey_banner/survey_banner';
(function(){// Accessibility
font_sizing();colour_contrast();})();// SurveyBanner
// (() => {
//   SurveyBanner();
// })();
// Footer
(function(){// MobileFooterPanels();
// MobileFooterAppText();
})();(function(){// Utility functions
var modules=[Object(morse_utils["AlertClose"])(),Object(morse_utils["AlertReset"])(),Object(morse_utils["Cookiebar"])('cookie-prompt'),// Should be id of Cookie prompt DOM Node
Object(morse_utils["Modal"])(),Object(morse_utils["ImageViewer"])()];Object(morse_utils["EventListener"])(modules);var cookie=document.getElementById('cookie-prompt');var survey=document.getElementById('survey-modal');if(cookie){cookie.focus();}else if(survey){survey.focus();}})();(function(){modules_feedback();})();
// EXTERNAL MODULE: ./modules/datepicker/stylesheets/calendar.scss
var calendar = __webpack_require__(134);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/date-fns/format/index.js
var date_fns_format = __webpack_require__(56);
var format_default = /*#__PURE__*/__webpack_require__.n(date_fns_format);

// CONCATENATED MODULE: ./modules/datepicker/index.js
function datepicker_toConsumableArray(arr){return datepicker_arrayWithoutHoles(arr)||datepicker_iterableToArray(arr)||datepicker_nonIterableSpread();}function datepicker_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function datepicker_iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function datepicker_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}// import Pikaday from 'pikaday';
// import css from 'pikaday/css/pikaday';
/* harmony default export */ var datepicker = (function(css){var pickers=datepicker_toConsumableArray(document.querySelectorAll(css));if(pickers.length>0){__webpack_require__.e(/* import() | pikaday */ 22).then(__webpack_require__.t.bind(null, 663, 7)).then(function(_ref){var Pikaday=_ref["default"];var datePickers=pickers.map(function(picker){return new Pikaday({field:picker,onSelect:function onSelect(date){picker.value=format_default()(date,'DD/MM/YYYY');}});});});}});
// EXTERNAL MODULE: ./modules/survey_banner/stylesheets/index.scss
var survey_banner_stylesheets = __webpack_require__(90);

// CONCATENATED MODULE: ./modules/survey_banner/index.js
var SURVEY_BANNER='survey-banner';var BANNER_COOKIE='survey-cookie';/* harmony default export */ var survey_banner = (function(){var banner=document.getElementById(SURVEY_BANNER);if(!Object(check_elements["b" /* isElement */])(banner))return;var surveyCookie=cookie_mgmt_fp_default()(BANNER_COOKIE);if(surveyCookie.getValue()==='true')return;banner.setAttribute('aria-hidden','false');console.log('Loading banner JS');__webpack_require__.e(/* import() | survey_banner */ 28).then(__webpack_require__.bind(null, 664)).then(function(_ref){var SurveyBanner=_ref["default"];SurveyBanner(SURVEY_BANNER);});});
// CONCATENATED MODULE: ./modules/geolocation/index.js
/* harmony default export */ var geolocation = (function(){var btn=document.querySelector('[data-geo]');if(!btn)return;if("geolocation"in navigator){__webpack_require__.e(/* import() | geo-location */ 16).then(__webpack_require__.bind(null, 665)).then(function(_ref){var Geo=_ref["default"];Geo(btn);});}else{btn.style.display="none";}});
// EXTERNAL MODULE: ./modules/venue_nav/stylesheets/venue_nav.scss
var venue_nav = __webpack_require__(135);

// CONCATENATED MODULE: ./modules/venue_nav/index.js
/* harmony default export */ var modules_venue_nav = (function(id){var venueNav=document.getElementById(id);if(venueNav){__webpack_require__.e(/* import() | scroll-nav */ 25).then(__webpack_require__.t.bind(null, 666, 7)).then(function(_ref){var ScrollNav=_ref["default"];ScrollNav(venueNav);});}});
// CONCATENATED MODULE: ./modules/async_modules.js
function async_modules_toConsumableArray(arr){return async_modules_arrayWithoutHoles(arr)||async_modules_iterableToArray(arr)||async_modules_nonIterableSpread();}function async_modules_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function async_modules_iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function async_modules_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}(function(){survey_banner();})();(function(){// Tabbed Content
var tabbedContentElements=async_modules_toConsumableArray(document.querySelectorAll('.tabbed-content'));if(tabbedContentElements.length>0){Promise.all(/* import() | vanilla-tabbed-content */[__webpack_require__.e(0), __webpack_require__.e(33)]).then(__webpack_require__.t.bind(null, 661, 7)).then(function(_ref){var TabbedContentClass=_ref["default"];tabbedContentElements.map(function(tabbedContent){return new TabbedContentClass({element:tabbedContent,bodyContainerClass:'tabbed-content-body',navContainerClass:'tabbed-content-nav'});});});}})();(function(){// Collapsible Content
var collapsibleContentElements=async_modules_toConsumableArray(document.querySelectorAll('.collapsible-content'));if(collapsibleContentElements.length>0){Promise.all(/* import() | vanilla-collapsible-content */[__webpack_require__.e(0), __webpack_require__.e(32)]).then(__webpack_require__.t.bind(null, 662, 7)).then(function(_ref2){var CollapsibleContentClass=_ref2["default"];collapsibleContentElements.forEach(function(collapsibleContent){return new CollapsibleContentClass({element:collapsibleContent,bodyContainerClass:'collapsible-content-body',itemContainerClass:'collapsible-content-item',toggleContainerClass:'collapsible-content-toggle',expanded:true});});});}// End Collapsible Content
})();// Async built into modules
(function(){datepicker('.new-datepicker');})();(function(){modules_venue_nav('venue-navigation');})();(function(){geolocation();})();
// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(9);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.map.js
var es6_map = __webpack_require__(173);

// CONCATENATED MODULE: ./modules/contact/contact_forms_new/store_options.js
function store_options_toConsumableArray(arr){return store_options_arrayWithoutHoles(arr)||store_options_iterableToArray(arr)||store_options_nonIterableSpread();}function store_options_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function store_options_iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function store_options_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var storeOption=function storeOption(option){var opts=new Map();var type=option.value?'option':'placeholder';opts.set('type',type);opts.set('text',option.text);opts.set('value',option.value);opts.set('data',option.dataset);return opts;};var storeList=function storeList(select){return store_options_toConsumableArray(select.children).map(function(el){if(el.tagName==='OPTION'){return storeOption(el);}var optGroup=new Map();optGroup.set('type','optgroup');optGroup.set('label',el.label);optGroup.set('children',storeList(el));return optGroup;});};var shouldShow=function shouldShow(value){var businessSector=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';return value==='all'||businessSector.toLowerCase()===value.toLowerCase();};var filterOptions=function filterOptions(options,sector){return options.filter(function(opt){return shouldShow(sector,opt.get('data').businessSector);});};var createOptGroup=function createOptGroup(opts,value){var opt=filterOptions(opts.get('children'),value);if(opt.length===0)return[];var newOpts=new Map(opts);newOpts.set('children',opt);return[newOpts];};var FILTERED=[{conditional:function conditional(opts){return opts.get('type')==='optgroup';},filter:createOptGroup},{conditional:function conditional(opts,value){if(opts.has('data')){return shouldShow(value,opts.get('data').businessSector);}return false;},filter:function filter(opts){return[opts];}},{conditional:function conditional(opts){return opts.get('type')==='placeholder';},filter:function filter(opts){return[opts];}}];/* harmony default export */ var store_options = (function(select){var options=storeList(select);return function(value){return options.reduce(function(filtered,opts){var newList=FILTERED.reduce(function(list,_ref){var conditional=_ref.conditional,filter=_ref.filter;if(conditional(opts,value)){return filter(opts,value);}return list;},[]);return filtered.concat(newList);},[]);};});
// CONCATENATED MODULE: ./modules/contact/contact_forms_new/build_options.js
var buildOptions=function buildOptions(opt){return"<option value='".concat(opt.get('value'),"'>").concat(opt.get('text'),"</option>");};var buildOptGroup=function buildOptGroup(optgroup){return"<optgroup label='".concat(optgroup.get('label'),"'>\n  ").concat(optgroup.get('children').map(buildOptions),"\n</optgroup>");};var setType=function setType(opts){return opts.get('type')==='optgroup'?buildOptGroup:buildOptions;};/* harmony default export */ var build_options = (function(select,options){select.innerHTML=options.map(function(opts){return setType(opts)(opts);});});
// CONCATENATED MODULE: ./modules/contact/contact_forms_new/facilities_filter.js
function facilities_filter_toConsumableArray(arr){return facilities_filter_arrayWithoutHoles(arr)||facilities_filter_iterableToArray(arr)||facilities_filter_nonIterableSpread();}function facilities_filter_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function facilities_filter_iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function facilities_filter_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var facilities_filter_setFilter=function setFilter(el){var select=document.getElementById(el.dataset.filter);var store=store_options(select);var builder=Object(curry["a" /* default */])(build_options,select);el.addEventListener('change',function(e){builder(store(e.target.value));},false);};/* harmony default export */ var facilities_filter = (function(){var filters=facilities_filter_toConsumableArray(document.querySelectorAll('[data-filter]'));if(filters.length===0)return;filters.forEach(facilities_filter_setFilter);});
// CONCATENATED MODULE: ./modules/contact/contact_forms_new/show_additional.js
function show_additional_toConsumableArray(arr){return show_additional_arrayWithoutHoles(arr)||show_additional_iterableToArray(arr)||show_additional_nonIterableSpread();}function show_additional_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function show_additional_iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function show_additional_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var showHide=function showHide(id,value){var el=document.getElementById(id);el.classList.toggle('open');el.setAttribute('aria-hidden',!value);};var show_additional_setAdditional=function setAdditional(el){el.addEventListener('change',function(e){var id=el.dataset.showAdditional;showHide(id,parseBoolean(e.target.value));},false);};/* harmony default export */ var show_additional = (function(){var additional=show_additional_toConsumableArray(document.querySelectorAll('[data-show-additional]'));if(additional.length===0)return;additional.forEach(show_additional_setAdditional);});
// CONCATENATED MODULE: ./modules/contact/index.js
function contact_toConsumableArray(arr){return contact_arrayWithoutHoles(arr)||contact_iterableToArray(arr)||contact_nonIterableSpread();}function contact_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function contact_iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function contact_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var contactForm=contact_toConsumableArray(document.querySelectorAll('.contact-form'));(function(){facilities_filter();show_additional();})();var contactLibrary=document.getElementById('contact_form_query_type');if(contactLibrary){Promise.all(/* import() | contact_form */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, 667)).then(function(_ref){var ContactFormLibrary=_ref["default"];ContactFormLibrary();});}// Contact Form corporate
var corpForm=document.getElementById('contact-form-corporate');if(corpForm){Promise.all(/* import() | contact_form */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, 668)).then(function(_ref2){var ContactFormC=_ref2["default"];var contactFormCorporate=ContactFormC('contact-form-corporate');contactFormCorporate.config({filterClasses:['employee','employer'],selectClasses:['type']});contactFormCorporate.init();});}// End Contact Form corporate
// EXTERNAL MODULE: ./modules/carousel.js
var carousel = __webpack_require__(136);

// EXTERNAL MODULE: ./modules/center_locator.js
var center_locator = __webpack_require__(137);

// EXTERNAL MODULE: ./modules/dynamic_pages.js + 4 modules
var dynamic_pages = __webpack_require__(79);

// EXTERNAL MODULE: ./modules/homepage.js
var homepage = __webpack_require__(138);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__(15);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(12);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(11);

// EXTERNAL MODULE: ./images/logo.svg
var logo = __webpack_require__(98);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/redux/es/redux.js
var redux = __webpack_require__(33);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(50);

// EXTERNAL MODULE: ./modules/fetch_data/index.js + 3 modules
var fetch_data = __webpack_require__(80);

// CONCATENATED MODULE: ./modules/primary-nav/database/setup.js
var stores=['navitems'];var createStoreName=function createStoreName(_ref){var title=_ref.title;return title.toLowerCase().replace(/\s/,'-');};var createSchema=function createSchema(){return stores.map(function(store){return{store:store,keyPath:'key'};});};/* harmony default export */ var setup = (function _callee(){var db;return regenerator_default.a.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return regenerator_default.a.awrap(Object(fetch_data["a" /* default */])('Better-Nav',createSchema(),1));case 2:db=_context.sent;return _context.abrupt("return",{db:db});case 4:case"end":return _context.stop();}}});});
// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/date-fns/is_valid/index.js
var is_valid = __webpack_require__(45);
var is_valid_default = /*#__PURE__*/__webpack_require__.n(is_valid);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/date-fns/difference_in_minutes/index.js
var difference_in_minutes = __webpack_require__(81);
var difference_in_minutes_default = /*#__PURE__*/__webpack_require__.n(difference_in_minutes);

// CONCATENATED MODULE: ./modules/primary-nav/actions/navitems.js
/* @flow */var CHANGE_DEVICE='CHANGE_DEVICE';var FETCH_DATA='FETCH_DATA';var FETCH_DATA_FAIL='FETCH_DATA_FAIL';var FETCH_DATA_SUCCESS='FETCH_DATA_SUCCESS';var MOVE='MOVE';var LEVEL_MOVE='LEVEL_MOVE';var OPEN_NAV='OPEN_NAV';var RESET_ACTIVE='RESET_ACTIVE';var SET_ACTIVE='SET_ACTIVE';var SET_FOCUS='SET_FOCUS';var ChangeDevice=function ChangeDevice(device){return{device:device,type:CHANGE_DEVICE};};var FetchData=function FetchData(){return{type:FETCH_DATA};};var Move=function Move(direction){return{direction:direction,type:MOVE};};var LevelMove=function LevelMove(direction){return{direction:direction,type:LEVEL_MOVE};};var OpenNav=function OpenNav(open){return{open:open,type:OPEN_NAV};};var ResetActive=function ResetActive(){return{type:RESET_ACTIVE};};var SetActive=function SetActive(active){var level=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return{active:active,level:level,type:SET_ACTIVE};};var SetFocus=function SetFocus(focus){return{focus:focus,type:SET_FOCUS};};
// EXTERNAL MODULE: ./components/fetch_helpers/post_helpers.js + 1 modules
var post_helpers = __webpack_require__(29);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.string.sub.js
var es6_string_sub = __webpack_require__(17);

// CONCATENATED MODULE: ./modules/primary-nav/middleware/helpers/process_items.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// Creates Id based on title
var createID=function createID(title){var id=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var i=id!==''?"".concat(id,"-"):'';var newId=title.toLowerCase().trim().replace(/[^\w\s]|\s/gi,function(g1){if(g1===' ')return'-';return'';});return i+newId;};// Processes JSON creating id's
var processesList=function processesList(list){return list.filter(function(_ref){var title=_ref.title;return title!=='';}).map(function(item){// const id = item.id
var title=item.title.trim();// Removes whitespace
// If sub items will recursively loop of subs to add id's
if(Array.isArray(item.sub)&&item.sub.length>0){return _objectSpread({},item,{sub:processesList(item.sub),title:title});}return _objectSpread({},item,{title:title});});};/* harmony default export */ var process_items = (processesList);
// CONCATENATED MODULE: ./modules/primary-nav/middleware/helpers/fetch_data.js
function fetch_data_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function fetch_data_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){fetch_data_ownKeys(Object(source),true).forEach(function(key){fetch_data_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{fetch_data_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function fetch_data_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var fetch_data_getData=function getData(url){var response,isSuccess,preData;return regenerator_default.a.async(function getData$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return regenerator_default.a.awrap(fetch(url));case 3:response=_context.sent;_context.next=9;break;case 6:_context.prev=6;_context.t0=_context["catch"](0);return _context.abrupt("return",{error:_context.t0,isSuccess:false});case 9:isSuccess=Object(post_helpers["b" /* isSuccess */])(response);if(isSuccess){_context.next=12;break;}return _context.abrupt("return",{error:response,isSuccess:isSuccess});case 12:_context.next=14;return regenerator_default.a.awrap(response.json());case 14:preData=_context.sent;return _context.abrupt("return",{preData:preData,isSuccess:isSuccess});case 16:case"end":return _context.stop();}}},null,null,[[0,6]]);};/* harmony default export */ var helpers_fetch_data = (function _callee(url){var fetcher,data;return regenerator_default.a.async(function _callee$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regenerator_default.a.awrap(fetch_data_getData(url));case 2:fetcher=_context2.sent;if(!(fetcher.isSuccess&&fetcher.preData)){_context2.next=6;break;}data=process_items(fetcher.preData);// Sends to reducer
return _context2.abrupt("return",fetch_data_objectSpread({},fetcher,{data:data}));case 6:return _context2.abrupt("return",fetcher);case 7:case"end":return _context2.stop();}}});});
// CONCATENATED MODULE: ./modules/primary-nav/middleware/helpers/local_data.js
function local_data_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function local_data_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){local_data_ownKeys(Object(source),true).forEach(function(key){local_data_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{local_data_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function local_data_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var local_data_getData=function getData(_ref){var getAllStore,response;return regenerator_default.a.async(function getData$(_context){while(1){switch(_context.prev=_context.next){case 0:getAllStore=_ref.getAllStore;_context.prev=1;_context.next=4;return regenerator_default.a.awrap(getAllStore('navitems'));case 4:response=_context.sent;_context.next=10;break;case 7:_context.prev=7;_context.t0=_context["catch"](1);return _context.abrupt("return",{error:_context.t0,isSuccess:false});case 10:return _context.abrupt("return",{response:response,isSuccess:true});case 11:case"end":return _context.stop();}}},null,null,[[1,7]]);};/* harmony default export */ var local_data = (function _callee(db){var fetcher,data;return regenerator_default.a.async(function _callee$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regenerator_default.a.awrap(local_data_getData(db));case 2:fetcher=_context2.sent;if(!(fetcher.isSuccess&&fetcher.response)){_context2.next=6;break;}data=process_items(fetcher.response);// Sends to reducer
return _context2.abrupt("return",local_data_objectSpread({},fetcher,{data:data}));case 6:return _context2.abrupt("return",fetcher);case 7:case"end":return _context2.stop();}}});});
// CONCATENATED MODULE: ./modules/primary-nav/middleware/helpers/reset_nav.js
/* harmony default export */ var reset_nav = (function(dispatch,_ref){var type=_ref.type,open=_ref.open;if(type===OPEN_NAV&&!open){dispatch(ResetActive());}});
// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.date.to-json.js
var es6_date_to_json = __webpack_require__(148);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(27);

// CONCATENATED MODULE: ./modules/primary-nav/database/processors.js
var SetNavItems=function SetNavItems(db,items){return items.map(function(item,i){return db.set('navitems',i,item);});};/* harmony default export */ var processors = (function(db){return function _callee(items){return regenerator_default.a.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",Promise.all([SetNavItems(db,items),db.set('updated','Better-Nav',new Date().toJSON())]));case 1:case"end":return _context.stop();}}});};});// export const GetSessions = (db) => async date => {
//   try {
//     const navitems = await db.get('navitems', '');
//     return navitems;
//   } catch (e) {
//     return null;
//   }
// };
// CONCATENATED MODULE: ./modules/primary-nav/middleware/nav_middleware.js
// Checks if it should update
var nav_middleware_checkUpdate=function checkUpdate(db){var updated,updateDate;return regenerator_default.a.async(function checkUpdate$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!('msIndexedDB'in window)){_context.next=2;break;}return _context.abrupt("return",true);case 2:_context.prev=2;_context.next=5;return regenerator_default.a.awrap(db.get('updated','Better-Nav'));case 5:updated=_context.sent;updateDate=new Date(updated);if(is_valid_default()(updateDate)){_context.next=9;break;}return _context.abrupt("return",true);case 9:return _context.abrupt("return",difference_in_minutes_default()(new Date(),updateDate)>5);case 12:_context.prev=12;_context.t0=_context["catch"](2);return _context.abrupt("return",true);case 15:case"end":return _context.stop();}}},null,null,[[2,12]]);};/* harmony default export */ var nav_middleware = (function(db){return function(_ref){var dispatch=_ref.dispatch,getState=_ref.getState;return function(next){return function _callee(action){var _getState,url,processor,errorMessage,response,update,_response,data;return regenerator_default.a.async(function _callee$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(action.type===FETCH_DATA)){_context2.next=22;break;}_getState=getState(),url=_getState.url;processor=processors(db);// Error message helper
errorMessage=Object(post_helpers["a" /* handleError */])(next,FETCH_DATA_FAIL);_context2.prev=4;_context2.next=7;return regenerator_default.a.awrap(nav_middleware_checkUpdate(db));case 7:update=_context2.sent;_context2.next=10;return regenerator_default.a.awrap(update?helpers_fetch_data(url):local_data(db));case 10:response=_context2.sent;if(!response.isSuccess){_context2.next=16;break;}// Gets and process json
_response=response,data=_response.data;// Adds to indexDB
_context2.next=15;return regenerator_default.a.awrap(processor(data));case 15:return _context2.abrupt("return",next({data:data,type:FETCH_DATA_SUCCESS}));case 16:return _context2.abrupt("return",errorMessage(response.error));case 19:_context2.prev=19;_context2.t0=_context2["catch"](4);return _context2.abrupt("return",errorMessage(_context2.t0));case 22:reset_nav(dispatch,action);return _context2.abrupt("return",next(action));case 24:case"end":return _context2.stop();}}},null,null,[[4,19]]);};};};});
// CONCATENATED MODULE: ./modules/primary-nav/reducers/index.js
function reducers_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function reducers_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){reducers_ownKeys(Object(source),true).forEach(function(key){reducers_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{reducers_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function reducers_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// @flow
var initState={device:'mobile',navitems:[],active:[],focus:'',open:true};var manageActive=function manageActive(state,_ref){var newActive=_ref.active,level=_ref.level;var oldActive=state.active;var active;if(!newActive){active=oldActive.slice(0,-1);return reducers_objectSpread({},state,{active:active});}if(level!==null){active=oldActive.slice(0);active[level]=newActive;}else{active=oldActive.concat([newActive]);}return reducers_objectSpread({},state,{active:active});};var reducers_navitems=function navitems(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initState;var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case CHANGE_DEVICE:return reducers_objectSpread({},state,{device:action.device});case OPEN_NAV:return reducers_objectSpread({},state,{open:action.open,active:[]});case FETCH_DATA_FAIL:return reducers_objectSpread({},state,{error:action.error});case FETCH_DATA_SUCCESS:return reducers_objectSpread({},state,{error:'',navitems:action.data});case RESET_ACTIVE:return reducers_objectSpread({},state,{active:[]});case SET_ACTIVE:return manageActive(state,action);default:return state;}};/* harmony default export */ var reducers = (reducers_navitems);
// CONCATENATED MODULE: ./modules/primary-nav/store.js
function store_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function store_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){store_ownKeys(Object(source),true).forEach(function(key){store_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{store_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function store_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/* global module */// import thunk from 'redux-thunk';
// Middleware
// Reducer
var store_finalCreateStore=function finalCreateStore(_ref){var db=_ref.db;var composeEnhancers=(typeof window==="undefined"?"undefined":_typeof(window))==='object'&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}):redux["d" /* compose */];var middleware=[nav_middleware(db)];return composeEnhancers(// Middleware you want to use in development:
redux["a" /* applyMiddleware */].apply(void 0,middleware))(redux["e" /* createStore */]);};/* harmony default export */ var primary_nav_store = (function _callee2(initProps){var navitems,database,props,composer,store,dispatch;return regenerator_default.a.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:// const { navitems } = initProps;
navitems=[];database=null;_context2.prev=2;_context2.next=5;return regenerator_default.a.awrap(setup());case 5:database=_context2.sent;_context2.next=8;return regenerator_default.a.awrap(database.db.getAllStore('navitems'));case 8:navitems=_context2.sent;_context2.next=14;break;case 11:_context2.prev=11;_context2.t0=_context2["catch"](2);console.warn('IndexDb not supported');case 14:props=navitems?store_objectSpread({},initProps,{active:[],navitems:navitems,open:false}):store_objectSpread({},initProps,{active:[],navitems:[],open:false});composer=store_finalCreateStore(database);store=composer(reducers,props);dispatch=store.dispatch;window.navDispatch=dispatch;// @ade I know this is nasty needs to be re-factored
// /* istanbul ignore if  */
if(false){}return _context2.abrupt("return",store);case 21:case"end":return _context2.stop();}}},null,null,[[2,11]]);});
// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__(147);

// CONCATENATED MODULE: ./modules/manage_events/index.js
var events=[];var findInList=function findInList(list,el,ev){return list.find(function(_ref){var element=_ref.element,event=_ref.event;return el===element&&ev===event;});};/* harmony default export */ var manage_events = ({addEventListener:function addEventListener(element,event,listener){var capture=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var item=findInList(events,element,event);if(item){return item;}events.push({element:element,event:event,listener:listener});element.addEventListener(event,listener,capture);},flush:function flush(){events=events.filter(function(_ref2){var el=_ref2.el;return document.body.contains(el);});},removeEventListener:function removeEventListener(el,ev){var item=findInList(events,el,ev);if(!item)return false;var element=item.element,event=item.event,listener=item.listener;element.removeEventListener(event,listener);}});
// EXTERNAL MODULE: ./modules/tracker/index.js
var modules_tracker = __webpack_require__(77);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__(25);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__(26);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(103);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);

// CONCATENATED MODULE: ./modules/primary-nav/helpers/watch_changes.js
function watch_changes_toConsumableArray(arr){return watch_changes_arrayWithoutHoles(arr)||watch_changes_iterableToArray(arr)||watch_changes_nonIterableSpread();}function watch_changes_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function watch_changes_iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function watch_changes_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var watch_changes_compareState=function compareState(store){for(var _len=arguments.length,keys=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){keys[_key-1]=arguments[_key];}var state=store.getState();return function(newState){var stateChange=keys.reduce(function(changed,key){/* istanbul ignore if  */if(changed)return changed;return!isEqual_default()(state[key],newState[key]);},false);state=newState;return stateChange;};};var CheckDevice=function CheckDevice(devices){return function(_ref){var device=_ref.device;if(devices.length===0)return true;return devices.includes(device);};};/* harmony default export */ var watch_changes = (function(store){return function(keys,stateChange,actions){var devices=arguments.length>3&&arguments[3]!==undefined?arguments[3]:[];var compare=watch_changes_compareState.apply(void 0,[store].concat(watch_changes_toConsumableArray(keys)));var checkDevice=CheckDevice(devices);store.subscribe(function(){var state=store.getState();// Check if watchers should firer
if(!checkDevice(state))return;if(!compare(state)){return;}// Fires functions if available
if(stateChange)stateChange(state,store);if(actions)actions(store.dispatch,state);});};});
// CONCATENATED MODULE: ./modules/primary-nav/config/index.js
var MENU_ID='menu-button';var MOBILE_HOLDER_ID='nav-mobile';var MOBILE_WRAPPER_ID='nav-mobile-wrapper';var MOBILE_SUB_HOLDER='.mobile-nav__item';var MOBILE_SUB_CLASS='.mobile-nav__items--level0';var MOBILE_BACK_CLASS='.mobile-nav__link--back';var SEARCH_BUTTON_ID='search-open';var SEARCH_ID='main-search';var DESKTOP_SUB_CLASS='.sub-nav--level0';var DESKTOP_SUB_HOLDER='.desktop-nav__item--level0';var MAIN_NAV='primary-nav';
// CONCATENATED MODULE: ./modules/primary-nav/helpers/index.js
function helpers_toConsumableArray(arr){return helpers_arrayWithoutHoles(arr)||helpers_iterableToArray(arr)||helpers_nonIterableSpread();}function helpers_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function helpers_iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function helpers_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function getAttribute(el,attr){var dataSet=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var data=dataSet?el.dataset[attr]:el.getAttribute(attr);if(/^\d+$/.test(data))return parseFloat(data,10);if(/^true$/.test(data))return true;if(/^false$/.test(data))return false;return data;}var helpers_ClickHandler=function ClickHandler(dispatch,action){return function(e){e.preventDefault();dispatch(action(e.target.id,true));var pressed=getAttribute(e.target,'aria-pressed');e.target.setAttribute('aria-pressed',!pressed);};};var getElement=function getElement(searchStr){var el=/^\.|#/.test(searchStr)?document.querySelector(searchStr):document.getElementById(searchStr);if(!el)return null;return el;};var helpers_getElements=function getElements(searchStr){var els=helpers_toConsumableArray(document.querySelectorAll(searchStr));if(!els)return[];return els;};var GetSub=function GetSub(_ref){var holderCSS=_ref.holderCSS,subCSS=_ref.subCSS;return function(id){var btn=getElement(id);if(!btn)return;var holder=btn.closest(holderCSS);if(!holder)return;return holder.querySelector(subCSS);};};var helpers_SetRoots=function SetRoots(handler){var ev=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'click';return function(_ref2,parent){var id=_ref2.id;var button=getElement(id);if(!button)return;if(parent){button=button.closest('li').querySelector('.sub-nav');}manage_events.addEventListener(button,ev,handler);};};var getLinkNo=function getLinkNo(items){return items.reduce(function(n,_ref3){var sub=_ref3.sub;if(!sub)return n;return n+sub.length;},items.length);};var CheckIE=function CheckIE(){return'ActiveXObject'in window;};
// CONCATENATED MODULE: ./modules/primary-nav/desktop/roots_button.js
var roots_button_setActive=function setActive(){var active=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];return function(_ref){var id=_ref.id;if(!active.includes(id)){var item=getElement(id);if(!item)return;item.setAttribute('aria-pressed','false');}};};var roots_button_ClickHandler=function ClickHandler(dispatch,action){return function(e){e.preventDefault();e.target.setAttribute('aria-pressed','true');clearTimeout(e.target.timeoutID);dispatch(ResetActive());dispatch(action(e.target.id,0));};};var OutHandler=function OutHandler(dispatch,action){return function(e){e.preventDefault();e.target.timeoutID=setTimeout(function(){dispatch(action(null,0));e.target.setAttribute('aria-pressed','false');},50);};};var selectRoot=function selectRoot(_ref2){var navitems=_ref2.navitems,active=_ref2.active;navitems.forEach(roots_button_setActive(active));};var roots_button_SetHover=function SetHover(dispatch){var inHandler=helpers_SetRoots(roots_button_ClickHandler(dispatch,SetActive),'mouseenter');var focusHandler=helpers_SetRoots(roots_button_ClickHandler(dispatch,SetActive),'focus');var outHandler=helpers_SetRoots(OutHandler(dispatch,SetActive),'mouseleave');return function(item){inHandler(item);outHandler(item);focusHandler(item);};};/* harmony default export */ var roots_button = (function(_ref3,watcher){var dispatch=_ref3.dispatch,getState=_ref3.getState;var _getState=getState(),dev=_getState.device,nis=_getState.navitems;var handlers=roots_button_SetHover(dispatch,SetActive);if(nis&&dev!=='mobile'){nis.forEach(handlers);}watcher(['device','navitems'],function(_ref4){var device=_ref4.device,navitems=_ref4.navitems;if(device==='mobile')return;if(!navitems)return;navitems.forEach(handlers);});watcher(['active'],selectRoot);});
// CONCATENATED MODULE: ./modules/primary-nav/desktop/open_subs.js
var getSub=GetSub({holderCSS:DESKTOP_SUB_HOLDER,subCSS:DESKTOP_SUB_CLASS});var showSub=function showSub(active){return function(_ref){var id=_ref.id;var sub=getSub(id);if(!sub)return;var act=active.includes(id);sub.setAttribute('aria-hidden',!act);sub.setAttribute('tab-index',act?0:'-1');};};/* harmony default export */ var open_subs = (function(watcher){watcher(['active'],function(_ref2){var active=_ref2.active,navitems=_ref2.navitems;navitems.forEach(showSub(active));});});
// CONCATENATED MODULE: ./modules/primary-nav/desktop/set_subs.js
var set_subs_getSub=GetSub({holderCSS:DESKTOP_SUB_HOLDER,subCSS:DESKTOP_SUB_CLASS});var set_subs_SetWide=function SetWide(_ref){var id=_ref.id,sub=_ref.sub;if(!sub)return null;var linkNo=getLinkNo(sub);if(linkNo>8){var section=set_subs_getSub(id);section.style.width='450px';}};var set_subs_mouseEnter=function mouseEnter(sub,dispatch){manage_events.addEventListener(sub,'mouseenter',function(e){var btn=getElement(sub.dataset.id);if(btn){clearTimeout(btn.timeoutID);}});};var set_subs_mouseLeave=function mouseLeave(sub,dispatch){manage_events.addEventListener(sub,'mouseleave',function(e){var btn=getElement(sub.dataset.id);if(btn){e.target.timeoutID=setTimeout(function(){dispatch(SetActive(null));e.target.setAttribute('aria-pressed','false');},50);}});};var setSubSection=function setSubSection(_ref2,dispatch){var id=_ref2.id;var sub=set_subs_getSub(id);if(!sub)return null;sub.dataset.id=id;sub.setAttribute('tab-index','-1');set_subs_mouseEnter(sub);set_subs_mouseLeave(sub,dispatch);};var set_subs_focusEvent=function focusEvent(level,dispatch){return function(_ref3){var id=_ref3.id,sub=_ref3.sub;var el=getElement(id);if(el){manage_events.addEventListener(el,'focus',function(e){dispatch(SetActive(e.target.id,level));});}if(sub){sub.forEach(focusEvent(level+1,dispatch));}};};var trackFocus=function trackFocus(item,dispatch){if(item.sub){item.sub.forEach(set_subs_focusEvent(1,dispatch));}};/* harmony default export */ var set_subs = (function(_ref4,watcher){var getState=_ref4.getState,dispatch=_ref4.dispatch;var _getState=getState(),d=_getState.device,ni=_getState.navitems;if(d!=='mobile'&&ni){ni.forEach(function(item){if(CheckIE())set_subs_SetWide(item);setSubSection(item,dispatch);trackFocus(item,dispatch);});}watcher(['device','navitems'],function(_ref5){var device=_ref5.device,navitems=_ref5.navitems;if(device!=='mobile'){navitems.forEach(function(item){if(CheckIE())set_subs_SetWide(item);setSubSection(item,dispatch);});}});});
// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/lodash/defer.js
var defer = __webpack_require__(104);
var defer_default = /*#__PURE__*/__webpack_require__.n(defer);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__(182);

// CONCATENATED MODULE: ./modules/primary-nav/helpers/track_position.js
function track_position_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function track_position_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){track_position_ownKeys(Object(source),true).forEach(function(key){track_position_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{track_position_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function track_position_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var getActiveItems=function getActiveItems(active,items){return active.reduce(function(act,activeId){if(act.length===0){var item=items.findIndex(function(_ref){var id=_ref.id;return id===activeId;});return act.concat([item]);}var top=items[act[0]];if(top.sub){var _item=top.sub.findIndex(function(_ref2){var id=_ref2.id;return id===activeId;});return act.concat([_item]);}return act;},[]);};var mergeItems=function mergeItems(items){return items.map(function(item){if(item.sub){var sub=item.sub.reduce(function(s,it){if(it.sub){return s.concat(it.sub);}return s;},item.sub.filter(function(i){return!i.sub;}));return track_position_objectSpread({},item,{sub:sub});}return item;});};var manageIndexes=function manageIndexes(act,items){var activeIndexes=getActiveItems(act,items);return{current:function current(level){return activeIndexes[level];},decrease:function decrease(level){var amount=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var active=activeIndexes[level];var newActive=active-amount;return newActive<=0?0:newActive;},increase:function increase(level){var amount=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var active=activeIndexes[level];var length=(level===0?items.length:items[activeIndexes[0]].sub.length)-1;var newActive=active+amount;return newActive>=length?length:newActive;},length:function length(){return activeIndexes.length;}};};var GoHorizontal=function GoHorizontal(items,indexes){return function(dir){if(indexes.length()===1){var next=dir==='left'?indexes.decrease(0):indexes.increase(0);return items[next].id;}var top=items[indexes.current(0)];if(!top)return null;if(top&&top.sub&&top.sub.length>8){var _next=dir==='left'?indexes.decrease(1):indexes.increase(1);return top.sub[_next].id;}if(!top.sub){return top[indexes.current(0)].id;}return top.sub[indexes.current(1)].id;};};var getPosition=function getPosition(sub,indexes,dir){var amount=sub.length>8?3:1;return dir==='up'?indexes.decrease(1,amount):indexes.increase(1,amount);};var checkUp=function checkUp(pos,indexes,sub){var amount=sub.length>8?3:0;return pos===indexes.current(1)||indexes.current(1)<=amount;};var GoVertical=function GoVertical(items,indexes){return function(dir){var top=items[indexes.current(0)];if(indexes.length()===1){if(dir==='up'){return{id:top.id,level:0};}return top.sub?{id:top.sub[0].id,level:1}:{id:top.id,level:0};}var pos=getPosition(top.sub,indexes,dir);if(dir==='up'&&checkUp(pos,indexes,top.sub)){return{id:top.id,level:0};}return{id:top.sub[pos].id,level:1};};};/* harmony default export */ var track_position = (function(items){return function(active,dir){var mergedItems=mergeItems(items);var activeIndexes=manageIndexes(active,mergedItems);var goHorizontal=GoHorizontal(mergedItems,activeIndexes);var goVertical=GoVertical(mergedItems,activeIndexes);switch(dir){case'down':return goVertical('down');case'left':return{id:goHorizontal('left'),level:active.length-1};case'right':return{id:goHorizontal('right'),level:active.length-1};case'up':return goVertical('up');default:}};});
// CONCATENATED MODULE: ./modules/primary-nav/desktop/keyboard.js
var keyboard_TrackFocused=function TrackFocused(dispatch,tracker){return function(active,dir){var _tracker=tracker(active,dir),id=_tracker.id;// console.log('focus', id);
var el=getElement(id);if(el){defer_default()(function(){el.setAttribute('aria-pressed','true');el.focus();});}};};var setKeyHandler=function setKeyHandler(tracker,nav){return function(e){/* eslint-disable default-case */var active=nav.active;switch(e.keyCode){case 37:// left arrow
tracker(active,'left');break;case 39:// Right arrow
tracker(active,'right');break;case 38:e.preventDefault();tracker(active,'up');break;case 40:e.preventDefault();tracker(active,'down');break;}/* eslint-enable default-case */};};var setKeyEvent=function setKeyEvent(nav,handler){if(nav.handler){nav.removeEventListener('keydown',nav.handler,true);}nav.handler=handler;nav.addEventListener('keydown',handler,true);};/* harmony default export */ var keyboard = (function(_ref,watcher){var dispatch=_ref.dispatch,getState=_ref.getState;var _getState=getState(),active=_getState.active,navitems=_getState.navitems;var nav=getElement(MAIN_NAV);var tracker=keyboard_TrackFocused(dispatch,track_position(navitems));nav.active=active;setKeyEvent(nav,setKeyHandler(tracker,nav));watcher(['active'],function(_ref2){var act=_ref2.active;nav.active=act;});watcher(['navitems'],function(_ref3){var act=_ref3.active,ni=_ref3.navitems;nav.active=act;tracker=keyboard_TrackFocused(dispatch,track_position(ni));setKeyEvent(nav,setKeyHandler(tracker,nav));});});
// CONCATENATED MODULE: ./modules/primary-nav/desktop/index.js
var handleFirstTab=function handleFirstTab(e){if(e.keyCode===9){document.body.classList.add('keyboard-user');window.removeEventListener('keydown',handleFirstTab,false);}};window.addEventListener('keydown',handleFirstTab,false);/* harmony default export */ var desktop = (function(store,watcher){keyboard(store,watcher);roots_button(store,watcher);open_subs(watcher);set_subs(store,watcher);});
// CONCATENATED MODULE: ./modules/primary-nav/format/helpers.js
var levelZero=function levelZero(level){return level===0;};var getSection=function getSection(level){return levelZero(level)?'nav':'sub-nav';};var helpers_getLinkNo=function getLinkNo(items){return items.reduce(function(n,_ref){var sub=_ref.sub;if(!sub)return n;return n+sub.length;},items.length);};
// CONCATENATED MODULE: ./modules/primary-nav/format/desktop.js
var baseElements=function baseElements(nav,language){return"\n  <div class=\"nav\">\n    <div class=\"nav-holder nav-holder--desktop\">\n      <ul class=\"desktop-nav__items desktop-nav__items--level0\">\n        ".concat(nav,"\n      </ul>\n      ").concat(language||'',"\n    </div>\n    \n  </div>\n  \n");};var desktop_linkWrapperCss=function linkWrapperCss(level){var css="desktop-".concat(getSection(level),"__item");if(levelZero(level)){return"".concat(css," desktop-nav__item--root");}return css;};var desktop_navLiCss=function navLiCss(level){var section=getSection(level);return"desktop-".concat(section,"__item desktop-").concat(section,"__item--level").concat(level);};var desktop_navLinkCss=function navLinkCss(level){return"desktop-".concat(getSection(level),"__link");};var desktop_navUlCss=function navUlCss(sub,level){var base='desktop-sub-nav__items';var extra=helpers_getLinkNo(sub)>8?'desktop-sub-nav__items--large':'';return"".concat(base," desktop-sub-nav__items--level").concat(level," ").concat(extra).trim();};var svgArrow=function svgArrow(title){return"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6.18 8.51\" class=\"desktop-nav__icon\">\n  <title>".concat(title,"</title>\n  <path d=\"M1,1,5,4.5,1,8\" transform=\"translate(-0.34 -0.25)\" style=\"fill: none; stroke-miterlimit: 10; stroke-width: 1;\"></path>\n</svg>");};var subButton=function subButton(id,title){return"\n  <div class=\"desktop-nav__btn-wrapper\">\n    <button aria-pressed=\"false\" class=\"desktop-nav__link\" type=\"button\" id=\"".concat(id,"\">\n      ").concat(title," ").concat(svgArrow(title),"\n    </button>\n  </div>\n");};var subTitle=function subTitle(id,title){return"\n  <h3 class=\"desktop-sub-nav__title\" id=\"".concat(id,"\">").concat(title,"</h3>\n");};var subLink=function subLink(_ref,level){var id=_ref.id,path=_ref.path,title=_ref.title;return"\n  <li class=\"".concat(desktop_linkWrapperCss(level),"\">\n    <a href=\"").concat(path,"\" class=\"").concat(desktop_navLinkCss(level),"\" id=\"").concat(id,"\">").concat(title,"</a>\n  </li>\n");};var desktop_subSection=function subSection(_ref2,level){var id=_ref2.id,sub=_ref2.sub,title=_ref2.title;return"\n  <li class=\"".concat(desktop_navLiCss(level),"\">\n    ").concat(level===0?subButton(id,title):subTitle(id,title),"\n    <div class=\"sub-nav sub-nav--level").concat(level,"\" aria-hidden=\"true\">\n      <ul class=\"").concat(desktop_navUlCss(sub,level+1),"\">\n        ").concat(sub.map(function(item){if(item.sub){return subSection(item,level+1);}return subLink(item,level+1);}).join(''),"\n      </ul>\n    </div>\n  </li>\n");};/* harmony default export */ var format_desktop = (function(_ref3){var navitems=_ref3.navitems;var nav=document.getElementById('primary-nav');if(!nav)return;var languageChooser=nav.dataset.languageChooser?JSON.parse(nav.dataset.languageChooser):'';var template=navitems.map(function(item){if(item.sub){return desktop_subSection(item,0);}return subLink(item,0);}).join('');nav.innerHTML=baseElements(template,languageChooser);});
// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/@morsedigital/i18n_helper/index.js
var i18n_helper = __webpack_require__(83);

// CONCATENATED MODULE: ./modules/primary-nav/format/mobile.js
var pn=Object(i18n_helper["manageTranslations"])('javascript')('primary_navigation');var mobileNavCss=function mobileNavCss(level){return"\n  mobile-nav__items mobile-nav__items--level".concat(level,"\n");};var mobile_mobileNavLinkCss=function mobileNavLinkCss(){var level=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;return"mobile-".concat(getSection(level),"__link");};var backBtn=function backBtn(title,id){return"\n  <li class=\"mobile-nav__item\">\n    <button class=\"mobile-nav__link mobile-nav__link--back\" type=\"button\" id=\"back-btn-".concat(id,"\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6.18 8.51\" class=\"mobile-nav__icon mobile-nav__icon--back\">\n        <title>").concat(pn('back_to',{title:title}),"</title>\n        <path\n          d=\"M1,1,5,4.5,1,8\"\n          transform=\"translate(-0.34 -0.25)\"\n          style=\"fill: none; stroke-miterlimit: 10; stroke-width: 1;\"\n        ></path>\n      </svg>\n      ").concat(pn('back_to',{title:title}),"\n    </button>\n  </li>\n");};var callToAction=function callToAction(_ref){var path=_ref.path,title=_ref.title;return"\n  <li class=\"cta-item\">\n    <a href=\"".concat(path,"\" rel=\"no-follow\" class=\"cta__btn cta__btn--mobile\"> ").concat(title,"</a>\n  </li>\n");};var CallToActions=function CallToActions(ctas){return"\n  <ul class=\"cta cta--mobile\">\n    ".concat(ctas.map(callToAction).join(''),"\n  </ul>\n");};var hamburger=function hamburger(){return"\n  <button id=\"menu-button\" class=\"menu-btn\" aria-pressed=\"false\" aria-label=\"menu-button\" type=\"button\">\n    <svg class=\"menu-btn__icon\" width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" xmlns=\"http://www.w3.org/2000/svg\">\n      <title>Open navigation</title>\n      <path class=\"h t\" d=\"M10.5 10l17 0\"></path>\n      <path d=\"M10.5 19l17 0\"></path>\n      <path class=\"h b\" d=\"M10.5 28l17 0\"></path>\n      <path class=\"x\" d=\"M19 10.5l0 17\"></path>\n    </svg>\n  </button>\n";};var mobile_baseElements=function baseElements(nav,language){return"\n  ".concat(hamburger(),"\n  <div class=\"mobile-nav\" id=\"nav-mobile-wrapper\">\n    <div class=\"mobile-nav-wrapper\" id=\"nav-mobile\">\n      <ul class=\"").concat(mobileNavCss(0),"\">\n        ").concat(nav,"\n      </ul>\n    </div>\n    ").concat(language||'',"\n  </div>\n");};var mobile_subButton=function subButton(id,title){return"\n  <button class=\"mobile-nav__link\" type=\"button\" id=\"".concat(id,"\">\n    ").concat(title,"\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6.18 8.51\" class=\"mobile-nav__icon\">\n      <title>").concat(title,"</title>\n      <path\n        d=\"M1,1,5,4.5,1,8\"\n        transform=\"translate(-0.34 -0.25)\"\n        style=\"fill: none; stroke-miterlimit: 10; stroke-width: 1;\"\n      ></path>\n    </svg>\n  </button>\n");};var mobile_subLink=function subLink(_ref2,level){var id=_ref2.id,path=_ref2.path,title=_ref2.title;return"\n  <li class=\"mobile-nav__item\">\n    <a href=\"".concat(path,"\" id=\"").concat(id,"\" class=\"").concat(mobile_mobileNavLinkCss(level),"\">").concat(title,"</a>\n  </li>\n");};var mobile_subSection=function subSection(_ref3,level){var id=_ref3.id,sub=_ref3.sub,title=_ref3.title;return"\n  <li class=\"mobile-nav__item\">\n    ".concat(mobile_subButton(id,title),"\n    <ul class=\"").concat(mobileNavCss(level),"\" aria-hidden=\"true\">\n      ").concat(backBtn(title,id),"\n      ").concat(sub.map(function(item){if(item.sub){return subSection(item,level+1);}return mobile_subLink(item,level+1);}).join(''),"\n    </ul>\n  </li>\n");};/* harmony default export */ var mobile = (function(_ref4){var navitems=_ref4.navitems,join=_ref4.join;var nav=document.getElementById('primary-nav');if(!nav)return;var cta=[{title:pn('cta_buttons.join'),path:join},{title:pn('cta_buttons.find_centre'),path:'/centre-locator'},{title:pn('cta_buttons.lesson_or_course'),path:'https://www.betterlessons.org.uk/'},{title:pn('cta_buttons.activity'),path:'https://better.legendonlineservices.co.uk/enterprise/account/login'}];var template=navitems.map(function(item){if(item.sub){return mobile_subSection(item,0);}return mobile_subLink(item,0);}).join('');var languageChooser=nav.dataset.languageChooser?JSON.parse(nav.dataset.languageChooser):'';nav.innerHTML=mobile_baseElements("".concat(CallToActions(cta)," ").concat(template),languageChooser);});
// CONCATENATED MODULE: ./modules/primary-nav/format/index.js
var CheckMobile=function CheckMobile(nav){return function(device,force){if(force)return device==='mobile';return nav.dataset.device!=='mobile'&&device==='mobile';};};var CheckDesktop=function CheckDesktop(nav){return function(device,force){if(force)return['tablet','desktop'].includes(device);return!['tablet','desktop'].includes(nav.dataset.device)&&['tablet','desktop'].includes(device);};};var format_FormatNav=function FormatNav(formatters){return function(state){var force=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var device=state.device;formatters.forEach(function(_ref){var check=_ref.check,format=_ref.format;if(check(device,force)){format(state);manage_events.flush();}});};};/* harmony default export */ var primary_nav_format = (function(_ref2,watcher){var getState=_ref2.getState;var NavEl=document.getElementById(MAIN_NAV);var formatter=format_FormatNav([{format:mobile,check:CheckMobile(NavEl)},{format:format_desktop,check:CheckDesktop(NavEl)}]);formatter(getState(),true);watcher(['device'],formatter);watcher(['navitems'],function(state){NavEl.innerHTML='';manage_events.flush();formatter(state,true);});});
// CONCATENATED MODULE: ./modules/primary-nav/mobile/hamburger.js
var hamburger_addClick=function addClick(dispatch){var menu=getElement(MENU_ID);if(!menu)return;manage_events.addEventListener(menu,'click',function(e){e.preventDefault();var pressed=getAttribute(menu,'aria-pressed');menu.setAttribute('aria-pressed',!pressed);dispatch(OpenNav(!pressed));});};/* harmony default export */ var mobile_hamburger = (function(_ref,watcher){var dispatch=_ref.dispatch;hamburger_addClick(dispatch);watcher(['open'],function(_ref2){var open=_ref2.open;if(!open){var menu=getElement(MENU_ID);if(!menu)return;menu.setAttribute('aria-pressed','false');}});watcher(['device','navitems'],function(_ref3){var device=_ref3.device;if(device!=='mobile')return;manage_events.flush();hamburger_addClick(dispatch);});});
// CONCATENATED MODULE: ./modules/primary-nav/helpers/get_height.js
/* harmony default export */ var get_height = (function(el){return el.offsetHeight;});
// CONCATENATED MODULE: ./modules/primary-nav/mobile/open_nav.js
var removeHeight=function removeHeight(wrapper){return function(e){e.target.removeEventListener('transitionend',e.target.transitionend,true);wrapper.style.height=0;};};var open_nav_GetWrappers=function GetWrappers(){var wrapper=getElement(MOBILE_WRAPPER_ID);var holder=getElement(MOBILE_HOLDER_ID);return function(){if(!document.body.contains(holder)){holder=getElement(MOBILE_HOLDER_ID);}if(!document.body.contains(wrapper)){wrapper=getElement(MOBILE_WRAPPER_ID);}return{holder:holder,wrapper:wrapper};};};var open_nav_openMenu=function openMenu(){var getWrappers=open_nav_GetWrappers();var _getWrappers=getWrappers(),h=_getWrappers.holder,w=_getWrappers.wrapper;if(!w||!h)return;w.style.height=0;h.style.transform="translateY(-100%)";h.style.WebkitTransform="translateY(-100%)";var transitionend=removeHeight(w);h.transitionend=transitionend;return function(open){var trans=open?0:-100;var _getWrappers2=getWrappers(),holder=_getWrappers2.holder,wrapper=_getWrappers2.wrapper;holder.style.transform="translateY(".concat(trans,"%)");holder.style.WebkitTransform="translateY(".concat(trans,"%)");if(open){wrapper.style.height="".concat(get_height(holder),"px");}else{holder.addEventListener('transitionend',transitionend,true);}};};/* harmony default export */ var open_nav = (function(watcher){var opener=open_nav_openMenu();// const search = closeSearch();
watcher(['device','navitems'],function(){opener=open_nav_openMenu();});watcher(['open'],function(_ref){var open=_ref.open;opener(open);});watcher(['active'],function(_ref2){var open=_ref2.open;if(open){var wrapper=getElement(MOBILE_WRAPPER_ID);var holder=getElement(MOBILE_HOLDER_ID);setTimeout(function(){wrapper.style.height="".concat(get_height(holder),"px");},30);}});});
// CONCATENATED MODULE: ./modules/primary-nav/mobile/root_buttons.js
var root_buttons_ClickHandler=function ClickHandler(dispatch){return function(e){e.preventDefault();dispatch(SetActive(e.target.id));};};var root_buttons_setRoots=function setRoots(dispatch){return function(_ref){var id=_ref.id,sub=_ref.sub;var item=getElement(id);if(!item)return;if(sub){// Manager.removeEventListener(item, 'click');
manage_events.addEventListener(item,'click',root_buttons_ClickHandler(dispatch));sub.forEach(setRoots(dispatch));}};};var root_buttons_setActive=function setActive(){var active=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var depth=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;return function(_ref2){var id=_ref2.id,sub=_ref2.sub;var item=getElement(id);if(!item)return;var hidden=active.length===depth?false:!active.includes(id);item.parentElement.setAttribute('aria-hidden',hidden.toString());if(sub&&active.includes(id)){sub.forEach(setActive(active,depth+1));}};};var root_buttons_selectRoot=function selectRoot(_ref3){var navitems=_ref3.navitems,active=_ref3.active;navitems.forEach(root_buttons_setActive(active));};/* harmony default export */ var root_buttons = (function(_ref4,watcher){var dispatch=_ref4.dispatch,getState=_ref4.getState;var _getState=getState(),dev=_getState.device,nis=_getState.navitems;if(nis&&dev==='mobile'){nis.forEach(root_buttons_setRoots(dispatch));}// Subscribe to navitems changes
watcher(['navitems'],function(_ref5){var device=_ref5.device,navitems=_ref5.navitems;if(device!=='mobile')return;if(!navitems)return;navitems.forEach(root_buttons_setRoots(dispatch));});watcher(['active'],root_buttons_selectRoot);watcher(['device'],function(_ref6){var device=_ref6.device,navitems=_ref6.navitems;if(device!=='mobile')return;navitems.forEach(root_buttons_setRoots(dispatch));});});
// CONCATENATED MODULE: ./modules/primary-nav/mobile/set_subs.js
var mobile_set_subs_getSub=GetSub({holderCSS:MOBILE_SUB_HOLDER,subCSS:MOBILE_SUB_CLASS});var set_subs_SetBack=function SetBack(dispatch){return function(btn){manage_events.addEventListener(btn,'click',function(e){e.preventDefault();dispatch(SetActive());});};};var set_subs_SetSubSections=function SetSubSections(setBack){var sections=helpers_getElements("".concat(MOBILE_SUB_HOLDER," ul,  ").concat(MOBILE_BACK_CLASS));if(sections.length===0)return null;sections.forEach(function(el){el.setAttribute('aria-hidden','true');if(el.nodeName==='BUTTON'){setBack(el);}});};var SetSub=function SetSub(setBack){return function(_ref){var id=_ref.id;var subSection=mobile_set_subs_getSub(id);if(!subSection)return null;subSection.setAttribute('aria-hidden','true');set_subs_SetSubSections(setBack);};};/* harmony default export */ var mobile_set_subs = (function(_ref2,watcher){var dispatch=_ref2.dispatch,getState=_ref2.getState;var _getState=getState(),dev=_getState.device,ni=_getState.navitems;var setBack=set_subs_SetBack(dispatch);if(ni&&dev==='mobile'){ni.forEach(SetSub(setBack));}watcher(['device','navitems'],function(_ref3){var device=_ref3.device,navitems=_ref3.navitems;if(device==='mobile'){navitems.forEach(SetSub(setBack));}});});
// CONCATENATED MODULE: ./modules/primary-nav/mobile/show_sub.js
// const getSub = GetSub({ holderCSS: MOBILE_SUB_HOLDER, subCSS: MOBILE_SUB_CLASS });
var show_sub_setBack=function setBack(sub,active){var back=sub.querySelector(MOBILE_BACK_CLASS);if(!back)return;back.setAttribute('aria-hidden',!active);back.disabled=!active;};var hideLink=function hideLink(sub,active){var mainLink=sub.parentNode.querySelector('button');if(!mainLink)return;mainLink.setAttribute('aria-hidden',active);};var show_sub_GetSubSection=function GetSubSection(id){var btn=getElement(id);if(!btn)return null;var subSection=btn.nextElementSibling;if(subSection&&subSection.nodeName==='UL'){return subSection;}return null;};var ShowSubSection=function ShowSubSection(active){return function(_ref){var id=_ref.id,sub=_ref.sub;var subSection=show_sub_GetSubSection(id);if(!subSection)return null;var act=active.includes(id);subSection.setAttribute('aria-hidden',!act);subSection.setAttribute('tab-index',act?0:-1);show_sub_setBack(subSection,active.slice(-1)[0]===id);hideLink(subSection,act);if(sub){sub.forEach(ShowSubSection(active));}};};var showSubs=function showSubs(_ref2){var active=_ref2.active,navitems=_ref2.navitems,device=_ref2.device;if(device!=='mobile')return;navitems.forEach(ShowSubSection(active));};/* harmony default export */ var show_sub = (function(watcher){watcher(['active'],showSubs);});
// CONCATENATED MODULE: ./modules/primary-nav/mobile/index.js
/* harmony default export */ var primary_nav_mobile = (function(store,watcher){mobile_hamburger(store,watcher);open_nav(watcher);root_buttons(store,watcher);mobile_set_subs(store,watcher);show_sub(watcher);});
// CONCATENATED MODULE: ./modules/primary-nav/search/index.js
function search_toConsumableArray(arr){return search_arrayWithoutHoles(arr)||search_iterableToArray(arr)||search_nonIterableSpread();}function search_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function search_iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function search_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}// export const BUTTON_ID = 'search-open';
// export const SEARCH_ID = 'main-search';
/* harmony default export */ var primary_nav_search = (function(_ref,watcher){var dispatch=_ref.dispatch;var button=getElement(SEARCH_BUTTON_ID);var search=getElement(SEARCH_ID);if(!button||!search)return;search.setAttribute('tab-index',-1);var inputs=search_toConsumableArray(search.querySelectorAll('input'));inputs.forEach(function(input){input.disabled=true;});button.addEventListener('click',function(e){e.preventDefault();var open=getAttribute(button,'aria-pressed');button.setAttribute('aria-pressed',(!open).toString());search.setAttribute('aria-hidden',open.toString());search.setAttribute('tab-index',open?0:-1);inputs.forEach(function(input){input.disabled=open;});dispatch(OpenNav(false));});watcher(['open'],function(_ref2){var open=_ref2.open;if(open){button.setAttribute('aria-pressed','false');search.setAttribute('aria-hidden','true');search.setAttribute('tab-index',-1);inputs.forEach(function(input){input.disabled=true;});}});});
// CONCATENATED MODULE: ./modules/primary-nav/setup/index.js
/* harmony default export */ var primary_nav_setup = (function(){var desktopElms=helpers_getElements(DESKTOP_SUB_CLASS);if(desktopElms.length>0){desktopElms.forEach(function(elm){elm.setAttribute('aria-hidden','true');});}});
// CONCATENATED MODULE: ./modules/primary-nav/index.js
function primary_nav_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function primary_nav_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){primary_nav_ownKeys(Object(source),true).forEach(function(key){primary_nav_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{primary_nav_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function primary_nav_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// Closest & matches polyfill
if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;}if(!Element.prototype.closest){Element.prototype.closest=function(s){var el=this;do{if(el.matches(s))return el;el=el.parentElement||el.parentNode;}while(el!==null&&el.nodeType===1);return null;};}/* harmony default export */ var primary_nav = (function _callee(){var NavEl,store,watcher,dispatch;return regenerator_default.a.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:NavEl=document.getElementById(MAIN_NAV);if(NavEl){_context.next=3;break;}return _context.abrupt("return");case 3:// Stops if no nav
primary_nav_setup();_context.next=6;return regenerator_default.a.awrap(primary_nav_store(primary_nav_objectSpread({},NavEl.dataset)));case 6:store=_context.sent;// Sets redux
watcher=watch_changes(store);// Watch for changes
dispatch=store.dispatch;dispatch(FetchData());// Gets nav json
// // Sets up HTML
primary_nav_format(store,watcher);// Sets mobile function
primary_nav_mobile(store,watcher);// Sets Desktop Actions
desktop(store,watcher);// Sets Search Actions
primary_nav_search(store,watcher);// // Tracks device
Object(modules_tracker["a" /* default */])(function(dev){// console.log('dev', dev);
dispatch(ChangeDevice(dev));NavEl.dataset.device=dev;});case 15:case"end":return _context.stop();}}});});
// CONCATENATED MODULE: ./modules/index.js
// import '@babel/polyfill';
(function(){// Intialise Rails UJS
rails_ujs_default.a.start();})();(function(){primary_nav();})();

/***/ }),
/* 147 */,
/* 148 */,
/* 149 */
/***/ (function(module, exports) {

module.exports = "/packs/images/general-1826f6183b91d023fde0cd3065bc088f.svg";

/***/ }),
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */
/***/ (function(module, exports) {

module.exports = "/packs/images/better-pdf-logo-34e067c4cdac0a90281f914a7e275172.gif";

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = "/packs/images/accessibility-47b749c7931b7ca0a2f8c26ceb4a81ab.svg";

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = "/packs/images/contact-f5c0befcfa98ce958ae0cdc12a8f2b65.svg";

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = "/packs/images/circular-3ba17dea3dd5dbf99329338b18233c4d.svg";

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = "/packs/images/facilities-f3571a8602aa82969b571c5e970e43f6.svg";

/***/ }),
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stylesheets_application_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(276);
/* harmony import */ var _stylesheets_application_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_application_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_primary_nav_stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(277);
/* harmony import */ var _modules_primary_nav_stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_primary_nav_stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_facility_finder_stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(206);
/* harmony import */ var _components_facility_finder_stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_facility_finder_stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_weekly_prog_stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61);
/* harmony import */ var _components_weekly_prog_stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_weekly_prog_stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_loader_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62);
/* harmony import */ var _components_loader_styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_loader_styles_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_better_pdf_logo_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(183);
/* harmony import */ var _images_better_pdf_logo_gif__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_better_pdf_logo_gif__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_accessibility_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(184);
/* harmony import */ var _images_accessibility_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_accessibility_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_contact_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(185);
/* harmony import */ var _images_contact_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_contact_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_circular_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(186);
/* harmony import */ var _images_circular_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_circular_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_facilities_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(187);
/* harmony import */ var _images_facilities_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_facilities_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_general_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(149);
/* harmony import */ var _images_general_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_general_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(146);
/* eslint-enable */function importAll(r){return r.keys().map(r);}importAll(__webpack_require__(278));// Lazy load images
(function(){var observer=lozad__WEBPACK_IMPORTED_MODULE_14___default()();// lazy loads elements with default selector as '.lozad'
observer.observe();})();// Contact honeypot
var honeyPot=document.getElementById('contact-honeypot');if(honeyPot){honeyPot.style.display='none';}// End Contact honeypot

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./accessibility.svg": 184,
	"./autism_icon.jpg": 279,
	"./better-pdf-logo.gif": 183,
	"./better-pdf-logo.png": 280,
	"./better_logo.png": 281,
	"./circular.svg": 186,
	"./components/activities-facilities-panel/background-container.png": 282,
	"./components/search/ku-gridview.png": 283,
	"./components/search/ku-listview.png": 284,
	"./components/search/ku-loader.gif": 285,
	"./contact.svg": 185,
	"./cross.png": 286,
	"./cruk_new.png": 287,
	"./facilities.svg": 187,
	"./forms/form-error.png": 288,
	"./forms/form-select-arrow.png": 289,
	"./forms/form-success.png": 290,
	"./general.svg": 149,
	"./homepage/activity/extreme_desktop.jpg": 291,
	"./homepage/activity/extreme_mobile.jpg": 292,
	"./homepage/activity/extreme_retina.jpg": 293,
	"./homepage/activity/extreme_tablet.jpg": 294,
	"./homepage/activity/football_desktop.jpg": 295,
	"./homepage/activity/football_mobile.jpg": 296,
	"./homepage/activity/football_retina.jpg": 297,
	"./homepage/activity/football_tablet.jpg": 298,
	"./homepage/activity/gymnastic_desktop.jpg": 299,
	"./homepage/activity/gymnastic_mobile.jpg": 300,
	"./homepage/activity/gymnastic_retina.jpg": 301,
	"./homepage/activity/gymnastic_tablet.jpg": 302,
	"./homepage/activity/performing_arts_desktop.jpg": 303,
	"./homepage/activity/performing_arts_mobile.jpg": 304,
	"./homepage/activity/performing_arts_retina.jpg": 305,
	"./homepage/activity/performing_arts_tablet.jpg": 306,
	"./homepage/activity/swimming_desktop.jpg": 307,
	"./homepage/activity/swimming_mobile.jpg": 308,
	"./homepage/activity/swimming_retina.jpg": 309,
	"./homepage/activity/swimming_tablet.jpg": 310,
	"./homepage/facilities/childrens_centres_desktop.jpg": 311,
	"./homepage/facilities/childrens_centres_mobile.jpg": 312,
	"./homepage/facilities/childrens_centres_tablet.jpg": 313,
	"./homepage/facilities/extreme_desktop.jpg": 314,
	"./homepage/facilities/extreme_mobile.jpg": 315,
	"./homepage/facilities/extreme_tablet.jpg": 316,
	"./homepage/facilities/leisure_desktop.jpg": 317,
	"./homepage/facilities/leisure_mobile.jpg": 318,
	"./homepage/facilities/leisure_tablet.jpg": 319,
	"./homepage/facilities/library_desktop.jpg": 320,
	"./homepage/facilities/library_mobile.jpg": 321,
	"./homepage/facilities/library_tablet.jpg": 322,
	"./homepage/facilities/spa_desktop.jpg": 323,
	"./homepage/facilities/spa_mobile.jpg": 324,
	"./homepage/facilities/spa_tablet.jpg": 325,
	"./homepage/facilities/venues_desktop.jpg": 326,
	"./homepage/facilities/venues_mobile.jpg": 327,
	"./homepage/facilities/venues_tablet.jpg": 328,
	"./homepage/involved/get-involved_sprite.svg": 329,
	"./homepage/whatson/learn_to_swim_desktop.jpg": 330,
	"./homepage/whatson/learn_to_swim_mobile.jpg": 331,
	"./homepage/whatson/learn_to_swim_retina.jpg": 332,
	"./homepage/whatson/october_offers_desktop.jpg": 333,
	"./homepage/whatson/october_offers_mobile.jpg": 334,
	"./homepage/whatson/october_offers_retina.jpg": 335,
	"./homepage/whatson/stand_up_to_cancer_desktop.jpg": 336,
	"./homepage/whatson/stand_up_to_cancer_mobile.jpg": 337,
	"./homepage/whatson/stand_up_to_cancer_retina.jpg": 338,
	"./ku-loader.gif": 339,
	"./logo.svg": 98,
	"./map-close.png": 340,
	"./map-pin.png": 341,
	"./map.svg": 342,
	"./pages/boroughs/borough-activity-facility-filter.jpg": 343,
	"./pages/business_sectors/business-sector-hero-leisure.jpg": 344,
	"./pages/content_hub/featured-article.jpg": 345,
	"./pages/content_hub/find-centre.jpg": 346,
	"./shadow.png": 347,
	"./sprites/accessibility.svg": 348,
	"./sprites/arrows.png": 349,
	"./sprites/boroughs.png": 350,
	"./sprites/breadcrumbs.png": 351,
	"./sprites/circular.png": 352,
	"./sprites/circular.svg": 353,
	"./sprites/contact.png": 354,
	"./sprites/contact.svg": 355,
	"./sprites/cruk.png": 356,
	"./sprites/facilities.svg": 357,
	"./sprites/footer.png": 358,
	"./sprites/footer_new.png": 359,
	"./sprites/footer_new_02.png": 360,
	"./sprites/general.svg": 361,
	"./sprites/map.png": 362,
	"./sprites/map.svg": 363,
	"./sprites/navigation.png": 364,
	"./sprites/news.png": 365,
	"./sprites/social.png": 366,
	"./sprites/social_enerprise_logo.png": 367,
	"./svg/accessibility/accessible_changing.svg": 368,
	"./svg/accessibility/accessible_parking.svg": 369,
	"./svg/accessibility/adapted_wheelchair.svg": 370,
	"./svg/accessibility/disabled_toilets.svg": 371,
	"./svg/accessibility/lift.svg": 372,
	"./svg/accessibility/poolside_facility.svg": 373,
	"./svg/accessibility/poolside_hoist.svg": 374,
	"./svg/accessibility/ramp.svg": 375,
	"./svg/alert-close.svg": 376,
	"./svg/alert-high.svg": 377,
	"./svg/alert-low.svg": 378,
	"./svg/alert-medium.svg": 379,
	"./svg/arrow-down.svg": 380,
	"./svg/arrow_apple.svg": 381,
	"./svg/arrow_left.svg": 382,
	"./svg/arrow_right.svg": 383,
	"./svg/arrow_white.svg": 384,
	"./svg/close.svg": 385,
	"./svg/drop_down.svg": 386,
	"./svg/drop_down_gr.svg": 387,
	"./svg/facilities/badminton_court.svg": 388,
	"./svg/facilities/bicycle.svg": 389,
	"./svg/facilities/bowling.svg": 390,
	"./svg/facilities/building_facilities.svg": 391,
	"./svg/facilities/cafe.svg": 392,
	"./svg/facilities/calendar.svg": 393,
	"./svg/facilities/camping.svg": 394,
	"./svg/facilities/children_facilities.svg": 395,
	"./svg/facilities/court.svg": 396,
	"./svg/facilities/day_pass.svg": 397,
	"./svg/facilities/diving.svg": 398,
	"./svg/facilities/drop_in.svg": 399,
	"./svg/facilities/e_resource.svg": 400,
	"./svg/facilities/event_conference_room.svg": 401,
	"./svg/facilities/extreme.svg": 402,
	"./svg/facilities/football_pitch.svg": 403,
	"./svg/facilities/gift_shop.svg": 404,
	"./svg/facilities/golf.svg": 405,
	"./svg/facilities/gym.svg": 406,
	"./svg/facilities/health_suite.svg": 407,
	"./svg/facilities/healthwise.svg": 408,
	"./svg/facilities/ice_rink.svg": 409,
	"./svg/facilities/leisure_studio.svg": 410,
	"./svg/facilities/library.svg": 411,
	"./svg/facilities/outdoor_climbing.svg": 412,
	"./svg/facilities/personal_trainer.svg": 413,
	"./svg/facilities/physio_clinic_old.svg": 414,
	"./svg/facilities/physio_clinic_v2.svg": 415,
	"./svg/facilities/pitches.svg": 416,
	"./svg/facilities/pool.svg": 417,
	"./svg/facilities/prayer-room.svg": 418,
	"./svg/facilities/prayer_room.svg": 419,
	"./svg/facilities/racquet_sports.svg": 420,
	"./svg/facilities/ski.svg": 421,
	"./svg/facilities/softplay.svg": 422,
	"./svg/facilities/spa.svg": 423,
	"./svg/facilities/sports.svg": 424,
	"./svg/facilities/tracks.svg": 425,
	"./svg/facilities/trampoline.svg": 426,
	"./svg/geolocation.svg": 427,
	"./svg/hamburger.svg": 428,
	"./svg/homepage/get_involved_sprite.svg": 429,
	"./svg/info.svg": 430,
	"./svg/ireland/accessibility/accessible_changing.svg": 431,
	"./svg/ireland/accessibility/accessible_parking.svg": 432,
	"./svg/ireland/accessibility/adapted_wheelchair.svg": 433,
	"./svg/ireland/accessibility/disabled_toilets.svg": 434,
	"./svg/ireland/accessibility/lift.svg": 435,
	"./svg/ireland/accessibility/poolside_facility.svg": 436,
	"./svg/ireland/accessibility/poolside_hoist.svg": 437,
	"./svg/ireland/accessibility/ramp.svg": 438,
	"./svg/ireland/facilities/badminton_court.svg": 439,
	"./svg/ireland/facilities/bicycle.svg": 440,
	"./svg/ireland/facilities/bowling.svg": 441,
	"./svg/ireland/facilities/building_facilities.svg": 442,
	"./svg/ireland/facilities/cafe.svg": 443,
	"./svg/ireland/facilities/calendar.svg": 444,
	"./svg/ireland/facilities/camping.svg": 445,
	"./svg/ireland/facilities/children_facilities.svg": 446,
	"./svg/ireland/facilities/court.svg": 447,
	"./svg/ireland/facilities/day_pass.svg": 448,
	"./svg/ireland/facilities/diving.svg": 449,
	"./svg/ireland/facilities/drop_in.svg": 450,
	"./svg/ireland/facilities/e_resource.svg": 451,
	"./svg/ireland/facilities/event_conference_room.svg": 452,
	"./svg/ireland/facilities/extreme.svg": 453,
	"./svg/ireland/facilities/football_pitch.svg": 454,
	"./svg/ireland/facilities/gift_shop.svg": 455,
	"./svg/ireland/facilities/golf.svg": 456,
	"./svg/ireland/facilities/gym.svg": 457,
	"./svg/ireland/facilities/health_suite.svg": 458,
	"./svg/ireland/facilities/healthwise.svg": 459,
	"./svg/ireland/facilities/ice_rink.svg": 460,
	"./svg/ireland/facilities/leisure_studio.svg": 461,
	"./svg/ireland/facilities/library.svg": 462,
	"./svg/ireland/facilities/outdoor_climbing.svg": 463,
	"./svg/ireland/facilities/personal_trainer.svg": 464,
	"./svg/ireland/facilities/pitches.svg": 465,
	"./svg/ireland/facilities/pool.svg": 466,
	"./svg/ireland/facilities/racquet_sports.svg": 467,
	"./svg/ireland/facilities/ski.svg": 468,
	"./svg/ireland/facilities/softplay.svg": 469,
	"./svg/ireland/facilities/spa.svg": 470,
	"./svg/ireland/facilities/sports.svg": 471,
	"./svg/ireland/facilities/tracks.svg": 472,
	"./svg/ireland/facilities/trampoline.svg": 473,
	"./svg/logo.svg": 474,
	"./svg/map-pin-white.svg": 475,
	"./svg/map-pin.svg": 476,
	"./svg/menu.svg": 477,
	"./svg/move-left.svg": 478,
	"./svg/move-right.svg": 479,
	"./svg/search.svg": 480,
	"./svg/search_new.svg": 481,
	"./svg/twitter.svg": 482,
	"./svg/weekly-prog/calendar.svg": 483,
	"./svg/weekly-prog/info.svg": 484,
	"./svg/weekly-prog/loading.svg": 485,
	"./svg/weekly-prog/print.svg": 486
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 278;

/***/ }),
/* 279 */
/***/ (function(module, exports) {

module.exports = "/packs/images/autism_icon-33b56740905ecdb302385ef662364076.jpg";

/***/ }),
/* 280 */
/***/ (function(module, exports) {

module.exports = "/packs/images/better-pdf-logo-86ed60e46368bd6fbfec1b8822a0a672.png";

/***/ }),
/* 281 */
/***/ (function(module, exports) {

module.exports = "/packs/images/better_logo-8c9fcd6e31270cee7b2bd0734e9d5606.png";

/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports = "/packs/images/components/activities-facilities-panel/background-container-58d2c6cfb0debb6fcb534dccd75e8273.png";

/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports = "/packs/images/components/search/ku-gridview-30b1e5b105c8d9ddb98074d0bf287a2f.png";

/***/ }),
/* 284 */
/***/ (function(module, exports) {

module.exports = "/packs/images/components/search/ku-listview-e0bf70ce7f7bf10e94197b0d05a42056.png";

/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports = "/packs/images/components/search/ku-loader-65c7bd844803875afb5ac61ef9db4150.gif";

/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports = "/packs/images/cross-78afb119d83011ce7f9df777964bdd1e.png";

/***/ }),
/* 287 */
/***/ (function(module, exports) {

module.exports = "/packs/images/cruk_new-c1ce2e1035c7e7055a87d13ec1b2d6ee.png";

/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports = "/packs/images/forms/form-error-26dedf06968e5e18a6779470653122c1.png";

/***/ }),
/* 289 */
/***/ (function(module, exports) {

module.exports = "/packs/images/forms/form-select-arrow-7549bcd2c9866f46b5ab3cb892381f83.png";

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = "/packs/images/forms/form-success-8577ddfc2f999134864676e518823572.png";

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/extreme_desktop-d679bd2fe335d5f7c9b86b8b2b3f6dd8.jpg";

/***/ }),
/* 292 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/extreme_mobile-99c0d1754a465d40080a50807ba7dc57.jpg";

/***/ }),
/* 293 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/extreme_retina-f205d93233a72fbae46028121391be0a.jpg";

/***/ }),
/* 294 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/extreme_tablet-69c06290d68cbef872f46e5dc5227561.jpg";

/***/ }),
/* 295 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/football_desktop-b1bbc4de7bdd551858f3de93e4293aa4.jpg";

/***/ }),
/* 296 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/football_mobile-f2337c9ae2df8bc6c60f53a14f794236.jpg";

/***/ }),
/* 297 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/football_retina-cfa8d3a80a9c7b2a540e7bbba960e2f2.jpg";

/***/ }),
/* 298 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/football_tablet-8b41a0c6b86526ec1ddd0e7885b63a62.jpg";

/***/ }),
/* 299 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/gymnastic_desktop-bed882247d51080f6cf189835b613b6d.jpg";

/***/ }),
/* 300 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/gymnastic_mobile-b7503adde8a0de2d7b7fe79fa32d6698.jpg";

/***/ }),
/* 301 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/gymnastic_retina-199a64ba05ee31aae979484687ff56f4.jpg";

/***/ }),
/* 302 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/gymnastic_tablet-db8adf67c1574fcc25e895632d3fcb75.jpg";

/***/ }),
/* 303 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/performing_arts_desktop-5e3b37540520ae6e1f988fccf77b3388.jpg";

/***/ }),
/* 304 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/performing_arts_mobile-ddc10330dd871f2e3b9622feee2eec1a.jpg";

/***/ }),
/* 305 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/performing_arts_retina-2773d5ba6615c5615ee96abcae482753.jpg";

/***/ }),
/* 306 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/performing_arts_tablet-9a6cf201acbb4349311907e14ef40e4a.jpg";

/***/ }),
/* 307 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/swimming_desktop-468c792e0be6c9e770bce8507dba5dc9.jpg";

/***/ }),
/* 308 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/swimming_mobile-da4fc3c85b0dc55fbafa15c073acb82b.jpg";

/***/ }),
/* 309 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/swimming_retina-7732479899aa688ab1f4c38b9a697d4a.jpg";

/***/ }),
/* 310 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/activity/swimming_tablet-58dbcdd6ed69e9774a84c640718e07ec.jpg";

/***/ }),
/* 311 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/childrens_centres_desktop-1355921625707a36daaf71395ffb9f92.jpg";

/***/ }),
/* 312 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/childrens_centres_mobile-ed0e0eb6080eb3e6296115beae359406.jpg";

/***/ }),
/* 313 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/childrens_centres_tablet-626edac25394b4158388c6f5eb60f4ab.jpg";

/***/ }),
/* 314 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/extreme_desktop-9f33d5ff3f29106e2b6868af591796eb.jpg";

/***/ }),
/* 315 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/extreme_mobile-14dc7809861a64ad4d6e59627f077256.jpg";

/***/ }),
/* 316 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/extreme_tablet-067aa9b655892e5764bba0d5d8bc7bc2.jpg";

/***/ }),
/* 317 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/leisure_desktop-07a55eaa5edc669a2eb8e95964168477.jpg";

/***/ }),
/* 318 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/leisure_mobile-068d599afb5088f780ec604a7ceeb180.jpg";

/***/ }),
/* 319 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/leisure_tablet-c42448bfbcac824f366ed5b51b7d3d0b.jpg";

/***/ }),
/* 320 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/library_desktop-af81781adc399e938f55c7b86adcba1a.jpg";

/***/ }),
/* 321 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/library_mobile-4f4283acad0cf5221ce3eddde102ef66.jpg";

/***/ }),
/* 322 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/library_tablet-50b2694bf4078dad4da16a2afa624017.jpg";

/***/ }),
/* 323 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/spa_desktop-3fe59ae73072b716e92e99d489860260.jpg";

/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/spa_mobile-884c78b0c1e63fbc492f9fcef99a08b5.jpg";

/***/ }),
/* 325 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/spa_tablet-865c2b6a0b4d7e6e2c93b369970a197a.jpg";

/***/ }),
/* 326 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/venues_desktop-6d751d0d26d2a06b5d44ac148b740906.jpg";

/***/ }),
/* 327 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/venues_mobile-f93c70d4059c0b2aabf08c4e296543ac.jpg";

/***/ }),
/* 328 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/facilities/venues_tablet-442a75793bbe0a394ac7bce749d79c23.jpg";

/***/ }),
/* 329 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/involved/get-involved_sprite-e6930891f2fe34627164ed23aeaeb1b8.svg";

/***/ }),
/* 330 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/whatson/learn_to_swim_desktop-985d5fdd1116a976c4b1e5de82f02f9d.jpg";

/***/ }),
/* 331 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/whatson/learn_to_swim_mobile-b640699c0f998fd241aed66d33e8e347.jpg";

/***/ }),
/* 332 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/whatson/learn_to_swim_retina-048098310bea722da1b0979ab5430012.jpg";

/***/ }),
/* 333 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/whatson/october_offers_desktop-9363ffea6735f73b65d8db3c67c04843.jpg";

/***/ }),
/* 334 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/whatson/october_offers_mobile-c3aafb2e4067074902cedcafa2df8ee2.jpg";

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/whatson/october_offers_retina-ccdb385617d1f77939d9b347a3dcc3d9.jpg";

/***/ }),
/* 336 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/whatson/stand_up_to_cancer_desktop-bcdccb5804f5a0d1ca1e1161197bda91.jpg";

/***/ }),
/* 337 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/whatson/stand_up_to_cancer_mobile-f693cbfb0ef8614ba4f7138c24197c82.jpg";

/***/ }),
/* 338 */
/***/ (function(module, exports) {

module.exports = "/packs/images/homepage/whatson/stand_up_to_cancer_retina-90fe54873642ef16e34657d865361b3a.jpg";

/***/ }),
/* 339 */
/***/ (function(module, exports) {

module.exports = "/packs/images/ku-loader-65c7bd844803875afb5ac61ef9db4150.gif";

/***/ }),
/* 340 */
/***/ (function(module, exports) {

module.exports = "/packs/images/map-close-19940718703fb3b33ac3f94867e9e69b.png";

/***/ }),
/* 341 */
/***/ (function(module, exports) {

module.exports = "/packs/images/map-pin-cac985d4055025fa5b3c98e5d7250870.png";

/***/ }),
/* 342 */
/***/ (function(module, exports) {

module.exports = "/packs/images/map-63b59b38e8fbaefd2bf295ad7df1037c.svg";

/***/ }),
/* 343 */
/***/ (function(module, exports) {

module.exports = "/packs/images/pages/boroughs/borough-activity-facility-filter-a92be3089845ff03cecd8b6d33724261.jpg";

/***/ }),
/* 344 */
/***/ (function(module, exports) {

module.exports = "/packs/images/pages/business_sectors/business-sector-hero-leisure-9899b5b7e506d1f99008c1bfc9aad327.jpg";

/***/ }),
/* 345 */
/***/ (function(module, exports) {

module.exports = "/packs/images/pages/content_hub/featured-article-f67b1f5b13b2922f77a639c03f30846d.jpg";

/***/ }),
/* 346 */
/***/ (function(module, exports) {

module.exports = "/packs/images/pages/content_hub/find-centre-bf953917d784ac347e86d10d7fc16399.jpg";

/***/ }),
/* 347 */
/***/ (function(module, exports) {

module.exports = "/packs/images/shadow-5914bfe37fe329198bda36e9a1de6232.png";

/***/ }),
/* 348 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/accessibility-47b749c7931b7ca0a2f8c26ceb4a81ab.svg";

/***/ }),
/* 349 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/arrows-60d2bf309a5f9e0ef39ff78934d23c28.png";

/***/ }),
/* 350 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/boroughs-4103862f78ba314211f3f9579158dcbc.png";

/***/ }),
/* 351 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/breadcrumbs-417902933f0735013d4b8ce4811ba6d7.png";

/***/ }),
/* 352 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/circular-ef01b168e39d612f6af84246bd4e2a66.png";

/***/ }),
/* 353 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/circular-3ba17dea3dd5dbf99329338b18233c4d.svg";

/***/ }),
/* 354 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/contact-a31f5993fb584dbf2ea9dfb7c37eecb0.png";

/***/ }),
/* 355 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/contact-f5c0befcfa98ce958ae0cdc12a8f2b65.svg";

/***/ }),
/* 356 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/cruk-9d4c5235ea19bf9ac780062851e1f9c3.png";

/***/ }),
/* 357 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/facilities-2d97fc1797898f54e258fbc20a2371e9.svg";

/***/ }),
/* 358 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/footer-58a8749d7f6e8bad98d8faeb118c7588.png";

/***/ }),
/* 359 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/footer_new-bc9d70500aac4c3782c3b4e581c8b58a.png";

/***/ }),
/* 360 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/footer_new_02-d9419610b2c7d5f95281f25ea1ba33e9.png";

/***/ }),
/* 361 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/general-ed1c4cd6c7036d9a4a1f5a2e60b8dc40.svg";

/***/ }),
/* 362 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/map-f104b9d7dd5784ac9e855270c32c9a30.png";

/***/ }),
/* 363 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/map-63b59b38e8fbaefd2bf295ad7df1037c.svg";

/***/ }),
/* 364 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/navigation-6309964995e77a04d5bb2a4d1a96bd32.png";

/***/ }),
/* 365 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/news-9e6151d142fb849d70ca50b426b2523f.png";

/***/ }),
/* 366 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/social-120aa5efaef57be9b404e59cd9da8aea.png";

/***/ }),
/* 367 */
/***/ (function(module, exports) {

module.exports = "/packs/images/sprites/social_enerprise_logo-00f5ee2210181e53d60d8f13e7340b3f.png";

/***/ }),
/* 368 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/accessibility/accessible_changing-b5613779e358d6f5f0012628894a0fe8.svg";

/***/ }),
/* 369 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/accessibility/accessible_parking-38b614f316851ad5307146b65f920333.svg";

/***/ }),
/* 370 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/accessibility/adapted_wheelchair-1d4452940890c2546ca546c6e0d95e9e.svg";

/***/ }),
/* 371 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/accessibility/disabled_toilets-c2a23299ebcbd242a2306ebeeeb6c5e6.svg";

/***/ }),
/* 372 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/accessibility/lift-1433c90877421e58d9a43a26529f887b.svg";

/***/ }),
/* 373 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/accessibility/poolside_facility-b0f41340ff4f77af294c87b7309c0e6e.svg";

/***/ }),
/* 374 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/accessibility/poolside_hoist-46af91f178f762b13f15f83f33ec3a76.svg";

/***/ }),
/* 375 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/accessibility/ramp-04f19907106f2707c3500488f1646bcb.svg";

/***/ }),
/* 376 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/alert-close-7bf4d52b78b12f3dce5b481eb044100a.svg";

/***/ }),
/* 377 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/alert-high-322b62885ec3a52c2abf311d8f984396.svg";

/***/ }),
/* 378 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/alert-low-d836764f89bcae671a8ff8b49780b763.svg";

/***/ }),
/* 379 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/alert-medium-a8f47e3214c906cdf5e8a96f13a80be2.svg";

/***/ }),
/* 380 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/arrow-down-e028ffebc6ff817d1174e8c463d7c309.svg";

/***/ }),
/* 381 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/arrow_apple-9db933bb28d64578d8bc77d03af63e93.svg";

/***/ }),
/* 382 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/arrow_left-a38fd9a79ecb3d8be32975b14f125b61.svg";

/***/ }),
/* 383 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/arrow_right-34fd7c1c7fafd2c5958d7cec79e59a99.svg";

/***/ }),
/* 384 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/arrow_white-1176670b273c5a03f59c9f8d2dd829d0.svg";

/***/ }),
/* 385 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/close-c846c97d20b04706275216e57da2947c.svg";

/***/ }),
/* 386 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/drop_down-19320dd5706b4cb42052c01a2b5d5e76.svg";

/***/ }),
/* 387 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/drop_down_gr-d074f7a6297c018f4396de9d47390478.svg";

/***/ }),
/* 388 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/badminton_court-a6b4385dde5e0a3dd01dc1ee938a4d33.svg";

/***/ }),
/* 389 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/bicycle-e83e4a975baa1f578231f6f18891322a.svg";

/***/ }),
/* 390 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/bowling-7403b2a2b67114f9b935ba983fcb5a4a.svg";

/***/ }),
/* 391 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/building_facilities-d42f688a7a2fdf35dff2e8201c3bf320.svg";

/***/ }),
/* 392 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/cafe-cf7b261ed9820092288388d0b8081244.svg";

/***/ }),
/* 393 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/calendar-54a191c789c4d718b4b47a63bf7ba229.svg";

/***/ }),
/* 394 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/camping-b3ca2be763f374837d2ca3a28e0bfc50.svg";

/***/ }),
/* 395 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/children_facilities-674642b6a19e567e73cbff6e88085db0.svg";

/***/ }),
/* 396 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/court-a0594f60a0bf940d30858818c97f75f4.svg";

/***/ }),
/* 397 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/day_pass-e9f4297d2cfdd0b8ed07ac7ce9e2953b.svg";

/***/ }),
/* 398 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/diving-413dc776358f82aaf94fbc827dc2570d.svg";

/***/ }),
/* 399 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/drop_in-a1ffea782c094e4672f4739806f198cc.svg";

/***/ }),
/* 400 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/e_resource-26310a46eac038e13c7dbefa3ef257ec.svg";

/***/ }),
/* 401 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/event_conference_room-b726cf19c1d8cc00a38e676c853c8da4.svg";

/***/ }),
/* 402 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/extreme-00a38300f14ac5d3c59efc369a60fde5.svg";

/***/ }),
/* 403 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/football_pitch-428bfbd4af62c60c66e4ff8e2224b6af.svg";

/***/ }),
/* 404 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/gift_shop-c131d979a5c274d038b9f3785dc96ee9.svg";

/***/ }),
/* 405 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/golf-10fb1d5c1d3ecd561c7232a980dd5dc3.svg";

/***/ }),
/* 406 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/gym-0c0d96efea85f0d8a2f014eb72d2c175.svg";

/***/ }),
/* 407 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/health_suite-335b7d904af331b1c400e12bbad72ebb.svg";

/***/ }),
/* 408 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/healthwise-9afbb93a46ccb6bcbf6847b3b4b70005.svg";

/***/ }),
/* 409 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/ice_rink-772bb89310b05334f590026339af4433.svg";

/***/ }),
/* 410 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/leisure_studio-d47d3b59db98433e842bb1c112a278e6.svg";

/***/ }),
/* 411 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/library-35f52e4bac4b988735c223c84b0444c1.svg";

/***/ }),
/* 412 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/outdoor_climbing-0da57b0250b07bd7018e4af5fc4b05d2.svg";

/***/ }),
/* 413 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/personal_trainer-879cda43b4d1613150730ee68c736d7f.svg";

/***/ }),
/* 414 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/physio_clinic_old-1e5fa4f7202dd6ffa1f1312e3a8d0014.svg";

/***/ }),
/* 415 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/physio_clinic_v2-1091da1e589a6a59c0329f192dbc2e65.svg";

/***/ }),
/* 416 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/pitches-df13032779d8044001a5f7064b17f71d.svg";

/***/ }),
/* 417 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/pool-50ce2e548b2dd397b4e0a5c495cc0927.svg";

/***/ }),
/* 418 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/prayer-room-5e0d0e11f1089f4dfabc65e3625c0f11.svg";

/***/ }),
/* 419 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/prayer_room-54378a1c134243b9463828beabf0d4f5.svg";

/***/ }),
/* 420 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/racquet_sports-607712655c6e9aeb57919f21204d7803.svg";

/***/ }),
/* 421 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/ski-2ac52b711a5cc9276a35b16227cf3813.svg";

/***/ }),
/* 422 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/softplay-c21302783ca7a0e3e1b682536de10f67.svg";

/***/ }),
/* 423 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/spa-c2428127b43aab9d0940003f36c4d4a6.svg";

/***/ }),
/* 424 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/sports-2fca937c26ac930945f645ff7cd3f0eb.svg";

/***/ }),
/* 425 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/tracks-ea315fabcf1e094650c8c4777c20df28.svg";

/***/ }),
/* 426 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/facilities/trampoline-d795b058acc3ac65acb93de5ee00391d.svg";

/***/ }),
/* 427 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/geolocation-1e54cd6f33e1a0c062c03cbd5a2e14a6.svg";

/***/ }),
/* 428 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/hamburger-7ecfc9f04e73f3dee675aca85cc4f833.svg";

/***/ }),
/* 429 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/homepage/get_involved_sprite-e6930891f2fe34627164ed23aeaeb1b8.svg";

/***/ }),
/* 430 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/info-244b183d9da0186e93eaeac505ab0aff.svg";

/***/ }),
/* 431 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/accessibility/accessible_changing-84c200786fc5afddab4b5028496ca417.svg";

/***/ }),
/* 432 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/accessibility/accessible_parking-28c642b6a4d2bb2508dbfdcffb163a5b.svg";

/***/ }),
/* 433 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/accessibility/adapted_wheelchair-21545e9f2d8348801ff54b7d8fd250af.svg";

/***/ }),
/* 434 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/accessibility/disabled_toilets-e1efcd838cc566fbaabe15971f8ed518.svg";

/***/ }),
/* 435 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/accessibility/lift-e08d71acec4ff5eac87d83488a7dc8b2.svg";

/***/ }),
/* 436 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/accessibility/poolside_facility-faeb6445f969ae252678aa7145952372.svg";

/***/ }),
/* 437 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/accessibility/poolside_hoist-fd69ba73e3a99edca289fb77eecb9dd8.svg";

/***/ }),
/* 438 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/accessibility/ramp-66d89b657a5ceaef24b9184be5a8ee82.svg";

/***/ }),
/* 439 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/badminton_court-813457fd132f008a6c0a3b2117bea2ca.svg";

/***/ }),
/* 440 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/bicycle-4944499fa5c15f6881c84ab6bb765ec0.svg";

/***/ }),
/* 441 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/bowling-0c027ac2ad8702e2bba0ed1ea66c5672.svg";

/***/ }),
/* 442 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/building_facilities-0febfd850c13d75f3df47ee1dad33a34.svg";

/***/ }),
/* 443 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/cafe-1e168c38b9b131e83b1003846db72cb7.svg";

/***/ }),
/* 444 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/calendar-b5a75dc33be4b35a0768b29b9d06624a.svg";

/***/ }),
/* 445 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/camping-08a4150100f053dfcc0f1e890e38be7d.svg";

/***/ }),
/* 446 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/children_facilities-0b8e36bb223d29d874934c577eaaa5d7.svg";

/***/ }),
/* 447 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/court-1d6cd79af3903d71c6cbc28dc7acecd1.svg";

/***/ }),
/* 448 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/day_pass-018d95ba91c80a8301be442e0fe39855.svg";

/***/ }),
/* 449 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/diving-7473f8793bfb92501c67ff8f6a10c27e.svg";

/***/ }),
/* 450 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/drop_in-6eb3353906e10db5022f7edd72312c89.svg";

/***/ }),
/* 451 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/e_resource-229838a300888cf58c477f6bf3666cdb.svg";

/***/ }),
/* 452 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/event_conference_room-3a718e2b9c24f5f541e4b037d0b25ebb.svg";

/***/ }),
/* 453 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/extreme-a91c037aa40e77f55c4c378c6e63281e.svg";

/***/ }),
/* 454 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/football_pitch-8f45d9160f9375a4ee3b1783d85db2f5.svg";

/***/ }),
/* 455 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/gift_shop-a668f85705dff11541cb1c418aeacbbb.svg";

/***/ }),
/* 456 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/golf-8890669e80616f6cdbb60c5976894fc6.svg";

/***/ }),
/* 457 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/gym-5a55016d197422aec53a2ee4d4b5bdf0.svg";

/***/ }),
/* 458 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/health_suite-83847b178532495a35028d06c57d7ef3.svg";

/***/ }),
/* 459 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/healthwise-38791bec4376070f6917b629a98838ed.svg";

/***/ }),
/* 460 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/ice_rink-7c2db1f8da7ce8f938f343e400404f6a.svg";

/***/ }),
/* 461 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/leisure_studio-ddbcb67164ba2f459e875349c721b938.svg";

/***/ }),
/* 462 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/library-e0fbd1ea0c2074d84f110a5e22e7ee97.svg";

/***/ }),
/* 463 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/outdoor_climbing-baed6e40b6814dc2a8ff679a2fabdb8e.svg";

/***/ }),
/* 464 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/personal_trainer-848047336bd732b83ed646443674167c.svg";

/***/ }),
/* 465 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/pitches-9a05c7ba5539bb1f4465172eded05e73.svg";

/***/ }),
/* 466 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/pool-ab59c0b2a9618dd5c59582ab8e980fdf.svg";

/***/ }),
/* 467 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/racquet_sports-a40033a07c14088093de3f54be3ad484.svg";

/***/ }),
/* 468 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/ski-baeeed70aea78bef74433bc51fe5e554.svg";

/***/ }),
/* 469 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/softplay-4a2f1692ef4d6318b7576cef391ab1c3.svg";

/***/ }),
/* 470 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/spa-1e5ca475c54b02a12ff8068b5e1fc06f.svg";

/***/ }),
/* 471 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/sports-90fecf86453bd81525737cdb9b78a449.svg";

/***/ }),
/* 472 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/tracks-aa8d01b695ad070f9f12eb6280ea92f2.svg";

/***/ }),
/* 473 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/ireland/facilities/trampoline-97ebf858fca552994ebcecacc1c2ffdf.svg";

/***/ }),
/* 474 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/logo-25ed1cf805b429c02e222a86f463a5b8.svg";

/***/ }),
/* 475 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/map-pin-white-56d55e642c54c7aae6fd1c9fdfcc2c52.svg";

/***/ }),
/* 476 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/map-pin-81a6e7ecaee5e5d2a011aab6153ad2ed.svg";

/***/ }),
/* 477 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/menu-fa94807d9aea966f4e4420758443fa05.svg";

/***/ }),
/* 478 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/move-left-50e86088104c2710b57b0b8931272031.svg";

/***/ }),
/* 479 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/move-right-a62235925ffd204126f4d638ee7bcf1b.svg";

/***/ }),
/* 480 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/search-3cf72b94c91187dc9ac82b3ea9b7badc.svg";

/***/ }),
/* 481 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/search_new-dd38fa2a46a8ecbb9b37137e2c73dbef.svg";

/***/ }),
/* 482 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/twitter-f43453f77c90e5abcaf773e020a8be41.svg";

/***/ }),
/* 483 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/weekly-prog/calendar-fad8319492b58483b7e93e29b8b742ac.svg";

/***/ }),
/* 484 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/weekly-prog/info-a62235925ffd204126f4d638ee7bcf1b.svg";

/***/ }),
/* 485 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/weekly-prog/loading-484f8bcb59050331f28ec35ae84c3ef0.svg";

/***/ }),
/* 486 */
/***/ (function(module, exports) {

module.exports = "/packs/images/svg/weekly-prog/print-f0ec49d5e8ba5d4da8052488d43301ff.svg";

/***/ })
/******/ ]);
//# sourceMappingURL=application-f36d02a84baad71463d7.js.map