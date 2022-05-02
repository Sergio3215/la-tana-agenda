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
exports.id = "pages/api/cookie";
exports.ids = ["pages/api/cookie"];
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

/***/ "(api)/./pages/api/cookie.js":
/*!*****************************!*\
  !*** ./pages/api/cookie.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nhandler.get(async (req, res)=>{\n    const cookies = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)(\"account\", {\n        req,\n        res\n    });\n    if (cookies != undefined) {\n        res.status(200).json({\n            status: true\n        });\n    } else {\n        res.status(200).json({\n            status: false\n        });\n    }\n});\nconst startID = \"aslkd91adlka92nal\";\nconst endID = \"qwepo1occn1dmka1\";\n//http://localhost:3000/api/setCookie?id=2\nhandler.post(async (req, res)=>{\n    const { id  } = req.query;\n    if (id != undefined) {\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.removeCookies)(\"account\", {\n            req,\n            res\n        });\n        (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.setCookies)(\"account\", {\n            id: startID + id + endID\n        }, {\n            req,\n            res,\n            maxAge: 60 * 60 * 24\n        });\n        const cookies = (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)(\"account\", {\n            req,\n            res\n        });\n        if (cookies != undefined) {\n            res.status(200).json({\n                status: true\n            });\n        } else {\n            res.status(200).json({\n                status: false\n            });\n        }\n    } else {\n        res.status(200).json({\n            status: false\n        });\n    }\n});\nhandler.delete((req, res)=>{\n    (0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.removeCookies)(\"account\", {\n        req,\n        res\n    });\n    res.status(200).json({\n        status: false\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29va2llLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Y7QUFDekM7QUFFdkMsTUFBTUssT0FBTyxHQUFHRCx3REFBVyxFQUFFO0FBRTdCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUM3QixNQUFNQyxPQUFPLEdBQUdSLHVEQUFTLENBQUMsU0FBUyxFQUFDO1FBQUNNLEdBQUc7UUFBQ0MsR0FBRztLQUFDLENBQUM7SUFDOUMsSUFBR0MsT0FBTyxJQUFJQyxTQUFTLEVBQUM7UUFDdkJGLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0QsTUFBTSxFQUFDLElBQUk7U0FBQyxDQUFDO0tBQ25DLE1BQ0c7UUFDSEgsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDRCxNQUFNLEVBQUMsS0FBSztTQUFDLENBQUM7S0FDcEM7Q0FDSCxDQUFDLENBQUM7QUFFSCxNQUFNRSxPQUFPLEdBQUcsbUJBQW1CO0FBQ25DLE1BQU1DLEtBQUssR0FBRyxrQkFBa0I7QUFFaEMsMENBQTBDO0FBRTFDVCxPQUFPLENBQUNVLElBQUksQ0FBQyxPQUFPUixHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUM5QixNQUFLLEVBQUNRLEVBQUUsR0FBQyxHQUFHVCxHQUFHLENBQUNVLEtBQUs7SUFDckIsSUFBR0QsRUFBRSxJQUFJTixTQUFTLEVBQUM7UUFDaEJQLDJEQUFhLENBQUMsU0FBUyxFQUFDO1lBQUNJLEdBQUc7WUFBQ0MsR0FBRztTQUFDLENBQUM7UUFDbENOLHdEQUFVLENBQUMsU0FBUyxFQUFDO1lBQUNjLEVBQUUsRUFBQ0gsT0FBTyxHQUFDRyxFQUFFLEdBQUNGLEtBQUs7U0FBQyxFQUFDO1lBQUNQLEdBQUc7WUFBQ0MsR0FBRztZQUFDVSxNQUFNLEVBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFO1NBQUMsQ0FBQyxDQUFDO1FBQ3RFLE1BQU1ULE9BQU8sR0FBR1IsdURBQVMsQ0FBQyxTQUFTLEVBQUM7WUFBQ00sR0FBRztZQUFDQyxHQUFHO1NBQUMsQ0FBQztRQUM5QyxJQUFHQyxPQUFPLElBQUlDLFNBQVMsRUFBQztZQUN2QkYsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBQ0QsTUFBTSxFQUFDLElBQUk7YUFBQyxDQUFDO1NBQ25DLE1BQ0c7WUFDSEgsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBQ0QsTUFBTSxFQUFDLEtBQUs7YUFBQyxDQUFDO1NBQ3BDO0tBQ0gsTUFDRztRQUNISCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNELE1BQU0sRUFBQyxLQUFLO1NBQUMsQ0FBQztLQUNwQztDQUNILENBQUMsQ0FBQztBQUVITixPQUFPLENBQUNjLE1BQU0sQ0FBQyxDQUFDWixHQUFHLEVBQUNDLEdBQUcsR0FBSztJQUN4QkwsMkRBQWEsQ0FBQyxTQUFTLEVBQUM7UUFBQ0ksR0FBRztRQUFDQyxHQUFHO0tBQUMsQ0FBQyxDQUFDO0lBQ25DQSxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUNELE1BQU0sRUFBQyxLQUFLO0tBQUMsQ0FBQztDQUN2QyxDQUFDO0FBRUYsaUVBQWVOLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhLXRhbmEtYWdlbmRhLy4vcGFnZXMvYXBpL2Nvb2tpZS5qcz9mZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvb2tpZXMsIGdldENvb2tpZSwgc2V0Q29va2llcywgcmVtb3ZlQ29va2llcyB9IGZyb20gJ2Nvb2tpZXMtbmV4dCc7XHJcbmltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KCk7XHJcblxyXG5oYW5kbGVyLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgY29uc3QgY29va2llcyA9IGdldENvb2tpZShcImFjY291bnRcIix7cmVxLHJlc30pO1xyXG4gICBpZihjb29raWVzICE9IHVuZGVmaW5lZCl7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3RhdHVzOnRydWV9KVxyXG4gICB9XHJcbiAgIGVsc2V7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3RhdHVzOmZhbHNlfSlcclxuICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHN0YXJ0SUQgPSBcImFzbGtkOTFhZGxrYTkybmFsXCI7XHJcbmNvbnN0IGVuZElEID0gXCJxd2VwbzFvY2NuMWRta2ExXCI7XHJcblxyXG4vL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2V0Q29va2llP2lkPTJcclxuXHJcbmhhbmRsZXIucG9zdChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgY29uc3R7aWR9ID0gcmVxLnF1ZXJ5O1xyXG4gICBpZihpZCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICByZW1vdmVDb29raWVzKFwiYWNjb3VudFwiLHtyZXEscmVzfSlcclxuICAgICAgc2V0Q29va2llcyhcImFjY291bnRcIix7aWQ6c3RhcnRJRCtpZCtlbmRJRH0se3JlcSxyZXMsbWF4QWdlOjYwKjYwKjI0fSk7XHJcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBnZXRDb29raWUoXCJhY2NvdW50XCIse3JlcSxyZXN9KVxyXG4gICAgICBpZihjb29raWVzICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3RhdHVzOnRydWV9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3RhdHVzOmZhbHNlfSlcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIGVsc2V7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3RhdHVzOmZhbHNlfSlcclxuICAgfVxyXG59KTtcclxuXHJcbmhhbmRsZXIuZGVsZXRlKChyZXEscmVzKSA9PiB7XHJcbiAgICByZW1vdmVDb29raWVzKFwiYWNjb3VudFwiLHtyZXEscmVzfSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3RhdHVzOmZhbHNlfSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbImdldENvb2tpZXMiLCJnZXRDb29raWUiLCJzZXRDb29raWVzIiwicmVtb3ZlQ29va2llcyIsIm5leHRDb25uZWN0IiwiaGFuZGxlciIsImdldCIsInJlcSIsInJlcyIsImNvb2tpZXMiLCJ1bmRlZmluZWQiLCJzdGF0dXMiLCJqc29uIiwic3RhcnRJRCIsImVuZElEIiwicG9zdCIsImlkIiwicXVlcnkiLCJtYXhBZ2UiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/cookie.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cookie.js"));
module.exports = __webpack_exports__;

})();