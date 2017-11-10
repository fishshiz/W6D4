/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Router = __webpack_require__(1);

document.addEventListener("DOMContentLoaded", function(event) {

  let sidebar = document.querySelector(".sidebar-nav");
  
  sidebar.addEventListener("click", function(e) {
    let newLocation = e.target.innerText.toLowerCase();
    window.location.hash = newLocation;
  });
  
  let addContentHere = document.querySelector('.content');
  let routeThings = new Router(addContentHere);
  
  routeThings.start();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Router{
  constructor(node){
    this.node = node;
    this.render = this.render.bind(this);
  }
  
  start(){
    this.render();
    window.addEventListener("hashchange", this.render);
  }
  
  render(){
    this.node.innerHTML = "";
    let content = this.activeRoute();
    let newNode = document.createElement('p');
    newNode.innerHTML = content;
    this.node.appendChild(newNode);
  }
  
  activeRoute(){
    let activeLocation = window.location.hash;
    return activeLocation.slice(1);
  }
}

module.exports = Router;

/***/ })
/******/ ]);