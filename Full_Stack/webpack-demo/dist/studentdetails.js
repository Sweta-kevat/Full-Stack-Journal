/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./files/student.js"
/*!**************************!*\
  !*** ./files/student.js ***!
  \**************************/
(module) {

eval("{const student = {\r\n    name: \"sk\",\r\n    age: \"18\",\r\n    rollno: \"NA\"\r\n};\r\n\r\nmodule.exports = student;\n\n//# sourceURL=webpack://webpack-demo/./files/student.js?\n}");

/***/ },

/***/ "./files/studentdetails.js"
/*!*********************************!*\
  !*** ./files/studentdetails.js ***!
  \*********************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{const student = __webpack_require__(/*! ./student */ \"./files/student.js\");\r\n\r\nconsole.log(\"Items saved\");\r\nconsole.log(\"getting students details\");\r\nconsole.log(student);\n\n//# sourceURL=webpack://webpack-demo/./files/studentdetails.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./files/studentdetails.js");
/******/ 	
/******/ })()
;