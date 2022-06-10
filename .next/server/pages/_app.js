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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/axios.js":
/*!**************************!*\
  !*** ./src/lib/axios.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TOKEN =  false ? 0 : null;\nconst axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: `${\"http://localhost:8000\"}/api/`,\n    headers: {\n        \"Content-Type\": \"application/json\",\n        Authorization: `bearer ${TOKEN}`\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2F4aW9zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUV6QixNQUFNQyxLQUFLLEdBQ1AsTUFBNkIsR0FBR0MsQ0FBNkIsR0FBRyxJQUFJO0FBRXhFLE1BQU1FLEtBQUssR0FBR0osbURBQVksQ0FBQztJQUN2Qk0sT0FBTyxFQUFFLENBQUMsRUFBRUMsdUJBQW1DLENBQUMsS0FBSyxDQUFDO0lBQ3RERyxPQUFPLEVBQUU7UUFDTCxjQUFjLEVBQUUsa0JBQWtCO1FBQ2xDQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVWLEtBQUssQ0FBQyxDQUFDO0tBQ25DO0NBRUosQ0FBQztBQUVGLGlFQUFlRyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRG9uYXRpb24vLi9zcmMvbGliL2F4aW9zLmpzP2Y3OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBUT0tFTiA9XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6IG51bGxcblxuY29uc3QgYXhpb3MgPSBBeGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMfS9hcGkvYCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBiZWFyZXIgJHtUT0tFTn1gLFxuICAgIH0sXG4gICAgLy8gd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgYXhpb3NcbiJdLCJuYW1lcyI6WyJBeGlvcyIsIlRPS0VOIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/axios.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styles_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/tailwind.css */ \"./src/styles/tailwind.css\");\n/* harmony import */ var styles_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/auth-context */ \"./src/store/auth-context.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/nprogress.css */ \"./src/styles/nprogress.css\");\n/* harmony import */ var styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/axios */ \"./src/lib/axios.js\");\n\n\n\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeStart\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_7___default().start()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_7___default().done()\n);\nnext_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeError\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_7___default().done()\n);\nnprogress__WEBPACK_IMPORTED_MODULE_7___default().configure({\n    showSpinner: false\n});\nconst fetcher = async (url)=>await _lib_axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(url).then((res)=>res.data\n    )\n;\nconst App = ({ Component , pageProps  })=>{\n    const Layout = Component.layout || (({ children  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: children\n        }, void 0, false)\n    );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_8__.SWRConfig, {\n            value: {\n                refreshInterval: 3000,\n                fetcher\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store_auth_context__WEBPACK_IMPORTED_MODULE_4__.AuthContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Front_end\\\\Donation_front\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 32,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Front_end\\\\Donation_front\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 31,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Front_end\\\\Donation_front\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Front_end\\\\Donation_front\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFDcUI7QUFDMUI7QUFFOEI7QUFDMUI7QUFDSDtBQUNJO0FBQ0Y7QUFDQTtBQUUvQkMsNERBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBTUMsc0RBQWUsRUFBRTtBQUFBLENBQUM7QUFDN0RELDREQUFnQixDQUFDLHFCQUFxQixFQUFFLElBQU1DLHFEQUFjLEVBQUU7QUFBQSxDQUFDO0FBQy9ERCw0REFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFNQyxxREFBYyxFQUFFO0FBQUEsQ0FBQztBQUU1REEsMERBQW1CLENBQUM7SUFBRVEsV0FBVyxFQUFFLEtBQUs7Q0FBRSxDQUFDO0FBRTNDLE1BQU1DLE9BQU8sR0FBRyxPQUFNQyxHQUFHLEdBQUksTUFBTVIsc0RBQVMsQ0FBQ1EsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJQSxHQUFHLENBQUNDLElBQUk7SUFBQSxDQUFDO0FBQUE7QUFFdkUsTUFBTUMsR0FBRyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsR0FBSztJQUN0QyxNQUFNQyxNQUFNLEdBQUdGLFNBQVMsQ0FBQ0csTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsaUJBQUs7c0JBQUdBLFFBQVE7eUJBQUk7SUFBQSxDQUFDO0lBRXRFLHFCQUNJO2tCQUNJLDRFQUFDbkIsMENBQVM7WUFDTm9CLEtBQUssRUFBRTtnQkFDSEMsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCYixPQUFPO2FBQ1Y7c0JBQ0QsNEVBQUNYLG9FQUFtQjswQkFDaEIsNEVBQUNvQixNQUFNOzhCQUNILDRFQUFDRixTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7O2lDQUFJOzs7Ozs2QkFDdkI7Ozs7O3lCQUNTOzs7OztxQkFDZDtxQkFDYixDQUNOO0NBQ0o7QUFFRCxpRUFBZUYsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL0RvbmF0aW9uLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcydcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJ1xuaW1wb3J0ICdzdHlsZXMvdGFpbHdpbmQuY3NzJ1xuXG5pbXBvcnQgeyBBdXRoQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnQC9zdG9yZS9hdXRoLWNvbnRleHQnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0ICdzdHlsZXMvbnByb2dyZXNzLmNzcydcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IHsgU1dSQ29uZmlnIH0gZnJvbSAnc3dyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ0AvbGliL2F4aW9zJ1xuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuXG5OUHJvZ3Jlc3MuY29uZmlndXJlKHsgc2hvd1NwaW5uZXI6IGZhbHNlIH0pXG5cbmNvbnN0IGZldGNoZXIgPSBhc3luYyB1cmwgPT4gYXdhaXQgYXhpb3MuZ2V0KHVybCkudGhlbihyZXMgPT4gcmVzLmRhdGEpXG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgICBjb25zdCBMYXlvdXQgPSBDb21wb25lbnQubGF5b3V0IHx8ICgoeyBjaGlsZHJlbiB9KSA9PiA8PntjaGlsZHJlbn08Lz4pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNXUkNvbmZpZ1xuICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hJbnRlcnZhbDogMzAwMCxcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hlcixcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8QXV0aENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgPC9TV1JDb25maWc+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsiQXV0aENvbnRleHRQcm92aWRlciIsIlJvdXRlciIsIk5Qcm9ncmVzcyIsIlNXUkNvbmZpZyIsImF4aW9zIiwiZXZlbnRzIiwib24iLCJzdGFydCIsImRvbmUiLCJjb25maWd1cmUiLCJzaG93U3Bpbm5lciIsImZldGNoZXIiLCJ1cmwiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkxheW91dCIsImxheW91dCIsImNoaWxkcmVuIiwidmFsdWUiLCJyZWZyZXNoSW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/store/auth-context.js":
/*!***********************************!*\
  !*** ./src/store/auth-context.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet logoutTimer;\nconst AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({\n    token: \"\",\n    isLoggedIn: false,\n    login: (token)=>{},\n    logout: ()=>{}\n});\nconst AuthContextProvider = (props)=>{\n    const { 0: token1 , 1: setToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setToken(localStorage.getItem(\"token\"));\n    }, []);\n    const userIsLoggedIn = !!token1;\n    const logoutHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setToken(null);\n        localStorage.removeItem(\"token\");\n    }, []);\n    const loginHandler = (token)=>{\n        console.log(token);\n        setToken(token);\n        localStorage.setItem(\"token\", token);\n    };\n    const contextValue = {\n        token: token1,\n        isLoggedIn: userIsLoggedIn,\n        login: loginHandler,\n        logout: logoutHandler\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: contextValue,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"D:\\\\WEB\\\\My Project\\\\Girl Project\\\\Front_end\\\\Donation_front\\\\src\\\\store\\\\auth-context.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYXV0aC1jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQStEO0FBRS9ELElBQUlJLFdBQVc7QUFFZixNQUFNQyxXQUFXLGlCQUFHTCwwREFBbUIsQ0FBQztJQUNwQ08sS0FBSyxFQUFFLEVBQUU7SUFDVEMsVUFBVSxFQUFFLEtBQUs7SUFDakJDLEtBQUssRUFBRUYsQ0FBQUEsS0FBSyxHQUFJLEVBQUU7SUFDbEJHLE1BQU0sRUFBRSxJQUFNLEVBQUU7Q0FDbkIsQ0FBQztBQUVLLE1BQU1DLG1CQUFtQixHQUFHQyxDQUFBQSxLQUFLLEdBQUk7SUFDeEMsTUFBTSxFQVpWLEdBWVdMLE1BQUssR0FaaEIsR0FZa0JNLFFBQVEsTUFBSVosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFdENDLGdEQUFTLENBQUMsSUFBTTtRQUNaVyxRQUFRLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFDLEVBQUUsRUFBRSxDQUFDO0lBQ04sTUFBTUMsY0FBYyxHQUFHLENBQUMsQ0FBQ1QsTUFBSztJQUU5QixNQUFNVSxhQUFhLEdBQUdkLGtEQUFXLENBQUMsSUFBTTtRQUNwQ1UsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNkQyxZQUFZLENBQUNJLFVBQVUsQ0FBQyxPQUFPLENBQUM7S0FDbkMsRUFBRSxFQUFFLENBQUM7SUFFTixNQUFNQyxZQUFZLEdBQUdaLENBQUFBLEtBQUssR0FBSTtRQUMxQmEsT0FBTyxDQUFDQyxHQUFHLENBQUNkLEtBQUssQ0FBQztRQUNsQk0sUUFBUSxDQUFDTixLQUFLLENBQUM7UUFDZk8sWUFBWSxDQUFDUSxPQUFPLENBQUMsT0FBTyxFQUFFZixLQUFLLENBQUM7S0FDdkM7SUFFRCxNQUFNZ0IsWUFBWSxHQUFHO1FBQ2pCaEIsS0FBSyxFQUFFQSxNQUFLO1FBQ1pDLFVBQVUsRUFBRVEsY0FBYztRQUMxQlAsS0FBSyxFQUFFVSxZQUFZO1FBQ25CVCxNQUFNLEVBQUVPLGFBQWE7S0FDeEI7SUFFRCxxQkFDSSw4REFBQ1osV0FBVyxDQUFDbUIsUUFBUTtRQUFDQyxLQUFLLEVBQUVGLFlBQVk7a0JBQ3BDWCxLQUFLLENBQUNjLFFBQVE7Ozs7O2lCQUNJLENBQzFCO0NBQ0o7QUFFRCxpRUFBZXJCLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Eb25hdGlvbi8uL3NyYy9zdG9yZS9hdXRoLWNvbnRleHQuanM/NGNhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuXHJcbmxldCBsb2dvdXRUaW1lclxyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICAgIHRva2VuOiAnJyxcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgbG9naW46IHRva2VuID0+IHt9LFxyXG4gICAgbG9nb3V0OiAoKSA9PiB7fSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKVxyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCB1c2VySXNMb2dnZWRJbiA9ICEhdG9rZW5cclxuXHJcbiAgICBjb25zdCBsb2dvdXRIYW5kbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldFRva2VuKG51bGwpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGxvZ2luSGFuZGxlciA9IHRva2VuID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbilcclxuICAgICAgICBzZXRUb2tlbih0b2tlbilcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XHJcbiAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IHVzZXJJc0xvZ2dlZEluLFxyXG4gICAgICAgIGxvZ2luOiBsb2dpbkhhbmRsZXIsXHJcbiAgICAgICAgbG9nb3V0OiBsb2dvdXRIYW5kbGVyLFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHRcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsImxvZ291dFRpbWVyIiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidG9rZW4iLCJpc0xvZ2dlZEluIiwibG9naW4iLCJsb2dvdXQiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJzZXRUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VySXNMb2dnZWRJbiIsImxvZ291dEhhbmRsZXIiLCJyZW1vdmVJdGVtIiwibG9naW5IYW5kbGVyIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/auth-context.js\n");

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/nprogress.css":
/*!**********************************!*\
  !*** ./src/styles/nprogress.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/tailwind.css":
/*!*********************************!*\
  !*** ./src/styles/tailwind.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();