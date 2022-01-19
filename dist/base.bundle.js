/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSztBQUNuQyw4QkFBOEIsS0FBSztBQUNuQyw2QkFBNkIsSUFBSTtBQUNqQywrQkFBK0IsTUFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9iYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgYnVpbGRCYXNlT24gPSAocGFyZW50KSA9PiB7XG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGhlYWRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdMaW5rIHJlc3RhdXJhbnQnO1xuICAgIGhlYWRJbWcuc3JjPScvc3JjL2ltZy9saW5rLnBuZyc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZEltZyk7XG59XG5cbmNvbnN0IGNyZWF0ZUhvbWVPbiA9IChwYXJlbnQpID0+IHtcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0xJTksgUkVTVEFVUkFOVCc7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9ICdMaW5rIFJlc3RhdXJhbnQgb2ZmZXJzIHRoZSBiZXN0IGZvb2QgaW4gdGhlIGFyZWEuIFlvdSBjYW4gZXhwZXJpZW5jZSBhbGwgdGhlIGRpc2hlcyB5b3UgY2FuIGZpbmQgb24gSGlsYXJ1IENvbnRpbmVudC4gSGF2ZSBhIGdvb2QgbWVhbCEnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRleHQpO1xufVxuXG5jb25zdCBjcmVhdGVNZW51QmxvY2sgPSAoZGlzaCwgaW1nU3JjKSA9PiB7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ21lbnUtYmxvY2snKTtcbiAgICBpbWcuc3JjID0gYCR7aW1nU3JjfWA7XG4gICAgZGlzaE5hbWUudGV4dENvbnRlbnQgPSBgJHtkaXNofWA7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChkaXNoTmFtZSk7XG4gICAgcmV0dXJuIGJsb2NrO1xufVxuXG5jb25zdCBjcmVhdGVNZW51T24gPSAocGFyZW50KSA9PiB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJsb2NrMSA9IGNyZWF0ZU1lbnVCbG9jaygnTWVhdCBTa2V3ZXInLCAnL3NyYy9pbWcvTWVhdC1za2V3ZXIucG5nJyk7XG4gICAgY29uc3QgYmxvY2syID0gY3JlYXRlTWVudUJsb2NrKCdQcmltZSBQb3VsdHJ5IEN1cnJ5JywgJy9zcmMvaW1nL1ByaW1lLXBvdWx0cnktY3VycnkucG5nJyk7XG4gICAgY29uc3QgYmxvY2szID0gY3JlYXRlTWVudUJsb2NrKCdQcmltZSBNZWF0IGFuZCBTZWFmb29kIEZyeScsICcvc3JjL2ltZy9QcmltZS1tZWF0LWFuZC1zZWFmb29kLWZyeS5wbmcnKTtcblxuICAgIG1lbnUudGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChibG9jazEpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChibG9jazIpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChibG9jazMpO1xufVxuXG5jb25zdCBjcmVhdGVDb250YWN0QmxvY2sgPSAobmFtZSwgcm9sZSwgdGVsLCBlbWFpbCkgPT4ge1xuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmFtZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByb2xlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRlbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbWFpbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJsb2NrJyk7XG4gICAgbmFtZUluZm8uY2xhc3NMaXN0LmFkZCgnbmFtZS1pbmZvJyk7XG4gICAgcm9sZUluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgIHRlbEluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgIGVtYWlsSW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgbmFtZUluZm8udGV4dENvbnRlbnQgPSBgJHtuYW1lfWA7XG4gICAgcm9sZUluZm8udGV4dENvbnRlbnQgPSBgJHtyb2xlfWA7XG4gICAgdGVsSW5mby50ZXh0Q29udGVudCA9IGAke3RlbH1gO1xuICAgIGVtYWlsSW5mby50ZXh0Q29udGVudCA9IGAke2VtYWlsfWA7XG4gICAgYmxvY2suYXBwZW5kQ2hpbGQobmFtZUluZm8pO1xuICAgIGJsb2NrLmFwcGVuZENoaWxkKHJvbGVJbmZvKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZCh0ZWxJbmZvKTtcbiAgICBibG9jay5hcHBlbmRDaGlsZChlbWFpbEluZm8pO1xuXG4gICAgcmV0dXJuIGJsb2NrO1xufVxuXG5jb25zdCBjcmVhdGVDb250YWN0T24gPSAocGFyZW50KSA9PiB7XG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBibG9jazEgPSBjcmVhdGVDb250YWN0QmxvY2soJ1BldGVyJywgJ0NoZWYnLCAnNTU1LTU1NS01NTU0JywgJ3RvdGFsbHlSZWFsRW1haWxAbm90RmFrZS5jb20nKTtcbiAgICBjb25zdCBibG9jazIgPSBjcmVhdGVDb250YWN0QmxvY2soJ0FsaWNlJywgJ01hbmFnZXInLCAnNTU1LTU1NS01NTU1JywgJ3BlcmZlY3RseVJlYWxFbWFpbEBub3RGYWtlLmNvbScpO1xuICAgIGNvbnN0IGJsb2NrMyA9IGNyZWF0ZUNvbnRhY3RCbG9jaygnQW15JywgJ1dhaXRlcicsICc1NTUtNTU1LTU1NTYnLCAndG90YWxseVJlYWxFbWFpbEBub3RGYWtlLmNvbScpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJsb2NrMSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJsb2NrMik7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJsb2NrMyk7XG59XG5cblxuZXhwb3J0IHtidWlsZEJhc2VPbiwgY3JlYXRlSG9tZU9uLCBjcmVhdGVNZW51T24sIGNyZWF0ZUNvbnRhY3RPbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9