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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@portabletext/react":
/*!**************************************!*\
  !*** external "@portabletext/react" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@portabletext/react");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth-sanity":
/*!***********************************!*\
  !*** external "next-auth-sanity" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth-sanity");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ "(api)/./app/sanity.server.ts":
/*!******************************!*\
  !*** ./app/sanity.server.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sanityClientServer\": () => (/* binding */ sanityClientServer)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sanity */ \"(api)/./app/sanity.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__]);\n([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst sanityClientServer = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(_sanity__WEBPACK_IMPORTED_MODULE_1__.config);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcHAvc2FuaXR5LnNlcnZlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEM7QUFDVDtBQUUxQixNQUFNRSxxQkFBcUJGLHlEQUFZQSxDQUFDQywyQ0FBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL2FwcC9zYW5pdHkuc2VydmVyLnRzPzNiMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnbmV4dC1zYW5pdHknXHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vc2FuaXR5J1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhbml0eUNsaWVudFNlcnZlciA9IGNyZWF0ZUNsaWVudChjb25maWcpIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNvbmZpZyIsInNhbml0eUNsaWVudFNlcnZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./app/sanity.server.ts\n");

/***/ }),

/***/ "(api)/./app/sanity.tsx":
/*!************************!*\
  !*** ./app/sanity.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PortableText\": () => (/* binding */ PortableText),\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_portabletext_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_1__]);\nnext_sanity__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst config = {\n    projectId: \"1q9hn7w6\",\n    dataset: \"production\",\n    token: process.env.SANITY_WRITE_TOKEN,\n    apiVersion: \"2021-10-21\",\n    useCdn: false\n};\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.createClient)(config);\nconst urlFor = (source)=>_sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()({\n        clientConfig: config\n    }).image(source);\nconst PortableText = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_2__.PortableText, {\n        components: {},\n        ...props\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Valeria\\\\Desktop\\\\TRAVEL-APP\\\\app\\\\sanity.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcHAvc2FuaXR5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXNEO0FBQ21CO0FBQ3BCO0FBRTlDLE1BQU1JLFNBQXVCO0lBQ2hDQyxXQUFXO0lBQ1hDLFNBQVM7SUFDVEMsT0FBT0MsUUFBUUMsR0FBRyxDQUFDQyxrQkFBa0I7SUFDckNDLFlBQVk7SUFDWkMsUUFBUSxLQUFLO0FBQ2pCLEVBQUM7QUFFTSxNQUFNQyxlQUFlYix5REFBWUEsQ0FBQ0ksUUFBTztBQUV6QyxNQUFNVSxTQUFTLENBQUNDLFNBQ25CWix3REFBcUJBLENBQUM7UUFBQ2EsY0FBY1o7SUFBTSxHQUFHYSxLQUFLLENBQUNGLFFBQU87QUFDeEQsTUFBTWQsZUFBZSxDQUFDaUIsc0JBQ3pCLDhEQUFDaEIsNkRBQXFCQTtRQUFDaUIsWUFBWSxDQUFDO1FBQUksR0FBR0QsS0FBSzs7Ozs7a0JBQ25EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vYXBwL3Nhbml0eS50c3g/YmY2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NsaWVudENvbmZpZywgY3JlYXRlQ2xpZW50fSBmcm9tICduZXh0LXNhbml0eSdcclxuaW1wb3J0IHtQb3J0YWJsZVRleHQgYXMgUG9ydGFibGVUZXh0Q29tcG9uZW50fSBmcm9tICdAcG9ydGFibGV0ZXh0L3JlYWN0J1xyXG5pbXBvcnQgY3JlYXRlSW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZzogQ2xpZW50Q29uZmlnID0ge1xyXG4gICAgcHJvamVjdElkOiAnMXE5aG43dzYnLFxyXG4gICAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxyXG4gICAgdG9rZW46IHByb2Nlc3MuZW52LlNBTklUWV9XUklURV9UT0tFTixcclxuICAgIGFwaVZlcnNpb246ICcyMDIxLTEwLTIxJyxcclxuICAgIHVzZUNkbjogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhbml0eUNsaWVudCA9IGNyZWF0ZUNsaWVudChjb25maWcpXHJcblxyXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZTogYW55KSA9PlxyXG4gICAgY3JlYXRlSW1hZ2VVcmxCdWlsZGVyKHtjbGllbnRDb25maWc6IGNvbmZpZ30pLmltYWdlKHNvdXJjZSlcclxuZXhwb3J0IGNvbnN0IFBvcnRhYmxlVGV4dCA9IChwcm9wczogYW55KSA9PiAoXHJcbiAgICA8UG9ydGFibGVUZXh0Q29tcG9uZW50IGNvbXBvbmVudHM9e3t9fSB7Li4ucHJvcHN9IC8+XHJcbikiXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiUG9ydGFibGVUZXh0IiwiUG9ydGFibGVUZXh0Q29tcG9uZW50IiwiY3JlYXRlSW1hZ2VVcmxCdWlsZGVyIiwiY29uZmlnIiwicHJvamVjdElkIiwiZGF0YXNldCIsInRva2VuIiwicHJvY2VzcyIsImVudiIsIlNBTklUWV9XUklURV9UT0tFTiIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJzYW5pdHlDbGllbnQiLCJ1cmxGb3IiLCJzb3VyY2UiLCJjbGllbnRDb25maWciLCJpbWFnZSIsInByb3BzIiwiY29tcG9uZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./app/sanity.tsx\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth-sanity */ \"next-auth-sanity\");\n/* harmony import */ var next_auth_sanity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_sanity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_sanity_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/sanity.server */ \"(api)/./app/sanity.server.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_sanity_server__WEBPACK_IMPORTED_MODULE_2__]);\n_app_sanity_server__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst options = {\n    // @ts-ignore\n    providers: [\n        (0,next_auth_sanity__WEBPACK_IMPORTED_MODULE_1__.SanityCredentials)(_app_sanity_server__WEBPACK_IMPORTED_MODULE_2__.sanityClientServer)\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: \"any-secret-word\",\n    // @ts-ignore\n    adapter: (0,next_auth_sanity__WEBPACK_IMPORTED_MODULE_1__.SanityAdapter)(_app_sanity_server__WEBPACK_IMPORTED_MODULE_2__.sanityClientServer)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(options));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNjO0FBQ0w7QUFFOUQsTUFBTUksVUFBMkI7SUFDN0IsYUFBYTtJQUNiQyxXQUFXO1FBQUNILG1FQUFpQkEsQ0FBQ0Msa0VBQWtCQTtLQUFFO0lBQ2xERyxTQUFTO1FBQ0xDLFVBQVU7SUFDZDtJQUNBQyxRQUFRO0lBQ1IsYUFBYTtJQUNiQyxTQUFTUiwrREFBYUEsQ0FBQ0Usa0VBQWtCQTtBQUM3QztBQUVBLGlFQUFlSCxnREFBUUEsQ0FBQ0ksUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgeyBTYW5pdHlBZGFwdGVyLCBTYW5pdHlDcmVkZW50aWFscyB9IGZyb20gJ25leHQtYXV0aC1zYW5pdHknXHJcbmltcG9ydCB7c2FuaXR5Q2xpZW50U2VydmVyfSBmcm9tIFwiLi4vLi4vLi4vYXBwL3Nhbml0eS5zZXJ2ZXJcIjtcclxuXHJcbmNvbnN0IG9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHByb3ZpZGVyczogW1Nhbml0eUNyZWRlbnRpYWxzKHNhbml0eUNsaWVudFNlcnZlcildLFxyXG4gICAgc2Vzc2lvbjoge1xyXG4gICAgICAgIHN0cmF0ZWd5OiAnand0J1xyXG4gICAgfSxcclxuICAgIHNlY3JldDogJ2FueS1zZWNyZXQtd29yZCcsXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBhZGFwdGVyOiBTYW5pdHlBZGFwdGVyKHNhbml0eUNsaWVudFNlcnZlcilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgob3B0aW9ucykiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJTYW5pdHlBZGFwdGVyIiwiU2FuaXR5Q3JlZGVudGlhbHMiLCJzYW5pdHlDbGllbnRTZXJ2ZXIiLCJvcHRpb25zIiwicHJvdmlkZXJzIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwic2VjcmV0IiwiYWRhcHRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();