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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _lib_apiSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/apiSearch */ "./lib/apiSearch.js");
var _jsxFileName = "/home/runner/vidregator/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('test lol'),
      query = _useState[0],
      setQuery = _useState[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])(query, _lib_apiSearch__WEBPACK_IMPORTED_MODULE_3__["default"]),
      data = _useSWR.data,
      error = _useSWR.error;

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Vidregator"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("input", {
    type: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), error ? 'Error!' : data ? data.map(function (site) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, site.name), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, site.results.map(function (result) {
      return __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, result.name), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), "Description:  ", result.description, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), "Tags: ", result.tags.join(', '));
    })));
  }) : 'Loading...');
});

/***/ })

})
//# sourceMappingURL=index.js.4f57c1ea5987c9a7ebd3.hot-update.js.map