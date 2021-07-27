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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startDemo\": function() { return /* binding */ startDemo; }\n/* harmony export */ });\n/* harmony import */ var _user_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user_info */ \"./src/scripts/user_info.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/scripts/util.js\");\n\n\nvar startDemo = function startDemo() {\n  var canvas = document.getElementById(\"canvas\");\n  canvas.height = window.innerHeight;\n  canvas.width = window.innerWidth;\n  var canvasCtx = canvas.getContext(\"2d\");\n  canvasCtx.fillStyle = 'black';\n  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);\n  var start = document.getElementById(\"start\");\n  var introduction = document.getElementById(\"introduction\");\n  var userInfo = document.getElementById(\"user-info\");\n\n  start.onclick = function () {\n    (0,_util__WEBPACK_IMPORTED_MODULE_1__.disappear)(introduction, 1.5);\n    (0,_util__WEBPACK_IMPORTED_MODULE_1__.appear)(userInfo, 3.5);\n    userInfo.style.display = \"flex\";\n    setTimeout(function () {\n      introduction.style.display = \"none\";\n    }, 1500);\n    (0,_user_info__WEBPACK_IMPORTED_MODULE_0__.receiveUser)();\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25ldGEvLi9zcmMvc2NyaXB0cy9zdGFydC5qcz9lMzVlIl0sIm5hbWVzIjpbInN0YXJ0RGVtbyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImNhbnZhc0N0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0YXJ0IiwiaW50cm9kdWN0aW9uIiwidXNlckluZm8iLCJvbmNsaWNrIiwiZGlzYXBwZWFyIiwiYXBwZWFyIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsInJlY2VpdmVVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUM3QixNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0FGLFFBQU0sQ0FBQ0csTUFBUCxHQUFnQkMsTUFBTSxDQUFDQyxXQUF2QjtBQUNBTCxRQUFNLENBQUNNLEtBQVAsR0FBZUYsTUFBTSxDQUFDRyxVQUF0QjtBQUNBLE1BQUlDLFNBQVMsR0FBR1IsTUFBTSxDQUFDUyxVQUFQLENBQWtCLElBQWxCLENBQWhCO0FBRUFELFdBQVMsQ0FBQ0UsU0FBVixHQUFzQixPQUF0QjtBQUNBRixXQUFTLENBQUNHLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUJYLE1BQU0sQ0FBQ00sS0FBaEMsRUFBdUNOLE1BQU0sQ0FBQ0csTUFBOUM7QUFHQSxNQUFJUyxLQUFLLEdBQUdYLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBQ0EsTUFBSVcsWUFBWSxHQUFHWixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBbkI7QUFDQSxNQUFJWSxRQUFRLEdBQUdiLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFmOztBQUVBVSxPQUFLLENBQUNHLE9BQU4sR0FBZ0IsWUFBVztBQUN6QkMsb0RBQVMsQ0FBQ0gsWUFBRCxFQUFlLEdBQWYsQ0FBVDtBQUNBSSxpREFBTSxDQUFDSCxRQUFELEVBQVcsR0FBWCxDQUFOO0FBRUFBLFlBQVEsQ0FBQ0ksS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE1BQXpCO0FBQ0FDLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZQLGtCQUFZLENBQUNLLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdBRSwyREFBVztBQUNaLEdBVEQ7QUFXRCxDQXpCTSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL3N0YXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVjZWl2ZVVzZXIgfSBmcm9tIFwiLi91c2VyX2luZm9cIjtcbmltcG9ydCB7IGFwcGVhciwgZGlzYXBwZWFyIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgY29uc3Qgc3RhcnREZW1vID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICBsZXQgY2FudmFzQ3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBjYW52YXNDdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgY2FudmFzQ3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuXG4gIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIilcbiAgbGV0IGludHJvZHVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW50cm9kdWN0aW9uXCIpXG4gIGxldCB1c2VySW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1pbmZvXCIpXG5cbiAgc3RhcnQub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGRpc2FwcGVhcihpbnRyb2R1Y3Rpb24sIDEuNSlcbiAgICBhcHBlYXIodXNlckluZm8sIDMuNSlcbiAgICBcbiAgICB1c2VySW5mby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGludHJvZHVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9LCAxNTAwKTtcbiAgICByZWNlaXZlVXNlcigpXG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/start.js\n");

/***/ }),

/***/ "./src/scripts/user_info.js":
/*!**********************************!*\
  !*** ./src/scripts/user_info.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"receiveUser\": function() { return /* binding */ receiveUser; }\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/scripts/util.js\");\n\nvar receiveUser = function receiveUser() {\n  var userInfo = document.getElementById(\"user-info\");\n  var submit = document.getElementById(\"submit-info\");\n  var infoHeader = document.getElementById(\"info-header\");\n\n  userInfo.onsubmit = function (e) {\n    e.preventDefault();\n    userInfo.style.webkitAnimation = \"move-left 1.5s\";\n    userInfo.style.webkitAnimationTimingFunction = \"ease-in-out\";\n    (0,_util__WEBPACK_IMPORTED_MODULE_0__.disappear)(submit, 1.5);\n    (0,_util__WEBPACK_IMPORTED_MODULE_0__.disappear)(infoHeader, 1.5);\n    setTimeout(function () {\n      userInfo.style.transform = \"translate(-250%, -50%)\";\n      userInfo.style.width = \"175px\";\n      submit.style.display = \"none\";\n      infoHeader.style.display = \"none\";\n    }, 1500);\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25ldGEvLi9zcmMvc2NyaXB0cy91c2VyX2luZm8uanM/NjRmOSJdLCJuYW1lcyI6WyJyZWNlaXZlVXNlciIsInVzZXJJbmZvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN1Ym1pdCIsImluZm9IZWFkZXIiLCJvbnN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwid2Via2l0QW5pbWF0aW9uIiwid2Via2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJkaXNhcHBlYXIiLCJzZXRUaW1lb3V0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUMvQixNQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFmO0FBQ0EsTUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBYjtBQUNBLE1BQUlFLFVBQVUsR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWpCOztBQUdBRixVQUFRLENBQUNLLFFBQVQsR0FBb0IsVUFBU0MsQ0FBVCxFQUFZO0FBQzlCQSxLQUFDLENBQUNDLGNBQUY7QUFDQVAsWUFBUSxDQUFDUSxLQUFULENBQWVDLGVBQWYsR0FBaUMsZ0JBQWpDO0FBQ0FULFlBQVEsQ0FBQ1EsS0FBVCxDQUFlRSw2QkFBZixHQUErQyxhQUEvQztBQUNBQyxvREFBUyxDQUFDUixNQUFELEVBQVMsR0FBVCxDQUFUO0FBQ0FRLG9EQUFTLENBQUNQLFVBQUQsRUFBYSxHQUFiLENBQVQ7QUFFQVEsY0FBVSxDQUFDLFlBQU07QUFDZlosY0FBUSxDQUFDUSxLQUFULENBQWVLLFNBQWYsR0FBMkIsd0JBQTNCO0FBQ0FiLGNBQVEsQ0FBQ1EsS0FBVCxDQUFlTSxLQUFmLEdBQXVCLE9BQXZCO0FBQ0FYLFlBQU0sQ0FBQ0ssS0FBUCxDQUFhTyxPQUFiLEdBQXVCLE1BQXZCO0FBQ0FYLGdCQUFVLENBQUNJLEtBQVgsQ0FBaUJPLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0QsS0FMUyxFQUtQLElBTE8sQ0FBVjtBQU1ELEdBYkQ7QUFjRCxDQXBCTSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL3VzZXJfaW5mby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGVhciwgZGlzYXBwZWFyIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgY29uc3QgcmVjZWl2ZVVzZXIgPSAoKSA9PiB7XG4gIGxldCB1c2VySW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1pbmZvXCIpXG4gIGxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1pbmZvXCIpXG4gIGxldCBpbmZvSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvLWhlYWRlclwiKVxuXG5cbiAgdXNlckluZm8ub25zdWJtaXQgPSBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXNlckluZm8uc3R5bGUud2Via2l0QW5pbWF0aW9uID0gXCJtb3ZlLWxlZnQgMS41c1wiXG4gICAgdXNlckluZm8uc3R5bGUud2Via2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSBcImVhc2UtaW4tb3V0XCJcbiAgICBkaXNhcHBlYXIoc3VibWl0LCAxLjUpXG4gICAgZGlzYXBwZWFyKGluZm9IZWFkZXIsIDEuNSlcbiAgICBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHVzZXJJbmZvLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC0yNTAlLCAtNTAlKVwiXG4gICAgICB1c2VySW5mby5zdHlsZS53aWR0aCA9IFwiMTc1cHhcIlxuICAgICAgc3VibWl0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgaW5mb0hlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9LCAxNTAwKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/user_info.js\n");

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appear\": function() { return /* binding */ appear; },\n/* harmony export */   \"disappear\": function() { return /* binding */ disappear; }\n/* harmony export */ });\nvar appear = function appear(ele, time) {\n  ele.style.webkitAnimation = \"appear \".concat(time, \"s\");\n  ele.style.webkitAnimationTimingFunction = \"ease-in\";\n};\nvar disappear = function disappear(ele, time) {\n  ele.style.webkitAnimation = \"disappear \".concat(time, \"s\");\n  ele.style.webkitAnimationTimingFunction = \"ease-out\";\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nb25ldGEvLi9zcmMvc2NyaXB0cy91dGlsLmpzPzY5NGIiXSwibmFtZXMiOlsiYXBwZWFyIiwiZWxlIiwidGltZSIsInN0eWxlIiwid2Via2l0QW5pbWF0aW9uIiwid2Via2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJkaXNhcHBlYXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDbkNELEtBQUcsQ0FBQ0UsS0FBSixDQUFVQyxlQUFWLG9CQUFzQ0YsSUFBdEM7QUFDQUQsS0FBRyxDQUFDRSxLQUFKLENBQVVFLDZCQUFWLEdBQTBDLFNBQTFDO0FBQ0QsQ0FITTtBQUtBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNMLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ3RDRCxLQUFHLENBQUNFLEtBQUosQ0FBVUMsZUFBVix1QkFBeUNGLElBQXpDO0FBQ0FELEtBQUcsQ0FBQ0UsS0FBSixDQUFVRSw2QkFBVixHQUEwQyxVQUExQztBQUNELENBSE0iLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFwcGVhciA9IChlbGUsIHRpbWUpID0+IHtcbiAgZWxlLnN0eWxlLndlYmtpdEFuaW1hdGlvbiA9IGBhcHBlYXIgJHt0aW1lfXNgXG4gIGVsZS5zdHlsZS53ZWJraXRBbmltYXRpb25UaW1pbmdGdW5jdGlvbiA9IFwiZWFzZS1pblwiXG59XG5cbmV4cG9ydCBjb25zdCBkaXNhcHBlYXIgPSAoZWxlLCB0aW1lKSA9PiB7XG4gIGVsZS5zdHlsZS53ZWJraXRBbmltYXRpb24gPSBgZGlzYXBwZWFyICR7dGltZX1zYFxuICBlbGUuc3R5bGUud2Via2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSBcImVhc2Utb3V0XCJcbn1cblxuICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/util.js\n");

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