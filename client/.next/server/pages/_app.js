/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/TransactionContext.js":
/*!***************************************!*\
  !*** ./context/TransactionContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": () => (/* binding */ TransactionContext),\n/* harmony export */   \"TransactionProvider\": () => (/* binding */ TransactionProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nlet eth;\nif (false) {}\nconst TransactionProvider = ({ children  })=>{\n    const { 0: currentAccount , 1: setCurrentAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    const connectWallet = async (metamask = eth)=>{\n        try {\n            if (!metamask) return alert('please install metamask');\n            const accounts = await metamask.request({\n                method: 'eth_requestAccounts'\n            });\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.error(error);\n            throw new Error('No ethereum object');\n        }\n    };\n    const checkIfWalletIsConnected = async (metamask = eth)=>{\n        try {\n            if (!metamask) return alert('Please install metamask');\n            const accounts = await metamask.request({\n                method: 'eth_accounts'\n            });\n            if (accounts.length) {\n                setCurrentAccount(accounts[0]);\n                console.log('wallet is connected');\n            }\n        } catch (error) {\n            console.error(error);\n            throw new Error('No ethtereum object.');\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            currentAccount,\n            connectWallet\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/bhuvan/Desktop/uniswap/client/context/TransactionContext.js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBRTFDLEtBQUssQ0FBQ0csa0JBQWtCLGlCQUFHSCwwREFBbUI7QUFFckQsR0FBRyxDQUFDSyxHQUFHO0FBQ1AsRUFBRSxFQUFDLEtBQTZCLEVBQUMsRUFFaEM7QUFFTSxLQUFLLENBQUNHLG1CQUFtQixJQUFJLENBQUNDLENBQUFBLFFBQVEsR0FBQyxHQUFJLENBQUM7SUFDL0MsS0FBSyxNQUFHQyxjQUFjLE1BQUVDLGlCQUFpQixNQUFJViwrQ0FBUTtJQUNyREMsZ0RBQVMsS0FBTyxDQUFDO1FBQ2JVLHdCQUF3QjtJQUM1QixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosS0FBSyxDQUFDQyxhQUFhLFVBQVVDLFFBQVEsR0FBR1QsR0FBRyxHQUFJLENBQUM7UUFDNUMsR0FBRyxFQUFDO1lBQ0EsRUFBRSxHQUFHUyxRQUFRLEVBQUUsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBeUI7WUFDckQsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDRixRQUFRLENBQUNHLE9BQU8sQ0FBQyxDQUFDQztnQkFBQUEsTUFBTSxFQUFFLENBQXFCO1lBQUEsQ0FBQztZQUN2RVAsaUJBQWlCLENBQUNLLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxLQUFLLEVBQUNHLEtBQUssRUFBQyxDQUFDO1lBQ1hDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDQSxLQUFLO1lBQ25CLEtBQUssQ0FBQyxHQUFHLENBQUNFLEtBQUssQ0FBQyxDQUFvQjtRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQ1Qsd0JBQXdCLFVBQVVFLFFBQVEsR0FBR1QsR0FBRyxHQUFHLENBQUM7UUFFdEQsR0FBRyxFQUFDO1lBQ0EsRUFBRSxHQUFFUyxRQUFRLEVBQUUsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBeUI7WUFDcEQsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDRixRQUFRLENBQUNHLE9BQU8sQ0FBQyxDQUFDQztnQkFBQUEsTUFBTSxFQUFFLENBQWM7WUFBQSxDQUFDO1lBQ2hFLEVBQUUsRUFBQ0YsUUFBUSxDQUFDTSxNQUFNLEVBQUMsQ0FBQztnQkFDaEJYLGlCQUFpQixDQUFDSyxRQUFRLENBQUMsQ0FBQztnQkFDNUJJLE9BQU8sQ0FBQ0csR0FBRyxDQUFDLENBQXFCO1lBQ3JDLENBQUM7UUFDTCxDQUFDLE1BQUssRUFBQ0osS0FBSyxFQUFDLENBQUM7WUFDVkMsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUs7WUFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLENBQXNCO1FBQzFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSw2RUFDRGxCLGtCQUFrQixDQUFDcUIsUUFBUTtRQUN4QkMsS0FBSyxFQUFHLENBQUM7WUFDTGYsY0FBYztZQUNkRyxhQUFhO1FBQ2pCLENBQUM7a0JBQ0hKLFFBQVE7Ozs7OztBQUdsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29udGV4dC9UcmFuc2FjdGlvbkNvbnRleHQuanM/Njk5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnIFxuXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXG5cbmxldCBldGhcbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcbiAgICBldGg9IHdpbmRvdy5ldGhlcmV1bVxufVxuXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25Qcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PntcbiAgICBjb25zdCBbIGN1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKClcbiAgICB9LFtdKVxuXG4gICAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jIChtZXRhbWFzayA9IGV0aCkgPT57XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGlmICghbWV0YW1hc2spIHJldHVybiBhbGVydCgncGxlYXNlIGluc3RhbGwgbWV0YW1hc2snKVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBtZXRhbWFzay5yZXF1ZXN0KHttZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJ30pO1xuICAgICAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGV0aGVyZXVtIG9iamVjdCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAobWV0YW1hc2sgPSBldGgpPT57XG4gICAgICAgIFxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBpZighbWV0YW1hc2spIHJldHVybiBhbGVydCgnUGxlYXNlIGluc3RhbGwgbWV0YW1hc2snKVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBtZXRhbWFzay5yZXF1ZXN0KHttZXRob2Q6ICdldGhfYWNjb3VudHMnfSlcbiAgICAgICAgICAgIGlmKGFjY291bnRzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3YWxsZXQgaXMgY29ubmVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBldGh0ZXJldW0gb2JqZWN0LicpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgdmFsdWUgPXt7XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQsXG4gICAgICAgICAgICAgICAgY29ubmVjdFdhbGxldCxcbiAgICAgICAgICAgIH19XG4gICAgICAgID57Y2hpbGRyZW59XG4gICAgICAgIDwvVHJhbnNhY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVHJhbnNhY3Rpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV0aCIsIndpbmRvdyIsImV0aGVyZXVtIiwiVHJhbnNhY3Rpb25Qcm92aWRlciIsImNoaWxkcmVuIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCIsImNvbm5lY3RXYWxsZXQiLCJtZXRhbWFzayIsImFsZXJ0IiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiZXJyb3IiLCJjb25zb2xlIiwiRXJyb3IiLCJsZW5ndGgiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/TransactionContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/TransactionContext */ \"./context/TransactionContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_TransactionContext__WEBPACK_IMPORTED_MODULE_2__.TransactionProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/bhuvan/Desktop/uniswap/client/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/bhuvan/Desktop/uniswap/client/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDbUM7U0FFeERDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0xILDRFQUFtQjs4RkFDakJFLFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHNUIsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQge1RyYW5zYWN0aW9uUHJvdmlkZXJ9IGZyb20gJy4uL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXh0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgPFRyYW5zYWN0aW9uUHJvdmlkZXI+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8L1RyYW5zYWN0aW9uUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiVHJhbnNhY3Rpb25Qcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();