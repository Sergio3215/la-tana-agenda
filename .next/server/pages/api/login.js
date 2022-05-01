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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst stringEndPoint = \"mongodb+srv://Sergio:Serpiente32_@cluster0.yfhgb.mongodb.net/Calendar?retryWrites=true&w=majority\";\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(stringEndPoint, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n});\nasync function database(req, res, next) {\n    await client.connect();\n    req.dbClient = client;\n    req.db = client.db(\"Calendar\");\n    return next();\n}\nconst middleware = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nmiddleware.use(database);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middleware);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ0M7QUFFdkMsTUFBTUUsY0FBYyxHQUFHLG1HQUFtRztBQUUxSCxNQUFNQyxNQUFNLEdBQUcsSUFBSUgsZ0RBQVcsQ0FBQ0UsY0FBYyxFQUFFO0lBQzdDRSxlQUFlLEVBQUUsSUFBSTtJQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtDQUN6QixDQUFDO0FBQ0YsZUFBZUMsUUFBUSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFO0lBQ3RDLE1BQU1OLE1BQU0sQ0FBQ08sT0FBTyxFQUFFLENBQUM7SUFDdkJILEdBQUcsQ0FBQ0ksUUFBUSxHQUFHUixNQUFNLENBQUM7SUFDdEJJLEdBQUcsQ0FBQ0ssRUFBRSxHQUFHVCxNQUFNLENBQUNTLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQixPQUFPSCxJQUFJLEVBQUUsQ0FBQztDQUNmO0FBQ0QsTUFBTUksVUFBVSxHQUFHWix3REFBVyxFQUFFO0FBQ2hDWSxVQUFVLENBQUNDLEdBQUcsQ0FBQ1IsUUFBUSxDQUFDLENBQUM7QUFDekIsaUVBQWVPLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhLXRhbmEtYWdlbmRhLy4vZGF0YWJhc2UvZGIuanM/NjRhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuXHJcbmNvbnN0IHN0cmluZ0VuZFBvaW50ID0gXCJtb25nb2RiK3NydjovL1NlcmdpbzpTZXJwaWVudGUzMl9AY2x1c3RlcjAueWZoZ2IubW9uZ29kYi5uZXQvQ2FsZW5kYXI/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChzdHJpbmdFbmRQb2ludCwge1xyXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbn0pO1xyXG5hc3luYyBmdW5jdGlvbiBkYXRhYmFzZShyZXEsIHJlcywgbmV4dCkge1xyXG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgcmVxLmRiQ2xpZW50ID0gY2xpZW50O1xyXG4gIHJlcS5kYiA9IGNsaWVudC5kYignQ2FsZW5kYXInKTtcclxuICByZXR1cm4gbmV4dCgpO1xyXG59XHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBuZXh0Q29ubmVjdCgpO1xyXG5taWRkbGV3YXJlLnVzZShkYXRhYmFzZSk7XHJcbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmU7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwibmV4dENvbm5lY3QiLCJzdHJpbmdFbmRQb2ludCIsImNsaWVudCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImRhdGFiYXNlIiwicmVxIiwicmVzIiwibmV4dCIsImNvbm5lY3QiLCJkYkNsaWVudCIsImRiIiwibWlkZGxld2FyZSIsInVzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./database/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database/db */ \"(api)/./database/db.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__, _database_db__WEBPACK_IMPORTED_MODULE_1__]);\n([next_connect__WEBPACK_IMPORTED_MODULE_0__, _database_db__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n//http://localhost:3000/api/login?user=joi&password=1\nhandler.use(_database_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nhandler.get(async (req, res)=>{\n    const { user , password  } = req.query;\n    console.log(req.query);\n    let doc = await req.db.collection(\"User\").findOne();\n    console.log(doc);\n    if (doc.user == user && doc.password == password) {\n        res.status(200).json({\n            status: \"sucess\",\n            id: doc._id,\n            user: doc.user,\n            name: doc.name,\n            lastname: doc.lastname,\n            admin: doc.admin\n        });\n    } else {\n        res.status(200).json({\n            status: \"failed\"\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVDO0FBQ0k7QUFFM0MsTUFBTUUsT0FBTyxHQUFHRix3REFBVyxFQUFFO0FBRTdCLHFEQUFxRDtBQUVyREUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLG9EQUFVLENBQUMsQ0FBQztBQUN4QkMsT0FBTyxDQUFDRSxHQUFHLENBQUMsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDNUIsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLFFBQVEsR0FBQyxHQUFHSCxHQUFHLENBQUNJLEtBQUs7SUFDbkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixHQUFHLENBQUNJLEtBQUssQ0FBQztJQUN0QixJQUFJRyxHQUFHLEdBQUcsTUFBTVAsR0FBRyxDQUFDUSxFQUFFLENBQUNDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO0lBQ25ETCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7SUFDakIsSUFBR0EsR0FBRyxDQUFDTCxJQUFJLElBQUlBLElBQUksSUFBSUssR0FBRyxDQUFDSixRQUFRLElBQUlBLFFBQVEsRUFBQztRQUM1Q0YsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDRCxNQUFNLEVBQUMsUUFBUTtZQUFFRSxFQUFFLEVBQUNOLEdBQUcsQ0FBQ08sR0FBRztZQUFFWixJQUFJLEVBQUNLLEdBQUcsQ0FBQ0wsSUFBSTtZQUFFYSxJQUFJLEVBQUNSLEdBQUcsQ0FBQ1EsSUFBSTtZQUFDQyxRQUFRLEVBQUNULEdBQUcsQ0FBQ1MsUUFBUTtZQUFFQyxLQUFLLEVBQUNWLEdBQUcsQ0FBQ1UsS0FBSztTQUFDLENBQUMsQ0FBQztLQUM1SCxNQUNHO1FBQ0FoQixHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNELE1BQU0sRUFBQyxRQUFRO1NBQUMsQ0FBQyxDQUFDO0tBQzNDO0NBQ0osQ0FBQyxDQUFDO0FBQ0gsaUVBQWVkLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhLXRhbmEtYWdlbmRhLy4vcGFnZXMvYXBpL2xvZ2luLmpzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmltcG9ydCBtaWRkbGV3YXJlIGZyb20gJy4uLy4uL2RhdGFiYXNlL2RiJztcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpO1xyXG5cclxuLy9odHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luP3VzZXI9am9pJnBhc3N3b3JkPTFcclxuXHJcbmhhbmRsZXIudXNlKG1pZGRsZXdhcmUpO1xyXG5oYW5kbGVyLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgcGFzc3dvcmR9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2cocmVxLnF1ZXJ5KVxyXG4gICAgbGV0IGRvYyA9IGF3YWl0IHJlcS5kYi5jb2xsZWN0aW9uKCdVc2VyJykuZmluZE9uZSgpXHJcbiAgICBjb25zb2xlLmxvZyhkb2MpO1xyXG4gICAgaWYoZG9jLnVzZXIgPT0gdXNlciAmJiBkb2MucGFzc3dvcmQgPT0gcGFzc3dvcmQpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdGF0dXM6XCJzdWNlc3NcIiwgaWQ6ZG9jLl9pZCwgdXNlcjpkb2MudXNlciwgbmFtZTpkb2MubmFtZSxsYXN0bmFtZTpkb2MubGFzdG5hbWUsIGFkbWluOmRvYy5hZG1pbn0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3RhdHVzOlwiZmFpbGVkXCJ9KTtcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIm5leHRDb25uZWN0IiwibWlkZGxld2FyZSIsImhhbmRsZXIiLCJ1c2UiLCJnZXQiLCJyZXEiLCJyZXMiLCJ1c2VyIiwicGFzc3dvcmQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkb2MiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwic3RhdHVzIiwianNvbiIsImlkIiwiX2lkIiwibmFtZSIsImxhc3RuYW1lIiwiYWRtaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();