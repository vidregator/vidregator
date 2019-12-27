webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Global */ "./components/Global.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchBox */ "./components/SearchBox.js");
/* harmony import */ var _components_VideoSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/VideoSection */ "./components/VideoSection.js");
/* harmony import */ var _components_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Stack */ "./components/Stack.js");
/* harmony import */ var _lib_apiSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/apiSearch */ "./lib/apiSearch.js");
var _jsxFileName = "/home/runner/vidregator-1/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      query = _useState[0],
      setQuery = _useState[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])(query, _lib_apiSearch__WEBPACK_IMPORTED_MODULE_6__["default"]),
      data = _useSWR.data,
      error = _useSWR.error;

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_components_Global__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_components_Stack__WEBPACK_IMPORTED_MODULE_5__["default"], {
    space: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    placeholder: "Search for anything...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), query.trim() && error ? 'Error!' : data ? data.map(function (site) {
    return __jsx(_components_VideoSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: site.name,
      videos: site.results,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  }) : 'Loading...'));
});

/***/ })

})
//# sourceMappingURL=index.js.91433759c5306f827b75.hot-update.js.map