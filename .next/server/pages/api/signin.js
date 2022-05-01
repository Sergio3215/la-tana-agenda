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

/***/ "(api)/./pages/api/signin.js":
/*!*****************************!*\
  !*** ./pages/api/signin.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/db */ \"(api)/./database/db.js\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_db__WEBPACK_IMPORTED_MODULE_0__, next_connect__WEBPACK_IMPORTED_MODULE_1__]);\n([_database_db__WEBPACK_IMPORTED_MODULE_0__, next_connect__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n// export default async function handlerCreate(req, res) {\n//     const { user, password, email, name, lastname} = req.query;\n//   const newUser = await firebase.db.collection(\"User\").add({\n//         user:user,\n//         password:password,\n//         email: email,\n//         admin: false,\n//         name: name,\n//         lastname:lastname\n//     })\n//     res.status(200).json({ status: true });\n// }\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n//http://localhost:3000/api/signin?user=usernamefake&password=%271%27&email=example@example.com&name=artur&lastname=jinzo\nhandler.use(_database_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nhandler.get(async (req, res)=>{\n    const { user , password , email , name , lastname  } = req.query;\n    console.log(req.query);\n    let doc = await req.db.collection(\"User\").insertOne({\n        user: user,\n        password: password,\n        email: email,\n        name: name,\n        lastname: lastname,\n        admin: false\n    });\n    console.log(doc);\n    res.status(200).json({\n        status: \"sucess\"\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbmluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QztBQUl6QywwREFBMEQ7QUFDMUQsa0VBQWtFO0FBRWxFLCtEQUErRDtBQUMvRCxxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLDRCQUE0QjtBQUM1QixTQUFTO0FBRVQsOENBQThDO0FBRTlDLElBQUk7QUFDbUM7QUFDSTtBQUUzQyxNQUFNRyxPQUFPLEdBQUdGLHdEQUFXLEVBQUU7QUFFN0IseUhBQXlIO0FBRXpIRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Ysb0RBQVUsQ0FBQyxDQUFDO0FBQ3hCQyxPQUFPLENBQUNFLEdBQUcsQ0FBQyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUM1QixNQUFNLEVBQUVDLElBQUksR0FBRUMsUUFBUSxHQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRUMsUUFBUSxHQUFDLEdBQUdOLEdBQUcsQ0FBQ08sS0FBSztJQUMxREMsT0FBTyxDQUFDQyxHQUFHLENBQUNULEdBQUcsQ0FBQ08sS0FBSyxDQUFDO0lBQ3RCLElBQUlHLEdBQUcsR0FBRyxNQUFNVixHQUFHLENBQUNXLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxTQUFTLENBQy9DO1FBQ0lYLElBQUksRUFBRUEsSUFBSTtRQUNWQyxRQUFRLEVBQUdBLFFBQVE7UUFDbkJDLEtBQUssRUFBR0EsS0FBSztRQUNiQyxJQUFJLEVBQUNBLElBQUk7UUFDVEMsUUFBUSxFQUFDQSxRQUFRO1FBQ2pCUSxLQUFLLEVBQUcsS0FBSztLQUNoQixDQUNKO0lBQ0ROLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxHQUFHLENBQUMsQ0FBQztJQUNqQlQsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFDRCxNQUFNLEVBQUMsUUFBUTtLQUFDLENBQUMsQ0FBQztDQUMzQyxDQUFDLENBQUM7QUFDSCxpRUFBZWxCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhLXRhbmEtYWdlbmRhLy4vcGFnZXMvYXBpL3NpZ25pbi5qcz82ZGUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi8uLi9kYXRhYmFzZS9kYic7XHJcblxyXG5cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXJDcmVhdGUocmVxLCByZXMpIHtcclxuLy8gICAgIGNvbnN0IHsgdXNlciwgcGFzc3dvcmQsIGVtYWlsLCBuYW1lLCBsYXN0bmFtZX0gPSByZXEucXVlcnk7XHJcblxyXG4vLyAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBmaXJlYmFzZS5kYi5jb2xsZWN0aW9uKFwiVXNlclwiKS5hZGQoe1xyXG4vLyAgICAgICAgIHVzZXI6dXNlcixcclxuLy8gICAgICAgICBwYXNzd29yZDpwYXNzd29yZCxcclxuLy8gICAgICAgICBlbWFpbDogZW1haWwsXHJcbi8vICAgICAgICAgYWRtaW46IGZhbHNlLFxyXG4vLyAgICAgICAgIG5hbWU6IG5hbWUsXHJcbi8vICAgICAgICAgbGFzdG5hbWU6bGFzdG5hbWVcclxuLy8gICAgIH0pXHJcbiAgICBcclxuLy8gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiB0cnVlIH0pO1xyXG5cclxuLy8gfVxyXG5pbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vZGF0YWJhc2UvZGInO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KCk7XHJcblxyXG4vL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2lnbmluP3VzZXI9dXNlcm5hbWVmYWtlJnBhc3N3b3JkPSUyNzElMjcmZW1haWw9ZXhhbXBsZUBleGFtcGxlLmNvbSZuYW1lPWFydHVyJmxhc3RuYW1lPWppbnpvXHJcblxyXG5oYW5kbGVyLnVzZShtaWRkbGV3YXJlKTtcclxuaGFuZGxlci5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIsIHBhc3N3b3JkLCBlbWFpbCwgbmFtZSwgbGFzdG5hbWV9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2cocmVxLnF1ZXJ5KVxyXG4gICAgbGV0IGRvYyA9IGF3YWl0IHJlcS5kYi5jb2xsZWN0aW9uKCdVc2VyJykuaW5zZXJ0T25lKFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIHVzZXI6IHVzZXIsIFxyXG4gICAgICAgICAgICBwYXNzd29yZCA6IHBhc3N3b3JkLCBcclxuICAgICAgICAgICAgZW1haWwgOiBlbWFpbCwgXHJcbiAgICAgICAgICAgIG5hbWU6bmFtZSwgXHJcbiAgICAgICAgICAgIGxhc3RuYW1lOmxhc3RuYW1lLFxyXG4gICAgICAgICAgICBhZG1pbiA6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKGRvYyk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3RhdHVzOlwic3VjZXNzXCJ9KTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbImZpcmViYXNlIiwibmV4dENvbm5lY3QiLCJtaWRkbGV3YXJlIiwiaGFuZGxlciIsInVzZSIsImdldCIsInJlcSIsInJlcyIsInVzZXIiLCJwYXNzd29yZCIsImVtYWlsIiwibmFtZSIsImxhc3RuYW1lIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZG9jIiwiZGIiLCJjb2xsZWN0aW9uIiwiaW5zZXJ0T25lIiwiYWRtaW4iLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/signin.js\n");

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