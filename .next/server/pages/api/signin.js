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
exports.id = "pages/api/signin";
exports.ids = ["pages/api/signin"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./database/db.js":
/*!************************!*\
  !*** ./database/db.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst stringEndPoint = process.env.MongoUri;\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(stringEndPoint, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n});\nasync function database(req, res, next) {\n    await client.connect();\n    req.dbClient = client;\n    req.db = client.db(\"Calendar\");\n    return next();\n}\nconst middleware = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nmiddleware.use(database);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middleware);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ0M7QUFDdkNFLG9EQUF3QixFQUFFLENBQUM7QUFFM0IsTUFBTUUsY0FBYyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUTtBQUUzQyxNQUFNQyxNQUFNLEdBQUcsSUFBSVIsZ0RBQVcsQ0FBQ0ksY0FBYyxFQUFFO0lBQzdDSyxlQUFlLEVBQUUsSUFBSTtJQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtDQUN6QixDQUFDO0FBQ0YsZUFBZUMsUUFBUSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFO0lBQ3RDLE1BQU1OLE1BQU0sQ0FBQ08sT0FBTyxFQUFFLENBQUM7SUFDdkJILEdBQUcsQ0FBQ0ksUUFBUSxHQUFHUixNQUFNLENBQUM7SUFDdEJJLEdBQUcsQ0FBQ0ssRUFBRSxHQUFHVCxNQUFNLENBQUNTLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQixPQUFPSCxJQUFJLEVBQUUsQ0FBQztDQUNmO0FBQ0QsTUFBTUksVUFBVSxHQUFHakIsd0RBQVcsRUFBRTtBQUNoQ2lCLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDUixRQUFRLENBQUMsQ0FBQztBQUN6QixpRUFBZU8sVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGEtdGFuYS1hZ2VuZGEvLi9kYXRhYmFzZS9kYi5qcz82NGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcbmltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcclxuXHJcbmNvbnN0IHN0cmluZ0VuZFBvaW50ID0gcHJvY2Vzcy5lbnYuTW9uZ29VcmlcclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChzdHJpbmdFbmRQb2ludCwge1xyXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbn0pO1xyXG5hc3luYyBmdW5jdGlvbiBkYXRhYmFzZShyZXEsIHJlcywgbmV4dCkge1xyXG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgcmVxLmRiQ2xpZW50ID0gY2xpZW50O1xyXG4gIHJlcS5kYiA9IGNsaWVudC5kYignQ2FsZW5kYXInKTtcclxuICByZXR1cm4gbmV4dCgpO1xyXG59XHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBuZXh0Q29ubmVjdCgpO1xyXG5taWRkbGV3YXJlLnVzZShkYXRhYmFzZSk7XHJcbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmU7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwibmV4dENvbm5lY3QiLCJyZXF1aXJlIiwiY29uZmlnIiwic3RyaW5nRW5kUG9pbnQiLCJwcm9jZXNzIiwiZW52IiwiTW9uZ29VcmkiLCJjbGllbnQiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJkYXRhYmFzZSIsInJlcSIsInJlcyIsIm5leHQiLCJjb25uZWN0IiwiZGJDbGllbnQiLCJkYiIsIm1pZGRsZXdhcmUiLCJ1c2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./database/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/signin.js":
/*!*****************************!*\
  !*** ./pages/api/signin.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database/db */ \"(api)/./database/db.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__, _database_db__WEBPACK_IMPORTED_MODULE_1__]);\n([next_connect__WEBPACK_IMPORTED_MODULE_0__, _database_db__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n//http://localhost:3000/api/signin?user=usernamefake&password=1&email=example@example.com&name=artur&lastname=jinzo\nhandler.use(_database_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nhandler.get(async (req, res)=>{\n    const { user , password , email , name , lastname  } = req.query;\n    console.log(req.query);\n    let doc = await req.db.collection(\"User\").insertOne({\n        user: user,\n        password: password,\n        email: email,\n        name: name,\n        lastname: lastname,\n        admin: false,\n        mod: false\n    });\n    console.log(doc);\n    res.status(200).json({\n        status: \"sucess\"\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbmluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNJO0FBRTNDLE1BQU1FLE9BQU8sR0FBR0Ysd0RBQVcsRUFBRTtBQUU3QixtSEFBbUg7QUFFbkhFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixvREFBVSxDQUFDLENBQUM7QUFDeEJDLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQzVCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxRQUFRLEdBQUVDLEtBQUssR0FBRUMsSUFBSSxHQUFFQyxRQUFRLEdBQUMsR0FBR04sR0FBRyxDQUFDTyxLQUFLO0lBQzFEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsR0FBRyxDQUFDTyxLQUFLLENBQUM7SUFDdEIsSUFBSUcsR0FBRyxHQUFHLE1BQU1WLEdBQUcsQ0FBQ1csRUFBRSxDQUFDQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUNDLFNBQVMsQ0FDL0M7UUFDSVgsSUFBSSxFQUFFQSxJQUFJO1FBQ1ZDLFFBQVEsRUFBR0EsUUFBUTtRQUNuQkMsS0FBSyxFQUFHQSxLQUFLO1FBQ2JDLElBQUksRUFBQ0EsSUFBSTtRQUNUQyxRQUFRLEVBQUNBLFFBQVE7UUFDakJRLEtBQUssRUFBRyxLQUFLO1FBQ2JDLEdBQUcsRUFBRyxLQUFLO0tBQ2QsQ0FDSjtJQUNEUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7SUFDakJULEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBQ0QsTUFBTSxFQUFDLFFBQVE7S0FBQyxDQUFDLENBQUM7Q0FDM0MsQ0FBQyxDQUFDO0FBQ0gsaUVBQWVuQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYS10YW5hLWFnZW5kYS8uL3BhZ2VzL2FwaS9zaWduaW4uanM/NmRlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vZGF0YWJhc2UvZGInO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KCk7XHJcblxyXG4vL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2lnbmluP3VzZXI9dXNlcm5hbWVmYWtlJnBhc3N3b3JkPTEmZW1haWw9ZXhhbXBsZUBleGFtcGxlLmNvbSZuYW1lPWFydHVyJmxhc3RuYW1lPWppbnpvXHJcblxyXG5oYW5kbGVyLnVzZShtaWRkbGV3YXJlKTtcclxuaGFuZGxlci5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIsIHBhc3N3b3JkLCBlbWFpbCwgbmFtZSwgbGFzdG5hbWV9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2cocmVxLnF1ZXJ5KVxyXG4gICAgbGV0IGRvYyA9IGF3YWl0IHJlcS5kYi5jb2xsZWN0aW9uKCdVc2VyJykuaW5zZXJ0T25lKFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIHVzZXI6IHVzZXIsIFxyXG4gICAgICAgICAgICBwYXNzd29yZCA6IHBhc3N3b3JkLCBcclxuICAgICAgICAgICAgZW1haWwgOiBlbWFpbCwgXHJcbiAgICAgICAgICAgIG5hbWU6bmFtZSwgXHJcbiAgICAgICAgICAgIGxhc3RuYW1lOmxhc3RuYW1lLFxyXG4gICAgICAgICAgICBhZG1pbiA6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2QgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhkb2MpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3N0YXR1czpcInN1Y2Vzc1wifSk7XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJuZXh0Q29ubmVjdCIsIm1pZGRsZXdhcmUiLCJoYW5kbGVyIiwidXNlIiwiZ2V0IiwicmVxIiwicmVzIiwidXNlciIsInBhc3N3b3JkIiwiZW1haWwiLCJuYW1lIiwibGFzdG5hbWUiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkb2MiLCJkYiIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJhZG1pbiIsIm1vZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/signin.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signin.js"));
module.exports = __webpack_exports__;

})();