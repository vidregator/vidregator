webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-debounce */ "./node_modules/use-debounce/esm/index.js");
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Global */ "./components/Global.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchBox */ "./components/SearchBox.js");
/* harmony import */ var _components_VideoSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/VideoSection */ "./components/VideoSection.js");
/* harmony import */ var _components_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Stack */ "./components/Stack.js");
/* harmony import */ var _lib_apiSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/apiSearch */ "./lib/apiSearch.js");

var _jsxFileName = "/home/runner/vidregator-1/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      query = _useState[0],
      setQuery = _useState[1];

  var _useDebounce = Object(use_debounce__WEBPACK_IMPORTED_MODULE_3__["useDebounce"])(query, 800),
      _useDebounce2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDebounce, 1),
      debouncedQuery = _useDebounce2[0];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])(debouncedQuery, _lib_apiSearch__WEBPACK_IMPORTED_MODULE_8__["default"]),
      data = _useSWR.data,
      error = _useSWR.error;

  console.log(error);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_Global__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_Stack__WEBPACK_IMPORTED_MODULE_7__["default"], {
    space: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    placeholder: "Search for anything...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), query.trim() && (error ? 'Error!' : data ? data.map(function (site) {
    return __jsx(_components_VideoSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: site.name,
      videos: site.results,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  }) : 'Loading...')));
});

/***/ })

})
//# sourceMappingURL=index.js.c81cc689f656264a7cb1.hot-update.js.map