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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database/db */ \"(api)/./database/db.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__, _database_db__WEBPACK_IMPORTED_MODULE_1__]);\n([next_connect__WEBPACK_IMPORTED_MODULE_0__, _database_db__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nlet ObjectId = (__webpack_require__(/*! mongodb */ \"mongodb\").ObjectID);\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n//http://localhost:3000/api/calendar\nhandler.use(_database_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nhandler.put(async (req, res)=>{\n    const { id , allow  } = req.query;\n    console.log(req.query.userid);\n    let userName = \"\";\n    if (req.query.userid != undefined) {\n        let user = await req.db.collection(\"User\").findOne(new ObjectId(req.query.userid));\n        userName = user.name + \" \" + user.lastname;\n    } else {\n        userName = \"usuario no asignado\";\n    }\n    let allowParam = false;\n    if (allow == \"true\") {\n        allowParam = true;\n    }\n    await req.db.collection(\"Calendar\").updateOne({\n        _id: new ObjectId(id)\n    }, {\n        $set: {\n            user: userName,\n            allow: allowParam\n        }\n    });\n    res.status(200).json({\n        status: \"ok\"\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FsZW5kYXJpZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUM7QUFDSTtBQUMzQyxJQUFJRSxRQUFRLEdBQUdDLHdEQUEyQjtBQUUxQyxNQUFNRSxPQUFPLEdBQUdMLHdEQUFXLEVBQUU7QUFFN0Isb0NBQW9DO0FBRXBDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsb0RBQVUsQ0FBQyxDQUFDO0FBRXhCSSxPQUFPLENBQUNFLEdBQUcsQ0FBQyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUM1QixNQUFLLEVBQUNDLEVBQUUsR0FBRUMsS0FBSyxHQUFDLEdBQUdILEdBQUcsQ0FBQ0ksS0FBSztJQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDRyxNQUFNLENBQUM7SUFDN0IsSUFBSUMsUUFBUSxHQUFHLEVBQUU7SUFDakIsSUFBR1IsR0FBRyxDQUFDSSxLQUFLLENBQUNHLE1BQU0sSUFBSUUsU0FBUyxFQUFDO1FBQzdCLElBQUlDLElBQUksR0FBRyxNQUFNVixHQUFHLENBQUNXLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxPQUFPLENBQUMsSUFBSW5CLFFBQVEsQ0FBQ00sR0FBRyxDQUFDSSxLQUFLLENBQUNHLE1BQU0sQ0FBQyxDQUFDO1FBQ2xGQyxRQUFRLEdBQUdFLElBQUksQ0FBQ0ksSUFBSSxHQUFHLEdBQUcsR0FBR0osSUFBSSxDQUFDSyxRQUFRLENBQUM7S0FDOUMsTUFDRztRQUNBUCxRQUFRLEdBQUcscUJBQXFCO0tBQ25DO0lBRUQsSUFBSVEsVUFBVSxHQUFHLEtBQUs7SUFDdEIsSUFBR2IsS0FBSyxJQUFJLE1BQU0sRUFBQztRQUNmYSxVQUFVLEdBQUcsSUFBSSxDQUFDO0tBQ3JCO0lBQ0QsTUFBTWhCLEdBQUcsQ0FBQ1csRUFBRSxDQUFDQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUNLLFNBQVMsQ0FBQztRQUFDQyxHQUFHLEVBQUMsSUFBSXhCLFFBQVEsQ0FBQ1EsRUFBRSxDQUFDO0tBQUMsRUFBRTtRQUFDaUIsSUFBSSxFQUFDO1lBQUNULElBQUksRUFBQ0YsUUFBUTtZQUFFTCxLQUFLLEVBQUNhLFVBQVU7U0FBQztLQUFDLENBQUMsQ0FBQztJQUVoSGYsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBQ0QsTUFBTSxFQUFDLElBQUk7S0FBQyxDQUFDLENBQUM7Q0FDdkMsQ0FBQyxDQUFDO0FBRUgsaUVBQWV2QixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYS10YW5hLWFnZW5kYS8uL3BhZ2VzL2FwaS9jYWxlbmRhcmlkLmpzP2UwNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmltcG9ydCBtaWRkbGV3YXJlIGZyb20gJy4uLy4uL2RhdGFiYXNlL2RiJztcclxubGV0IE9iamVjdElkID0gcmVxdWlyZSgnbW9uZ29kYicpLk9iamVjdElEO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KCk7XHJcblxyXG4vL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY2FsZW5kYXJcclxuXHJcbmhhbmRsZXIudXNlKG1pZGRsZXdhcmUpO1xyXG5cclxuaGFuZGxlci5wdXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdHtpZCwgYWxsb3d9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2cocmVxLnF1ZXJ5LnVzZXJpZClcclxuICAgIGxldCB1c2VyTmFtZSA9ICcnO1xyXG4gICAgaWYocmVxLnF1ZXJ5LnVzZXJpZCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgcmVxLmRiLmNvbGxlY3Rpb24oJ1VzZXInKS5maW5kT25lKG5ldyBPYmplY3RJZChyZXEucXVlcnkudXNlcmlkKSk7XHJcbiAgICAgICAgdXNlck5hbWUgPSB1c2VyLm5hbWUgKyBcIiBcIiArIHVzZXIubGFzdG5hbWU7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHVzZXJOYW1lID0gXCJ1c3VhcmlvIG5vIGFzaWduYWRvXCJcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYWxsb3dQYXJhbSA9IGZhbHNlO1xyXG4gICAgaWYoYWxsb3cgPT0gJ3RydWUnKXtcclxuICAgICAgICBhbGxvd1BhcmFtID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGF3YWl0IHJlcS5kYi5jb2xsZWN0aW9uKCdDYWxlbmRhcicpLnVwZGF0ZU9uZSh7X2lkOm5ldyBPYmplY3RJZChpZCl9LCB7JHNldDp7dXNlcjp1c2VyTmFtZSwgYWxsb3c6YWxsb3dQYXJhbX19KTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3RhdHVzOlwib2tcIn0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIm5leHRDb25uZWN0IiwibWlkZGxld2FyZSIsIk9iamVjdElkIiwicmVxdWlyZSIsIk9iamVjdElEIiwiaGFuZGxlciIsInVzZSIsInB1dCIsInJlcSIsInJlcyIsImlkIiwiYWxsb3ciLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyaWQiLCJ1c2VyTmFtZSIsInVuZGVmaW5lZCIsInVzZXIiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwibmFtZSIsImxhc3RuYW1lIiwiYWxsb3dQYXJhbSIsInVwZGF0ZU9uZSIsIl9pZCIsIiRzZXQiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/calendarid.js\n");

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