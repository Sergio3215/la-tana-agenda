"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/body.js":
/*!****************************!*\
  !*** ./Components/body.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ \"./Components/login.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./Components/home.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\nvar App = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(App, _Component);\n    var _super = _createSuper(App);\n    function App() {\n        _classCallCheck(this, App);\n        var _this;\n        _this = _super.call(this);\n        _this.getCookie = _this.getCookie.bind(_assertThisInitialized(_this));\n        _this.getStorage = _this.getStorage.bind(_assertThisInitialized(_this));\n        _this.state = {\n            id: \"\",\n            name: \"\",\n            lastname: \"\",\n            admin: false,\n            mod: false,\n            user: false\n        };\n        return _this;\n    }\n    _createClass(App, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                this.getStorage();\n            }\n        },\n        {\n            key: \"getStorage\",\n            value: function getStorage() {\n                var _this = this;\n                return _asyncToGenerator(F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                fetch(\"/api/cookie\").then(function(res) {\n                                    return res.json();\n                                }).then(function(status) {\n                                    console.log(status);\n                                    _this.setState({\n                                        user: status\n                                    });\n                                    console.log(user);\n                                });\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"getCookie\",\n            value: function getCookie(data) {\n                var _this = this;\n                return _asyncToGenerator(F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var fetchstr, res;\n                    return F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                console.log(data);\n                                _ctx.next = 3;\n                                return fetch(\"/api/cookie?id=\" + data.id, {\n                                    method: \"POST\"\n                                });\n                            case 3:\n                                fetchstr = _ctx.sent;\n                                res = fetchstr.json();\n                                _this.setState({\n                                    id: data.id,\n                                    name: data.name,\n                                    lastname: data.lastname,\n                                    admin: data.admin,\n                                    mod: data.mod,\n                                    user: res\n                                }, function() {\n                                    return _this.forceUpdate();\n                                });\n                                console.log(_this.state.id);\n                            case 7:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: this.state.user == false ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        getCookie: this.getCookie\n                    }, void 0, false, {\n                        fileName: \"F:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\la-tana-agenda\\\\Components\\\\body.js\",\n                        lineNumber: 62,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        id: this.state.id,\n                        name: this.state.name,\n                        lastname: this.state.lastname,\n                        admin: this.state.admin,\n                        mod: this.state.mod\n                    }, void 0, false, {\n                        fileName: \"F:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\la-tana-agenda\\\\Components\\\\body.js\",\n                        lineNumber: 64,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\la-tana-agenda\\\\Components\\\\body.js\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return App;\n}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBSTt3QkFBQ00sRUFBRSxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxFQUFFO3dCQUFFQyxJQUFJLEVBQUksSUFBSSxDQUFDRixLQUFLLENBQUNFLElBQUk7d0JBQUVDLFFBQVEsRUFBRSxJQUFJLENBQUNILEtBQUssQ0FBQ0csUUFBUTt3QkFDL0VDLEtBQUssRUFBRSxJQUFJLENBQUNKLEtBQUssQ0FBQ0ksS0FBSzt3QkFBRUMsR0FBRyxFQUFFLElBQUksQ0FBQ0wsS0FBSyxDQUFDSyxHQUFHOzs7Ozs0QkFBRzs7Ozs7d0JBRXJELENBQ1Q7YUFDSjs7OztDQUNKLENBaEVnQ2Isd0RBQWUsQ0FnRS9DO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9ib2R5LmpzP2Q1ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9sb2dpblwiXHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0Q29va2llID0gdGhpcy5nZXRDb29raWUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldFN0b3JhZ2UgPSB0aGlzLmdldFN0b3JhZ2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6XCJcIixcclxuICAgICAgICAgICAgbmFtZTpcIlwiLFxyXG4gICAgICAgICAgICBsYXN0bmFtZTpcIlwiLFxyXG4gICAgICAgICAgICBhZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1vZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZXI6ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRTdG9yYWdlKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRTdG9yYWdlKCl7XHJcbiAgICAgICAgZmV0Y2goXCIvYXBpL2Nvb2tpZVwiKVxyXG4gICAgICAgIC50aGVuKHJlcz0+cmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihzdGF0dXM9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcjpzdGF0dXN9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRDb29raWUoZGF0YSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGZldGNoc3RyID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Nvb2tpZT9pZD1cIitkYXRhLmlkLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCdcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgcmVzID0gZmV0Y2hzdHIuanNvbigpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaWQ6ZGF0YS5pZCxcclxuICAgICAgICAgICAgbmFtZTpkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgIGxhc3RuYW1lOmRhdGEubGFzdG5hbWUsXHJcbiAgICAgICAgICAgIGFkbWluOiBkYXRhLmFkbWluLFxyXG4gICAgICAgICAgICBtb2Q6IGRhdGEubW9kLFxyXG4gICAgICAgICAgICB1c2VyOnJlc1xyXG4gICAgICAgIH0sICgpPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaWQpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUudXNlciA9PSBmYWxzZSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9naW4gZ2V0Q29va2llPXt0aGlzLmdldENvb2tpZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lIGlkPXt0aGlzLnN0YXRlLmlkfSBuYW1lID0ge3RoaXMuc3RhdGUubmFtZX0gbGFzdG5hbWU9e3RoaXMuc3RhdGUubGFzdG5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZG1pbj17dGhpcy5zdGF0ZS5hZG1pbn0gbW9kPXt0aGlzLnN0YXRlLm1vZH0vPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJMb2dpbiIsIkhvbWUiLCJBcHAiLCJnZXRDb29raWUiLCJiaW5kIiwiZ2V0U3RvcmFnZSIsInN0YXRlIiwiaWQiLCJuYW1lIiwibGFzdG5hbWUiLCJhZG1pbiIsIm1vZCIsInVzZXIiLCJjb21wb25lbnREaWRNb3VudCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJkYXRhIiwiZmV0Y2hzdHIiLCJtZXRob2QiLCJmb3JjZVVwZGF0ZSIsInJlbmRlciIsImRpdiIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/body.js\n");

/***/ })

});