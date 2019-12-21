(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\n\n  <header>\n    <h1 class=\"main-header\">Founder Design</h1>\n  </header>\n\n  <main>\n    <h2 class=\"main-sub\">Let's sort out the colour text</h2>\n    <p class=\"main-par\">Below are the recommended primary colours for your logo. Please select one</p>\n    <div class=\"main-container--wrap\">\n      <div class=\"main-container\" *ngFor=\"let item of data\" [ngClass]=\"item.type\" (click)=\"selectedType=item.type\" [style.border]=\"selectedType===item.type?'2px solid black':'2px solid #c1e3fd'\">\n        <div class=\"main-colours\">\n          <div class=\"colours-wrap\">\n            <p class=\"colour-a\"></p>\n            <p class=\"colour-b\"></p>\n            <p class=\"colour-c\"></p>\n            <p class=\"colour-d\"></p>\n          </div>\n          <p class=\"main-parag\">Depth, stability, trust, loyalty, wisdom, confidence, intelligence, faith, truth, and heaven.</p>\n        </div>\n      </div>\n    </div>\n    <button type=\"button\" class=\"button-general\" [disabled]=\"!selectedType\">NEXT</button>\n  </main>\n\n  <footer>\n    <h1 class=\"head-bottom\">\"It's better to make something that 100 people love than something that 1,000 like\"</h1>\n    <p class=\"author\">- Paul Graham</p>\n  </footer>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-wrapper {\n  max-width: 1600px;\n  min-width: 500px;\n  width: 100%;\n  margin: 0 auto;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.main-header {\n  display: block;\n  font-size: 60px;\n  color: #466ffc;\n  margin: 0;\n  min-height: 80px;\n  background: #fff;\n  line-height: 2;\n}\n\nmain {\n  background: #f5f7f9;\n  padding-bottom: 50px;\n}\n\n.main-sub {\n  font-size: 40px;\n  color: #485574;\n  margin: 0;\n  text-align: center;\n  padding: 20px 0;\n}\n\n.main-par {\n  display: block;\n  margin: 0 auto;\n  font-size: 35px;\n  color: #485574;\n  max-width: 800px;\n  line-height: 1;\n  text-align: center;\n}\n\n.main-container--wrap {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1000px;\n  justify-content: center;\n  padding: 40px 0;\n  margin: 0 auto;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  height: 191px;\n  background: #fff;\n  border-radius: 15px;\n  padding-top: 8px;\n  margin: 0 7px 30px 7px;\n  cursor: pointer;\n}\n\nbutton:disabled,\nbutton[disabled] {\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n\n.colours-wrap {\n  width: 390px;\n  height: 144px;\n  display: flex;\n  margin: 0 auto;\n}\n\n.main-parag {\n  text-align: center;\n  font-size: 16px;\n  color: #0976e5;\n  margin: 0;\n}\n\n.colour-a {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.colour-b {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.colour-c {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.colour-d {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n.a .colour-a {\n  background-color: #0d0852;\n}\n\n.a .colour-b {\n  background-color: #173877;\n}\n\n.a .colour-c {\n  background-color: #3f7de1;\n}\n\n.a .colour-d {\n  background-color: #53bcff;\n}\n\n.b .colour-a {\n  background-color: #3e014b;\n}\n\n.b .colour-b {\n  background-color: #630175;\n}\n\n.b .colour-c {\n  background-color: #8f1ed3;\n}\n\n.b .colour-d {\n  background-color: #a808fc;\n}\n\n.c .colour-a {\n  background-color: #084d15;\n}\n\n.c .colour-b {\n  background-color: #177a29;\n}\n\n.c .colour-c {\n  background-color: #43e75f;\n}\n\n.c .colour-d {\n  background-color: #4efe5d;\n}\n\n.d .colour-a {\n  background-color: #0c4d4c;\n}\n\n.d .colour-b {\n  background-color: #1e7869;\n}\n\n.d .colour-c {\n  background-color: #52e9c7;\n}\n\n.d .colour-d {\n  background-color: #68ffd8;\n}\n\n.e .colour-a {\n  background-color: #4c011d;\n}\n\n.e .colour-b {\n  background-color: #77032f;\n}\n\n.e .colour-c {\n  background-color: #e41be3;\n}\n\n.e .colour-d {\n  background-color: #f613fe;\n}\n\n.f .colour-a {\n  background-color: #4f4200;\n}\n\n.f .colour-b {\n  background-color: #7a7304;\n}\n\n.f .colour-c {\n  background-color: #f2e720;\n}\n\n.f .colour-d {\n  background-color: #f9ff3c;\n}\n\n.g .colour-a {\n  background-color: #4d1000;\n}\n\n.g .colour-b {\n  background-color: #772d00;\n}\n\n.g .colour-c {\n  background-color: #e5811b;\n}\n\n.g .colour-d {\n  background-color: #f27d0c;\n}\n\n.h .colour-a {\n  background-color: #333333;\n}\n\n.h .colour-b {\n  background-color: #797979;\n}\n\n.h .colour-c {\n  background-color: #c1c1c1;\n}\n\n.h .colour-d {\n  background-color: #e9e9e9;\n}\n\n.button-general {\n  width: 354px;\n  height: 41px;\n  color: #fff;\n  background: #6383f7;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  border-radius: 31px;\n  margin: 0 auto;\n  display: block;\n}\n\n.button-general:focus {\n  outline: none;\n}\n\n.head-bottom {\n  font-size: 30px;\n  font-weight: 800;\n  color: #656ffc;\n  margin: 0 100px 0 auto;\n  text-align: right;\n  max-width: 399px;\n}\n\n.author {\n  font-size: 28px;\n  font-weight: 500;\n  color: #656ffc;\n  margin: 10px 100px 0 auto;\n  text-align: right;\n}\n\nfooter {\n  background: #f5f7f9;\n  padding-bottom: 50px;\n}\n\n/* Responsive Styles */\n\n@media screen and (max-width: 1024px) {\n  .main-header {\n    font-size: 50px;\n  }\n\n  .main-sub {\n    font-size: 36px;\n    padding: 8px 0;\n    max-width: 508px;\n    text-align: left;\n    margin: 0 auto;\n  }\n\n  .main-par {\n    font-size: 25px;\n    max-width: 508px;\n    text-align: left;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  header {\n    padding: 0 16px;\n  }\n\n  .main-header {\n    font-size: 40px;\n  }\n\n  .main-sub {\n    max-width: 397px;\n    font-size: 27px;\n    padding: 0 16px 12px 16px;\n    margin: 0 auto;\n  }\n\n  .main-par {\n    max-width: 397px;\n    font-size: 20px;\n    padding: 0 16px;\n    margin: 0 auto;\n  }\n\n  .head-bottom {\n    font-size: 27px;\n    margin: 0 30px 0 auto;\n  }\n\n  .author {\n    font-size: 25px;\n    margin: 10px 30px 0 auto;\n  }\n}\n\n@media screen and (max-width: 575px) {\n  header {\n    justify-content: left;\n  }\n\n  .main-header {\n    min-height: 0;\n    height: 70px;\n  }\n\n  .main-sub {\n    margin: 0;\n  }\n\n  .main-par {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXGZvdW5kZXJEZXNpZ24vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEREE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNLRjs7QURIQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ01GOztBREpBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNPRjs7QURMQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDUUY7O0FETkE7O0VBRUUseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNTRjs7QURQQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNVRjs7QURSQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDV0Y7O0FEVEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNZRjs7QURWQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ2FGOztBRFhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDY0Y7O0FEWkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNlRjs7QURiQTtFQUNFLHlCQUFBO0FDZ0JGOztBRGRBO0VBQ0UseUJBQUE7QUNpQkY7O0FEZkE7RUFDRSx5QkFBQTtBQ2tCRjs7QURoQkE7RUFDRSx5QkFBQTtBQ21CRjs7QURqQkE7RUFDRSx5QkFBQTtBQ29CRjs7QURsQkE7RUFDRSx5QkFBQTtBQ3FCRjs7QURuQkE7RUFDRSx5QkFBQTtBQ3NCRjs7QURwQkE7RUFDRSx5QkFBQTtBQ3VCRjs7QURyQkE7RUFDRSx5QkFBQTtBQ3dCRjs7QUR0QkE7RUFDRSx5QkFBQTtBQ3lCRjs7QUR2QkE7RUFDRSx5QkFBQTtBQzBCRjs7QUR4QkE7RUFDRSx5QkFBQTtBQzJCRjs7QUR6QkE7RUFDRSx5QkFBQTtBQzRCRjs7QUQxQkE7RUFDRSx5QkFBQTtBQzZCRjs7QUQzQkE7RUFDRSx5QkFBQTtBQzhCRjs7QUQ1QkE7RUFDRSx5QkFBQTtBQytCRjs7QUQ3QkE7RUFDRSx5QkFBQTtBQ2dDRjs7QUQ5QkE7RUFDRSx5QkFBQTtBQ2lDRjs7QUQvQkE7RUFDRSx5QkFBQTtBQ2tDRjs7QURoQ0E7RUFDRSx5QkFBQTtBQ21DRjs7QURqQ0E7RUFDRSx5QkFBQTtBQ29DRjs7QURsQ0E7RUFDRSx5QkFBQTtBQ3FDRjs7QURuQ0E7RUFDRSx5QkFBQTtBQ3NDRjs7QURwQ0E7RUFDRSx5QkFBQTtBQ3VDRjs7QURyQ0E7RUFDRSx5QkFBQTtBQ3dDRjs7QUR0Q0E7RUFDRSx5QkFBQTtBQ3lDRjs7QUR2Q0E7RUFDRSx5QkFBQTtBQzBDRjs7QUR4Q0E7RUFDRSx5QkFBQTtBQzJDRjs7QUR6Q0E7RUFDRSx5QkFBQTtBQzRDRjs7QUQxQ0E7RUFDRSx5QkFBQTtBQzZDRjs7QUQzQ0E7RUFDRSx5QkFBQTtBQzhDRjs7QUQ1Q0E7RUFDRSx5QkFBQTtBQytDRjs7QUQ3Q0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDZ0RGOztBRDlDQTtFQUNFLGFBQUE7QUNpREY7O0FEL0NBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2tERjs7QURoREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ21ERjs7QURqREE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FDb0RGOztBRGxEQSxzQkFBQTs7QUFDQTtFQUNFO0lBQ0UsZUFBQTtFQ3FERjs7RURuREE7SUFDRSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDc0RGOztFRHBEQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VDdURGO0FBQ0Y7O0FEckRBO0VBQ0U7SUFDRSxlQUFBO0VDdURGOztFRHJEQTtJQUNFLGVBQUE7RUN3REY7O0VEdERBO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0VDeURGOztFRHZEQTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VDMERGOztFRHhEQTtJQUNFLGVBQUE7SUFDQSxxQkFBQTtFQzJERjs7RUR6REE7SUFDRSxlQUFBO0lBQ0Esd0JBQUE7RUM0REY7QUFDRjs7QUR6REE7RUFDRTtJQUNFLHFCQUFBO0VDMkRGOztFRHpEQTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VDNERGOztFRDFEQTtJQUNFLFNBQUE7RUM2REY7O0VEM0RBO0lBQ0UsU0FBQTtFQzhERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4td3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWFpbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBjb2xvcjogIzQ2NmZmYztcclxuICBtYXJnaW46IDA7XHJcbiAgbWluLWhlaWdodDogODBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG59XHJcbm1haW4ge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY3Zjk7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuLm1haW4tc3ViIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6ICM0ODU1NzQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuLm1haW4tcGFyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6ICM0ODU1NzQ7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1haW4tY29udGFpbmVyLS13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTkxcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgbWFyZ2luOiAwIDdweCAzMHB4IDdweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYnV0dG9uOmRpc2FibGVkLFxyXG5idXR0b25bZGlzYWJsZWRde1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG4uY29sb3Vycy13cmFwIHtcclxuICB3aWR0aDogMzkwcHg7XHJcbiAgaGVpZ2h0OiAxNDRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5tYWluLXBhcmFnIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMDk3NmU1O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29sb3VyLWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbG91ci1iIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5jb2xvdXItYyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29sb3VyLWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmEgLmNvbG91ci1hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwODUyO1xyXG59XHJcbi5hIC5jb2xvdXItYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3Mzg3NztcclxufVxyXG4uYSAuY29sb3VyLWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjdkZTE7XHJcbn1cclxuLmEgLmNvbG91ci1kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNiY2ZmO1xyXG59XHJcbi5iIC5jb2xvdXItYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlMDE0YjtcclxufVxyXG4uYiAuY29sb3VyLWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzAxNzU7XHJcbn1cclxuLmIgLmNvbG91ci1jIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGYxZWQzO1xyXG59XHJcbi5iIC5jb2xvdXItZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4MDhmYztcclxufVxyXG4uYyAuY29sb3VyLWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODRkMTU7XHJcbn1cclxuLmMgLmNvbG91ci1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc3YTI5O1xyXG59XHJcbi5jIC5jb2xvdXItYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzZTc1ZjtcclxufVxyXG4uYyAuY29sb3VyLWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZWZlNWQ7XHJcbn1cclxuLmQgLmNvbG91ci1hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0ZDRjO1xyXG59XHJcbi5kIC5jb2xvdXItYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlNzg2OTtcclxufVxyXG4uZCAuY29sb3VyLWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmU5Yzc7XHJcbn1cclxuLmQgLmNvbG91ci1kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhmZmQ4O1xyXG59XHJcbi5lIC5jb2xvdXItYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjMDExZDtcclxufVxyXG4uZSAuY29sb3VyLWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NzAzMmY7XHJcbn1cclxuLmUgLmNvbG91ci1jIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQxYmUzO1xyXG59XHJcbi5lIC5jb2xvdXItZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2MTNmZTtcclxufVxyXG4uZiAuY29sb3VyLWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjQyMDA7XHJcbn1cclxuLmYgLmNvbG91ci1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E3MzA0O1xyXG59XHJcbi5mIC5jb2xvdXItYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZTcyMDtcclxufVxyXG4uZiAuY29sb3VyLWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZmM2M7XHJcbn1cclxuLmcgLmNvbG91ci1hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQxMDAwO1xyXG59XHJcbi5nIC5jb2xvdXItYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3MmQwMDtcclxufVxyXG4uZyAuY29sb3VyLWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTgxMWI7XHJcbn1cclxuLmcgLmNvbG91ci1kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI3ZDBjO1xyXG59XHJcbi5oIC5jb2xvdXItYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxufVxyXG4uaCAuY29sb3VyLWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTc5Nzk7XHJcbn1cclxuLmggLmNvbG91ci1jIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xyXG59XHJcbi5oIC5jb2xvdXItZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcclxufVxyXG4uYnV0dG9uLWdlbmVyYWwge1xyXG4gIHdpZHRoOiAzNTRweDtcclxuICBoZWlnaHQ6IDQxcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzYzODNmNztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzMXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5idXR0b24tZ2VuZXJhbDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uaGVhZC1ib3R0b20ge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjNjU2ZmZjO1xyXG4gIG1hcmdpbjogMCAxMDBweCAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWF4LXdpZHRoOiAzOTlweDtcclxufVxyXG4uYXV0aG9yIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzY1NmZmYztcclxuICBtYXJnaW46IDEwcHggMTAwcHggMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjdmOTtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAubWFpbi1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuICAubWFpbi1zdWIge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBtYXgtd2lkdGg6IDUwOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAubWFpbi1wYXIge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDhweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICB9XHJcbiAgLm1haW4taGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcbiAgLm1haW4tc3ViIHtcclxuICAgIG1heC13aWR0aDogMzk3cHg7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHggMTJweCAxNnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5tYWluLXBhciB7XHJcbiAgICBtYXgtd2lkdGg6IDM5N3B4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5oZWFkLWJvdHRvbSB7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBtYXJnaW46IDAgMzBweCAwIGF1dG87XHJcbiAgfVxyXG4gIC5hdXRob3Ige1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICBoZWFkZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIH1cclxuICAubWFpbi1oZWFkZXIge1xyXG4gICAgbWluLWhlaWdodDogMDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICB9XHJcbiAgLm1haW4tc3ViIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLm1haW4tcGFyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuIiwiLm1haW4td3JhcHBlciB7XG4gIG1heC13aWR0aDogMTYwMHB4O1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbi1oZWFkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA2MHB4O1xuICBjb2xvcjogIzQ2NmZmYztcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMjtcbn1cblxubWFpbiB7XG4gIGJhY2tncm91bmQ6ICNmNWY3Zjk7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4ubWFpbi1zdWIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNDg1NTc0O1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4ubWFpbi1wYXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICM0ODU1NzQ7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluLWNvbnRhaW5lci0td3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMTkxcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIG1hcmdpbjogMCA3cHggMzBweCA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmRpc2FibGVkLFxuYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuXG4uY29sb3Vycy13cmFwIHtcbiAgd2lkdGg6IDM5MHB4O1xuICBoZWlnaHQ6IDE0NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm1haW4tcGFyYWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwOTc2ZTU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbG91ci1hIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29sb3VyLWIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5jb2xvdXItYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbG91ci1kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYSAuY29sb3VyLWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQwODUyO1xufVxuXG4uYSAuY29sb3VyLWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTczODc3O1xufVxuXG4uYSAuY29sb3VyLWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3ZGUxO1xufVxuXG4uYSAuY29sb3VyLWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTNiY2ZmO1xufVxuXG4uYiAuY29sb3VyLWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UwMTRiO1xufVxuXG4uYiAuY29sb3VyLWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjMwMTc1O1xufVxuXG4uYiAuY29sb3VyLWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGYxZWQzO1xufVxuXG4uYiAuY29sb3VyLWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTgwOGZjO1xufVxuXG4uYyAuY29sb3VyLWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg0ZDE1O1xufVxuXG4uYyAuY29sb3VyLWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc3YTI5O1xufVxuXG4uYyAuY29sb3VyLWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNlNzVmO1xufVxuXG4uYyAuY29sb3VyLWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGVmZTVkO1xufVxuXG4uZCAuY29sb3VyLWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0ZDRjO1xufVxuXG4uZCAuY29sb3VyLWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU3ODY5O1xufVxuXG4uZCAuY29sb3VyLWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJlOWM3O1xufVxuXG4uZCAuY29sb3VyLWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjhmZmQ4O1xufVxuXG4uZSAuY29sb3VyLWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGMwMTFkO1xufVxuXG4uZSAuY29sb3VyLWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzcwMzJmO1xufVxuXG4uZSAuY29sb3VyLWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQxYmUzO1xufVxuXG4uZSAuY29sb3VyLWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjYxM2ZlO1xufVxuXG4uZiAuY29sb3VyLWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0MjAwO1xufVxuXG4uZiAuY29sb3VyLWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E3MzA0O1xufVxuXG4uZiAuY29sb3VyLWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJlNzIwO1xufVxuXG4uZiAuY29sb3VyLWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmZjNjO1xufVxuXG4uZyAuY29sb3VyLWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQxMDAwO1xufVxuXG4uZyAuY29sb3VyLWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzcyZDAwO1xufVxuXG4uZyAuY29sb3VyLWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU4MTFiO1xufVxuXG4uZyAuY29sb3VyLWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI3ZDBjO1xufVxuXG4uaCAuY29sb3VyLWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xufVxuXG4uaCAuY29sb3VyLWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk3OTc5O1xufVxuXG4uaCAuY29sb3VyLWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xufVxuXG4uaCAuY29sb3VyLWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xufVxuXG4uYnV0dG9uLWdlbmVyYWwge1xuICB3aWR0aDogMzU0cHg7XG4gIGhlaWdodDogNDFweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM2MzgzZjc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJ1dHRvbi1nZW5lcmFsOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmhlYWQtYm90dG9tIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzY1NmZmYztcbiAgbWFyZ2luOiAwIDEwMHB4IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1heC13aWR0aDogMzk5cHg7XG59XG5cbi5hdXRob3Ige1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNjU2ZmZjO1xuICBtYXJnaW46IDEwcHggMTAwcHggMCBhdXRvO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmOTtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1haW4taGVhZGVyIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cblxuICAubWFpbi1zdWIge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBtYXgtd2lkdGg6IDUwOHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAubWFpbi1wYXIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXgtd2lkdGg6IDUwOHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICB9XG5cbiAgLm1haW4taGVhZGVyIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cblxuICAubWFpbi1zdWIge1xuICAgIG1heC13aWR0aDogMzk3cHg7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICAgIHBhZGRpbmc6IDAgMTZweCAxMnB4IDE2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAubWFpbi1wYXIge1xuICAgIG1heC13aWR0aDogMzk3cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5oZWFkLWJvdHRvbSB7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICAgIG1hcmdpbjogMCAzMHB4IDAgYXV0bztcbiAgfVxuXG4gIC5hdXRob3Ige1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW46IDEwcHggMzBweCAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIGhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICB9XG5cbiAgLm1haW4taGVhZGVyIHtcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuXG4gIC5tYWluLXN1YiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLm1haW4tcGFyIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'founderDesign';
        this.data = [{ type: "a" }, { type: "b" }, { type: "c" }, { type: "d" }, { type: "e" }, { type: "f" }, { type: "g" }, { type: "h" }];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Documents\founderDesign\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);