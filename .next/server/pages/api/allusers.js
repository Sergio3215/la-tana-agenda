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
exports.id = "pages/api/allusers";
exports.ids = ["pages/api/allusers"];
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

/***/ "(api)/./pages/api/allusers.js":
/*!*******************************!*\
  !*** ./pages/api/allusers.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database/db */ \"(api)/./database/db.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__, _database_db__WEBPACK_IMPORTED_MODULE_1__]);\n([next_connect__WEBPACK_IMPORTED_MODULE_0__, _database_db__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nlet ObjectId = (__webpack_require__(/*! mongodb */ \"mongodb\").ObjectID);\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.use(_database_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n//http://localhost:3000/api/allusers\nhandler.get(async (req, res)=>{\n    const { id  } = req.query;\n    // console.log(id)\n    let last = await req.db.collection(\"Calendar\").findOne(new ObjectId(id));\n    let doc = await req.db.collection(\"User\").find().sort({\n        name: 1\n    }).toArray();\n    res.status(200).json({\n        status: \"sucess\",\n        data: doc,\n        lastuser: last.user,\n        allow: last.allow\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWxsdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVDO0FBQ0k7QUFDM0MsSUFBSUUsUUFBUSxHQUFHQyx3REFBMkI7QUFFMUMsTUFBTUUsT0FBTyxHQUFHTCx3REFBVyxFQUFFO0FBQzdCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsb0RBQVUsQ0FBQyxDQUFDO0FBRXhCLG9DQUFvQztBQUVwQ0ksT0FBTyxDQUFDRSxHQUFHLENBQUMsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDNUIsTUFBTSxFQUFDQyxFQUFFLEdBQUMsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBQ3RCLGtCQUFrQjtJQUNsQixJQUFJQyxJQUFJLEdBQUcsTUFBTUosR0FBRyxDQUFDSyxFQUFFLENBQUNDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLElBQUliLFFBQVEsQ0FBQ1EsRUFBRSxDQUFDLENBQUM7SUFDeEUsSUFBSU0sR0FBRyxHQUFHLE1BQU1SLEdBQUcsQ0FBQ0ssRUFBRSxDQUFDQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUNHLElBQUksRUFBRSxDQUFDQyxJQUFJLENBQUM7UUFBQ0MsSUFBSSxFQUFDLENBQUM7S0FBQyxDQUFDLENBQUNDLE9BQU8sRUFBRTtJQUN6RVgsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFRCxNQUFNLEVBQUUsUUFBUTtRQUFFRSxJQUFJLEVBQUVQLEdBQUc7UUFBRVEsUUFBUSxFQUFDWixJQUFJLENBQUNhLElBQUk7UUFBRUMsS0FBSyxFQUFFZCxJQUFJLENBQUNjLEtBQUs7S0FBQyxDQUFDLENBQUM7Q0FDL0YsQ0FBQyxDQUFDO0FBQ0gsaUVBQWVyQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYS10YW5hLWFnZW5kYS8uL3BhZ2VzL2FwaS9hbGx1c2Vycy5qcz8yZWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tICcuLi8uLi9kYXRhYmFzZS9kYic7XHJcbmxldCBPYmplY3RJZCA9IHJlcXVpcmUoJ21vbmdvZGInKS5PYmplY3RJRDtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpO1xyXG5oYW5kbGVyLnVzZShtaWRkbGV3YXJlKTtcclxuXHJcbi8vaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hbGx1c2Vyc1xyXG5cclxuaGFuZGxlci5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7aWR9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgLy8gY29uc29sZS5sb2coaWQpXHJcbiAgICBsZXQgbGFzdCA9IGF3YWl0IHJlcS5kYi5jb2xsZWN0aW9uKCdDYWxlbmRhcicpLmZpbmRPbmUobmV3IE9iamVjdElkKGlkKSk7XHJcbiAgICBsZXQgZG9jID0gYXdhaXQgcmVxLmRiLmNvbGxlY3Rpb24oJ1VzZXInKS5maW5kKCkuc29ydCh7bmFtZToxfSkudG9BcnJheSgpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IFwic3VjZXNzXCIsIGRhdGE6IGRvYywgbGFzdHVzZXI6bGFzdC51c2VyLCBhbGxvdzogbGFzdC5hbGxvd30pO1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsibmV4dENvbm5lY3QiLCJtaWRkbGV3YXJlIiwiT2JqZWN0SWQiLCJyZXF1aXJlIiwiT2JqZWN0SUQiLCJoYW5kbGVyIiwidXNlIiwiZ2V0IiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsImxhc3QiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiZG9jIiwiZmluZCIsInNvcnQiLCJuYW1lIiwidG9BcnJheSIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibGFzdHVzZXIiLCJ1c2VyIiwiYWxsb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/allusers.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/allusers.js"));
module.exports = __webpack_exports__;

})();