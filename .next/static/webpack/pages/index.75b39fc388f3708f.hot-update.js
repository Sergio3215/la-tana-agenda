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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ \"./Components/login.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./Components/home.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\nvar App = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(App, _Component);\n    var _super = _createSuper(App);\n    function App() {\n        _classCallCheck(this, App);\n        var _this;\n        _this = _super.call(this);\n        _this.getCookie = _this.getCookie.bind(_assertThisInitialized(_this));\n        _this.state = {\n            id: \"\",\n            name: \"\",\n            lastname: \"\",\n            admin: false,\n            mod: false\n        };\n        return _this;\n    }\n    _createClass(App, [\n        {\n            key: \"componentDidUpdate\",\n            value: function componentDidUpdate(PrevProps) {\n                if (PrevProps.data.data != this.props.data.data) {\n                    console.log(this.props.data);\n                }\n            }\n        },\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                this.props.getStorage();\n                this.props.getUserData();\n                console.log(this.props.data);\n                if (this.props.data.data != undefined || this.props.data.data != null) {\n                    var _this = this;\n                    this.setState({\n                        id: this.props.data.data.id,\n                        name: this.props.data.data.name,\n                        lastname: this.props.data.data.lastname,\n                        admin: this.props.data.data.admin,\n                        mod: this.props.data.data.mod\n                    }, function() {\n                        _this.forceUpdate();\n                        _this.props.getStorage();\n                    });\n                }\n            }\n        },\n        {\n            key: \"getCookie\",\n            value: function getCookie(data) {\n                var _this = this;\n                return _asyncToGenerator(F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var fetchstr;\n                    return F_other_2TB_Mi_Escritorio_desarrollo_web_la_tana_agenda_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return fetch(\"/api/cookie?id=\" + data.id, {\n                                    method: \"POST\"\n                                });\n                            case 2:\n                                fetchstr = _ctx.sent;\n                                _this.setState({\n                                    id: data.id,\n                                    name: data.name,\n                                    lastname: data.lastname,\n                                    admin: data.admin,\n                                    mod: data.mod\n                                }, function() {\n                                    _this.forceUpdate();\n                                    _this.props.getStorage();\n                                });\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: !this.props.user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        getCookie: this.getCookie\n                    }, void 0, false, {\n                        fileName: \"F:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\la-tana-agenda\\\\Components\\\\body.js\",\n                        lineNumber: 60,\n                        columnNumber: 25\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        id: this.state.id,\n                        name: this.state.name,\n                        lastname: this.state.lastname,\n                        admin: this.state.admin,\n                        mod: this.state.mod\n                    }, void 0, false, {\n                        fileName: \"F:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\la-tana-agenda\\\\Components\\\\body.js\",\n                        lineNumber: 62,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\other 2TB\\\\Mi Escritorio\\\\desarrollo web\\\\la-tana-agenda\\\\Components\\\\body.js\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return App;\n}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO29DQUNqQkMsR0FBRyxFQUFFRyxJQUFJLENBQUNILEdBQUc7aUNBQ2hCLEVBQUUsV0FBTTtvQ0FBRSxNQUFLWSxXQUFXLEVBQUUsQ0FBQztvQ0FBQyxNQUFLUixLQUFLLENBQUNJLFVBQVUsRUFBRSxDQUFDO2lDQUFFLENBQUM7Ozs7OztpQkFDN0Q7YUFBQTs7O1lBRURRLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNMLHFCQUNJLDhEQUFDQyxLQUFHOzhCQUVJLENBQUUsSUFBSSxDQUFDYixLQUFLLENBQUNjLElBQUksaUJBQ2IsOERBQUM1Qiw4Q0FBSzt3QkFBQ0csU0FBUyxFQUFFLElBQUksQ0FBQ0EsU0FBUzs7Ozs7NEJBQUksaUJBRXBDLDhEQUFDRiw2Q0FBSTt3QkFBQ0ssRUFBRSxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxFQUFFO3dCQUFFQyxJQUFJLEVBQUUsSUFBSSxDQUFDRixLQUFLLENBQUNFLElBQUk7d0JBQUVDLFFBQVEsRUFBRSxJQUFJLENBQUNILEtBQUssQ0FBQ0csUUFBUTt3QkFDekVDLEtBQUssRUFBRSxJQUFJLENBQUNKLEtBQUssQ0FBQ0ksS0FBSzt3QkFBRUMsR0FBRyxFQUFFLElBQUksQ0FBQ0wsS0FBSyxDQUFDSyxHQUFHOzs7Ozs0QkFBSTs7Ozs7d0JBRTFELENBQ1Q7YUFDSjs7OztDQUNKLENBOURnQ1osd0RBQWUsQ0E4RC9DO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9ib2R5LmpzP2Q1ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9sb2dpblwiXHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0Q29va2llID0gdGhpcy5nZXRDb29raWUuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGxhc3RuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBhZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1vZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKFByZXZQcm9wcykge1xyXG4gICAgICAgIGlmKFByZXZQcm9wcy5kYXRhLmRhdGEgIT0gdGhpcy5wcm9wcy5kYXRhLmRhdGEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0U3RvcmFnZSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlckRhdGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRhdGEpXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YS5kYXRhICE9IHVuZGVmaW5lZCB8fCB0aGlzLnByb3BzLmRhdGEuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuZGF0YS5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5kYXRhLmRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOiB0aGlzLnByb3BzLmRhdGEuZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICAgICAgICAgIGFkbWluOiB0aGlzLnByb3BzLmRhdGEuZGF0YS5hZG1pbixcclxuICAgICAgICAgICAgICAgIG1vZDogdGhpcy5wcm9wcy5kYXRhLmRhdGEubW9kXHJcbiAgICAgICAgICAgIH0sICgpID0+IHsgdGhpcy5mb3JjZVVwZGF0ZSgpOyB0aGlzLnByb3BzLmdldFN0b3JhZ2UoKTsgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0Q29va2llKGRhdGEpIHtcclxuICAgICAgICBsZXQgZmV0Y2hzdHIgPSBhd2FpdCBmZXRjaChcIi9hcGkvY29va2llP2lkPVwiICsgZGF0YS5pZCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICBsYXN0bmFtZTogZGF0YS5sYXN0bmFtZSxcclxuICAgICAgICAgICAgYWRtaW46IGRhdGEuYWRtaW4sXHJcbiAgICAgICAgICAgIG1vZDogZGF0YS5tb2RcclxuICAgICAgICB9LCAoKSA9PiB7IHRoaXMuZm9yY2VVcGRhdGUoKTsgdGhpcy5wcm9wcy5nZXRTdG9yYWdlKCk7IH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnByb3BzLnVzZXIpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luIGdldENvb2tpZT17dGhpcy5nZXRDb29raWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhvbWUgaWQ9e3RoaXMuc3RhdGUuaWR9IG5hbWU9e3RoaXMuc3RhdGUubmFtZX0gbGFzdG5hbWU9e3RoaXMuc3RhdGUubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZG1pbj17dGhpcy5zdGF0ZS5hZG1pbn0gbW9kPXt0aGlzLnN0YXRlLm1vZH0gLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTG9naW4iLCJIb21lIiwiQXBwIiwiZ2V0Q29va2llIiwiYmluZCIsInN0YXRlIiwiaWQiLCJuYW1lIiwibGFzdG5hbWUiLCJhZG1pbiIsIm1vZCIsImNvbXBvbmVudERpZFVwZGF0ZSIsIlByZXZQcm9wcyIsImRhdGEiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnREaWRNb3VudCIsImdldFN0b3JhZ2UiLCJnZXRVc2VyRGF0YSIsInVuZGVmaW5lZCIsInNldFN0YXRlIiwiZm9yY2VVcGRhdGUiLCJmZXRjaHN0ciIsImZldGNoIiwibWV0aG9kIiwicmVuZGVyIiwiZGl2IiwidXNlciIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/body.js\n");

/***/ })

});