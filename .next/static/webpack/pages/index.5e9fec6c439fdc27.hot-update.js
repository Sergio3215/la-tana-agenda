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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ \"./Components/login.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./Components/home.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\nvar App = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(App, _Component);\n    var _super = _createSuper(App);\n    function App() {\n        _classCallCheck(this, App);\n        var _this;\n        _this = _super.call(this);\n        _this.getCookie = _this.getCookie.bind(_assertThisInitialized(_this));\n        _this.state = {\n            id: \"\",\n            name: \"\",\n            lastname: \"\",\n            admin: false,\n            mod: false\n        };\n        return _this;\n    }\n    _createClass(App, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                this.props.getUserData();\n                this.props.getStorage();\n                if (this.props.data.data != undefined || this.props.data.data != null) {\n                    var _this = this;\n                    this.setState({\n                        id: this.props.data.data.id,\n                        name: this.props.data.data.name,\n                        lastname: this.props.data.data.lastname,\n                        admin: this.props.data.data.admin,\n                        mod: this.props.data.data.mod\n                    }, function() {\n                        _this.forceUpdate();\n                        _this.props.getStorage();\n                    });\n                }\n            }\n        },\n        {\n            key: \"getCookie\",\n            value: function getCookie(data) {\n                var _this = this;\n                return _asyncToGenerator(F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var fetchstr;\n                    return F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return fetch(\"/api/cookie?id=\" + data.id, {\n                                    method: \"POST\"\n                                });\n                            case 2:\n                                fetchstr = _ctx.sent;\n                                _this.setState({\n                                    id: data.id,\n                                    name: data.name,\n                                    lastname: data.lastname,\n                                    admin: data.admin,\n                                    mod: data.mod\n                                }, function() {\n                                    _this.forceUpdate();\n                                    _this.props.getStorage();\n                                });\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: !this.props.user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        getCookie: this.getCookie\n                    }, void 0, false, {\n                        fileName: \"F:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\la-tana-agenda\\\\Components\\\\body.js\",\n                        lineNumber: 53,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        id: this.state.id,\n                        name: this.state.name,\n                        lastname: this.state.lastname,\n                        admin: this.state.admin,\n                        mod: this.state.mod\n                    }, void 0, false, {\n                        fileName: \"F:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\la-tana-agenda\\\\Components\\\\body.js\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\la-tana-agenda\\\\Components\\\\body.js\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return App;\n}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFFLElBQUksQ0FBQ0EsU0FBUzs7Ozs7NEJBQUksaUJBRXBDLDhEQUFDRiw2Q0FBSTt3QkFBQ0ssRUFBRSxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxFQUFFO3dCQUFFQyxJQUFJLEVBQUUsSUFBSSxDQUFDRixLQUFLLENBQUNFLElBQUk7d0JBQUVDLFFBQVEsRUFBRSxJQUFJLENBQUNILEtBQUssQ0FBQ0csUUFBUTt3QkFDekVDLEtBQUssRUFBRSxJQUFJLENBQUNKLEtBQUssQ0FBQ0ksS0FBSzt3QkFBRUMsR0FBRyxFQUFFLElBQUksQ0FBQ0wsS0FBSyxDQUFDSyxHQUFHOzs7Ozs0QkFBSTs7Ozs7d0JBRTFELENBQ1Q7YUFDSjs7OztDQUNKLENBdkRnQ1osd0RBQWUsQ0F1RC9DO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9ib2R5LmpzP2Q1ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9sb2dpblwiXHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0Q29va2llID0gdGhpcy5nZXRDb29raWUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGxhc3RuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBhZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1vZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyRGF0YSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0U3RvcmFnZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGEuZGF0YSAhPSB1bmRlZmluZWQgfHwgdGhpcy5wcm9wcy5kYXRhLmRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmRhdGEuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMuZGF0YS5kYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0bmFtZTogdGhpcy5wcm9wcy5kYXRhLmRhdGEubGFzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICBhZG1pbjogdGhpcy5wcm9wcy5kYXRhLmRhdGEuYWRtaW4sXHJcbiAgICAgICAgICAgICAgICBtb2Q6IHRoaXMucHJvcHMuZGF0YS5kYXRhLm1vZFxyXG4gICAgICAgICAgICB9LCAoKSA9PiB7IHRoaXMuZm9yY2VVcGRhdGUoKTsgdGhpcy5wcm9wcy5nZXRTdG9yYWdlKCk7IH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldENvb2tpZShkYXRhKSB7XHJcbiAgICAgICAgbGV0IGZldGNoc3RyID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Nvb2tpZT9pZD1cIiArIGRhdGEuaWQsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgbGFzdG5hbWU6IGRhdGEubGFzdG5hbWUsXHJcbiAgICAgICAgICAgIGFkbWluOiBkYXRhLmFkbWluLFxyXG4gICAgICAgICAgICBtb2Q6IGRhdGEubW9kXHJcbiAgICAgICAgfSwgKCkgPT4geyB0aGlzLmZvcmNlVXBkYXRlKCk7IHRoaXMucHJvcHMuZ2V0U3RvcmFnZSgpOyB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICghdGhpcy5wcm9wcy51c2VyKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dpbiBnZXRDb29raWU9e3RoaXMuZ2V0Q29va2llfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lIGlkPXt0aGlzLnN0YXRlLmlkfSBuYW1lPXt0aGlzLnN0YXRlLm5hbWV9IGxhc3RuYW1lPXt0aGlzLnN0YXRlLmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRtaW49e3RoaXMuc3RhdGUuYWRtaW59IG1vZD17dGhpcy5zdGF0ZS5tb2R9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkxvZ2luIiwiSG9tZSIsIkFwcCIsImdldENvb2tpZSIsImJpbmQiLCJzdGF0ZSIsImlkIiwibmFtZSIsImxhc3RuYW1lIiwiYWRtaW4iLCJtb2QiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwiZ2V0VXNlckRhdGEiLCJnZXRTdG9yYWdlIiwiZGF0YSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiZm9yY2VVcGRhdGUiLCJmZXRjaHN0ciIsImZldGNoIiwibWV0aG9kIiwicmVuZGVyIiwiZGl2IiwidXNlciIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/body.js\n");

/***/ })

});