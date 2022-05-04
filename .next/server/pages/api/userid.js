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
exports.id = "pages/api/userid";
exports.ids = ["pages/api/userid"];
exports.modules = {

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

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

/***/ "(api)/./pages/api/userid.js":
/*!*****************************!*\
  !*** ./pages/api/userid.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../database/db */ \"(api)/./database/db.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__, _database_db__WEBPACK_IMPORTED_MODULE_2__]);\n([next_connect__WEBPACK_IMPORTED_MODULE_0__, _database_db__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nlet ObjectId = (__webpack_require__(/*! mongodb */ \"mongodb\").ObjectID);\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.use(_database_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n//http://localhost:3000/api/login?user=joi&password=1\n//http://localhost:3000/api/login?user=usernamefake&password=1\nconst startID = \"aslkd91adlka92nal\";\nconst endID = \"qwepo1occn1dmka1\";\nhandler.get(async (req, res)=>{\n    const cookies = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)(\"account\", {\n        req,\n        res\n    });\n    const data = JSON.parse(cookies);\n    const id = data.id.replace(startID, \"\").replace(endID, \"\");\n    let doc = await req.db.collection(\"User\").findOne(new ObjectId(id));\n    res.status(200).json({\n        status: \"sucess\",\n        data: doc\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcmlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3lDO0FBQ3JDO0FBQzNDLElBQUlNLFFBQVEsR0FBR0Msd0RBQTJCO0FBRTFDLE1BQU1FLE9BQU8sR0FBR1Qsd0RBQVcsRUFBRTtBQUM3QlMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLG9EQUFVLENBQUMsQ0FBQztBQUV4QixxREFBcUQ7QUFDckQsOERBQThEO0FBRTlELE1BQU1NLE9BQU8sR0FBRyxtQkFBbUI7QUFDbkMsTUFBTUMsS0FBSyxHQUFHLGtCQUFrQjtBQUdoQ0gsT0FBTyxDQUFDSSxHQUFHLENBQUMsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDNUIsTUFBTUMsT0FBTyxHQUFHZCx1REFBUyxDQUFDLFNBQVMsRUFBQztRQUFDWSxHQUFHO1FBQUNDLEdBQUc7S0FBQyxDQUFDO0lBQzlDLE1BQU1FLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILE9BQU8sQ0FBQztJQUNoQyxNQUFNSSxFQUFFLEdBQUdILElBQUksQ0FBQ0csRUFBRSxDQUFDQyxPQUFPLENBQUNWLE9BQU8sRUFBQyxFQUFFLENBQUMsQ0FBQ1UsT0FBTyxDQUFDVCxLQUFLLEVBQUMsRUFBRSxDQUFDO0lBQ3hELElBQUlVLEdBQUcsR0FBRyxNQUFNUixHQUFHLENBQUNTLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxPQUFPLENBQUMsSUFBSW5CLFFBQVEsQ0FBQ2MsRUFBRSxDQUFDLENBQUM7SUFDbkVMLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUQsTUFBTSxFQUFFLFFBQVE7UUFBRVQsSUFBSSxFQUFFSyxHQUFHO0tBQUMsQ0FBQyxDQUFDO0NBQ3hELENBQUMsQ0FBQztBQUNILGlFQUFlYixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYS10YW5hLWFnZW5kYS8uL3BhZ2VzL2FwaS91c2VyaWQuanM/ZWQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuaW1wb3J0IHsgZ2V0Q29va2llcywgZ2V0Q29va2llLCBzZXRDb29raWVzLCByZW1vdmVDb29raWVzIH0gZnJvbSAnY29va2llcy1uZXh0JztcclxuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vZGF0YWJhc2UvZGInO1xyXG5sZXQgT2JqZWN0SWQgPSByZXF1aXJlKCdtb25nb2RiJykuT2JqZWN0SUQ7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKTtcclxuaGFuZGxlci51c2UobWlkZGxld2FyZSk7XHJcblxyXG4vL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4/dXNlcj1qb2kmcGFzc3dvcmQ9MVxyXG4vL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4/dXNlcj11c2VybmFtZWZha2UmcGFzc3dvcmQ9MVxyXG5cclxuY29uc3Qgc3RhcnRJRCA9IFwiYXNsa2Q5MWFkbGthOTJuYWxcIjtcclxuY29uc3QgZW5kSUQgPSBcInF3ZXBvMW9jY24xZG1rYTFcIjtcclxuXHJcblxyXG5oYW5kbGVyLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBnZXRDb29raWUoXCJhY2NvdW50XCIse3JlcSxyZXN9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGNvb2tpZXMpXHJcbiAgICBjb25zdCBpZCA9IGRhdGEuaWQucmVwbGFjZShzdGFydElELFwiXCIpLnJlcGxhY2UoZW5kSUQsXCJcIilcclxuICAgIGxldCBkb2MgPSBhd2FpdCByZXEuZGIuY29sbGVjdGlvbignVXNlcicpLmZpbmRPbmUobmV3IE9iamVjdElkKGlkKSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogXCJzdWNlc3NcIiwgZGF0YTogZG9jfSk7XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJuZXh0Q29ubmVjdCIsImdldENvb2tpZXMiLCJnZXRDb29raWUiLCJzZXRDb29raWVzIiwicmVtb3ZlQ29va2llcyIsIm1pZGRsZXdhcmUiLCJPYmplY3RJZCIsInJlcXVpcmUiLCJPYmplY3RJRCIsImhhbmRsZXIiLCJ1c2UiLCJzdGFydElEIiwiZW5kSUQiLCJnZXQiLCJyZXEiLCJyZXMiLCJjb29raWVzIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImlkIiwicmVwbGFjZSIsImRvYyIsImRiIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/userid.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/userid.js"));
module.exports = __webpack_exports__;

})();