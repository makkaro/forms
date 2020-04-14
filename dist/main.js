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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/field.ts":
/*!**********************!*\
  !*** ./src/field.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar label_1 = __webpack_require__(/*! ./label */ \"./src/label.ts\");\r\nvar wrapper_1 = __webpack_require__(/*! ./wrapper */ \"./src/wrapper.ts\");\r\nvar Field = /** @class */ (function (_super) {\r\n    __extends(Field, _super);\r\n    function Field(tagName, id) {\r\n        var _this = _super.call(this, tagName) || this;\r\n        _this.$element.id = id;\r\n        _this.$label = undefined;\r\n        return _this;\r\n    }\r\n    Object.defineProperty(Field.prototype, \"id\", {\r\n        get: function () {\r\n            return this.$element.id;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Field.prototype, \"label\", {\r\n        get: function () {\r\n            return {\r\n                set: set.bind(this),\r\n                remove: remove.bind(this)\r\n            };\r\n            function set(innerText) {\r\n                this['$label'] = new label_1.Label(this['id'], innerText);\r\n                return this;\r\n            }\r\n            function remove() {\r\n                this['$label'] = undefined;\r\n                return this;\r\n            }\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Field.prototype.render = function (node) {\r\n        if (node) {\r\n            if (this.$label)\r\n                this.$label.render(node);\r\n            node.appendChild(this.$element);\r\n        }\r\n    };\r\n    return Field;\r\n}(wrapper_1.Wrapper));\r\nexports.Field = Field;\r\n\n\n//# sourceURL=webpack:///./src/field.ts?");

/***/ }),

/***/ "./src/form.ts":
/*!*********************!*\
  !*** ./src/form.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar wrapper_1 = __webpack_require__(/*! ./wrapper */ \"./src/wrapper.ts\");\r\nvar Form = /** @class */ (function (_super) {\r\n    __extends(Form, _super);\r\n    function Form() {\r\n        return _super.call(this, \"form\" /* FORM */) || this;\r\n    }\r\n    Object.defineProperty(Form.prototype, \"controls\", {\r\n        get: function () {\r\n            return {\r\n                add: add.bind(this)\r\n            };\r\n            function add() {\r\n                var _this = this;\r\n                var controls = [];\r\n                for (var _i = 0; _i < arguments.length; _i++) {\r\n                    controls[_i] = arguments[_i];\r\n                }\r\n                controls.forEach(function (control) {\r\n                    control.render(_this['$element']);\r\n                });\r\n                return this;\r\n            }\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Form.prototype.render = function (node) {\r\n        if (node)\r\n            node.appendChild(this.$element);\r\n    };\r\n    return Form;\r\n}(wrapper_1.Wrapper));\r\nexports.Form = Form;\r\n\n\n//# sourceURL=webpack:///./src/form.ts?");

/***/ }),

/***/ "./src/input-field.ts":
/*!****************************!*\
  !*** ./src/input-field.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar field_1 = __webpack_require__(/*! ./field */ \"./src/field.ts\");\r\nvar InputField = /** @class */ (function (_super) {\r\n    __extends(InputField, _super);\r\n    function InputField(id) {\r\n        return _super.call(this, \"input\" /* INPUT */, id) || this;\r\n    }\r\n    Object.defineProperty(InputField.prototype, \"value\", {\r\n        get: function () {\r\n            return this.$element.value;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return InputField;\r\n}(field_1.Field));\r\nexports.InputField = InputField;\r\n\n\n//# sourceURL=webpack:///./src/input-field.ts?");

/***/ }),

/***/ "./src/label.ts":
/*!**********************!*\
  !*** ./src/label.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar wrapper_1 = __webpack_require__(/*! ./wrapper */ \"./src/wrapper.ts\");\r\nvar Label = /** @class */ (function (_super) {\r\n    __extends(Label, _super);\r\n    function Label(htmlFor, innerText) {\r\n        var _this = _super.call(this, \"label\" /* LABEL */) || this;\r\n        _this.$element.htmlFor = htmlFor;\r\n        _this.$element.innerText = innerText;\r\n        return _this;\r\n    }\r\n    Label.prototype.render = function (node) {\r\n        if (node)\r\n            node.appendChild(this.$element);\r\n    };\r\n    return Label;\r\n}(wrapper_1.Wrapper));\r\nexports.Label = Label;\r\n\n\n//# sourceURL=webpack:///./src/label.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar form_1 = __webpack_require__(/*! ./form */ \"./src/form.ts\");\r\nvar text_field_1 = __webpack_require__(/*! ./text-field */ \"./src/text-field.ts\");\r\nvar select_field_1 = __webpack_require__(/*! ./select-field */ \"./src/select-field.ts\");\r\n(function main() {\r\n    var form = new form_1.Form();\r\n    form.controls.add(new text_field_1.TextField('test').classList.add('test-class', 'another'), new select_field_1.SelectField('select-test').options.add('1', '2', '3', '4'));\r\n    form.render(document.getElementById('app'));\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/select-field.ts":
/*!*****************************!*\
  !*** ./src/select-field.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar field_1 = __webpack_require__(/*! ./field */ \"./src/field.ts\");\r\nvar SelectField = /** @class */ (function (_super) {\r\n    __extends(SelectField, _super);\r\n    function SelectField(id) {\r\n        return _super.call(this, \"select\" /* SELECT */, id) || this;\r\n    }\r\n    Object.defineProperty(SelectField.prototype, \"value\", {\r\n        get: function () {\r\n            return this.$element.value;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(SelectField.prototype, \"options\", {\r\n        get: function () {\r\n            return {\r\n                add: add.bind(this),\r\n            };\r\n            function add() {\r\n                var _a;\r\n                var optionsTexts = [];\r\n                for (var _i = 0; _i < arguments.length; _i++) {\r\n                    optionsTexts[_i] = arguments[_i];\r\n                }\r\n                (_a = this['$element']).append.apply(_a, optionsTexts.map(function (optionsText) {\r\n                    var option = document.createElement(\"option\" /* OPTION */);\r\n                    option.text = optionsText;\r\n                    return option;\r\n                }));\r\n                return this;\r\n            }\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return SelectField;\r\n}(field_1.Field));\r\nexports.SelectField = SelectField;\r\n\n\n//# sourceURL=webpack:///./src/select-field.ts?");

/***/ }),

/***/ "./src/text-field.ts":
/*!***************************!*\
  !*** ./src/text-field.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar input_field_1 = __webpack_require__(/*! ./input-field */ \"./src/input-field.ts\");\r\nvar TextField = /** @class */ (function (_super) {\r\n    __extends(TextField, _super);\r\n    function TextField(id) {\r\n        var _this = _super.call(this, id) || this;\r\n        _this.$element.type = \"text\" /* TEXT */;\r\n        return _this;\r\n    }\r\n    return TextField;\r\n}(input_field_1.InputField));\r\nexports.TextField = TextField;\r\n\n\n//# sourceURL=webpack:///./src/text-field.ts?");

/***/ }),

/***/ "./src/wrapper.ts":
/*!************************!*\
  !*** ./src/wrapper.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Wrapper = /** @class */ (function () {\r\n    function Wrapper(tagName) {\r\n        this.$element = document.createElement(tagName);\r\n    }\r\n    Object.defineProperty(Wrapper.prototype, \"classList\", {\r\n        get: function () {\r\n            return {\r\n                add: add.bind(this),\r\n                remove: remove.bind(this)\r\n            };\r\n            function add() {\r\n                var _a;\r\n                var classes = [];\r\n                for (var _i = 0; _i < arguments.length; _i++) {\r\n                    classes[_i] = arguments[_i];\r\n                }\r\n                (_a = this['$element'].classList).add.apply(_a, classes);\r\n                return this;\r\n            }\r\n            function remove() {\r\n                var _a;\r\n                var classes = [];\r\n                for (var _i = 0; _i < arguments.length; _i++) {\r\n                    classes[_i] = arguments[_i];\r\n                }\r\n                (_a = this['$element'].classList).remove.apply(_a, classes);\r\n            }\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return Wrapper;\r\n}());\r\nexports.Wrapper = Wrapper;\r\n\n\n//# sourceURL=webpack:///./src/wrapper.ts?");

/***/ })

/******/ });