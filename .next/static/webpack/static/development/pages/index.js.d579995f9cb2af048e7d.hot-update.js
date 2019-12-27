webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/VideoCard.js":
/*!*********************************!*\
  !*** ./components/VideoCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./styles.js");
var _jsxFileName = "/home/runner/vidregator-1/components/VideoCard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var name = _ref.name,
      image = _ref.image,
      tags = _ref.tags,
      url = _ref.url;
  return __jsx("article", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2082893187", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2082893187", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, image && __jsx("img", {
    src: image,
    alt: "".concat(name, " thumbnail"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2082893187", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2082893187", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, name), tags && __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2082893187", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, tags.map(function (tag) {
    return "#".concat(tag);
  }).join(' '))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2082893187",
    dynamic: [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted],
    __self: this
  }, "article.__jsx-style-dynamic-selector{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;}a.__jsx-style-dynamic-selector{".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, " ").concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable, " text-decoration:none;padding:22px;display:block;outline:none;}a.__jsx-style-dynamic-selector:hover{").concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc, ";}a.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:active{").concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc, ";}img.__jsx-style-dynamic-selector{width:100%;display:block;border-radius:4px;margin-bottom:8px;}h1.__jsx-style-dynamic-selector{font-size:1rem;}h1.__jsx-style-dynamic-selector,p.__jsx-style-dynamic-selector{margin:0;}p.__jsx-style-dynamic-selector{margin-top:8px;").concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci92aWRyZWdhdG9yLTEvY29tcG9uZW50cy9WaWRlb0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdCLEFBRzRCLEFBTUUsQUFReEIsQUFJQSxBQUdjLEFBT0ksQUFJTixBQUlNLFNBSGpCLEVBWGdCLElBT2hCLEFBU0QsVUFmcUIsSUFUcEIsQUFJQSxjQU1vQixDQWNwQixpQkFiQSxTQXhCQSxTQU1lLGFBQ0MsY0FDRCxhQUNmIiwiZmlsZSI6Ii9ob21lL3J1bm5lci92aWRyZWdhdG9yLTEvY29tcG9uZW50cy9WaWRlb0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcydcblxuZXhwb3J0IGRlZmF1bHQgKHsgbmFtZSwgaW1hZ2UsIHRhZ3MsIHVybCB9KSA9PiAoXG4gIDxhcnRpY2xlPlxuICAgIDxhIGhyZWY9JyMnPlxuICAgICAge2ltYWdlICYmIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtgJHtuYW1lfSB0aHVtYm5haWxgfSAvPn1cbiAgICAgIDxoMT57bmFtZX08L2gxPlxuICAgICAge3RhZ3MgJiYgPHA+e3RhZ3MubWFwKCh0YWcpID0+IGAjJHt0YWd9YCkuam9pbignICcpfTwvcD59XG4gICAgPC9hPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYXJ0aWNsZSB7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICAke3N0eWxlcy5zdXJmYWNlfVxuICAgICAgICAke3N0eWxlcy50aGljY2FibGV9XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMjJweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICAke3N0eWxlcy50aGljY31cbiAgICAgIH1cblxuICAgICAgYTpob3ZlcjphY3RpdmUge1xuICAgICAgICAke3N0eWxlcy5ub3RUaGljY31cbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIGgxLCBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAke3N0eWxlcy50ZXh0Lm11dGVkfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9hcnRpY2xlPlxuKSJdfQ== */\n/*@ sourceURL=/home/runner/vidregator-1/components/VideoCard.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.d579995f9cb2af048e7d.hot-update.js.map