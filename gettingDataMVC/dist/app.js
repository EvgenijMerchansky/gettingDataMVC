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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(1);\n\n\n\n\nconst controller = {\n    model: __WEBPACK_IMPORTED_MODULE_0__model__[\"a\" /* default */],\n    view: __WEBPACK_IMPORTED_MODULE_1__view__[\"a\" /* default */],\n    _aliasAPI: `https://jsonplaceholder.typicode.com/`,\n    requestsArray: __WEBPACK_IMPORTED_MODULE_2__helpers__[\"a\" /* requestsArray */],\n    addListeners: (() => this.view)(),\n\n    getData: (data) => {\n\n        let textData = data.textContent.toLocaleLowerCase(),\n            index = __WEBPACK_IMPORTED_MODULE_2__helpers__[\"a\" /* requestsArray */].findIndex(elem => elem === textData);\n\n        if (index <= -1) return;\n\n        (async () => {\n            try {\n                let requset = await fetch(`${controller._aliasAPI}${__WEBPACK_IMPORTED_MODULE_2__helpers__[\"a\" /* requestsArray */][index]}`, {\n                    method: `GET`\n                }),\n                    response = await requset.json();\n                    controller.model.updateState(response, __WEBPACK_IMPORTED_MODULE_2__helpers__[\"a\" /* requestsArray */][index]);\n                    controller.view.renderData(response);\n                    controller.model.deleteFromState(response, __WEBPACK_IMPORTED_MODULE_2__helpers__[\"a\" /* requestsArray */][index]);\n                    console.log(__WEBPACK_IMPORTED_MODULE_0__model__[\"a\" /* default */].state, 'STATE');\n            } catch (err) {\n                if(err) throw new Error(err);\n            }\n        })();\n    },\n};\n\nlet container = document.querySelector('.data-render-list');\nconsole.dir(container);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (controller);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL2luZGV4LmpzPzZlNzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZGVsIGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB2aWV3IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgcmVxdWVzdHNBcnJheSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5jb25zdCBjb250cm9sbGVyID0ge1xuICAgIG1vZGVsLFxuICAgIHZpZXcsXG4gICAgX2FsaWFzQVBJOiBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2AsXG4gICAgcmVxdWVzdHNBcnJheSxcbiAgICBhZGRMaXN0ZW5lcnM6ICgoKSA9PiB0aGlzLnZpZXcpKCksXG5cbiAgICBnZXREYXRhOiAoZGF0YSkgPT4ge1xuXG4gICAgICAgIGxldCB0ZXh0RGF0YSA9IGRhdGEudGV4dENvbnRlbnQudG9Mb2NhbGVMb3dlckNhc2UoKSxcbiAgICAgICAgICAgIGluZGV4ID0gcmVxdWVzdHNBcnJheS5maW5kSW5kZXgoZWxlbSA9PiBlbGVtID09PSB0ZXh0RGF0YSk7XG5cbiAgICAgICAgaWYgKGluZGV4IDw9IC0xKSByZXR1cm47XG5cbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlcXVzZXQgPSBhd2FpdCBmZXRjaChgJHtjb250cm9sbGVyLl9hbGlhc0FQSX0ke3JlcXVlc3RzQXJyYXlbaW5kZXhdfWAsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBgR0VUYFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHJlcXVzZXQuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLm1vZGVsLnVwZGF0ZVN0YXRlKHJlc3BvbnNlLCByZXF1ZXN0c0FycmF5W2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIudmlldy5yZW5kZXJEYXRhKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5tb2RlbC5kZWxldGVGcm9tU3RhdGUocmVzcG9uc2UsIHJlcXVlc3RzQXJyYXlbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9kZWwuc3RhdGUsICdTVEFURScpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9LFxufTtcblxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLXJlbmRlci1saXN0Jyk7XG5jb25zb2xlLmRpcihjb250YWluZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRyb2xsZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const requestsArray = [\n    \"posts\",\n    \"comments\",\n    \"albums\",\n    \"photos\",\n    \"todos\",\n    \"users\"\n];\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = requestsArray;\n\n\nconst createElement = (data, args, ...children) => {\n    const parentElement = document.createElement(args['type']);\n\n    data.forEach(elem => {\n        let listItem = document.createElement('li'),\n            title = document.createElement(children[0].typeTitle),\n            subTitle = document.createElement(children[0].typeText),\n            typeImage = document.createElement(children[0].typeImage);\n\n        title.textContent = elem.name ? elem.name : elem.title;\n        subTitle.textContent = elem.email ? elem.email : elem.body;\n        typeImage.src = elem.thumbnailUrl ? elem.thumbnailUrl : '';\n\n        listItem.insertBefore(title, null);\n        listItem.appendChild(subTitle);\n        elem.thumbnailUrl ? listItem.appendChild(typeImage) : null;\n\n        parentElement.insertBefore(listItem, null);\n    });\n\n    return parentElement;\n};\n/* harmony export (immutable) */ __webpack_exports__[\"b\"] = createElement;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2luZGV4LmpzPzM4NWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlcXVlc3RzQXJyYXkgPSBbXG4gICAgXCJwb3N0c1wiLFxuICAgIFwiY29tbWVudHNcIixcbiAgICBcImFsYnVtc1wiLFxuICAgIFwicGhvdG9zXCIsXG4gICAgXCJ0b2Rvc1wiLFxuICAgIFwidXNlcnNcIlxuXTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZGF0YSwgYXJncywgLi4uY2hpbGRyZW4pID0+IHtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmdzWyd0eXBlJ10pO1xuXG4gICAgZGF0YS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpLFxuICAgICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNoaWxkcmVuWzBdLnR5cGVUaXRsZSksXG4gICAgICAgICAgICBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY2hpbGRyZW5bMF0udHlwZVRleHQpLFxuICAgICAgICAgICAgdHlwZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjaGlsZHJlblswXS50eXBlSW1hZ2UpO1xuXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gZWxlbS5uYW1lID8gZWxlbS5uYW1lIDogZWxlbS50aXRsZTtcbiAgICAgICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBlbGVtLmVtYWlsID8gZWxlbS5lbWFpbCA6IGVsZW0uYm9keTtcbiAgICAgICAgdHlwZUltYWdlLnNyYyA9IGVsZW0udGh1bWJuYWlsVXJsID8gZWxlbS50aHVtYm5haWxVcmwgOiAnJztcblxuICAgICAgICBsaXN0SXRlbS5pbnNlcnRCZWZvcmUodGl0bGUsIG51bGwpO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XG4gICAgICAgIGVsZW0udGh1bWJuYWlsVXJsID8gbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodHlwZUltYWdlKSA6IG51bGw7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUobGlzdEl0ZW0sIG51bGwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlbHBlcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller__ = __webpack_require__(0);\n\n\nconst model = {\n    state: {\n        posts: [],\n        comments: [],\n        albums: [],\n        photos: [],\n        todos: [],\n        users: []\n    },\n    controller: __WEBPACK_IMPORTED_MODULE_0__controller__[\"default\"],\n    updateState: (dataArray, currentField) => {\n        let currentList = model.state[`${currentField}`];\n\n        if (currentList.length !== 0) return;\n\n        dataArray.forEach(elem => currentList.push(elem));\n    },\n    deleteFromState: (array, currentName) => {\n\n        for (let array in model.state) {\n            if (currentName !== array) {\n                model.state[`${array}`] = [];\n            }\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (model);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbC9pbmRleC5qcz84NjI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXInO1xuXG5jb25zdCBtb2RlbCA9IHtcbiAgICBzdGF0ZToge1xuICAgICAgICBwb3N0czogW10sXG4gICAgICAgIGNvbW1lbnRzOiBbXSxcbiAgICAgICAgYWxidW1zOiBbXSxcbiAgICAgICAgcGhvdG9zOiBbXSxcbiAgICAgICAgdG9kb3M6IFtdLFxuICAgICAgICB1c2VyczogW11cbiAgICB9LFxuICAgIGNvbnRyb2xsZXIsXG4gICAgdXBkYXRlU3RhdGU6IChkYXRhQXJyYXksIGN1cnJlbnRGaWVsZCkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudExpc3QgPSBtb2RlbC5zdGF0ZVtgJHtjdXJyZW50RmllbGR9YF07XG5cbiAgICAgICAgaWYgKGN1cnJlbnRMaXN0Lmxlbmd0aCAhPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGRhdGFBcnJheS5mb3JFYWNoKGVsZW0gPT4gY3VycmVudExpc3QucHVzaChlbGVtKSk7XG4gICAgfSxcbiAgICBkZWxldGVGcm9tU3RhdGU6IChhcnJheSwgY3VycmVudE5hbWUpID0+IHtcblxuICAgICAgICBmb3IgKGxldCBhcnJheSBpbiBtb2RlbC5zdGF0ZSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnROYW1lICE9PSBhcnJheSkge1xuICAgICAgICAgICAgICAgIG1vZGVsLnN0YXRlW2Ake2FycmF5fWBdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2RlbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2RlbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(1);\n\n\n\nconst view = {\n    buttons: document.getElementsByTagName('button'),\n    addListeners: () => {\n        for (let button of view.buttons) {\n            button.addEventListener('click', () => {\n                view.tradeData(button);\n            })\n        }\n    },\n    tradeData: (data) => {\n\n        if(!data.id) {\n            data.id = Date.now();\n        }\n\n        __WEBPACK_IMPORTED_MODULE_0__controller__[\"default\"].getData(data);\n    },\n    renderData: (dataArray) => {\n        const createdLi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__[\"b\" /* createElement */])(dataArray, {type: 'ul', className: 'list-item'}, {typeTitle: 'h1', typeText: 'p', typeImage: 'img'}),\n              container = document.querySelector('.data-render-list');\n\n        console.log(container.children.length);\n        container.insertBefore(createdLi, null);\n        // container.children.length === 1 ? container.insertBefore(createdLi, null) : container.removeChild(container.children[0]);\n        // container.children.length >= 0 ?;\n\n        if (container.children.length > 1) {\n            container.removeChild(container.children[0]);\n        } else {\n            container.insertBefore(createdLi, null);\n        }\n    }\n};\nview.addListeners();\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (view);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3L2luZGV4LmpzP2EzZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcic7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmNvbnN0IHZpZXcgPSB7XG4gICAgYnV0dG9uczogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpLFxuICAgIGFkZExpc3RlbmVyczogKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBidXR0b24gb2Ygdmlldy5idXR0b25zKSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmlldy50cmFkZURhdGEoYnV0dG9uKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRyYWRlRGF0YTogKGRhdGEpID0+IHtcblxuICAgICAgICBpZighZGF0YS5pZCkge1xuICAgICAgICAgICAgZGF0YS5pZCA9IERhdGUubm93KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250cm9sbGVyLmdldERhdGEoZGF0YSk7XG4gICAgfSxcbiAgICByZW5kZXJEYXRhOiAoZGF0YUFycmF5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRMaSA9IGNyZWF0ZUVsZW1lbnQoZGF0YUFycmF5LCB7dHlwZTogJ3VsJywgY2xhc3NOYW1lOiAnbGlzdC1pdGVtJ30sIHt0eXBlVGl0bGU6ICdoMScsIHR5cGVUZXh0OiAncCcsIHR5cGVJbWFnZTogJ2ltZyd9KSxcbiAgICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGEtcmVuZGVyLWxpc3QnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVkTGksIG51bGwpO1xuICAgICAgICAvLyBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID09PSAxID8gY29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVkTGksIG51bGwpIDogY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5jaGlsZHJlblswXSk7XG4gICAgICAgIC8vIGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPj0gMCA/O1xuXG4gICAgICAgIGlmIChjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5jaGlsZHJlblswXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZWRMaSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xudmlldy5hZGRMaXN0ZW5lcnMoKTtcblxuZXhwb3J0IGRlZmF1bHQgdmlldztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);