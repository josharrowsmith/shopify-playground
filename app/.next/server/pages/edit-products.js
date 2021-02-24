module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/edit-products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/edit-products.js":
/*!********************************!*\
  !*** ./pages/edit-products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const UPDATE_PRICE = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
 mutation productVariantUpdate($input: ProductVariantInput!) {
   productVariantUpdate(input: $input) {
     product {
       title
     }
     productVariant {
       id
       price
     }
   }
 }
`;

class EditProduct extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      discount: '',
      price: '',
      variantId: '',
      showToast: false
    });

    _defineProperty(this, "handleChange", field => {
      return value => this.setState({
        [field]: value
      });
    });

    _defineProperty(this, "itemToBeConsumed", () => {
      const item = store_js__WEBPACK_IMPORTED_MODULE_2___default.a.get('item');
      const price = item.variants.edges[0].node.price;
      const variantId = item.variants.edges[0].node.id;
      const discounter = price * 0.1;
      this.setState({
        price,
        variantId
      });
      return (price - discounter).toFixed(2);
    });
  }

  componentDidMount() {
    this.setState({
      discount: this.itemToBeConsumed()
    });
  }

  render() {
    const {
      name,
      price,
      discount,
      variantId
    } = this.state;
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
      mutation: UPDATE_PRICE
    }, (handleSubmit, {
      error,
      data
    }) => {
      const showError = error && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Banner"], {
        status: "critical"
      }, error.message);

      const showToast = data && data.productVariantUpdate && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
        content: "Sucessfully updated",
        onDismiss: () => this.setState({
          showToast: false
        })
      });

      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Frame"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, showToast, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, showError), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DisplayText"], {
        size: "large"
      }, name), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        prefix: "$",
        value: price,
        disabled: true,
        label: "Original price",
        type: "price"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        prefix: "$",
        value: discount,
        onChange: this.handleChange('discount'),
        label: "Discounted price",
        type: "discount"
      })), __jsx("p", null, "This sale price will expire in two weeks"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["PageActions"], {
        primaryAction: [{
          content: 'Save',
          onAction: () => {
            const productVariableInput = {
              id: variantId,
              price: discount
            };
            handleSubmit({
              variables: {
                input: productVariableInput
              }
            });
          }
        }],
        secondaryActions: [{
          content: 'Remove discount'
        }]
      }))))));
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EditProduct);

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFwb2xsb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0b3JlLWpzXCIiXSwibmFtZXMiOlsiVVBEQVRFX1BSSUNFIiwiZ3FsIiwiRWRpdFByb2R1Y3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJzaG93VG9hc3QiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJjb21wb25lbnREaWRNb3VudCIsIml0ZW1Ub0JlQ29uc3VtZWQiLCJyZW5kZXIiLCJuYW1lIiwic3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJlcnJvciIsImRhdGEiLCJzaG93RXJyb3IiLCJtZXNzYWdlIiwicHJvZHVjdFZhcmlhbnRVcGRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJjb250ZW50Iiwib25BY3Rpb24iLCJwcm9kdWN0VmFyaWFibGVJbnB1dCIsInZhcmlhYmxlcyIsImlucHV0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9lZGl0LXByb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9lZGl0LXByb2R1Y3RzLmpzXCIpO1xuIiwiaW1wb3J0IHtcbiAgQmFubmVyLFxuICBDYXJkLFxuICBEaXNwbGF5VGV4dCxcbiAgRm9ybSxcbiAgRm9ybUxheW91dCxcbiAgRnJhbWUsXG4gIExheW91dCxcbiAgUGFnZSxcbiAgUGFnZUFjdGlvbnMsXG4gIFRleHRGaWVsZCxcbiAgVG9hc3QsXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuXG5jb25zdCBVUERBVEVfUFJJQ0UgPSBncWxgXG4gbXV0YXRpb24gcHJvZHVjdFZhcmlhbnRVcGRhdGUoJGlucHV0OiBQcm9kdWN0VmFyaWFudElucHV0ISkge1xuICAgcHJvZHVjdFZhcmlhbnRVcGRhdGUoaW5wdXQ6ICRpbnB1dCkge1xuICAgICBwcm9kdWN0IHtcbiAgICAgICB0aXRsZVxuICAgICB9XG4gICAgIHByb2R1Y3RWYXJpYW50IHtcbiAgICAgICBpZFxuICAgICAgIHByaWNlXG4gICAgIH1cbiAgIH1cbiB9XG5gO1xuXG5jbGFzcyBFZGl0UHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGRpc2NvdW50OiAnJyxcbiAgICBwcmljZTogJycsXG4gICAgdmFyaWFudElkOiAnJyxcbiAgICBzaG93VG9hc3Q6IGZhbHNlLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNjb3VudDogdGhpcy5pdGVtVG9CZUNvbnN1bWVkKCkgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBwcmljZSwgZGlzY291bnQsIHZhcmlhbnRJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPE11dGF0aW9uXG4gICAgICAgIG11dGF0aW9uPXtVUERBVEVfUFJJQ0V9XG4gICAgICA+XG4gICAgICAgIHsoaGFuZGxlU3VibWl0LCB7IGVycm9yLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBzaG93RXJyb3IgPSBlcnJvciAmJiAoXG4gICAgICAgICAgICA8QmFubmVyIHN0YXR1cz1cImNyaXRpY2FsXCI+e2Vycm9yLm1lc3NhZ2V9PC9CYW5uZXI+XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBzaG93VG9hc3QgPSBkYXRhICYmIGRhdGEucHJvZHVjdFZhcmlhbnRVcGRhdGUgJiYgKFxuICAgICAgICAgICAgPFRvYXN0XG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJTdWNlc3NmdWxseSB1cGRhdGVkXCJcbiAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1RvYXN0OiBmYWxzZSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZyYW1lPlxuICAgICAgICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAge3Nob3dUb2FzdH1cbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge3Nob3dFcnJvcn1cbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwibGFyZ2VcIj57bmFtZX08L0Rpc3BsYXlUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQuR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiJFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcmlnaW5hbCBwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiJFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2NvdW50ZWQgcHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRpc2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQuR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgc2FsZSBwcmljZSB3aWxsIGV4cGlyZSBpbiB0d28gd2Vla3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhZ2VBY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2F2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYWJsZUlucHV0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdmFyaWFudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogZGlzY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGlucHV0OiBwcm9kdWN0VmFyaWFibGVJbnB1dCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnUmVtb3ZlIGRpc2NvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgPC9GcmFtZT5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9NdXRhdGlvbj5cbiAgICApO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiB7XG4gICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xuICB9O1xuXG4gIGl0ZW1Ub0JlQ29uc3VtZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHN0b3JlLmdldCgnaXRlbScpO1xuICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xuICAgIGNvbnN0IHZhcmlhbnRJZCA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5pZDtcbiAgICBjb25zdCBkaXNjb3VudGVyID0gcHJpY2UgKiAwLjE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlLCB2YXJpYW50SWQgfSk7XG4gICAgcmV0dXJuIChwcmljZSAtIGRpc2NvdW50ZXIpLnRvRml4ZWQoMik7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRQcm9kdWN0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hcG9sbG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RvcmUtanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==