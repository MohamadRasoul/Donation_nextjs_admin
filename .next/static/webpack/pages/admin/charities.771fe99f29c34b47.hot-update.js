"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/charities",{

/***/ "./src/pages/admin/charities.js":
/*!**************************************!*\
  !*** ./src/pages/admin/charities.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_WEB_My_Project_Girl_Project_Breeze_Front_end_breeze_next_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_WEB_My_Project_Girl_Project_Breeze_Front_end_breeze_next_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_WEB_My_Project_Girl_Project_Breeze_Front_end_breeze_next_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/auth */ \"./src/hooks/auth.js\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/axios */ \"./src/lib/axios.js\");\n/* harmony import */ var layouts_Admin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! layouts/Admin.js */ \"./src/layouts/Admin.js\");\n\n\n\n\n\n\n// layout for page\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Charities = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), charitableFoundations = ref[0], setCharitableFoundations = ref[1];\n    (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth)({\n        middleware: 'auth',\n        role: 'Admin'\n    });\n    var getCharities = function() {\n        var _ref = _asyncToGenerator(D_WEB_My_Project_Girl_Project_Breeze_Front_end_breeze_next_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_WEB_My_Project_Girl_Project_Breeze_Front_end_breeze_next_master_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _lib_axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('admin/charitableFoundation').then(function(res) {\n                            setCharitableFoundations(res.data.data.charitableFoundations);\n                        }).catch(function(error) {\n                            console.log(error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getCharities() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getCharities();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"grid w-full gap-5\",\n            children: charitableFoundations === null || charitableFoundations === void 0 ? void 0 : charitableFoundations.map(function(charitableFoundation) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"shadow-xl card bg-base-100 image-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"figure\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                src: \"https://api.lorem.space/image/house?w=400&h=225\",\n                                alt: \"Charities\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Breeze\\\\Front_end\\\\breeze-next-master\\\\src\\\\pages\\\\admin\\\\charities.js\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Breeze\\\\Front_end\\\\breeze-next-master\\\\src\\\\pages\\\\admin\\\\charities.js\",\n                            lineNumber: 36,\n                            columnNumber: 25\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                    className: \"card-title\",\n                                    children: charitableFoundation.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Breeze\\\\Front_end\\\\breeze-next-master\\\\src\\\\pages\\\\admin\\\\charities.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: \"h-20 overflow-hidden overflow-ellipsis leading-relaxed\",\n                                    children: charitableFoundation.description\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Breeze\\\\Front_end\\\\breeze-next-master\\\\src\\\\pages\\\\admin\\\\charities.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 29\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"justify-end card-actions\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-primary\",\n                                        children: \"Show More ...\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Breeze\\\\Front_end\\\\breeze-next-master\\\\src\\\\pages\\\\admin\\\\charities.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 33\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Breeze\\\\Front_end\\\\breeze-next-master\\\\src\\\\pages\\\\admin\\\\charities.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 29\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Breeze\\\\Front_end\\\\breeze-next-master\\\\src\\\\pages\\\\admin\\\\charities.js\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Breeze\\\\Front_end\\\\breeze-next-master\\\\src\\\\pages\\\\admin\\\\charities.js\",\n                    lineNumber: 35,\n                    columnNumber: 21\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Breeze\\\\Front_end\\\\breeze-next-master\\\\src\\\\pages\\\\admin\\\\charities.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false));\n};\n_s(Charities, \"1fkoqm3nQVkoPuSYpd+WiHjID4w=\", false, function() {\n    return [\n        _hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = Charities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Charities);\nCharities.layout = layouts_Admin_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nvar _c;\n$RefreshReg$(_c, \"Charities\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRtaW4vY2hhcml0aWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNrQjtBQUNMO0FBQ1A7QUFFL0IsRUFBa0I7QUFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLEdBQUssQ0FBQ00sU0FBUyxHQUFHLFFBQ2xCLEdBRHdCLENBQUM7OztJQUNyQixHQUFLLENBQXFESixHQUFVLEdBQVZBLCtDQUFRLElBQTNESyxxQkFBcUIsR0FBOEJMLEdBQVUsS0FBdENNLHdCQUF3QixHQUFJTixHQUFVO0lBQ3BFQyxvREFBTyxDQUFDLENBQUM7UUFDTE0sVUFBVSxFQUFFLENBQU07UUFDbEJDLElBQUksRUFBRSxDQUFPO0lBQ2pCLENBQUM7SUFFRCxHQUFLLENBQUNDLFlBQVk7a05BQUcsUUFBUSxXQUFJLENBQUM7Ozs7OytCQUN4QlAsc0RBQ0UsQ0FBQyxDQUE0Qiw2QkFDaENTLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxHQUFHLEVBQUksQ0FBQzs0QkFDVk4sd0JBQXdCLENBQUNNLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQSxJQUFJLENBQUNSLHFCQUFxQjt3QkFDaEUsQ0FBQyxFQUNBUyxLQUFLLENBQUNDLFFBQVEsQ0FBUkEsS0FBSyxFQUFJLENBQUM7NEJBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO3dCQUNyQixDQUFDOzs7Ozs7UUFDVCxDQUFDO3dCQVRLTixZQUFZOzs7O0lBV2xCVixnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiVSxZQUFZO0lBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNOzhGQUVHUyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFtQjtzQkFDN0JkLHFCQUFxQixhQUFyQkEscUJBQXFCLEtBQXJCQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxJQUFJLENBQUpBLENBQTBCLEdBQTFCQSxxQkFBcUIsQ0FBRWUsR0FBRyxDQUFDQyxRQUFRLENBQVJBLG9CQUFvQjs4QkFDNUMsTUFBTSwrREFBTEgsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQXVDOztvR0FDakRHLENBQU07a0hBQ0ZDLENBQUc7Z0NBQ0FDLEdBQUcsRUFBQyxDQUFpRDtnQ0FDckRDLEdBQUcsRUFBQyxDQUFXOzs7Ozs7Ozs7OztvR0FHdEJQLENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFXOzs0R0FDckJPLENBQUU7b0NBQUNQLFNBQVMsRUFBQyxDQUFZOzhDQUNyQkUsb0JBQW9CLENBQUNNLElBQUk7Ozs7Ozs0R0FFN0JDLENBQUM7b0NBQUNULFNBQVMsRUFBQyxDQUF3RDs4Q0FDaEVFLG9CQUFvQixDQUFDUSxXQUFXOzs7Ozs7NEdBRXBDWCxDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBMEI7MEhBQ3BDVyxDQUFNO3dDQUFDWCxTQUFTLEVBQUMsQ0FBaUI7a0RBQUMsQ0FFcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoQyxDQUFDO0dBbkRLZixTQUFTOztRQUVYSCxnREFBTzs7O0tBRkxHLFNBQVM7QUFxRGYsK0RBQWVBLFNBQVM7QUFFeEJBLFNBQVMsQ0FBQzJCLE1BQU0sR0FBRzVCLHdEQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hZG1pbi9jaGFyaXRpZXMuanM/YWIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQC9ob29rcy9hdXRoJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ0AvbGliL2F4aW9zJ1xuXG4vLyBsYXlvdXQgZm9yIHBhZ2VcbmltcG9ydCBBZG1pbiBmcm9tICdsYXlvdXRzL0FkbWluLmpzJ1xuXG5jb25zdCBDaGFyaXRpZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NoYXJpdGFibGVGb3VuZGF0aW9ucywgc2V0Q2hhcml0YWJsZUZvdW5kYXRpb25zXSA9IHVzZVN0YXRlKClcbiAgICB1c2VBdXRoKHtcbiAgICAgICAgbWlkZGxld2FyZTogJ2F1dGgnLFxuICAgICAgICByb2xlOiAnQWRtaW4nLFxuICAgIH0pXG5cbiAgICBjb25zdCBnZXRDaGFyaXRpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGF4aW9zXG4gICAgICAgICAgICAuZ2V0KCdhZG1pbi9jaGFyaXRhYmxlRm91bmRhdGlvbicpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHNldENoYXJpdGFibGVGb3VuZGF0aW9ucyhyZXMuZGF0YS5kYXRhLmNoYXJpdGFibGVGb3VuZGF0aW9ucylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRDaGFyaXRpZXMoKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCB3LWZ1bGwgZ2FwLTVcIj5cbiAgICAgICAgICAgICAgICB7Y2hhcml0YWJsZUZvdW5kYXRpb25zPy5tYXAoY2hhcml0YWJsZUZvdW5kYXRpb24gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCBjYXJkIGJnLWJhc2UtMTAwIGltYWdlLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2FwaS5sb3JlbS5zcGFjZS9pbWFnZS9ob3VzZT93PTQwMCZoPTIyNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNoYXJpdGllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhcml0YWJsZUZvdW5kYXRpb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImgtMjAgb3ZlcmZsb3ctaGlkZGVuIG92ZXJmbG93LWVsbGlwc2lzIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhcml0YWJsZUZvdW5kYXRpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1lbmQgY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IE1vcmUgLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcml0aWVzXG5cbkNoYXJpdGllcy5sYXlvdXQgPSBBZG1pblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBdXRoIiwiYXhpb3MiLCJBZG1pbiIsIkNoYXJpdGllcyIsImNoYXJpdGFibGVGb3VuZGF0aW9ucyIsInNldENoYXJpdGFibGVGb3VuZGF0aW9ucyIsIm1pZGRsZXdhcmUiLCJyb2xlIiwiZ2V0Q2hhcml0aWVzIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImNoYXJpdGFibGVGb3VuZGF0aW9uIiwiZmlndXJlIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwibGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/admin/charities.js\n");

/***/ })

});