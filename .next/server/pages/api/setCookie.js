"use strict";
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
exports.id = "pages/api/setCookie";
exports.ids = ["pages/api/setCookie"];
exports.modules = {

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./pages/api/setCookie.js":
/*!********************************!*\
  !*** ./pages/api/setCookie.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2V0Q29va2llLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Y7QUFDekM7QUFFdkMsTUFBTUssT0FBTyxHQUFHRCx3REFBVyxFQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGEtdGFuYS1hZ2VuZGEvLi9wYWdlcy9hcGkvc2V0Q29va2llLmpzP2UyMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29va2llcywgZ2V0Q29va2llLCBzZXRDb29raWVzLCByZW1vdmVDb29raWVzIH0gZnJvbSAnY29va2llcy1uZXh0JztcclxuaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKTtcclxuIl0sIm5hbWVzIjpbImdldENvb2tpZXMiLCJnZXRDb29raWUiLCJzZXRDb29raWVzIiwicmVtb3ZlQ29va2llcyIsIm5leHRDb25uZWN0IiwiaGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/setCookie.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/setCookie.js"));
module.exports = __webpack_exports__;

})();