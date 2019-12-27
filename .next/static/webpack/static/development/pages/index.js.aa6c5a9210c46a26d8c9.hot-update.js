webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/apiSearch.js":
/*!**************************!*\
  !*** ./lib/apiSearch.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function _callee(query) {
  var cached, res, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (query.trim()) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", null);

        case 2:
          cached =  true && window.localStorage.getItem("cache:".concat(encodeURIComponent(query)));

          if (!cached) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", JSON.parse(cached));

        case 5:
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("/api/search/".concat(encodeURIComponent(query))));

        case 7:
          res = _context.sent;

          if (!res.ok) {
            _context.next = 16;
            break;
          }

          _context.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 11:
          json = _context.sent;
           true && window.localStorage.setItem("cache:".concat(encodeURIComponent(query)), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(json));
          return _context.abrupt("return", json);

        case 16:
          _context.t0 = Error;
          _context.next = 19;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.text());

        case 19:
          _context.t1 = _context.sent;
          throw new _context.t0(_context.t1);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  });
});

/***/ })

})
//# sourceMappingURL=index.js.aa6c5a9210c46a26d8c9.hot-update.js.map