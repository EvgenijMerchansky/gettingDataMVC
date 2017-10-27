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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ({

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(82);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(83);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(81);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__(64);\n\n\n\n\n\nconst controller = {\n    model: __WEBPACK_IMPORTED_MODULE_0__model__[\"a\" /* default */],\n    view: __WEBPACK_IMPORTED_MODULE_1__view__[\"a\" /* default */],\n    startBase: (() => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__base__[\"a\" /* base */])())(),\n    _aliasAPI: `https://jsonplaceholder.typicode.com/`,\n    requestsArray: __WEBPACK_IMPORTED_MODULE_3__helpers__[\"a\" /* requestsArray */],\n    addListeners: (() => __WEBPACK_IMPORTED_MODULE_1__view__[\"a\" /* default */].addListeners())(),\n\n    getData: (data) => {\n\n        let textData = data.textContent.toLocaleLowerCase(),\n            index = __WEBPACK_IMPORTED_MODULE_3__helpers__[\"a\" /* requestsArray */].findIndex(elem => elem === textData);\n\n        if (index <= -1) return;\n\n        (async () => {\n            try {\n                let requset = await fetch(`${controller._aliasAPI}${__WEBPACK_IMPORTED_MODULE_3__helpers__[\"a\" /* requestsArray */][index]}`, {\n                    method: `GET`\n                }),\n                    response = await requset.json();\n                    controller.model.updateState(response, __WEBPACK_IMPORTED_MODULE_3__helpers__[\"a\" /* requestsArray */][index]);\n                    controller.view.renderData(response);\n                    controller.model.deleteFromState(response, __WEBPACK_IMPORTED_MODULE_3__helpers__[\"a\" /* requestsArray */][index]);\n            } catch (err) {\n                if(err) throw new Error(err);\n            }\n        })();\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (controller);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9pbmRleC5qcz82ZTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2RlbCBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgdmlldyBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IHJlcXVlc3RzQXJyYXkgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgY29udHJvbGxlciA9IHtcbiAgICBtb2RlbCxcbiAgICB2aWV3LFxuICAgIHN0YXJ0QmFzZTogKCgpID0+IGJhc2UoKSkoKSxcbiAgICBfYWxpYXNBUEk6IGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vYCxcbiAgICByZXF1ZXN0c0FycmF5LFxuICAgIGFkZExpc3RlbmVyczogKCgpID0+IHZpZXcuYWRkTGlzdGVuZXJzKCkpKCksXG5cbiAgICBnZXREYXRhOiAoZGF0YSkgPT4ge1xuXG4gICAgICAgIGxldCB0ZXh0RGF0YSA9IGRhdGEudGV4dENvbnRlbnQudG9Mb2NhbGVMb3dlckNhc2UoKSxcbiAgICAgICAgICAgIGluZGV4ID0gcmVxdWVzdHNBcnJheS5maW5kSW5kZXgoZWxlbSA9PiBlbGVtID09PSB0ZXh0RGF0YSk7XG5cbiAgICAgICAgaWYgKGluZGV4IDw9IC0xKSByZXR1cm47XG5cbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlcXVzZXQgPSBhd2FpdCBmZXRjaChgJHtjb250cm9sbGVyLl9hbGlhc0FQSX0ke3JlcXVlc3RzQXJyYXlbaW5kZXhdfWAsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBgR0VUYFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHJlcXVzZXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLm1vZGVsLnVwZGF0ZVN0YXRlKHJlc3BvbnNlLCByZXF1ZXN0c0FycmF5W2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIudmlldy5yZW5kZXJEYXRhKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5tb2RlbC5kZWxldGVGcm9tU3RhdGUocmVzcG9uc2UsIHJlcXVlc3RzQXJyYXlbaW5kZXhdKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmKGVycikgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udHJvbGxlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///63\n");

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const requestsArray = [\n    \"posts\",\n    \"comments\",\n    \"albums\",\n    \"photos\",\n    \"todos\",\n    \"users\"\n];\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = requestsArray;\n\n\n\nconst createElement = (data, args, ...children) => {\n    const parentElement = document.createElement(args['type']);\n\n    data.forEach(elem => {\n        let listItem = document.createElement('li'),\n            title = document.createElement(children[0].typeTitle),\n            subTitle = document.createElement(children[0].typeText),\n            typeImage = document.createElement(children[0].typeImage);\n\n        title.textContent = elem.name ? elem.name : elem.title;\n        subTitle.textContent = elem.email ? elem.email : elem.body;\n        typeImage.src = elem.thumbnailUrl ? elem.thumbnailUrl : '';\n\n        listItem.insertBefore(title, null);\n        listItem.appendChild(subTitle);\n        elem.thumbnailUrl ? listItem.appendChild(typeImage) : null;\n\n        parentElement.insertBefore(listItem, null);\n    });\n\n    return parentElement;\n};\n/* harmony export (immutable) */ __webpack_exports__[\"b\"] = createElement;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9pbmRleC5qcz8zODVmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZXF1ZXN0c0FycmF5ID0gW1xuICAgIFwicG9zdHNcIixcbiAgICBcImNvbW1lbnRzXCIsXG4gICAgXCJhbGJ1bXNcIixcbiAgICBcInBob3Rvc1wiLFxuICAgIFwidG9kb3NcIixcbiAgICBcInVzZXJzXCJcbl07XG5cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZGF0YSwgYXJncywgLi4uY2hpbGRyZW4pID0+IHtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmdzWyd0eXBlJ10pO1xuXG4gICAgZGF0YS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpLFxuICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNoaWxkcmVuWzBdLnR5cGVUaXRsZSksXG4gICAgICAgICAgICBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY2hpbGRyZW5bMF0udHlwZVRleHQpLFxuICAgICAgICAgICAgdHlwZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjaGlsZHJlblswXS50eXBlSW1hZ2UpO1xuXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gZWxlbS5uYW1lID8gZWxlbS5uYW1lIDogZWxlbS50aXRsZTtcbiAgICAgICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBlbGVtLmVtYWlsID8gZWxlbS5lbWFpbCA6IGVsZW0uYm9keTtcbiAgICAgICAgdHlwZUltYWdlLnNyYyA9IGVsZW0udGh1bWJuYWlsVXJsID8gZWxlbS50aHVtYm5haWxVcmwgOiAnJztcblxuICAgICAgICBsaXN0SXRlbS5pbnNlcnRCZWZvcmUodGl0bGUsIG51bGwpO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XG4gICAgICAgIGVsZW0udGh1bWJuYWlsVXJsID8gbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodHlwZUltYWdlKSA6IG51bGw7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUobGlzdEl0ZW0sIG51bGwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlbHBlcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///64\n");

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const base = () => {\n    // console.log(client);\n    // mongoose.connect('mongodb://localhost/azure', { useMongoClient: true });\n    // mongoose.connect('mongodb://localhost/azure');\n    // console.log(\"work\", mongoose);\n};\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = base;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9pbmRleC5qcz9kODQxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBiYXNlID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGNsaWVudCk7XG4gICAgLy8gbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC9henVyZScsIHsgdXNlTW9uZ29DbGllbnQ6IHRydWUgfSk7XG4gICAgLy8gbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC9henVyZScpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwid29ya1wiLCBtb25nb29zZSk7XG59O1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYXNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///81\n");

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller__ = __webpack_require__(63);\n\n\nconst model = {\n    state: {\n        posts: [],\n        comments: [],\n        albums: [],\n        photos: [],\n        todos: [],\n        users: []\n    },\n    controller: __WEBPACK_IMPORTED_MODULE_0__controller__[\"default\"],\n    updateState: (dataArray, currentField) => {\n        let currentList = model.state[`${currentField}`];\n\n        if (currentList.length !== 0) return;\n\n        dataArray.forEach(elem => currentList.push(elem));\n    },\n    deleteFromState: (array, currentName) => {\n\n        for (let array in model.state) {\n            if (currentName !== array) {\n                model.state[`${array}`] = [];\n            }\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (model);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaW5kZXguanM/ODYyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVyJztcblxuY29uc3QgbW9kZWwgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgICAgcG9zdHM6IFtdLFxuICAgICAgICBjb21tZW50czogW10sXG4gICAgICAgIGFsYnVtczogW10sXG4gICAgICAgIHBob3RvczogW10sXG4gICAgICAgIHRvZG9zOiBbXSxcbiAgICAgICAgdXNlcnM6IFtdXG4gICAgfSxcbiAgICBjb250cm9sbGVyLFxuICAgIHVwZGF0ZVN0YXRlOiAoZGF0YUFycmF5LCBjdXJyZW50RmllbGQpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRMaXN0ID0gbW9kZWwuc3RhdGVbYCR7Y3VycmVudEZpZWxkfWBdO1xuXG4gICAgICAgIGlmIChjdXJyZW50TGlzdC5sZW5ndGggIT09IDApIHJldHVybjtcblxuICAgICAgICBkYXRhQXJyYXkuZm9yRWFjaChlbGVtID0+IGN1cnJlbnRMaXN0LnB1c2goZWxlbSkpO1xuICAgIH0sXG4gICAgZGVsZXRlRnJvbVN0YXRlOiAoYXJyYXksIGN1cnJlbnROYW1lKSA9PiB7XG5cbiAgICAgICAgZm9yIChsZXQgYXJyYXkgaW4gbW9kZWwuc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50TmFtZSAhPT0gYXJyYXkpIHtcbiAgICAgICAgICAgICAgICBtb2RlbC5zdGF0ZVtgJHthcnJheX1gXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kZWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kZWwvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///82\n");

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller__ = __webpack_require__(63);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(64);\n\n\n\nconst view = {\n    buttons: document.getElementsByTagName('button'),\n    addListeners: () => {\n        for (let button of view.buttons) {\n            button.addEventListener('click', () => {\n                view.tradeData(button);\n            })\n        }\n    },\n    tradeData: (data) => {\n\n        if(!data.id) {\n            data.id = Date.now();\n        }\n\n        __WEBPACK_IMPORTED_MODULE_0__controller__[\"default\"].getData(data);\n    },\n    renderData: (dataArray) => {\n        const createdUl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__[\"b\" /* createElement */])(dataArray, {type: 'ul', className: 'list-item'}, {typeTitle: 'h1', typeText: 'p', typeImage: 'img'}),\n              container = document.querySelector('.data-render-list');\n\n        container.insertBefore(createdUl, null);\n\n        if (container.children.length > 1) {\n            container.removeChild(container.children[0]);\n        } else {\n            container.insertBefore(createdUl, null);\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (view);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9pbmRleC5qcz9hM2Q2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5jb25zdCB2aWV3ID0ge1xuICAgIGJ1dHRvbnM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKSxcbiAgICBhZGRMaXN0ZW5lcnM6ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgYnV0dG9uIG9mIHZpZXcuYnV0dG9ucykge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZpZXcudHJhZGVEYXRhKGJ1dHRvbik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICB0cmFkZURhdGE6IChkYXRhKSA9PiB7XG5cbiAgICAgICAgaWYoIWRhdGEuaWQpIHtcbiAgICAgICAgICAgIGRhdGEuaWQgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udHJvbGxlci5nZXREYXRhKGRhdGEpO1xuICAgIH0sXG4gICAgcmVuZGVyRGF0YTogKGRhdGFBcnJheSkgPT4ge1xuICAgICAgICBjb25zdCBjcmVhdGVkVWwgPSBjcmVhdGVFbGVtZW50KGRhdGFBcnJheSwge3R5cGU6ICd1bCcsIGNsYXNzTmFtZTogJ2xpc3QtaXRlbSd9LCB7dHlwZVRpdGxlOiAnaDEnLCB0eXBlVGV4dDogJ3AnLCB0eXBlSW1hZ2U6ICdpbWcnfSksXG4gICAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLXJlbmRlci1saXN0Jyk7XG5cbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVkVWwsIG51bGwpO1xuXG4gICAgICAgIGlmIChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5jaGlsZHJlblswXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZWRVbCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2aWV3O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXcvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///83\n");

/***/ })

/******/ });