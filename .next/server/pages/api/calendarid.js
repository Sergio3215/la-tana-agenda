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
exports.id = "pages/api/calendarid";
exports.ids = ["pages/api/calendarid"];
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

/***/ "(api)/./pages/api/calendarid.js":
/*!*********************************!*\
  !*** ./pages/api/calendarid.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database/db */ \"(api)/./database/db.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__, _database_db__WEBPACK_IMPORTED_MODULE_1__]);\n([next_connect__WEBPACK_IMPORTED_MODULE_0__, _database_db__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nlet ObjectId = (__webpack_require__(/*! mongodb */ \"mongodb\").ObjectID);\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n//http://localhost:3000/api/calendar\nhandler.use(_database_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nhandler.put(async (req, res)=>{\n    const { id , allow , userid  } = req.query;\n    let userName = \"\";\n    if (userid != null || userid != undefined || userid != \"\") {\n        let user = await req.db.collection(\"User\").findOne(new ObjectId(userid));\n        userName = user.name + \" \" + user.lastname;\n    } else {\n        userName = \"usuario no asignado\";\n    }\n    let allowParam = false;\n    if (allow == \"true\") {\n        allowParam = true;\n    }\n    let doc = await req.db.collection(\"Calendar\").updateOne({\n        _id: new ObjectId(id)\n    }, {\n        $set: {\n            user: userName,\n            allow: allowParam\n        }\n    });\n    res.status(200).json({\n        status: \"ok\"\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FsZW5kYXJpZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUM7QUFDSTtBQUMzQyxJQUFJRSxRQUFRLEdBQUdDLHdEQUEyQjtBQUUxQyxNQUFNRSxPQUFPLEdBQUdMLHdEQUFXLEVBQUU7QUFFN0Isb0NBQW9DO0FBRXBDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsb0RBQVUsQ0FBQyxDQUFDO0FBRXhCSSxPQUFPLENBQUNFLEdBQUcsQ0FBQyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUM1QixNQUFLLEVBQUNDLEVBQUUsR0FBRUMsS0FBSyxHQUFFQyxNQUFNLEdBQUMsR0FBR0osR0FBRyxDQUFDSyxLQUFLO0lBRXBDLElBQUlDLFFBQVEsR0FBRyxFQUFFO0lBQ2pCLElBQUdGLE1BQU0sSUFBRSxJQUFJLElBQUlBLE1BQU0sSUFBSUcsU0FBUyxJQUFJSCxNQUFNLElBQUksRUFBRSxFQUFDO1FBQ25ELElBQUlJLElBQUksR0FBRyxNQUFNUixHQUFHLENBQUNTLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxPQUFPLENBQUMsSUFBSWpCLFFBQVEsQ0FBQ1UsTUFBTSxDQUFDLENBQUM7UUFDeEVFLFFBQVEsR0FBR0UsSUFBSSxDQUFDSSxJQUFJLEdBQUcsR0FBRyxHQUFHSixJQUFJLENBQUNLLFFBQVEsQ0FBQztLQUM5QyxNQUNHO1FBQ0FQLFFBQVEsR0FBRyxxQkFBcUI7S0FDbkM7SUFFRCxJQUFJUSxVQUFVLEdBQUcsS0FBSztJQUN0QixJQUFHWCxLQUFLLElBQUksTUFBTSxFQUFDO1FBQ2ZXLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDckI7SUFFRCxJQUFJQyxHQUFHLEdBQUcsTUFBTWYsR0FBRyxDQUFDUyxFQUFFLENBQUNDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQ00sU0FBUyxDQUFDO1FBQUNDLEdBQUcsRUFBQyxJQUFJdkIsUUFBUSxDQUFDUSxFQUFFLENBQUM7S0FBQyxFQUFFO1FBQUNnQixJQUFJLEVBQUM7WUFBQ1YsSUFBSSxFQUFDRixRQUFRO1lBQUVILEtBQUssRUFBQ1csVUFBVTtTQUFDO0tBQUMsQ0FBQztJQUV6SGIsR0FBRyxDQUFDa0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBQ0QsTUFBTSxFQUFDLElBQUk7S0FBQyxDQUFDLENBQUM7Q0FDdkMsQ0FBQyxDQUFDO0FBRUgsaUVBQWV0QixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYS10YW5hLWFnZW5kYS8uL3BhZ2VzL2FwaS9jYWxlbmRhcmlkLmpzP2UwNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmltcG9ydCBtaWRkbGV3YXJlIGZyb20gJy4uLy4uL2RhdGFiYXNlL2RiJztcclxubGV0IE9iamVjdElkID0gcmVxdWlyZSgnbW9uZ29kYicpLk9iamVjdElEO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KCk7XHJcblxyXG4vL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY2FsZW5kYXJcclxuXHJcbmhhbmRsZXIudXNlKG1pZGRsZXdhcmUpO1xyXG5cclxuaGFuZGxlci5wdXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdHtpZCwgYWxsb3csIHVzZXJpZH0gPSByZXEucXVlcnk7XHJcbiAgXHJcbiAgICBsZXQgdXNlck5hbWUgPSAnJztcclxuICAgIGlmKHVzZXJpZCE9bnVsbCB8fCB1c2VyaWQgIT0gdW5kZWZpbmVkIHx8IHVzZXJpZCAhPSAnJyl7XHJcbiAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCByZXEuZGIuY29sbGVjdGlvbignVXNlcicpLmZpbmRPbmUobmV3IE9iamVjdElkKHVzZXJpZCkpO1xyXG4gICAgICAgIHVzZXJOYW1lID0gdXNlci5uYW1lICsgXCIgXCIgKyB1c2VyLmxhc3RuYW1lO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICB1c2VyTmFtZSA9IFwidXN1YXJpbyBubyBhc2lnbmFkb1wiXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGFsbG93UGFyYW0gPSBmYWxzZTtcclxuICAgIGlmKGFsbG93ID09ICd0cnVlJyl7XHJcbiAgICAgICAgYWxsb3dQYXJhbSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRvYyA9IGF3YWl0IHJlcS5kYi5jb2xsZWN0aW9uKCdDYWxlbmRhcicpLnVwZGF0ZU9uZSh7X2lkOm5ldyBPYmplY3RJZChpZCl9LCB7JHNldDp7dXNlcjp1c2VyTmFtZSwgYWxsb3c6YWxsb3dQYXJhbX19KTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3RhdHVzOlwib2tcIn0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIm5leHRDb25uZWN0IiwibWlkZGxld2FyZSIsIk9iamVjdElkIiwicmVxdWlyZSIsIk9iamVjdElEIiwiaGFuZGxlciIsInVzZSIsInB1dCIsInJlcSIsInJlcyIsImlkIiwiYWxsb3ciLCJ1c2VyaWQiLCJxdWVyeSIsInVzZXJOYW1lIiwidW5kZWZpbmVkIiwidXNlciIsImRiIiwiY29sbGVjdGlvbiIsImZpbmRPbmUiLCJuYW1lIiwibGFzdG5hbWUiLCJhbGxvd1BhcmFtIiwiZG9jIiwidXBkYXRlT25lIiwiX2lkIiwiJHNldCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/calendarid.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/calendarid.js"));
module.exports = __webpack_exports__;

})();