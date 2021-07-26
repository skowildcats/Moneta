/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.getElementById(\"canvas\");\n  canvas.height = window.innerHeight;\n  canvas.width = window.innerWidth;\n  var canvasCtx = canvas.getContext(\"2d\");\n  canvasCtx.fillStyle = 'black';\n  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);\n  var start = document.getElementById(\"start\");\n  var initial = document.getElementById(\"initial\");\n\n  start.onclick = function () {\n    initial.style.webkitAnimation = \"disappear 2s\";\n    setTimeout(function () {\n      initial.style.display = \"none\";\n    }, 2000);\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25ldGEvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiY2FudmFzQ3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3RhcnQiLCJpbml0aWFsIiwib25jbGljayIsInN0eWxlIiwid2Via2l0QW5pbWF0aW9uIiwic2V0VGltZW91dCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxNQUFQLEdBQWdCQyxNQUFNLENBQUNDLFdBQXZCO0FBQ0FKLEVBQUFBLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlRixNQUFNLENBQUNHLFVBQXRCO0FBQ0EsTUFBSUMsU0FBUyxHQUFHUCxNQUFNLENBQUNRLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFFQUQsRUFBQUEsU0FBUyxDQUFDRSxTQUFWLEdBQXNCLE9BQXRCO0FBQ0FGLEVBQUFBLFNBQVMsQ0FBQ0csUUFBVixDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QlYsTUFBTSxDQUFDSyxLQUFoQyxFQUF1Q0wsTUFBTSxDQUFDRSxNQUE5QztBQUNBLE1BQUlTLEtBQUssR0FBR2IsUUFBUSxDQUFDRyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxNQUFJVyxPQUFPLEdBQUdkLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFkOztBQUVBVSxFQUFBQSxLQUFLLENBQUNFLE9BQU4sR0FBZ0IsWUFBVztBQUN6QkQsSUFBQUEsT0FBTyxDQUFDRSxLQUFSLENBQWNDLGVBQWQsR0FBZ0MsY0FBaEM7QUFDQUMsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZkosTUFBQUEsT0FBTyxDQUFDRSxLQUFSLENBQWNHLE9BQWQsR0FBd0IsTUFBeEI7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsR0FMRDtBQU1ELENBakJEIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgbGV0IGNhbnZhc0N0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY2FudmFzQ3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gIGNhbnZhc0N0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIilcbiAgbGV0IGluaXRpYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWxcIilcblxuICBzdGFydC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaW5pdGlhbC5zdHlsZS53ZWJraXRBbmltYXRpb24gPSBcImRpc2FwcGVhciAyc1wiXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpbml0aWFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH0sIDIwMDApO1xuICB9XG59KSJdLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25ldGEvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSIsImZpbGUiOiIuL3NyYy9pbmRleC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;