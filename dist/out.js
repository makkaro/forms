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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst checkbox_field_1 = __webpack_require__(/*! ./fields/checkbox-field */ \"./src/fields/checkbox-field.ts\");\r\nconst date_field_1 = __webpack_require__(/*! ./fields/date-field */ \"./src/fields/date-field.ts\");\r\nconst email_field_1 = __webpack_require__(/*! ./fields/email-field */ \"./src/fields/email-field.ts\");\r\nconst select_field_1 = __webpack_require__(/*! ./fields/select-field */ \"./src/fields/select-field.ts\");\r\nconst text_field_1 = __webpack_require__(/*! ./fields/text-field */ \"./src/fields/text-field.ts\");\r\nconst textarea_field_1 = __webpack_require__(/*! ./fields/textarea-field */ \"./src/fields/textarea-field.ts\");\r\nclass App {\r\n    static getDefaultRenderingContext() {\r\n        return document.getElementById('content');\r\n    }\r\n    static getFieldsFromJsonObjects(jsonObjects, document = null) {\r\n        return jsonObjects.map(object => {\r\n            const { type, label, id, value, placeholder, options } = object;\r\n            switch (type) {\r\n                case \"checkbox\" /* CHECKBOX */:\r\n                    return new checkbox_field_1.CheckboxField(label, document[id] || value);\r\n                case \"date\" /* DATE */:\r\n                    return new date_field_1.DateField(label, document[id] || value, placeholder);\r\n                case \"email\" /* EMAIL */:\r\n                    return new email_field_1.EmailField(label, document[id] || value, placeholder);\r\n                case \"select\" /* SELECT */:\r\n                    return new select_field_1.SelectField(label, document[id] || value, ...options);\r\n                case \"text\" /* TEXT */:\r\n                    return new text_field_1.TextField(label, document[id] || value, placeholder);\r\n                case \"textarea\" /* TEXTAREA */:\r\n                    return new textarea_field_1.TextAreaField(label, document[id] || value);\r\n            }\r\n        });\r\n    }\r\n    static getFieldType(type) {\r\n        switch (type) {\r\n            case \"checkbox\" /* CHECKBOX */:\r\n                return checkbox_field_1.CheckboxField;\r\n            case \"date\" /* DATE */:\r\n                return date_field_1.DateField;\r\n            case \"email\" /* EMAIL */:\r\n                return email_field_1.EmailField;\r\n            case \"select\" /* SELECT */:\r\n                return select_field_1.SelectField;\r\n            case \"text\" /* TEXT */:\r\n                return text_field_1.TextField;\r\n            case \"textarea\" /* TEXTAREA */:\r\n                return textarea_field_1.TextAreaField;\r\n        }\r\n    }\r\n}\r\nexports.App = App;\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/fields/checkbox-field.ts":
/*!**************************************!*\
  !*** ./src/fields/checkbox-field.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst text_field_1 = __webpack_require__(/*! ./text-field */ \"./src/fields/text-field.ts\");\r\nclass CheckboxField extends text_field_1.TextField {\r\n    constructor(label = null, value = false) {\r\n        super(label);\r\n        this.$element.type = \"checkbox\" /* CHECKBOX */;\r\n        this.$element.checked = typeof value === 'boolean'\r\n            ? value\r\n            : value === 'checked' || value === 'true';\r\n    }\r\n    get type() {\r\n        return \"checkbox\" /* CHECKBOX */;\r\n    }\r\n    getValue() {\r\n        return this.$element.checked;\r\n    }\r\n}\r\nexports.CheckboxField = CheckboxField;\r\n\n\n//# sourceURL=webpack:///./src/fields/checkbox-field.ts?");

/***/ }),

/***/ "./src/fields/date-field.ts":
/*!**********************************!*\
  !*** ./src/fields/date-field.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst text_field_1 = __webpack_require__(/*! ./text-field */ \"./src/fields/text-field.ts\");\r\nclass DateField extends text_field_1.TextField {\r\n    constructor(label = null, value = null, placeholder = null) {\r\n        super(label, value, placeholder);\r\n        this.$element.type = \"date\" /* DATE */;\r\n    }\r\n    get type() {\r\n        return \"date\" /* DATE */;\r\n    }\r\n}\r\nexports.DateField = DateField;\r\n\n\n//# sourceURL=webpack:///./src/fields/date-field.ts?");

/***/ }),

/***/ "./src/fields/email-field.ts":
/*!***********************************!*\
  !*** ./src/fields/email-field.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst text_field_1 = __webpack_require__(/*! ./text-field */ \"./src/fields/text-field.ts\");\r\nclass EmailField extends text_field_1.TextField {\r\n    constructor(label = null, value = null, placeholder = null) {\r\n        super(label, value, placeholder);\r\n        this.$element.type = \"email\" /* EMAIL */;\r\n    }\r\n    get type() {\r\n        return \"email\" /* EMAIL */;\r\n    }\r\n}\r\nexports.EmailField = EmailField;\r\n\n\n//# sourceURL=webpack:///./src/fields/email-field.ts?");

/***/ }),

/***/ "./src/fields/field-template.ts":
/*!**************************************!*\
  !*** ./src/fields/field-template.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst utilities_1 = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\r\nconst app_1 = __webpack_require__(/*! ../app */ \"./src/app.ts\");\r\nclass FieldTemplate {\r\n    constructor(tagName, label = null) {\r\n        this.$element = utilities_1.$(tagName, {\r\n            id: `${tagName}-${Date.now().toString()}`\r\n        });\r\n        if (label) {\r\n            this.$label = utilities_1.$('label', {\r\n                htmlFor: this.$element.id,\r\n                innerText: label\r\n            });\r\n        }\r\n    }\r\n    get id() {\r\n        return this.$element.id;\r\n    }\r\n    get label() {\r\n        return this.$label.innerText;\r\n    }\r\n    render(context = null) {\r\n        if (!context) {\r\n            context = app_1.App.getDefaultRenderingContext();\r\n        }\r\n        const container = utilities_1.$('div', {}, context);\r\n        container.append(this.$element, this.$label);\r\n        return this;\r\n    }\r\n}\r\nexports.FieldTemplate = FieldTemplate;\r\n\n\n//# sourceURL=webpack:///./src/fields/field-template.ts?");

/***/ }),

/***/ "./src/fields/select-field.ts":
/*!************************************!*\
  !*** ./src/fields/select-field.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst utilities_1 = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\r\nconst field_template_1 = __webpack_require__(/*! ./field-template */ \"./src/fields/field-template.ts\");\r\nclass SelectField extends field_template_1.FieldTemplate {\r\n    constructor(label = null, value = null, ...options) {\r\n        super('select', label);\r\n        options.forEach(text => {\r\n            utilities_1.$('option', {\r\n                innerText: text\r\n            }, this.$element);\r\n        });\r\n    }\r\n    get options() {\r\n        return Array.from(this.$element.options).map(option => option.innerText);\r\n    }\r\n    get type() {\r\n        return \"select\" /* SELECT */;\r\n    }\r\n    get value() {\r\n        return this.getValue();\r\n    }\r\n    getValue() {\r\n        return this.$element.value;\r\n    }\r\n}\r\nexports.SelectField = SelectField;\r\n\n\n//# sourceURL=webpack:///./src/fields/select-field.ts?");

/***/ }),

/***/ "./src/fields/text-field.ts":
/*!**********************************!*\
  !*** ./src/fields/text-field.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst field_template_1 = __webpack_require__(/*! ./field-template */ \"./src/fields/field-template.ts\");\r\nclass TextField extends field_template_1.FieldTemplate {\r\n    constructor(label = null, value = null, placeholder = null) {\r\n        super('input', label);\r\n        if (value)\r\n            this.$element.value = value;\r\n        if (placeholder)\r\n            this.$element.placeholder = placeholder;\r\n    }\r\n    get placeholder() {\r\n        return this.$element.placeholder;\r\n    }\r\n    get type() {\r\n        return \"text\" /* TEXT */;\r\n    }\r\n    get value() {\r\n        return String(this.getValue());\r\n    }\r\n    getValue() {\r\n        return this.$element.value;\r\n    }\r\n}\r\nexports.TextField = TextField;\r\n\n\n//# sourceURL=webpack:///./src/fields/text-field.ts?");

/***/ }),

/***/ "./src/fields/textarea-field.ts":
/*!**************************************!*\
  !*** ./src/fields/textarea-field.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst field_template_1 = __webpack_require__(/*! ./field-template */ \"./src/fields/field-template.ts\");\r\nclass TextAreaField extends field_template_1.FieldTemplate {\r\n    constructor(label = null, value = null) {\r\n        super('textarea', label);\r\n        if (value)\r\n            this.$element.value = value;\r\n    }\r\n    get type() {\r\n        return \"textarea\" /* TEXTAREA */;\r\n    }\r\n    get value() {\r\n        return this.getValue();\r\n    }\r\n    getValue() {\r\n        return this.$element.value;\r\n    }\r\n}\r\nexports.TextAreaField = TextAreaField;\r\n\n\n//# sourceURL=webpack:///./src/fields/textarea-field.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst document_list_1 = __webpack_require__(/*! ./views/document-list */ \"./src/views/document-list.ts\");\r\nconst form_1 = __webpack_require__(/*! ./views/form */ \"./src/views/form.ts\");\r\n(function main() {\r\n    document.addEventListener('DOMContentLoaded', event => {\r\n        const url = window.location.href;\r\n        if (url.includes('document-list')) {\r\n            new document_list_1.DocumentList().render();\r\n        }\r\n        else if (url.includes('new-form')) {\r\n            new form_1.Form().render();\r\n        }\r\n    });\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/storage/local-storage.ts":
/*!**************************************!*\
  !*** ./src/storage/local-storage.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass LocalStorage {\r\n    static load(id) {\r\n        return JSON.parse(localStorage.getItem(id));\r\n    }\r\n    static remove(id) {\r\n        localStorage.removeItem(id);\r\n    }\r\n    static getDocuments() {\r\n        return Object.keys(localStorage).filter(id => id.includes('document'));\r\n    }\r\n    static getForms() {\r\n        return Object.keys(localStorage).filter(id => id.includes('form'));\r\n    }\r\n    static saveDocument(document, id = null) {\r\n        const newId = id || `document-${String(Date.now())}`;\r\n        localStorage.setItem(newId, JSON.stringify(document));\r\n        return newId;\r\n    }\r\n    static saveForm(form, id = null) {\r\n        const newId = id || `form-${String(Date.now())}`;\r\n        localStorage.setItem(newId, JSON.stringify(form));\r\n        return newId;\r\n    }\r\n}\r\nexports.LocalStorage = LocalStorage;\r\n\n\n//# sourceURL=webpack:///./src/storage/local-storage.ts?");

/***/ }),

/***/ "./src/utilities.ts":
/*!**************************!*\
  !*** ./src/utilities.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction createElementWithAttributes(tagName, attributes = {}, context = null) {\r\n    const element = document.createElement(tagName);\r\n    Object.keys(attributes).forEach(key => {\r\n        element[key] = attributes[key];\r\n    });\r\n    if (context) {\r\n        context.append(element);\r\n    }\r\n    return element;\r\n}\r\nexports.$ = createElementWithAttributes;\r\n\n\n//# sourceURL=webpack:///./src/utilities.ts?");

/***/ }),

/***/ "./src/views/document-list.ts":
/*!************************************!*\
  !*** ./src/views/document-list.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst utilities_1 = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\r\nconst app_1 = __webpack_require__(/*! ../app */ \"./src/app.ts\");\r\nconst local_storage_1 = __webpack_require__(/*! ../storage/local-storage */ \"./src/storage/local-storage.ts\");\r\nclass DocumentList {\r\n    constructor() {\r\n        this.getDocumentList();\r\n    }\r\n    getDocument(id) {\r\n        return local_storage_1.LocalStorage.load(id);\r\n    }\r\n    getDocumentList() {\r\n        return this.$documentIdentifiers = local_storage_1.LocalStorage.getDocuments();\r\n    }\r\n    removeDocument(id) {\r\n        local_storage_1.LocalStorage.remove(id);\r\n        this.getDocumentList();\r\n        window.location.reload();\r\n    }\r\n    render(context = null) {\r\n        const table = utilities_1.$('table');\r\n        this.$documentIdentifiers.forEach(id => {\r\n            const row = utilities_1.$('tr', {}, table);\r\n            const edit = utilities_1.$('td', {}, row);\r\n            utilities_1.$('a', {\r\n                innerText: id,\r\n                href: `edit-document.html?id=${id}&formId=${this.getDocument(id).formId}`\r\n            }, edit);\r\n            const remove = utilities_1.$('td', {}, row);\r\n            utilities_1.$('a', {\r\n                innerText: 'delete',\r\n                href: '#',\r\n                onclick: () => this.removeDocument(id)\r\n            }, remove);\r\n        });\r\n        context = context || app_1.App.getDefaultRenderingContext();\r\n        context.append(table);\r\n        context.append(utilities_1.$('p', { innerText: 'chuj' }));\r\n    }\r\n}\r\nexports.DocumentList = DocumentList;\r\n\n\n//# sourceURL=webpack:///./src/views/document-list.ts?");

/***/ }),

/***/ "./src/views/form.ts":
/*!***************************!*\
  !*** ./src/views/form.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst utilities_1 = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\r\nconst app_1 = __webpack_require__(/*! ../app */ \"./src/app.ts\");\r\nconst local_storage_1 = __webpack_require__(/*! ../storage/local-storage */ \"./src/storage/local-storage.ts\");\r\nconst select_field_1 = __webpack_require__(/*! ../fields/select-field */ \"./src/fields/select-field.ts\");\r\nconst text_field_1 = __webpack_require__(/*! ../fields/text-field */ \"./src/fields/text-field.ts\");\r\nclass Form {\r\n    constructor(id = null) {\r\n        this.$id = id;\r\n        this.$fields = id\r\n            ? app_1.App.getFieldsFromJsonObjects(local_storage_1.LocalStorage.load(id))\r\n            : new Array();\r\n    }\r\n    render(context = null) {\r\n        context = context || app_1.App.getDefaultRenderingContext();\r\n        context.innerHTML = '';\r\n        const typeSelect = new select_field_1.SelectField('select type', \"text\" /* TEXT */, \"checkbox\" /* CHECKBOX */, \"date\" /* DATE */, \"email\" /* EMAIL */, \"select\" /* SELECT */, \"text\" /* TEXT */, \"textarea\" /* TEXTAREA */).render(context);\r\n        utilities_1.$('button', {\r\n            innerText: 'new field',\r\n            onclick: () => this.fieldConfig(typeSelect.value)\r\n        }, context);\r\n        const form = utilities_1.$('form', {\r\n            onsubmit: event => event.preventDefault()\r\n        }, context);\r\n        this.$fields.forEach(field => field.render(form));\r\n        utilities_1.$('button', {\r\n            innerText: 'save',\r\n            onclick: event => this.save(event)\r\n        }, context);\r\n        utilities_1.$('button', {\r\n            innerText: 'cancel',\r\n            onclick: () => window.location.href = '/index.html'\r\n        }, context);\r\n    }\r\n    fieldConfig(type, context = null) {\r\n        context = context || app_1.App.getDefaultRenderingContext();\r\n        context.innerHTML = '';\r\n        const hasArgPlaceholder = type == \"date\" /* DATE */ || type == \"email\" /* EMAIL */ || type == \"text\" /* TEXT */;\r\n        const hasArgOptions = type == \"select\" /* SELECT */;\r\n        const label = new text_field_1.TextField('label').render(context);\r\n        const value = new text_field_1.TextField('value').render(context);\r\n        if (hasArgPlaceholder) {\r\n            var placeholder = new text_field_1.TextField('placeholder').render(context);\r\n        }\r\n        if (hasArgOptions) {\r\n            var options = new text_field_1.TextField('options').render(context);\r\n        }\r\n        utilities_1.$('button', {\r\n            innerText: 'save',\r\n            onclick: () => {\r\n                const fieldType = app_1.App.getFieldType(type);\r\n                if (hasArgPlaceholder) {\r\n                    this.$fields.push(new fieldType(label.value, value.value, placeholder.value));\r\n                }\r\n                else if (hasArgOptions) {\r\n                    this.$fields.push(new fieldType(label.value, value.value, options.value.split(';')));\r\n                }\r\n                else {\r\n                    this.$fields.push(new fieldType(label.value, value.value));\r\n                }\r\n                this.render(context);\r\n            }\r\n        }, context);\r\n        utilities_1.$('button', {\r\n            innerText: 'cancel',\r\n            onclick: () => {\r\n                this.render(context);\r\n            }\r\n        }, context);\r\n    }\r\n    save(event) {\r\n        event.preventDefault();\r\n        local_storage_1.LocalStorage.saveForm(this.$fields, this.$id);\r\n        window.location.href = '/index.html';\r\n    }\r\n}\r\nexports.Form = Form;\r\n\n\n//# sourceURL=webpack:///./src/views/form.ts?");

/***/ })

/******/ });