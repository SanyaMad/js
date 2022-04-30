/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_smoothScrollBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScrollBtn */ \"./src/modules/smoothScrollBtn.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_formValidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formValidate */ \"./src/modules/formValidate.js\");\n\n\n\n\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_smoothScrollBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('05 may 2022')\n;(0,_modules_formValidate__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n//# sourceURL=webpack://middle/./src/index.js?");

/***/ }),

/***/ "./src/modules/formValidate.js":
/*!*************************************!*\
  !*** ./src/modules/formValidate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formValidate = () => {\r\n    const form = document.querySelector('.form-horizontal')\r\n    const inputPhone = form.querySelector('[name=\"phone\"]')\r\n    const inputName = form.querySelector('[name=\"fio\"]')\r\n\r\n    form.addEventListener('submit', (e) =>{\r\n        e.preventDefault()\r\n        let error = false\r\n        if(inputName.value === ''){\r\n            alert('Введите имя')\r\n        }\r\n        if(/[^а-яА-Я\\-\\s]/g.test(inputName.value)){\r\n            alert('имя введено неверно')\r\n        }\r\n        if(inputPhone.value === ''){\r\n            alert('Введите телефон')\r\n        }\r\n        if(!/^\\s*(?:\\+?(\\d{1,3}))?([-. (]*(\\d{3})[-. )]*)?((\\d{3})[-. ]*(\\d{2,4})(?:[-.x ]*(\\d+))?)\\s*$/g.test(inputPhone.value)){\r\n            alert('телефон введен неверно')\r\n        }\r\n        else if(!error){\r\n            alert('Данные отправлены')\r\n        }\r\n    })\r\n} \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidate);\r\n\r\n\n\n//# sourceURL=webpack://middle/./src/modules/formValidate.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    const overlay = document.querySelector('.overlay')\n\n    const headerModalContent = document.querySelector('.header-modal')\n    const servicesModal = document.querySelector('.services-modal')\n\n    document.addEventListener('click', (e) => {\n        if (e.target.closest('.button > .fancyboxModal')) {\n            overlay.style.display = \"block\"\n            headerModalContent.style.display = \"block\"\n        } else if (e.target.closest('.header-modal__close')) {\n            overlay.style.display = \"\"\n            headerModalContent.style.display = \"\"\n        } else if (e.target.closest('.overlay')) {\n            overlay.style.display = \"\"\n            headerModalContent.style.display = \"\"\n        }\n\n        if (e.target.closest('.utp-button > .fancyboxModal')) {\n            overlay.style.display = \"block\"\n            servicesModal.style.display = \"block\"\n        }\n        \n        if (e.target.closest('.service-button > .fancyboxModal')) {\n            overlay.style.display = \"block\"\n            servicesModal.style.display = \"block\"\n        } else if (e.target.closest('.services-modal__close')) {\n            overlay.style.display = \"\"\n            servicesModal.style.display = \"\"\n        } else if (e.target.closest('.overlay')) {\n            overlay.style.display = \"\"\n            servicesModal.style.display = \"\"\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const benefitItems = document.querySelectorAll('.benefits__item')\n    const benefitsContent = document.querySelector('#benefits')\n\n    let currentSlide = 0\n\n\n    const checkForInnerWidth = () => {\n            benefitItems.forEach((benefitItem, i) => {\n                if (window.innerWidth >= 576) {\n                    if (i > 2) {\n                        benefitItem.classList.add('not-active')\n                       }\n                } else {\n                   if (i > 0) {\n                    benefitItem.classList.add('not-active')\n                   }\n                }   \n            })\n    }\n\n    checkForInnerWidth()\n    \n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass)\n    }\n\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass)\n    }\n\n    benefitsContent.addEventListener('click', (e) => {\n        \n        if (window.innerWidth >= 576) {\n            if (e.target.closest('.benefits__arrow--right')) {\n                benefitItems.forEach(benefitItem => {\n                    if (benefitItem.classList.contains('not-active')) {\n                        benefitItem.classList.remove('not-active')\n                    } else {\n                        benefitItem.classList.add('not-active')\n                    }\n                })\n            }\n            if (e.target.closest('.benefits__arrow--left')) {\n                benefitItems.forEach(benefitItem => {\n                    if (benefitItem.classList.contains('not-active')) {\n                        benefitItem.classList.remove('not-active')\n                    } else {\n                        benefitItem.classList.add('not-active')\n                    }\n                })\n            }\n        } else {\n            prevSlide(benefitItems, currentSlide, 'not-active')\n\n            if (e.target.closest('.benefits__arrow--right')) {\n                currentSlide++\n            } else if (e.target.closest('.benefits__arrow--left')) {\n                currentSlide--          \n            }\n            if (currentSlide >= benefitItems.length) {\n                currentSlide = 0\n            }\n            if (currentSlide < 0) {\n                currentSlide = benefitItems.length - 1\n            }\n    \n            nextSlide(benefitItems, currentSlide, 'not-active')\n        }   \n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://middle/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/smoothScrollBtn.js":
/*!****************************************!*\
  !*** ./src/modules/smoothScrollBtn.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScrollBtn = () => {\n    const scrollBtn = document.querySelector('.smooth-scroll')\n\n    window.addEventListener('scroll', () => {\n        if (window.pageYOffset < 600) {\n            scrollBtn.style.transition = \".3s\"\n            scrollBtn.style.opacity = \"0\"\n        } else {\n            scrollBtn.style.transition = \".3s\"\n            scrollBtn.style.opacity = \"1\"\n        }\n    })\n    \n\n    scrollBtn.addEventListener('click', (e) => {\n        e.preventDefault()\n        const anchor = document.getElementById('header')\n        anchor.scrollIntoView({block: \"start\", behavior: \"smooth\"});\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrollBtn);\n\n//# sourceURL=webpack://middle/./src/modules/smoothScrollBtn.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerDays = document.querySelector('.count-wrap > .count_1 > span')\r\n    const timerHours = document.querySelector('.count-wrap > .count_2 > span')\r\n    const timerMinutes = document.querySelector('.count-wrap > .count_3 > span')\r\n    const timerSeconds = document.querySelector('.count-wrap > .count_4 > span')\r\n\r\n    let intervalID\r\n\r\n    const getTimeRemaining = (deadline) => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n        let hours = Math.floor((timeRemaining / 60 / 60)-days*24)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return { timeRemaining, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining(deadline)\r\n        const zeroToNumber = () => {\r\n            if (getTime.days < 10) {\r\n                timerDays.textContent = '0' + getTime.days\r\n            }\r\n            if (getTime.hours < 10) {\r\n                timerHours.textContent = '0' + getTime.hours\r\n            }\r\n            if (getTime.minutes < 10) {\r\n                timerMinutes.textContent = '0' + getTime.minutes\r\n            }\r\n            if (getTime.seconds < 10) {\r\n                timerSeconds.textContent = '0' + getTime.seconds\r\n            }\r\n        }\r\n\r\n        timerDays.textContent = getTime.days\r\n        timerHours.textContent = getTime.hours\r\n        timerMinutes.textContent = getTime.minutes\r\n        timerSeconds.textContent = getTime.seconds\r\n        \r\n        zeroToNumber()\r\n\r\n        if (getTime.timeRemaining < 0) {\r\n            clearInterval(intervalID)\r\n            timerDays.textContent = '00'\r\n            timerHours.textContent = '00'\r\n            timerMinutes.textContent = '00'\r\n            timerSeconds.textContent = '00'\r\n        }\r\n        \r\n    }\r\n    intervalID = setInterval(() => {\r\n        updateClock()\r\n    }, 1000);\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle/./src/modules/timer.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;