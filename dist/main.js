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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startDemo\": function() { return /* binding */ startDemo; }\n/* harmony export */ });\nvar startDemo = function startDemo() {\n  var canvas = document.getElementById(\"canvas\");\n  canvas.height = window.innerHeight;\n  canvas.width = window.innerWidth;\n  var canvasCtx = canvas.getContext(\"2d\");\n  canvasCtx.fillStyle = 'black';\n  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);\n  var start = document.getElementById(\"start\");\n  var introduction = document.getElementById(\"introduction\");\n\n  start.onclick = function () {\n    introduction.style.webkitAnimation = \"disappear 2s\";\n    setTimeout(function () {\n      introduction.style.display = \"none\";\n    }, 2000);\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25ldGEvLi9zcmMvc2NyaXB0cy9zdGFydC5qcz9lMzVlIl0sIm5hbWVzIjpbInN0YXJ0RGVtbyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImNhbnZhc0N0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0YXJ0IiwiaW50cm9kdWN0aW9uIiwib25jbGljayIsInN0eWxlIiwid2Via2l0QW5pbWF0aW9uIiwic2V0VGltZW91dCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQUYsUUFBTSxDQUFDRyxNQUFQLEdBQWdCQyxNQUFNLENBQUNDLFdBQXZCO0FBQ0FMLFFBQU0sQ0FBQ00sS0FBUCxHQUFlRixNQUFNLENBQUNHLFVBQXRCO0FBQ0EsTUFBSUMsU0FBUyxHQUFHUixNQUFNLENBQUNTLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFFQUQsV0FBUyxDQUFDRSxTQUFWLEdBQXNCLE9BQXRCO0FBQ0FGLFdBQVMsQ0FBQ0csUUFBVixDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QlgsTUFBTSxDQUFDTSxLQUFoQyxFQUF1Q04sTUFBTSxDQUFDRyxNQUE5QztBQUNBLE1BQUlTLEtBQUssR0FBR1gsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxNQUFJVyxZQUFZLEdBQUdaLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFuQjs7QUFFQVUsT0FBSyxDQUFDRSxPQUFOLEdBQWdCLFlBQVc7QUFDekJELGdCQUFZLENBQUNFLEtBQWIsQ0FBbUJDLGVBQW5CLEdBQXFDLGNBQXJDO0FBQ0FDLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZKLGtCQUFZLENBQUNFLEtBQWIsQ0FBbUJHLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBTEQ7QUFNRCxDQWpCTSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL3N0YXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHN0YXJ0RGVtbyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgbGV0IGNhbnZhc0N0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY2FudmFzQ3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gIGNhbnZhc0N0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIilcbiAgbGV0IGludHJvZHVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50cm9kdWN0aW9uXCIpXG5cbiAgc3RhcnQub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGludHJvZHVjdGlvbi5zdHlsZS53ZWJraXRBbmltYXRpb24gPSBcImRpc2FwcGVhciAyc1wiXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpbnRyb2R1Y3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfSwgMjAwMCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/start.js\n");

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