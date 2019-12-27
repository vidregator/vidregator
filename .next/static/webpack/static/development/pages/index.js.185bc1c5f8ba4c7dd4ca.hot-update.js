webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/use-debounce/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-debounce/esm/index.js ***!
  \************************************************/
/*! exports provided: useDebounce, useDebouncedCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDebounce */ "./node_modules/use-debounce/esm/useDebounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return _useDebounce__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useDebouncedCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDebouncedCallback */ "./node_modules/use-debounce/esm/useDebouncedCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebouncedCallback", function() { return _useDebouncedCallback__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./node_modules/use-debounce/esm/useDebounce.js":
/*!******************************************************!*\
  !*** ./node_modules/use-debounce/esm/useDebounce.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useDebouncedCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDebouncedCallback */ "./node_modules/use-debounce/esm/useDebouncedCallback.js");


function valueEquality(left, right) {
    return left === right;
}
function useDebounce(value, delay, options) {
    var eq = options && options.equalityFn ? options.equalityFn : valueEquality;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value), state = _a[0], dispatch = _a[1];
    var _b = Object(_useDebouncedCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) { return dispatch(value); }, []), delay, options), callback = _b[0], cancel = _b[1], callPending = _b[2];
    var previousValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        // We need to use this condition otherwise we will run debounce timer for the first render (including maxWait option)
        if (!eq(previousValue.current, value)) {
            callback(value);
            previousValue.current = value;
        }
    }, [value, callback, eq]);
    return [state, cancel, callPending];
}


/***/ }),

/***/ "./node_modules/use-debounce/esm/useDebouncedCallback.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-debounce/esm/useDebouncedCallback.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDebouncedCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebouncedCallback(callback, delay, options) {
    if (options === void 0) { options = {}; }
    var maxWait = options.maxWait;
    var maxWaitHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var maxWaitArgs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
    var leading = options.leading;
    var trailing = options.trailing === undefined ? true : options.trailing;
    var leadingCall = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var functionTimeoutHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var isComponentUnmounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var debouncedFunction = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
    debouncedFunction.current = callback;
    var cancelDebouncedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        clearTimeout(functionTimeoutHandler.current);
        clearTimeout(maxWaitHandler.current);
        maxWaitHandler.current = null;
        maxWaitArgs.current = [];
        functionTimeoutHandler.current = null;
        leadingCall.current = false;
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () { return function () {
        // we use flag, as we allow to call callPending outside the hook
        isComponentUnmounted.current = true;
    }; }, []);
    var debouncedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        maxWaitArgs.current = args;
        clearTimeout(functionTimeoutHandler.current);
        if (leadingCall.current) {
            leadingCall.current = false;
        }
        if (!functionTimeoutHandler.current && leading && !leadingCall.current) {
            debouncedFunction.current.apply(debouncedFunction, args);
            leadingCall.current = true;
        }
        functionTimeoutHandler.current = setTimeout(function () {
            var shouldCallFunction = true;
            if (leading && leadingCall.current) {
                shouldCallFunction = false;
            }
            cancelDebouncedCallback();
            if (!isComponentUnmounted.current && trailing && shouldCallFunction) {
                debouncedFunction.current.apply(debouncedFunction, args);
            }
        }, delay);
        if (maxWait && !maxWaitHandler.current && trailing) {
            maxWaitHandler.current = setTimeout(function () {
                var args = maxWaitArgs.current;
                cancelDebouncedCallback();
                if (!isComponentUnmounted.current) {
                    debouncedFunction.current.apply(null, args);
                }
            }, maxWait);
        }
    }, [maxWait, delay, cancelDebouncedCallback, leading, trailing]);
    var callPending = function () {
        // Call pending callback only if we have anything in our queue
        if (!functionTimeoutHandler.current) {
            return;
        }
        debouncedFunction.current.apply(null, maxWaitArgs.current);
        cancelDebouncedCallback();
    };
    // At the moment, we use 3 args array so that we save backward compatibility
    return [debouncedCallback, cancelDebouncedCallback, callPending];
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-debounce */ "./node_modules/use-debounce/esm/index.js");
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Global */ "./components/Global.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchBox */ "./components/SearchBox.js");
/* harmony import */ var _components_VideoSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/VideoSection */ "./components/VideoSection.js");
/* harmony import */ var _components_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Stack */ "./components/Stack.js");
/* harmony import */ var _lib_apiSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/apiSearch */ "./lib/apiSearch.js");
var _jsxFileName = "/home/runner/vidregator-1/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      query = _useState[0],
      setQuery = _useState[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])(query, _lib_apiSearch__WEBPACK_IMPORTED_MODULE_7__["default"]),
      data = _useSWR.data,
      error = _useSWR.error;

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_Global__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components_Stack__WEBPACK_IMPORTED_MODULE_6__["default"], {
    space: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    placeholder: "Search for anything...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), query.trim() && (error ? 'Error!' : data ? data.map(function (site) {
    return __jsx(_components_VideoSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: site.name,
      videos: site.results,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }) : 'Loading...')));
});

/***/ })

})
//# sourceMappingURL=index.js.185bc1c5f8ba4c7dd4ca.hot-update.js.map