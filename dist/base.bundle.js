/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/Meat-skewer.png":
/*!*********************************!*\
  !*** ./src/img/Meat-skewer.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c82e10c2645a399d8cae.png";

/***/ }),

/***/ "./src/img/Prime-meat-and-seafood-fry.png":
/*!************************************************!*\
  !*** ./src/img/Prime-meat-and-seafood-fry.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "413ece93d4356871c64c.png";

/***/ }),

/***/ "./src/img/Prime-poultry-curry.png":
/*!*****************************************!*\
  !*** ./src/img/Prime-poultry-curry.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48cdd4f7046705b6672a.png";

/***/ }),

/***/ "./src/img/link.png":
/*!**************************!*\
  !*** ./src/img/link.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06453b60696cc5657944.png";

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildBaseOn": () => (/* binding */ buildBaseOn),
/* harmony export */   "createHomeOn": () => (/* binding */ createHomeOn),
/* harmony export */   "createMenuOn": () => (/* binding */ createMenuOn),
/* harmony export */   "createContactOn": () => (/* binding */ createContactOn)
/* harmony export */ });
/* harmony import */ var _img_link_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/link.png */ "./src/img/link.png");
/* harmony import */ var _img_Meat_skewer_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/Meat-skewer.png */ "./src/img/Meat-skewer.png");
/* harmony import */ var _img_Prime_meat_and_seafood_fry_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/Prime-meat-and-seafood-fry.png */ "./src/img/Prime-meat-and-seafood-fry.png");
/* harmony import */ var _img_Prime_poultry_curry_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/Prime-poultry-curry.png */ "./src/img/Prime-poultry-curry.png");





const buildBaseOn = (parent) => {
    const headline = document.createElement('h1');
    const headImg = document.createElement('img');
    headline.textContent = 'Link restaurant';
    headImg.src='/src/img/link.png';
    parent.appendChild(headline);
    parent.appendChild(headImg);
}

const createHomeOn = (parent) => {
    const headline = document.createElement('h1');
    const text = document.createElement('div');
    const homePic = new Image();
    headline.textContent = 'LINK RESTAURANT';
    homePic.src = _img_link_png__WEBPACK_IMPORTED_MODULE_0__;
    text.textContent = 'Link Restaurant offers the best food in the area. You can experience all the dishes you can find on Hilaru Continent. Have a good meal!';
    parent.appendChild(headline);
    parent.appendChild(text);
    parent.appendChild(homePic);
}

const createMenuBlock = (dish, imgSrc) => {
    const img = document.createElement('img');
    const dishName = document.createElement('div');
    const block = document.createElement('div');
    block.classList.add('menu-block');
    img.src = `${imgSrc}`;
    dishName.textContent = `${dish}`;
    block.appendChild(img);
    block.appendChild(dishName);
    return block;
}

const createMenuOn = (parent) => {
    const menu = document.createElement('div');
    const block1 = createMenuBlock('Meat Skewer', _img_Meat_skewer_png__WEBPACK_IMPORTED_MODULE_1__);
    const block2 = createMenuBlock('Prime Poultry Curry', _img_Prime_poultry_curry_png__WEBPACK_IMPORTED_MODULE_3__);
    const block3 = createMenuBlock('Prime Meat and Seafood Fry', _img_Prime_meat_and_seafood_fry_png__WEBPACK_IMPORTED_MODULE_2__);

    menu.textContent = 'MENU';
    parent.appendChild(menu);
    parent.appendChild(block1);
    parent.appendChild(block2);
    parent.appendChild(block3);
}

const createContactBlock = (name, role, tel, email) => {
    const block = document.createElement('div');
    const nameInfo = document.createElement('div');
    const roleInfo = document.createElement('div');
    const telInfo = document.createElement('div');
    const emailInfo = document.createElement('div');
    block.classList.add('contact-block');
    nameInfo.classList.add('name-info');
    roleInfo.classList.add('info');
    telInfo.classList.add('info');
    emailInfo.classList.add('info');
    nameInfo.textContent = `${name}`;
    roleInfo.textContent = `${role}`;
    telInfo.textContent = `${tel}`;
    emailInfo.textContent = `${email}`;
    block.appendChild(nameInfo);
    block.appendChild(roleInfo);
    block.appendChild(telInfo);
    block.appendChild(emailInfo);

    return block;
}

const createContactOn = (parent) => {
    const headline = document.createElement('div');
    const block1 = createContactBlock('Peter', 'Chef', '555-555-5554', 'totallyRealEmail@notFake.com');
    const block2 = createContactBlock('Alice', 'Manager', '555-555-5555', 'perfectlyRealEmail@notFake.com');
    const block3 = createContactBlock('Amy', 'Waiter', '555-555-5556', 'totallyRealEmail@notFake.com');
    headline.textContent = 'Contact';
    parent.appendChild(headline);
    parent.appendChild(block1);
    parent.appendChild(block2);
    parent.appendChild(block3);
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7QUFDQztBQUNlO0FBQ1A7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwQ0FBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qiw4QkFBOEIsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELGlEQUFJO0FBQ3RELDBEQUEwRCx5REFBSTtBQUM5RCxpRUFBaUUsZ0VBQUk7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLEtBQUs7QUFDbkMsOEJBQThCLEtBQUs7QUFDbkMsNkJBQTZCLElBQUk7QUFDakMsK0JBQStCLE1BQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYmFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaG9tZVBpY1NyYyBmcm9tICcuL2ltZy9saW5rLnBuZydcbmltcG9ydCBQaWMxIGZyb20gJy4vaW1nL01lYXQtc2tld2VyLnBuZydcbmltcG9ydCBQaWMyIGZyb20gJy4vaW1nL1ByaW1lLW1lYXQtYW5kLXNlYWZvb2QtZnJ5LnBuZydcbmltcG9ydCBQaWMzIGZyb20gJy4vaW1nL1ByaW1lLXBvdWx0cnktY3VycnkucG5nJ1xuXG5jb25zdCBidWlsZEJhc2VPbiA9IChwYXJlbnQpID0+IHtcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgaGVhZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0xpbmsgcmVzdGF1cmFudCc7XG4gICAgaGVhZEltZy5zcmM9Jy9zcmMvaW1nL2xpbmsucG5nJztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoZWFkSW1nKTtcbn1cblxuY29uc3QgY3JlYXRlSG9tZU9uID0gKHBhcmVudCkgPT4ge1xuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG9tZVBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0xJTksgUkVTVEFVUkFOVCc7XG4gICAgaG9tZVBpYy5zcmMgPSBob21lUGljU3JjO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSAnTGluayBSZXN0YXVyYW50IG9mZmVycyB0aGUgYmVzdCBmb29kIGluIHRoZSBhcmVhLiBZb3UgY2FuIGV4cGVyaWVuY2UgYWxsIHRoZSBkaXNoZXMgeW91IGNhbiBmaW5kIG9uIEhpbGFydSBDb250aW5lbnQuIEhhdmUgYSBnb29kIG1lYWwhJztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaG9tZVBpYyk7XG59XG5cbmNvbnN0IGNyZWF0ZU1lbnVCbG9jayA9IChkaXNoLCBpbWdTcmMpID0+IHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBkaXNoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnbWVudS1ibG9jaycpO1xuICAgIGltZy5zcmMgPSBgJHtpbWdTcmN9YDtcbiAgICBkaXNoTmFtZS50ZXh0Q29udGVudCA9IGAke2Rpc2h9YDtcbiAgICBibG9jay5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKGRpc2hOYW1lKTtcbiAgICByZXR1cm4gYmxvY2s7XG59XG5cbmNvbnN0IGNyZWF0ZU1lbnVPbiA9IChwYXJlbnQpID0+IHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYmxvY2sxID0gY3JlYXRlTWVudUJsb2NrKCdNZWF0IFNrZXdlcicsIFBpYzEpO1xuICAgIGNvbnN0IGJsb2NrMiA9IGNyZWF0ZU1lbnVCbG9jaygnUHJpbWUgUG91bHRyeSBDdXJyeScsIFBpYzMpO1xuICAgIGNvbnN0IGJsb2NrMyA9IGNyZWF0ZU1lbnVCbG9jaygnUHJpbWUgTWVhdCBhbmQgU2VhZm9vZCBGcnknLCBQaWMyKTtcblxuICAgIG1lbnUudGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChibG9jazEpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChibG9jazIpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChibG9jazMpO1xufVxuXG5jb25zdCBjcmVhdGVDb250YWN0QmxvY2sgPSAobmFtZSwgcm9sZSwgdGVsLCBlbWFpbCkgPT4ge1xuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmFtZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByb2xlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRlbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbWFpbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJsb2NrJyk7XG4gICAgbmFtZUluZm8uY2xhc3NMaXN0LmFkZCgnbmFtZS1pbmZvJyk7XG4gICAgcm9sZUluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgIHRlbEluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgIGVtYWlsSW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgbmFtZUluZm8udGV4dENvbnRlbnQgPSBgJHtuYW1lfWA7XG4gICAgcm9sZUluZm8udGV4dENvbnRlbnQgPSBgJHtyb2xlfWA7XG4gICAgdGVsSW5mby50ZXh0Q29udGVudCA9IGAke3RlbH1gO1xuICAgIGVtYWlsSW5mby50ZXh0Q29udGVudCA9IGAke2VtYWlsfWA7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQobmFtZUluZm8pO1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKHJvbGVJbmZvKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZCh0ZWxJbmZvKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChlbWFpbEluZm8pO1xuXG4gICAgcmV0dXJuIGJsb2NrO1xufVxuXG5jb25zdCBjcmVhdGVDb250YWN0T24gPSAocGFyZW50KSA9PiB7XG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBibG9jazEgPSBjcmVhdGVDb250YWN0QmxvY2soJ1BldGVyJywgJ0NoZWYnLCAnNTU1LTU1NS01NTU0JywgJ3RvdGFsbHlSZWFsRW1haWxAbm90RmFrZS5jb20nKTtcbiAgICBjb25zdCBibG9jazIgPSBjcmVhdGVDb250YWN0QmxvY2soJ0FsaWNlJywgJ01hbmFnZXInLCAnNTU1LTU1NS01NTU1JywgJ3BlcmZlY3RseVJlYWxFbWFpbEBub3RGYWtlLmNvbScpO1xuICAgIGNvbnN0IGJsb2NrMyA9IGNyZWF0ZUNvbnRhY3RCbG9jaygnQW15JywgJ1dhaXRlcicsICc1NTUtNTU1LTU1NTYnLCAndG90YWxseVJlYWxFbWFpbEBub3RGYWtlLmNvbScpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJsb2NrMSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJsb2NrMik7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJsb2NrMyk7XG59XG5cblxuZXhwb3J0IHtidWlsZEJhc2VPbiwgY3JlYXRlSG9tZU9uLCBjcmVhdGVNZW51T24sIGNyZWF0ZUNvbnRhY3RPbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9