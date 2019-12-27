module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Global.js":
/*!******************************!*\
  !*** ./components/Global.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./styles.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/runner/vidregator-1/components/Global.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("title", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2119452273", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].fullBackground, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].backgroundGradient, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.light, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].font]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Vidregator"), __jsx("link", {
  rel: "icon",
  href: "/favicon.ico",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2119452273", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].fullBackground, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].backgroundGradient, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.light, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].font]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css?family=Karla:400,700&display=swap",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2119452273", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].fullBackground, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].backgroundGradient, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.light, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].font]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2119452273",
  dynamic: [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].fullBackground, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].backgroundGradient, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.light, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].font],
  __self: undefined
}, `html{${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].fullBackground} ${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].backgroundGradient} ${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.light} ${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].font} height:100vh;}body{padding:30px 60px;margin:0 auto;max-width:1400px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci92aWRyZWdhdG9yLTEvY29tcG9uZW50cy9HbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVXFCLEFBT29CLEFBSUssa0JBQ0osY0FDRyxpQkFDbkIsZ0ZBTkEiLCJmaWxlIjoiL2hvbWUvcnVubmVyL3ZpZHJlZ2F0b3ItMS9jb21wb25lbnRzL0dsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoPD5cbiAgPEhlYWQ+XG4gICAgPHRpdGxlPlZpZHJlZ2F0b3I8L3RpdGxlPlxuICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthcmxhOjQwMCw3MDAmZGlzcGxheT1zd2FwJyAvPlxuICA8L0hlYWQ+XG5cbiAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICBodG1sIHtcbiAgICAgICR7c3R5bGVzLmZ1bGxCYWNrZ3JvdW5kfVxuICAgICAgJHtzdHlsZXMuYmFja2dyb3VuZEdyYWRpZW50fVxuICAgICAgJHtzdHlsZXMudGV4dC5saWdodH1cbiAgICAgICR7c3R5bGVzLmZvbnR9XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIH1cblxuICAgIGJvZHkge1xuICAgICAgcGFkZGluZzogMzBweCA2MHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbjwvPikiXX0= */
/*@ sourceURL=/home/runner/vidregator-1/components/Global.js */`)));

/***/ }),

/***/ "./components/SearchBox.js":
/*!*********************************!*\
  !*** ./components/SearchBox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./styles.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/runner/vidregator-1/components/SearchBox.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  value,
  onChange,
  placeholder
}) => __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1219865645", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].inputReset, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].biggerText, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted]]]) + " " + 'container',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1219865645", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].inputReset, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].biggerText, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted]]]) + " " + 'icon',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_3__["Search"], {
  width: 20,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
})), __jsx("input", {
  type: "search",
  value: value,
  onChange: onChange,
  placeholder: placeholder,
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1219865645", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].inputReset, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].biggerText, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1219865645",
  dynamic: [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].inputReset, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].biggerText, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted],
  __self: undefined
}, `.container.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input.__jsx-style-dynamic-selector{${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface} ${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].inputReset} ${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].biggerText} width:100%;padding-left:52px;}.icon.__jsx-style-dynamic-selector{${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted} position:absolute;padding-left:22px;pointer-events:none;}.__jsx-style-dynamic-selector::-webkit-input-placeholder{${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted};}.__jsx-style-dynamic-selector::-moz-placeholder{${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted};}.__jsx-style-dynamic-selector:-ms-input-placeholder{${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted};}.__jsx-style-dynamic-selector::placeholder{${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted};}input.__jsx-style-dynamic-selector::-webkit-search-decoration,input.__jsx-style-dynamic-selector::-webkit-search-cancel-button,input.__jsx-style-dynamic-selector::-webkit-search-results-button,input.__jsx-style-dynamic-selector::-webkit-search-results-decoration{-webkit-appearance:none;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci92aWRyZWdhdG9yLTEvY29tcG9uZW50cy9TZWFyY2hCb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBRzJCLEFBU1AsQUFNTyxBQU9yQixBQU0wQixrQkEzQlYsTUE0QmYsS0FQQSxrQkFOb0Isa0JBQ0Usb0JBQ3RCLE9BaEJxQixNQVFELGtCQUNwQixxRUFSQSIsImZpbGUiOiIvaG9tZS9ydW5uZXIvdmlkcmVnYXRvci0xL2NvbXBvbmVudHMvU2VhcmNoQm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICdyZWFjdC1mZWF0aGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyB2YWx1ZSwgb25DaGFuZ2UsIHBsYWNlaG9sZGVyIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgPGRpdiBjbGFzc05hbWU9J2ljb24nPjxTZWFyY2ggd2lkdGg9ezIwfSAvPjwvZGl2PlxuICAgIDxpbnB1dFxuICAgICAgdHlwZT0nc2VhcmNoJ1xuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgIC8+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIFxuICAgICAgaW5wdXQge1xuICAgICAgICAke3N0eWxlcy5zdXJmYWNlfVxuICAgICAgICAke3N0eWxlcy5pbnB1dFJlc2V0fVxuICAgICAgICAke3N0eWxlcy5iaWdnZXJUZXh0fVxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MnB4O1xuICAgICAgfVxuXG4gICAgICAuaWNvbiB7XG4gICAgICAgICR7c3R5bGVzLnRleHQubXV0ZWR9XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICR7c3R5bGVzLnRleHQubXV0ZWR9XG4gICAgICB9XG5cbiAgICAgIGlucHV0Ojotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuICAgICAgaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG4gICAgICBpbnB1dDo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4gICAgICBpbnB1dDo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */
/*@ sourceURL=/home/runner/vidregator-1/components/SearchBox.js */`)));

/***/ }),

/***/ "./components/Stack.js":
/*!*****************************!*\
  !*** ./components/Stack.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/runner/vidregator-1/components/Stack.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  space = 20
}) => __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2923978695", [space]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2923978695",
  dynamic: [space],
  __self: undefined
}, `div.__jsx-style-dynamic-selector{display:grid;grid-row-gap:${space}px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci92aWRyZWdhdG9yLTEvY29tcG9uZW50cy9TdGFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJZ0IsQUFHc0IsYUFDK0IsNENBQzlDIiwiZmlsZSI6Ii9ob21lL3J1bm5lci92aWRyZWdhdG9yLTEvY29tcG9uZW50cy9TdGFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCBzcGFjZSA9IDIwIH0pID0+IChcbiAgPGRpdj5cbiAgICB7Y2hpbGRyZW59XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXJvdy1nYXA6ICR7c3BhY2V9cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */
/*@ sourceURL=/home/runner/vidregator-1/components/Stack.js */`)));

/***/ }),

/***/ "./components/VideoCard.js":
/*!*********************************!*\
  !*** ./components/VideoCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./styles.js");
var _jsxFileName = "/home/runner/vidregator-1/components/VideoCard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  name,
  image,
  tags,
  url
}) => __jsx("article", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2082893187", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("a", {
  href: url,
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2082893187", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, image && __jsx("img", {
  src: image,
  alt: `${name} thumbnail`,
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2082893187", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("h1", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2082893187", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, name), tags && __jsx("p", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2082893187", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, tags.map(tag => `#${tag}`).join(' '))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2082893187",
  dynamic: [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted],
  __self: undefined
}, `article.__jsx-style-dynamic-selector{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;}a.__jsx-style-dynamic-selector{${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].surface} ${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].thiccable} text-decoration:none;padding:22px;display:block;outline:none;}a.__jsx-style-dynamic-selector:hover{${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].thicc};}a.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:active{${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].notThicc};}img.__jsx-style-dynamic-selector{width:100%;display:block;border-radius:4px;margin-bottom:8px;}h1.__jsx-style-dynamic-selector{font-size:1rem;}h1.__jsx-style-dynamic-selector,p.__jsx-style-dynamic-selector{margin:0;}p.__jsx-style-dynamic-selector{margin-top:8px;${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.muted};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci92aWRyZWdhdG9yLTEvY29tcG9uZW50cy9WaWRlb0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdCLEFBRzRCLEFBTUUsQUFReEIsQUFJQSxBQUdjLEFBT0ksQUFJTixBQUlNLFNBSGpCLEVBWGdCLElBT2hCLEFBU0QsVUFmcUIsSUFUcEIsQUFJQSxjQU1vQixDQWNwQixpQkFiQSxTQXhCQSxTQU1lLGFBQ0MsY0FDRCxhQUNmIiwiZmlsZSI6Ii9ob21lL3J1bm5lci92aWRyZWdhdG9yLTEvY29tcG9uZW50cy9WaWRlb0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcydcblxuZXhwb3J0IGRlZmF1bHQgKHsgbmFtZSwgaW1hZ2UsIHRhZ3MsIHVybCB9KSA9PiAoXG4gIDxhcnRpY2xlPlxuICAgIDxhIGhyZWY9e3VybH0+XG4gICAgICB7aW1hZ2UgJiYgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e2Ake25hbWV9IHRodW1ibmFpbGB9IC8+fVxuICAgICAgPGgxPntuYW1lfTwvaDE+XG4gICAgICB7dGFncyAmJiA8cD57dGFncy5tYXAoKHRhZykgPT4gYCMke3RhZ31gKS5qb2luKCcgJyl9PC9wPn1cbiAgICA8L2E+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhcnRpY2xlIHtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgICR7c3R5bGVzLnN1cmZhY2V9XG4gICAgICAgICR7c3R5bGVzLnRoaWNjYWJsZX1cbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAyMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgICR7c3R5bGVzLnRoaWNjfVxuICAgICAgfVxuXG4gICAgICBhOmhvdmVyOmFjdGl2ZSB7XG4gICAgICAgICR7c3R5bGVzLm5vdFRoaWNjfVxuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgaDEsIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICR7c3R5bGVzLnRleHQubXV0ZWR9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2FydGljbGU+XG4pIl19 */
/*@ sourceURL=/home/runner/vidregator-1/components/VideoCard.js */`)));

/***/ }),

/***/ "./components/VideoSection.js":
/*!************************************!*\
  !*** ./components/VideoSection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./styles.js");
/* harmony import */ var _VideoCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VideoCard */ "./components/VideoCard.js");
var _jsxFileName = "/home/runner/vidregator-1/components/VideoSection.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  name,
  videos
}) => __jsx("section", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3570155361", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.mutedLight, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].biggerText, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].grid]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("h2", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3570155361", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.mutedLight, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].biggerText, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].grid]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, name), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3570155361", [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.mutedLight, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].biggerText, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].grid]]]) + " " + 'videos',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, videos.map(video => __jsx(_VideoCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
  image: video.image,
  name: video.name,
  tags: video.tags,
  url: video.url,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3570155361",
  dynamic: [_styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.mutedLight, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].biggerText, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].grid],
  __self: undefined
}, `h2.__jsx-style-dynamic-selector{${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].text.mutedLight} ${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].biggerText} margin:0;margin-bottom:18px;}.videos.__jsx-style-dynamic-selector{${_styles__WEBPACK_IMPORTED_MODULE_2__["default"].grid};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci92aWRyZWdhdG9yLTEvY29tcG9uZW50cy9WaWRlb1NlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJnQixBQUtrQixBQU1aLDZCQUFDLHNDQUxxQixtQkFDckIiLCJmaWxlIjoiL2hvbWUvcnVubmVyL3ZpZHJlZ2F0b3ItMS9jb21wb25lbnRzL1ZpZGVvU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzJ1xuaW1wb3J0IFZpZGVvQ2FyZCBmcm9tICcuL1ZpZGVvQ2FyZCdcblxuZXhwb3J0IGRlZmF1bHQgKHsgbmFtZSwgdmlkZW9zIH0pID0+IChcbiAgPHNlY3Rpb24+XG4gICAgPGgyPntuYW1lfTwvaDI+XG4gICAgPGRpdiBjbGFzc05hbWU9J3ZpZGVvcyc+XG4gICAgICB7dmlkZW9zLm1hcCgodmlkZW8pID0+IChcbiAgICAgICAgPFZpZGVvQ2FyZFxuICAgICAgICAgIGltYWdlPXt2aWRlby5pbWFnZX1cbiAgICAgICAgICBuYW1lPXt2aWRlby5uYW1lfVxuICAgICAgICAgIHRhZ3M9e3ZpZGVvLnRhZ3N9XG4gICAgICAgICAgdXJsPXt2aWRlby51cmx9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgyIHtcbiAgICAgICAgJHtzdHlsZXMudGV4dC5tdXRlZExpZ2h0fVxuICAgICAgICAke3N0eWxlcy5iaWdnZXJUZXh0fVxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIC52aWRlb3Mge1xuICAgICAgICAke3N0eWxlcy5ncmlkfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKSJdfQ== */
/*@ sourceURL=/home/runner/vidregator-1/components/VideoSection.js */`)));

/***/ }),

/***/ "./lib/apiSearch.js":
/*!**************************!*\
  !*** ./lib/apiSearch.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (async query => {
  if (!query.trim()) return null;
  const cached =  false && false;
  if (cached) return JSON.parse(cached);
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`/api/search/${encodeURIComponent(query)}`);

  if (res.ok) {
    const json = await res.json();
     false && false;
    return json;
  } else {
    throw new Error((await res.text()));
  }
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-debounce */ "use-debounce");
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Global */ "./components/Global.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchBox */ "./components/SearchBox.js");
/* harmony import */ var _components_VideoSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/VideoSection */ "./components/VideoSection.js");
/* harmony import */ var _components_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Stack */ "./components/Stack.js");
/* harmony import */ var _lib_apiSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/apiSearch */ "./lib/apiSearch.js");
var _jsxFileName = "/home/runner/vidregator-1/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [debouncedQuery] = Object(use_debounce__WEBPACK_IMPORTED_MODULE_2__["useDebounce"])(query, 800);
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_1___default()(debouncedQuery, _lib_apiSearch__WEBPACK_IMPORTED_MODULE_7__["default"]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_components_Global__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(_components_Stack__WEBPACK_IMPORTED_MODULE_6__["default"], {
    space: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search for anything...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), query.trim() && (error ? `Error! ${error.message}` : data ? data.map(site => __jsx(_components_VideoSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: site.name,
    videos: site.results,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })) : 'Loading...')));
});

/***/ }),

/***/ "./styles.js":
/*!*******************!*\
  !*** ./styles.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const text = {
  muted: `color: #A9A9A9;`,
  mutedLight: `color: #D7D7D7;`,
  light: `color: #FFFFFF;`
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fullBackground: `
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `,
  backgroundGradient: `
    background-color: #141415;
    background-image: radial-gradient(50% 50% at 50% 50%, #212432 40.1%, #141415 100%);
  `,
  inputReset: `
    display: block;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: inherit;
  `,
  grid: `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  `,
  thicc: `transform: scale(1.1);`,
  notThicc: `transform: scale(1);`,
  thiccable: `transition: transform 200ms ease;`,
  font: `font-family: 'Karla', sans-serif;`,
  biggerText: `font-size: 1.375rem;`,
  surface: `
    background: #323640;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    padding: 22px;
    ${text.light}
  `,
  text
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/vidregator-1/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "use-debounce":
/*!*******************************!*\
  !*** external "use-debounce" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-debounce");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map