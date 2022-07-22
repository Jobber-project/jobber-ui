(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('styled-components'), require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'styled-components', 'react', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["jobber-ui"] = {}, global.styled, global.React, global.reactDom));
})(this, (function (exports, styled, React, reactDom) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var React__namespace = /*#__PURE__*/_interopNamespace(React);

    var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    // prettier-ignore
    var reset = styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"], ["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"])));
    styled.createGlobalStyle(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["", ""])), reset);
    var templateObject_1, templateObject_2;

    const globalStyle = styled.css `
  ${reset}
  font-family: 'Roboto', sans-serif;

  body,
  input,
  button,
  textarea {
    font-family: 'Roboto', sans-serif;
  }
`;
    const GlobalStyle = styled.createGlobalStyle `
  ${globalStyle}
`;

    var jsxRuntime = {exports: {}};

    var reactJsxRuntime_production_min = {};

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
    	if (val === null || val === undefined) {
    		throw new TypeError('Object.assign cannot be called with null or undefined');
    	}

    	return Object(val);
    }

    function shouldUseNative() {
    	try {
    		if (!Object.assign) {
    			return false;
    		}

    		// Detect buggy property enumeration order in older V8 versions.

    		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
    		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
    		test1[5] = 'de';
    		if (Object.getOwnPropertyNames(test1)[0] === '5') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test2 = {};
    		for (var i = 0; i < 10; i++) {
    			test2['_' + String.fromCharCode(i)] = i;
    		}
    		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
    			return test2[n];
    		});
    		if (order2.join('') !== '0123456789') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test3 = {};
    		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
    			test3[letter] = letter;
    		});
    		if (Object.keys(Object.assign({}, test3)).join('') !==
    				'abcdefghijklmnopqrst') {
    			return false;
    		}

    		return true;
    	} catch (err) {
    		// We don't expect any of the above to throw, but better to be safe.
    		return false;
    	}
    }

    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    	var from;
    	var to = toObject(target);
    	var symbols;

    	for (var s = 1; s < arguments.length; s++) {
    		from = Object(arguments[s]);

    		for (var key in from) {
    			if (hasOwnProperty.call(from, key)) {
    				to[key] = from[key];
    			}
    		}

    		if (getOwnPropertySymbols) {
    			symbols = getOwnPropertySymbols(from);
    			for (var i = 0; i < symbols.length; i++) {
    				if (propIsEnumerable.call(from, symbols[i])) {
    					to[symbols[i]] = from[symbols[i]];
    				}
    			}
    		}
    	}

    	return to;
    };

    /** @license React v17.0.2
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var f=React__default["default"],g=60103;reactJsxRuntime_production_min.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");reactJsxRuntime_production_min.Fragment=h("react.fragment");}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
    function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

    var reactJsxRuntime_development = {};

    /** @license React v17.0.2
     * react-jsx-runtime.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    (function (exports) {

    if (process.env.NODE_ENV !== "production") {
      (function() {

    var React = React__default["default"];
    var _assign = objectAssign;

    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    exports.Fragment = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

    if (typeof Symbol === 'function' && Symbol.for) {
      var symbolFor = Symbol.for;
      REACT_ELEMENT_TYPE = symbolFor('react.element');
      REACT_PORTAL_TYPE = symbolFor('react.portal');
      exports.Fragment = symbolFor('react.fragment');
      REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
      REACT_PROFILER_TYPE = symbolFor('react.profiler');
      REACT_PROVIDER_TYPE = symbolFor('react.provider');
      REACT_CONTEXT_TYPE = symbolFor('react.context');
      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
      REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
      REACT_MEMO_TYPE = symbolFor('react.memo');
      REACT_LAZY_TYPE = symbolFor('react.lazy');
      REACT_BLOCK_TYPE = symbolFor('react.block');
      REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
      REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
      symbolFor('react.scope');
      symbolFor('react.opaque.id');
      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
      symbolFor('react.offscreen');
      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }

    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== 'object') {
        return null;
      }

      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }

      return null;
    }

    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

    function error(format) {
      {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        printWarning('error', format, args);
      }
    }

    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();

        if (stack !== '') {
          format += '%s';
          args = args.concat([stack]);
        }

        var argsWithFormat = args.map(function (item) {
          return '' + item;
        }); // Careful: RN currently depends on this prefix

        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging

        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    }

    // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

    var enableScopeAPI = false; // Experimental Create Event Handle API.

    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


      if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
        return true;
      }

      if (typeof type === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
          return true;
        }
      }

      return false;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    }

    function getContextName(type) {
      return type.displayName || 'Context';
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === 'number') {
          error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }

      if (typeof type === 'string') {
        return type;
      }

      switch (type) {
        case exports.Fragment:
          return 'Fragment';

        case REACT_PORTAL_TYPE:
          return 'Portal';

        case REACT_PROFILER_TYPE:
          return 'Profiler';

        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';

        case REACT_SUSPENSE_TYPE:
          return 'Suspense';

        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
      }

      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            var context = type;
            return getContextName(context) + '.Consumer';

          case REACT_PROVIDER_TYPE:
            var provider = type;
            return getContextName(provider._context) + '.Provider';

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');

          case REACT_MEMO_TYPE:
            return getComponentName(type.type);

          case REACT_BLOCK_TYPE:
            return getComponentName(type._render);

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                return getComponentName(init(payload));
              } catch (x) {
                return null;
              }
            }
        }
      }

      return null;
    }

    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;

    function disabledLog() {}

    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
      {
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        disabledDepth++;
      }
    }
    function reenableLogs() {
      {
        disabledDepth--;

        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          var props = {
            configurable: true,
            enumerable: true,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            log: _assign({}, props, {
              value: prevLog
            }),
            info: _assign({}, props, {
              value: prevInfo
            }),
            warn: _assign({}, props, {
              value: prevWarn
            }),
            error: _assign({}, props, {
              value: prevError
            }),
            group: _assign({}, props, {
              value: prevGroup
            }),
            groupCollapsed: _assign({}, props, {
              value: prevGroupCollapsed
            }),
            groupEnd: _assign({}, props, {
              value: prevGroupEnd
            })
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        if (disabledDepth < 0) {
          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
        }
      }
    }

    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
      {
        if (prefix === undefined) {
          // Extract the VM specific prefix used by each line.
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
          }
        } // We use the prefix to ensure our stacks line up with native stack frames.


        return '\n' + prefix + name;
      }
    }
    var reentry = false;
    var componentFrameCache;

    {
      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
      componentFrameCache = new PossiblyWeakMap();
    }

    function describeNativeComponentFrame(fn, construct) {
      // If something asked for a stack inside a fake render, it should get ignored.
      if (!fn || reentry) {
        return '';
      }

      {
        var frame = componentFrameCache.get(fn);

        if (frame !== undefined) {
          return frame;
        }
      }

      var control;
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

      Error.prepareStackTrace = undefined;
      var previousDispatcher;

      {
        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.

        ReactCurrentDispatcher.current = null;
        disableLogs();
      }

      try {
        // This should throw.
        if (construct) {
          // Something should be setting the props in the constructor.
          var Fake = function () {
            throw Error();
          }; // $FlowFixMe


          Object.defineProperty(Fake.prototype, 'props', {
            set: function () {
              // We use a throwing setter instead of frozen or non-writable props
              // because that won't throw in a non-strict mode function.
              throw Error();
            }
          });

          if (typeof Reflect === 'object' && Reflect.construct) {
            // We construct a different control for this case to include any extra
            // frames added by the construct call.
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              control = x;
            }

            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x) {
              control = x;
            }

            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            control = x;
          }

          fn();
        }
      } catch (sample) {
        // This is inlined manually because closure doesn't do it for us.
        if (sample && control && typeof sample.stack === 'string') {
          // This extracts the first frame from the sample that isn't also in the control.
          // Skipping one frame that we assume is the frame that calls the two.
          var sampleLines = sample.stack.split('\n');
          var controlLines = control.stack.split('\n');
          var s = sampleLines.length - 1;
          var c = controlLines.length - 1;

          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
            // We expect at least one stack frame to be shared.
            // Typically this will be the root most one. However, stack frames may be
            // cut off due to maximum stack limits. In this case, one maybe cut off
            // earlier than the other. We assume that the sample is longer or the same
            // and there for cut off earlier. So we should find the root most frame in
            // the sample somewhere in the control.
            c--;
          }

          for (; s >= 1 && c >= 0; s--, c--) {
            // Next we find the first one that isn't the same which should be the
            // frame that called our sample function and the control.
            if (sampleLines[s] !== controlLines[c]) {
              // In V8, the first line is describing the message but other VMs don't.
              // If we're about to return the first line, and the control is also on the same
              // line, that's a pretty good indicator that our sample threw at same line as
              // the control. I.e. before we entered the sample frame. So we ignore this result.
              // This can happen if you passed a class to function component, or non-function.
              if (s !== 1 || c !== 1) {
                do {
                  s--;
                  c--; // We may still have similar intermediate frames from the construct call.
                  // The next one that isn't the same should be our match though.

                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                    {
                      if (typeof fn === 'function') {
                        componentFrameCache.set(fn, _frame);
                      }
                    } // Return the line we found.


                    return _frame;
                  }
                } while (s >= 1 && c >= 0);
              }

              break;
            }
          }
        }
      } finally {
        reentry = false;

        {
          ReactCurrentDispatcher.current = previousDispatcher;
          reenableLogs();
        }

        Error.prepareStackTrace = previousPrepareStackTrace;
      } // Fallback to just using the name if we couldn't make it throw.


      var name = fn ? fn.displayName || fn.name : '';
      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

      {
        if (typeof fn === 'function') {
          componentFrameCache.set(fn, syntheticFrame);
        }
      }

      return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
      {
        return describeNativeComponentFrame(fn, false);
      }
    }

    function shouldConstruct(Component) {
      var prototype = Component.prototype;
      return !!(prototype && prototype.isReactComponent);
    }

    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

      if (type == null) {
        return '';
      }

      if (typeof type === 'function') {
        {
          return describeNativeComponentFrame(type, shouldConstruct(type));
        }
      }

      if (typeof type === 'string') {
        return describeBuiltInComponentFrame(type);
      }

      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame('Suspense');

        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame('SuspenseList');
      }

      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);

          case REACT_MEMO_TYPE:
            // Memo may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

          case REACT_BLOCK_TYPE:
            return describeFunctionComponentFrame(type._render);

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                // Lazy may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {}
            }
        }
      }

      return '';
    }

    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

    function setCurrentlyValidatingElement(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame.setExtraStackFrame(null);
        }
      }
    }

    function checkPropTypes(typeSpecs, values, location, componentName, element) {
      {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(Object.prototype.hasOwnProperty);

        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.

            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                err.name = 'Invariant Violation';
                throw err;
              }

              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
              error$1 = ex;
            }

            if (error$1 && !(error$1 instanceof Error)) {
              setCurrentlyValidatingElement(element);

              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

              setCurrentlyValidatingElement(null);
            }

            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error$1.message] = true;
              setCurrentlyValidatingElement(element);

              error('Failed %s type: %s', location, error$1.message);

              setCurrentlyValidatingElement(null);
            }
          }
        }
      }
    }

    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    var didWarnAboutStringRefs;

    {
      didWarnAboutStringRefs = {};
    }

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }

      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }

      return config.key !== undefined;
    }

    function warnIfStringRefCannotBeAutoConverted(config, self) {
      {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
          var componentName = getComponentName(ReactCurrentOwner.current.type);

          if (!didWarnAboutStringRefs[componentName]) {
            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }
    }

    function defineKeyPropWarningGetter(props, displayName) {
      {
        var warnAboutAccessingKey = function () {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;

            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        };

        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
    }

    function defineRefPropWarningGetter(props, displayName) {
      {
        var warnAboutAccessingRef = function () {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;

            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        };

        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */


    var ReactElement = function (type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };

      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.

        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });

        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }

      return element;
    };
    /**
     * https://github.com/reactjs/rfcs/pull/107
     * @param {*} type
     * @param {object} props
     * @param {string} key
     */

    function jsxDEV(type, config, maybeKey, source, self) {
      {
        var propName; // Reserved names are extracted

        var props = {};
        var key = null;
        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
        // but as an intermediary step, we will use jsxDEV for everything except
        // <div {...props} key="Hi" />, because we aren't currently able to tell if
        // key is explicitly declared to be undefined or not.

        if (maybeKey !== undefined) {
          key = '' + maybeKey;
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        if (hasValidRef(config)) {
          ref = config.ref;
          warnIfStringRefCannotBeAutoConverted(config, self);
        } // Remaining properties are added to a new props object


        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        } // Resolve default props


        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;

          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }

        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }

          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }

        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }
    }

    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

    function setCurrentlyValidatingElement$1(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
        }
      }
    }

    var propTypesMisspellWarningShown;

    {
      propTypesMisspellWarningShown = false;
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */

    function isValidElement(object) {
      {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
    }

    function getDeclarationErrorAddendum() {
      {
        if (ReactCurrentOwner$1.current) {
          var name = getComponentName(ReactCurrentOwner$1.current.type);

          if (name) {
            return '\n\nCheck the render method of `' + name + '`.';
          }
        }

        return '';
      }
    }

    function getSourceInfoErrorAddendum(source) {
      {
        if (source !== undefined) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }

        return '';
      }
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */


    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      {
        var info = getDeclarationErrorAddendum();

        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

          if (parentName) {
            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
          }
        }

        return info;
      }
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */


    function validateExplicitKey(element, parentType) {
      {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }

        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }

        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.

        var childOwner = '';

        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
          // Give the component that originally created this child.
          childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        }

        setCurrentlyValidatingElement$1(element);

        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

        setCurrentlyValidatingElement$1(null);
      }
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */


    function validateChildKeys(node, parentType) {
      {
        if (typeof node !== 'object') {
          return;
        }

        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];

            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);

          if (typeof iteratorFn === 'function') {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;

              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */


    function validatePropTypes(element) {
      {
        var type = element.type;

        if (type === null || type === undefined || typeof type === 'string') {
          return;
        }

        var propTypes;

        if (typeof type === 'function') {
          propTypes = type.propTypes;
        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }

        if (propTypes) {
          // Intentionally inside to avoid triggering lazy initializers:
          var name = getComponentName(type);
          checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

          var _name = getComponentName(type);

          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }

        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */


    function validateFragmentProps(fragment) {
      {
        var keys = Object.keys(fragment.props);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];

          if (key !== 'children' && key !== 'key') {
            setCurrentlyValidatingElement$1(fragment);

            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

            setCurrentlyValidatingElement$1(null);
            break;
          }
        }

        if (fragment.ref !== null) {
          setCurrentlyValidatingElement$1(fragment);

          error('Invalid attribute `ref` supplied to `React.Fragment`.');

          setCurrentlyValidatingElement$1(null);
        }
      }
    }

    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
      {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.

        if (!validType) {
          var info = '';

          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
          }

          var sourceInfo = getSourceInfoErrorAddendum(source);

          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }

          var typeString;

          if (type === null) {
            typeString = 'null';
          } else if (Array.isArray(type)) {
            typeString = 'array';
          } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
            typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
            info = ' Did you accidentally export a JSX literal instead of a component?';
          } else {
            typeString = typeof type;
          }

          error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
        }

        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.

        if (element == null) {
          return element;
        } // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)


        if (validType) {
          var children = props.children;

          if (children !== undefined) {
            if (isStaticChildren) {
              if (Array.isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                  validateChildKeys(children[i], type);
                }

                if (Object.freeze) {
                  Object.freeze(children);
                }
              } else {
                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
              }
            } else {
              validateChildKeys(children, type);
            }
          }
        }

        if (type === exports.Fragment) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }

        return element;
      }
    } // These two functions exist to still get child warnings in dev
    // even with the prod transform. This means that jsxDEV is purely
    // opt-in behavior for better messages but that we won't stop
    // giving you warnings if you use production apis.

    function jsxWithValidationStatic(type, props, key) {
      {
        return jsxWithValidation(type, props, key, true);
      }
    }
    function jsxWithValidationDynamic(type, props, key) {
      {
        return jsxWithValidation(type, props, key, false);
      }
    }

    var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
    // for now we can ship identical prod functions

    var jsxs =  jsxWithValidationStatic ;

    exports.jsx = jsx;
    exports.jsxs = jsxs;
      })();
    }
    }(reactJsxRuntime_development));

    if (process.env.NODE_ENV === 'production') {
      jsxRuntime.exports = reactJsxRuntime_production_min;
    } else {
      jsxRuntime.exports = reactJsxRuntime_development;
    }

    // https://chir.ag/projects/name-that-color/#6B53FF
    const COLORS = {
        havelockBlue: '#5971dd',
        electricViolet: '#8d49f7',
        cornflowerBlue: '#6b53ff',
        royalBlue: '#586EE0',
        mischa: '#dddfe5',
        emerald: '#41c879',
        yellowOrange: '#fda146',
        carnation: '#fb5255',
        supernova: '#ffc600',
        sunshade: '#ff9e2c',
        persianIndigo: '#371789',
        silverChalice: '#a9a9a9',
        alabster: '#f9f9f9',
        charade: '#2b2a35',
        white: '#ffffff',
        black: '#000000',
        razzleDazzleRose: '#F22CCD',
        wildStrawberry: '#FF4591',
        salmon: '#FF8761',
        selago: '#F5F6FD',
        linkWater: '#EBEEFB',
        governorBay: '#3A52BF',
        primaryGradient: `linear-gradient(90deg, #8d49f7, #5971dd)`,
        secondaryGradient: `linear-gradient(90deg, #ffc600, #ff9e2c)`,
    };

    const animation = styled.keyframes `
  0% {
    transform: rotate(0deg);
  }
  
  0% {
    transform: rotate(-360deg);
  }
`;
    const Container$6 = styled__default["default"].span `
  z-index: 1;
  position: relative;
  display: inline-block;
`;
    const Circle$1 = styled__default["default"].circle `
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;
    const BackgroundCircle = styled__default["default"](Circle$1) `
  opacity: 0.2;
`;
    const ForegroundCircle = styled__default["default"](Circle$1) `
  transform: none;
  animation: ${animation} 1.25s infinite linear;
`;
    function getDerivedSize(size) {
        switch (size) {
            case 'large':
                return 100;
            case 'small':
                return 25;
            case 'medium':
            default:
                return 50;
        }
    }
    function getStrokeWidth(size) {
        switch (size) {
            case 'large':
                return 10;
            case 'small':
                return 2.5;
            case 'medium':
            default:
                return 5;
        }
    }
    const Spinner = ({ size = 'medium', color = COLORS.emerald, className, children, }) => {
        const derivedSize = getDerivedSize(size);
        const strokeWidth = getStrokeWidth(size);
        const radius = derivedSize / 2 - strokeWidth;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (25 / 100) * circumference;
        return (jsxRuntime.exports.jsxs(Container$6, Object.assign({ className: className }, { children: [jsxRuntime.exports.jsxs("svg", Object.assign({ width: derivedSize - strokeWidth, height: derivedSize - strokeWidth }, { children: [jsxRuntime.exports.jsx(BackgroundCircle, { stroke: color, strokeWidth: strokeWidth, fill: "transparent", strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: circumference - 1 * circumference, r: radius, cx: radius + strokeWidth / 2, cy: radius + strokeWidth / 2 }, void 0), jsxRuntime.exports.jsx(ForegroundCircle, { stroke: color, strokeWidth: strokeWidth, fill: "transparent", strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: offset, strokeLinecap: "round", r: radius, cx: radius + strokeWidth / 2, cy: radius + strokeWidth / 2 }, void 0)] }), void 0), children] }), void 0));
    };

    function getIconSize$2({ $size }) {
        switch ($size) {
            case 'large':
                return 24;
            case 'medium':
            default:
                return 20;
        }
    }
    function getBackgroundColor({ $variant, }) {
        switch ($variant) {
            case 'primary':
                return COLORS.primaryGradient;
            case 'secondary':
                return COLORS.secondaryGradient;
            case 'success':
                return COLORS.emerald;
            case 'warning':
                return COLORS.yellowOrange;
            case 'error':
                return COLORS.carnation;
            case 'coach':
                return COLORS.royalBlue;
            default:
                return COLORS.white;
        }
    }
    function getTextColor({ $variant, $outlined, }) {
        switch ($variant) {
            case 'secondary':
                return $outlined ? COLORS.sunshade : COLORS.persianIndigo;
            case 'primary':
                return $outlined ? COLORS.electricViolet : COLORS.white;
            case 'success':
                return $outlined ? COLORS.emerald : COLORS.white;
            case 'warning':
                return $outlined ? COLORS.yellowOrange : COLORS.white;
            case 'error':
                return $outlined ? COLORS.carnation : COLORS.white;
            case 'coach':
                return $outlined ? COLORS.royalBlue : COLORS.white;
            case 'default':
            default:
                return COLORS.charade;
        }
    }
    function getSpinnerColor({ $variant, $outlined, $spinnerColor, }) {
        return $spinnerColor !== null && $spinnerColor !== void 0 ? $spinnerColor : getTextColor({ $variant, $outlined });
    }
    function getIconColor$1({ $variant, $outlined, }) {
        switch ($variant) {
            case 'secondary':
                return $outlined ? COLORS.sunshade : COLORS.persianIndigo;
            case 'primary':
                return $outlined ? COLORS.electricViolet : COLORS.white;
            case 'coach':
                return $outlined ? COLORS.royalBlue : COLORS.white;
            case 'default':
            default:
                return COLORS.mischa;
        }
    }
    function getIconLeftPosition({ $size }) {
        switch ($size) {
            case 'large':
                return 24;
            case 'medium':
            default:
                return 20;
        }
    }
    function getIconFluidStyling({ $size, fluid, }) {
        if (!fluid)
            return `padding-right: 8px;`;
        return `
    position: absolute;
    left: ${getIconLeftPosition({ $size })}px;
  `;
    }
    const IconWrapper$2 = styled__default["default"].div `
  line-height: 0;
  z-index: 2;
  pointer-events: none;

  ${getIconFluidStyling}
  color: ${getIconColor$1};

  & svg {
    width: ${getIconSize$2}px;
    height: ${getIconSize$2}px;
  }
`;
    const InnerWrapper = styled__default["default"].span `
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
    const ChildrenWrapper = styled__default["default"].span `
  z-index: 2;
  color: ${getTextColor};
  ${props => props.$loading && 'opacity: 0;'}
`;
    const StyledSpinner = styled__default["default"](Spinner).attrs(props => ({
        color: getSpinnerColor(props),
    })) `
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
    function getOutlinedStyles({ $outlined }) {
        return ($outlined &&
            `
    display: flex;
    z-index: 1;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 1px;
      right: 1px;
      bottom: 1px;
      left: 1px;
      border-radius: 7px;
      
      background: white;
      pointer-events: none;
    }
    &:hover {
      &::before {
        top: 2px;
        right: 2px;
        bottom: 2px;
        left: 2px;
        border-radius: 6px;
      }
    }
    `);
    }
    function getFilledHoverStyles({ $variant, $outlined, $loading, }) {
        if ($outlined || $loading)
            return '';
        if ($variant === 'coach')
            return `
      &:hover {
        background-color: ${COLORS.havelockBlue};
      }
    `;
        return `
    overflow: hidden;
    z-index: 1;

    &:after {
      background: ${COLORS.white};
      content: '';
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: -10;
    }
    &:hover {
      &:after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  `;
    }
    function getSizes({ $size }) {
        if ($size === 'small')
            return `
      font-size: 16px;
      line-height: 21px;
      height: 40px;
      padding: 8px 16px;
    `;
        if ($size === 'large')
            return `
      font-size: 18px;
      line-height: 21px;
      height: 53px;
      padding: 16px 24px;
    `;
        return `
    font-size: 16px;
    line-height: 21px;
    height: 40px;
    padding: 8px 16px;
  `;
    }
    function getIconStyles({ $size, icon, }) {
        if (!icon)
            return '';
        if ($size === 'small')
            return `
      z-index: 1;
      padding-left: 16px;
    `;
        if ($size === 'large')
            return `
    z-index: 1;
    padding-left: 24px;
    `;
        return `
    z-index: 1;
    padding-left: 16px;
  `;
    }
    function getDisabledStyle({ disabled, $loading, }) {
        if ($loading) {
            return `
      cursor: not-allowed! important;
    `;
        }
        return disabled
            ? `
    background: ${COLORS.alabster};
    color: ${COLORS.silverChalice};
    border: 1px solid ${COLORS.mischa};
    cursor: not-allowed! important;
  `
            : '';
    }
    function getBorderStyle({ $outlined, $variant, }) {
        switch ($variant) {
            case 'default':
                return $outlined
                    ? `
        border: 1px solid ${COLORS.mischa};
      `
                    : '';
            default:
                return '';
        }
    }
    const ButtonContainer = styled__default["default"].button `
  cursor: pointer;
  position: relative;
  display: flex;

  ${props => props.fluid && 'width: 100%'};
  align-items: center;
  justify-content: center;
  appearance: none;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  border: none;
  box-sizing: border-box;
  text-decoration: none;

  background: ${getBackgroundColor};

  color: ${getTextColor};

  ${getSizes}

  ${getIconStyles};

  ${getOutlinedStyles};

  ${getFilledHoverStyles};

  ${getBorderStyle};

  ${getDisabledStyle};
`;
    const Button = React.forwardRef(({ variant = 'default', type = 'button', onClick, size = 'medium', className, outlined = false, disabled = false, fluid = false, loading = false, icon = null, spinnerColor, href, as, target, download, children, }, ref) => {
        // Styled-components TS as prop workaround
        const Component = ButtonContainer;
        const isLink = as === 'a';
        return (jsxRuntime.exports.jsx("div", { children: jsxRuntime.exports.jsxs(Component, Object.assign({ ref: ref, className: className, "$variant": variant, type: isLink ? undefined : type, onClick: onClick, "$size": size, "$outlined": outlined, disabled: disabled, icon: !!icon, fluid: fluid, "$loading": loading, href: isLink ? href : undefined, download: isLink ? download : undefined, as: as, target: isLink ? target : undefined }, { children: [!!icon && (jsxRuntime.exports.jsx(IconWrapper$2, Object.assign({ "$outlined": outlined, "$variant": variant, "$size": size, fluid: fluid }, { children: icon }), `${variant}-icon-wrapper`)), jsxRuntime.exports.jsx(ChildrenWrapper, Object.assign({ "$outlined": outlined, "$variant": variant, "$size": size, "$loading": loading }, { children: children }), `${variant}-children-wrapper`), loading && (jsxRuntime.exports.jsx(InnerWrapper, { children: jsxRuntime.exports.jsx(StyledSpinner, { "$variant": variant, "$outlined": outlined, "$spinnerColor": spinnerColor, size: "small" }, void 0) }, void 0))] }), void 0) }, void 0));
    });
    Button.displayName = 'Button';

    function getBackground({ $disabled }) {
        return $disabled ? COLORS.alabster : COLORS.white;
    }
    function getStroke({ $disabled, $variant, }) {
        switch ($variant) {
            case 'primary':
                return COLORS.white;
            case 'error':
                return COLORS.carnation;
            case 'default':
            default:
                return $disabled ? COLORS.silverChalice : COLORS.black;
        }
    }
    function getCheckedBackground$1({ $disabled, $variant, }) {
        switch ($variant) {
            case 'primary':
                return $disabled ? COLORS.primaryGradient : undefined;
            case 'default':
            default:
                return undefined;
        }
    }
    function getBorderColor$1({ $variant }) {
        switch ($variant) {
            case 'error':
                return COLORS.carnation;
            case 'primary':
            case 'default':
            default:
                return COLORS.mischa;
        }
    }
    function getLabelColor$1({ $disabled, $variant, }) {
        switch ($variant) {
            case 'error':
                return COLORS.carnation;
            case 'primary':
            case 'default':
            default:
                return $disabled ? COLORS.silverChalice : COLORS.black;
        }
    }
    function getFocusedBorderColor({ $variant }) {
        switch ($variant) {
            case 'default':
            case 'primary':
                return COLORS.havelockBlue;
            default:
                return false;
        }
    }
    const Container$5 = styled__default["default"].label `
  display: inline-flex;
  flex-direction: ${props => (props.$flipped ? 'row-reverse' : 'row')};
  align-items: center;
  cursor: ${props => (props.$disabled ? 'default' : 'pointer')};
`;
    const Square = styled__default["default"].span `
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;
    const Input$2 = styled__default["default"].input `
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  appearance: none;
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;
  height: 100%;
  cursor: ${props => (props.$disabled ? 'default' : 'pointer')};

  ${props => props.$variant === 'default' &&
    `
    &:hover:not(:disabled) + span {
      border-color: ${getFocusedBorderColor(props)};  
    }
  `}

  &:focus + span {
    border-color: ${getFocusedBorderColor};
  }

  &:checked + span {
    background: ${getCheckedBackground$1};

    ${props => props.$variant === 'primary' &&
    props.$disabled &&
    `
      border-width: 0;
      opacity: 0.5;
    `}
  }

  ${props => props.$variant === 'primary' &&
    `
      &:hover + span::before,
      &:focus + span::before {
        transform: scale(0.95);
      }
    `}

  &:checked + span::before {
    visibility: hidden;
  }

  &:checked ~ svg {
    opacity: 1;
    transform: none;
  }
`;
    const Svg = styled__default["default"].svg `
  z-index: 1;
  position: relative;
  opacity: 0;
  transform: scale(0.5);
  transition: transform 120ms ease;
  pointer-events: none;
`;
    const Checkmark = styled__default["default"].path `
  stroke: ${getStroke};
`;
    const SquareBorder = styled__default["default"].span `
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid ${getBorderColor$1};
  border-radius: 4px;
  background: ${getBackground};

  ${props => props.$variant === 'primary' &&
    !props.$disabled &&
    `
    border-width: 0;
    background: ${COLORS.primaryGradient};
  `}

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    border-radius: 3px;
    background: ${getBackground};
    transition: transform 120ms ease-out;
  }
`;
    const Text$2 = styled__default["default"].span `
  display: block;
  margin-right: ${props => (props.$flipped ? 8 : 0)}px;
  margin-left: ${props => (props.$flipped ? 0 : 8)}px;
  font-size: 12px;
  line-height: 1.667em;
  font-family: Roboto, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${getLabelColor$1};
`;
    const Checkbox = ({ required, disabled = false, defaultChecked, checked, flipped = false, value, variant = 'default', id, name, className, label, onChange, }, ref) => {
        function getDerivedId() {
            if (id)
                return id;
            if (label && name)
                return name;
            if (typeof label === 'string')
                return label;
            return Math.random().toString();
        }
        function getDerivedDefaultChecked() {
            if (typeof value === 'string' && value.length > 0) {
                return value === 'on';
            }
            return defaultChecked;
        }
        function getDerivedChecked() {
            if (typeof value === 'string' && value.length > 0) {
                return value === 'on';
            }
            return checked;
        }
        const derivedId = getDerivedId();
        const derivedDefaultChecked = getDerivedDefaultChecked();
        const derivedChecked = getDerivedChecked();
        return (jsxRuntime.exports.jsxs(Container$5, Object.assign({ "$disabled": disabled, "$flipped": flipped, className: className, as: label ? undefined : 'span' }, (label ? { htmlFor: derivedId } : {}), { children: [jsxRuntime.exports.jsxs(Square, { children: [jsxRuntime.exports.jsx(Input$2, { ref: ref, "$disabled": disabled, "$variant": variant, required: required, disabled: disabled, defaultChecked: derivedDefaultChecked, checked: derivedChecked, value: value, type: "checkbox", id: derivedId, name: name, onChange: onChange }, void 0), jsxRuntime.exports.jsx(SquareBorder, { "$disabled": disabled, "$variant": variant }, void 0), jsxRuntime.exports.jsx(Svg, Object.assign({ width: "13", height: "10", viewBox: "0 0 13 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.exports.jsx(Checkmark, { "$disabled": disabled, "$variant": variant, d: "M1.3335 4.99996L4.66683 8.33329L11.3335 1.66663", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, void 0) }), void 0)] }, void 0), !!label && (jsxRuntime.exports.jsx(Text$2, Object.assign({ "$disabled": disabled, "$flipped": flipped, "$variant": variant }, { children: label }), void 0))] }), void 0));
    };
    const ForwardedCheckbox = React.forwardRef(Checkbox);

    function getCheckedBackground({ $variant, }) {
        switch ($variant) {
            case 'primary':
                return COLORS.white;
            case 'error':
                return COLORS.carnation;
            case 'default':
            default:
                return COLORS.charade;
        }
    }
    function getBorderColor({ $variant, }) {
        switch ($variant) {
            case 'error':
                return COLORS.carnation;
            case 'primary':
            case 'default':
            default:
                return COLORS.mischa;
        }
    }
    function getOutlerCircleBackground({ $variant, }) {
        switch ($variant) {
            case 'primary':
                return COLORS.primaryGradient;
            case 'default':
            default:
                return COLORS.white;
        }
    }
    function getInnerCircleBackgroundColor({ $variant, }) {
        switch ($variant) {
            case 'primary':
                return COLORS.white;
            case 'error':
                return undefined;
            case 'default':
            default:
                return undefined;
        }
    }
    function getLabelColor({ $disabled, $variant, }) {
        switch ($variant) {
            case 'error':
                return COLORS.carnation;
            case 'primary':
            case 'default':
            default:
                return $disabled ? COLORS.silverChalice : COLORS.black;
        }
    }
    const Container$4 = styled__default["default"].label `
  display: inline-flex;
  align-items: center;
  cursor: ${props => (props.$disabled ? 'default' : 'pointer')};
`;
    const OuterCircle = styled__default["default"].span `
  z-index: 1;
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${getOutlerCircleBackground};

  ${props => props.$variant === 'primary' &&
    `
    opacity: ${props.$disabled ? 0.5 : 1};
  `}
`;
    const InnerCircle = styled__default["default"].span `
  z-index: 1;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border: 1px solid ${getBorderColor};
  border-radius: 50%;
  background-color: ${getInnerCircleBackgroundColor};
  transition: transform 120ms ease-out;

  ${props => props.$variant === 'primary' &&
    `
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    border-width: 0;
  `}

  &::before {
    content: '';
    z-index: 1;
    position: absolute;
    top: 6px;
    right: 6px;
    bottom: 6px;
    left: 6px;
    border-radius: 50%;
    opacity: 0;
    background-color: ${getCheckedBackground};
    transform: scale(0.25);
    transition: transform 120ms ease;
  }
`;
    const Input$1 = styled__default["default"].input `
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  appearance: none;
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;
  height: 100%;
  cursor: ${props => (props.$disabled ? 'default' : 'pointer')};

  &:checked + span::before {
    opacity: 1;
    transform: none;
  }

  ${props => props.$variant === 'default' &&
    `
    &:hover:not(:disabled):not(:checked) + span,
    &:focus:not(:disabled):not(:checked) + span {
      border-color: ${COLORS.havelockBlue};
    }
  `}

  ${props => props.$variant === 'primary' &&
    `
      &:hover:not(:disabled):not(:checked) + span,
      &:focus:not(:disabled):not(:checked) + span {
        transform: scale(0.95);
      }

      &:checked + span {
        background-color: transparent;
      }
  `}
`;
    const Text$1 = styled__default["default"].span `
  display: block;
  margin-left: 8px;
  font-size: 12px;
  line-height: 1.667em;
  font-family: Roboto, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${getLabelColor};
`;
    const RadioButton = ({ required, disabled = false, defaultChecked, checked, variant = 'default', id, name, label, value, className, onChange, }, ref) => {
        function getDerivedId() {
            if (id)
                return id;
            if (label && name)
                return name;
            if (typeof label === 'string')
                return label;
            return Math.random().toString();
        }
        const derivedId = getDerivedId();
        return (jsxRuntime.exports.jsxs(Container$4, Object.assign({ "$disabled": disabled, className: className, as: label ? undefined : 'span' }, (label ? { htmlFor: derivedId } : {}), { children: [jsxRuntime.exports.jsxs(OuterCircle, Object.assign({ "$disabled": disabled, "$variant": variant }, { children: [jsxRuntime.exports.jsx(Input$1, { ref: ref, "$disabled": disabled, "$variant": variant, required: required, disabled: disabled, defaultChecked: defaultChecked, checked: checked, type: "radio", id: derivedId, name: name, value: value, onChange: onChange }, void 0), jsxRuntime.exports.jsx(InnerCircle, { "$variant": variant }, void 0)] }), void 0), !!label && (jsxRuntime.exports.jsx(Text$1, Object.assign({ "$disabled": disabled, "$variant": variant }, { children: label }), void 0))] }), void 0));
    };
    const ForwardedRadioButton = React.forwardRef(RadioButton);

    var _path$a, _circle$3, _path2$a;

    function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

    var SvgCircleCheck = function SvgCircleCheck(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$f({
        xmlns: "http://www.w3.org/2000/svg",
        className: "circle-check_svg__icon circle-check_svg__icon-tabler circle-check_svg__icon-tabler-circle-check",
        width: 24,
        height: 24,
        strokeWidth: 2,
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), _path$a || (_path$a = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z",
        stroke: "none"
      })), _circle$3 || (_circle$3 = /*#__PURE__*/React__namespace.createElement("circle", {
        cx: 12,
        cy: 12,
        r: 9
      })), _path2$a || (_path2$a = /*#__PURE__*/React__namespace.createElement("path", {
        d: "m9 12 2 2 4-4"
      })));
    };

    var _path$9, _path2$9;

    function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

    var SvgAlertTriangle = function SvgAlertTriangle(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$e({
        xmlns: "http://www.w3.org/2000/svg",
        className: "alert-triangle_svg__icon alert-triangle_svg__icon-tabler alert-triangle_svg__icon-tabler-alert-triangle",
        width: 24,
        height: 24,
        strokeWidth: 2,
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), _path$9 || (_path$9 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z",
        stroke: "none"
      })), _path2$9 || (_path2$9 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M12 9v2m0 4v.01M5 19h14a2 2 0 0 0 1.84-2.75L13.74 4a2 2 0 0 0-3.5 0l-7.1 12.25A2 2 0 0 0 4.89 19"
      })));
    };

    var _path$8, _circle$2, _path2$8;

    function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

    var SvgCircleX = function SvgCircleX(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$d({
        xmlns: "http://www.w3.org/2000/svg",
        className: "circle-x_svg__icon circle-x_svg__icon-tabler circle-x_svg__icon-tabler-circle-x",
        width: 24,
        height: 24,
        strokeWidth: 2,
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), _path$8 || (_path$8 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z",
        stroke: "none"
      })), _circle$2 || (_circle$2 = /*#__PURE__*/React__namespace.createElement("circle", {
        cx: 12,
        cy: 12,
        r: 9
      })), _path2$8 || (_path2$8 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "m10 10 4 4m0-4-4 4"
      })));
    };

    var _path$7, _rect, _path2$7;

    function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

    var SvgMail = function SvgMail(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$c({
        xmlns: "http://www.w3.org/2000/svg",
        className: "mail_svg__icon mail_svg__icon-tabler mail_svg__icon-tabler-mail",
        width: 24,
        height: 24,
        strokeWidth: 2,
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), _path$7 || (_path$7 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z",
        stroke: "none"
      })), _rect || (_rect = /*#__PURE__*/React__namespace.createElement("rect", {
        x: 3,
        y: 5,
        width: 18,
        height: 14,
        rx: 2
      })), _path2$7 || (_path2$7 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "m3 7 9 6 9-6"
      })));
    };

    var _path$6, _circle$1, _path2$6;

    function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

    var SvgSearch = function SvgSearch(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$b({
        xmlns: "http://www.w3.org/2000/svg",
        className: "search_svg__icon search_svg__icon-tabler search_svg__icon-tabler-search",
        width: 24,
        height: 24,
        strokeWidth: 2,
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), _path$6 || (_path$6 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z",
        stroke: "none"
      })), _circle$1 || (_circle$1 = /*#__PURE__*/React__namespace.createElement("circle", {
        cx: 10,
        cy: 10,
        r: 7
      })), _path2$6 || (_path2$6 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "m21 21-6-6"
      })));
    };

    function usePrevious(value) {
        const ref = React.useRef(value);
        React.useEffect(() => {
            ref.current = value;
        }, [value]);
        return ref.current;
    }

    const animateIcon = styled.keyframes `
  0% {
    transform: scale(0.25);
    opacity: 0;
  }

  100% {
    tansform: none;
    opacity: 1;
  }
`;
    const animateHelperText = styled.keyframes `
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
    function getVariantColor({ $variant }) {
        switch ($variant) {
            case 'success':
                return COLORS.emerald;
            case 'warning':
                return COLORS.yellowOrange;
            case 'error':
                return COLORS.carnation;
            case 'default':
            default:
                return COLORS.mischa;
        }
    }
    function getIconColor({ $variant }) {
        switch ($variant) {
            case 'success':
                return COLORS.emerald;
            case 'warning':
                return COLORS.yellowOrange;
            case 'error':
                return COLORS.carnation;
            case 'default':
            default:
                return COLORS.black;
        }
    }
    function getIconSize$1({ $size }) {
        switch ($size) {
            case 'large':
                return 24;
            case 'medium':
            default:
                return 20;
        }
    }
    function getIconRight({ $size, $iconAlign, }) {
        switch ($iconAlign) {
            case 'right': {
                switch ($size) {
                    case 'large':
                        return 24;
                    case 'medium':
                    default:
                        return 16;
                }
            }
            case 'left':
            default:
                return 0;
        }
    }
    function getIconLeft({ $size, $iconAlign, }) {
        switch ($iconAlign) {
            case 'right':
                return 0;
            case 'left':
            default:
                switch ($size) {
                    case 'large':
                        return 24;
                    case 'medium':
                    default:
                        return 16;
                }
        }
    }
    function getPadding({ $size }) {
        switch ($size) {
            case 'large':
                return '16px 24px';
            case 'medium':
            default:
                return '8px 16px';
        }
    }
    function getPaddingRight({ $size, $iconAlign, }) {
        switch ($iconAlign) {
            case 'right':
                return getIconSize$1({ $size }) + getIconRight({ $size, $iconAlign }) * 1.5;
            case 'left':
            default:
                switch ($size) {
                    case 'large':
                        return 24;
                    case 'medium':
                    default:
                        return 16;
                }
        }
    }
    function getPaddingLeft({ $size, $iconAlign, }) {
        switch ($iconAlign) {
            case 'right':
                switch ($size) {
                    case 'large':
                        return 24;
                    case 'medium':
                    default:
                        return 16;
                }
            case 'left':
            default:
                return getIconSize$1({ $size }) + getIconLeft({ $size, $iconAlign }) * 1.5;
        }
    }
    function getInputHeight({ $size }) {
        switch ($size) {
            case 'large':
                return 56;
            case 'medium':
            default:
                return 40;
        }
    }
    function getInputFontSize({ $size }) {
        switch ($size) {
            case 'large':
                return 18;
            case 'medium':
            default:
                return 16;
        }
    }
    function getInputLineHeight({ $size }) {
        switch ($size) {
            case 'large':
                return 1.1667; // 21px
            case 'medium':
            default:
                return 1.1875; // 19px
        }
    }
    function getFocusBorderColor({ $variant }) {
        switch ($variant) {
            case 'default':
                return COLORS.havelockBlue;
            default:
                return false;
        }
    }
    const Container$3 = styled__default["default"].div `
  display: flex;
  flex-direction: column;
`;
    const Label = styled__default["default"].label `
  display: block;
  margin-bottom: 3px;
  font-size: 12px;
  line-height: 1.667em;
  font-family: Roboto, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
`;
    const InputWrapper = styled__default["default"].div `
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`;
    const Input = styled__default["default"].input `
  display: flex;
  align-items: center;
  height: ${getInputHeight}px;
  margin: 0;
  padding: ${getPadding};
  box-sizing: border-box;
  border: 1px solid ${getVariantColor};
  border-radius: 8px;
  background-color: ${COLORS.white};
  color: ${COLORS.charade};
  transition: border-color 140ms ease-in;

  ${props => props.$icon &&
    `
      padding-right: ${getPaddingRight(props)}px;
      padding-left: ${getPaddingLeft(props)}px;
    `}

  &:focus {
    outline: none;
    border-color: ${getFocusBorderColor};
  }

  &:disabled {
    cursor: default;
    background-color: ${COLORS.alabster};
  }

  ${props => props.$variant === 'default' &&
    `
    &:placeholder-shown + div {
      color: ${COLORS.silverChalice};
    }
  `}

  &,
  &::placeholder {
    font-size: ${getInputFontSize}px;
    line-height: ${getInputLineHeight}em;
    font-weight: 400;
  }

  &::placeholder {
    color: ${COLORS.silverChalice};
  }

  &::-webkit-search-decoration {
    display: none;
  }
`;
    const IconWrapper$1 = styled__default["default"].div `
  z-index: 1;
  position: absolute;
  top: 0;
  right: ${props => {
    const right = getIconRight(props);
    return right ? `${right}px` : 'auto';
}};
  bottom: 0;
  left: ${props => {
    const left = getIconLeft(props);
    return left ? `${left}px` : 'auto';
}};
  display: flex;
  align-items: center;
  color: ${getIconColor};
  transition: color 280ms ease;

  ${props => props.$animate &&
    styled.css `
      animation: ${animateIcon} 280ms ease;
    `}

  & svg {
    width: ${getIconSize$1}px;
    height: ${getIconSize$1}px;
  }
`;
    const HelperText = styled__default["default"].span `
  display: block;
  padding-top: 5px;
  font-size: 10px;
  line-height: 1.172em;
  color: ${getVariantColor};
  transition: color 280ms ease;

  ${props => props.$animate &&
    styled.css `
      animation: ${animateHelperText} 280ms ease;
    `}
`;
    const TextField = ({ required, disabled, autoFocus, variant = 'default', id, name, type = 'text', className, size = 'medium', label, value, placeholder, helperText, ariaLabel, iconAlign, icon, onChange, }, ref) => {
        const prevVariant = usePrevious(variant);
        const [shouldAnimate, setShouldAnimate] = React.useState(false);
        function getDerivedIcon() {
            switch (variant) {
                case 'success':
                    return jsxRuntime.exports.jsx(SvgCircleCheck, { viewBox: "0 0 24 24" }, void 0);
                case 'warning':
                    return jsxRuntime.exports.jsx(SvgAlertTriangle, { viewBox: "0 0 24 24" }, void 0);
                case 'error':
                    return jsxRuntime.exports.jsx(SvgCircleX, { viewBox: "0 0 24 24" }, void 0);
                case 'default':
                default: {
                    if (icon)
                        return icon;
                    if (type === 'email')
                        return jsxRuntime.exports.jsx(SvgMail, { viewBox: "0 0 24 24" }, void 0);
                    if (type === 'search')
                        return jsxRuntime.exports.jsx(SvgSearch, { viewBox: "0 0 24 24" }, void 0);
                    return undefined;
                }
            }
        }
        function getDerivedId() {
            if (id)
                return id;
            if (label && name)
                return name;
            if (label)
                return label;
            return Math.random().toString();
        }
        function getDerivedIconAlign() {
            if (type === 'email' && !icon)
                return 'right';
            return variant === 'default' ? iconAlign : 'right';
        }
        function handleAnimationEnd() {
            if (shouldAnimate)
                setShouldAnimate(false);
        }
        React.useEffect(() => {
            if (variant !== prevVariant && !shouldAnimate) {
                setShouldAnimate(true);
            }
        }, [variant, prevVariant, shouldAnimate]);
        const derivedId = getDerivedId();
        const derivedIcon = getDerivedIcon();
        const derivedIconAlign = getDerivedIconAlign();
        return (jsxRuntime.exports.jsxs(Container$3, Object.assign({ "$variant": variant, "$disabled": disabled, "$size": size, className: className }, { children: [!!label && jsxRuntime.exports.jsx(Label, Object.assign({ htmlFor: derivedId }, { children: label }), void 0), jsxRuntime.exports.jsxs(InputWrapper, { children: [jsxRuntime.exports.jsx(Input, { ref: ref, "$icon": !!derivedIcon, "$variant": variant, "$size": size, "$iconAlign": derivedIconAlign, required: required, disabled: disabled, autoFocus: autoFocus, type: type, id: derivedId, name: name, value: value, placeholder: placeholder, "aria-label": ariaLabel, onChange: onChange }, void 0), !!derivedIcon && (jsxRuntime.exports.jsx(IconWrapper$1, Object.assign({ "$animate": shouldAnimate, "$variant": variant, "$size": size, "$iconAlign": derivedIconAlign, onAnimationEnd: handleAnimationEnd }, { children: derivedIcon }), variant))] }, void 0), !!helperText && (jsxRuntime.exports.jsx(HelperText, Object.assign({ "$animate": shouldAnimate, "$variant": variant, onAnimationEnd: handleAnimationEnd }, { children: helperText }), void 0))] }), void 0));
    };
    const ForwardedTextField = React.forwardRef(TextField);

    var _path$5, _path2$5, _circle;

    function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

    var SvgCamera = function SvgCamera(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$a({
        xmlns: "http://www.w3.org/2000/svg",
        className: "camera_svg__icon camera_svg__icon-tabler camera_svg__icon-tabler-camera",
        width: 24,
        height: 24,
        strokeWidth: 2,
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), _path$5 || (_path$5 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z",
        stroke: "none"
      })), _path2$5 || (_path2$5 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M5 7h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"
      })), _circle || (_circle = /*#__PURE__*/React__namespace.createElement("circle", {
        cx: 12,
        cy: 13,
        r: 3
      })));
    };

    const getTextSize = ({ size }) => {
        switch (size) {
            case 'small':
                return 16;
            case 'medium':
                return 20;
            case 'large':
                return 36;
            case 'xlarge':
                return 72;
            default:
                return 20;
        }
    };
    const getIcon$1 = (icon) => {
        switch (icon) {
            case 'camera':
            default:
                return jsxRuntime.exports.jsx(SvgCamera, { height: "16px", width: "16", viewBox: "0 0 24 24" }, void 0);
        }
    };
    const getIconSize = ({ size }) => {
        switch (size) {
            case 'small':
            case 'medium':
            case 'large':
            case 'xlarge':
            default:
                return 20;
        }
    };
    const getCircleSize = ({ size }) => {
        switch (size) {
            case 'small':
                return 32;
            case 'medium':
                return 40;
            case 'large':
                return 72;
            case 'xlarge':
                return 144;
            default:
                return 40;
        }
    };
    const getColorFromId = ({ id, $disabled }) => {
        if ($disabled)
            return COLORS.mischa;
        const firstValueFromId = (id === null || id === void 0 ? void 0 : id.substring(0, 1)) || id;
        const generatedNumber = firstValueFromId === null || firstValueFromId === void 0 ? void 0 : firstValueFromId.charCodeAt(0);
        const colorNumber = generatedNumber % 4;
        switch (colorNumber) {
            case 0:
                return `${COLORS.razzleDazzleRose}`;
            case 1:
                return `${COLORS.cornflowerBlue}`;
            case 2:
                return `${COLORS.wildStrawberry}`;
            case 3:
                return `${COLORS.salmon}`;
            default:
                return `${COLORS.mischa}`;
        }
    };
    const AvatarWrapper = styled__default["default"].div `
  position: relative;
`;
    const Circle = styled__default["default"].div `
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: ${getCircleSize}px;
  height: ${getCircleSize}px;
  border-radius: 50%;
  background-color: ${getColorFromId};
`;
    const Image = styled__default["default"].img `
  width: 100%;
  height: 100%;
`;
    const Text = styled__default["default"].p `
  margin: 0;
  font-size: ${getTextSize}px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  color: ${props => props.id || props.$disabled ? COLORS.white : COLORS.charade};
`;
    const ButtonWrapper = styled__default["default"].button `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
    const IconWrapper = styled__default["default"].div `
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  width: ${getIconSize}px;
  height: ${getIconSize}px;
  border: 1px solid ${COLORS.mischa};
`;
    const Icon = ({ icon, onClick, size }) => {
        return (jsxRuntime.exports.jsx(ButtonWrapper, Object.assign({ onClick: onClick }, { children: jsxRuntime.exports.jsx(IconWrapper, Object.assign({ size: size }, { children: getIcon$1(icon) }), void 0) }), void 0));
    };
    const Avatar = ({ src, name = 'N N', id, size, className, disabled = false, onClick, icon, }) => {
        const initials = name
            .toUpperCase()
            .split(' ')
            .slice(0, 2)
            .map(n => n[0])
            .join('');
        return (jsxRuntime.exports.jsxs(AvatarWrapper, { children: [jsxRuntime.exports.jsx(Circle, Object.assign({ size: size, id: id, className: className, "$disabled": disabled }, { children: src ? (jsxRuntime.exports.jsx(Image, { src: src, alt: 'Avatar' }, void 0)) : (jsxRuntime.exports.jsx(Text, Object.assign({ "$disabled": disabled, id: id, size: size }, { children: initials }), void 0)) }), void 0), icon && size === 'large' && (jsxRuntime.exports.jsx(Icon, { size: size, onClick: onClick, icon: icon }, void 0))] }, void 0));
    };

    var _path$4, _path2$4;

    function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

    var SvgChevronUp = function SvgChevronUp(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$9({
        xmlns: "http://www.w3.org/2000/svg",
        className: "chevron-up_svg__icon chevron-up_svg__icon-tabler chevron-up_svg__icon-tabler-chevron-up",
        width: 24,
        height: 24,
        strokeWidth: 2,
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), _path$4 || (_path$4 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z",
        stroke: "none"
      })), _path2$4 || (_path2$4 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "m6 15 6-6 6 6"
      })));
    };

    var _path$3, _path2$3;

    function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

    var SvgChevronRight = function SvgChevronRight(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$8({
        xmlns: "http://www.w3.org/2000/svg",
        className: "chevron-right_svg__icon chevron-right_svg__icon-tabler chevron-right_svg__icon-tabler-chevron-right",
        width: 24,
        height: 24,
        strokeWidth: 2,
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), _path$3 || (_path$3 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z",
        stroke: "none"
      })), _path2$3 || (_path2$3 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "m9 6 6 6-6 6"
      })));
    };

    var _path$2, _path2$2;

    function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

    var SvgChevronDown = function SvgChevronDown(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$7({
        xmlns: "http://www.w3.org/2000/svg",
        className: "chevron-down_svg__icon chevron-down_svg__icon-tabler chevron-down_svg__icon-tabler-chevron-down",
        width: 24,
        height: 24,
        strokeWidth: 2,
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z",
        stroke: "none"
      })), _path2$2 || (_path2$2 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "m6 9 6 6 6-6"
      })));
    };

    var _path$1, _path2$1;

    function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

    var SvgChevronLeft = function SvgChevronLeft(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$6({
        xmlns: "http://www.w3.org/2000/svg",
        className: "chevron-left_svg__icon chevron-left_svg__icon-tabler chevron-left_svg__icon-tabler-chevron-left",
        width: 24,
        height: 24,
        strokeWidth: 2,
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z",
        stroke: "none"
      })), _path2$1 || (_path2$1 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "m15 6-6 6 6 6"
      })));
    };

    const Container$2 = styled__default["default"].div `
  width: ${props => (props.$vertical ? 42 : 89)}px;
  height: ${props => (props.$vertical ? 89 : 42)}px;
  background-color: ${COLORS.white};
  border-radius: 21px;
`;
    const Pill = styled__default["default"].div `
  display: flex;
  flex-direction: ${props => (props.$vertical ? 'column' : 'row')};
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 21px;
`;
    const PillHalf = styled__default["default"].button `
  appearance: none;
  border: none;
  margin: 0;
  padding: 0;
  border-radius: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.$vertical ? '100%' : '44px')};
  height: ${props => (props.$vertical ? '44px' : '100%')};
  color: ${COLORS.white};
  background: linear-gradient(
    ${props => (props.$vertical ? 90 : 0)}deg,
    ${COLORS.cornflowerBlue},
    ${COLORS.electricViolet}
  );

  &:first-child {
    border-top-left-radius: 21px;
    ${props => props.$vertical
    ? `
    border-top-right-radius: 21px;
    `
    : `
    border-bottom-left-radius: 21px;
    `}
  }

  &:last-child {
    border-bottom-right-radius: 21px;
    ${props => props.$vertical
    ? `
    border-bottom-left-radius: 21px;
    `
    : `
    border-top-right-radius: 21px;
    `}
  }

  & svg {
    transform: scale(0.83);
  }
`;
    const HiddenText = styled__default["default"].span `
  z-index: -1;
  position: absolute;
  color: transparent;
  user-select: none;
`;
    const Horizontal = ({ className, onLeftButtonClick, onRightButtonClick, }) => {
        return (jsxRuntime.exports.jsx(Container$2, Object.assign({ className: className }, { children: jsxRuntime.exports.jsxs(Pill, { children: [jsxRuntime.exports.jsxs(PillHalf, Object.assign({ type: "button", "aria-label": "Left", onClick: onLeftButtonClick }, { children: [jsxRuntime.exports.jsx(SvgChevronLeft, {}, void 0), jsxRuntime.exports.jsx(HiddenText, { children: "Left" }, void 0)] }), void 0), jsxRuntime.exports.jsxs(PillHalf, Object.assign({ type: "button", "aria-label": "Right", onClick: onRightButtonClick }, { children: [jsxRuntime.exports.jsx(SvgChevronRight, {}, void 0), jsxRuntime.exports.jsx(HiddenText, { children: "Right" }, void 0)] }), void 0)] }, void 0) }), void 0));
    };
    const Vertical = ({ className, onTopButtonClick, onBottomButtonClick, }) => {
        return (jsxRuntime.exports.jsx(Container$2, Object.assign({ "$vertical": true, className: className }, { children: jsxRuntime.exports.jsxs(Pill, Object.assign({ "$vertical": true }, { children: [jsxRuntime.exports.jsxs(PillHalf, Object.assign({ "$vertical": true, type: "button", "aria-label": "Up", onClick: onTopButtonClick }, { children: [jsxRuntime.exports.jsx(SvgChevronUp, {}, void 0), jsxRuntime.exports.jsx(HiddenText, { children: "Up" }, void 0)] }), void 0), jsxRuntime.exports.jsxs(PillHalf, Object.assign({ "$vertical": true, type: "button", "aria-label": "Down", onClick: onBottomButtonClick }, { children: [jsxRuntime.exports.jsx(SvgChevronDown, {}, void 0), jsxRuntime.exports.jsx(HiddenText, { children: "Down" }, void 0)] }), void 0)] }), void 0) }), void 0));
    };

    var Switcher = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Horizontal: Horizontal,
        Vertical: Vertical
    });

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

    function _arrayLikeToArray$1(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
    }

    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }

    function _unsupportedIterableToArray$1(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
    }

    function _arrayWithHoles$1(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArrayLimit$1(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

      if (_i == null) return;
      var _arr = [];
      var _n = true;
      var _d = false;

      var _s, _e;

      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _nonIterableRest$1() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _slicedToArray$1(arr, i) {
      return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
    }

    function _typeof(obj) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, _typeof(obj);
    }

    var classnames = {exports: {}};

    /*!
      Copyright (c) 2018 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */

    (function (module) {
    /* global define */

    (function () {

    	var hasOwn = {}.hasOwnProperty;

    	function classNames() {
    		var classes = [];

    		for (var i = 0; i < arguments.length; i++) {
    			var arg = arguments[i];
    			if (!arg) continue;

    			var argType = typeof arg;

    			if (argType === 'string' || argType === 'number') {
    				classes.push(arg);
    			} else if (Array.isArray(arg)) {
    				if (arg.length) {
    					var inner = classNames.apply(null, arg);
    					if (inner) {
    						classes.push(inner);
    					}
    				}
    			} else if (argType === 'object') {
    				if (arg.toString === Object.prototype.toString) {
    					for (var key in arg) {
    						if (hasOwn.call(arg, key) && arg[key]) {
    							classes.push(key);
    						}
    					}
    				} else {
    					classes.push(arg.toString());
    				}
    			}
    		}

    		return classes.join(' ');
    	}

    	if (module.exports) {
    		classNames.default = classNames;
    		module.exports = classNames;
    	} else {
    		window.classNames = classNames;
    	}
    }());
    }(classnames));

    var classNames = classnames.exports;

    //

    var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

      if (ret !== void 0) {
        return !!ret;
      }

      if (objA === objB) {
        return true;
      }

      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }

      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);

      if (keysA.length !== keysB.length) {
        return false;
      }

      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

      // Test for A's keys different from B.
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];

        if (!bHasOwnProperty(key)) {
          return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if (ret === false || (ret === void 0 && valueA !== valueB)) {
          return false;
        }
      }

      return true;
    };

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

      if (_i == null) return;
      var _arr = [];
      var _n = true;
      var _d = false;

      var _s, _e;

      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function useEvent(callback) {
      var fnRef = React__namespace.useRef();
      fnRef.current = callback;
      var memoFn = React__namespace.useCallback(function () {
        var _fnRef$current;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
      }, []);
      return memoFn;
    }

    function canUseDom() {
      return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    }

    /**
     * Wrap `React.useLayoutEffect` which will not throw warning message in test env
     */

    var useLayoutEffect = process.env.NODE_ENV !== 'test' && canUseDom() ? React__namespace.useLayoutEffect : React__namespace.useEffect;

    /**
     * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
     * We do not make this auto is to avoid real memory leak.
     * Developer should confirm it's safe to ignore themselves.
     */

    function useSafeState(defaultValue) {
      var destroyRef = React__namespace.useRef(false);

      var _React$useState = React__namespace.useState(defaultValue),
          _React$useState2 = _slicedToArray(_React$useState, 2),
          value = _React$useState2[0],
          setValue = _React$useState2[1];

      React__namespace.useEffect(function () {
        destroyRef.current = false;
        return function () {
          destroyRef.current = true;
        };
      }, []);

      function safeSetState(updater, ignoreDestroy) {
        if (ignoreDestroy && destroyRef.current) {
          return;
        }

        setValue(updater);
      }

      return [value, safeSetState];
    }

    var Source;

    (function (Source) {
      Source[Source["INNER"] = 0] = "INNER";
      Source[Source["PROP"] = 1] = "PROP";
    })(Source || (Source = {}));

    var useUpdateEffect = function useUpdateEffect(callback, deps) {
      var firstMountRef = React__namespace.useRef(true);
      useLayoutEffect(function () {
        if (!firstMountRef.current) {
          return callback();
        }
      }, deps); // We tell react that first mount has passed

      useLayoutEffect(function () {
        firstMountRef.current = false;
        return function () {
          firstMountRef.current = true;
        };
      }, []);
    };
    /** We only think `undefined` is empty */


    function hasValue(value) {
      return value !== undefined;
    }
    /**
     * Similar to `useState` but will use props value if provided.
     * Note that internal use rc-util `useState` hook.
     */


    function useMergedState(defaultStateValue, option) {
      var _ref = option || {},
          defaultValue = _ref.defaultValue,
          value = _ref.value,
          onChange = _ref.onChange,
          postState = _ref.postState; // ======================= Init =======================


      var _useState = useSafeState(function () {
        var finalValue = undefined;
        var source;

        if (hasValue(value)) {
          finalValue = value;
          source = Source.PROP;
        } else if (hasValue(defaultValue)) {
          finalValue = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
          source = Source.PROP;
        } else {
          finalValue = typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
          source = Source.INNER;
        }

        return [finalValue, source, finalValue];
      }),
          _useState2 = _slicedToArray(_useState, 2),
          mergedValue = _useState2[0],
          setMergedValue = _useState2[1];

      var chosenValue = hasValue(value) ? value : mergedValue[0];
      var postMergedValue = postState ? postState(chosenValue) : chosenValue; // ======================= Sync =======================

      useUpdateEffect(function () {
        setMergedValue(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 1),
              prevValue = _ref3[0];

          return [value, Source.PROP, prevValue];
        });
      }, [value]); // ====================== Update ======================

      var changeEventPrevRef = React__namespace.useRef();
      var triggerChange = useEvent(function (updater, ignoreDestroy) {
        setMergedValue(function (prev) {
          var _prev = _slicedToArray(prev, 3),
              prevValue = _prev[0],
              prevSource = _prev[1],
              prevPrevValue = _prev[2];

          var nextValue = typeof updater === 'function' ? updater(prevValue) : updater; // Do nothing if value not change

          if (nextValue === prevValue) {
            return prev;
          } // Use prev prev value if is in a batch update to avoid missing data


          var overridePrevValue = prevSource === Source.INNER && changeEventPrevRef.current !== prevPrevValue ? prevPrevValue : prevValue;
          return [nextValue, Source.INNER, overridePrevValue];
        }, ignoreDestroy);
      }); // ====================== Change ======================

      var onChangeFn = useEvent(onChange);
      useLayoutEffect(function () {
        var _mergedValue = _slicedToArray(mergedValue, 3),
            current = _mergedValue[0],
            source = _mergedValue[1],
            prev = _mergedValue[2];

        if (current !== prev && source === Source.INNER) {
          onChangeFn(current, prev);
          changeEventPrevRef.current = prev;
        }
      }, [mergedValue]);
      return [postMergedValue, triggerChange];
    }

    function _extends$5() {
      _extends$5 = Object.assign ? Object.assign.bind() : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };
      return _extends$5.apply(this, arguments);
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }

      return target;
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }

      return target;
    }

    /**
     * @ignore
     * some key-codes definition and utils from closure-library
     * @author yiminghe@gmail.com
     */
    var KeyCode = {
      /**
       * MAC_ENTER
       */
      MAC_ENTER: 3,

      /**
       * BACKSPACE
       */
      BACKSPACE: 8,

      /**
       * TAB
       */
      TAB: 9,

      /**
       * NUMLOCK on FF/Safari Mac
       */
      NUM_CENTER: 12,

      /**
       * ENTER
       */
      ENTER: 13,

      /**
       * SHIFT
       */
      SHIFT: 16,

      /**
       * CTRL
       */
      CTRL: 17,

      /**
       * ALT
       */
      ALT: 18,

      /**
       * PAUSE
       */
      PAUSE: 19,

      /**
       * CAPS_LOCK
       */
      CAPS_LOCK: 20,

      /**
       * ESC
       */
      ESC: 27,

      /**
       * SPACE
       */
      SPACE: 32,

      /**
       * PAGE_UP
       */
      PAGE_UP: 33,

      /**
       * PAGE_DOWN
       */
      PAGE_DOWN: 34,

      /**
       * END
       */
      END: 35,

      /**
       * HOME
       */
      HOME: 36,

      /**
       * LEFT
       */
      LEFT: 37,

      /**
       * UP
       */
      UP: 38,

      /**
       * RIGHT
       */
      RIGHT: 39,

      /**
       * DOWN
       */
      DOWN: 40,

      /**
       * PRINT_SCREEN
       */
      PRINT_SCREEN: 44,

      /**
       * INSERT
       */
      INSERT: 45,

      /**
       * DELETE
       */
      DELETE: 46,

      /**
       * ZERO
       */
      ZERO: 48,

      /**
       * ONE
       */
      ONE: 49,

      /**
       * TWO
       */
      TWO: 50,

      /**
       * THREE
       */
      THREE: 51,

      /**
       * FOUR
       */
      FOUR: 52,

      /**
       * FIVE
       */
      FIVE: 53,

      /**
       * SIX
       */
      SIX: 54,

      /**
       * SEVEN
       */
      SEVEN: 55,

      /**
       * EIGHT
       */
      EIGHT: 56,

      /**
       * NINE
       */
      NINE: 57,

      /**
       * QUESTION_MARK
       */
      QUESTION_MARK: 63,

      /**
       * A
       */
      A: 65,

      /**
       * B
       */
      B: 66,

      /**
       * C
       */
      C: 67,

      /**
       * D
       */
      D: 68,

      /**
       * E
       */
      E: 69,

      /**
       * F
       */
      F: 70,

      /**
       * G
       */
      G: 71,

      /**
       * H
       */
      H: 72,

      /**
       * I
       */
      I: 73,

      /**
       * J
       */
      J: 74,

      /**
       * K
       */
      K: 75,

      /**
       * L
       */
      L: 76,

      /**
       * M
       */
      M: 77,

      /**
       * N
       */
      N: 78,

      /**
       * O
       */
      O: 79,

      /**
       * P
       */
      P: 80,

      /**
       * Q
       */
      Q: 81,

      /**
       * R
       */
      R: 82,

      /**
       * S
       */
      S: 83,

      /**
       * T
       */
      T: 84,

      /**
       * U
       */
      U: 85,

      /**
       * V
       */
      V: 86,

      /**
       * W
       */
      W: 87,

      /**
       * X
       */
      X: 88,

      /**
       * Y
       */
      Y: 89,

      /**
       * Z
       */
      Z: 90,

      /**
       * META
       */
      META: 91,

      /**
       * WIN_KEY_RIGHT
       */
      WIN_KEY_RIGHT: 92,

      /**
       * CONTEXT_MENU
       */
      CONTEXT_MENU: 93,

      /**
       * NUM_ZERO
       */
      NUM_ZERO: 96,

      /**
       * NUM_ONE
       */
      NUM_ONE: 97,

      /**
       * NUM_TWO
       */
      NUM_TWO: 98,

      /**
       * NUM_THREE
       */
      NUM_THREE: 99,

      /**
       * NUM_FOUR
       */
      NUM_FOUR: 100,

      /**
       * NUM_FIVE
       */
      NUM_FIVE: 101,

      /**
       * NUM_SIX
       */
      NUM_SIX: 102,

      /**
       * NUM_SEVEN
       */
      NUM_SEVEN: 103,

      /**
       * NUM_EIGHT
       */
      NUM_EIGHT: 104,

      /**
       * NUM_NINE
       */
      NUM_NINE: 105,

      /**
       * NUM_MULTIPLY
       */
      NUM_MULTIPLY: 106,

      /**
       * NUM_PLUS
       */
      NUM_PLUS: 107,

      /**
       * NUM_MINUS
       */
      NUM_MINUS: 109,

      /**
       * NUM_PERIOD
       */
      NUM_PERIOD: 110,

      /**
       * NUM_DIVISION
       */
      NUM_DIVISION: 111,

      /**
       * F1
       */
      F1: 112,

      /**
       * F2
       */
      F2: 113,

      /**
       * F3
       */
      F3: 114,

      /**
       * F4
       */
      F4: 115,

      /**
       * F5
       */
      F5: 116,

      /**
       * F6
       */
      F6: 117,

      /**
       * F7
       */
      F7: 118,

      /**
       * F8
       */
      F8: 119,

      /**
       * F9
       */
      F9: 120,

      /**
       * F10
       */
      F10: 121,

      /**
       * F11
       */
      F11: 122,

      /**
       * F12
       */
      F12: 123,

      /**
       * NUMLOCK
       */
      NUMLOCK: 144,

      /**
       * SEMICOLON
       */
      SEMICOLON: 186,

      /**
       * DASH
       */
      DASH: 189,

      /**
       * EQUALS
       */
      EQUALS: 187,

      /**
       * COMMA
       */
      COMMA: 188,

      /**
       * PERIOD
       */
      PERIOD: 190,

      /**
       * SLASH
       */
      SLASH: 191,

      /**
       * APOSTROPHE
       */
      APOSTROPHE: 192,

      /**
       * SINGLE_QUOTE
       */
      SINGLE_QUOTE: 222,

      /**
       * OPEN_SQUARE_BRACKET
       */
      OPEN_SQUARE_BRACKET: 219,

      /**
       * BACKSLASH
       */
      BACKSLASH: 220,

      /**
       * CLOSE_SQUARE_BRACKET
       */
      CLOSE_SQUARE_BRACKET: 221,

      /**
       * WIN_KEY
       */
      WIN_KEY: 224,

      /**
       * MAC_FF_META
       */
      MAC_FF_META: 224,

      /**
       * WIN_IME
       */
      WIN_IME: 229,
      // ======================== Function ========================

      /**
       * whether text and modified key is entered at the same time.
       */
      isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
        var keyCode = e.keyCode;

        if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
        keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
          return false;
        } // The following keys are quite harmless, even in combination with
        // CTRL, ALT or SHIFT.


        switch (keyCode) {
          case KeyCode.ALT:
          case KeyCode.CAPS_LOCK:
          case KeyCode.CONTEXT_MENU:
          case KeyCode.CTRL:
          case KeyCode.DOWN:
          case KeyCode.END:
          case KeyCode.ESC:
          case KeyCode.HOME:
          case KeyCode.INSERT:
          case KeyCode.LEFT:
          case KeyCode.MAC_FF_META:
          case KeyCode.META:
          case KeyCode.NUMLOCK:
          case KeyCode.NUM_CENTER:
          case KeyCode.PAGE_DOWN:
          case KeyCode.PAGE_UP:
          case KeyCode.PAUSE:
          case KeyCode.PRINT_SCREEN:
          case KeyCode.RIGHT:
          case KeyCode.SHIFT:
          case KeyCode.UP:
          case KeyCode.WIN_KEY:
          case KeyCode.WIN_KEY_RIGHT:
            return false;

          default:
            return true;
        }
      },

      /**
       * whether character is entered.
       */
      isCharacterKey: function isCharacterKey(keyCode) {
        if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
          return true;
        }

        if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
          return true;
        }

        if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
          return true;
        } // Safari sends zero key code for non-latin characters.


        if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
          return true;
        }

        switch (keyCode) {
          case KeyCode.SPACE:
          case KeyCode.QUESTION_MARK:
          case KeyCode.NUM_PLUS:
          case KeyCode.NUM_MINUS:
          case KeyCode.NUM_PERIOD:
          case KeyCode.NUM_DIVISION:
          case KeyCode.SEMICOLON:
          case KeyCode.DASH:
          case KeyCode.EQUALS:
          case KeyCode.COMMA:
          case KeyCode.PERIOD:
          case KeyCode.SLASH:
          case KeyCode.APOSTROPHE:
          case KeyCode.SINGLE_QUOTE:
          case KeyCode.OPEN_SQUARE_BRACKET:
          case KeyCode.BACKSLASH:
          case KeyCode.CLOSE_SQUARE_BRACKET:
            return true;

          default:
            return false;
        }
      }
    };

    var SliderContext = /*#__PURE__*/React__namespace.createContext({
      min: 0,
      max: 0,
      direction: 'ltr',
      step: 1,
      includedStart: 0,
      includedEnd: 0,
      tabIndex: 0
    });

    function getOffset(value, min, max) {
      return (value - min) / (max - min);
    }
    function getDirectionStyle(direction, value, min, max) {
      var offset = getOffset(value, min, max);
      var positionStyle = {};

      switch (direction) {
        case 'rtl':
          positionStyle.right = "".concat(offset * 100, "%");
          positionStyle.transform = 'translateX(50%)';
          break;

        case 'btt':
          positionStyle.bottom = "".concat(offset * 100, "%");
          positionStyle.transform = 'translateY(50%)';
          break;

        case 'ttb':
          positionStyle.top = "".concat(offset * 100, "%");
          positionStyle.transform = 'translateY(-50%)';
          break;

        default:
          positionStyle.left = "".concat(offset * 100, "%");
          positionStyle.transform = 'translateX(-50%)';
          break;
      }

      return positionStyle;
    }
    /** Return index value if is list or return value directly */

    function getIndex(value, index) {
      return Array.isArray(value) ? value[index] : value;
    }

    var _excluded$1 = ["prefixCls", "value", "valueIndex", "onStartMove", "style", "render", "dragging", "onOffsetChange"];
    var Handle = /*#__PURE__*/React__namespace.forwardRef(function (props, ref) {
      var _classNames, _getIndex;

      var prefixCls = props.prefixCls,
          value = props.value,
          valueIndex = props.valueIndex,
          onStartMove = props.onStartMove,
          style = props.style,
          render = props.render,
          dragging = props.dragging,
          onOffsetChange = props.onOffsetChange,
          restProps = _objectWithoutProperties(props, _excluded$1);

      var _React$useContext = React__namespace.useContext(SliderContext),
          min = _React$useContext.min,
          max = _React$useContext.max,
          direction = _React$useContext.direction,
          disabled = _React$useContext.disabled,
          range = _React$useContext.range,
          tabIndex = _React$useContext.tabIndex,
          ariaLabelForHandle = _React$useContext.ariaLabelForHandle,
          ariaLabelledByForHandle = _React$useContext.ariaLabelledByForHandle,
          ariaValueTextFormatterForHandle = _React$useContext.ariaValueTextFormatterForHandle;

      var handlePrefixCls = "".concat(prefixCls, "-handle"); // ============================ Events ============================

      var onInternalStartMove = function onInternalStartMove(e) {
        if (!disabled) {
          onStartMove(e, valueIndex);
        }
      }; // =========================== Keyboard ===========================


      var onKeyDown = function onKeyDown(e) {
        if (!disabled) {
          var offset = null; // Change the value

          switch (e.which || e.keyCode) {
            case KeyCode.LEFT:
              offset = direction === 'ltr' || direction === 'btt' ? -1 : 1;
              break;

            case KeyCode.RIGHT:
              offset = direction === 'ltr' || direction === 'btt' ? 1 : -1;
              break;
            // Up is plus

            case KeyCode.UP:
              offset = direction !== 'ttb' ? 1 : -1;
              break;
            // Down is minus

            case KeyCode.DOWN:
              offset = direction !== 'ttb' ? -1 : 1;
              break;

            case KeyCode.HOME:
              offset = 'min';
              break;

            case KeyCode.END:
              offset = 'max';
              break;

            case KeyCode.PAGE_UP:
              offset = 2;
              break;

            case KeyCode.PAGE_DOWN:
              offset = -2;
              break;
          }

          if (offset !== null) {
            e.preventDefault();
            onOffsetChange(offset, valueIndex);
          }
        }
      }; // ============================ Offset ============================


      var positionStyle = getDirectionStyle(direction, value, min, max); // ============================ Render ============================

      var handleNode = /*#__PURE__*/React__namespace.createElement("div", _extends$5({
        ref: ref,
        className: classNames(handlePrefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(handlePrefixCls, "-").concat(valueIndex + 1), range), _defineProperty(_classNames, "".concat(handlePrefixCls, "-dragging"), dragging), _classNames)),
        style: _objectSpread2(_objectSpread2({}, positionStyle), style),
        onMouseDown: onInternalStartMove,
        onTouchStart: onInternalStartMove,
        onKeyDown: onKeyDown,
        tabIndex: disabled ? null : getIndex(tabIndex, valueIndex),
        role: "slider",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-disabled": disabled,
        "aria-label": getIndex(ariaLabelForHandle, valueIndex),
        "aria-labelledby": getIndex(ariaLabelledByForHandle, valueIndex),
        "aria-valuetext": (_getIndex = getIndex(ariaValueTextFormatterForHandle, valueIndex)) === null || _getIndex === void 0 ? void 0 : _getIndex(value)
      }, restProps)); // Customize

      if (render) {
        handleNode = render(handleNode, {
          index: valueIndex,
          prefixCls: prefixCls,
          value: value,
          dragging: dragging
        });
      }

      return handleNode;
    });

    if (process.env.NODE_ENV !== 'production') {
      Handle.displayName = 'Handle';
    }

    var _excluded = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"];
    var Handles = /*#__PURE__*/React__namespace.forwardRef(function (props, ref) {
      var prefixCls = props.prefixCls,
          style = props.style,
          onStartMove = props.onStartMove,
          onOffsetChange = props.onOffsetChange,
          values = props.values,
          handleRender = props.handleRender,
          draggingIndex = props.draggingIndex,
          restProps = _objectWithoutProperties(props, _excluded);

      var handlesRef = React__namespace.useRef({});
      React__namespace.useImperativeHandle(ref, function () {
        return {
          focus: function focus(index) {
            var _handlesRef$current$i;

            (_handlesRef$current$i = handlesRef.current[index]) === null || _handlesRef$current$i === void 0 ? void 0 : _handlesRef$current$i.focus();
          }
        };
      });
      return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, values.map(function (value, index) {
        return /*#__PURE__*/React__namespace.createElement(Handle, _extends$5({
          ref: function ref(node) {
            if (!node) {
              delete handlesRef.current[index];
            } else {
              handlesRef.current[index] = node;
            }
          },
          dragging: draggingIndex === index,
          prefixCls: prefixCls,
          style: getIndex(style, index),
          key: index,
          value: value,
          valueIndex: index,
          onStartMove: onStartMove,
          onOffsetChange: onOffsetChange,
          render: handleRender
        }, restProps));
      }));
    });

    if (process.env.NODE_ENV !== 'production') {
      Handles.displayName = 'Handles';
    }

    function getPosition(e) {
      var obj = 'touches' in e ? e.touches[0] : e;
      return {
        pageX: obj.pageX,
        pageY: obj.pageY
      };
    }

    function useDrag(containerRef, direction, rawValues, min, max, formatValue, triggerChange, finishChange, offsetValues) {
      var _React$useState = React__namespace.useState(null),
          _React$useState2 = _slicedToArray$1(_React$useState, 2),
          draggingValue = _React$useState2[0],
          setDraggingValue = _React$useState2[1];

      var _React$useState3 = React__namespace.useState(-1),
          _React$useState4 = _slicedToArray$1(_React$useState3, 2),
          draggingIndex = _React$useState4[0],
          setDraggingIndex = _React$useState4[1];

      var _React$useState5 = React__namespace.useState(rawValues),
          _React$useState6 = _slicedToArray$1(_React$useState5, 2),
          cacheValues = _React$useState6[0],
          setCacheValues = _React$useState6[1];

      var _React$useState7 = React__namespace.useState(rawValues),
          _React$useState8 = _slicedToArray$1(_React$useState7, 2),
          originValues = _React$useState8[0],
          setOriginValues = _React$useState8[1];

      var mouseMoveEventRef = React__namespace.useRef(null);
      var mouseUpEventRef = React__namespace.useRef(null);
      React__namespace.useEffect(function () {
        if (draggingIndex === -1) {
          setCacheValues(rawValues);
        }
      }, [rawValues, draggingIndex]); // Clean up event

      React__namespace.useEffect(function () {
        return function () {
          document.removeEventListener('mousemove', mouseMoveEventRef.current);
          document.removeEventListener('mouseup', mouseUpEventRef.current);
          document.removeEventListener('touchmove', mouseMoveEventRef.current);
          document.removeEventListener('touchend', mouseUpEventRef.current);
        };
      }, []);

      var flushValues = function flushValues(nextValues, nextValue) {
        // Perf: Only update state when value changed
        if (cacheValues.some(function (val, i) {
          return val !== nextValues[i];
        })) {
          if (nextValue !== undefined) {
            setDraggingValue(nextValue);
          }

          setCacheValues(nextValues);
          triggerChange(nextValues);
        }
      };

      var updateCacheValue = function updateCacheValue(valueIndex, offsetPercent) {
        // Basic point offset
        if (valueIndex === -1) {
          // >>>> Dragging on the track
          var startValue = originValues[0];
          var endValue = originValues[originValues.length - 1];
          var maxStartOffset = min - startValue;
          var maxEndOffset = max - endValue; // Get valid offset

          var offset = offsetPercent * (max - min);
          offset = Math.max(offset, maxStartOffset);
          offset = Math.min(offset, maxEndOffset); // Use first value to revert back of valid offset (like steps marks)

          var formatStartValue = formatValue(startValue + offset);
          offset = formatStartValue - startValue;
          var cloneCacheValues = originValues.map(function (val) {
            return val + offset;
          });
          flushValues(cloneCacheValues);
        } else {
          // >>>> Dragging on the handle
          var offsetDist = (max - min) * offsetPercent; // Always start with the valueIndex origin value

          var cloneValues = _toConsumableArray(cacheValues);

          cloneValues[valueIndex] = originValues[valueIndex];
          var next = offsetValues(cloneValues, offsetDist, valueIndex, 'dist');
          flushValues(next.values, next.value);
        }
      }; // Resolve closure


      var updateCacheValueRef = React__namespace.useRef(updateCacheValue);
      updateCacheValueRef.current = updateCacheValue;

      var onStartMove = function onStartMove(e, valueIndex) {
        e.stopPropagation();
        var originValue = rawValues[valueIndex];
        setDraggingIndex(valueIndex);
        setDraggingValue(originValue);
        setOriginValues(rawValues);

        var _getPosition = getPosition(e),
            startX = _getPosition.pageX,
            startY = _getPosition.pageY; // Moving


        var onMouseMove = function onMouseMove(event) {
          event.preventDefault();

          var _getPosition2 = getPosition(event),
              moveX = _getPosition2.pageX,
              moveY = _getPosition2.pageY;

          var offsetX = moveX - startX;
          var offsetY = moveY - startY;

          var _containerRef$current = containerRef.current.getBoundingClientRect(),
              width = _containerRef$current.width,
              height = _containerRef$current.height;

          var offSetPercent;

          switch (direction) {
            case 'btt':
              offSetPercent = -offsetY / height;
              break;

            case 'ttb':
              offSetPercent = offsetY / height;
              break;

            case 'rtl':
              offSetPercent = -offsetX / width;
              break;

            default:
              offSetPercent = offsetX / width;
          }

          updateCacheValueRef.current(valueIndex, offSetPercent);
        }; // End


        var onMouseUp = function onMouseUp(event) {
          event.preventDefault();
          document.removeEventListener('mouseup', onMouseUp);
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('touchend', onMouseUp);
          document.removeEventListener('touchmove', onMouseMove);
          mouseMoveEventRef.current = null;
          mouseUpEventRef.current = null;
          setDraggingIndex(-1);
          finishChange();
        };

        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('touchend', onMouseUp);
        document.addEventListener('touchmove', onMouseMove);
        mouseMoveEventRef.current = onMouseMove;
        mouseUpEventRef.current = onMouseUp;
      }; // Only return cache value when it mapping with rawValues


      var returnValues = React__namespace.useMemo(function () {
        var sourceValues = _toConsumableArray(rawValues).sort(function (a, b) {
          return a - b;
        });

        var targetValues = _toConsumableArray(cacheValues).sort(function (a, b) {
          return a - b;
        });

        return sourceValues.every(function (val, index) {
          return val === targetValues[index];
        }) ? cacheValues : rawValues;
      }, [rawValues, cacheValues]);
      return [draggingIndex, draggingValue, returnValues, onStartMove];
    }

    function Track(props) {
      var prefixCls = props.prefixCls,
          style = props.style,
          start = props.start,
          end = props.end,
          index = props.index,
          onStartMove = props.onStartMove;

      var _React$useContext = React__namespace.useContext(SliderContext),
          direction = _React$useContext.direction,
          min = _React$useContext.min,
          max = _React$useContext.max,
          disabled = _React$useContext.disabled,
          range = _React$useContext.range;

      var trackPrefixCls = "".concat(prefixCls, "-track");
      var offsetStart = getOffset(start, min, max);
      var offsetEnd = getOffset(end, min, max); // ============================ Events ============================

      var onInternalStartMove = function onInternalStartMove(e) {
        if (!disabled && onStartMove) {
          onStartMove(e, -1);
        }
      }; // ============================ Render ============================


      var positionStyle = {};

      switch (direction) {
        case 'rtl':
          positionStyle.right = "".concat(offsetStart * 100, "%");
          positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
          break;

        case 'btt':
          positionStyle.bottom = "".concat(offsetStart * 100, "%");
          positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
          break;

        case 'ttb':
          positionStyle.top = "".concat(offsetStart * 100, "%");
          positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
          break;

        default:
          positionStyle.left = "".concat(offsetStart * 100, "%");
          positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      }

      return /*#__PURE__*/React__namespace.createElement("div", {
        className: classNames(trackPrefixCls, range && "".concat(trackPrefixCls, "-").concat(index + 1)),
        style: _objectSpread2(_objectSpread2({}, positionStyle), style),
        onMouseDown: onInternalStartMove,
        onTouchStart: onInternalStartMove
      });
    }

    function Tracks(props) {
      var prefixCls = props.prefixCls,
          style = props.style,
          values = props.values,
          startPoint = props.startPoint,
          onStartMove = props.onStartMove;

      var _React$useContext = React__namespace.useContext(SliderContext),
          included = _React$useContext.included,
          range = _React$useContext.range,
          min = _React$useContext.min;

      var trackList = React__namespace.useMemo(function () {
        if (!range) {
          // null value do not have track
          if (values.length === 0) {
            return [];
          }

          var startValue = startPoint !== null && startPoint !== void 0 ? startPoint : min;
          var endValue = values[0];
          return [{
            start: Math.min(startValue, endValue),
            end: Math.max(startValue, endValue)
          }];
        } // Multiple


        var list = [];

        for (var i = 0; i < values.length - 1; i += 1) {
          list.push({
            start: values[i],
            end: values[i + 1]
          });
        }

        return list;
      }, [values, range, startPoint, min]);
      return included ? trackList.map(function (_ref, index) {
        var start = _ref.start,
            end = _ref.end;
        return /*#__PURE__*/React__namespace.createElement(Track, {
          index: index,
          prefixCls: prefixCls,
          style: getIndex(style, index),
          start: start,
          end: end,
          key: index,
          onStartMove: onStartMove
        });
      }) : null;
    }

    function Mark(props) {
      var prefixCls = props.prefixCls,
          style = props.style,
          children = props.children,
          value = props.value,
          _onClick = props.onClick;

      var _React$useContext = React__namespace.useContext(SliderContext),
          min = _React$useContext.min,
          max = _React$useContext.max,
          direction = _React$useContext.direction,
          includedStart = _React$useContext.includedStart,
          includedEnd = _React$useContext.includedEnd,
          included = _React$useContext.included;

      var textCls = "".concat(prefixCls, "-text"); // ============================ Offset ============================

      var positionStyle = getDirectionStyle(direction, value, min, max);
      return /*#__PURE__*/React__namespace.createElement("span", {
        className: classNames(textCls, _defineProperty({}, "".concat(textCls, "-active"), included && includedStart <= value && value <= includedEnd)),
        style: _objectSpread2(_objectSpread2({}, positionStyle), style),
        onMouseDown: function onMouseDown(e) {
          e.stopPropagation();
        },
        onClick: function onClick() {
          _onClick(value);
        }
      }, children);
    }

    function Marks(props) {
      var prefixCls = props.prefixCls,
          marks = props.marks,
          onClick = props.onClick;
      var markPrefixCls = "".concat(prefixCls, "-mark"); // Not render mark if empty

      if (!marks.length) {
        return null;
      }

      return /*#__PURE__*/React__namespace.createElement("div", {
        className: markPrefixCls
      }, marks.map(function (_ref) {
        var value = _ref.value,
            style = _ref.style,
            label = _ref.label;
        return /*#__PURE__*/React__namespace.createElement(Mark, {
          key: value,
          prefixCls: markPrefixCls,
          style: style,
          value: value,
          onClick: onClick
        }, label);
      }));
    }

    function Dot(props) {
      var prefixCls = props.prefixCls,
          value = props.value,
          style = props.style,
          activeStyle = props.activeStyle;

      var _React$useContext = React__namespace.useContext(SliderContext),
          min = _React$useContext.min,
          max = _React$useContext.max,
          direction = _React$useContext.direction,
          included = _React$useContext.included,
          includedStart = _React$useContext.includedStart,
          includedEnd = _React$useContext.includedEnd;

      var dotClassName = "".concat(prefixCls, "-dot");
      var active = included && includedStart <= value && value <= includedEnd; // ============================ Offset ============================

      var mergedStyle = _objectSpread2(_objectSpread2({}, getDirectionStyle(direction, value, min, max)), style);

      if (active) {
        mergedStyle = _objectSpread2(_objectSpread2({}, mergedStyle), activeStyle);
      }

      return /*#__PURE__*/React__namespace.createElement("span", {
        className: classNames(dotClassName, _defineProperty({}, "".concat(dotClassName, "-active"), active)),
        style: mergedStyle
      });
    }

    function Steps(props) {
      var prefixCls = props.prefixCls,
          marks = props.marks,
          dots = props.dots,
          style = props.style,
          activeStyle = props.activeStyle;

      var _React$useContext = React__namespace.useContext(SliderContext),
          min = _React$useContext.min,
          max = _React$useContext.max,
          step = _React$useContext.step;

      var stepDots = React__namespace.useMemo(function () {
        var dotSet = new Set(); // Add marks

        marks.forEach(function (mark) {
          dotSet.add(mark.value);
        }); // Fill dots

        if (dots) {
          var current = min;

          while (current <= max) {
            dotSet.add(current);
            current += step;
          }
        }

        return Array.from(dotSet);
      }, [min, max, step, dots, marks]);
      return /*#__PURE__*/React__namespace.createElement("div", {
        className: "".concat(prefixCls, "-step")
      }, stepDots.map(function (dotValue) {
        return /*#__PURE__*/React__namespace.createElement(Dot, {
          prefixCls: prefixCls,
          key: dotValue,
          value: dotValue,
          style: style,
          activeStyle: activeStyle
        });
      }));
    }

    function useOffset(min, max, step, markList, allowCross, pushable) {
      var formatRangeValue = React__namespace.useCallback(function (val) {
        var formatNextValue = isFinite(val) ? val : min;
        formatNextValue = Math.min(max, val);
        formatNextValue = Math.max(min, formatNextValue);
        return formatNextValue;
      }, [min, max]);
      var formatStepValue = React__namespace.useCallback(function (val) {
        if (step !== null) {
          var stepValue = min + Math.round((formatRangeValue(val) - min) / step) * step; // Cut number in case to be like 0.30000000000000004

          var getDecimal = function getDecimal(num) {
            return (String(num).split('.')[1] || '').length;
          };

          var maxDecimal = Math.max(getDecimal(step), getDecimal(max), getDecimal(min));
          var fixedValue = Number(stepValue.toFixed(maxDecimal));
          return min <= fixedValue && fixedValue <= max ? fixedValue : null;
        }

        return null;
      }, [step, min, max, formatRangeValue]);
      var formatValue = React__namespace.useCallback(function (val) {
        var formatNextValue = formatRangeValue(val); // List align values

        var alignValues = markList.map(function (mark) {
          return mark.value;
        });

        if (step !== null) {
          alignValues.push(formatStepValue(val));
        } // min & max


        alignValues.push(min, max); // Align with marks

        var closeValue = alignValues[0];
        var closeDist = max - min;
        alignValues.forEach(function (alignValue) {
          var dist = Math.abs(formatNextValue - alignValue);

          if (dist <= closeDist) {
            closeValue = alignValue;
            closeDist = dist;
          }
        });
        return closeValue;
      }, [min, max, markList, step, formatRangeValue, formatStepValue]); // ========================== Offset ==========================
      // Single Value

      var offsetValue = function offsetValue(values, offset, valueIndex) {
        var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';

        if (typeof offset === 'number') {
          var nextValue;
          var originValue = values[valueIndex]; // Only used for `dist` mode

          var targetDistValue = originValue + offset; // Compare next step value & mark value which is best match

          var potentialValues = [];
          markList.forEach(function (mark) {
            potentialValues.push(mark.value);
          }); // Min & Max

          potentialValues.push(min, max); // In case origin value is align with mark but not with step

          potentialValues.push(formatStepValue(originValue)); // Put offset step value also

          var sign = offset > 0 ? 1 : -1;

          if (mode === 'unit') {
            potentialValues.push(formatStepValue(originValue + sign * step));
          } else {
            potentialValues.push(formatStepValue(targetDistValue));
          } // Find close one


          potentialValues = potentialValues.filter(function (val) {
            return val !== null;
          }) // Remove reverse value
          .filter(function (val) {
            return offset < 0 ? val <= originValue : val >= originValue;
          });

          if (mode === 'unit') {
            // `unit` mode can not contain itself
            potentialValues = potentialValues.filter(function (val) {
              return val !== originValue;
            });
          }

          var compareValue = mode === 'unit' ? originValue : targetDistValue;
          nextValue = potentialValues[0];
          var valueDist = Math.abs(nextValue - compareValue);
          potentialValues.forEach(function (potentialValue) {
            var dist = Math.abs(potentialValue - compareValue);

            if (dist < valueDist) {
              nextValue = potentialValue;
              valueDist = dist;
            }
          }); // Out of range will back to range

          if (nextValue === undefined) {
            return offset < 0 ? min : max;
          } // `dist` mode


          if (mode === 'dist') {
            return nextValue;
          } // `unit` mode may need another round


          if (Math.abs(offset) > 1) {
            var cloneValues = _toConsumableArray(values);

            cloneValues[valueIndex] = nextValue;
            return offsetValue(cloneValues, offset - sign, valueIndex, mode);
          }

          return nextValue;
        } else if (offset === 'min') {
          return min;
        } else if (offset === 'max') {
          return max;
        }
      };
      /** Same as `offsetValue` but return `changed` mark to tell value changed */


      var offsetChangedValue = function offsetChangedValue(values, offset, valueIndex) {
        var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
        var originValue = values[valueIndex];
        var nextValue = offsetValue(values, offset, valueIndex, mode);
        return {
          value: nextValue,
          changed: nextValue !== originValue
        };
      };

      var needPush = function needPush(dist) {
        return pushable === null && dist === 0 || typeof pushable === 'number' && dist < pushable;
      }; // Values


      var offsetValues = function offsetValues(values, offset, valueIndex) {
        var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'unit';
        var nextValues = values.map(formatValue);
        var originValue = nextValues[valueIndex];
        var nextValue = offsetValue(nextValues, offset, valueIndex, mode);
        nextValues[valueIndex] = nextValue;

        if (allowCross === false) {
          // >>>>> Allow Cross
          var pushNum = pushable || 0; // ============ AllowCross ===============

          if (valueIndex > 0 && nextValues[valueIndex - 1] !== originValue) {
            nextValues[valueIndex] = Math.max(nextValues[valueIndex], nextValues[valueIndex - 1] + pushNum);
          }

          if (valueIndex < nextValues.length - 1 && nextValues[valueIndex + 1] !== originValue) {
            nextValues[valueIndex] = Math.min(nextValues[valueIndex], nextValues[valueIndex + 1] - pushNum);
          }
        } else if (typeof pushable === 'number' || pushable === null) {
          // >>>>> Pushable
          // =============== Push ==================
          // >>>>>> Basic push
          // End values
          for (var i = valueIndex + 1; i < nextValues.length; i += 1) {
            var changed = true;

            while (needPush(nextValues[i] - nextValues[i - 1]) && changed) {
              var _offsetChangedValue = offsetChangedValue(nextValues, 1, i);

              nextValues[i] = _offsetChangedValue.value;
              changed = _offsetChangedValue.changed;
            }
          } // Start values


          for (var _i = valueIndex; _i > 0; _i -= 1) {
            var _changed = true;

            while (needPush(nextValues[_i] - nextValues[_i - 1]) && _changed) {
              var _offsetChangedValue2 = offsetChangedValue(nextValues, -1, _i - 1);

              nextValues[_i - 1] = _offsetChangedValue2.value;
              _changed = _offsetChangedValue2.changed;
            }
          } // >>>>> Revert back to safe push range
          // End to Start


          for (var _i2 = nextValues.length - 1; _i2 > 0; _i2 -= 1) {
            var _changed2 = true;

            while (needPush(nextValues[_i2] - nextValues[_i2 - 1]) && _changed2) {
              var _offsetChangedValue3 = offsetChangedValue(nextValues, -1, _i2 - 1);

              nextValues[_i2 - 1] = _offsetChangedValue3.value;
              _changed2 = _offsetChangedValue3.changed;
            }
          } // Start to End


          for (var _i3 = 0; _i3 < nextValues.length - 1; _i3 += 1) {
            var _changed3 = true;

            while (needPush(nextValues[_i3 + 1] - nextValues[_i3]) && _changed3) {
              var _offsetChangedValue4 = offsetChangedValue(nextValues, 1, _i3 + 1);

              nextValues[_i3 + 1] = _offsetChangedValue4.value;
              _changed3 = _offsetChangedValue4.changed;
            }
          }
        }

        return {
          value: nextValues[valueIndex],
          values: nextValues
        };
      };

      return [formatValue, offsetValues];
    }

    /* eslint-disable no-console */
    var warned = {};
    function warning(valid, message) {
      // Support uglify
      if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
        console.error("Warning: ".concat(message));
      }
    }
    function call(method, valid, message) {
      if (!valid && !warned[message]) {
        method(false, message);
        warned[message] = true;
      }
    }
    function warningOnce(valid, message) {
      call(warning, valid, message);
    }
    /* eslint-enable */

    var Slider$1 = /*#__PURE__*/React__namespace.forwardRef(function (props, ref) {
      var _classNames;

      var _props$prefixCls = props.prefixCls,
          prefixCls = _props$prefixCls === void 0 ? 'rc-slider' : _props$prefixCls,
          className = props.className,
          style = props.style,
          _props$disabled = props.disabled,
          disabled = _props$disabled === void 0 ? false : _props$disabled,
          autoFocus = props.autoFocus,
          onFocus = props.onFocus,
          onBlur = props.onBlur,
          _props$min = props.min,
          min = _props$min === void 0 ? 0 : _props$min,
          _props$max = props.max,
          max = _props$max === void 0 ? 100 : _props$max,
          _props$step = props.step,
          step = _props$step === void 0 ? 1 : _props$step,
          value = props.value,
          defaultValue = props.defaultValue,
          range = props.range,
          count = props.count,
          onChange = props.onChange,
          onBeforeChange = props.onBeforeChange,
          onAfterChange = props.onAfterChange,
          _props$allowCross = props.allowCross,
          allowCross = _props$allowCross === void 0 ? true : _props$allowCross,
          _props$pushable = props.pushable,
          pushable = _props$pushable === void 0 ? false : _props$pushable,
          draggableTrack = props.draggableTrack,
          reverse = props.reverse,
          vertical = props.vertical,
          _props$included = props.included,
          included = _props$included === void 0 ? true : _props$included,
          startPoint = props.startPoint,
          trackStyle = props.trackStyle,
          handleStyle = props.handleStyle,
          railStyle = props.railStyle,
          dotStyle = props.dotStyle,
          activeDotStyle = props.activeDotStyle,
          marks = props.marks,
          dots = props.dots,
          handleRender = props.handleRender,
          _props$tabIndex = props.tabIndex,
          tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
          ariaLabelForHandle = props.ariaLabelForHandle,
          ariaLabelledByForHandle = props.ariaLabelledByForHandle,
          ariaValueTextFormatterForHandle = props.ariaValueTextFormatterForHandle;
      var handlesRef = React__namespace.useRef();
      var containerRef = React__namespace.useRef();
      var direction = React__namespace.useMemo(function () {
        if (vertical) {
          return reverse ? 'ttb' : 'btt';
        }

        return reverse ? 'rtl' : 'ltr';
      }, [reverse, vertical]); // ============================ Range =============================

      var mergedMin = React__namespace.useMemo(function () {
        return isFinite(min) ? min : 0;
      }, [min]);
      var mergedMax = React__namespace.useMemo(function () {
        return isFinite(max) ? max : 100;
      }, [max]); // ============================= Step =============================

      var mergedStep = React__namespace.useMemo(function () {
        return step !== null && step <= 0 ? 1 : step;
      }, [step]); // ============================= Push =============================

      var mergedPush = React__namespace.useMemo(function () {
        if (pushable === true) {
          return mergedStep;
        }

        return pushable >= 0 ? pushable : false;
      }, [pushable, mergedStep]); // ============================ Marks =============================

      var markList = React__namespace.useMemo(function () {
        var keys = Object.keys(marks || {});
        return keys.map(function (key) {
          var mark = marks[key];
          var markObj = {
            value: Number(key)
          };

          if (mark && _typeof(mark) === 'object' && ! /*#__PURE__*/React__namespace.isValidElement(mark) && ('label' in mark || 'style' in mark)) {
            markObj.style = mark.style;
            markObj.label = mark.label;
          } else {
            markObj.label = mark;
          }

          return markObj;
        }).filter(function (_ref) {
          var label = _ref.label;
          return label || typeof label === 'number';
        }).sort(function (a, b) {
          return a.value - b.value;
        });
      }, [marks]); // ============================ Format ============================

      var _useOffset = useOffset(mergedMin, mergedMax, mergedStep, markList, allowCross, mergedPush),
          _useOffset2 = _slicedToArray$1(_useOffset, 2),
          formatValue = _useOffset2[0],
          offsetValues = _useOffset2[1]; // ============================ Values ============================


      var _useMergedState = useMergedState(defaultValue, {
        value: value
      }),
          _useMergedState2 = _slicedToArray$1(_useMergedState, 2),
          mergedValue = _useMergedState2[0],
          setValue = _useMergedState2[1];

      var rawValues = React__namespace.useMemo(function () {
        var valueList = mergedValue === null || mergedValue === undefined ? [] : Array.isArray(mergedValue) ? mergedValue : [mergedValue];

        var _valueList = _slicedToArray$1(valueList, 1),
            _valueList$ = _valueList[0],
            val0 = _valueList$ === void 0 ? mergedMin : _valueList$;

        var returnValues = mergedValue === null ? [] : [val0]; // Format as range

        if (range) {
          returnValues = _toConsumableArray(valueList); // When count provided or value is `undefined`, we fill values

          if (count || mergedValue === undefined) {
            var pointCount = count >= 0 ? count + 1 : 2;
            returnValues = returnValues.slice(0, pointCount); // Fill with count

            while (returnValues.length < pointCount) {
              var _returnValues;

              returnValues.push((_returnValues = returnValues[returnValues.length - 1]) !== null && _returnValues !== void 0 ? _returnValues : mergedMin);
            }
          }

          returnValues.sort(function (a, b) {
            return a - b;
          });
        } // Align in range


        returnValues.forEach(function (val, index) {
          returnValues[index] = formatValue(val);
        });
        return returnValues;
      }, [mergedValue, range, mergedMin, count, formatValue]); // =========================== onChange ===========================

      var rawValuesRef = React__namespace.useRef(rawValues);
      rawValuesRef.current = rawValues;

      var getTriggerValue = function getTriggerValue(triggerValues) {
        return range ? triggerValues : triggerValues[0];
      };

      var triggerChange = function triggerChange(nextValues) {
        // Order first
        var cloneNextValues = _toConsumableArray(nextValues).sort(function (a, b) {
          return a - b;
        }); // Trigger event if needed


        if (onChange && !shallowequal(cloneNextValues, rawValuesRef.current)) {
          onChange(getTriggerValue(cloneNextValues));
        } // We set this later since it will re-render component immediately


        setValue(cloneNextValues);
      };

      var changeToCloseValue = function changeToCloseValue(newValue) {
        if (!disabled) {
          var valueIndex = 0;
          var valueDist = mergedMax - mergedMin;
          rawValues.forEach(function (val, index) {
            var dist = Math.abs(newValue - val);

            if (dist <= valueDist) {
              valueDist = dist;
              valueIndex = index;
            }
          }); // Create new values

          var cloneNextValues = _toConsumableArray(rawValues);

          cloneNextValues[valueIndex] = newValue; // Fill value to match default 2

          if (range && !rawValues.length && count === undefined) {
            cloneNextValues.push(newValue);
          }

          onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(cloneNextValues));
          triggerChange(cloneNextValues);
          onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(cloneNextValues));
        }
      }; // ============================ Click =============================


      var onSliderMouseDown = function onSliderMouseDown(e) {
        e.preventDefault();

        var _containerRef$current = containerRef.current.getBoundingClientRect(),
            width = _containerRef$current.width,
            height = _containerRef$current.height,
            left = _containerRef$current.left,
            top = _containerRef$current.top,
            bottom = _containerRef$current.bottom,
            right = _containerRef$current.right;

        var clientX = e.clientX,
            clientY = e.clientY;
        var percent;

        switch (direction) {
          case 'btt':
            percent = (bottom - clientY) / height;
            break;

          case 'ttb':
            percent = (clientY - top) / height;
            break;

          case 'rtl':
            percent = (right - clientX) / width;
            break;

          default:
            percent = (clientX - left) / width;
        }

        var nextValue = mergedMin + percent * (mergedMax - mergedMin);
        changeToCloseValue(formatValue(nextValue));
      }; // =========================== Keyboard ===========================


      var _React$useState = React__namespace.useState(null),
          _React$useState2 = _slicedToArray$1(_React$useState, 2),
          keyboardValue = _React$useState2[0],
          setKeyboardValue = _React$useState2[1];

      var onHandleOffsetChange = function onHandleOffsetChange(offset, valueIndex) {
        if (!disabled) {
          var next = offsetValues(rawValues, offset, valueIndex);
          onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(rawValues));
          triggerChange(next.values);
          onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(next.values));
          setKeyboardValue(next.value);
        }
      };

      React__namespace.useEffect(function () {
        if (keyboardValue !== null) {
          var valueIndex = rawValues.indexOf(keyboardValue);

          if (valueIndex >= 0) {
            handlesRef.current.focus(valueIndex);
          }
        }

        setKeyboardValue(null);
      }, [keyboardValue]); // ============================= Drag =============================

      var mergedDraggableTrack = React__namespace.useMemo(function () {
        if (draggableTrack && mergedStep === null) {
          if (process.env.NODE_ENV !== 'production') {
            warningOnce(false, '`draggableTrack` is not supported when `step` is `null`.');
          }

          return false;
        }

        return draggableTrack;
      }, [draggableTrack, mergedStep]);

      var finishChange = function finishChange() {
        onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(rawValuesRef.current));
      };

      var _useDrag = useDrag(containerRef, direction, rawValues, mergedMin, mergedMax, formatValue, triggerChange, finishChange, offsetValues),
          _useDrag2 = _slicedToArray$1(_useDrag, 4),
          draggingIndex = _useDrag2[0],
          draggingValue = _useDrag2[1],
          cacheValues = _useDrag2[2],
          onStartDrag = _useDrag2[3];

      var onStartMove = function onStartMove(e, valueIndex) {
        onStartDrag(e, valueIndex);
        onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(rawValuesRef.current));
      }; // Auto focus for updated handle


      var dragging = draggingIndex !== -1;
      React__namespace.useEffect(function () {
        if (!dragging) {
          var valueIndex = rawValues.lastIndexOf(draggingValue);
          handlesRef.current.focus(valueIndex);
        }
      }, [dragging]); // =========================== Included ===========================

      var sortedCacheValues = React__namespace.useMemo(function () {
        return _toConsumableArray(cacheValues).sort(function (a, b) {
          return a - b;
        });
      }, [cacheValues]); // Provide a range values with included [min, max]
      // Used for Track, Mark & Dot

      var _React$useMemo = React__namespace.useMemo(function () {
        if (!range) {
          return [mergedMin, sortedCacheValues[0]];
        }

        return [sortedCacheValues[0], sortedCacheValues[sortedCacheValues.length - 1]];
      }, [sortedCacheValues, range, mergedMin]),
          _React$useMemo2 = _slicedToArray$1(_React$useMemo, 2),
          includedStart = _React$useMemo2[0],
          includedEnd = _React$useMemo2[1]; // ============================= Refs =============================


      React__namespace.useImperativeHandle(ref, function () {
        return {
          focus: function focus() {
            handlesRef.current.focus(0);
          },
          blur: function blur() {
            var _document = document,
                activeElement = _document.activeElement;

            if (containerRef.current.contains(activeElement)) {
              activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur();
            }
          }
        };
      }); // ========================== Auto Focus ==========================

      React__namespace.useEffect(function () {
        if (autoFocus) {
          handlesRef.current.focus(0);
        }
      }, []); // =========================== Context ============================

      var context = React__namespace.useMemo(function () {
        return {
          min: mergedMin,
          max: mergedMax,
          direction: direction,
          disabled: disabled,
          step: mergedStep,
          included: included,
          includedStart: includedStart,
          includedEnd: includedEnd,
          range: range,
          tabIndex: tabIndex,
          ariaLabelForHandle: ariaLabelForHandle,
          ariaLabelledByForHandle: ariaLabelledByForHandle,
          ariaValueTextFormatterForHandle: ariaValueTextFormatterForHandle
        };
      }, [mergedMin, mergedMax, direction, disabled, mergedStep, included, includedStart, includedEnd, range, tabIndex, ariaLabelForHandle, ariaLabelledByForHandle, ariaValueTextFormatterForHandle]); // ============================ Render ============================

      return /*#__PURE__*/React__namespace.createElement(SliderContext.Provider, {
        value: context
      }, /*#__PURE__*/React__namespace.createElement("div", {
        ref: containerRef,
        className: classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-vertical"), vertical), _defineProperty(_classNames, "".concat(prefixCls, "-horizontal"), !vertical), _defineProperty(_classNames, "".concat(prefixCls, "-with-marks"), markList.length), _classNames)),
        style: style,
        onMouseDown: onSliderMouseDown
      }, /*#__PURE__*/React__namespace.createElement("div", {
        className: "".concat(prefixCls, "-rail"),
        style: railStyle
      }), /*#__PURE__*/React__namespace.createElement(Tracks, {
        prefixCls: prefixCls,
        style: trackStyle,
        values: sortedCacheValues,
        startPoint: startPoint,
        onStartMove: mergedDraggableTrack ? onStartMove : null
      }), /*#__PURE__*/React__namespace.createElement(Steps, {
        prefixCls: prefixCls,
        marks: markList,
        dots: dots,
        style: dotStyle,
        activeStyle: activeDotStyle
      }), /*#__PURE__*/React__namespace.createElement(Handles, {
        ref: handlesRef,
        prefixCls: prefixCls,
        style: handleStyle,
        values: cacheValues,
        draggingIndex: draggingIndex,
        onStartMove: onStartMove,
        onOffsetChange: onHandleOffsetChange,
        onFocus: onFocus,
        onBlur: onBlur,
        handleRender: handleRender
      }), /*#__PURE__*/React__namespace.createElement(Marks, {
        prefixCls: prefixCls,
        marks: markList,
        onClick: changeToCloseValue
      })));
    });

    if (process.env.NODE_ENV !== 'production') {
      Slider$1.displayName = 'Slider';
    }

    const SliderWrapper = styled__default["default"].div `
  * {
    border-color: none;
  }
  .rc-slider {
    height: 0;
    display: flex;
    align-items: center;
  }
  .rc-slider-rail {
    height: 2px;
  }
  .rc-slider-track {
    height: 2px;
    background-color: ${COLORS.royalBlue};
  }
  .rc-slider-handle,
  .rc-slider-handle:active {
    height: 10px;
    width: 10px;
    top: 0;
    margin: 0;
    border: none;
    box-shadow: none;
    border-color: ${COLORS.royalBlue};
    background-color: ${COLORS.royalBlue};
    opacity: 1;
  }

  .rc-slider-handle-dragging {
    border: none;
    box-shadow: none;
  }

  .rc-slider-disabled {
  }
`;
    const Slider = ({ disabled, onChange, min = 0, max = 100, step = 1, }) => {
        return (jsxRuntime.exports.jsx(SliderWrapper, { children: jsxRuntime.exports.jsx(Slider$1, { min: min, max: max, step: step, disabled: disabled, onChange: onChange }, void 0) }, void 0));
    };

    const MenuContainer = styled__default["default"].div `
  position: relative;
  z-index: 4;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease-in, visibility 0.2s ease-in;
`;
    const MenuWrapper = styled__default["default"].div `
  position: absolute;
  z-index: 4;
  top: 10px;
  ${({ $align }) => ($align === 'left' ? 'left: 0;' : 'right: 0;')}
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.mischa};
  border-radius: 8px;
`;
    const MenuItemWrapper = styled__default["default"].button `
  appearance: none;
  padding: 0;
  border-radius: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  height: 35px;
  align-items: center;
  padding: 0px 16px;
  margin: 10px 16px 0px 16px;
  border-radius: 8px;

  transition: background-color 0.2s ease-in;

  &:last-child {
    margin-bottom: 16px;
  }

  &:first-child {
    margin-top: 16px;
  }

  &:hover {
    background-color: ${COLORS.selago};
  }

  &:active {
    background-color: ${COLORS.linkWater};

    & > span {
      color: ${COLORS.governorBay};
    }
  }
`;
    const MenuLabel = styled__default["default"].span `
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  white-space: nowrap;

  transition: color 0.1s ease-in;

  color: ${COLORS.charade};
`;
    const MenuIcon = styled__default["default"].div `
  display: flex;
  flex-direction: center;
  color: ${COLORS.havelockBlue};
  margin-right: 8px;
`;
    const Item = ({ isVisible = false, as, className, href, onClick, icon, children, }) => {
        return (jsxRuntime.exports.jsxs(MenuItemWrapper, Object.assign({ tabIndex: isVisible ? undefined : -1, as: as, className: className, type: as === undefined ? 'button' : undefined, href: as === 'a' ? href : undefined, onClick: onClick }, { children: [icon && jsxRuntime.exports.jsx(MenuIcon, { children: icon }, void 0), children && jsxRuntime.exports.jsx(MenuLabel, { children: children }, void 0)] }), void 0));
    };
    const Menu = ({ className, isVisible, align = 'left', children, }) => {
        function getMutableChildrenArray() {
            if (!children) {
                return [];
            }
            if (Array.isArray(children)) {
                return children;
            }
            return [children];
        }
        return (jsxRuntime.exports.jsx(MenuContainer, Object.assign({ className: className, isVisible: isVisible }, { children: jsxRuntime.exports.jsx(MenuWrapper, Object.assign({ "$align": align }, { children: getMutableChildrenArray().reduce((acc, child, i) => {
                    if (child) {
                        acc.push(React.cloneElement(child, {
                            key: i,
                            isVisible: isVisible,
                        }));
                    }
                    return acc;
                }, []) }), void 0) }), void 0));
    };
    Menu.Item = Item;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    var _path, _path2;

    function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

    var SvgX = function SvgX(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$4({
        xmlns: "http://www.w3.org/2000/svg",
        className: "x_svg__icon x_svg__icon-tabler x_svg__icon-tabler-x",
        width: 24,
        height: 24,
        strokeWidth: 2,
        stroke: "currentColor",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z",
        stroke: "none"
      })), _path2 || (_path2 = /*#__PURE__*/React__namespace.createElement("path", {
        d: "M18 6 6 18M6 6l12 12"
      })));
    };

    var _g$3;

    function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

    var SvgInfoCircleFilled = function SvgInfoCircleFilled(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$3({
        height: 24,
        width: 24,
        xmlns: "http://www.w3.org/2000/svg"
      }, props), _g$3 || (_g$3 = /*#__PURE__*/React__namespace.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z"
      }), /*#__PURE__*/React__namespace.createElement("path", {
        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 9h-1l-.117.007A1 1 0 0 0 11 13v3l.007.117A1 1 0 0 0 12 17h1l.117-.007A1 1 0 0 0 14 16l-.007-.117a1 1 0 0 0-.876-.876L13 15v-3l-.007-.117A1 1 0 0 0 12 11zm.01-4-.127.007A1 1 0 0 0 12 9l.127-.007A1 1 0 0 0 12.01 7z",
        fill: "currentColor",
        fillRule: "nonzero"
      }))));
    };

    var _g$2;

    function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

    var SvgCircleCheckFilled = function SvgCircleCheckFilled(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
        height: 24,
        width: 24,
        xmlns: "http://www.w3.org/2000/svg"
      }, props), _g$2 || (_g$2 = /*#__PURE__*/React__namespace.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z"
      }), /*#__PURE__*/React__namespace.createElement("path", {
        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.707 7.293a1 1 0 0 0-1.414 0L11 12.585l-1.293-1.292-.094-.083a1 1 0 0 0-1.32 1.497l2 2 .094.083a1 1 0 0 0 1.32-.083l4-4 .083-.094a1 1 0 0 0-.083-1.32z",
        fill: "currentColor",
        fillRule: "nonzero"
      }))));
    };

    var _g$1;

    function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

    var SvgAlertTriangleFilled = function SvgAlertTriangleFilled(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
        height: 24,
        width: 24,
        xmlns: "http://www.w3.org/2000/svg"
      }, props), _g$1 || (_g$1 = /*#__PURE__*/React__namespace.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z"
      }), /*#__PURE__*/React__namespace.createElement("path", {
        d: "M11.99 1.968c1.023 0 1.97.521 2.512 1.359l.103.172 7.1 12.25.062.126a3 3 0 0 1-2.568 4.117L19 20l-14.161-.001a3 3 0 0 1-2.697-3.93l.072-.195.06-.125L9.366 3.516a3 3 0 0 1 2.625-1.548zM12 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-6a1 1 0 0 0-1 1v2l.007.117A1 1 0 0 0 13 11V9l-.007-.117A1 1 0 0 0 12 8z",
        fill: "currentColor",
        fillRule: "nonzero"
      }))));
    };

    var _g;

    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

    var SvgAlertCircleFilled = function SvgAlertCircleFilled(props) {
      return /*#__PURE__*/React__namespace.createElement("svg", _extends({
        height: 24,
        width: 24,
        xmlns: "http://www.w3.org/2000/svg"
      }, props), _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, /*#__PURE__*/React__namespace.createElement("path", {
        d: "M0 0h24v24H0z"
      }), /*#__PURE__*/React__namespace.createElement("path", {
        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.01 13-.127.007A1 1 0 0 0 12 17l.127-.007A1 1 0 0 0 12.01 15zM12 7a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 13 12V8l-.007-.117A1 1 0 0 0 12 7z",
        fill: "currentColor",
        fillRule: "nonzero"
      }))));
    };

    const animateIn = styled.keyframes `
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
  }
`;
    const animateInReducedMotion = styled.keyframes `
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
    const progressOut = styled.keyframes `
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
`;
    const Positioner = styled__default["default"].div `
  z-index: 1;
  position: fixed;
  right: ${props => { var _a; return (_a = props.$left) !== null && _a !== void 0 ? _a : 0; }}px;
  bottom: ${props => { var _a; return (_a = props.$bottom) !== null && _a !== void 0 ? _a : 0; }}px;
  left: ${props => { var _a; return (_a = props.$bottom) !== null && _a !== void 0 ? _a : 0; }}px;
  max-width: 100%;
  opacity: ${props => (props.$closing ? 0 : 1)};
  transition: transform ease 280ms, opacity ease 280ms;
  transform: translateX(${props => (props.$closing ? -100 : 0)}%)
    translateY(${props => -props.$index * 100}%)
    translateY(${props => -props.$index * 10}px);

  @media (prefers-reduced-motion) {
    transform: translateY(${props => -props.$index * 100}%)
      translateY(${props => -props.$index * 10}px);
    transition: opacity ease 280ms;
  }
`;
    const ProgressWrapper = styled__default["default"].span `
  display: block;
  width: 100%;
  height: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: hidden;
`;
    const Progress = styled__default["default"].span `
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${props => props.$color};
  animation: ${progressOut} ${props => props.$duration}ms linear forwards;
`;
    const Container$1 = styled__default["default"].div `
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
  max-width: 427px;
  background-color: ${COLORS.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 5px 50px 10px rgba(0, 0, 0, 0.05);
  animation: ${animateIn} ease 280ms forwards;

  @media (prefers-reduced-motion) {
    animation: ${animateInReducedMotion} ease 280ms forwards;
  }

  &:hover {
    ${Progress} {
      animation-play-state: paused;
    }
  }
`;
    const CloseButton = styled__default["default"].button `
  z-index: 1;
  position: absolute;
  top: 4px;
  right: 4px;
  appearance: none;
  display: block;
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  color: ${COLORS.charade};
`;
    const Inner = styled__default["default"].span `
  display: flex;
  flex-grow: 1;
  padding: 16px 32px 15px 16px;
  box-sizing: border-box;
`;
    const InnerLeft = styled__default["default"].span `
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${props => props.$color};

  & svg {
    margin-right: 16px;
  }
`;
    const InnerRight = styled__default["default"].span `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;
  overflow: hidden;
`;
    const Title = styled__default["default"].span `
  display: block;
  margin-bottom: 4px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.167em;
  color: ${props => props.$color};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
    const Message = styled__default["default"].span `
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  line-height: 1.167em;
  color: ${COLORS.charade};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
    function getIcon(variant) {
        switch (variant) {
            case 'info':
                return jsxRuntime.exports.jsx(SvgInfoCircleFilled, { width: 32, height: 32, viewBox: "0 0 24 24" }, void 0);
            case 'success':
                return jsxRuntime.exports.jsx(SvgCircleCheckFilled, { width: 32, height: 32, viewBox: "0 0 24 24" }, void 0);
            case 'warning':
                return jsxRuntime.exports.jsx(SvgAlertTriangleFilled, { width: 32, height: 32, viewBox: "0 0 24 24" }, void 0);
            case 'error':
                return jsxRuntime.exports.jsx(SvgAlertCircleFilled, { width: 32, height: 32, viewBox: "0 0 24 24" }, void 0);
            default:
                return null;
        }
    }
    function getColor(variant) {
        switch (variant) {
            case 'info':
                return COLORS.havelockBlue;
            case 'success':
                return COLORS.emerald;
            case 'warning':
                return COLORS.yellowOrange;
            case 'error':
                return COLORS.carnation;
            default:
                return COLORS.black;
        }
    }
    const ProgressBar = React.memo(({ duration, color, onAnimationEnd }) => {
        return (jsxRuntime.exports.jsx(ProgressWrapper, { children: jsxRuntime.exports.jsx(Progress, { "$duration": duration, "$color": color, onAnimationEnd: onAnimationEnd }, void 0) }, void 0));
    });
    ProgressBar.displayName = 'ProgressBar';
    const Toast = ({ duration = 5000, id, variant = 'info', title, message, onClick, }) => {
        const context = React.useContext(ToasterContext);
        const icon = getIcon(variant);
        const color = getColor(variant);
        function handleClick() {
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }
        function handleCloseClick() {
            if (id)
                context.close(id);
        }
        function handleAnimationEnd() {
            if (id)
                context.close(id);
        }
        return (jsxRuntime.exports.jsxs(Container$1, Object.assign({ onClick: handleClick }, { children: [jsxRuntime.exports.jsxs(Inner, { children: [jsxRuntime.exports.jsx(InnerLeft, Object.assign({ "$color": color }, { children: icon }), void 0), jsxRuntime.exports.jsxs(InnerRight, { children: [!!title && jsxRuntime.exports.jsx(Title, Object.assign({ "$color": color }, { children: title }), void 0), !!message && jsxRuntime.exports.jsx(Message, { children: message }, void 0)] }, void 0)] }, void 0), jsxRuntime.exports.jsx(ProgressBar, { duration: duration, color: color, onAnimationEnd: handleAnimationEnd }, void 0), jsxRuntime.exports.jsx(CloseButton, Object.assign({ type: "button", onClick: handleCloseClick, "aria-label": "close" }, { children: jsxRuntime.exports.jsx(SvgX, { width: 20, height: 20, viewBox: "0 0 24 24" }, void 0) }), void 0)] }), void 0));
    };
    // @ts-ignore
    const MemoizedToast = React.memo(Toast);
    MemoizedToast.info = (title, message, options) => {
        throw new Error('Toast.info() was called before Toaster had mounted.');
    };
    MemoizedToast.success = (title, message, options) => {
        throw new Error('Toast.success() was called before Toaster had mounted.');
    };
    MemoizedToast.warning = (title, message, options) => {
        throw new Error('Toast.warning() was called before Toaster had mounted.');
    };
    MemoizedToast.error = (title, message, options) => {
        throw new Error('Toast.error() was called before Toaster had mounted.');
    };
    MemoizedToast.displayName = 'Toast';
    const ToasterContext = React.createContext({
        remove: (id) => { },
        close: (id) => { },
    });
    function getOrCreatePortalElement() {
        let element = document.getElementById('toasts-portal');
        if (!element) {
            element = document.createElement('div');
            element.setAttribute('id', 'toasts-portal');
            document.body.appendChild(element);
        }
        return element;
    }
    const Toaster = () => {
        const [toasts, setToasts] = React.useState([]);
        React.useEffect(() => {
            function generateId() {
                return `toast-${Math.random().toString().split('.')[1]}-${Date.now().toString()}`;
            }
            function createToastCallback(variant) {
                return (title, message, options) => {
                    const toastConfig = Object.assign({ id: generateId(), variant,
                        title,
                        message }, options);
                    setToasts(prev => [...prev, toastConfig]);
                };
            }
            MemoizedToast.info = createToastCallback('info');
            MemoizedToast.success = createToastCallback('success');
            MemoizedToast.warning = createToastCallback('warning');
            MemoizedToast.error = createToastCallback('error');
        }, []);
        const remove = React.useCallback((id) => {
            setToasts(prev => prev.filter(toastConfig => toastConfig.id !== id));
        }, []);
        const close = React.useCallback((id) => {
            setToasts(prev => prev.map(toastConfig => toastConfig.id === id
                ? Object.assign(Object.assign({}, toastConfig), { closing: true, onTransitionEnd: () => remove(id) }) : toastConfig));
        }, [remove]);
        const value = React.useMemo(() => {
            return {
                remove,
                close,
            };
        }, [remove, close]);
        return reactDom.createPortal(jsxRuntime.exports.jsx(ToasterContext.Provider, Object.assign({ value: value }, { children: toasts.map((_a, index) => {
                var { closing, bottom = 10, left = 10, onTransitionEnd } = _a, props = __rest(_a, ["closing", "bottom", "left", "onTransitionEnd"]);
                return (jsxRuntime.exports.jsx(Positioner, Object.assign({ "$closing": closing, "$index": index, "$bottom": bottom, "$left": left, onTransitionEnd: onTransitionEnd }, { children: jsxRuntime.exports.jsx(MemoizedToast, Object.assign({}, props), void 0) }), props.id));
            }) }), void 0), getOrCreatePortalElement());
    };

    const Container = styled__default["default"].div `
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 16px;
  box-sizing: border-box;
  border: 1px solid ${COLORS.mischa};
  border-radius: 8px;
`;
    const Hider = styled__default["default"].div `
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  & select {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    appearance: none;
    display: block;
    width: 100%;
    height: 100%;
    color: transparent;
    background: transparent;
    border: none;
  }
`;
    const Caption = styled__default["default"].span `
  display: block;
  flex-grow: 1;
  margin-right: 8px;
  font-family: Roboto, sans-serif;
  font-size: 1.6rem;
  line-height: 1.1875em;
  color: ${props => (props.$hasValue ? COLORS.charade : COLORS.silverChalice)};
`;
    const StyledChevronDownIcon = styled__default["default"](SvgChevronDown) `
  color: ${COLORS.silverChalice};
  visibility: ${props => (props.$hidden ? 'hidden' : 'visible')};
`;
    const StyledXIcon = styled__default["default"](SvgX) `
  color: ${COLORS.silverChalice};
`;
    const ClearButtonWrapper = styled__default["default"].div `
  z-index: 2;
  position: absolute;
  top: 0;
  right: 16px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
    const ClearButton = styled__default["default"].button `
  z-index: 1;
  position: relative;
  appearance: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0;
  box-shadow: none;
  margin: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: -10px;
    right: -15px;
    bottom: -10px;
    left: -15px;
  }
`;
    const Select = ({ className, id, placeholder = '', name, value = '', options, onChange }, ref) => {
        var _a, _b, _c;
        const innerRef = React.useRef(null);
        React.useImperativeHandle(ref, () => innerRef.current);
        const selectedOption = (_a = options === null || options === void 0 ? void 0 : options.find) === null || _a === void 0 ? void 0 : _a.call(options, o => o.value === value);
        function handleClearClick() {
            if (innerRef.current) {
                innerRef.current.selectedIndex = 0;
                const evt = new Event('change', { bubbles: true });
                innerRef.current.dispatchEvent(evt);
            }
        }
        function getDerivedId() {
            if (id)
                return id;
            if (placeholder && name)
                return name;
            if (placeholder && typeof placeholder === 'string')
                return placeholder;
            return Math.random().toString();
        }
        const derivedId = getDerivedId();
        return (jsxRuntime.exports.jsxs(Container, Object.assign({ className: className }, { children: [jsxRuntime.exports.jsx(Caption, Object.assign({ "$hasValue": !!selectedOption }, { children: (_b = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) !== null && _b !== void 0 ? _b : placeholder }), void 0), jsxRuntime.exports.jsx(StyledChevronDownIcon, { "$hidden": !!value, width: 20, height: 20, viewBox: "0 0 24 24" }, void 0), jsxRuntime.exports.jsx(Hider, { children: jsxRuntime.exports.jsxs("select", Object.assign({ id: derivedId, ref: innerRef, value: selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value, name: name, placeholder: placeholder, onChange: onChange }, { children: [jsxRuntime.exports.jsx("option", Object.assign({ value: "" }, { children: placeholder }), void 0), (_c = options === null || options === void 0 ? void 0 : options.map) === null || _c === void 0 ? void 0 : _c.call(options, option => {
                                var _a;
                                return (jsxRuntime.exports.jsx("option", Object.assign({ value: option.value }, { children: option.label }), (_a = option.id) !== null && _a !== void 0 ? _a : `${option.value}-${option.label}`));
                            })] }), void 0) }, void 0), !!value && (jsxRuntime.exports.jsx(ClearButtonWrapper, { children: jsxRuntime.exports.jsx(ClearButton, Object.assign({ type: "button", onClick: handleClearClick, "aria-label": "clear" }, { children: jsxRuntime.exports.jsx(StyledXIcon, { width: 20, height: 20, viewBox: "0 0 24 24" }, void 0) }), void 0) }, void 0))] }), void 0));
    };
    const ForwardedSelect = React.forwardRef(Select);

    exports.Avatar = Avatar;
    exports.Button = Button;
    exports.Checkbox = ForwardedCheckbox;
    exports.GlobalStyle = GlobalStyle;
    exports.Menu = Menu;
    exports.RadioButton = ForwardedRadioButton;
    exports.Select = ForwardedSelect;
    exports.Slider = Slider;
    exports.Spinner = Spinner;
    exports.Switcher = Switcher;
    exports.TextField = ForwardedTextField;
    exports.Toast = MemoizedToast;
    exports.Toaster = Toaster;
    exports.globalStyle = globalStyle;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
