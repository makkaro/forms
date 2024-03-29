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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst checkbox_field_1 = __webpack_require__(/*! ./fields/checkbox-field */ \"./src/fields/checkbox-field.ts\");\r\nconst date_field_1 = __webpack_require__(/*! ./fields/date-field */ \"./src/fields/date-field.ts\");\r\nconst email_field_1 = __webpack_require__(/*! ./fields/email-field */ \"./src/fields/email-field.ts\");\r\nconst select_field_1 = __webpack_require__(/*! ./fields/select-field */ \"./src/fields/select-field.ts\");\r\nconst text_field_1 = __webpack_require__(/*! ./fields/text-field */ \"./src/fields/text-field.ts\");\r\nconst textarea_field_1 = __webpack_require__(/*! ./fields/textarea-field */ \"./src/fields/textarea-field.ts\");\r\nclass App {\r\n    static getDefaultRenderingContext() {\r\n        return document.getElementById('content');\r\n    }\r\n    static getFieldConstructor(type) {\r\n        switch (type) {\r\n            case \"checkbox\" /* CHECKBOX */:\r\n                return checkbox_field_1.CheckboxField;\r\n            case \"date\" /* DATE */:\r\n                return date_field_1.DateField;\r\n            case \"email\" /* EMAIL */:\r\n                return email_field_1.EmailField;\r\n            case \"select\" /* SELECT */:\r\n                return select_field_1.SelectField;\r\n            case \"text\" /* TEXT */:\r\n                return text_field_1.TextField;\r\n            case \"textarea\" /* TEXTAREA */:\r\n                return textarea_field_1.TextAreaField;\r\n        }\r\n    }\r\n    static getFieldsFromJsonObjects(objects, document = null) {\r\n        const values = document ? document['values'] : null;\r\n        return objects.map(object => {\r\n            const { label, type, value, placeholder, options } = object;\r\n            const fieldConstructor = this.getFieldConstructor(type);\r\n            const newValue = values ? values.shift() : value;\r\n            const args = [label, newValue];\r\n            if (this.hasArgOptions(type))\r\n                args.push(...options);\r\n            if (this.hasArgPlaceholder(type))\r\n                args.push(placeholder);\r\n            return new fieldConstructor(...args);\r\n        });\r\n    }\r\n    static hasArgOptions(type) {\r\n        return type == \"select\" /* SELECT */;\r\n    }\r\n    static hasArgPlaceholder(type) {\r\n        return type == \"email\" /* EMAIL */ || type == \"text\" /* TEXT */;\r\n    }\r\n}\r\nexports.App = App;\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/fields/checkbox-field.ts":
/*!**************************************!*\
  !*** ./src/fields/checkbox-field.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst text_field_1 = __webpack_require__(/*! ./text-field */ \"./src/fields/text-field.ts\");\r\nclass CheckboxField extends text_field_1.TextField {\r\n    constructor(label = null, value = false) {\r\n        super(label);\r\n        this.$element.type = \"checkbox\" /* CHECKBOX */;\r\n        this.$element.checked = typeof value === 'boolean'\r\n            ? value\r\n            : value === 'checked' || value === 'true';\r\n    }\r\n    get type() {\r\n        return \"checkbox\" /* CHECKBOX */;\r\n    }\r\n    get value() {\r\n        return String(this.$element.checked);\r\n    }\r\n}\r\nexports.CheckboxField = CheckboxField;\r\n\n\n//# sourceURL=webpack:///./src/fields/checkbox-field.ts?");

/***/ }),

/***/ "./src/fields/date-field.ts":
/*!**********************************!*\
  !*** ./src/fields/date-field.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst text_field_1 = __webpack_require__(/*! ./text-field */ \"./src/fields/text-field.ts\");\r\nclass DateField extends text_field_1.TextField {\r\n    constructor(label = null, value = null) {\r\n        super(label, value);\r\n        this.$element.type = \"date\" /* DATE */;\r\n    }\r\n    get type() {\r\n        return \"date\" /* DATE */;\r\n    }\r\n}\r\nexports.DateField = DateField;\r\n\n\n//# sourceURL=webpack:///./src/fields/date-field.ts?");

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst utilities_1 = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\r\nconst app_1 = __webpack_require__(/*! ../app */ \"./src/app.ts\");\r\nclass FieldTemplate {\r\n    constructor(tagName, label = null) {\r\n        this.$element = utilities_1.$(tagName, {\r\n            id: `${tagName}-${String(Date.now())}`\r\n        });\r\n        if (!label)\r\n            return;\r\n        this.$label = utilities_1.$('label', {\r\n            htmlFor: this.$element.id,\r\n            innerText: label\r\n        });\r\n    }\r\n    get id() {\r\n        return this.$element.id;\r\n    }\r\n    get label() {\r\n        return this.$label.innerText;\r\n    }\r\n    getValue() {\r\n        return {\r\n            id: this.id,\r\n            label: this.label,\r\n            type: this.type,\r\n            value: this.value\r\n        };\r\n    }\r\n    render(context = null) {\r\n        context = context || app_1.App.getDefaultRenderingContext();\r\n        const container = utilities_1.$('div');\r\n        container.append(this.$element, this.$label);\r\n        context.append(container);\r\n        return this;\r\n    }\r\n}\r\nexports.FieldTemplate = FieldTemplate;\r\n\n\n//# sourceURL=webpack:///./src/fields/field-template.ts?");

/***/ }),

/***/ "./src/fields/select-field.ts":
/*!************************************!*\
  !*** ./src/fields/select-field.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst utilities_1 = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\r\nconst field_template_1 = __webpack_require__(/*! ./field-template */ \"./src/fields/field-template.ts\");\r\nclass SelectField extends field_template_1.FieldTemplate {\r\n    constructor(label = null, value = null, ...options) {\r\n        super('select', label);\r\n        options.forEach(text => {\r\n            utilities_1.$('option', {\r\n                innerText: text\r\n            }, this.$element);\r\n        });\r\n        if (value)\r\n            this.$element.selectedIndex = options.indexOf(value);\r\n    }\r\n    get type() {\r\n        return \"select\" /* SELECT */;\r\n    }\r\n    get value() {\r\n        return this.$element.value;\r\n    }\r\n    get options() {\r\n        return Array.from(this.$element.options).map(option => option.innerText);\r\n    }\r\n    getValue() {\r\n        return Object.assign(Object.assign({}, super.getValue()), { options: this.options });\r\n    }\r\n}\r\nexports.SelectField = SelectField;\r\n\n\n//# sourceURL=webpack:///./src/fields/select-field.ts?");

/***/ }),

/***/ "./src/fields/text-field.ts":
/*!**********************************!*\
  !*** ./src/fields/text-field.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst field_template_1 = __webpack_require__(/*! ./field-template */ \"./src/fields/field-template.ts\");\r\nclass TextField extends field_template_1.FieldTemplate {\r\n    constructor(label = null, value = null, placeholder = null) {\r\n        super('input', label);\r\n        if (value)\r\n            this.$element.value = value;\r\n        if (placeholder)\r\n            this.$element.placeholder = placeholder;\r\n    }\r\n    get type() {\r\n        return \"text\" /* TEXT */;\r\n    }\r\n    get value() {\r\n        return this.$element.value;\r\n    }\r\n    get placeholder() {\r\n        return this.$element.placeholder;\r\n    }\r\n    getValue() {\r\n        return Object.assign(Object.assign({}, super.getValue()), { placeholder: this.placeholder });\r\n    }\r\n}\r\nexports.TextField = TextField;\r\n\n\n//# sourceURL=webpack:///./src/fields/text-field.ts?");

/***/ }),

/***/ "./src/fields/textarea-field.ts":
/*!**************************************!*\
  !*** ./src/fields/textarea-field.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst field_template_1 = __webpack_require__(/*! ./field-template */ \"./src/fields/field-template.ts\");\r\nclass TextAreaField extends field_template_1.FieldTemplate {\r\n    constructor(label = null, value = null) {\r\n        super('textarea', label);\r\n        if (value)\r\n            this.$element.value = value;\r\n    }\r\n    get type() {\r\n        return \"textarea\" /* TEXTAREA */;\r\n    }\r\n    get value() {\r\n        return this.$element.value;\r\n    }\r\n}\r\nexports.TextAreaField = TextAreaField;\r\n\n\n//# sourceURL=webpack:///./src/fields/textarea-field.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst document_1 = __webpack_require__(/*! ./views/document */ \"./src/views/document.ts\");\r\nconst document_list_1 = __webpack_require__(/*! ./views/document-list */ \"./src/views/document-list.ts\");\r\nconst form_1 = __webpack_require__(/*! ./views/form */ \"./src/views/form.ts\");\r\nconst form_list_1 = __webpack_require__(/*! ./views/form-list */ \"./src/views/form-list.ts\");\r\nconst router_1 = __webpack_require__(/*! ./router */ \"./src/router.ts\");\r\n(function main() {\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n        const url = window.location.href;\r\n        if (url.includes('document-list')) {\r\n            new document_list_1.DocumentList().render();\r\n        }\r\n        else if (url.includes('edit-document')) {\r\n            new document_1.Document(router_1.Router.getParam('formId'), router_1.Router.getParam('id')).render();\r\n        }\r\n        else if (url.includes('form-list')) {\r\n            new form_list_1.FormList().render();\r\n        }\r\n        else if (url.includes('new-document')) {\r\n            new document_1.Document(router_1.Router.getParam('formId')).render();\r\n        }\r\n        else if (url.includes('new-form')) {\r\n            new form_1.Form().render();\r\n        }\r\n    });\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Router {\r\n    static getParam(key) {\r\n        const query = window.location.search.substr(1);\r\n        const urlParams = new URLSearchParams(query);\r\n        return urlParams.get(key);\r\n    }\r\n}\r\nexports.Router = Router;\r\n\n\n//# sourceURL=webpack:///./src/router.ts?");

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst utilities_1 = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\r\nconst app_1 = __webpack_require__(/*! ../app */ \"./src/app.ts\");\r\nconst local_storage_1 = __webpack_require__(/*! ../storage/local-storage */ \"./src/storage/local-storage.ts\");\r\nclass DocumentList {\r\n    constructor() {\r\n        this.getDocumentList();\r\n    }\r\n    render(context = null) {\r\n        const table = utilities_1.$('table');\r\n        this.$documentIdentifiers.forEach(id => {\r\n            const row = utilities_1.$('tr', {}, table);\r\n            const edit = utilities_1.$('td', {}, row);\r\n            utilities_1.$('a', {\r\n                innerText: id,\r\n                href: `edit-document.html?id=${id}&formId=${DocumentList.getDocument(id).formId}`\r\n            }, edit);\r\n            const remove = utilities_1.$('td', {}, row);\r\n            utilities_1.$('a', {\r\n                innerText: 'delete',\r\n                href: '#',\r\n                onclick: () => this.removeDocument(id)\r\n            }, remove);\r\n        });\r\n        context = context || app_1.App.getDefaultRenderingContext();\r\n        context.append(table);\r\n    }\r\n    static getDocument(id) {\r\n        return local_storage_1.LocalStorage.load(id);\r\n    }\r\n    getDocumentList() {\r\n        return this.$documentIdentifiers = local_storage_1.LocalStorage.getDocuments();\r\n    }\r\n    removeDocument(id) {\r\n        local_storage_1.LocalStorage.remove(id);\r\n        this.getDocumentList();\r\n        window.location.reload();\r\n    }\r\n}\r\nexports.DocumentList = DocumentList;\r\n\n\n//# sourceURL=webpack:///./src/views/document-list.ts?");

/***/ }),

/***/ "./src/views/document.ts":
/*!*******************************!*\
  !*** ./src/views/document.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst utilities_1 = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\r\nconst app_1 = __webpack_require__(/*! ../app */ \"./src/app.ts\");\r\nconst local_storage_1 = __webpack_require__(/*! ../storage/local-storage */ \"./src/storage/local-storage.ts\");\r\nclass Document {\r\n    constructor(formId, id = null) {\r\n        this.$formId = formId;\r\n        this.$id = id;\r\n        const template = id ? local_storage_1.LocalStorage.load(id) : null;\r\n        console.log(template);\r\n        this.$fields = app_1.App.getFieldsFromJsonObjects(local_storage_1.LocalStorage.load(formId), template);\r\n    }\r\n    getValue() {\r\n        return {\r\n            formId: this.$formId,\r\n            values: this.$fields.map(field => field.value)\r\n        };\r\n    }\r\n    render(context = null) {\r\n        context = context || app_1.App.getDefaultRenderingContext();\r\n        const form = utilities_1.$('form', {\r\n            onsubmit: event => event.preventDefault()\r\n        }, context);\r\n        this.$fields.forEach(field => field.render(form));\r\n        const nav = utilities_1.$('ul', {}, context);\r\n        const save = utilities_1.$('li', {}, nav);\r\n        utilities_1.$('a', {\r\n            innerText: 'save',\r\n            href: '#',\r\n            onclick: event => this.save(event)\r\n        }, save);\r\n        const cancel = utilities_1.$('li', {}, nav);\r\n        utilities_1.$('a', {\r\n            innerText: 'cancel',\r\n            href: '#',\r\n            onclick: () => window.location.href = 'index.html'\r\n        }, cancel);\r\n    }\r\n    save(event) {\r\n        console.log(this.getValue());\r\n        event.preventDefault();\r\n        local_storage_1.LocalStorage.saveDocument(this.getValue(), this.$id);\r\n        window.location.href = 'index.html';\r\n    }\r\n}\r\nexports.Document = Document;\r\n\n\n//# sourceURL=webpack:///./src/views/document.ts?");

/***/ }),

/***/ "./src/views/form-list.ts":
/*!********************************!*\
  !*** ./src/views/form-list.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst utilities_1 = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\r\nconst app_1 = __webpack_require__(/*! ../app */ \"./src/app.ts\");\r\nconst local_storage_1 = __webpack_require__(/*! ../storage/local-storage */ \"./src/storage/local-storage.ts\");\r\nclass FormList {\r\n    constructor() {\r\n        this.getFormList();\r\n    }\r\n    render(context = null) {\r\n        const table = utilities_1.$('table');\r\n        this.$formIdentifiers.forEach(id => {\r\n            const row = utilities_1.$('tr', {}, table);\r\n            const fill = utilities_1.$('td', {}, row);\r\n            utilities_1.$('a', {\r\n                innerText: id,\r\n                href: `new-document.html?formId=${id}`\r\n            }, fill);\r\n            const remove = utilities_1.$('td', {}, row);\r\n            utilities_1.$('a', {\r\n                innerText: 'delete',\r\n                href: '#',\r\n                onclick: () => this.removeForm(id)\r\n            }, remove);\r\n        });\r\n        context = context || app_1.App.getDefaultRenderingContext();\r\n        context.append(table);\r\n    }\r\n    static getForm(id) {\r\n        return local_storage_1.LocalStorage.load(id);\r\n    }\r\n    getFormList() {\r\n        return this.$formIdentifiers = local_storage_1.LocalStorage.getForms();\r\n    }\r\n    removeForm(id) {\r\n        local_storage_1.LocalStorage.remove(id);\r\n        this.getFormList();\r\n        window.location.reload();\r\n    }\r\n}\r\nexports.FormList = FormList;\r\n\n\n//# sourceURL=webpack:///./src/views/form-list.ts?");

/***/ }),

/***/ "./src/views/form.ts":
/*!***************************!*\
  !*** ./src/views/form.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst utilities_1 = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\r\nconst app_1 = __webpack_require__(/*! ../app */ \"./src/app.ts\");\r\nconst local_storage_1 = __webpack_require__(/*! ../storage/local-storage */ \"./src/storage/local-storage.ts\");\r\nconst select_field_1 = __webpack_require__(/*! ../fields/select-field */ \"./src/fields/select-field.ts\");\r\nconst text_field_1 = __webpack_require__(/*! ../fields/text-field */ \"./src/fields/text-field.ts\");\r\nclass Form {\r\n    constructor(id = null) {\r\n        this.$id = id;\r\n        this.$fields = id\r\n            ? app_1.App.getFieldsFromJsonObjects(local_storage_1.LocalStorage.load(id))\r\n            : new Array();\r\n    }\r\n    getValue() {\r\n        const value = new Array();\r\n        this.$fields.forEach(field => {\r\n            value.push(field.getValue());\r\n        });\r\n        return value;\r\n    }\r\n    render(context = null) {\r\n        context = context || app_1.App.getDefaultRenderingContext();\r\n        context.innerHTML = '';\r\n        const typeSelectContainer = utilities_1.$('div', {\r\n            className: 'type-select-container'\r\n        }, context);\r\n        const typeSelect = new select_field_1.SelectField('select type', \"text\" /* TEXT */, \"checkbox\" /* CHECKBOX */, \"date\" /* DATE */, \"email\" /* EMAIL */, \"select\" /* SELECT */, \"text\" /* TEXT */, \"textarea\" /* TEXTAREA */).render(typeSelectContainer);\r\n        const btnContainer = utilities_1.$('div', {\r\n            className: 'btn-container'\r\n        }, typeSelectContainer);\r\n        utilities_1.$('a', {\r\n            innerText: 'new field',\r\n            href: '#',\r\n            onclick: () => this.renderFieldConfig(typeSelect.value, context)\r\n        }, btnContainer);\r\n        const form = utilities_1.$('form', {\r\n            onsubmit: event => event.preventDefault()\r\n        }, context);\r\n        this.$fields.forEach(field => field.render(form));\r\n        const nav = utilities_1.$('ul', {}, context);\r\n        const save = utilities_1.$('li', {}, nav);\r\n        utilities_1.$('a', {\r\n            innerText: 'save',\r\n            href: '#',\r\n            onclick: event => this.save(event)\r\n        }, save);\r\n        const cancel = utilities_1.$('li', {}, nav);\r\n        utilities_1.$('a', {\r\n            innerText: 'cancel',\r\n            href: '#',\r\n            onclick: () => window.location.href = 'index.html'\r\n        }, cancel);\r\n    }\r\n    renderFieldConfig(type, context = null) {\r\n        const hasArgOptions = app_1.App.hasArgOptions(type);\r\n        const hasArgPlaceholder = app_1.App.hasArgPlaceholder(type);\r\n        context = context || app_1.App.getDefaultRenderingContext();\r\n        context.innerHTML = '';\r\n        let label, defValue, placeholder, options;\r\n        label = new text_field_1.TextField('label').render(context);\r\n        defValue = new text_field_1.TextField('value').render(context);\r\n        if (hasArgOptions)\r\n            options = new text_field_1.TextField('options', null, 'option1;option2').render(context);\r\n        if (hasArgPlaceholder)\r\n            placeholder = new text_field_1.TextField('placeholder').render(context);\r\n        const nav = utilities_1.$('ul', {}, context);\r\n        const save = utilities_1.$('li', {}, nav);\r\n        utilities_1.$('a', {\r\n            innerText: 'save',\r\n            href: '#',\r\n            onclick: () => {\r\n                const args = [label.value, defValue.value];\r\n                if (hasArgOptions)\r\n                    args.push(...options.value.split(';'));\r\n                if (hasArgPlaceholder)\r\n                    args.push(placeholder.value);\r\n                const fieldConstructor = app_1.App.getFieldConstructor(type);\r\n                this.$fields.push(new fieldConstructor(...args));\r\n                this.render(context);\r\n            }\r\n        }, save);\r\n        const cancel = utilities_1.$('li', {}, nav);\r\n        utilities_1.$('a', {\r\n            innerText: 'cancel',\r\n            href: '#',\r\n            onclick: () => {\r\n                this.render(context);\r\n            }\r\n        }, cancel);\r\n    }\r\n    save(event) {\r\n        event.preventDefault();\r\n        local_storage_1.LocalStorage.saveForm(this.getValue(), this.$id);\r\n        window.location.href = 'index.html';\r\n    }\r\n}\r\nexports.Form = Form;\r\n\n\n//# sourceURL=webpack:///./src/views/form.ts?");

/***/ })

/******/ });