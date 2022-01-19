/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildBaseOn": () => (/* binding */ buildBaseOn),
/* harmony export */   "createHomeOn": () => (/* binding */ createHomeOn),
/* harmony export */   "createMenuOn": () => (/* binding */ createMenuOn),
/* harmony export */   "createContactOn": () => (/* binding */ createContactOn)
/* harmony export */ });
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
    headline.textContent = 'LINK RESTAURANT';
    text.textContent = 'Link Restaurant offers the best food in the area. You can experience all the dishes you can find on Hilaru Continent. Have a good meal!';
    parent.appendChild(headline);
    parent.appendChild(text);
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
    const block1 = createMenuBlock('Meat Skewer', '/src/img/Meat-skewer.png');
    const block2 = createMenuBlock('Prime Poultry Curry', '/src/img/Prime-poultry-curry.png');
    const block3 = createMenuBlock('Prime Meat and Seafood Fry', '/src/img/Prime-meat-and-seafood-fry.png');

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./src/base.js");


const content = document.getElementById('content');
(0,_base_js__WEBPACK_IMPORTED_MODULE_0__.createHomeOn)(content);
(0,_base_js__WEBPACK_IMPORTED_MODULE_0__.createMenuOn)(content);
(0,_base_js__WEBPACK_IMPORTED_MODULE_0__.createContactOn)(content);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsOEJBQThCLEtBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DLDhCQUE4QixLQUFLO0FBQ25DLDZCQUE2QixJQUFJO0FBQ2pDLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDNUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUY7O0FBRW5GO0FBQ0Esc0RBQVk7QUFDWixzREFBWTtBQUNaLHlEQUFlLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVpbGRCYXNlT24gPSAocGFyZW50KSA9PiB7XG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGhlYWRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdMaW5rIHJlc3RhdXJhbnQnO1xuICAgIGhlYWRJbWcuc3JjPScvc3JjL2ltZy9saW5rLnBuZyc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZEltZyk7XG59XG5cbmNvbnN0IGNyZWF0ZUhvbWVPbiA9IChwYXJlbnQpID0+IHtcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0xJTksgUkVTVEFVUkFOVCc7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9ICdMaW5rIFJlc3RhdXJhbnQgb2ZmZXJzIHRoZSBiZXN0IGZvb2QgaW4gdGhlIGFyZWEuIFlvdSBjYW4gZXhwZXJpZW5jZSBhbGwgdGhlIGRpc2hlcyB5b3UgY2FuIGZpbmQgb24gSGlsYXJ1IENvbnRpbmVudC4gSGF2ZSBhIGdvb2QgbWVhbCEnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRleHQpO1xufVxuXG5jb25zdCBjcmVhdGVNZW51QmxvY2sgPSAoZGlzaCwgaW1nU3JjKSA9PiB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ21lbnUtYmxvY2snKTtcbiAgICBpbWcuc3JjID0gYCR7aW1nU3JjfWA7XG4gICAgZGlzaE5hbWUudGV4dENvbnRlbnQgPSBgJHtkaXNofWA7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChkaXNoTmFtZSk7XG4gICAgcmV0dXJuIGJsb2NrO1xufVxuXG5jb25zdCBjcmVhdGVNZW51T24gPSAocGFyZW50KSA9PiB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJsb2NrMSA9IGNyZWF0ZU1lbnVCbG9jaygnTWVhdCBTa2V3ZXInLCAnL3NyYy9pbWcvTWVhdC1za2V3ZXIucG5nJyk7XG4gICAgY29uc3QgYmxvY2syID0gY3JlYXRlTWVudUJsb2NrKCdQcmltZSBQb3VsdHJ5IEN1cnJ5JywgJy9zcmMvaW1nL1ByaW1lLXBvdWx0cnktY3VycnkucG5nJyk7XG4gICAgY29uc3QgYmxvY2szID0gY3JlYXRlTWVudUJsb2NrKCdQcmltZSBNZWF0IGFuZCBTZWFmb29kIEZyeScsICcvc3JjL2ltZy9QcmltZS1tZWF0LWFuZC1zZWFmb29kLWZyeS5wbmcnKTtcblxuICAgIG1lbnUudGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChibG9jazEpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChibG9jazIpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChibG9jazMpO1xufVxuXG5jb25zdCBjcmVhdGVDb250YWN0QmxvY2sgPSAobmFtZSwgcm9sZSwgdGVsLCBlbWFpbCkgPT4ge1xuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmFtZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByb2xlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRlbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbWFpbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJsb2NrJyk7XG4gICAgbmFtZUluZm8uY2xhc3NMaXN0LmFkZCgnbmFtZS1pbmZvJyk7XG4gICAgcm9sZUluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgIHRlbEluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgIGVtYWlsSW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgbmFtZUluZm8udGV4dENvbnRlbnQgPSBgJHtuYW1lfWA7XG4gICAgcm9sZUluZm8udGV4dENvbnRlbnQgPSBgJHtyb2xlfWA7XG4gICAgdGVsSW5mby50ZXh0Q29udGVudCA9IGAke3RlbH1gO1xuICAgIGVtYWlsSW5mby50ZXh0Q29udGVudCA9IGAke2VtYWlsfWA7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQobmFtZUluZm8pO1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKHJvbGVJbmZvKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZCh0ZWxJbmZvKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChlbWFpbEluZm8pO1xuXG4gICAgcmV0dXJuIGJsb2NrO1xufVxuXG5jb25zdCBjcmVhdGVDb250YWN0T24gPSAocGFyZW50KSA9PiB7XG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBibG9jazEgPSBjcmVhdGVDb250YWN0QmxvY2soJ1BldGVyJywgJ0NoZWYnLCAnNTU1LTU1NS01NTU0JywgJ3RvdGFsbHlSZWFsRW1haWxAbm90RmFrZS5jb20nKTtcbiAgICBjb25zdCBibG9jazIgPSBjcmVhdGVDb250YWN0QmxvY2soJ0FsaWNlJywgJ01hbmFnZXInLCAnNTU1LTU1NS01NTU1JywgJ3BlcmZlY3RseVJlYWxFbWFpbEBub3RGYWtlLmNvbScpO1xuICAgIGNvbnN0IGJsb2NrMyA9IGNyZWF0ZUNvbnRhY3RCbG9jaygnQW15JywgJ1dhaXRlcicsICc1NTUtNTU1LTU1NTYnLCAndG90YWxseVJlYWxFbWFpbEBub3RGYWtlLmNvbScpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJsb2NrMSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJsb2NrMik7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJsb2NrMyk7XG59XG5cblxuZXhwb3J0IHtidWlsZEJhc2VPbiwgY3JlYXRlSG9tZU9uLCBjcmVhdGVNZW51T24sIGNyZWF0ZUNvbnRhY3RPbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2J1aWxkQmFzZU9uLCBjcmVhdGVIb21lT24sIGNyZWF0ZU1lbnVPbiwgY3JlYXRlQ29udGFjdE9ufSBmcm9tICcuL2Jhc2UuanMnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNyZWF0ZUhvbWVPbihjb250ZW50KTtcbmNyZWF0ZU1lbnVPbihjb250ZW50KTtcbmNyZWF0ZUNvbnRhY3RPbihjb250ZW50KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=