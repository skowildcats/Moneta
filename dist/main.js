/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/start */ \"./src/scripts/start.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_scripts_start__WEBPACK_IMPORTED_MODULE_0__.startDemo)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25ldGEvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydERlbW8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsREMsMkRBQVM7QUFDVixDQUZEIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzdGFydERlbW99IGZyb20gJy4vc2NyaXB0cy9zdGFydCdcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHsgXG4gIHN0YXJ0RGVtbygpIFxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/start.js":
/*!******************************!*\
  !*** ./src/scripts/start.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startDemo\": function() { return /* binding */ startDemo; }\n/* harmony export */ });\n/* harmony import */ var _user_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user_info */ \"./src/scripts/user_info.js\");\n\nvar startDemo = function startDemo() {\n  var canvas = document.getElementById(\"canvas\");\n  canvas.height = window.innerHeight;\n  canvas.width = window.innerWidth;\n  var canvasCtx = canvas.getContext(\"2d\");\n  canvasCtx.fillStyle = 'black';\n  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);\n  var start = document.getElementById(\"start\");\n  var introduction = document.getElementById(\"introduction\");\n  var userInfo = document.getElementById(\"user-info\");\n\n  start.onclick = function () {\n    introduction.style.webkitAnimation = \"disappear 1.5s\";\n    introduction.style.webkitAnimationTimingFunction = \"ease-out\";\n    userInfo.style.webkitAnimation = \"appear 3.5s\";\n    userInfo.style.webkitAnimationTimingFunction = \"ease-in\";\n    userInfo.style.display = \"flex\";\n    setTimeout(function () {\n      introduction.style.display = \"none\";\n    }, 1500);\n    (0,_user_info__WEBPACK_IMPORTED_MODULE_0__.receiveUser)();\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25ldGEvLi9zcmMvc2NyaXB0cy9zdGFydC5qcz9lMzVlIl0sIm5hbWVzIjpbInN0YXJ0RGVtbyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImNhbnZhc0N0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0YXJ0IiwiaW50cm9kdWN0aW9uIiwidXNlckluZm8iLCJvbmNsaWNrIiwic3R5bGUiLCJ3ZWJraXRBbmltYXRpb24iLCJ3ZWJraXRBbmltYXRpb25UaW1pbmdGdW5jdGlvbiIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwicmVjZWl2ZVVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQUYsUUFBTSxDQUFDRyxNQUFQLEdBQWdCQyxNQUFNLENBQUNDLFdBQXZCO0FBQ0FMLFFBQU0sQ0FBQ00sS0FBUCxHQUFlRixNQUFNLENBQUNHLFVBQXRCO0FBQ0EsTUFBSUMsU0FBUyxHQUFHUixNQUFNLENBQUNTLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFFQUQsV0FBUyxDQUFDRSxTQUFWLEdBQXNCLE9BQXRCO0FBQ0FGLFdBQVMsQ0FBQ0csUUFBVixDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QlgsTUFBTSxDQUFDTSxLQUFoQyxFQUF1Q04sTUFBTSxDQUFDRyxNQUE5QztBQUdBLE1BQUlTLEtBQUssR0FBR1gsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxNQUFJVyxZQUFZLEdBQUdaLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFuQjtBQUNBLE1BQUlZLFFBQVEsR0FBR2IsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWY7O0FBRUFVLE9BQUssQ0FBQ0csT0FBTixHQUFnQixZQUFXO0FBQ3pCRixnQkFBWSxDQUFDRyxLQUFiLENBQW1CQyxlQUFuQixHQUFxQyxnQkFBckM7QUFDQUosZ0JBQVksQ0FBQ0csS0FBYixDQUFtQkUsNkJBQW5CLEdBQW1ELFVBQW5EO0FBRUFKLFlBQVEsQ0FBQ0UsS0FBVCxDQUFlQyxlQUFmLEdBQWlDLGFBQWpDO0FBQ0FILFlBQVEsQ0FBQ0UsS0FBVCxDQUFlRSw2QkFBZixHQUErQyxTQUEvQztBQUNBSixZQUFRLENBQUNFLEtBQVQsQ0FBZUcsT0FBZixHQUF5QixNQUF6QjtBQUNBQyxjQUFVLENBQUMsWUFBTTtBQUNmUCxrQkFBWSxDQUFDRyxLQUFiLENBQW1CRyxPQUFuQixHQUE2QixNQUE3QjtBQUNELEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHQUUsMkRBQVc7QUFDWixHQVhEO0FBYUQsQ0EzQk0iLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zdGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlY2VpdmVVc2VyIH0gZnJvbSBcIi4vdXNlcl9pbmZvXCI7XG5cbmV4cG9ydCBjb25zdCBzdGFydERlbW8gPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gIGxldCBjYW52YXNDdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIGNhbnZhc0N0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICBjYW52YXNDdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuXG5cbiAgbGV0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKVxuICBsZXQgaW50cm9kdWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnRyb2R1Y3Rpb25cIilcbiAgbGV0IHVzZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWluZm9cIilcblxuICBzdGFydC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaW50cm9kdWN0aW9uLnN0eWxlLndlYmtpdEFuaW1hdGlvbiA9IFwiZGlzYXBwZWFyIDEuNXNcIlxuICAgIGludHJvZHVjdGlvbi5zdHlsZS53ZWJraXRBbmltYXRpb25UaW1pbmdGdW5jdGlvbiA9IFwiZWFzZS1vdXRcIlxuXG4gICAgdXNlckluZm8uc3R5bGUud2Via2l0QW5pbWF0aW9uID0gXCJhcHBlYXIgMy41c1wiXG4gICAgdXNlckluZm8uc3R5bGUud2Via2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSBcImVhc2UtaW5cIlxuICAgIHVzZXJJbmZvLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaW50cm9kdWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH0sIDE1MDApO1xuICAgIHJlY2VpdmVVc2VyKClcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/start.js\n");

/***/ }),

/***/ "./src/scripts/user_info.js":
/*!**********************************!*\
  !*** ./src/scripts/user_info.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"receiveUser\": function() { return /* binding */ receiveUser; }\n/* harmony export */ });\nvar receiveUser = function receiveUser() {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25ldGEvLi9zcmMvc2NyaXB0cy91c2VyX2luZm8uanM/NjRmOSJdLCJuYW1lcyI6WyJyZWNlaXZlVXNlciJdLCJtYXBwaW5ncyI6Ijs7OztBQUFPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU0sQ0FFaEMsQ0FGTSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL3VzZXJfaW5mby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZWNlaXZlVXNlciA9ICgpID0+IHtcbiAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/user_info.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25ldGEvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSIsImZpbGUiOiIuL3NyYy9pbmRleC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;