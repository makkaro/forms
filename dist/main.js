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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar App = /** @class */ (function () {\r\n    function App(id) {\r\n        this.$root = document.getElementById(id);\r\n    }\r\n    App.prototype.render = function (template) {\r\n        this.$root.innerHTML += template;\r\n    };\r\n    return App;\r\n}());\r\nexports.App = App;\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/checkbox-field.ts":
/*!*******************************!*\
  !*** ./src/checkbox-field.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar input_field_1 = __webpack_require__(/*! ./input-field */ \"./src/input-field.ts\");\r\nvar CheckboxField = /** @class */ (function (_super) {\r\n    __extends(CheckboxField, _super);\r\n    function CheckboxField(id) {\r\n        var _this = _super.call(this, id) || this;\r\n        _this.$element.type = 'checkbox';\r\n        return _this;\r\n    }\r\n    Object.defineProperty(CheckboxField.prototype, \"value\", {\r\n        get: function () {\r\n            return this.$element.checked ? 'checked' : 'unchecked';\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    CheckboxField.create = function (id) {\r\n        return new CheckboxField(id);\r\n    };\r\n    return CheckboxField;\r\n}(input_field_1.InputField));\r\nexports.CheckboxField = CheckboxField;\r\n\n\n//# sourceURL=webpack:///./src/checkbox-field.ts?");

/***/ }),

/***/ "./src/email-field.ts":
/*!****************************!*\
  !*** ./src/email-field.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar input_field_1 = __webpack_require__(/*! ./input-field */ \"./src/input-field.ts\");\r\nvar EmailField = /** @class */ (function (_super) {\r\n    __extends(EmailField, _super);\r\n    function EmailField(id) {\r\n        var _this = _super.call(this, id) || this;\r\n        _this.$element.type = 'email';\r\n        return _this;\r\n    }\r\n    EmailField.create = function (id) {\r\n        return new EmailField(id);\r\n    };\r\n    return EmailField;\r\n}(input_field_1.InputField));\r\nexports.EmailField = EmailField;\r\n\n\n//# sourceURL=webpack:///./src/email-field.ts?");

/***/ }),

/***/ "./src/field-label.ts":
/*!****************************!*\
  !*** ./src/field-label.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar FieldLabel = /** @class */ (function () {\r\n    function FieldLabel(htmlFor, innerText) {\r\n        this.$element = document.createElement('label');\r\n        this.$element.htmlFor = htmlFor;\r\n        this.$element.innerText = innerText;\r\n    }\r\n    FieldLabel.prototype.render = function (node) {\r\n        if (node)\r\n            node.appendChild(this.$element);\r\n    };\r\n    FieldLabel.create = function (htmlFor, innerText) {\r\n        return new FieldLabel(htmlFor, innerText);\r\n    };\r\n    return FieldLabel;\r\n}());\r\nexports.FieldLabel = FieldLabel;\r\n\n\n//# sourceURL=webpack:///./src/field-label.ts?");

/***/ }),

/***/ "./src/form.ts":
/*!*********************!*\
  !*** ./src/form.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Form = /** @class */ (function () {\r\n    function Form() {\r\n        this.$element = document.createElement('form');\r\n        this.$controls = new Array();\r\n    }\r\n    Object.defineProperty(Form.prototype, \"values\", {\r\n        get: function () {\r\n            return this.$controls.map(function (control) {\r\n                return {\r\n                    id: control.id,\r\n                    value: control.value\r\n                };\r\n            });\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Form.prototype.withControls = function () {\r\n        var fields = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            fields[_i] = arguments[_i];\r\n        }\r\n        this.$controls = __spreadArrays(fields);\r\n        return this;\r\n    };\r\n    Form.prototype.onsubmit = function (callbackFn) {\r\n        var context = this;\r\n        this.$element.onsubmit = callbackFn.bind(context);\r\n        return this;\r\n    };\r\n    Form.prototype.render = function (node) {\r\n        var _this = this;\r\n        if (node) {\r\n            this.$controls.forEach(function (control) { return control.render(_this.$element); });\r\n            var btn = document.createElement('input');\r\n            btn.type = 'submit';\r\n            this.$element.appendChild(btn);\r\n            node.appendChild(this.$element);\r\n        }\r\n    };\r\n    Form.create = function () {\r\n        return new Form();\r\n    };\r\n    return Form;\r\n}());\r\nexports.Form = Form;\r\n\n\n//# sourceURL=webpack:///./src/form.ts?");

/***/ }),

/***/ "./src/input-field.ts":
/*!****************************!*\
  !*** ./src/input-field.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar field_label_1 = __webpack_require__(/*! ./field-label */ \"./src/field-label.ts\");\r\nvar InputField = /** @class */ (function () {\r\n    function InputField(id) {\r\n        this.$element = document.createElement('input');\r\n        this.$element.id = id;\r\n        this.$element.type = 'text';\r\n        this.$label = undefined;\r\n    }\r\n    Object.defineProperty(InputField.prototype, \"id\", {\r\n        get: function () {\r\n            return this.$element.id;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(InputField.prototype, \"label\", {\r\n        get: function () {\r\n            return this.$element.labels.item(0).innerText || '';\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(InputField.prototype, \"type\", {\r\n        get: function () {\r\n            return this.$element.type;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(InputField.prototype, \"value\", {\r\n        get: function () {\r\n            return this.$element.value || '';\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    InputField.prototype.withLabel = function (innerText) {\r\n        this.$label = field_label_1.FieldLabel.create(this.id, innerText);\r\n        return this;\r\n    };\r\n    InputField.prototype.render = function (node) {\r\n        if (node) {\r\n            if (this.$label)\r\n                this.$label.render(node);\r\n            node.appendChild(this.$element);\r\n        }\r\n    };\r\n    InputField.create = function (id) {\r\n        return new InputField(id);\r\n    };\r\n    return InputField;\r\n}());\r\nexports.InputField = InputField;\r\n\n\n//# sourceURL=webpack:///./src/input-field.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\r\nvar checkbox_field_1 = __webpack_require__(/*! ./checkbox-field */ \"./src/checkbox-field.ts\");\r\nvar email_field_1 = __webpack_require__(/*! ./email-field */ \"./src/email-field.ts\");\r\nvar form_1 = __webpack_require__(/*! ./form */ \"./src/form.ts\");\r\nvar input_field_1 = __webpack_require__(/*! ./input-field */ \"./src/input-field.ts\");\r\nvar select_field_1 = __webpack_require__(/*! ./select-field */ \"./src/select-field.ts\");\r\nvar text_area_field_1 = __webpack_require__(/*! ./text-area-field */ \"./src/text-area-field.ts\");\r\n(function main() {\r\n    var app = new app_1.App('app');\r\n    function displayValues(event) {\r\n        event.preventDefault();\r\n        var list = document.querySelector('#sample-values>ul');\r\n        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {\r\n            var value = _a[_i];\r\n            list.innerHTML += \"\\n                <li>\" + value.id + \": \" + value.value + \"</li>\\n            \";\r\n        }\r\n    }\r\n    var name = input_field_1.InputField\r\n        .create('name')\r\n        .withLabel('Your name...');\r\n    var lastName = input_field_1.InputField\r\n        .create('lname')\r\n        .withLabel('Your last name...');\r\n    var email = email_field_1.EmailField\r\n        .create('email')\r\n        .withLabel('Your email...');\r\n    var studies = select_field_1.SelectField\r\n        .create('studies')\r\n        .withLabel('Your preferred field of study...')\r\n        .withOptions('History', 'Computer Science', 'Mathematics', 'Hungarian Philology');\r\n    var remote = checkbox_field_1.CheckboxField\r\n        .create('remote')\r\n        .withLabel('Do you prefer studying remote...');\r\n    var remarks = text_area_field_1.TextAreaField\r\n        .create('remarks')\r\n        .withLabel('Your remarks...');\r\n    app.render(\"\\n        <div class='box' id='sample-form'>\\n        </div>\\n        <div class='box' id='sample-values'>\\n            <ul>\\n            </ul>\\n        </div>\\n    \");\r\n    form_1.Form\r\n        .create()\r\n        .withControls(name, lastName, email, studies, remote, remarks)\r\n        .onsubmit(displayValues)\r\n        .render(document.querySelector('#sample-form'));\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/select-field.ts":
/*!*****************************!*\
  !*** ./src/select-field.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar field_label_1 = __webpack_require__(/*! ./field-label */ \"./src/field-label.ts\");\r\nvar SelectField = /** @class */ (function () {\r\n    function SelectField(id) {\r\n        this.$element = document.createElement('select');\r\n        this.$element.id = id;\r\n        this.$label = undefined;\r\n    }\r\n    Object.defineProperty(SelectField.prototype, \"id\", {\r\n        get: function () {\r\n            return this.$element.id;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(SelectField.prototype, \"label\", {\r\n        get: function () {\r\n            return this.$element.labels.item(0).innerText || '';\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(SelectField.prototype, \"type\", {\r\n        get: function () {\r\n            return this.$element.tagName;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(SelectField.prototype, \"value\", {\r\n        get: function () {\r\n            return this.$element.value;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    SelectField.prototype.withLabel = function (innerText) {\r\n        this.$label = field_label_1.FieldLabel.create(this.id, innerText);\r\n        return this;\r\n    };\r\n    SelectField.prototype.withOptions = function () {\r\n        var texts = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            texts[_i] = arguments[_i];\r\n        }\r\n        for (var _a = 0, texts_1 = texts; _a < texts_1.length; _a++) {\r\n            var text = texts_1[_a];\r\n            var option = document.createElement('option');\r\n            option.text = text;\r\n            this.$element.appendChild(option);\r\n        }\r\n        return this;\r\n    };\r\n    SelectField.prototype.render = function (node) {\r\n        if (node) {\r\n            if (this.$label)\r\n                this.$label.render(node);\r\n            node.appendChild(this.$element);\r\n        }\r\n    };\r\n    SelectField.create = function (id) {\r\n        return new SelectField(id);\r\n    };\r\n    return SelectField;\r\n}());\r\nexports.SelectField = SelectField;\r\n\n\n//# sourceURL=webpack:///./src/select-field.ts?");

/***/ }),

/***/ "./src/text-area-field.ts":
/*!********************************!*\
  !*** ./src/text-area-field.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar field_label_1 = __webpack_require__(/*! ./field-label */ \"./src/field-label.ts\");\r\nvar TextAreaField = /** @class */ (function () {\r\n    function TextAreaField(id) {\r\n        this.$element = document.createElement('textarea');\r\n        this.$element.id = id;\r\n        this.$label = undefined;\r\n    }\r\n    Object.defineProperty(TextAreaField.prototype, \"id\", {\r\n        get: function () {\r\n            return this.$element.id;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(TextAreaField.prototype, \"label\", {\r\n        get: function () {\r\n            return this.$element.labels.item(0).innerText || '';\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(TextAreaField.prototype, \"type\", {\r\n        get: function () {\r\n            return this.$element.tagName;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(TextAreaField.prototype, \"value\", {\r\n        get: function () {\r\n            return this.$element.value || '';\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    TextAreaField.prototype.withLabel = function (innerText) {\r\n        this.$label = field_label_1.FieldLabel.create(this.id, innerText);\r\n        return this;\r\n    };\r\n    TextAreaField.prototype.render = function (node) {\r\n        if (node) {\r\n            if (this.$label)\r\n                this.$label.render(node);\r\n            node.appendChild(this.$element);\r\n        }\r\n    };\r\n    TextAreaField.create = function (id) {\r\n        return new TextAreaField(id);\r\n    };\r\n    return TextAreaField;\r\n}());\r\nexports.TextAreaField = TextAreaField;\r\n\n\n//# sourceURL=webpack:///./src/text-area-field.ts?");

/***/ })

/******/ });